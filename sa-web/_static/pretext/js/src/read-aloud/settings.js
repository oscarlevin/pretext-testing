/*******************************************************************************
 * settings.js — voice / rate / auto-scroll persistence and dialog controls
 *******************************************************************************
 * Mirrors the readability-options.js patterns: values live in localStorage,
 * controls sit in the readability dialog (XSL emits them when the read-aloud
 * publication option is on), and this module keeps both in sync.
 *
 * The voice picker is populated from speechSynthesis.getVoices(), which is
 * empty until the voiceschanged event fires on Chrome — so population runs
 * both immediately and on that event.  Voices are filtered to the document
 * language (decision #9), falling back to the full list when nothing matches.
 ******************************************************************************/

const VOICE_KEY = "readAloudVoice";
const RATE_KEY = "readAloudRate";
const AUTOSCROLL_KEY = "readAloudAutoScroll";

export function getSavedRate() {
    const value = Number(localStorage.getItem(RATE_KEY));
    return value >= 0.5 && value <= 2 ? value : 1;
}

export function getSavedAutoScroll() {
    return localStorage.getItem(AUTOSCROLL_KEY) !== "false";
}

export function documentLang() {
    return (document.documentElement.lang || "en").toLowerCase();
}

/** Voices matching the document language, or all voices if none match. */
export function candidateVoices() {
    const all = window.speechSynthesis.getVoices();
    const lang = documentLang().split("-")[0];
    const matching = all.filter(
        (v) => v.lang && v.lang.toLowerCase().split("-")[0] === lang
    );
    return matching.length ? matching : all;
}

/** The voice to use right now: saved choice if it still exists, else default. */
export function getSavedVoice() {
    const saved = localStorage.getItem(VOICE_KEY);
    const voices = candidateVoices();
    if (saved) {
        const match = voices.find((v) => v.voiceURI === saved);
        if (match) return match;
    }
    return voices.find((v) => v.default) || voices[0] || null;
}

/**
 * Wire the readability-dialog controls (if present) and the player's rate
 * slider (if present).  `onChange` fires with {voice, rate, autoScroll}
 * whenever the user changes anything, so the queue can pick it up live.
 */
export function initSettingsControls(onChange) {
    const voiceSelect = document.getElementById("ptx-read-aloud-voice");
    const rateInput = document.getElementById("ptx-read-aloud-rate");
    const rateOutput = document.getElementById("ptx-read-aloud-rate-value");
    const autoScrollInput = document.getElementById("ptx-read-aloud-autoscroll");

    const notify = () => {
        onChange({
            voice: getSavedVoice(),
            rate: getSavedRate(),
            autoScroll: getSavedAutoScroll(),
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
        if (rateOutput) rateOutput.value = `${getSavedRate()}×`;
        rateInput.addEventListener("input", () => {
            const rate = Number(rateInput.value);
            if (rate >= 0.5 && rate <= 2) {
                localStorage.setItem(RATE_KEY, String(rate));
                if (rateOutput) rateOutput.value = `${rate}×`;
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
