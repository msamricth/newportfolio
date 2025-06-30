<template>
    <div ref="section"
        class="max-w-full lg:max-w-[1290px] xl:max-w-[1840px] md:px-8 lg:px-12 mx-auto relative md:pb-20 justify-center pt-10 relative pb-10 lg:min-h-dvh">

        <div class="swing-in-left-fwd-slow h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition mb-12 lg:mb-24 xl:mb-32 mx-8 lg:max-w-[842px] xl:max-w-[1260px] md:mx-auto lg:px-44"
            :class="sectionVis ? 'animate ' : 'opacity-0'" style="--theme-main-animation-delay:0s">
        </div>
        <img :src="store.loaded ? 'https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto/v1746750909/Title_2_jwbc2m.png' : 'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_100,e_pixelate,f_auto,e_grayscale/v1746750909/Title_2_jwbc2m.png'"
            data-src="https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto/v1746750909/Title_2_jwbc2m.png"
            alt="A screenshot of the Green leadership Trust Website"
            class="object-cover w-full h-auto mx-auto transition-all duration-700"
            :class="imgLoaded ? 'opacity-100' : 'opacity-20 motionless:opacity-100'" />
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useMainStore } from '@/stores/main'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const sectionVis = ref(false)
const imgLoaded = ref(false)
const store = useMainStore()

let tl = null
let mainTrigger = null
let themeTrigger = null

function cleanup() {
    tl?.kill()
    mainTrigger?.kill()
    themeTrigger?.kill()
    tl = null
    mainTrigger = null
    themeTrigger = null

    const img = section.value?.querySelector('img[data-src]')
    if (img) {
        gsap.set(img, { clearProps: 'all' })
    }

    document.body.classList.remove('dark')
}

function initAnimation() {
    const sectionEl = section.value
    const img = sectionEl.querySelector('img[data-src]')
    tl = gsap.timeline({ paused: true })

    tl.call(() => {
        sectionVis.value = !tl.reversed()
    }, null, 0)

    tl.fromTo(img, {
        blur: 40,
        y: 40,
        autoAlpha: 0
    }, {
        blur: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'power2.inOut',
        duration: 0.3
    }, 0.3)

    mainTrigger = ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top 50%',
        end: 'bottom 40%',
        onEnter: () => {
            tl.play()
            document.body.classList.add('dark')

        },
        onEnterBack: () => tl.play(),
        onLeaveBack: () => {
            tl.reverse()
            document.body.classList.remove('dark')
        }
    })

}

onMounted(async() => {
    await nextTick()
    if (section.value) {
        ScrollTrigger.create({
            trigger: section.value,
            start: 'top top',
            onEnter: () => document.body.classList.add('dark'),
            onLeaveBack: () => document.body.classList.remove('dark')
        })
    }
    if (!store.reduceMotion) initAnimation()
})

watch(() => store.reduceMotion, (rm) => {
    cleanup()
    if (!rm) initAnimation()
})
</script>
