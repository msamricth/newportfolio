import { nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export function imgAnim(el, reversed = false, toggleActions = 'play none none none') {
    nextTick(() => {
        if (!el) return;
        const imgs = el.querySelectorAll('img, .image')
        const svgs = el.querySelectorAll('.icon-btn')
        const svgCont = el.querySelector('.iconTrack')
        let int = 0
        if (svgs) {
            const tl = gsap.timeline({
                paused: true
            })
            svgs.forEach((icon, index) => {
                const overlayIcon = icon.querySelector('.icon-wipe-overlay');
                const overlayPaths = overlayIcon.querySelectorAll('path');
                let len = 0;
                int = index * 0.15;
                // tl.fromTo(icon, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5 }, index * 0.5)
                overlayPaths.forEach((path) => {
                    len = path.getTotalLength();
                    path.style.strokeDasharray = len;
                    path.style.strokeDashoffset = len;
                });
                tl.fromTo(icon, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5 }, int)

                int = int * index
                tl.fromTo(overlayPaths, {
                    autoAlpha: 0,
                    strokeDashoffset: len
                }, {
                    autoAlpha: 1,
                    strokeDashoffset: 0,
                    duration: 1,
                    ease: 'power3.out',
                }, int)
            })
            ScrollTrigger.create({
                trigger: svgCont,
                start: 'top 80%',
                onEnter: () => tl.play(),
                onLeaveBack: () => tl.reverse().progress(0)
            })
        }

        if (imgs) {
            imgs.forEach((img, i) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 50%',
                        end: 'bottom 90%',
                        toggleActions: toggleActions,
                    }
                })

                tl.fromTo(img, {
                    y: -200,
                    autoAlpha: 0,
                    filter: 'blur(40px)'
                }, {
                    y: 0,
                    filter: 'blur(0px)',
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: 'power1.inOut'
                }, i * 0.6)
            })
        }
    })
}
