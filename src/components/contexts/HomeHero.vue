<template>
    <section ref="container"
        class="max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto py-24 hero-container flex flex-col md:justify-center lg:justify-start relative min-h-[85dvh]">
        <div class="relative w-full hero-wrapper animate">
            <div class="absolute right-0 utilties -top-12">
                <SecondaryNav v-if="playing || showSubNav" />
            </div>

            <div ref="grid"
                class="hero-wrapper-scenes group relative justify-center w-full gap-8 lg:gap-14 items-center flex flex-col self-end -mb-24 2xl:mt-18 h-[75dvh]">
                <button class="absolute cursor-pointer z-100 animate subtle-slide-in" v-if="store.reduceMotion"
                    @click="PlayScenes" :class="{ 'scale-112 disapear': playPressed }">
                    <Play />
                </button>
                <SceneLoader :sceneLoaded="screens" v-show="!playing" />
                <SceneTetris v-if="sceneTetrisLoaded" />
                <SceneUX v-if="sceneUXLoaded" />
                <SceneVideo v-if="sceneVideoLoaded" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, defineAsyncComponent, watch } from 'vue'
import SecondaryNav from '@/components/navigation/SecondaryNav.vue'
import { useMainStore } from '@/stores/main.js'
import gsap from 'gsap';
import SceneLoader from './hero/SceneLoader.vue'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { newPromise } from '../../utils/nextPromise';
import { useNuxtApp } from '#app'
const store = useMainStore()
//const { $gsap: gsap } = useNuxtApp()

const screens = ref(false)
const preloaderScene = ref(true)
const sceneTetrisLoaded = ref(false)
const sceneUXLoaded = ref(false)
const sceneVideoLoaded = ref(false)
const SceneTetris = defineAsyncComponent(() => import('@/components/contexts/hero/SceneTetris.vue'))
const Play = defineAsyncComponent(() => import('@/components/icons/Play.vue'))
const SceneUX = defineAsyncComponent(() => import('@/components/contexts/hero/SceneUX.vue'))
const SceneVideo = defineAsyncComponent(() => import('@/components/contexts/hero/SceneVideo.vue'))
const playPressed = ref(false)
const activeScene = ref(0)

const loading = ref(false)
const grid = ref(null)
const playing = ref(false)
const showSubNav = ref(false)
let master = null


onMounted(async () => {
    await nextTick();
    loading.value = true;
    preloaderScene.value = true;

    gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

    master = gsap.timeline({
        paused: true,
    });
})

watch(
    () => store.loaded,
    async (loaded) => {
        if (!loaded) return
        master = gsap.timeline({
            paused: true,
        });

        if (!store.reduceMotion) {
            await buildMasterTimeline()
            gsap.delayedCall(2.5, () => master.play())
        }
        if (store.reduceMotion) {
            preloaderScene.value = true;
            master.pause(0)
            gsap.delayedCall(2.5, () => showSubNav.value = true);

        }
    },
    { immediate: true }
)
watch(
    () => store.reduceMotion,
    async (reduceMotion) => {
        if (!reduceMotion) return
        if (!store.reduceMotion) {
            await buildMasterTimeline()
            await newPromise();
            if (master) gsap.delayedCall(2.5, () => master.play())
        }
        if (store.reduceMotion) {
            playPressed.value = false
            screens.value = false;
            if (master) {
                master.kill()
                master = null
                preloaderScene.value = true;
            }
            playing.value = false

            master = gsap.timeline({
                paused: true,
            });
            showSubNav.value = true

            sceneTetrisLoaded.value = false;
            sceneUXLoaded.value = false;
            sceneVideoLoaded.value = false;
            preloaderScene.value = true;
        }
    },
    { immediate: true }
)
async function PlayScenes() {
    await nextTick();
    playPressed.value = true;
    if (master && master.getChildren().length === 0) {
        await buildMasterTimeline();
    }

    sceneTetrisLoaded.value = true;
    master.restart();
}
async function buildMasterTimeline() {
    if (!master) return;

    master.addLabel('Tetris');

    master.call(async () => {
        sceneTetrisLoaded.value = true;
        activeScene.value = 0;
        await nextTick();
        await newPromise();
        screens.value = true;
    }, null, 'Tetris');

    master.call(async () => {
        playing.value = true;
        store.ready = true;

        if (!sceneTetrisLoaded.value) sceneTetrisLoaded.value = true;

        await nextTick();
        await newPromise();
        const { buildTetrisTL } = await import('@/utils/hero/tetris');
        const tl0 = buildTetrisTL(grid.value);
        master.add(tl0, 'Tetris');
    }, null, 'Tetris+=2.6');

    master.call(() => {
        sceneUXLoaded.value = true;
    }, null, 'Tetris+=8');

    master.addLabel('UX', 'Tetris+=10');

    master.call(async () => {
        await nextTick();
        await newPromise();
        const { buildUXTL } = await import('@/utils/hero/uxScreens');
        const tl1 = buildUXTL(grid.value);
        master.add(tl1, 'UX');
    }, null, 'UX+=0.2');

    master.addLabel('Video', 'UX+=10.2');

    master.call(() => {
        sceneVideoLoaded.value = true;
    }, null, 'Video+=0');

    master.call(async () => {
        await nextTick();
        await newPromise();
        const { buildVideoTL } = await import('@/utils/hero/videoScreens');
        const tl2 = buildVideoTL(grid.value, store.reduceMotion);
        master.add(tl2, 'Video');
    }, null, 'Video+=0.2');
    master.call(() => {
        master.restart(0);
    }, null, 'Video+=11');

}

</script>
