<template>
    <section ref="container"
        class="max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto min-h-[85dvh] py-24 hero-container flex flex-col justify-center">
        <div class="hero-wrapper animate relative w-full">
            <div class="utilties absolute right-0 -top-15">
                <SecondaryNav />
            </div>


            <div ref="grid" class="headline-wrapper decor-grid group" :class="{ 'loaded': store.loaded }">
                <h1 class="headline font-heading font-black text-6xl leading-none xl:pt-8 **:align-sub mt-6 uppercase placeholder-line opacity-0 max-md:min-h-110"
                    data-splitting="words">
                    Building digital bridges
                    between ideas & impact
                </h1>

                <div class="decor-wrap preloading transition-all duration-1000 justify-center items-center flex md:order-4 lg:order-3 group-[.loaded]:transition-[filter]"
                    :class="{ '-translate-x-[calc((50vw+30px)-22vw)] translate-y-[5vh] md:translate-x-0 md:-translate-y-[calc(560px-50vh)]  lg:translate-x-5': !loading }">
                    <Mixer class="decor h-auto transition-all" width="180" height="180"  :style="!loading ? '--theme-main-animation-delay: 100ms' : animDelay"
                        :class="loading ? 'jello-horizontal' : 'animate subtle-slide-in-attention scale-200'" />
                </div>

                <div class="decor-wrap  subtle-slide-in opacity-0 md:order-2 group-[.loaded]:transition-[filter]"
                    :class="{ 'animate': loading }">
                    <Flower4 class="decor heartbeat h-auto" width="180" height="180" />
                </div>

                <div class="decor-wrap preloading transition-all duration-1000 md:order-5 group-[.loaded]:transition-[filter]"
                    :class="{ '-translate-x-[calc((50vw+30px)-22vw)] translate-y-[8vh] md:translate-x-[19vw] lg:translate-x-[5vw] md:-translate-y-[calc(555px-50vh)]': !loading }">
                    <Flower2 width="180" height="180" class="decor h-auto transition-all"
                        :class="loading ? 'rotate-ccw90-forever' : 'animate subtle-slide-in-attention scale-200'"
                        :style="!loading ? '--theme-main-animation-delay: 200ms' : animDelay" />
                </div>

                <div class="decor-wrap  subtle-slide-in opacity-0 md:order-3 lg:order-4 group-[.loaded]:transition-[filter]"
                    :class="{ 'animate': loading }">
                    <Heart class="decor jello-horizontal h-auto" width="180" height="180" />
                </div>

                <div class="decor-wrap  subtle-slide-in opacity-0 group-[.loaded]:transition-[filter]"
                    :class="{ 'animate': loading }">
                    <Flower5 class="decor rotate-ccw90-forever h-auto" width="180" height="180" />
                </div>

                <div class="decor-wrap  subtle-slide-in opacity-0  md:order-6 group-[.loaded]:transition-[filter]"
                    :class="{ 'animate': loading }">
                    <BMX class="decor rotate-forever  h-auto" width="180" height="180" />
                </div>

                <div class="decor-wrap  subtle-slide-in opacity-0  md:order-7 group-[.loaded]:transition-[filter]"
                    :class="{ 'animate': loading }">
                    <Headphones class="decor shake-top h-auto" width="180" height="180" />
                </div>

                <div class="decor-wrap preloading transition-all duration-1000 md:order-8 group-[.loaded]:transition-[filter]"
                    :class="{ '-translate-x-[calc((50vw+20px)-22vw)] translate-y-[10vh] md:-translate-y-[calc(570px-50vh)] md:-translate-x-[0vw]  lg:-translate-x-[2vw]': !loading }">
                    <Code class="decor h-auto transition-all" width="180" height="180"
                         :style="!loading ? '--theme-main-animation-delay: 300ms' : animDelay"
                        :class="loading ? 'vibrate' : 'animate subtle-slide-in-attention scale-250'" />
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
import Mixer from './icons/Mixer.vue';
import Heart from './icons/Heart.vue';
import BMX from './icons/BMX.vue'
import Code from './icons/Code.vue'
import Flower2 from './icons/Flower2.vue'
import Flower4 from './icons/Flower4.vue'
import Headphones from './icons/Headphones.vue'
import Flower5 from './icons/Flower5.vue'
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

    interval = setInterval(() => {
        delay.value = (Math.random() * 1.5).toFixed(2) + 's'
    }, 1000)




    const iconFadeTL = gsap.timeline({ paused: true })
    loading.value = true

    if (loading.value) {
        setTimeout(() => {
            gsap.set(icons, { scale: 1, transformOrigin: '50% 50%' })
            shuffleIcons(icons)
            setInterval(() => { shuffleIcons(icons) }, 2000)
            iconFadeTL.fromTo(icons, {
                alpha: 1,
                scale: 1,
            }, {
                alpha: 0,
                scale: 0,
                ease: 'cubic-bezier(.215, .61, .355, 1.000)',
                duration: 0.35,
                stagger: 0.01,
            });


            iconFadeTL.progress(1).reverse();

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
        }, 800)
    }
    anim = new placeholderJS((headline), { manual: true, speed: 2 })
    anim.play()
})
</script>
