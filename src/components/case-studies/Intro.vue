<template>
    <div ref="intro"
        class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto intro flex flex-col md:flex-row relative overflow-clip lg:items-end"
        :class="{ 'opacity-0': !store.loaded }">
        <div
            class="relative flex flex-col items-start order-2 px-8 pt-10 lg:pl-12 z-1 md:pt-40 md:order-1 md:w-2xl lg:w-3/5 lg:pb-20">
            <component :is="icon" />
            <h2 class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-3 px-6 mb-2 placeholder-line inline w-content text-background dark:text-primary inverted:text-primary"
                data-splitting="words">Case Study:</h2>
            <h3 class="pr-6 mb-4 text-3xl italic subtitle h3 placeholder-line" data-splitting="words" v-if="heading">
                {{ heading }}
            </h3>
        </div>
        <div
            class="lg:max-w-3/5 mt-25 md:mt-0 lg:mt-6 order-1 md:order-2 md:min-h-[150dvh] lg:min-h-screen motionless:md:min-h-auto motionless:lg:min-h-auto motionless:md:mb-12 motionless:lg:mb-24">
            <video ref="video" class="aspect-square object-cover md:rounded-l-[3rem] lg:rounded-[3rem] sticky top-12"
                :data-src="videoURL" playsinline muted loop :poster="poster"></video>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, nextTick, PropType } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMainStore } from '@/stores/main.js'
import PlaceholderJS from '@/utils/placeholder.js'
import videoHandler from '@/utils/videoHandler.js'
import type { Component } from 'vue'

const store = useMainStore()
const props = defineProps({
    icon: {
        type: [Object, Function] as PropType<Component>,
        required: true,
    },
    heading: String,
    videoURL: String,
    poster: String,
})

const intro = ref(null)
const video = ref(null)

let tl = null
let trigger1 = null
let trigger2 = null
let animations = []
let player = null

function cleanup() {
    tl?.kill()
    tl = null
    trigger1?.kill()
    trigger2?.kill()
    trigger1 = null
    trigger2 = null

    const introEl = intro.value
    const videoEl = video.value
    animations = []

    if (introEl) {
        const lines = introEl.querySelectorAll('.placeholder-line')
        gsap.set(lines, { clearProps: 'all' })
    }
    if (videoEl) {
        gsap.set(videoEl, { clearProps: 'all', autoAlpha: 1 })
    }
}

function initIntro() {
    const introEl = intro.value
    const videoEl = video.value
    if (!introEl || !videoEl) return

    const lines = introEl.querySelectorAll('.placeholder-line')
    animations = Array.from(lines).map(el => new PlaceholderJS(el, { manual: true }))
    player = new videoHandler(videoEl)
    player.play()

    tl = gsap.timeline({ paused: true })
    tl.fromTo(videoEl, { x: '100%' }, {
        x: 0, ease: 'power1.inOut', duration: 0.5
    })
        .fromTo(videoEl, { autoAlpha: 0 }, {
            autoAlpha: 1, ease: 'power1.inOut', duration: 0.3
        }, 0.3)

    trigger1 = ScrollTrigger.create({
        trigger: videoEl,
        start: 'top 75%',
        end: 'bottom top',
        onEnter: () => {
            tl.play()
            document.body.classList.remove('dark')
        },
        onEnterBack: () => tl.play(),
        onLeave: () => tl.reverse()
    })

    trigger2 = ScrollTrigger.create({
        trigger: introEl,
        start: 'top 65%',
        end: 'bottom 45%',
        onEnter: () => animations.forEach(anim => anim.play()),
        //  onEnterBack: () => animations.forEach(anim => anim.play())
    })
}

onMounted(async () => {
    await nextTick()
    if (!store.reduceMotion) initIntro()
})

watch(() => store.reduceMotion, async (rm) => {
    await nextTick()
    cleanup()
    if (!rm) initIntro()
},
  { immediate: true })
</script>
