import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';

gsap.registerPlugin(ScrollTrigger);

export default class PlaceholderJS {
    constructor(el, {
        start = 'top 90%',
        end = 'top top',
        stagger = 0.05,
        fadeDur = 0.3,
        textDur = 0.4,
        placeholderClass = 'placeholder',
        manual = false,
        scrub = false,
        markers = false,
        triggerTarget = 'self', // 'self' (default) or 'parent'
        speed = 1
    } = {}) {
        this.el = el;
        this.opts = { start, end, stagger, fadeDur, textDur, manual, scrub, triggerTarget, markers, speed };
        this.phClass = placeholderClass;
        this.timeline = null;

        this._split();
        this._injectPlaceholders();
        this._buildTimeline();
    }

    _split() {
        const results = Splitting({ target: this.el, by: 'words' });
        const res = results.find(r => r.el === this.el);
        this.words = res.words;
    }

    _injectPlaceholders() {
        this.placeholders = this.words.map(word => {
            const ph = document.createElement('span');
            ph.classList.add(this.phClass);
            word.appendChild(ph);
            return ph;
        });
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

        this.timeline = gsap.timeline(scrollTrigger)
            .fromTo(this.placeholders,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: fadeDur, stagger }
            )
            .addLabel('swap')
            .to(this.placeholders,
                { autoAlpha: 0, duration: fadeDur, stagger },
                'swap'
            )
            .fromTo(this.words,
                { color: 'transparent' },
                { color: 'currentColor', duration: textDur, stagger },
                'swap'
            );
    }

    getTimeline() {
        return this.timeline;
    }

    play() {
        this.timeline.play();
    }

    reverse() {
        this.timeline.reverse();
    }
}
