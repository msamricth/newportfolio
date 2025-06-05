<script setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useMatchMedia } from '@/composables/useMatchMedia'
import { ref, onMounted, nextTick, watch, computed } from 'vue'

import { useMainStore } from '../../stores/main.js'
import Heart from '../icons/Heart.vue'
import confetti from 'canvas-confetti'
import Fire from '../icons/Fire.vue'

const showLyric = ref(false)
const textWrapper = ref(null)
const canvasEl = ref(null)
const loaded = ref(false)
const hasOpened = ref(false)
const scene = ref(null)
const store = useMainStore()


const sceneReady = ref(false)


function fireworks(canvas) {
    if(!canvas) return;
    var duration = 10;
    let timeLeft = 10;
    canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    timeLeft = timeLeft - 1
    const tl = gsap.timeline({ paused: false })
    var particleCount = 50 * (timeLeft / duration);
    tl.call(() => {
        canvas.confetti({ ...defaults, particleCount, colors: ['#E2556C', '#E5742C'], origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    }, null, '+=0.35')
    tl.call(() => {
        canvas.confetti({ ...defaults, particleCount, colors: ['#A66EFF', '#33D6BB'], origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, null, '+=0.4')
    tl.call(() => {
        canvas.confetti({ ...defaults, particleCount, colors: ['#E2556C', '#E5742C'], origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    }, null, '+=0.36')
    tl.call(() => {
        canvas.confetti({ ...defaults, particleCount, colors: ['#E2556C', '#E5742C'], origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    }, null, '+=0.39')

}

onMounted(async () => {
    await nextTick
    const sceneEl = scene.value
    const canvasElm = sceneEl.querySelector('#boom');
    watch(showLyric, (newVal) => {
        if (newVal) {
            hasOpened.value = true
        }
    })
    sceneReady.value = "true"
    const textElm = textWrapper.value

    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.6, ease: 'back.out(1.7)' } })
        .add(() => {
            if (!textElm.classList.contains('animating')) textElm.classList.add('animating')
        })
        .set('#fire', {
            autoAlpha: 0,
            y: 100,
            filter: 'blur(40px)',
            duration: 0
        })
        .set(
            '.row-3 .h1',
            {
                scale: 0.8,
                duration: 0
            })

        .timeScale(0.5)

        .addLabel('aEnter');
    const letters = document.querySelectorAll(
        '#charA, #charHeart, #icon, #charOf, #charFire'
    );


    letters.forEach((el, i) => {
        tl.fromTo(
            el,
            { y: -50, autoAlpha: 0, scale: 0.8 },
            {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                duration: 0.6,
                ease: 'elastic.out(0.9)'
            },
            `aEnter+=${i * 0.15}`
        );
    });
    tl.fromTo('#fire', {
        autoAlpha: 0,
        y: 100,
        filter: 'blur(40px)'
    }, {
        autoAlpha: 0.6,
        y: 0,
        duration: 0.75,
        filter: 'blur(15px)',
        ease: 'power1.inOut'

    }, 'aEnter+=0.4')
    tl.fromTo('#fire', {
        autoAlpha: 0.6,
        y: 0,
        filter: 'blur(15px)',
    }, {
        autoAlpha: 0,
        y: 40,
        filter: 'blur(40px)',
        duration: 0.6,
        ease: 'power3.inOut'
    }, 'aEnter+=1.15')


    tl.addLabel('aExit', 'aEnter+=1.4')
        .to(
            ['#charA', '#charHeart', '#charOf', '#charFire'],
            { filter: 'blur(40px)', x: '-1000%', opacity: 0, duration: 1.2, stagger: 0.05 },
            'aExit'
        )
        .to(
            '#icon',
            { filter: 'blur(40px)', y: -120, opacity: 0, duration: 0.3 },
            'aExit+=0.081'
        )


        .addLabel('explEnter', 'aExit+=0.4')
        .to('.row-3', { autoAlpha: 1, duration: 0.2 }, 'explEnter')
        .fromTo(
            '.row-3 .h1',
            {
                x: 200, y: 200, rotation: 15, autoAlpha: 0, scale: 0.8
            }, {
            x: 0, y: 0, rotation: 0, autoAlpha: 1, scale: 1.6,
            stagger: 0.3,
            duration: 0.6,
            ease: 'elastic.out(0.5)'
        },
            'explEnter+=0.2'
        )
    tl.call(() => {
        fireworks(canvasElm)
    }, null,
        'explEnter+=0.6')

        .to(
            '.row-3 .h1', {
            y: '-10vh',
            stagger: 0.05,
            duration: 0.8,
            ease: 'elastic.out(0.5)'
        },
            'explEnter+=1'
        )

        .addLabel('explExit', 'explEnter+=2')
        .to('.row-3', {
            filter: 'blur(40px)',
            opacity: 0, duration: 0.5, ease: 'power1.out',
        }, 'explExit+=0.8')
        .to(
            '.row-3 .h1',
            {
                x: 200, y: -200, rotation: 15, opacity: 0, duration: 0.25, stagger: 0.1,
                ease: "power1.out"
            },
            'explExit+=0.6'
        )

        .addLabel('dontEnter', 'explEnter+=1.4')

        .to(
            ['.row-4', '.row-5'],
            {
                autoAlpha: 1,
            },
            'dontEnter'
        )
    const dontEven = document.querySelectorAll(
        ['.row-4 .h1', '.row-5 .h1']
    );


    dontEven.forEach((el, i) => {
        tl.fromTo(
            el,
            { y: -50, autoAlpha: 0, scale: 0.8 },
            {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                duration: 0.6,
                ease: 'elastic.out(0.9)'
            },
            `dontEnter+=${i * 0.15}`
        );
    })



    tl.addLabel('dontExit', 'dontEnter+=1.4')
        .to(
            ['.row-4 .h1', '.row-5 .h1'],
            {
                opacity: 0,
                y: 100,
                filter: 'blur(40px)',
                stagger: 0.05,
                scale: 0.8,
                duration: 0.3,
                ease: 'back.inOut(0.7)'
            },
            'dontExit'
        )

        .add(() => {
            textElm.classList.remove('animating')
        })




        .addLabel('encore', 'dontExit+=0.2')
        .to(
            textElm,
            { scale: 0.75, duration: 0.05, y: '-5%', ease: 'power1.out' },
            'encore'
        )
        .to('.row-3 .h1', {
            rotation: 0
        }, 'encore')
        .to(['#charA', '#charHeart', '#icon', '#charOf', '#charFire', '.row-3', '.row-3 .h1', '.row-4 .h1', '.row-5 .h1'], {
            x: 0, scale: 0, y: 0, filter: 'blur(0)', duration: 0.2, stagger: 0.015, ease: 'elastic.out(1)'
        }, 'encore+=0.2')
        .to(['#charA', '#charHeart', '#icon', '#charOf', '#charFire', '.row-3 .h1', '.row-3', '.row-4 .h1', '.row-5 .h1', '.row-4', '.row-5'], {
            scale: 1, opacity: 1, stagger: 0.1, ease: 'elastic.out(1)'
        }, 'encore+=0.5')
        /*
                .call(() => {
                    initHearts()
                    window.explodeAllHearts()
                }, null, 'encore+=3') */
        .to(
            ['#charA', '#charHeart', '#icon', '#charOf', '#charFire', '.row-3 .h1', '.row-3', '.row-4 .h1', '.row-5 .h1', '.row-4', '.row-5'],
            { x: '-50%%', autoAlpha: 0, filter: 'blur(40px)', ease: 'power1.out', stagger: 0.05, duration: 0.5, },
            'encore+=5.5'
        )

        .to(
            textElm,
            { x: -2000, duration: 0.3, filter: 'blur(40px)', ease: 'power1.out' },
            'encore+=3'
        )
        .call(() => {
            tl.restart()
        }, null, 'encore+=3.5')
    ScrollTrigger.create({
        trigger: '.header-scenes',
        onEnter:()=>{
            tl.play()
            store.toggleFold(true);
        },
        onLeave: () => tl.pause(),
        onEnterBack: () => {
            tl.play()
            store.toggleFold(true);
        }
    })
    setTimeout(() => loaded.value = true, 250)
})
</script>

<template>
    <div ref="scene" class="overflow-x-clip motion-reduce:hidden w-full header-scenes 2xl:pt-24 relative">
        <canvas class="absolute top-0 bottom-0 h-full w-full" id="boom"></canvas>
        <div
            class="flex flex-col md:flex-row justify-center lg:justify-between items-start md:gap-6 max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto lg:px-12 relative pt-22 md:py-0 lg:py-8 overflow-visible h-[85dvh] px-8 xl:items-center xl:max-h-218 2xl:max-h-270">
            <div class="absolute top-0 h-full w-full flex justify-center items-center pointer-events-none left-0"
                :class="store.loaded ? 'disapear opacity-0' : 'animate subtle-slide-in'">
                <Heart class="w-1/2 self-start max-w-100 jello-horizontal h-full object-contain object-center" />
            </div>
            <div ref="textWrapper"
                class="flex flex-col justify-center gap-6 md:gap-0 lg:px-4 w-full md:max-w-3/5 lg:max-w-3xl relative z-20 font-heading animating lg:gap-6 xl:gap-8 group transition duration-700 h-dvh md:min-h-[70vh] xl:min-h-160 xl:h-160"
                :class="{ 'opacity-0': !loaded }">
                <div
                    class="flex max-md:flex-wrap md:flex-nowrap justify-between md:justify-center gap-6 items-center w-full row-1 row leading-1">
                    <span id="charA" class="h1 text-6xl lg:text-7xl font-extrabold  bounce-in fold">A</span>
                    <span id="charHeart" class="h1 text-6xl lg:text-7xl font-extrabold text-center">
                        HEART
                    </span>
                    <div class="flex justify-center items-center h-full heart-container">
                        <img crossorigin="anonymous"
                            src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346872/heart_dfz3gf.svg"
                            alt="Illustration of a heart" id="icon"
                            class="w-24 self-start max-w-60 jello-horizontal h-full object-contain object-center" />
                    </div>
                </div>

                <div
                    class="flex max-lg:flex-wrap lg:flex-nowrap justify-center gap-6 lg:gap-24 w-full row-2 row lg:-mt-10">
                    <span id="charOf" class="text-8xl font-extrabold h1 fold">
                        OF
                    </span>
                    <span id="charFire" class="text-8xl font-extrabold h1 fold">
                        FIRE
                    </span>
                </div>

                <div class="flex max-md:flex-col md:flex-nowrap justify-center max-md:items-center md:justify-between gap-6 w-full md:w-fit max-w-4xl lg:max-w-2xl mx-auto row-3 row -rotate-5 leading-1.8 md:-mb-2 lg:-mt-4 xl:-mt-8"
                    style="opacity: 0;">
                    <span class="text-7xl md:text-4xl lg:text-8mxl font-extrabold the h1 row md:text-left">THE</span>
                    <span
                        class="text-6xl md:text-4xl lg:text-8mxl font-extrabold explosions h1 row max-w-full max-md:break-all pb-6 lg:pb-0"
                        id="exp">EXPLOSIONS</span>
                </div>

                <div class="flex flex-nowrap justify-center group-[.animating]:max-md:flex-col text-center gap-6 w-full row-4 row lg:-mt-4 xl:-mt-8  md:leading-1">
                    <span class="text-7xl font-extrabold h1" style="opacity: 0;">
                        DONT
                    </span>
                    <span class="text-7xl font-extrabold h1" style="opacity: 0;">
                        EVEN
                    </span>
                </div>

                <div class="flex flex-nowrap group-[.animating]:max-md:flex-col text-center justify-center gap-6 w-full row-5 row  leading-1 lg:-mt-10">
                    <span class="text-8xl md:text-7xl lg:text-8xl font-extrabold h1" style="opacity: 0;">
                        SCARE
                    </span>
                    <span class="text-8xl md:text-7xl lg:text-8xl font-extrabold h1" style="opacity: 0;">
                        ME
                    </span>
                </div>
                <div class="absolute bottom-0 opacity-0 -bottom-30 z-0 w-full lg:-bottom-10 xl:bottom-10" id="fire">
                    <Fire />
                </div>
            </div>
            <div class="max-w-lg hidden md:flex flex-col relative md:w-1/2 z-10 md:max-w-50 lg:max-w-60  xl:max-w-70 justify-center items-start 2xl:max-w-110 h-full"
                :class="loaded ? 'animate subtle-slide-in' : 'opacity-0'">
                <img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1748635877/1744399801866_qxlwrk.webp"
                    alt="Emm as an action figure" class="w-auto object-contain" id="introImage" />
            </div>
            <div class="mt-4 rounded-[3rem] px-3 py-1 overflow-hidden absolute bottom-0 lg:bottom-11 lg:right-21 z-50 right-16 md:right-18 md:bottom-6 bg-[#1f1f1f]"
                v-if="loaded" :class="showLyric
                    ? 'animate slide-in-blurred-right'
                    : hasOpened
                        ? 'disapear pointer-events-none'
                        : 'opacity-0 pointer-events-none'
                    ">
                <button @click="showLyric = !showLyric"
                    class="absolute top-2.5 right-4 hover:scale-[1.08] transition-all bg-[#1f1f1f] rounded-[3rem] cursor-pointer">
                    <svg height="24px" class="text-current fill-current" id="Layer_1"
                        style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="24px"
                        xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g>
                            <path
                                d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" />
                        </g>
                    </svg>
                </button>
                <iframe class="w-full max-w-md h-20 rounded-lg"
                    src="https://open.spotify.com/embed/track/3Bp3aq6ftmUhxajD9T9kik?utm_source=generator&theme=0"
                    frameborder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            <div class="w-full order-3 md:absolute md:bottom-6 lg:bottom-0 md:px-8 lg:px-12 z-40 max-w-full lg:max-w-[1024px] xl:max-w-[1440px] left-0 2xl:bottom-25"
                :class="!store.loaded ? 'opacity-0' : 'animate subtle-slide-in'">

                <!-- Lyric + Info Button -->
                <div class="flex flex-nowrap justify-between items-end w-full">
                    <span class="text-sm text-gray-500 animate subtle-slide-in flex gap-1">
                        <svg enable-background="new 0 0 64 64" class="text-current fill-current" height="18px"
                            id="Layer_1" version="1.1" viewBox="0 0 64 64" width="18px" xml:space="preserve"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path
                                d="M23.727,16.403v4.84v5.058v14.236c-1.268-0.777-2.754-1.233-4.35-1.233c-4.612,0-8.353,3.74-8.353,8.349  c0,4.614,3.74,8.354,8.353,8.354c4.61,0,8.349-3.739,8.35-8.352h0V25.151l21.25-6.109V33.33c-1.268-0.777-2.754-1.233-4.35-1.233  c-4.614,0-8.353,3.739-8.353,8.348c0,4.613,3.739,8.354,8.353,8.354c4.344,0,7.914-3.325,8.31-7.57h0.04V17.892v-3.586V7.993  L23.727,16.403z" />
                        </svg>
                        <em><strong>Random Lyric</strong></em>
                    </span>
                    <button @click="showLyric = !showLyric"
                        class="btn-secondary bg-gray-800 text-white p-2 rounded-[3rem] cursor-pointer transition-all hover:scale-[1.08] hover:text-accent duration-700"
                        aria-label="Toggle lyric">
                        <svg class="bi bi-question-circle-fill" fill="currentColor" height="16" viewBox="0 0 16 16"
                            width="16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.animating .row {
    position: absolute;
    z-index: 20;
}


.row-1 {
    top: 70px;
}

.row-2 {
    top: calc(clamp(4.76rem, 9vw, 8.6rem) + 78px);
}

.row-3 {
    top: 42px;
}

.animating .row-3 {
    flex-wrap: wrap;
}

.row-3 .the {
    top: 0;
    left: 2vw;
}

.row-3 .explosions {
    top: calc(clamp(5.6rem, 5vw, 8rem) * 1.2);
    left: 8vw;
}

.animating .row-4 {
    margin-top: 0px;
}

.row-4 {
    top: calc(clamp(5.6rem, 5vw, 8rem) + 70px);
}

.row-5 {
    top: calc((clamp(5.6rem, 12vw, 9.6rem) * 1.9));
}

@media screen and (min-width: 1024px) {

    .animating #icon {
        scale: 1.08;
    }
}

@media screen and (min-width: 1365px) {
    .row-3 {
        top: 132px;
    }

    .row-4 {
        top: 250px;
    }

    .row-5 {
        top: 406px;
    }
}

@media screen and (min-width: 1920px) {

    .row-1 {
        top: 70px;
    }

    .row-2 {
        top: calc(clamp(4.76rem, 9vw, 8.6rem) + 78px);
    }

    .row-3 {
        top: 42px;
    }

    .row-3 {
        top: 132px;
    }

    .row-4 {
        top: 250px;
    }

    .row-5 {
        top: 406px;
    }
}

@media screen and (max-width: 992px) {

    .animating .row-1 {
        top: 16vh;
    }

    .animating .row-2 {
        top: 34vh;
    }

    .animating .row-3 {
        top: 18vh;
    }

    .animating .row-3 .the {
        left: 6vw;
        top: -5vh;
    }

    .animating .row-3 .explosions {
        top: 3.4rem;
        left: 10vw;
    }


    .animating .row-4 {
        top: 32vh;
    }

    .animating .row-5 {
        top: 48vh;
    }
}

@media screen and (max-width: 768px) {

    .animating .row-1.row {
        top: 0vh;
    }

    .animating .row-2.row {
        top: 46vh;
    }

    .animating .row-3.row .the {
        text-align: center;
        font-size: var(--text-4xl);
        width: 100%;
        top: -2vh;
        left: 0;
    }

    .animating .row .explosions {
        text-align: center;
        width: 100%;
        left: -8px;
        top: calc(clamp(5.6rem, 5vw, 8rem) * 1.2);
        font-size: var(--text-4xl);
        word-break: break-all;
    }

    .animating .row-3 {
        top: 10%;
        scale: 0.8;
    }

    .animating #charA,
    .animating #charHeart,
    .animating #icon,
    .animating #charOf,
    .animating #charFire {
        width: 100%;
        text-align: center;
        font-size: var(--text-8xl);
        margin-left: auto;
        margin-right: auto;
    }

    .animating .row-4.row {
        top: 26%;
    }

    .animating .row-5.row {
        top: 54%;
    }
    .animating .heart-container {
        width: 100%;
    }
}
</style>