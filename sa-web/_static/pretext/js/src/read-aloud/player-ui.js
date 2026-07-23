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
import {
    initSettingsControls,
    getSavedVoice,
    getSavedRate,
    getSavedAutoScroll,
    documentLang,
} from "./settings.js";

const CONTINUE_FLAG = "ptxReadAloudContinue";

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

        // Keyboard operability on the player itself
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
            // Find the deepest collected block containing the click.
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
