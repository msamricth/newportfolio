<template>
    <section ref="container"
        class="max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto min-h-[85dvh] py-24 hero-container flex flex-col justify-center">
        <div class="hero-wrapper animate relative w-full">
            <div class="utilties absolute right-0 -top-15">
                <SecondaryNav />
            </div>


            <div ref="grid" class="headline-wrapper decor-grid group" :class="{ 'loaded': store.loaded }">
                <h1 class="headline font-heading font-black text-6xl leading-none xl:pt-8 **:align-sub mt-6 uppercase placeholder-line opacity-0"
                    data-splitting="words">
                    Building digital bridges
                    between ideas & impact
                </h1>

                <div class="decor-wrap preloading transition-all duration-1000 justify-center items-center flex md:order-4 lg:order-3"
                    :class="{ '-translate-x-[calc((50vw+30px)-22vw)] translate-y-[5vh] md:translate-x-0 md:-translate-y-[calc(560px-39vh)] lg:-translate-y-[40vh] lg:translate-x-5': !loading }">
                    <img crossorigin="anonymous"
                        src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346874/mixer_ha98hb.svg"
                        class="decor h-auto" width="180" height="180" alt="Illustration of a mixer"
                        :style="animDelay"  :class="loading ? 'jello-horizontal' : 'animate subtle-slide-in-attention scale-200'" />
                </div>
                <div class="decor-wrap  subtle-slide-in opacity-0 md:order-2" :class="{ 'animate': loading }">
                    <img crossorigin="anonymous"
                        :src="store.loaded ? 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346872/flower-4_hnflq8.svg' : 'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_100,e_pixelate,f_auto,e_grayscale/v1745346872/flower-4_hnflq8.svg'"
                        class="decor heartbeat h-auto" width="180" height="180" alt="Illustration of a flower" />
                </div>



                <div class="decor-wrap preloading transition-all duration-1000 md:order-5"
                    :class="{ '-translate-x-[calc((50vw+30px)-22vw)] translate-y-[8vh] md:translate-x-[19vw] lg:translate-x-[5vw] md:-translate-y-[calc(555px-39vh)] lg:-translate-y-[40vh]': !loading }">
                    <img crossorigin="anonymous"
                        src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346872/flower-2_ixqfek.svg"
                        width="180" height="180" class="decor h-auto" 
                        alt="Illustration of a flower"  :class="loading ? 'rotate-ccw90-forever' : 'animate subtle-slide-in-attention scale-200'" :style="!loading ? '--theme-main-animation-delay: 600ms' : animDelay"/>
                </div>

                
                
                <div class="decor-wrap  subtle-slide-in opacity-0 md:order-3 lg:order-4" :class="{ 'animate': loading }">
                    <img crossorigin="anonymous"
                        :src="store.loaded ? 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346872/heart_dfz3gf.svg' : 'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_100,e_pixelate,f_auto,e_grayscale/v1745346872/heart_dfz3gf.svg'"
                        class="decor jello-horizontal h-auto" width="180" height="180" alt="Illustration of a heart" />
                </div>
                <div class="decor-wrap  subtle-slide-in opacity-0" :class="{ 'animate': loading }">
                    <img crossorigin="anonymous"
                        :src="store.loaded ? 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346873/flower-5_xaniod.svg' : 'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_100,e_pixelate,f_auto,e_grayscale/v1745346873/flower-5_xaniod.svg'"
                        class="decor rotate-ccw90-forever h-auto" width="180" height="180"
                        alt="Illustration of a flower" />
                </div>
                <div class="decor-wrap  subtle-slide-in opacity-0  md:order-6" :class="{ 'animate': loading }">
                    <img crossorigin="anonymous"
                        :src="store.loaded ? 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745390483/bmx_hzx4dd.svg' : 'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_100,e_pixelate,f_auto,e_grayscale/v1745390483/bmx_hzx4dd.svg'"
                        class="decor rotate-forever  h-auto" width="180" height="180"
                        alt="Illustration of a bmx bike" />
                </div>

                <div class="decor-wrap  subtle-slide-in opacity-0  md:order-7" :class="{ 'animate': loading }">
                    <img crossorigin="anonymous"
                        :src="store.loaded ? 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346873/headphones_asqozg.svg' : 'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_100,e_pixelate,f_auto,e_grayscale/v1745346873/headphones_asqozg.svg'"
                        class="decor shake-top h-auto" width="180" height="180" alt="Illustration of headphones" />
                </div>

                <div class="decor-wrap preloading transition-all duration-1000 md:order-8" :class="{ '-translate-x-[calc((50vw+20px)-22vw)] translate-y-[10vh] md:-translate-y-[calc(570px-39vh)] md:-translate-x-[0vw]  md:-translate-y-[430px] lg:-translate-y-[40vh] lg:-translate-x-[2vw]': !loading }">
                    <img crossorigin="anonymous"
                        src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745390928/code_tigrlv.svg"
                        class="decor h-auto" width="180" height="180" alt="Illustration of code syntex" :style="{'--theme-main-animation-delay:900' : !loading}" :class="loading ? 'vibrate' : 'animate subtle-slide-in-attention scale-250'" />
                </div>
            </div>

            <div ref="trigger"></div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import placeholderJS from './../utils/placeholder.js'
import SecondaryNav from './navigation/SecondaryNav.vue';
import { shuffleIcons } from '../utils/shuffler.js';
import { useMainStore } from '../stores/main.js';
const store = useMainStore()
import { useNuxtApp } from '#app'
//import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const { $gsap: gsap } = useNuxtApp()

const grid = ref(null)
const container = ref(null)
const trigger = ref(null)
const loading = ref(false)
const delay = ref('0.5s')

const animDelay = computed(() => ({
    '--theme-main-animation-delay': delay.value
}))

let interval
onMounted(async () => {
    await nextTick()
    const triggerEl = trigger.value
    const gridEl = grid.value
    const headline = gridEl.querySelector('h1.headline')
    const preloaders = gridEl.querySelectorAll('.preloading')
    let anim;
    headline.style.order = -1

    const icons = Array.from(gridEl.querySelectorAll('.decor-wrap'))

    //gsap.set(icons, { scale: 1, transformOrigin: '50% 50%' })
    interval = setInterval(() => {
        delay.value = (Math.random() * 1.5).toFixed(2) + 's'
    }, 1000)


    //  shuffleIcons(icons)
    // setInterval(() => { shuffleIcons(icons) }, 2000)

    const iconFadeTL = gsap.timeline({ paused: true })
    
    loading.value = true
    
    /* iconFadeTL.fromTo(icons, {
       //  alpha: 1,
        // scale: 1,
     }, {
         alpha: 0,
         scale: 0,
         ease: 'cubic-bezier(.215, .61, .355, 1.000)',
         duration: 0.35,
         stagger: 0.01,
     });
 */

    iconFadeTL.progress(1).reverse();
        anim = new placeholderJS((headline), { manual: true, speed:2 })
        anim.play()
    ScrollTrigger.create({
        trigger: triggerEl,
        start: 'top 20%',
        end: 'top 50%',
        onEnter: () => document.body.classList.add('dark'),
        onLeave: () => {
            iconFadeTL.play()
            anim.getTimeline().progress(1).reverse();
            //  document.body.classList.remove('dark')
        },
        // onLeaveBack: () => document.body.classList.remove('dark'),
        onEnterBack: () => {
            anim.play();
            document.body.classList.remove('dark')
            iconFadeTL.reverse()
        }
    })
})
</script>
