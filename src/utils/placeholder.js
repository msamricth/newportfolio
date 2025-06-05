import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from './splitting.js'


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
        textDur =  manual && speed != 1 ? 0.2 * speed : 0.2,
        stagger = manual && speed != 1 ? 0.025 * speed : 0.015
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
        const timelineOpts = manual ? {paused:true} : scrollTrigger;
        this.timeline = gsap.timeline(timelineOpts)
        if(this.el.classList.contains('opacity-0')){
            this.timeline.to(this.el,{autoAlpha:1,duration:0.2})
        }
        this.timeline.fromTo(this.placeholders,
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
