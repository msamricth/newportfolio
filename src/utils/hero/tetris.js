import { gsap } from 'gsap'

export function buildTetrisTL(container) {
    const scope = container
    if (!container) return;
    const tl = gsap.timeline()
    const tetrisTL = gsap.timeline();
    const tetris = scope.querySelector("#tetris");
    const letters = scope.querySelectorAll(
        '#bridges span, #design span'
    );
    //Tetris bro
    tetrisTL.timeScale(1.5)
    if (tetris) {

        tetrisTL.to(tetris, {
            autoAlpha: 0.6,
            filter: 'none',
            duration: 0.6,
            ease: 'power1.out'

        })
        tetrisTL.fromTo(
            "#tetris-line path",
            {
                autoAlpha: 0,
                y: -1000
            },
            {
                autoAlpha: 1,
                y: -700,
                duration: "1.5",
                ease: "back.inOut(0.7)"
            }
        );
        tetrisTL.fromTo(
            "#tetris-line path",
            {
                x: -80
            },
            {
                x: 0,
                duration: "0.4",
                ease: "power1.out"
            }
        );
        tetrisTL.fromTo(
            "#tetris-line path",
            {
                y: -700
            },
            {
                y: 0,
                duration: "3",
                ease: "back.inOut(0.7)"
            }
        );
        tetrisTL.fromTo(
            "#tetris-stack",
            {
                autoAlpha: 0,
                y: "-200px",
                transformOrigin: "50% 50%"
            },
            {
                autoAlpha: 1,
                y: "0",
                duration: "1.5",
                ease: "back.inOut(0.7)"
            }
        );

        tetrisTL.fromTo(
            "#tetris-stack g",
            {
                rotation: 180,
                transformOrigin: "50% 50%"
            },
            {
                rotation: 0,
                duration: "0.4",
                ease: "power1.out"
            }
        );
        tetrisTL.fromTo(
            "#tetris-stack",
            {
                y: "0dvh",
                transformOrigin: "50% 50%"
            },
            {
                y: '600px',
                duration: "1.5",
                ease: "back.inOut(0.7)"
            }
        );
        tetrisTL.fromTo(
            "#tetris-l path",
            {
                autoAlpha: 0,
                y: -1000
            },
            {
                autoAlpha: 1,
                y: -700,
                duration: "1.5",
                ease: "back.inOut(0.7)"
            }
        );
        tetrisTL.fromTo(
            "#tetris-l path",
            {
                x: -320
            },
            {
                x: 0,
                duration: "0.8",
                ease: "power1.out"
            }
        );
        tetrisTL.fromTo(
            "#tetris-l path",
            {
                y: -700
            },
            {
                y: 0,
                duration: "2.5",
                ease: "back.inOut(0.7)"
            }
        );

        tetrisTL.fromTo(
            "#tetris path",
            {
                y: 0,
                x: 0,
                autoAlpha: 1,
                filter: 'none'
            },
            {
                x: () => gsap.utils.random(-1000, 500),
                y: () => gsap.utils.random(-1000, 500),
                autoAlpha: 0,
                filter: 'blur(40px)',
                duration: "2",
                ease: "back.inOut(0.7)"
            }, '+=0.2'
        );
        //end tetris
    }


    tl.set("#tetris-stack", {
        y: "-200px",
    })
    tl.set("#tetris-line path", {
        y: -1000,
        x: -80,
        autoAlpha: 0
    })
    tl.set("#tetris-l path", {
        y: -1000,
        x: -320,
        autoAlpha: 0,
    })
    tl.set("#tetris-stack g", {
        rotation: 180,
        transformOrigin: "50% 50%"
    });
    tl.set('.intro h1.headline', {
        y: 0,
        transformOrigin: "center center"
    })


    tl.addLabel('Enter');



    letters.forEach((el, i) => {
        tl.fromTo(
            el,
            { y: -50, autoAlpha: 0, scale: 0.4 },
            {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                duration: 0.8,
                ease: 'elastic.out(0.9)'
            },
            `Enter+=${i * 0.25}`
        );
    });
    tl.to(['#bridges', '#design'], {
        y: '0',
        duration: 0.8,
        ease: 'elastic.out(0.9)',
        stagger: 0.15
    }, 'Enter+=2');
    tl.fromTo(
        '#works span',
        { y: -50, autoAlpha: 0, scale: 0.4 },
        {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 1.5,
            stagger: 0.4,
            ease: 'elastic.out(0.9)'
        },
        'Enter+2.5'
    );

    tl.addLabel("introFinishing", "+=4")

    tl.to(
        ['#bridges', '#works'], { x: 40, repeat: 2, yoyo: true, duration: 0.8, },
        "introFinishing")
        .to(
            ['#bridges', '#works'],
            { x: -1000, autoAlpha: 0, filter: 'blur(40px)', duration: 1.5, ease: "elastic.out(1)", },
            "introFinishing+=1"
        )

    tl.to(
        '#design', { x: -40, repeat: 2, yoyo: true, duration: 0.8 },
        "introFinishing")
        .to(
            "#design",
            { x: 1000, autoAlpha: 0, filter: 'blur(40px)', duration: 1.5, ease: "elastic.out(1)" },
            "introFinishing+=1"
        )


    return tl
}