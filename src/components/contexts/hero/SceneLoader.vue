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


            </div>
        </div>

    </section>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { useNuxtApp } from '#app'
import Mixer from '@/components/icons/Mixer.vue'
import Flower2 from '@/components/icons/Flower2.vue'
import Heart from '@/components/icons/Heart.vue'

const store = useMainStore()

const { $gsap: gsap } = useNuxtApp()

const icons = ref(null)
const container = ref(null)
const ready = ref(false)
const loading = ref(false)
const props = defineProps({
    sceneLoaded: Boolean
})

onMounted(async () => {

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
            gsap.timeline().to(
                    container.value.querySelectorAll('.decor'),
                    {
                        x:0,
                        y:0,
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