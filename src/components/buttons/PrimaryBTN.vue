<template>
    <a :href="href" ref="buttonEl" @mouseenter="handleHoverIn" @mouseleave="handleHoverOut" @click.prevent="handleClick"
        role="button"
        class="relative flex flex-col items-center justify-center overflow-visible font-black transition-colors duration-700 cursor-pointer w-65 h-21 group/cta"
        :aria-label="label">
        <span class="flex gap-0.5 w-55 justify-center relative z-20 **:transition-all **:duration-100" id="label"
            ref="labelEl">{{ label
            }}</span>
        <svg viewBox="0 0 326 82" class="absolute w-full overflow-visible">
            <path id="mainPath" ref="mainPath" fill="none" stroke="currentColor" stroke-width="4"
                d="M0 41C0 18.3563 18.3563 0 41 0H285C307.644 0 326 18.3563 326 41C326 63.6437 307.644 82 285 82H41C18.3563 82 0 63.6437 0 41Z" />
            <g class="absolute right-0 z-10 overflow-hidden w-18">
                <path id="tailPath" ref="tailPath" class="opacity-0 fill-current "
                    d="M0 41C0 18.3563 18.3563 0 41 0H285C307.644 0 326 18.3563 326 41C326 63.6437 307.644 82 285 82H41C18.3563 82 0 63.6437 0 41Z" />
            </g>
        </svg>
    </a>

</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import Splitting from '@/utils/splitting'


const props = defineProps({
    href: String,
    label: String,
    target: String,
    delay: {
        type: String,
        default: '0.7s',
    },
    onClick: Function,
})

const buttonEl = ref(null)
const labelEl = ref(null)
const mainPath = ref(null)
const tailPath = ref(null)

