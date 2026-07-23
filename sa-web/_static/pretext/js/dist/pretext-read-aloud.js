(() => {
  // ../../js/src/read-aloud/collector.js
  var ANNOUNCE_SELECTORS = [
    { selector: ".table-like, table", stringId: "read-aloud-skip-table" },
    {
      selector: "pre, .code-box, .program, .console, .sage, .sagecell-practice",
      stringId: "read-aloud-skip-code"
    },
    {
      selector: "iframe, audio, video, .video-box, .interactive, .jxgbox, .exercise-runestone, .runestone",
      stringId: "read-aloud-skip-interactive"
    }
  ];
  var SKIP_SELECTOR = [
    "[aria-hidden='true']",
    "[hidden]",
    ".hidden-content",
    ".autopermalink",
    "mjx-assistive-mml",
    "script",
    "style",
    "noscript",
    ".ptx-content-footer",
    ".instructions"
    // WW instructor-only material
  ].join(", ");
  var CONTAINER_SELECTOR = [
    "div.para",
    "section",
    "article",
    "ul",
    "ol",
    "dl",
    "li",
    "dt",
    "dd",
    "blockquote",
    "figure",
    "details",
    ".exercise-statement",
    ".knowl__content"
  ].join(", ");
  var HEADING_SELECTOR = "h1, h2, h3, h4, h5, h6, figcaption, caption";
  function isElementVisible(el) {
    if (typeof el.checkVisibility === "function") {
      return el.checkVisibility();
    }
    return !!(el.offsetParent || el.getClientRects().length);
  }
  function resolveMathSpeech(el, timeoutMs) {
    const direct = el.getAttribute("aria-label");
    if (direct) {
      return Promise.resolve(direct);
    }
    return new Promise((resolve) => {
      let done = false;
      const finish = (value) => {
        if (done) return;
        done = true;
        observer.disconnect();
        clearTimeout(timer);
        resolve(value);
      };
      const observer = new MutationObserver(() => {
        const label = el.getAttribute("aria-label");
        if (label) finish(label);
      });
      observer.observe(el, { attributes: true, attributeFilter: ["aria-label"] });
      const timer = setTimeout(() => {
        const mml = el.querySelector("mjx-assistive-mml math");
        const alt = mml && (mml.getAttribute("alttext") || mml.textContent.trim()) || null;
        finish(alt);
      }, timeoutMs);
    });
  }
  async function collect(root, opts = {}) {
    const strings = opts.strings || {};
    const mathTimeoutMs = opts.mathTimeoutMs || 3e3;
    const blocks = [];
    const pendingMath = [];
    let current = null;
    const flush = () => {
      if (current && current.tokens.some(isSpeakable)) {
        blocks.push(current);
      }
      current = null;
    };
    const isSpeakable = (t) => t.kind !== "text" || t.value.trim() !== "";
    const ensureBlock = (el) => {
      if (!current) {
        current = { el, tokens: [] };
      }
    };
    const visit = (node, blockEl) => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.nodeValue.trim() !== "") {
          ensureBlock(blockEl);
          current.tokens.push({ kind: "text", value: node.nodeValue, node });
        }
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      const el = node;
      if (el.matches(SKIP_SELECTOR) || !isElementVisible(el)) return;
      for (const { selector, stringId } of ANNOUNCE_SELECTORS) {
        if (el.matches(selector)) {
          flush();
          blocks.push({ el, tokens: [{ kind: "announce", stringId, el }] });
          return;
        }
      }
      if (el.tagName === "MJX-CONTAINER") {
        const display = el.getAttribute("display") === "true";
        if (display) flush();
        ensureBlock(display ? el : blockEl);
        const token = { kind: "math", speech: "", display, el };
        current.tokens.push(token);
        pendingMath.push(token);
        if (display) flush();
        return;
      }
      if (el.tagName === "IMG") {
        const alt = (el.getAttribute("alt") || "").trim();
        if (alt) {
          ensureBlock(blockEl);
          current.tokens.push({ kind: "text", value: alt, node: null, el });
        }
        return;
      }
      if (el.matches(HEADING_SELECTOR)) {
        flush();
        for (const child of el.childNodes) visit(child, el);
        flush();
        return;
      }
      if (el.matches(CONTAINER_SELECTOR)) {
        flush();
        for (const child of el.childNodes) visit(child, el);
        flush();
        return;
      }
      for (const child of el.childNodes) visit(child, blockEl);
    };
    visit(root, root);
    flush();
    await Promise.all(
      pendingMath.map(async (token) => {
        const speech = await resolveMathSpeech(token.el, mathTimeoutMs);
        token.speech = speech || strings["read-aloud-equation-fallback"] || "equation";
      })
    );
    return blocks;
  }

  // ../../js/src/read-aloud/segmenter.js
  var DEFAULT_MAX_LENGTH = 250;
  function collapseWhitespace(value) {
    let text = "";
    const map = [];
    let inSpace = false;
    for (let i = 0; i < value.length; i++) {
      if (/\s/.test(value[i])) {
        if (!inSpace && text.length > 0) {
          text += " ";
          map.push(i);
        }
        inSpace = true;
      } else {
        text += value[i];
        map.push(i);
        inSpace = false;
      }
    }
    if (text.endsWith(" ")) {
      text = text.slice(0, -1);
      map.pop();
    }
    return { text, map };
  }
  var ABBREVIATION_RE = /(?:^|\s)(?:Dr|Mr|Mrs|Ms|Prof|St|Mt|Fig|Eq|Ex|Sec|Ch|Thm|Cor|Lem|Def|Rem|Prop|vs|cf|No|Vol|pp?|ed|eds|etc|al)\.\s*$/;
  function sentenceBoundaries(text, locale) {
    let boundaries = [];
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const seg = new Intl.Segmenter(locale || void 0, { granularity: "sentence" });
      for (const s of seg.segment(text)) {
        if (s.index > 0) {
          boundaries.push(s.index);
        }
      }
    } else {
      const re = /[.!?…]["')\]]?\s+(?=["'([]?[A-Z0-9])/g;
      let m;
      while ((m = re.exec(text)) !== null) {
        boundaries.push(m.index + m[0].length);
      }
    }
    return boundaries.filter((b) => !ABBREVIATION_RE.test(text.slice(0, b)));
  }
  function needsJoinSpace(prev, next) {
    if (prev === "" || next === "") return false;
    if (/\s$/.test(prev)) return false;
    if (/^\s/.test(next)) return false;
    if (/^[.,;:!?…)\]}%]/.test(next)) return false;
    return true;
  }
  function flattenRun(run) {
    let combined = "";
    const spans = [];
    for (const { token, tokenIndex } of run) {
      let part, map = null;
      if (token.kind === "text") {
        ({ text: part, map } = collapseWhitespace(token.value));
      } else {
        ({ text: part } = collapseWhitespace(token.speech || ""));
      }
      if (part === "") continue;
      if (needsJoinSpace(combined, part)) {
        combined += " ";
      }
      spans.push({
        start: combined.length,
        end: combined.length + part.length,
        tokenIndex,
        kind: token.kind,
        map
      });
      combined += part;
    }
    return { combined, spans };
  }
  function insideMath(pos, spans) {
    return spans.some(
      (s) => s.kind === "math" && pos > s.start && pos < s.end
    );
  }
  function clampChunks(combined, spans, start, end, maxLength) {
    const chunks = [];
    let s = start;
    while (end - s > maxLength) {
      const limit = s + maxLength;
      let cut = -1;
      const clauseCut = (i) => /[,;:—–]/.test(combined[i - 1]) && combined[i] === " ";
      const spaceCut = (i) => combined[i] === " ";
      for (const acceptable of [clauseCut, spaceCut]) {
        for (let i = limit; i > s + 1; i--) {
          if (insideMath(i, spans)) continue;
          if (acceptable(i)) {
            cut = i;
            break;
          }
        }
        if (cut >= 0) break;
      }
      if (cut < 0) {
        cut = limit;
        for (const sp of spans) {
          if (sp.kind === "math" && cut > sp.start && cut < sp.end) {
            cut = sp.end;
            break;
          }
        }
      }
      chunks.push([s, cut]);
      s = cut;
    }
    chunks.push([s, end]);
    return chunks;
  }
  function makeUtterance(combined, spans, start, end, blockIndex) {
    while (start < end && /\s/.test(combined[start])) start++;
    while (end > start && /\s/.test(combined[end - 1])) end--;
    if (start >= end) return null;
    const ranges = [];
    for (const span of spans) {
      const s = Math.max(start, span.start);
      const e = Math.min(end, span.end);
      if (s >= e) continue;
      if (span.kind === "text") {
        const localStart = s - span.start;
        const localEnd = e - span.start;
        ranges.push({
          tokenIndex: span.tokenIndex,
          start: span.map[localStart],
          end: span.map[localEnd - 1] + 1
        });
      } else {
        ranges.push({ tokenIndex: span.tokenIndex });
      }
    }
    return {
      kind: "speech",
      text: combined.slice(start, end),
      blockIndex,
      ranges
    };
  }
  function buildPlan(blocks, opts = {}) {
    const locale = opts.locale;
    const maxLength = opts.maxLength || DEFAULT_MAX_LENGTH;
    const strings = opts.strings || {};
    const plan = [];
    blocks.forEach((block, blockIndex) => {
      let run = [];
      const flushRun = () => {
        if (run.length === 0) return;
        const { combined, spans } = flattenRun(run);
        run = [];
        if (combined.trim() === "") return;
        const rawBoundaries = sentenceBoundaries(combined, locale);
        const boundaries = rawBoundaries.filter((b) => !insideMath(b, spans));
        const starts = [0, ...boundaries];
        starts.forEach((s, i) => {
          const e = i + 1 < starts.length ? starts[i + 1] : combined.length;
          for (const [cs, ce] of clampChunks(combined, spans, s, e, maxLength)) {
            const utt = makeUtterance(combined, spans, cs, ce, blockIndex);
            if (utt) plan.push(utt);
          }
        });
      };
      block.tokens.forEach((token, tokenIndex) => {
        if (token.kind === "announce") {
          flushRun();
          plan.push({
            kind: "announce",
            text: strings[token.stringId] || token.stringId,
            blockIndex,
            ranges: [{ tokenIndex }]
          });
        } else {
          run.push({ token, tokenIndex });
        }
      });
      flushRun();
    });
    return plan;
  }

  // ../../js/src/read-aloud/speech-queue.js
  var SpeechQueue = class {
    /**
     * opts:
     *   synth        the SpeechSynthesis instance (injectable for testing)
     *   onUtterance  (index, planItem) fired as each utterance starts
     *   onState      (state) fired on every state change
     *   onEnded      () fired when the plan runs out naturally
     */
    constructor(opts = {}) {
      this.synth = opts.synth || window.speechSynthesis;
      this.onUtterance = opts.onUtterance || (() => {
      });
      this.onState = opts.onState || (() => {
      });
      this.onEnded = opts.onEnded || (() => {
      });
      this.plan = [];
      this.index = 0;
      this.state = "idle";
      this.voice = null;
      this.rate = 1;
      this.lang = null;
      this.generation = 0;
      this.nativePause = !/Android/i.test(navigator.userAgent);
    }
    setPlan(plan) {
      this.stop();
      this.plan = plan;
      this.index = 0;
    }
    setVoice(voice) {
      this.voice = voice;
      this._restartIfSpeaking();
    }
    setRate(rate) {
      this.rate = rate;
      this._restartIfSpeaking();
    }
    setLang(lang) {
      this.lang = lang;
    }
    _setState(state) {
      if (this.state !== state) {
        this.state = state;
        this.onState(state);
      }
    }
    _restartIfSpeaking() {
      if (this.state === "speaking") {
        this.playFrom(this.index);
      }
    }
    playFrom(index) {
      if (!this.plan.length) return;
      this.generation++;
      this.synth.cancel();
      this.index = Math.max(0, Math.min(index, this.plan.length - 1));
      this._setState("speaking");
      this._speakCurrent();
    }
    _speakCurrent() {
      const item = this.plan[this.index];
      const generation = this.generation;
      const utterance = new SpeechSynthesisUtterance(item.text);
      if (this.voice) utterance.voice = this.voice;
      if (this.lang) utterance.lang = this.lang;
      utterance.rate = this.rate;
      utterance.onstart = () => {
        if (generation !== this.generation) return;
        this.onUtterance(this.index, item);
      };
      const advance = () => {
        if (generation !== this.generation) return;
        if (this.index + 1 < this.plan.length) {
          this.index++;
          this._speakCurrent();
        } else {
          this._setState("ended");
          this.onEnded();
        }
      };
      utterance.onend = advance;
      utterance.onerror = (e) => {
        if (e.error === "canceled" || e.error === "interrupted") return;
        advance();
      };
      this.synth.speak(utterance);
    }
    pause() {
      if (this.state !== "speaking") return;
      if (this.nativePause) {
        this.synth.pause();
      } else {
        this.generation++;
        this.synth.cancel();
      }
      this._setState("paused");
    }
    resume() {
      if (this.state !== "paused") return;
      if (this.nativePause) {
        this.synth.resume();
        this._setState("speaking");
      } else {
        this.playFrom(this.index);
      }
    }
    toggle() {
      if (this.state === "speaking") {
        this.pause();
      } else if (this.state === "paused") {
        this.resume();
      } else {
        this.playFrom(this.index);
      }
    }
    stop() {
      this.generation++;
      this.synth.cancel();
      this._setState("idle");
    }
    next() {
      if (this.index + 1 < this.plan.length) {
        this.playFrom(this.index + 1);
      }
    }
    prev() {
      this.playFrom(Math.max(0, this.index - 1));
    }
    /** First plan index at or after the given block, for click-to-start. */
    indexForBlock(blockIndex) {
      for (let i = 0; i < this.plan.length; i++) {
        if (this.plan[i].blockIndex >= blockIndex) return i;
      }
      return -1;
    }
  };

  // ../../js/src/read-aloud/highlighter.js
  var HIGHLIGHT_NAME = "ptx-read-aloud";
  var MATH_CLASS = "ptx-read-aloud-current-math";
  var BLOCK_CLASS = "ptx-read-aloud-current-block";
  var Highlighter = class {
    constructor() {
      this.supportsRanges = typeof CSS !== "undefined" && "highlights" in CSS;
      this.markedElements = [];
      this.autoScroll = true;
      this.scrollSuppressed = false;
      for (const evt of ["wheel", "touchmove"]) {
        window.addEventListener(evt, () => {
          this.scrollSuppressed = true;
        }, { passive: true });
      }
    }
    /** Call from explicit player actions (play/skip/click-to-start). */
    resetScrollSuppression() {
      this.scrollSuppressed = false;
    }
    show(planItem, blocks) {
      this.clear();
      const block = blocks[planItem.blockIndex];
      if (!block) return;
      const ranges = [];
      for (const r of planItem.ranges) {
        const token = block.tokens[r.tokenIndex];
        if (!token) continue;
        if (token.kind === "math") {
          token.el.classList.add(MATH_CLASS);
          this.markedElements.push({ el: token.el, cls: MATH_CLASS });
        } else if (this.supportsRanges && token.kind === "text" && token.node && token.node.isConnected) {
          try {
            const range = new Range();
            range.setStart(token.node, r.start);
            range.setEnd(token.node, r.end);
            ranges.push(range);
          } catch (e) {
          }
        }
      }
      if (this.supportsRanges && ranges.length) {
        CSS.highlights.set(HIGHLIGHT_NAME, new Highlight(...ranges));
      } else if (block.el && block.el.isConnected) {
        block.el.classList.add(BLOCK_CLASS);
        this.markedElements.push({ el: block.el, cls: BLOCK_CLASS });
      }
      if (this.autoScroll && !this.scrollSuppressed) {
        const target = block.el && block.el.isConnected && block.el || ranges.length && ranges[0].startContainer.parentElement;
        if (target && typeof target.scrollIntoView === "function") {
          target.scrollIntoView({ block: "center", behavior: "smooth" });
        }
      }
    }
    clear() {
      if (this.supportsRanges) {
        CSS.highlights.delete(HIGHLIGHT_NAME);
      }
      for (const { el, cls } of this.markedElements) {
        el.classList.remove(cls);
      }
      this.markedElements = [];
    }
  };

  // ../../js/src/read-aloud/settings.js
  var VOICE_KEY = "readAloudVoice";
  var RATE_KEY = "readAloudRate";
  var AUTOSCROLL_KEY = "readAloudAutoScroll";
  function getSavedRate() {
    const value = Number(localStorage.getItem(RATE_KEY));
    return value >= 0.5 && value <= 2 ? value : 1;
  }
  function getSavedAutoScroll() {
    return localStorage.getItem(AUTOSCROLL_KEY) !== "false";
  }
  function documentLang() {
    return (document.documentElement.lang || "en").toLowerCase();
  }
  function candidateVoices() {
    const all = window.speechSynthesis.getVoices();
    const lang = documentLang().split("-")[0];
    const matching = all.filter(
      (v) => v.lang && v.lang.toLowerCase().split("-")[0] === lang
    );
    return matching.length ? matching : all;
  }
  function getSavedVoice() {
    const saved = localStorage.getItem(VOICE_KEY);
    const voices = candidateVoices();
    if (saved) {
      const match = voices.find((v) => v.voiceURI === saved);
      if (match) return match;
    }
    return voices.find((v) => v.default) || voices[0] || null;
  }
  function initSettingsControls(onChange) {
    const voiceSelect = document.getElementById("ptx-read-aloud-voice");
    const rateInput = document.getElementById("ptx-read-aloud-rate");
    const rateOutput = document.getElementById("ptx-read-aloud-rate-value");
    const autoScrollInput = document.getElementById("ptx-read-aloud-autoscroll");
    const notify = () => {
      onChange({
        voice: getSavedVoice(),
        rate: getSavedRate(),
        autoScroll: getSavedAutoScroll()
      });
    };
    const populateVoices = () => {
      if (!voiceSelect) return;
      const voices = candidateVoices();
      if (!voices.length) return;
      const selected = getSavedVoice();
      voiceSelect.replaceChildren();
      for (const voice of voices) {
        const option = document.createElement("option");
        option.value = voice.voiceURI;
        option.textContent = `${voice.name} (${voice.lang})`;
        option.selected = selected && voice.voiceURI === selected.voiceURI;
        voiceSelect.appendChild(option);
      }
    };
    populateVoices();
    window.speechSynthesis.addEventListener("voiceschanged", populateVoices);
    if (voiceSelect) {
      voiceSelect.addEventListener("change", () => {
        localStorage.setItem(VOICE_KEY, voiceSelect.value);
        notify();
      });
    }
    if (rateInput) {
      rateInput.value = getSavedRate();
      if (rateOutput) rateOutput.value = `${getSavedRate()}\xD7`;
      rateInput.addEventListener("input", () => {
        const rate = Number(rateInput.value);
        if (rate >= 0.5 && rate <= 2) {
          localStorage.setItem(RATE_KEY, String(rate));
          if (rateOutput) rateOutput.value = `${rate}\xD7`;
          notify();
        }
      });
    }
    if (autoScrollInput) {
      autoScrollInput.checked = getSavedAutoScroll();
      autoScrollInput.addEventListener("change", () => {
        localStorage.setItem(AUTOSCROLL_KEY, String(autoScrollInput.checked));
        notify();
      });
    }
  }

  // ../../js/src/read-aloud/player-ui.js
  var CONTINUE_FLAG = "ptxReadAloudContinue";
  var INTERACTIVE_SELECTOR = "a, button, input, select, textarea, summary, label, iframe, audio, video, [data-knowl], .knowl__link, .sagecell";
  function stringsFrom(player) {
    const ds = player.dataset;
    return {
      "read-aloud-play": ds.strPlay,
      "read-aloud-pause": ds.strPause,
      "read-aloud-skip-table": ds.strSkipTable,
      "read-aloud-skip-code": ds.strSkipCode,
      "read-aloud-skip-interactive": ds.strSkipInteractive,
      "read-aloud-equation-fallback": ds.strEquationFallback,
      "read-aloud-end-of-page": ds.strEndOfPage
    };
  }
  var ReadAloudPlayer = class {
    constructor(button, player) {
      this.button = button;
      this.player = player;
      this.strings = stringsFrom(player);
      this.content = document.getElementById("ptx-content");
      this.blocks = [];
      this.highlighter = new Highlighter();
      this.highlighter.autoScroll = getSavedAutoScroll();
      this.queue = new SpeechQueue({
        onUtterance: (i, item) => this._onUtterance(i, item),
        onState: (state) => this._onState(state),
        onEnded: () => this._onEnded()
      });
      this.queue.setLang(documentLang());
      initSettingsControls(({ voice, rate, autoScroll }) => {
        this.queue.setVoice(voice);
        this.queue.setRate(rate);
        this.highlighter.autoScroll = autoScroll;
        const playerRate = document.getElementById("ptx-read-aloud-player-rate");
        if (playerRate && Number(playerRate.value) !== rate) {
          playerRate.value = rate;
        }
      });
      this._wireControls();
      this._wireClickToStart();
      this._wireMediaSession();
    }
    //------------------------------------------------------------------
    // Opening and closing
    open() {
      this.player.hidden = false;
      this.button.setAttribute("aria-expanded", "true");
      sessionStorage.removeItem(CONTINUE_FLAG);
    }
    close() {
      this.queue.stop();
      this.highlighter.clear();
      this.player.hidden = true;
      this.button.setAttribute("aria-expanded", "false");
      if (navigator.mediaSession) {
        navigator.mediaSession.playbackState = "none";
      }
    }
    get isOpen() {
      return !this.player.hidden;
    }
    //------------------------------------------------------------------
    // Playback
    async _ensurePlan() {
      this.blocks = await collect(this.content, { strings: this.strings });
      const plan = buildPlan(this.blocks, {
        locale: documentLang(),
        strings: this.strings
      });
      this.queue.setVoice(getSavedVoice());
      this.queue.setRate(getSavedRate());
      this.queue.setPlan(plan);
    }
    async playFromTop() {
      this.highlighter.resetScrollSuppression();
      await this._ensurePlan();
      this.queue.playFrom(0);
    }
    async toggle() {
      this.highlighter.resetScrollSuppression();
      if (this.queue.state === "idle" || this.queue.state === "ended") {
        await this.playFromTop();
      } else {
        this.queue.toggle();
      }
    }
    //------------------------------------------------------------------
    // Queue callbacks
    _onUtterance(index, item) {
      this.highlighter.show(item, this.blocks);
    }
    _onState(state) {
      this.player.dataset.state = state;
      const toggleButton = document.getElementById("ptx-read-aloud-toggle");
      if (toggleButton) {
        const speaking = state === "speaking";
        toggleButton.title = speaking ? this.strings["read-aloud-pause"] : this.strings["read-aloud-play"];
        toggleButton.setAttribute("aria-pressed", String(speaking));
      }
      if (navigator.mediaSession) {
        navigator.mediaSession.playbackState = state === "speaking" ? "playing" : state === "paused" ? "paused" : "none";
      }
    }
    _onEnded() {
      this.highlighter.clear();
      const continueLink = document.getElementById("ptx-read-aloud-continue");
      const nextLink = document.querySelector(".next-button:not(.disabled)");
      if (continueLink && nextLink && nextLink.getAttribute("href")) {
        continueLink.href = nextLink.getAttribute("href");
        continueLink.hidden = false;
      }
    }
    //------------------------------------------------------------------
    // Wiring
    _wireControls() {
      const on = (id, handler) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("click", handler);
      };
      on("ptx-read-aloud-toggle", () => this.toggle());
      on("ptx-read-aloud-next", () => {
        this.highlighter.resetScrollSuppression();
        this.queue.next();
      });
      on("ptx-read-aloud-prev", () => {
        this.highlighter.resetScrollSuppression();
        this.queue.prev();
      });
      on("ptx-read-aloud-close", () => this.close());
      const continueLink = document.getElementById("ptx-read-aloud-continue");
      if (continueLink) {
        continueLink.addEventListener("click", () => {
          sessionStorage.setItem(CONTINUE_FLAG, "true");
        });
      }
      const playerRate = document.getElementById("ptx-read-aloud-player-rate");
      if (playerRate) {
        playerRate.value = getSavedRate();
        playerRate.addEventListener("input", () => {
          const rate = Number(playerRate.value);
          if (rate >= 0.5 && rate <= 2) {
            localStorage.setItem("readAloudRate", String(rate));
            this.queue.setRate(rate);
            const dialogRate = document.getElementById("ptx-read-aloud-rate");
            if (dialogRate) dialogRate.value = rate;
          }
        });
      }
      this.player.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          this.queue.next();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          this.queue.prev();
        }
      });
    }
    _wireClickToStart() {
      if (!this.content) return;
      this.content.addEventListener("click", (e) => {
        if (!this.isOpen) return;
        if (e.target.closest(INTERACTIVE_SELECTOR)) return;
        let blockIndex = -1;
        this.blocks.forEach((b, i) => {
          if (b.el && b.el.contains(e.target)) blockIndex = i;
        });
        if (blockIndex < 0) return;
        const planIndex = this.queue.indexForBlock(blockIndex);
        if (planIndex >= 0) {
          this.highlighter.resetScrollSuppression();
          this.queue.playFrom(planIndex);
        }
      });
    }
    _wireMediaSession() {
      if (!("mediaSession" in navigator)) return;
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: document.title
        });
        navigator.mediaSession.setActionHandler("play", () => this.toggle());
        navigator.mediaSession.setActionHandler("pause", () => this.queue.pause());
        navigator.mediaSession.setActionHandler("previoustrack", () => this.queue.prev());
        navigator.mediaSession.setActionHandler("nexttrack", () => this.queue.next());
      } catch (e) {
      }
    }
  };
  function continuationRequested() {
    return sessionStorage.getItem(CONTINUE_FLAG) === "true";
  }

  // ../../js/src/read-aloud/index.js
  window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("ptx-read-aloud-button");
    const playerElement = document.getElementById("ptx-read-aloud-player");
    if (!button || !playerElement) return;
    if (!("speechSynthesis" in window)) {
      button.hidden = true;
      return;
    }
    let player = null;
    const ensurePlayer = () => {
      if (!player) {
        player = new ReadAloudPlayer(button, playerElement);
      }
      return player;
    };
    button.addEventListener("click", () => {
      const p = ensurePlayer();
      if (p.isOpen) {
        p.close();
      } else {
        p.open();
      }
    });
    if (continuationRequested()) {
      ensurePlayer().open();
      playerElement.dataset.state = "continue-ready";
    }
    window.PTXReadAloud = {
      collect,
      buildPlan,
      sentenceBoundaries,
      SpeechQueue,
      player: ensurePlayer,
      speakPage: () => ensurePlayer().playFromTop()
    };
  });
})();
//# sourceMappingURL=pretext-read-aloud.js.map
