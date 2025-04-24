<template>
    <section ref="container"
        class="max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto min-h-[85vh] py-24 hero-container flex flex-col justify-center">
        <div class="hero-wrapper animate relative w-full">
            <div ref="grid" class="headline-wrapper decor-grid">
                <h1 class="headline font-heading font-black text-6xl leading-none xl:pt-8 **:align-sub mt-6 uppercase placeholder-line"
                    data-splitting="words">
                    Building digital bridges
                    between ideas & impact
                </h1>

                <!-- your 7 svgs -->
                <div class="decor-wrap">
                    <img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346874/mixer_ha98hb.svg"
                        class="decor jello-horizontal" alt="Illustration of a mixer"
                        :style="animDelay" />
                </div>
                <div class="decor-wrap">
                    <img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346872/flower-4_hnflq8.svg"
                        class="decor heartbeat" alt="Illustration of a flower" />
                </div>
                <div class="decor-wrap">
                    <img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346873/headphones_asqozg.svg"
                        class="decor shake-top" alt="Illustration of headphones" />
                </div>
                <div class="decor-wrap">
                    <img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346873/flower-5_xaniod.svg"
                        class="decor rotate-ccw90-forever" alt="Illustration of a flower" />
                </div>
                <div class="decor-wrap">
                    <img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745390483/bmx_hzx4dd.svg"
                        class="decor rotate-forever" alt="Illustration of a bmx bike" />
                </div>
                <div class="decor-wrap">
                    <img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346872/flower-2_ixqfek.svg"
                        class="decor rotate-ccw90-forever" :style="animDelay"
                        alt="Illustration of a flower" />
                </div>
                <div class="decor-wrap">
                    <img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346872/heart_dfz3gf.svg"
                        class="decor jello-horizontal" alt="Illustration of a heart" />
                </div>
                <div class="decor-wrap">
                    <img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745390928/code_tigrlv.svg"
                        class="decor vibrate" alt="Illustration of code syntex" />
                </div>
            </div>

            <div ref="trigger"></div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import placeholderJS from './../utils/placeholder.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const grid = ref(null)
const container = ref(null)
const trigger = ref(null)
const delay = ref('0.5s')

const animDelay = computed(() => ({
  '--theme-main-animation-delay': delay.value
}))

let interval
onMounted(() => {
    const triggerEl = trigger.value
    const gridEl = grid.value
    const headline = gridEl.querySelector('h1.headline')
    const anim = new placeholderJS((headline), { manual: true })
    anim.play();
    headline.style.order = -1

    const icons = Array.from(gridEl.querySelectorAll('.decor-wrap'))
    const slotCount = icons.length
    let currentOrders = icons.map((_, i) => i)

    gsap.set(icons, { scale: 1, transformOrigin: '50% 50%' })
    interval = setInterval(() => {
    delay.value = (Math.random() * 1.5).toFixed(2) + 's'
  }, 1000)
    function shuffleIcons() {
        const swapCount = Math.floor(gsap.utils.random(2, 6))
        if (slotCount < swapCount) return

        const indices = gsap.utils.shuffle([...Array(slotCount).keys()]).slice(0, swapCount)
        const iconsToAnimate = indices.map(i => icons[i]).filter(Boolean)
        if (iconsToAnimate.length !== swapCount) return

        const ordersToSwap = indices.map(i => currentOrders[i])
        const newOrders = gsap.utils.shuffle(ordersToSwap.slice())

        const tl = gsap.timeline()
        tl.to(iconsToAnimate, {
            scale: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power1.in'
        })
            .add(() => {
                indices.forEach((iconIndex, j) => {
                    const order = newOrders[j]
                    icons[iconIndex].style.order = order
                    currentOrders[iconIndex] = order
                })
            })
            .to(iconsToAnimate, {
                scale: 1,
                duration: 0.3,
                stagger: 0.05,
                ease: 'back.out(1.7)'
            })
    }

    shuffleIcons()
    setInterval(shuffleIcons, 5000)

    const iconFadeTL = gsap.timeline({ paused: true })
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
    onUnmounted(() => {
        clearInterval(interval)
    })
})
</script>
