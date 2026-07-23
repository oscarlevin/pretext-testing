/*******************************************************************************
 * player-ui.js — floating player, click-to-start, MediaSession, continue flow
 *******************************************************************************
 * The markup (button #ptx-read-aloud-button, player #ptx-read-aloud-player)
 * is emitted by the XSL only when the publication option is on, with all
 * localized strings carried as data-str-* attributes so this file contains
 * no user-facing English.
 *
 * DOM contract with the XSL:
 *   #ptx-read-aloud-button     toolbar button that opens/closes the player
 *   #ptx-read-aloud-player     floating bar; data-state attr drives CSS
 *     #ptx-read-aloud-prev / -toggle / -next / -close   control buttons
 *     #ptx-read-aloud-player-rate                       rate slider (0.5–2)
 *     #ptx-read-aloud-continue                          next-section link
 ******************************************************************************/

import { collect } from "./collector.js";
import { buildPlan } from "./segmenter.js";
import { SpeechQueue } from "./speech-queue.js";
import { Highlighter } from "./highlighter.js";
import { enclosingBlock } from "./navigation.js";
import {
    initSettingsControls,
    getSavedVoice,
    getSavedRate,
    getSavedAutoScroll,
    getSavedAsideMode,
    documentLang,
} from "./settings.js";

const CONTINUE_FLAG = "ptxReadAloudContinue";

// How many times to explain the open key before trusting the reader to know.
const OPEN_HINT_KEY = "readAloudOpenHintShown";
const OPEN_HINT_LIMIT = 3;

// Clicks on (or inside) these are navigation/interaction, not click-to-start.
const INTERACTIVE_SELECTOR =
    "a, button, input, select, textarea, summary, label, iframe, " +
    "audio, video, [data-knowl], .knowl__link, .sagecell";

/** Map the XSL's data-str-* attributes to localization string ids. */
function stringsFrom(player) {
    const ds = player.dataset;
    return {
        "read-aloud-play": ds.strPlay,
        "read-aloud-pause": ds.strPause,
        "read-aloud-skip-table": ds.strSkipTable,
        "read-aloud-skip-code": ds.strSkipCode,
        "read-aloud-skip-interactive": ds.strSkipInteractive,
        "read-aloud-equation-fallback": ds.strEquationFallback,
        "read-aloud-end-of-page": ds.strEndOfPage,
        "read-aloud-open-hint": ds.strOpenHint,
        "read-aloud-image-alt": ds.strImageAlt,
        // Keyed by nodes.js type, for blocks that render no visible type name.
        footnote: ds.strFootnote,
        description: ds.strDescription,
    };
}

