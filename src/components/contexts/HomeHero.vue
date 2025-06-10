<template>
    <section ref="container"
        class="max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto min-h-[85dvh] py-24 hero-container flex flex-col md:justify-center">
        <div class="hero-wrapper animate relative w-full">
            <div class="utilties absolute right-0 -top-15">
                <SecondaryNav />
            </div>


            <div ref="grid" class="headline-wrapper group relative mt-10 md:mt-15 lg:mt-20"
                :class="{ 'loaded': store.loaded }">
                <h1 class="headline font-heading font-black text-6xl leading-none uppercase md:max-w-2xl md:ml-16 flex flex-col justify-between"
                    data-splitting="words">
                    <div class="opacity-0">
                        Building digital
                    </div>
                    <div class="opacity-0">
                        bridges between
                    </div>
                    <div class="opacity-0">
                        ideas & impact
                    </div>
                </h1>
                <div class="hero-icon-wrap absolute">
                    <div class="flex justify-between mx-auto" ref="icons">
                        <div class="decor">
                            <Mixer
                                class="h-auto transition-all"
                                width="120" height="120" style="--theme-main-animation-delay: 100ms"
                                :class="loading ? 'jello-horizontal' : 'animate subtle-slide-in-attention'" />
                        </div>
                        <div class="decor">
                            <Flower2 width="120" height="120"
                                class="h-auto transition-all"
                                :class="loading ? 'rotate-ccw90-forever' : 'animate subtle-slide-in-attention'"
                                style="--theme-main-animation-delay: 200ms" />
                        </div>
                        <div class="decor">
                            <Heart
                                class="transition-all h-auto"
                                :class="loading ? ' jello-horizontal' : 'animate subtle-slide-in-attention'" width="120"
                                height="120" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="secondary-icon-wrap flex gap-3 justify-center opacity-0" ref="secondaryIcons">

                <Flower4 class="decor heartbeat h-auto" width="80" height="80" />

                <Flower5 class="decor rotate-ccw90-forever h-auto" width="80" height="80" />

                <BMX class="decor rotate-forever  h-auto" width="80" height="80" />

                <Headphones class="decor shake-top h-auto" width="80" height="80" />
            </div>

            <div ref="trigger"></div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import SecondaryNav from '@/components/navigation/SecondaryNav.vue';
import { shuffleIcons } from '@/utils/shuffler.js';
import { useMainStore } from '@/stores/main.js';
import Splitting from '@/utils/splitting.js'
import Mixer from '@/components/icons/Mixer.vue';
import Heart from '@/components/icons/Heart.vue';
import BMX from '@/components/icons/BMX.vue'
import Code from '@/components/icons/Code.vue'
import Flower2 from '@/components/icons/Flower2.vue'
import Flower4 from '@/components/icons/Flower4.vue'
import Headphones from '@/components/icons/Headphones.vue'
import Flower5 from '@/components/icons/Flower5.vue'

import { useMatchMedia } from '@/composables/useMatchMedia'
const store = useMainStore()
import { useNuxtApp } from '#app'
//import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const { $gsap: gsap } = useNuxtApp()

const grid = ref(null)
const secondaryIcons = ref(null)
const icons = ref(null)
const container = ref(null)
const trigger = ref(null)
const Oldloading = ref(false)
const loading = ref(false)
const preshowCompleted = ref(false)
const delay = ref('0.5s')

const animDelay = computed(() => ({
    '--theme-main-animation-delay': delay.value
}))

let interval

