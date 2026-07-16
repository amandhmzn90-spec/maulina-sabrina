/**
 * =============================================================================
 *  APP LOGIC — Alpine.js state
 * =============================================================================
 * This file only contains behavior (state + methods). Content lives in
 * data.js. Section markup in /sections/*.html reads both via `data.*`
 * and the methods below (e.g. x-text="data.hero.name", @click="toggleSynth").
 * =============================================================================
 */

function portfolioState() {
    return {
        // Expose all site content to every section partial as `data`
        data: SITE_DATA,

        // ---- UI state ----
        activeSection: 'home',
        currentTab: SITE_DATA.projectLibraryTabs[0].key,
        isPlayingSynth: false,
        synth: null,
        vol: null,
        tasks: SITE_DATA.tasks,

        init() {
            // Start ScrollSpy Tracker (uses section ids from data.js nav config)
            const sections = SITE_DATA.nav.map(item => item.id);
            window.addEventListener('scroll', () => {
                let current = 'home';
                sections.forEach(sec => {
                    const element = document.getElementById(sec);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 150) {
                            current = sec;
                        }
                    }
                });
                this.activeSection = current;
            });

            // Initialize lucide icons explicitly
            setTimeout(() => {
                if (window.lucide) lucide.createIcons();
            }, 100);
        },

        toggleTask(index) {
            this.tasks[index].done = !this.tasks[index].done;
        },

        // ---- Sound Synthesizer Logic using Tone.js ----
        toggleSynth() {
            if (!this.isPlayingSynth) {
                try {
                    Tone.start();

                    // Warm, deep synthesizer for relaxing background chords
                    this.vol = new Tone.Volume(-24).toDestination();
                    this.synth = new Tone.PolySynth(Tone.Synth, {
                        oscillator: {
                            type: "sine" // Soft warmth
                        },
                        envelope: {
                            attack: 1.5,
                            decay: 2,
                            sustain: 0.6,
                            release: 2
                        }
                    }).connect(this.vol);

                    // Trigger generative chord loop immediately (Em7 <-> Am7)
                    this.playAmbientChordLoop();
                    this.isPlayingSynth = true;
                } catch (e) {
                    console.error("Tone.js could not initiate due to user gestures policy:", e);
                }
            } else {
                // Stop synthesizer sounds
                if (this.synth) {
                    this.synth.releaseAll();
                    this.synth.disconnect();
                }
                this.isPlayingSynth = false;
            }
        },

        playAmbientChordLoop() {
            if (!this.synth) return;

            // Soft slow lofi arpeggio loop mimicking quiet nighttime work
            const playChords = () => {
                if (!this.isPlayingSynth) return;

                // Chords set: Em7 (E, G, B, D) followed by Am7 (A, C, E, G)
                const notes = Math.random() > 0.5
                    ? ["E3", "G3", "B3", "D4"]
                    : ["A3", "C4", "E4", "G4"];

                this.synth.triggerAttackRelease(notes, 4);

                // Loop chord changes every 6 seconds to create absolute peace
                setTimeout(playChords, 6000);
            };
            playChords();
        },

        triggerKeySound(frequency) {
            // Re-ensure sound is active
            Tone.start();

            // Keyboard emulator click sound
            const keySynth = new Tone.Synth({
                oscillator: { type: "triangle" },
                envelope: { attack: 0.02, decay: 0.2, sustain: 0.1, release: 0.3 }
            }).toDestination();
            keySynth.volume.value = -12; // lower volume for cozy feel
            keySynth.triggerAttackRelease(frequency, "8n");
        }
    };
}

// Contact Form Alpine module logic
function contactForm() {
    return {
        name: '',
        email: '',
        message: '',
        showSuccess: false,
        submitMessage() {
            if (!this.name || !this.email || !this.message) {
                return;
            }
            // Emulating success behavior beautifully instead of system alerts!
            this.showSuccess = true;
            this.name = '';
            this.email = '';
            this.message = '';

            setTimeout(() => {
                this.showSuccess = false;
            }, 5000);
        }
    }
}
