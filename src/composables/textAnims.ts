import { nextTick } from 'vue'
import gsap from 'gsap'
import PlaceholderJS from '../utils/placeholder.js'
export function textAnim(el, reversed = false, toggleActions = 'play none none none') {
    nextTick(() => {
        if (!el) return;
        const h = el.querySelector('h4.placeholder-line')
        const h5 = el.querySelector('h5.placeholder-line')
        const p = el.querySelector('p.placeholder-line')
        const btn = el.querySelector('.btn')
        const items = el.querySelectorAll('.list-disc li')
        const tagEls = el.querySelectorAll('.tags')
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                id: 'sectionST',
                start: 'top 50%',
                end: 'bottom 90%',
                toggleActions: toggleActions,
            }
        })
        tl.fromTo(h,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 0.3
            }, 0.1
        );

        tl.add(() => {
            const phH = new PlaceholderJS(h, { manual: true });
            phH.play()
        }, 0)
        if (p) {
            tl.fromTo(p,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                    onStart: () => {
                        //   phP.play()
                    }
                }, 0.3
            )
            tl.add(() => {
                const phP = new PlaceholderJS(p, { manual: true, speed: 2 });
                phP.play()
            }, 0.28)
        }
        if (h5) {
            tl.fromTo(h5,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                }, 0.4
            )
            tl.add(() => {
                const phP = new PlaceholderJS(h5, { manual: true, speed: 2 });
                phP.play()
            }, 0.38)
        }

        items.forEach((item, i) => {
            tl.fromTo(item,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                },
                0.3 + (i * 0.15)
            );
        })
        let toll = 0;
        tagEls.forEach((tag, i) => {
            tl.fromTo(tag, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: 'power2.out'
            }, items.length * 0.15 + 0.6 + (i * 0.05))
            toll = items.length * 0.15 + 0.6 + (i * 0.05)
        })
        if (btn) {
            tl.fromTo(btn,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                },
                0.5 + toll
            );
        }
        if (reversed) tl.reversed()
    })
}