const effectTimeline = (targetEl, interval = 0) => {
    const tl = gsap.timeline({ paused: true })
    const split = Splitting({ target: targetEl, by: 'chars' })[0];
    const chars = split?.chars || [];

    if (chars.length === 0) return;
    tl.to(targetEl, {
        autoAlpha: 1,
        ease: 'power3.out',
    })

    tl.fromTo(
        chars,
        {
            x: () => gsap.utils.random(-50, 50),
            y: () => gsap.utils.random(-40, 0),
            autoAlpha: 0,
        },
        {
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'power1.out',
            duration: 0.35,
            stagger: 0.15,
        },
        interval
    );
    return tl;
}
function heroAnimation({ isDesktop, isTablet, isMobile }) {
    nextTick(() => {
        const triggerEl = trigger.value
        const gridEl = grid.value
        const secondaryIconsEl = secondaryIcons.value
        const iconsContainer = icons.value
        const headline = gridEl.querySelector('h1.headline')
        const headlineElms = headline.querySelectorAll('div')
        const preloaders = gridEl.querySelectorAll('.preloading')
        const iconsEl = iconsContainer.querySelectorAll('.decor')
        const mainIconsArray = Array.from(iconsEl)
        const secyIconsEl = Array.from(secondaryIconsEl.querySelectorAll('svg'))
        const allIcons = [...mainIconsArray, ...secyIconsEl]
        interval = setInterval(() => {
            delay.value = (Math.random() * 1.5).toFixed(2) + 's'
        }, 1000)

        const heroAnim = gsap.timeline({ paused: true })
        const iconsRP = gsap.timeline({ paused: true })
        loading.value = true

        function updateIconsWidth() {
            const { height } = headline.getBoundingClientRect();
            iconsContainer.style.width = `${height}px`;
        }
      //  updateIconsWidth();
       // window.addEventListener('resize', updateIconsWidth);
        iconsRP.addLabel('iconsRP')
        if (loading.value && !preshowCompleted.value) {
            iconsEl.forEach((iconEl, i) => {
                switch (i) {
                    case 0:
                        iconsRP.to(iconEl, {
                            y: 60,
                            x: 10,
                            duration: 1.2,
                            ease: 'power3.inOut'
                        }, 'iconsRP+=0')

                        break;
                    case 1:
                        iconsRP.to(iconEl, {
                            x: 0,
                            y: -70,
                            duration: 1.2,
                            ease: 'power3.inOut'
                        }, 'iconsRP+=0')
                        break;
                    case 2:
                        iconsRP.to(iconEl, {
                            y: 60,
                            x: -10,
                            duration: 1.2,
                            ease: 'power3.inOut'
                        }, 'iconsRP+=0')
                        break;
                }
            });
            heroAnim.call(() => {
                iconsRP.play()
            }, null, 0)
            heroAnim.addLabel('iconsRotate', '+=1')
            heroAnim.to(iconsContainer, {
                rotation: '450deg',
                duration: 2,
                ease: 'power1.inOut'
            }, 'iconsRotate')

            heroAnim.to(iconsEl, {
                rotation: '-450deg',
                duration: 2,
                ease: 'power1.inOut'
            }, 'iconsRotate')
            heroAnim.call(() => {
                iconsRP.reverse()
            }, null, 'iconsRotate+=0.8')

            heroAnim.addLabel('iconsLeft', 'iconsRotate+=1.2')

            /*  heroAnim.to(iconsContainer, {
                  x: '-50%',
                  duration: 0.5,
                  ease: 'power1.inOut'
              }, 'iconsLeft+=0.5')
      
      */

            heroAnim.to(iconsEl, {
                y: '-38dvw',
                duration: 2,
                ease: 'back.inOut(0.7)',
                stagger: 1,
            }, 'iconsLeft+=0.5')
            heroAnim.addLabel('textReady', 'iconsLeft+=0.8')
            headlineElms.forEach((headlineElm, i) => {


                heroAnim.fromTo(headlineElm, { autoAlpha: 0 }, {
                    autoAlpha: 1,
                    duration: 0.15,
                    ease: 'cubic-bezier(.215, .61, .355, 1.000)',
                    onStart: () => {
                        const itemTL = effectTimeline(headlineElm, (i * 0.2))
                        itemTL?.play()
                    }
                }, `textReady+=${i * 0.5}`)
            })
            heroAnim.to(iconsContainer, {
                y: isMobile ? '0' : '-16dvh',
                duration: 0.6,
                ease: 'back.inOut(0.7)',
            }, 'textReady+=2')
            heroAnim.to(headline, {
                y: isMobile ? '0' : '-16dvh',
                duration: 0.6,
                ease: 'back.inOut(0.7)',
            }, 'textReady+=2')

            heroAnim.addLabel('secondaryIcons', 'textReady+=2.2')
            heroAnim.to(secondaryIconsEl, {
                autoAlpha: 1,
                y: isMobile ? '0' : '-16dvh',
                duration: 0.6,
                ease: 'back.inOut(0.7)',
            }, 'secondaryIcons')
            heroAnim.call(() => {
                shuffleIcons(secyIconsEl)
                setInterval(() => { shuffleIcons(allIcons) }, 2000)
            }, null, 'secondaryIcons+=0.4')
            heroAnim.play()
            preshowCompleted.value = true
        }
    })
}
useMatchMedia(heroAnimation)
</script>
<style scoped>
:root {
    --icon-end: -38dvw
}
h1.headline {
    height: calc((clamp(3.76rem, 8vw, 5.6rem) * 6) + 24px);
}

.hero-icon-wrap .flex {
    width: calc((clamp(3.76rem, 8vw, 5.6rem) * 6) + 24px);
}

.hero-icon-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: 50% 50%;
}

.hero-icon-wrap .flex .decor svg {
    width: calc(clamp(6.76rem, 8vw, 5.6rem));
}

@media screen and (min-width: 778px) {
    
:root {
    --icon-end: -70dvw
}
.hero-icon-wrap .flex {
    width: calc((clamp(3.76rem, 8vw, 5.6rem) * 3) + 24px);
}

    .hero-icon-wrap {
        position: absolute;
        top: 50%;
        transform-origin: 50% 50%;
        left: calc(50% - 32px);
        transform: translate(-50%, -50%);
    }

    .hero-icon-wrap .flex .decor svg {
        width: calc(clamp(3.76rem, 8vw, 5.6rem));
    }

    h1.headline {
    height: calc((clamp(3.76rem, 8vw, 5.6rem) * 3) + 24px);
}
}
</style>