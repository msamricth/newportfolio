import { gsap } from 'gsap'

import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
export function buildUXTL(container) {
    const scope = container
    
    if (!container) return;
    console.log('UX Screen loaded')
    gsap.registerPlugin(DrawSVGPlugin);
    const tl = gsap.timeline()
    const secondarytl = gsap.timeline({paused:true})
    const el = document.querySelector('.hero-wrapper')
    const uxScreens = scope.querySelector(".ux-screens");
    const allLines = scope.querySelectorAll(".line");
    const allShapes = scope.querySelectorAll(".shape");
    const allShapesPaths = scope.querySelectorAll("path.shape");
    const allShapesG = scope.querySelectorAll("g.shape path");
    const bgScreens = scope.querySelectorAll(".background-screens");
    const phoneSquare = scope.querySelectorAll("#phone-square")
    const phoneCircle = scope.querySelectorAll("#phone-circle")
    const phoneBike = scope.querySelectorAll("#phone-bike")
    const phoneLineart = scope.querySelectorAll("#phone-lineart")
    const phoneScreen = scope.querySelectorAll("#phone")
    const phoneGear = scope.querySelectorAll("#phone-gear")
    const phoneGearPath = scope.querySelectorAll("#phone-gear path")
    const phoneMenuBg             = scope.querySelectorAll('#phone-menu-bg')
    const phoneMenuOutline        = scope.querySelectorAll('#phone-menu-outline')
    const phoneOff                = scope.querySelector('#phone-off')
    const phoneOffPaths           = scope.querySelectorAll('#phone-off path')
    const phoneOffPathsNotOutline = scope.querySelectorAll('#phone-off path:not(#stroke-outline)')
    const strokeOutline           = scope.querySelector('#stroke-outline')
    const phoneSquigglesPaths     = scope.querySelectorAll('#phone-sqiggles path')
    const phoneSeparator          = scope.querySelectorAll('#phone-seperator')


       // BG Screens on UX Screens
       if (bgScreens.length) {
        bgScreens.forEach((icon, i) => {
            const lines = icon.querySelectorAll(".line")
            const shapes = icon.querySelectorAll(".shape")

            if (shapes.length) {
                secondarytl.fromTo(
                    Array.from(shapes),
                    { y: -10, filter: "blur(40px)", autoAlpha: 0 },
                    {
                        y: 0, filter: "none", autoAlpha: 1,
                        duration: 0.8, stagger: 0.25, ease: "elastic.out(0.9)"
                    },
                    i * 0.4
                )
            }
            if (lines.length) {
                secondarytl.fromTo(
                    Array.from(lines),
                    { drawSVG: "0%", autoAlpha: 0 },
                    {
                        drawSVG: "100%", autoAlpha: 1,
                        duration: 0.5, stagger: 0.1
                    },
                    i * 0.4
                )
            }
        })
    }
    tl.set(allLines, {
        drawSVG: "0%",
        autoAlpha: 0,
        stagger: 0,
        duration: 0
    });
    tl.set(allShapes, {
        y: -10,
        filter: "blur(40px)",
        autoAlpha: 0,
        stagger: 0,
        duration: 0
    });
    tl.set(phoneScreen, {
        clearProps: "width"
    });
    tl.set([phoneMenuBg, phoneLineart], {
        autoAlpha: 0
    });
    tl.set(bgScreens, {
        autoAlpha: 0.4
    });
    tl.set(phoneSquare, { drawSVG: "0%", duration: 0 });

    tl.set(phoneGear, {
        autoAlpha: 1,
        x: "-220px",
        rotation: 0,
        transformOrigin: "center center"
    })
    tl.addLabel("PhoneStart", "introFinishing+=1.2")
    tl.to(uxScreens, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power3.out"
    }, "PhoneStart")
    tl.addLabel("bikeStart", "PhoneStart")
        .fromTo(
            phoneBike,
            { y: -20, autoAlpha: 0, scale: 0.8 },
            {
                y: 0,
                scale: 2,
                autoAlpha: 1,
                duration: 0.6,
                ease: "elastic.out(0.9)"
            }, "bikeStart"
        )
    tl.to(
        phoneBike,
        {
            transformOrigin: "center center",
            y: -20,
            rotation: -360,
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 1,
            ease: "power2.inOut"
        },
        "bikeStart+=0.8"
    )
    tl.addLabel("gearStart", "bikeStart+=1.8")
        .to(
            [phoneGear, phoneGearPath],
            { autoAlpha: 1, duration: 0 }, "gearStart")
        .fromTo(
            phoneGearPath,
            {
                drawSVG: "0%"
            },
            {
                drawSVG: "100%",
                duration: 0.5,
                stagger: 0.15
            }, "gearStart+=0.2"
        )
        .to(
            phoneGear,
            {
                x: "0",
                rotation: 720,
                duration: 1,
                ease: "power2.out"
            },
            "gearStart+=0.8"
        )


        .addLabel("outlineStart", "gearStart+=0.6");
    tl.set(scope.querySelectorAll("#phone-outline"), { autoAlpha: 1 }, "outlineStart").fromTo(
        scope.querySelectorAll( "#phone-outline"),
        { drawSVG: "0%" },
        { drawSVG: "100%", duration: 1.2, ease: "power1.out" },
        "outlineStart+=0.2"
    );



    tl.addLabel("menuToggle", "outlineStart+=1.4")
        .to(
            phoneOffPaths,
            {
                y: "6px",
                duration: 0
            },
            "menuToggle-=0.8"
        )
        .to(
            phoneOff,
            {
                autoAlpha: 1,
                transformOrigin: "top",
                duration: 0.3
            },
            "menuToggle-=0.6"
        )
        .fromTo(
            phoneOffPaths,
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 0.6, stagger: 0.15, ease: "power1.out" },
            "menuToggle-=0.5"
        )
        .to(
            phoneOff,
            {
                scale: 1.2,
                color: "#33D6BB",
                ease: "bounce.out",
                duration: 0.2
            },
            "menuToggle+=0.5"
        )
        .to(
            phoneOffPaths,
            {
                attr: { stroke: "#33D6BB" }
            },
            "menuToggle+=0.5"
        )

        .fromTo(
            phoneOff,
            {
                scale: 1.2
            },
            {
                scale: 1,
                ease: "bounce.out",
                duration: 0.2,
                repeat: 1,
                yoyo: true
            },
            "menuToggle+=0.8"
        )
        .to(
            phoneOffPathsNotOutline,
            {
                attr: { stroke: "#B5D100" }
            },
            "menuToggle+=1.2"
        )

        .to(
            strokeOutline,
            {
                attr: { stroke: "#B5D100", fill: "#B5D100" }
            },
            "menuToggle+=1"
        )

        .addLabel("menuStart", "menuToggle+=1.2");
    tl.set(phoneMenuOutline, { autoAlpha: 1 }, "menuStart")

        .call(
            () => {
                secondarytl.play(0);
            },
            null,
            "menuStart"
        )
        .fromTo(
            phoneMenuOutline,
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 0.6, stagger: 0.15, ease: "power1.out" },
            "menuStart"
        )
        .to(phoneMenuBg, { autoAlpha: 0.2, duration: 0.8 }, "menuStart+=0.5")
        .addLabel("squigglesStart", "menuStart+=0.4");
    tl.fromTo(
        phoneSquigglesPaths,
        {
            scale: 0.6,
            autoAlpha: 0,
            y: 40
        },
        {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            stagger: 0.15,
            duration: 0.6,
            ease: "elastic.out(1)"
        },
        "squigglesStart"
    );

    tl.addLabel("separatorStart", "squigglesStart+=0.4")
        .set(scope.querySelectorAll("#phone-seperator"), { autoAlpha: 1, duration: 0 }, "separatorStart")
        .fromTo(
            scope.querySelectorAll("#phone-seperator"),
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 0.6, stagger: 0.15, ease: "power1.out" },
            "separatorStart+=0.2"
        )

        .fromTo(
            phoneSquare,
            { drawSVG: "0%", autoAlpha: 0 },
            { drawSVG: "100%", autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: "power1.out" },
            "separatorStart+=0.25"
        )
        .to(
            phoneSquare,
            {
                rotation: 45,
                transformOrigin: "50% 50%",
                duration: 0.4
            },
            "separatorStart+=0.32"
        )
        .set(phoneCircle, { autoAlpha: 1 })
        .fromTo(
            phoneCircle,
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 0.6, stagger: 0.15, ease: "power1.out" }, 
            "separatorStart-=0.08"
        )
        .to(
            phoneCircle,
            {
                rotation: 360,
                transformOrigin: "50% 50%",
                duration: 0.4
            },
            "separatorStart+=0.6"
        )

        .to(bgScreens, {
            autoAlpha: 1, duration: 0.6, ease: "power1.out"
        },
            "separatorStart=0.25"
        )
        .fromTo(
            phoneLineart,
            { drawSVG: "0%", autoAlpha: 0 },
            { drawSVG: "100%",autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: "power1.out" }, "separatorStart+=0.8"
        )



    tl
        .to(phoneScreen, { y: 40, repeat: 2, yoyo: true, duration: 0.8 },
            "lineartStart+=3.25")
        .to(
            phoneScreen,
            { y: 1000, x: -100, duration: 1.5, ease: "back.inOut(0.7)" },
            "lineartStart+=3.6"
        )
        .to(
            phoneScreen,
            { width: 0, duration: 0.5, ease: "power1.out" },
            "lineartStart+=4"
        )
        .to(
            allLines,
            {
                attr: { stroke: "#33D6BB" },
                duration: 0.3,
                stagger: 0.05,
                ease: "power1.out"
            },
            "lineartStart+=4.4"
        )

        .to(
            allLines,
            {
                attr: { stroke: "#E2556C" },
                duration: 0.3,
                stagger: 0.05,
                ease: "power1.out"
            },
            "lineartStart+=4.8"
        )
        .to(
            allShapesG,
            {
                attr: { fill: "#E2556C" },
                duration: 0.3,
                stagger: 0.05,
                ease: "power1.out"
            },
            "lineartStart+=4.8"
        )
        .to(
            allShapesPaths,
            {
                attr: { fill: "#E2556C", stroke: "#E2556C" },
                rotate: 360,
                duration: 0.5,
                stagger: 0.05,
                transformOrigin: "center",
                ease: "power1.out"
            },
            "lineartStart+=5"
        );
    tl.to(
        [bgScreens[0], bgScreens[2]],
        { y: 1000, duration: 1, stagger: 0.05 },
        `lineartStart+=6.5`
    );

    tl.to(
        [bgScreens[1], bgScreens[3]],
        { y: -1000, duration: 1, stagger: 0.05 },
        `lineartStart+=6.5`
    );
    return tl
}