export class ReadAloudPlayer {
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
            onEnded: () => this._onEnded(),
            mode: getSavedAsideMode(),
            describeBlock: (blockIndex) => this._describeBlock(blockIndex),
        });
        this.queue.setLang(documentLang());

        initSettingsControls(({ voice, rate, autoScroll, asideMode }) => {
            this.queue.setVoice(voice);
            this.queue.setRate(rate);
            // Takes effect at the next block boundary — no recollection, so
            // the listener can change their mind mid-page.
            this.queue.setMode(asideMode);
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
        // Continuation from the previous page (decision #10): don't fight
        // the browser's activation rules — present a ready-to-play player.
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
        // Collect from the live DOM so opened knowls are included.
        this.blocks = await collect(this.content, { strings: this.strings });
        const plan = buildPlan(this.blocks, {
            locale: documentLang(),
            strings: this.strings,
        });
        this.queue.setVoice(getSavedVoice());
        this.queue.setRate(getSavedRate());
        this.queue.setPlan(plan, this.blocks);
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
        this._reveal(this.blocks[item.blockIndex]);
        this.highlighter.show(item, this.blocks);
    }

    /**
     * Open any collapsed <details> around the block about to be spoken.
     *
     * Collection deliberately reaches inside closed knowls, so playback can
     * arrive somewhere the reader cannot see.  Opening on arrival keeps the
     * page in step with the audio — and the highlighter needs the text
     * rendered to highlight it at all.
     *
     * A title is the exception: reading "Theorem 3.2" is not a reason to
     * expand the theorem, since in skip mode the body is never read and a
     * sighted reader would still be looking at a closed knowl.
     */
    _reveal(block) {
        if (!block || !block.el) return;
        let details = block.el.closest("details");
        // Skip the aside this title belongs to; ancestors still open, so a
        // knowl nested in an opened knowl stays visible.
        if (block.summary && details) {
            details = details.parentElement
                ? details.parentElement.closest("details")
                : null;
        }
        while (details) {
            if (!details.open) details.open = true;
            details = details.parentElement
                ? details.parentElement.closest("details")
                : null;
        }
    }

    /**
     * What kind of block the arrow keys have landed on, for the spoken
     * announcement.  PreTeXt already renders localized type names into the
     * page — in a knowl's heading and in every permalink's @data-description
     * — so they are read back out of the DOM rather than duplicated as new
     * localization strings that could drift out of step.
     */
    _describeBlock(blockIndex) {
        const block = this.blocks[blockIndex];
        if (!block || !block.el) return null;
        const node = enclosingBlock(this.blocks, blockIndex);

        // A title names its block; anything else names *itself*.  Without the
        // split, every paragraph of a proof announces as "Proof" — the block
        // it happens to sit in rather than what the listener landed on.
        const name = block.summary
            ? this._typeName(node)
            : this._selfName(block) || this._typeName(node);
        if (!name) return null;

        const hint = this._openableAside(blockIndex) ? this._openHint() : null;
        return hint ? `${name} ${hint}` : name;
    }

    /** The type name PreTeXt rendered for a node, e.g. "Theorem", "Proof.". */
    _typeName(node) {
        if (!node || !node.el || !node.el.querySelector) return null;
        const typeSpan = node.el.querySelector(
            ":scope > summary .type, :scope > .heading .type, " +
            ":scope > h1 .type, :scope > h2 .type, :scope > h3 .type, " +
            ":scope > h4 .type, :scope > h5 .type, :scope > h6 .type"
        );
        const name = typeSpan && typeSpan.textContent.trim();
        if (name) return name;

        // A footnote's name *and number* are in its tooltip ("Footnote 3.1"),
        // which beats the bare "Footnote" below: on a page of footnotes the
        // number is the only thing telling one announcement from the next.
        // Read only the footnote's tooltip — an image description's says the
        // untranslated literal "details".
        const tooltip = node.el.querySelector(
            ":scope > summary.ptx-footnote__number[title]"
        );
        if (tooltip) {
            const label = tooltip.getAttribute("title").trim();
            if (label) return label;
        }

        // Footnotes and image descriptions render no type name at all — just
        // a superscript number or an icon — so they are the two blocks whose
        // names have to be supplied rather than read back out of the page.
        return this.strings[node.type] || null;
    }

    /** What a non-title block calls itself, from its own permalink. */
    _selfName(block) {
        if (!block.el.querySelector) return null;
        const permalink = block.el.querySelector(":scope > [data-description]");
        return (permalink && permalink.getAttribute("data-description")) || null;
    }

    /** The aside this block titles, if it is one and it is still closed. */
    _openableAside(blockIndex) {
        const block = this.blocks[blockIndex];
        if (!block || !block.summary) return null;
        const asides = block.path.filter((n) => n.aside);
        const own = asides[asides.length - 1];
        return own && !this.queue.entered.has(own.el) ? own : null;
    }

    /**
     * "Press space to open", for the first few knowls a reader meets.
     *
     * An audio interface has no affordances to look at, so the only way to
     * learn the key is to be told — but being told every time, on a page with
     * forty knowls, is unbearable.  The count persists across pages so the
     * hint fades over a session rather than restarting with every navigation.
     */
    _openHint() {
        const hint = this.strings["read-aloud-open-hint"];
        if (!hint) return null;
        const shown = Number(localStorage.getItem(OPEN_HINT_KEY)) || 0;
        if (shown >= OPEN_HINT_LIMIT) return null;
        localStorage.setItem(OPEN_HINT_KEY, String(shown + 1));
        return hint;
    }

    _onState(state) {
        this.player.dataset.state = state;
        const toggleButton = document.getElementById("ptx-read-aloud-toggle");
        if (toggleButton) {
            const speaking = state === "speaking";
            toggleButton.title = speaking
                ? this.strings["read-aloud-pause"]
                : this.strings["read-aloud-play"];
            toggleButton.setAttribute("aria-pressed", String(speaking));
        }
        if (navigator.mediaSession) {
            navigator.mediaSession.playbackState =
                state === "speaking" ? "playing"
                : state === "paused" ? "paused"
                : "none";
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
                // Ask the next page to present the player ready to play.
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

        // Two axes: horizontal moves along the reading line, vertical moves
        // through the document tree.  Horizontal works whenever the player has
        // focus; vertical is bound document-wide, since the whole point is to
        // steer asides while listening rather than while pointing at buttons.
        this.player.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                e.preventDefault();
                this.queue.next();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                this.queue.prev();
            }
        });

        document.addEventListener("keydown", (e) => {
            // Only while actually reading, or the page cannot be scrolled and
            // arrow keys are stolen from every form control on it.
            if (this.queue.state !== "speaking" && this.queue.state !== "paused") {
                return;
            }
            if (e.altKey || e.ctrlKey || e.metaKey) return;
            if (e.target.closest("input, textarea, select, [contenteditable]")) {
                return;
            }
            if (e.key === "ArrowDown") {
                e.preventDefault();
                this.queue.nextBlock();
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                this.queue.previousBlock();
            } else if (e.key === " " || e.key === "ArrowRight") {
                // Accept the block the arrow keys landed on and read it.
                if (this.queue.pendingStart) {
                    e.preventDefault();
                    this.queue.resume();
                }
            }
        });
    }

    _wireClickToStart() {
        if (!this.content) return;
        this.content.addEventListener("click", (e) => {
            if (!this.isOpen) return;
            if (e.target.closest(INTERACTIVE_SELECTOR)) return;
            // Find the deepest collected block containing the click.
            let blockIndex = -1;
            this.blocks.forEach((b, i) => {
                if (b.el && b.el.contains(e.target)) blockIndex = i;
            });
            if (blockIndex < 0) return;
            const planIndex = this._planIndexForClick(blockIndex, e.target);
            if (planIndex >= 0) {
                this.highlighter.resetScrollSuppression();
                this.queue.playFrom(planIndex);
            }
        });
    }

    /**
     * The utterance a click landed on, falling back to the head of the block.
     *
     * Clicking the fourth sentence of a paragraph should start there, not
     * restart the paragraph, so this matches the clicked text node against
     * the plan's range map (segmenter.js keeps ranges pointing at the
     * original DOM text nodes precisely so this is possible).
     */
    _planIndexForClick(blockIndex, target) {
        const block = this.blocks[blockIndex];
        const fallback = this.queue.indexForBlock(blockIndex);
        if (!block || !target) return fallback;

        // The clicked text nodes, in the element the reader actually hit.
        const clicked = new Set();
        const walk = (el) => {
            for (const child of el.childNodes) {
                if (child.nodeType === Node.TEXT_NODE) clicked.add(child);
                else if (child.nodeType === Node.ELEMENT_NODE) walk(child);
            }
        };
        if (target.nodeType === Node.ELEMENT_NODE) walk(target);

        for (let i = 0; i < this.queue.plan.length; i++) {
            const item = this.queue.plan[i];
            if (item.blockIndex !== blockIndex) continue;
            for (const range of item.ranges) {
                const token = block.tokens[range.tokenIndex];
                if (!token) continue;
                if (token.node && clicked.has(token.node)) return i;
                if (token.el && (token.el === target || token.el.contains(target))) {
                    return i;
                }
            }
        }
        return fallback;
    }

    _wireMediaSession() {
        if (!("mediaSession" in navigator)) return;
        try {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: document.title,
            });
            navigator.mediaSession.setActionHandler("play", () => this.toggle());
            navigator.mediaSession.setActionHandler("pause", () => this.queue.pause());
            navigator.mediaSession.setActionHandler("previoustrack", () => this.queue.prev());
            navigator.mediaSession.setActionHandler("nexttrack", () => this.queue.next());
        } catch (e) {
            // MediaSession is progressive enhancement; never let it break playback.
        }
    }
}

/** True when the previous page's reading session asked to continue here. */
export function continuationRequested() {
    return sessionStorage.getItem(CONTINUE_FLAG) === "true";
}
