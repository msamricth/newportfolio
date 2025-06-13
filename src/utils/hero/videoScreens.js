import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import PlaceholderJS from '@/utils/placeholder';

gsap.registerPlugin(DrawSVGPlugin);

export function buildVideoTL(container) {
    const scope = container
    if (!container) return;
    console.log('Video Screen loaded')
    const tl = gsap.timeline();

    const videoScreens = scope.querySelector('.video-screens');
    const videoScreen = scope.querySelector('#video-screen');
    const sliderArrow = scope.querySelector('#sliderArrow');
    const progressCircle = scope.querySelector('#progressCircle');
    const impactEl = scope.querySelector('#impact');
    const impact = new PlaceholderJS(impactEl, { manual: true, speed: 4 });
    const impactTL = impact.getTimeline();

    const length = progressCircle.getTotalLength();
    gsap.set(progressCircle, { drawSVG: "0%" });
    tl.addLabel("videoStart")
        .to(videoScreens, {
            autoAlpha: 1,
            duration: 0.4,
            ease: "power3.out"
        }, "videoStart")
        .to("#video-big", { autoAlpha: 1, duration: 0.2 }, "videoStart")
        .fromTo(
            "#video-big",
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 1.2, ease: "power1.out" },
            "videoStart+=0.2"
        )
        .to(
            "#video-play-circle",
            { autoAlpha: 1, duration: 0.2 },
            "videoStart+=0.8"
        )
        .fromTo(
            "#video-play-circle",
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 0.6, ease: "power1.out" },
            "videoStart+=0.8"
        )
        .fromTo(
            "#video-play-triangle",
            { autoAlpha: 0, scale: 0.4 },
            {
                autoAlpha: 1,
                scale: 1,
                duration: 0.8,
                ease: "elastic.out(0.9)"
            },
            "videoStart+=1"
        )

        tl.to(videoScreen, {
            y: 60,
            duration: 0.4,
            ease: "back.inOut(0.7)"
        }, "videoStart+=1")

    tl.call(() => {
        impactTL.play(0)
    }, null, "videoStart+=1.2")
        .to(
            "#video-lines path",
            { y: 25, duration: 0.8, ease: "power1.out" },
            "videoStart+=1.2"
        )
        .to("#video-lines path", { autoAlpha: 1, duration: 0.2 }, "videoStart+=1.4")
        .fromTo(
            "#video-lines path",
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 1, ease: "power1.out", stagger: 0.15 },
            "videoStart+=1.4"
        )
        .to("#video-small", { autoAlpha: 1, duration: 0.2 }, "videoStart+=2")
        .fromTo(
            "#video-small",
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 1.2, ease: "power1.out" },
            "videoStart+=2.2"
        )
        .to(
            "#video-small",
            { attr: { fill: "#E5742C" }, duration: 0.6, ease: "power1.out" },
            "videoStart+=3.6"
        )
        .to(
            "#video-small",
            { attr: { fill: "#B5D100" }, duration: 0.6, ease: "power1.out" },
            "videoStart+=4.2"
        )
        .to(
            "#video-small",
            { attr: { fill: "#33D6BB" }, duration: 0.6, ease: "power1.out" },
            "videoStart+=4.8"
        )
        .to(
            "#video-play",
            {
                scale: 1,
                color: "#33D6BB",
                ease: "bounce.out",
                duration: 0.2
            },
            "videoStart+=3.5"
        )
        .to(
            "#video-play path",
            {
                attr: { stroke: "#33D6BB" }
            },
            "videoStart+=3.6"
        )
        .to(
            "#video-play-triangle",
            {
                attr: { fill: "#33D6BB" }
            },
            "videoStart+=3.6"
        )

        .fromTo(
            "#video-play",
            {
                scale: 1,
                transformOrigin: "50% 50%"
            },
            {
                scale: 0.8,
                ease: "bounce.out",
                duration: 0.2,
                repeat: 1,
                yoyo: true
            },
            "videoStart+=3.9"
        )
        .to(
            "#video-big",
            { attr: { fill: "#E5742C" }, duration: 0.8, ease: "power1.out" },
            "videoStart+=4.6"
        )
        .to(
            "#video-big",
            { attr: { fill: "#E2556C" }, duration: 0.8, ease: "power1.out" },
            "videoStart+=5.8"
        )
        .call(() => {
            impactTL.reverse()
        }, null, "videoStart+=6.5")
        .to(
            "#video-big",
            { attr: { fill: "#A66EFF" }, duration: 0.8, ease: "power1.out" },
            "videoStart+=6.6"
        )
        .to(
            "#video-big",
            {
                attr: { stroke: "#B5D100", fill: "#B5D100" },
                duration: 0.8,
                ease: "power1.out"
            },
            "videoStart+=7.4"
        )
        .to(
            "#video-small",
            {
                attr: { stroke: "#B5D100", fill: "#B5D100" },
                duration: 0.8,
                ease: "power1.out"
            },
            "videoStart+=7.4"
        )
        .to(
            "#video-lines path",
            { attr: { stroke: "#B5D100" }, duration: 0.8, ease: "power1.out" },
            "videoStart+=7.4"
        )
        .to(
            "#video-play path",
            {
                attr: { stroke: "#B5D100", fill: "#B5D100" },
                duration: 0.8,
                ease: "power1.out"
            },
            "videoStart+=7.4"
        );

    tl.addLabel("buttonAnim", "videoStart+=7")

    tl.addLabel('buttonAnim', 'videoStart+=7')
        .to(sliderArrow, { autoAlpha: 1, y: '-20dvh', duration: 0.6, ease: 'elastic.out(1)' })
        .to('#video-screen', {
            autoAlpha: 0.9,
            filter: 'blur(1px)',
            duration: 0.5,
            ease: "power3.out"
        }, "buttonAnim+=0.2")
        
        .to(progressCircle, { autoAlpha: 1, duration: 0.8 }, 'buttonAnim')
        .to(sliderArrow, { scale: 1.2, duration: 0.6, ease: 'elastic.out(1)' }, 'buttonAnim+=0.8')
        

        tl.to(progressCircle, {
            drawSVG: "100%",
            duration: 1.5,
            ease: 'none'
          }, 'buttonAnim+=0.9')

        .to(sliderArrow.querySelectorAll('svg'),
            { attr: { color: "#A66EFF" }, duration: 0.8, ease: "power1.out" }, "buttonAnim+=1")

    tl.addLabel("videoLeave", "buttonAnim+=2")
        .to(
            ["#video-big", "#video-play path"],
            { x: -40, repeat: 2, yoyo: true, duration: 0.8, },
            "videoLeave"
        ).to(
            ["#video-big", "#video-play path"],
            {
                x: -1000,
                autoAlpha: 0,
                filter: "blur(40px)",
                duration: 1.5,
                ease: "elastic.out(1)",
                stagger: 0
            },
            "videoLeave+=0.8")
        .to(
            sliderArrow,
            { y: -40, repeat: 2, yoyo: true, duration: 0.8, },
            "videoLeave+=0.2")
        .to(
            sliderArrow,
            {
                y: -1000,
                autoAlpha: 0,
                filter: "blur(40px)",
                duration: 1.5,
                ease: "elastic.out(1)",
                stagger: 0
            },
            "videoLeave+=1"
        );




    tl.to(
        ["#video-small", "#video-lines path"],
        { x: 40, repeat: 2, yoyo: true, duration: 0.8 },
        "videoLeave+=0.2"
    ).to(
        ["#video-small", "#video-lines path"],
        {
            x: 1000,
            autoAlpha: 0,
            filter: "blur(40px)",
            duration: 1.5,
            ease: "elastic.out(1)"
        },
        "videoLeave+=1"
    );




    return tl
}