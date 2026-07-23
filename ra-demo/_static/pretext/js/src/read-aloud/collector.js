/*******************************************************************************
 * collector.js — live DOM → IR stage of the read-aloud pipeline
 *******************************************************************************
 * Walks the main content region at *play time* and emits the intermediate
 * representation consumed by segmenter.js (see that file for the IR shape).
 * Because collection happens at play time, content revealed since page load
 * (opened knowls, unfolded solutions) is naturally included, and content
 * still hidden is naturally excluded.
 *
 * Content policy (decision #6 in the design doc): read what a sighted reader
 * would read aloud — headings, paragraphs, lists, display math, captions,
 * image alt text; announce-and-skip tables, code, and interactives; silently
 * skip anything hidden, including screen-reader-only text (read-aloud mimics
 * *visual* reading, so e.g. the assistive watermark is skipped).
 *
 * Two exceptions to "hidden means skipped", both about <details>: content
 * inside a *closed* one is collected anyway, and each block records its
 * ancestry in the document tree.  Together those let the listener navigate
 * asides (see navigation.js) without re-collecting or re-fetching anything.
 * Collection is complete and static; the listening mode governs traversal,
 * and opening a <details> is a presentation side effect of arriving there.
 ******************************************************************************/

import { nodeDescriptor } from "./nodes.js";

// Blocks announced-and-skipped rather than read.  Order matters: the first
// matching selector wins, so put more specific selectors first.
const ANNOUNCE_SELECTORS = [
    { selector: ".table-like, table", stringId: "read-aloud-skip-table" },
    {
        selector: "pre, .code-box, .program, .console, .sage, .sagecell-practice",
        stringId: "read-aloud-skip-code",
    },
    {
        selector:
            "iframe, audio, video, .video-box, .interactive, .jxgbox, " +
            ".exercise-runestone, .runestone",
        stringId: "read-aloud-skip-interactive",
    },
];

// Elements never entered at all: invisible-to-the-eye content, chrome, and
// duplicated assistive text.
const SKIP_SELECTOR = [
    "[aria-hidden='true']",
    "[hidden]",
    ".hidden-content",
    ".autopermalink",
    "mjx-assistive-mml",
    "script",
    "style",
    "noscript",
    ".ptx-content-footer",
    ".instructions", // WW instructor-only material
].join(", ");

// Elements whose children form their own paragraph-level blocks.  Reaching
// one of these flushes the inline token run in progress.
const CONTAINER_SELECTOR = [
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
    // A <summary> must end its block, or an aside whose body is not itself a
    // block element (a footnote's contents div) gets appended to the title's
    // block and inherits its always-spoken status.
    "summary",
    ".exercise-statement",
    ".knowl__content",
].join(", ");

// Leaf-ish elements that start a fresh text block of their own.
const HEADING_SELECTOR = "h1, h2, h3, h4, h5, h6, figcaption, caption";

function isElementVisible(el) {
    if (typeof el.checkVisibility === "function") {
        return el.checkVisibility();
    }
    // Fallback for browsers without checkVisibility (Safari < 17.4)
    return !!(el.offsetParent || el.getClientRects().length);
}

// SRE builds its speech for screen readers, which identify the expression as
// a math region by appending the word "math".  Spliced into a spoken
// sentence that marker just interrupts the prose — "f of x equals x squared,
// math, which opens upward" — so drop it.  Never strip it down to nothing:
// an expression whose entire speech is "math" keeps that word.
const MATH_REGION_MARKER = /[,;.]?\s*\bmath\b[\s.]*$/i;

// PreTeXt pulls the punctuation that follows inline math *into* the math
// (`\(f(x) = x^2\text{,}\)`) so it sets and line-breaks correctly, and SRE
// duly speaks it as a word: "f of x equals x squared comma".  Put the
// character back so the voice renders it as a pause instead of saying it.
// The words are English, so other SRE locales simply do not match and keep
// their existing behaviour rather than getting it wrong.
const TRAILING_PUNCTUATION = {
    comma: ",",
    period: ".",
    "full stop": ".",
    semicolon: ";",
    colon: ":",
    "question mark": "?",
    "exclamation mark": "!",
};
const TRAILING_PUNCTUATION_RE = new RegExp(
    `[\\s,]*\\b(${Object.keys(TRAILING_PUNCTUATION).join("|")})\\s*$`,
    "i"
);