const mainShapes = [
    "M0 41C0 18.3563 18.3563 0 41 0H285C307.644 0 326 18.3563 326 41C326 63.6437 307.644 82 285 82H41C18.3563 82 0 63.6437 0 41Z",
    "M0 41C0 18.3563 18.3563 0 41 0H126.564C150.371 0 173.48 7.2561 195.261 16.867C209.802 23.2833 226.939 29.1565 241.5 29.5C256.448 29.8526 274.07 24.5053 289.342 18.2701C305.962 11.4854 326 23.0493 326 41C326 58.9507 305.962 70.5146 289.342 63.7299C274.069 57.4947 256.448 52.1474 241.5 52.5C226.939 52.8435 209.802 58.7167 195.261 65.133C173.48 74.7439 150.371 82 126.564 82H41C18.3563 82 0 63.6437 0 41Z",
    "M0 41.0002C0 18.3565 17.7305 0.000166609 39.6023 0.000166609H113.565C129.751 0.000166609 160 4.22933e-05 167 0.000209047C192 23.3318 255 41.0002 255 41.0002C255 41.0002 196 55.0002 164 82.0002C164 82.0002 129.914 82.0002 114.02 82.0002H39.6023C17.7305 82.0002 0 63.6438 0 41.0002Z",
    "M0 41C0 18.3563 17.7305 0 39.6023 0H113.565C129.751 0 195.706 0.522439 210.634 7C238.555 19.1155 225.5 41.5 225.5 41.5C225.5 41.5 238.517 64.6858 210.634 76.5C195.924 82.7328 129.914 82 114.02 82H39.6023C17.7305 82 0 63.6437 0 41Z",
    "M0 41.0007C0 18.3571 17.7305 0.000732422 39.6023 0.000732422H113.565C129.751 0.000732422 221.5 0.000732422 221.5 0.000732422C231 12.5004 231 41 231 41C231 41 232 65.5007 221.5 82.0007C221.5 82.0007 129.914 82.0007 114.02 82.0007H39.6023C17.7305 82.0007 0 63.6444 0 41.0007Z",
    "M0 41C0 18.3563 17.7305 0 39.6023 0H113.565C129.751 0 237.5 0 237.5 0V82C237.5 82 129.914 82 114.02 82H39.6023C17.7305 82 0 63.6437 0 41Z"
];
const tailShapes = [
    null,
    null,
    "M255.5 41.0002C270.98 40.637 289.001 32.3833 304.239 23.3318C318.216 15.029 337.931 24.5596 337.931 40.8169C337.931 56.9688 318.466 66.5108 304.504 58.3898C289.211 49.4945 271.07 41.3486 255.5 41.0002Z",
    "M239 41.9474C254.399 41.5867 240.493 18.6575 255.651 9.66708C269.555 1.42033 321 25.6179 321 41.7654C321 57.8082 269.54 79.3142 255.651 71.2481C240.438 62.4129 254.488 42.2935 239 41.9474Z",
    "M239 41.9475C239 41.9475 240.493 13.4904 255.651 4.50001C269.555 -3.74673 321 25.618 321 41.7654C321 57.8083 269.54 85.0662 255.651 77.0001C240.438 68.1648 239 41.9475 239 41.9475Z",
    "M249.654 1.5L321.002 41.7647L249.653 80.5L249.654 1.5Z"
];
const activeMainShapes = [
    //  "M0 41C0 18.3563 17.7305 0 39.6023 0H113.565C129.751 0 237.5 0 237.5 0V82C237.5 82 129.914 82 114.02 82H39.6023C17.7305 82 0 63.6437 0 41Z",
    "M0 41.713C0 19.0693 17.7305 0.712997 39.6023 0.712997C61.474 0.712997 62.29 5.25287 77 5.21316C91.3873 5.17432 99.1307 0.712997 113.565 0.712997C128 0.712997 156.18 8.01617 186 7.21326C212.323 6.5045 235.156 -2.56907 237.5 0.712997C242.5 7.71312 243.5 76.713 237.5 82.713C231.5 88.713 201.424 75.713 168 75.713C143.854 75.713 128 83.213 114.02 82.713C100.04 82.213 91.7134 75.7401 77 75.713C62.1417 75.6856 61.474 82.713 39.6023 82.713C17.7305 82.713 0 64.3567 0 41.713Z",
    "M0 42.6293C0 19.9857 17.7305 1.62933 39.6023 1.62933C61.474 1.62933 60.5 6.62951 77 1.62933C90.769 -2.54325 100.565 5.12951 115 5.12951C129.435 5.12951 157.18 2.43227 187 1.62936C213.323 0.920597 235.156 -1.65274 237.5 1.62933C242.5 8.62946 243.5 77.6294 237.5 83.6293C231.5 89.6293 203.424 83.6293 170 83.6293C145.854 83.6293 130.48 82.6293 116.5 82.1293C102.52 81.6293 91.0523 87.9903 77 83.6293C62.5 79.1295 61.474 83.6293 39.6023 83.6293C17.7305 83.6293 0 65.273 0 42.6293Z",
    //  "M0 41C0 18.3563 17.7305 0 39.6023 0H113.565C129.751 0 237.5 0 237.5 0V82C237.5 82 129.914 82 114.02 82H39.6023C17.7305 82 0 63.6437 0 41Z"
];
const activeTailShapes = [
    //  "M249.654 1.5L321.002 41.7647L249.653 80.5L249.654 1.5Z",
    "M249.654 2.213C252.5 0.712988 321.002 39.2421 321.002 42.4777C321.002 45.7133 254.807 83.2127 249.653 81.213C244.5 79.2133 246.807 3.71301 249.654 2.213Z",
    "M249.654 3.12933C270.5 17 321 32 321.002 43.394C321.004 54.788 279 63 249.653 82.1293C253 64.5 247 5.99999 249.654 3.12933Z",
    // "M249.654 1.5L321.002 41.7647L249.653 80.5L249.654 1.5Z"
];

let timeline = ''
let activeTL = ''
let words = []

