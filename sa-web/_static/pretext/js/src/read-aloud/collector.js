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
 ******************************************************************************/

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

/**
 * Resolve MathJax speech text for one mjx-container, following the fallback
 * chain from the design doc:
 *   1. aria-label (the normal case once the speech worker has run)
 *   2. brief wait for the attribute (worker still running on a fresh page)
 *   3. assistive MathML alttext / textContent
 *   4. null — caller substitutes the localized "equation" announcement
 */
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
            const alt =
                (mml && (mml.getAttribute("alttext") || mml.textContent.trim())) || null;
            finish(alt);
        }, timeoutMs);
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

        // Announce-and-skip categories
        for (const { selector, stringId } of ANNOUNCE_SELECTORS) {
            if (el.matches(selector)) {
                flush();
                blocks.push({ el, tokens: [{ kind: "announce", stringId, el }] });
                return;
            }
        }

        // Typeset math: a token in the current block; display math becomes
        // its own block so it is spoken with a natural pause around it.
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

        // Images speak their alt text (part of visual reading).
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

        // Anything else is treated as inline: descend with the same block.
        for (const child of el.childNodes) visit(child, blockEl);
    };

    visit(root, root);
    flush();

    // Resolve math speech in parallel under a shared deadline.
    await Promise.all(
        pendingMath.map(async (token) => {
            const speech = await resolveMathSpeech(token.el, mathTimeoutMs);
            token.speech =
                speech ||
                strings["read-aloud-equation-fallback"] ||
                "equation";
        })
    );

    return blocks;
}