export function cleanMathSpeech(value) {
    if (!value) return null;
    // SRE also produces an SSML-marked-up rendering (<mark/>, <break/>,
    // <say-as>…</say-as>).  speechSynthesis takes plain text only — it would
    // read the tags — so reduce any markup to the text it wraps.
    const text = value.replace(/<[^>]*>/g, " ");
    const stripped = text.replace(MATH_REGION_MARKER, "").trim();
    const speech = (stripped || text).replace(/\s+/g, " ").trim();
    return (
        speech.replace(
            TRAILING_PUNCTUATION_RE,
            (match, word) => TRAILING_PUNCTUATION[word.toLowerCase()]
        ) || null
    );
}

// Attributes that can hold speech, in order of preference.  MathJax 4 puts
// the plain-text rendering in `aria-label` and an SSML-marked-up copy in
// `data-semantic-speech`, so the plain forms must win; `-none` is SRE's own
// markup-free variant.  The marked-up attribute stays as a last resort
// because stripped markup still beats announcing "equation".
const SPEECH_ATTRIBUTES = [
    "aria-label",
    "data-semantic-speech-none",
    "data-semantic-speech",
];

// The container's own value first, then the outermost descendant carrying
// the attribute.  querySelector walks in document order, so that descendant
// is the top of the expression rather than one of its sub-expressions.
function speechAttribute(el, attribute) {
    const own = el.getAttribute(attribute);
    if (own) return own;
    const node = el.querySelector(`[${attribute}]`);
    return (node && node.getAttribute(attribute)) || null;
}

/**
 * Read the speech text already present for one typeset expression.
 *
 * Where it lives varies by MathJax version and configuration; MathJax 4
 * attaches SRE's output to the mjx-container's subtree (alongside
 * `data-speech-attached`), while other builds use `aria-label` directly.
 * Assistive MathML is off by default in v4, so that branch usually finds
 * nothing.  Returns null when no speech exists yet.
 */
export function readMathSpeech(el) {
    for (const attribute of SPEECH_ATTRIBUTES) {
        const raw = speechAttribute(el, attribute);
        if (raw) return cleanMathSpeech(raw);
    }

    // Assistive MathML, when a publisher has turned it back on.  Only
    // @alttext is usable: the MathML text content is bare glyphs, which is
    // exactly the garbled reading this feature exists to avoid.
    const mml = el.querySelector("mjx-assistive-mml math");
    const alt = mml && mml.getAttribute("alttext");
    return alt ? cleanMathSpeech(alt) : null;
}

/**
 * Resolve speech text for one mjx-container, waiting briefly if MathJax's
 * speech worker has not finished with this expression yet.  Resolves to null
 * if nothing arrives in time; the caller substitutes the localized
 * "equation" announcement so a reader hears something either way.
 */
function resolveMathSpeech(el, timeoutMs) {
    const direct = readMathSpeech(el);
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
        // Speech generation runs in a web worker and patches the container
        // after typesetting, so watch the whole subtree, not just the
        // container's own attributes.
        const observer = new MutationObserver(() => {
            const speech = readMathSpeech(el);
            if (speech) finish(speech);
        });
        observer.observe(el, {
            attributes: true,
            childList: true,
            subtree: true,
        });
        const timer = setTimeout(() => finish(readMathSpeech(el)), timeoutMs);
    });
}

/**
 * Collect the readable blocks of `root` (usually #ptx-content).
 *
 * opts:
 *   strings         stringId → localized text (for the equation fallback)
 *   mathTimeoutMs   how long to wait for a missing aria-label (default 3000)
 *
 * Returns a Promise of the blocks array; async only because math speech may
 * need a brief wait on freshly loaded pages.
 */
