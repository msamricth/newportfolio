<template>
    <section ref="container" class="absolute w-full h-dvh flex items-center md:justify-center z-40">
        <!-- single unified icon container -->

        <div class="hero-icon-wrap absolute flex flex-wrap justify-center lg:bottom-70 max-md:w-full right-0">
            <div class="flex justify-between mx-auto relative gap-5 md:gap-12" ref="icons">
                <div class="decor main-icon origin-center">
                    <Mixer class="h-auto transition-all" width="120" height="120"
                        style="--theme-main-animation-delay: 100ms"
                        :class="loading ? 'jello-horizontal' : 'animate subtle-slide-in-attention'" />
                </div>
                <div class="decor main-icon origin-center">
                    <Flower2 width="120" height="120" class="h-auto transition-all"
                        :class="loading ? 'rotate-ccw90-forever' : 'animate subtle-slide-in-attention'"
                        style="--theme-main-animation-delay: 200ms" />
                </div>
                <div class="decor main-icon origin-center">
                    <Heart class="transition-all h-auto"
                        :class="loading ? ' jello-horizontal' : 'animate subtle-slide-in-attention'" width="120"
                        height="120" />
                </div>


                <div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20"
                    v-if="ready">
                    <Code class="h-auto transition-all w-full" width="50" height="50" v-if="ready" />
                </div>


                <div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16"
                    v-if="ready">
                    <Flower5 class="rotate-ccw90-forever h-auto w-full" width="50" height="50" v-if="ready" />
                </div>
                <div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16"
                    v-if="ready">
                    <Syntax class="heartbeat  h-auto w-full" width="50" height="50" v-if="ready" />
                </div>
                <div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-22"
                    v-if="ready">
                    <BMX class="rotate-forever  h-auto w-full" width="50" height="50" v-if="ready" />
                </div>

                <div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16"
                    v-if="ready">
                    <Headphones class="shake-top h-auto w-full" width="50" height="50" v-if="ready" />
                </div>

                <div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16"
                    v-if="ready">
                    <Flower4 class="heartbeat h-auto w-full" width="50" height="50" v-if="ready" />
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref, watch, onMounted, nextTick, defineAsyncComponent } from 'vue'
import { useNuxtApp } from '#app'
import Mixer from '@/components/icons/Mixer.vue'
import Flower2 from '@/components/icons/Flower2.vue'
import Heart from '@/components/icons/Heart.vue'

import { useMatchMedia } from '@/composables/useMatchMedia'
const store = useMainStore()

const { $gsap: gsap } = useNuxtApp()

const icons = ref(null)
const container = ref(null)
const ready = ref(false)
const loading = ref(false)
const props = defineProps({
    sceneLoaded: Boolean 
})
const Flower4 = defineAsyncComponent(() => import('@/components/icons/Flower4.vue'))
const Headphones = defineAsyncComponent(() => import('@/components/icons/Headphones.vue'))
const Flower5 = defineAsyncComponent(() => import('@/components/icons/Flower5.vue'))
const Code = defineAsyncComponent(() => import('@/components/icons/Code.vue'))
const BMX = defineAsyncComponent(() => import('@/components/icons/BMX.vue'))
const Syntax = defineAsyncComponent(() => import('@/components/icons/Syntax.vue'))

async function heroAnimation({ isDesktop, isTablet, isMobile }) {

    await nextTick()
    await new Promise(r => requestAnimationFrame(r))
    const iconsContainer = icons.value
    const iconsRP = gsap.timeline({ paused: true })
    const iconsExpand = gsap.timeline({ paused: true })
    loading.value = true


    ready.value = true
    iconsRP.addLabel('iconsRP')
    if (loading.value) {
        const heroAnim = gsap.timeline({ paused: true })
        let iconsEl = iconsContainer.querySelectorAll('.decor.main-icon')
        iconsEl.forEach((iconEl, i) => {
            switch (i) {
                case 0:
                    iconsRP.to(iconEl, {
                        y: 50,
                        x: 10,
                        duration: 0.6,
                        ease: 'power3.inOut'
                    }, 'iconsRP+=0')

                    break;
                case 1:
                    iconsRP.to(iconEl, {
                        x: 0,
                        y: -90,
                        duration: 0.6,
                        ease: 'power3.inOut'
                    }, 'iconsRP+=0')
                    break;
                case 2:
                    iconsRP.to(iconEl, {
                        y: 50,
                        x: -10,
                        duration: 0.6,
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
            rotation: 360,
            duration: 2.5,
            repeatDelay: 0,
            ease: 'power1.inOut',
        }, 'iconsRotate')

        heroAnim.to(iconsEl, {
            rotation: '-360deg',
            duration: 2.5,
            ease: 'power1.inOut'
        }, 'iconsRotate')


        heroAnim.play()
    }
}
useMatchMedia(heroAnimation)
watch(
    () => props.sceneLoaded,
    async (loaded) => {
        if (!loaded) return
        await nextTick()
        gsap.timeline().call(async () => {
            await nextTick()
            await new Promise(r => requestAnimationFrame(r))
            const sec = container.value.querySelectorAll('.secondary')
            gsap.timeline().to(sec, {
                autoAlpha: 1,
                duration: 0.6,
                ease: 'power1.inOut'
            }, "+=0.6").to(
                container.value.querySelectorAll('.decor'),
                {
                    x: i => {
                        const t = i / 9
                        const turns = 3
                        const θ = 2 * Math.PI * turns * t
                        const b = 40
                        const r = b * θ
                        return Math.cos(θ) * r
                    },
                    y: i => {
                        const t = i / 9
                        const turns = 2
                        const θ = 2 * Math.PI * turns * t
                        const b = 20
                        const r = b * θ
                        return Math.sin(θ) * r
                    },
                    duration: 2,
                    ease: 'power1.out',
                }, "-=0.9")
        }, null).to(container.value, {
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power1.out'
        },"+=1.8")
        store.toggleFold(true)
    }
)
</script>
<style scoped>

.hero-icon-wrap .flex .decor:not(.absolute) svg {
    width: calc(clamp(6.76rem, 8vw, 5.6rem));
}

.secondary {
    opacity: 0;
}

@media screen and (min-width: 778px) {




    .hero-icon-wrap {
        position: absolute;
        transform: translate(-50%, -10%);
        transform-origin: 50% 50%;
        left: calc(50% - 32px);
    }

    .hero-icon-wrap .flex .decor:not(.absolute) svg {
        width: calc(clamp(3.76rem, 8vw, 5.6rem));
    }

}
</style>