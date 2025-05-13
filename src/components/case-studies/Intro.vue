<template>
    <div ref="intro"
        class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto intro flex flex-col md:flex-row relative md:pb-20 lg:pb-0 overflow-clip">
        <div class="px-8 lg:pl-12 relative pt-10 relative z-1 md:pt-40  flex flex-col items-start order-2 md:order-1">
            <GLT />
            <h2 class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-3 px-6 mb-2 placeholder-line inline w-content text-background dark:text-primary inverted:text-primary"
                data-splitting="words">Case Study:</h2>
            <h3 class="italic subtitle mb-4 text-3xl placeholder-line pr-6" data-splitting="words">
                Empowering Environmental Leadership with Green Leadership Trust
            </h3>
        </div>
        <div class="md:max-w-2/5 mt-25 md:mt-45 lg:mt-6 order-1 md:order-2">
            <video ref="video" class="aspect-square object-cover md:rounded-[3rem] sticky top-12"
                data-src="https://res.cloudinary.com/dp1qyhhlo/video/upload/v1746727741/GLT-CaseStudy_bja6ze.m3u8"
                playsinline muted loop></video>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PlaceholderJS from './../../utils/placeholder.js'
import videoHandler from '../../utils/videoHandler.js';
import GLT from '../icons/GLT.vue'

gsap.registerPlugin(ScrollTrigger)
const intro = ref(null)
const video = ref(null)
onMounted(() => {
    const introEl = intro.value
    const lines = introEl.querySelectorAll('.placeholder-line')
    const animations = Array.from(lines).map(el => new PlaceholderJS(el, { manual: true }))
    const videoEL = video.value
    const player = new videoHandler(videoEL);
    const tl = gsap.timeline({ paused: true })
    tl.fromTo(videoEL, {
        x: '100%',
    }, {
        x: 0,
        ease: 'power1.inOut',
        duration: 0.5
    })
        .fromTo(videoEL, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: 'power1.inOut',
            duration: 0.3
        }, 0.3)
    player.play();
    tl.play

    ScrollTrigger.create({
        trigger: videoEL,
        start: 'top 75%',
        end: 'bottom 35%',
        onEnter: () => {
            tl.play()
        },
        onEnterBack: () => {
            tl.play()
        },
        onLeave: () => {
            tl.reverse();
        }
    })

    ScrollTrigger.create({
        trigger: introEl,
        start: 'top 65%',
        end: 'bottom 45%',
        onEnter: () => {
            animations.forEach(anim => anim.play())
        },
        onEnterBack: () => {
            animations.forEach(anim => anim.play())
        },
        onLeave: () => {
           // animations.forEach(anim => anim.getTimeline().progress(1).reverse())
        }
    })
})
</script>
