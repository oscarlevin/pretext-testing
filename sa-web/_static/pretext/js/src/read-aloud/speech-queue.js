/*******************************************************************************
 * speech-queue.js — state machine driving window.speechSynthesis
 *******************************************************************************
 * States: idle → speaking(i) → paused(i) → ended, where i indexes the
 * utterance plan produced by segmenter.js.  One SpeechSynthesisUtterance per
 * plan entry; onend advances to the next.  Callbacks let the UI layer drive
 * the highlighter, auto-scroll, and MediaSession without this file touching
 * any of them.
 *
 * Platform quirks handled here (see the design doc's quirk table):
 *   - onend also fires after cancel(): a generation counter distinguishes a
 *     natural end from our own cancellation.
 *   - pause() is unreliable on Android Chrome: there, pause is implemented as
 *     cancel + remember-the-index, and resume re-speaks the current sentence.
 *     Sentence-sized utterances make that restart unnoticeable.
 ******************************************************************************/

export class SpeechQueue {
    /**
     * opts:
     *   synth        the SpeechSynthesis instance (injectable for testing)
     *   onUtterance  (index, planItem) fired as each utterance starts
     *   onState      (state) fired on every state change
     *   onEnded      () fired when the plan runs out naturally
     */
    constructor(opts = {}) {
        this.synth = opts.synth || window.speechSynthesis;
        this.onUtterance = opts.onUtterance || (() => {});
        this.onState = opts.onState || (() => {});
        this.onEnded = opts.onEnded || (() => {});

        this.plan = [];
        this.index = 0;
        this.state = "idle";
        this.voice = null;
        this.rate = 1;
        this.lang = null;

        // Incremented on every cancel so stale onend events are ignored.
        this.generation = 0;

        // Native pause is broken on Android Chrome; use cancel+restart there.
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
        // Voice/rate cannot change mid-utterance; restart the current
        // sentence so the change is heard immediately.
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
        // A voice/synthesis error on one sentence should not kill the whole
        // reading session; skip to the next utterance.
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
}
