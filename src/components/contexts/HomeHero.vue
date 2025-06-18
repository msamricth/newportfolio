<template>
    <section ref="container"
        class="max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto py-24 hero-container flex flex-col md:justify-center lg:justify-start relative min-h-[85dvh]">
        <div class="relative w-full hero-wrapper animate">
            <div class="absolute right-0 utilties -top-12">
                <SecondaryNav  v-if="playing" />
            </div>

            <div ref="grid"
                class="hero-wrapper-scenes group relative justify-center w-full gap-8 lg:gap-14 items-center flex flex-col self-end -mb-24 xl:mt-14 2xl:mt-18 h-[75dvh] lg:h-full">
                <SceneLoader :sceneLoaded="screens" v-show="!playing" />
                <SceneTetris v-if="loadedScenes[0]" />
                <SceneUX v-if="loadedScenes[1]" />
                <SceneVideo v-if="loadedScenes[2]" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, defineAsyncComponent } from 'vue'
import SecondaryNav from '@/components/navigation/SecondaryNav.vue'
import { useMainStore } from '@/stores/main.js'
import SceneLoader from './hero/SceneLoader.vue'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNuxtApp } from '#app'

const store = useMainStore()
const { $gsap: gsap } = useNuxtApp()

const SceneTetris = defineAsyncComponent(() => import('@/components/contexts/hero/SceneTetris.vue'))
const SceneUX = defineAsyncComponent(() => import('@/components/contexts/hero/SceneUX.vue'))
const SceneVideo = defineAsyncComponent(() => import('@/components/contexts/hero/SceneVideo.vue'))

const activeScene = ref(0)

const loading = ref(false)
const grid = ref(null)
const playing = ref(false)
const screens = ref(false)
const loadedScenes = ref([true, false, false])
let master = null
onMounted(async () => {
    await nextTick()
    loading.value = true
    loadedScenes.value[0] = true
    gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)
    if (master) {
        master.play(0)
        return
    }
    master = gsap.timeline({ paused: true })
    master.addLabel('Tetris')
    master.call(async () => {
        activeScene.value = 0
        await nextTick()
        await new Promise(r => requestAnimationFrame(r))
        screens.value = true
    }, null, "Tetris")

    master.call(async () => {
        playing.value="true"
        store.ready = true
        if (!loadedScenes.value[0]) loadedScenes.value[0] = true

        await nextTick()
        await new Promise(r => requestAnimationFrame(r))
        const { buildTetrisTL } = await import('@/utils/hero/tetris')
        const tl0 = buildTetrisTL(grid.value)
        master.add(tl0, 'Tetris')
    }, null, 'Tetris+=2.6')
    master.call(() => {
        loadedScenes.value[1] = true
    }, null, 'Tetris+=8')


    master.addLabel('UX', "Tetris+=10")

    master.call(async () => {
        await nextTick()
        await new Promise(r => requestAnimationFrame(r))

        const { buildUXTL } = await import('@/utils/hero/uxScreens')
        const tl1 = buildUXTL(grid.value)
        master.add(tl1, 'UX')
    }, null, 'UX+=0.2')


    master.addLabel('Video', "UX+=10.2") //need to acttually count how long UX is, this is a temp estimate
    master.call(() => {
        loadedScenes.value[2] = true
    }, null, 'Video+=0')

    master.call(async () => {
        await nextTick()
        await new Promise(r => requestAnimationFrame(r))

        const { buildVideoTL } = await import('@/utils/hero/videoScreens')
        const tl2 = buildVideoTL(grid.value)
        master.add(tl2, 'Video')
    }, null, 'Video+=0.2')


    master.call(() => {
        master.restart(0)
    }, null, 'Video+=11')
    gsap.delayedCall(2.5, () => master.play())

})

</script>