onMounted(async () => {
    await nextTick()
    gsap.registerPlugin(MorphSVGPlugin)
    timeline = gsap.timeline({ paused: true })
    activeTL = gsap.timeline({ paused: true })
    const results = Splitting({ target: labelEl.value, by: 'words' });
    const res = results.find(r => r.el === labelEl.value);
    words = res.words;
    if (words.length) {
        //  timeline.set(words, { x: 0, y: 0 })
        //activeTL.set(words, { x: 0, y: 0 })
    }
    mainShapes.forEach((mainD, i) => {
        let ease = "power1.out"
        let stag = i * 0.2

        if (i === 1) {
            timeline.to(labelEl.value, {
                paddingRight: "4rem",
                duration: 0.2,
                ease: "back.inOut(0.7)",
            }, 0.2)
        }

        if (i === 3) {
            timeline.to(tailPath.value, { autoAlpha: 1, duration: 0 }, 0.48)
        }

        if (i === 4) stag = 0.64
        if (i === 5) stag = 1

        timeline.to(mainPath.value, {
            morphSVG: { shape: mainD, shapeIndex: 0 },
            duration: 0.2,
            ease,
        }, stag)

        if (tailShapes[i]) {
            timeline.to(tailPath.value, {
                morphSVG: { shape: tailShapes[i], shapeIndex: 0 },
                duration: 0.2,
                ease,
            }, stag)
        }

        if (i === mainShapes.length - 1) {
            timeline.addLabel("buttonEnd", "<")
        }

    })

    activeMainShapes.forEach((mainD, i) => {
        const stag = i * 0.06

        activeTL.to(mainPath.value, {
            morphSVG: { shape: mainD, shapeIndex: 0 },
            duration: 0.06,
            ease: "power1.out",
        }, stag)
        activeTL.set(tailPath.value, { autoAlpha: 1 }, stag)
        activeTL.to(tailPath.value, {
            morphSVG: { shape: activeTailShapes[i], shapeIndex: 0 },
            duration: 0.06,
            ease: "power1.out",
        }, stag)
    })

    activeTL.call(() => {
        activeTL.reverse()
    }, null, 0.12)
})

const handleHoverIn = () => {
    if (!timeline) return;
    timeline.timeScale(1)
    timeline.play()
    if (words.length) {
        gsap.killTweensOf(words)
        gsap.timeline().fromTo(
            words,
            {
                x: 0,
                rotate: 0
                //    y: 0,
            },
            {

                x: () => gsap.utils.random(-3, 3),
                rotate: () => gsap.utils.random(-10, 10),
                //   y: () => gsap.utils.random(-4, 4),
                ease: 'elastic.out(0.9)',
                duration: 0.2,
                stagger: {
                    amount: 0.05,
                    from: 'random',
                },
            }, 0.2)
            .to(
                words,
                {
                    x: 0,
                    rotate: 0,
                    //         y: 0,
                    ease: 'power3.out',
                    duration: 0.1,
                    stagger: {
                        amount: 0.05,
                        from: 'random',
                    },
                }, 0.5)
            .to(words, {
                clearProps: "all"
            }, 0.6)
    }
}

const handleHoverOut = () => {
    if (!timeline) return;
    timeline.pause()
    timeline.seek(timeline.duration())
    timeline.reverse()
    if (words.length) {
        gsap.killTweensOf(words)
    }
}

const handleClick = () => {
    if (!activeTL) {
        if (props.onClick) {
            props.onClick()
        } else {
            window.open(props.href, "_blank")
        }
        return
    };

    activeTL.play()
    if (words.length) {
        gsap.killTweensOf(words)
        gsap.timeline().fromTo(
            words,
            {
                x: 0,
                rotate: 0,
                y: 0,
            },
            {

                x: () => gsap.utils.random(-8, 8),
                rotate: () => gsap.utils.random(-10, 10),
                y: () => gsap.utils.random(-4, 4),
                ease: 'elastic.out(0.9)',
                duration: 0.2,
                stagger: {
                    amount: 0.05,
                    from: 'random',
                },
            }, 0)
            .to(
                words,
                {
                    x: 0,
                    rotate: 0,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.1,
                    stagger: {
                        amount: 0.05,
                        from: 'random',
                    },
                }, 0.2)
            .to(words, {
                clearProps: "all"
            }, 0.3)
    }
    let startTime;
    const delayDuration = 500;
    const callFunct = (currentTime) => {
        if (!startTime) {
            startTime = currentTime;
        }
        const elapsedTime = currentTime - startTime;

        if (elapsedTime >= delayDuration) {
            //console.log('recorded click state')
            if (props.onClick) {
                props.onClick()
            } else {
                window.open(props.href, "_blank")
            }
        } else {
            requestAnimationFrame(callFunct);
        }
    }
    requestAnimationFrame(callFunct);
}
</script>
