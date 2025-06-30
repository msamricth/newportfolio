<template>
    <section ref="container" class="absolute z-40 flex items-center w-full bg-transparent h-dvh md:justify-center animate subtle-slide-in">
        <div class="absolute flex flex-wrap justify-center bg-transparent hero-icon-wrap max-md:w-full">
            <div class="relative flex justify-between gap-5 mx-auto bg-transparent md:gap-12" ref="icons">
                <div class="origin-center decor main-icon">
                    <Mixer class="h-auto transition-all" width="120" height="120"
                        style="--theme-main-animation-delay: 100ms"
                        :class="loading ? 'jello-horizontal' : 'animate subtle-slide-in-attention'" />
                </div>
                <div class="origin-center decor main-icon">
                    <Flower2 width="120" height="120" class="h-auto transition-all"
                        :class="loading ? 'rotate-ccw90-forever' : 'animate subtle-slide-in-attention'"
                        style="--theme-main-animation-delay: 200ms" />
                </div>
                <div class="origin-center decor main-icon">
                    <Heart class="h-auto transition-all"
                        :class="loading ? ' jello-horizontal' : 'animate subtle-slide-in-attention'" width="120"
                        height="120" />
                </div>


                <div class="absolute origin-center -translate-x-1/2 -translate-y-1/2 decor secondary top-1/2 left-1/2 size-20"
                    v-if="ready">
                    <Code class="w-full h-auto overflow-visible transition-all" width="50" height="50" v-if="ready" />
                </div>


                <div class="absolute origin-center -translate-x-1/2 -translate-y-1/2 decor secondary top-1/2 left-1/2 size-16"
                    v-if="ready">
                    <Flower5 class="w-full h-auto overflow-visible jello-horizontal" width="50" height="50"
                        v-if="ready" />
                </div>
                <div class="absolute origin-center -translate-x-1/2 -translate-y-1/2 decor secondary top-1/2 left-1/2 size-16"
                    v-if="ready">
                    <Syntax class="w-full h-auto overflow-visible heartbeat" width="50" height="50" v-if="ready" />
                </div>
                <div class="absolute origin-center -translate-x-1/2 -translate-y-1/2 decor secondary top-1/2 left-1/2 size-22"
                    v-if="ready">
                    <BMX class="w-full h-auto overflow-visible origin-center rotate-forever" width="50" height="50"
                        v-if="ready" />
                </div>

                <div class="absolute origin-center -translate-x-1/2 -translate-y-1/2 decor secondary top-1/2 left-1/2 size-16"
                    v-if="ready">
                    <Headphones class="w-full h-auto overflow-visible shake-top" width="50" height="50" v-if="ready" />
                </div>

                <div class="absolute origin-center -translate-x-1/2 -translate-y-1/2 decor secondary top-1/2 left-1/2 size-16"
                    v-if="ready">
                    <Flower4 class="w-full h-auto overflow-visible heartbeat" width="50" height="50" v-if="ready" />
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

onMounted(async () => {

    await nextTick()
    await new Promise(r => requestAnimationFrame(r))
    const iconsContainer = icons.value
    const iconsRP = gsap.timeline({ paused: true })
    const iconsExpand = gsap.timeline({ paused: true })
    loading.value = true

    const sec = container.value.querySelectorAll('.secondary')

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
                        duration: 0.5,
                        ease: 'power3.inOut'
                    }, 'iconsRP+=0')

                    break;
                case 1:
                    iconsRP.to(iconEl, {
                        x: 0,
                        y: -90,
                        duration: 0.5,
                        ease: 'power3.inOut'
                    }, 'iconsRP+=0')
                    break;
                case 2:
                    iconsRP.to(iconEl, {
                        y: 50,
                        x: -10,
                        duration: 0.5,
                        ease: 'power3.inOut'
                    }, 'iconsRP+=0')
                    break;
            }
        });
        heroAnim.call(() => {
            iconsRP.play()
        }, null, 0)

        heroAnim.addLabel('iconsRotate', '+=0.5')
        heroAnim.to(iconsContainer, {
            rotation: 360,
            duration: 2,
            repeatDelay: 0,
            ease: 'power1.inOut',
        }, 'iconsRotate')

        heroAnim.to(iconsEl, {
            rotation: '-360deg',
            duration: 2,
            ease: 'power1.inOut'
        }, 'iconsRotate')

            .call(async () => {
                await nextTick()
                await new Promise(r => requestAnimationFrame(r))
                if(!container.value) return;
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
                            const turns = 2
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
            }, null,'-=0.3')
            .call(() => {
              if(!store.reduceMotion)  store.toggleFold(true)
            }, null, "-=0.2")
        heroAnim.play()
    }
})
watch(
    () => props.sceneLoaded,
    async (loaded) => {
        if (!loaded) {
            await nextTick()
            await new Promise(r => requestAnimationFrame(r))
            gsap.timeline().to(container.value, {
                autoAlpha: 1,
                duration: 0.8,
                ease: 'power1.out'
            }, 0)
            return
        }
        await nextTick()
        gsap.timeline().call(async () => {
            await nextTick()
            await new Promise(r => requestAnimationFrame(r))
            const sec = container.value.querySelectorAll('.secondary')
            gsap.timeline().fromTo(sec,{
                autoAlpha:0
            }, {
                autoAlpha: 1,
                duration: 0.6,
                ease: 'power1.inOut'
            }, "+=0.6").to(
                    container.value.querySelectorAll('.decor'),
                    {
                        autoAlpha:0,
                        duration: 0.6,
                        ease: 'power1.out',
                    }, "+=0")
        }, null).to(container.value, {
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power1.out'
        }, "+=1.5")
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