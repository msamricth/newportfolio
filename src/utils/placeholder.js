import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from './splitting.js'
import { storeToRefs } from 'pinia';
import { useMainStore } from '../stores/main.js';
export default class PlaceholderJS {
    constructor(el, {
        start = 'top 90%',
        end = 'top top',
        placeholderClass = 'placeholder',
        manual = false,
        scrub = false,
        markers = false,
        triggerTarget = 'self',
        speed = 1,
        fadeDur = manual && speed != 1 ? 0.3 * speed : 0.3,
        textDur = manual && speed != 1 ? 0.2 * speed : 0.2,
        stagger = manual && speed != 1 ? 0.025 * speed : 0.015
    } = {}) {
        this.el = el;
        this.opts = { start, end, stagger, fadeDur, textDur, manual, scrub, triggerTarget, markers, speed };
        this.phClass = placeholderClass;
        this._unwatchReduce = null;
        this.timeline = null;
        this.store = useMainStore?.();
        this.refs = this.store ? storeToRefs(this.store) : null;
        this._watchReduceMotion();
        this._split();
        this._injectPlaceholders();
        this._buildTimeline();

    }

    _watchReduceMotion() {
        if (!this.refs?.reduceMotion) return;

        this._unwatchReduce = watch(
            this.refs.reduceMotion,
            (newVal, oldVal) => {
                if (newVal !== oldVal) {
                    this.update()
                    //   console.log(newVal)
                    //   console.log(this.refs.reduceMotion)
                }
            },
            { immediate: false }
        );
    }
    _split(force = false) {

        // console.log('_split '+ this.store?.reduceMotion)
        if (this.store?.reduceMotion === true && !force) return;

        if (this.el.classList.contains('splitted') && !force) {
            this.words = this.el.querySelectorAll('.word');
            return;
        }

        const results = Splitting({ target: this.el, by: 'words' });
        const res = results.find(r => r.el === this.el);
        this.words = res.words;
        //   console.log('_split this.words '+ this.words)
        this.el.classList.add('splitted');
    }

    _injectPlaceholders(force = false) {


        // console.log('_injectPlaceholders '+ this.store?.reduceMotion)
        if (this.store?.reduceMotion === true) return;
        if (this.el.classList.contains('placeholder-added') && !force) {
            const words = this.words ?? Array.from(this.el.querySelectorAll('.word'));
            this.placeholders = Array.from(words).map(word => {
                return word.querySelector('.placeholder');
            });
            return;
        }
        this.placeholders = this.words.map(word => {
            const ph = document.createElement('span');
            ph.classList.add(this.phClass);
            word.appendChild(ph);
            return ph;
        });

        //  console.log('_injectPlaceholders this.placeholders'+ this.placeholders)
        this.el.classList.add('placeholder-added')
    }

    _buildTimeline() {
        const { start, end, stagger, fadeDur, textDur, manual, scrub, triggerTarget, markers, speed } = this.opts;
        const triggerElement = triggerTarget === 'parent' ? this.el.parentElement : this.el;
        const config = {
            toggleActions: 'play reverse play reverse',
            start,
            end,
            markers,
            scrub: scrub || false,
        };
        if (!manual) {
            config.onUpdate = self => {
                if (!scrub) {
                    this.timeline.timeScale(self.direction === -1 ? 8.5 : speed);
                }
            };
        }
        const scrollTrigger = manual ? false : {
            scrollTrigger: {
                trigger: triggerElement,
                ...config
            }
        };
        const timelineOpts = manual ? { paused: true } : scrollTrigger;
        this.timeline = gsap.timeline(timelineOpts)

        if (this.store?.reduceMotion === true) {
            if (this.words && this.words.length) {
                this.words.forEach((w) => {
                    w.removeAttribute('style');
                })
            }
            this.el.removeAttribute('style');
            this.el.classList.remove('placeholder-added');
            return;
        }
        this.timeline.fromTo(this.el,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.2 })
        if (this.placeholders.length) {
            const validPH = this.placeholders.filter(Boolean);
            if (validPH.length) {
                this.timeline.fromTo(validPH,
                    { autoAlpha: 0 },
                    { autoAlpha: 1, duration: fadeDur, stagger }
                );
                this.timeline.addLabel('swap')
                    .to(validPH, { autoAlpha: 0, duration: fadeDur, stagger }, 'swap')

                    .fromTo(this.words,
                        { color: 'transparent' },
                        { color: 'currentColor', duration: textDur, stagger },
                        'swap'
                    );
            }
        }
    }
    update() {
        if (this.timeline) this.timeline.kill();
        this.timeline = null;
        //  console.log('update '+ this.store?.reduceMotion)
        if (this.store?.reduceMotion === true) {
            this.placeholders?.forEach(ph => ph?.remove?.());
            this.placeholders = [];
            this.words?.forEach(w => w.removeAttribute?.('style'));
            this.el.removeAttribute?.('style');
            this.el.classList.remove('placeholder-added');
            return;
        }
        this._split(true);
        this._injectPlaceholders(true);
        this._buildTimeline();
    }
    getTimeline() {
        if (!this.timeline) { this.update(); return }
        return this.timeline;
    }

    play() {
        if (!this.timeline) {
            this.update();
            return
        }
        this.timeline?.play();
    }

    reverse() {
        this.timeline?.reverse();
    }
}