export async function collect(root, opts = {}) {
    const strings = opts.strings || {};
    const mathTimeoutMs = opts.mathTimeoutMs || 3000;
    const blocks = [];
    const pendingMath = [];

    // The block currently accumulating inline tokens, or null.
    let current = null;

    const flush = () => {
        if (current && current.tokens.some(isSpeakable)) {
            blocks.push(current);
        }
        current = null;
    };
    const isSpeakable = (t) =>
        t.kind !== "text" || t.value.trim() !== "";

    const ensureBlock = (el, ctx) => {
        if (!current) {
            current = { el, tokens: [], path: ctx.path, summary: ctx.summary };
        }
    };

    /**
     * ctx carries position in the tree down the walk:
     *   path     ancestry so far (nodes.js descriptors), root first
     *   summary  inside an aside's always-read title
     *   closed   inside a closed <details>, so the visibility gate is off
     */
    const visit = (node, blockEl, ctx) => {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.nodeValue.trim() !== "") {
                ensureBlock(blockEl, ctx);
                current.tokens.push({ kind: "text", value: node.nodeValue, node });
            }
            return;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;

        if (el.matches(SKIP_SELECTOR)) return;
        // Content in a collapsed <details> is hidden only because the reader
        // has not clicked yet — exactly the content the aside modes exist to
        // reach — so the visibility gate is suspended below one.  Genuinely
        // hidden material is still excluded by SKIP_SELECTOR above.
        if (!ctx.closed && !isElementVisible(el)) return;

        const descriptor = nodeDescriptor(el);
        if (descriptor) {
            ctx = { ...ctx, path: ctx.path.concat(descriptor) };
        }
        if (el.tagName === "DETAILS" && !el.open) {
            ctx = { ...ctx, closed: true };
        }
        if (el.tagName === "SUMMARY") {
            ctx = { ...ctx, summary: true };
        }

        // A footnote's clickable summary is a bare superscript numeral, which
        // reads as a stray "one" in the middle of a sentence.  PreTeXt already
        // renders the localized, numbered name into the tooltip ("Footnote
        // 3.1"), so speak that instead of the numeral.
        if (el.matches(".ptx-footnote__number")) {
            const label = (el.getAttribute("title") || "").trim();
            if (label) {
                flush();
                ensureBlock(el, ctx);
                current.tokens.push({ kind: "text", value: label, node: null, el });
                flush();
                return;
            }
        }

        // Announce-and-skip categories
        for (const { selector, stringId } of ANNOUNCE_SELECTORS) {
            if (el.matches(selector)) {
                flush();
                blocks.push({
                    el,
                    tokens: [{ kind: "announce", stringId, el }],
                    path: ctx.path,
                    summary: ctx.summary,
                });
                return;
            }
        }

        // Typeset math: a token in the current block; display math becomes
        // its own block so it is spoken with a natural pause around it.
        if (el.tagName === "MJX-CONTAINER") {
            const display = el.getAttribute("display") === "true";
            if (display) flush();
            ensureBlock(display ? el : blockEl, ctx);
            const token = { kind: "math", speech: "", display, el };
            current.tokens.push(token);
            pendingMath.push(token);
            if (display) flush();
            return;
        }

        // Images speak their alt text (part of visual reading).  Alt text is
        // written to stand in for a picture, not to be read as prose, so it
        // is introduced rather than spliced silently into the sentence around
        // it — otherwise a listener cannot tell where the author's sentence
        // stopped and the description of the picture began.
        if (el.tagName === "IMG") {
            const alt = (el.getAttribute("alt") || "").trim();
            if (alt) {
                const label = strings["read-aloud-image-alt"];
                ensureBlock(blockEl, ctx);
                current.tokens.push({
                    kind: "text",
                    value: label ? `${label} ${alt}` : alt,
                    node: null,
                    el,
                });
            }
            return;
        }

        if (el.matches(HEADING_SELECTOR) || el.matches(CONTAINER_SELECTOR)) {
            flush();
            for (const child of el.childNodes) visit(child, el, ctx);
            flush();
            return;
        }

        // Anything else is treated as inline: descend with the same block.
        for (const child of el.childNodes) visit(child, blockEl, ctx);
    };

    visit(root, root, { path: [], summary: false, closed: false });
    flush();

    // Resolve math speech in parallel under a shared deadline.
    let fallbackCount = 0;
    await Promise.all(
        pendingMath.map(async (token) => {
            const speech = await resolveMathSpeech(token.el, mathTimeoutMs);
            if (!speech) fallbackCount++;
            token.speech =
                speech ||
                strings["read-aloud-equation-fallback"] ||
                "equation";
        })
    );
    if (fallbackCount) {
        // Every expression reading as "equation" means MathJax produced no
        // speech at all — worth saying out loud, since the page otherwise
        // reads perfectly well and the cause is invisible.
        console.warn(
            `PreTeXt read-aloud: no MathJax speech text for ${fallbackCount} of ` +
            `${pendingMath.length} expression(s); reading the fallback instead. ` +
            `Run PTXReadAloud.debugMath() to see what MathJax produced.`
        );
    }

    return blocks;
}
