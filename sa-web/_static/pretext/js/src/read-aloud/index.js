/*******************************************************************************
 * index.js — entry point for the pretext-read-aloud bundle
 *******************************************************************************
 * Feature-detects speechSynthesis, wires the toolbar button, and initializes
 * the player lazily on first press.  The XSL emits the markup and this
 * <script> only when the read-aloud publication option is enabled, so an
 * opted-out build ships zero read-aloud bytes.
 ******************************************************************************/

import { ReadAloudPlayer, continuationRequested } from "./player-ui.js";
import { collect } from "./collector.js";
import { buildPlan, sentenceBoundaries } from "./segmenter.js";
import { SpeechQueue } from "./speech-queue.js";

window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("ptx-read-aloud-button");
    const playerElement = document.getElementById("ptx-read-aloud-player");
    if (!button || !playerElement) return;

    // No speech engine (or no voices ever): hide the feature entirely.
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

    // Cross-page continuation (decision #10): the previous page set a flag
    // as the reader clicked "Continue".  Browsers generally refuse speech
    // without fresh user activation after navigation, so present the player
    // open and ready — one click on play resumes reading.
    if (continuationRequested()) {
        ensurePlayer().open();
        playerElement.dataset.state = "continue-ready";
    }

    // Console access for debugging and by-ear experimentation during the
    // prototype phase: PTXReadAloud.speakPage() in devtools.
    window.PTXReadAloud = {
        collect,
        buildPlan,
        sentenceBoundaries,
        SpeechQueue,
        player: ensurePlayer,
        speakPage: () => ensurePlayer().playFromTop(),
    };
});
