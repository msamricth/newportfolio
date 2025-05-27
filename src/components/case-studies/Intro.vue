<template>
    <div ref="intro"
        class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto intro flex flex-col md:flex-row relative overflow-clip lg:items-end">
        <div
            class="px-8 lg:pl-12 relative pt-10 z-1 md:pt-40 flex flex-col items-start order-2 md:order-1 md:w-2xl lg:w-3/5 lg:pb-20">
            <GLT />
            <h2 class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-3 px-6 mb-2 placeholder-line inline w-content text-background dark:text-primary inverted:text-primary"
                data-splitting="words">Case Study:</h2>
            <h3 class="italic subtitle mb-4 text-3xl placeholder-line pr-6" data-splitting="words">
                Empowering Environmental Leadership with Green Leadership Trust
            </h3>
        </div>
        <div class="lg:max-w-3/5 mt-25 md:mt-0 lg:mt-6 order-1 md:order-2 md:min-h-[150dvh] lg:min-h-screen">
            <video ref="video" class="aspect-square object-cover md:rounded-l-[3rem] lg:rounded-[3rem] sticky top-12"
                data-src="https://res.cloudinary.com/dp1qyhhlo/video/upload/q_auto,w_720/v1746727741/GLT-CaseStudy_bja6ze.m3u8"
                playsinline muted loop
                poster="https://res.cloudinary.com/dp1qyhhlo/video/upload/q_auto,w_480/v1746727741/GLT-CaseStudy_bja6ze.webp"></video>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PlaceholderJS from './../../utils/placeholder.js'
import videoHandler from '../../utils/videoHandler.js';
import GLT from '../icons/GLT.vue'

gsap.registerPlugin(ScrollTrigger)
const intro = ref(null)
const video = ref(null)
onMounted(async() => {
    await nextTick()
    nextTick(() => {

        const introEl = intro.value
        const lines = introEl.querySelectorAll('.placeholder-line')
        const animations = Array.from(lines).map(el => new PlaceholderJS(el, { manual: true }))
        const videoEL = video.value
        let player;
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

        nextTick(() => {
            player = new videoHandler(videoEL)
            player.play();
        })
        tl.play

        ScrollTrigger.create({
            trigger: videoEL,
            start: 'top 75%',
            end: 'bottom top',
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
})
</script>
