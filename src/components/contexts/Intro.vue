<template>
    <section ref="section" class="pt-16" id="about">
        <div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto"
            :class="{ 'opacity-0': !store.loaded }">
            <div class="min-h-[80vh]">
                <div class="introduction-wrapper sticky md:max-w-2/3 mt-4 top-[15%] md:top-[12%]">
                    <h2 class="mb-4 text-3xl italic subtitle placeholder-line" data-splitting="words">So
                        here's the thing:
                    </h2>
                    <ul class="hidden pl-6 mb-8 list-disc md:block">
                        <li class="text-xl placeholder-line" data-splitting="words">A Developer with
                            <strong>PASSION</strong>
                        </li>
                        <li class="text-xl placeholder-line" data-splitting="words">An eye for design</li>
                        <li class="text-xl placeholder-line" data-splitting="words">API nerd</li>
                        <li class="text-xl placeholder-line" data-splitting="words">Bootstrap & Tailwind Queen👸</li>
                    </ul>
                    <div class="placeholder-line introduction" data-splitting="words">
                        <p class="text-secondary text-xl leading-[1.8] mb-6 lg:mb-8" data-splitting="words">I'm a
                            full-stack
                            developer with a passion for clean code, bold design, and building things that actually
                            work both on
                            screen. With deep experience in WordPress, Vue.js, and the occasional Tailwind
                            bender, I specialize in crafting digital systems that are fast, accessible, and built to
                            last.</p>
                    </div>
                    <PrimaryBTN href="/about"
                        class="btn text-primary dark:text-background inverted:text-background inverted:dark:text-primary hover:text-accent subtle-slide-in"
                        label="What drives me" :onClick="() => openAbout()" :delay="'0.7s'" />

                </div>
            </div>
            <Artisan />
        </div>
    </section>
</template>

<script setup>

import { ref, onMounted, nextTick } from 'vue';
import { useNuxtApp } from '#app'
//import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const { $gsap: gsap } = useNuxtApp()
import { useMainStore } from '../../stores/main.js';
import PlaceholderJS from './../../utils/placeholder.js';
import PrimaryBTN from '../buttons/PrimaryBTN.vue';
import { navigateTo } from '#imports';
import Artisan from './Artisan.vue';
const store = useMainStore()
const phIntro = ref(null)
const btn = ref(null)
const isBQ = ref(false);
const section = ref(null)
const openAbout = () => {
    store.toggleFold(false, true)
    navigateTo('/about')
}
const sectionTriggers = []
const sectionTimelines = []
const placeholderInstances = []
async function introAnims() {
    await nextTick();
    if (!section.value) return;

    const sectionEl = section.value;
    const introduction = sectionEl.querySelector('.introduction');
    const btn = sectionEl.querySelector('.btn');
    const listItems = sectionEl.querySelectorAll('li.placeholder-line');
    const subtitle = sectionEl.querySelector('.subtitle');

    // Blockquote trigger
    const bqTrigger = ScrollTrigger.create({
        trigger: sectionEl.querySelector('.introduction blockquote'),
        start: 'top 75%',
        onEnter: () => isBQ.value = true,
        onLeaveBack: () => isBQ.value = false,
    });
    sectionTriggers.push(bqTrigger);

    new PlaceholderJS(introduction, { scrub: true, speed: 2 });


    listItems.forEach((li, i) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: li,
                start: 'top 70%',
                toggleActions: 'play reverse play reverse',
                scrub: true
            },
            paused: true
        });
        tl.fromTo(li, { autoAlpha: 0 }, {
            autoAlpha: 1,
            duration: 0.5, ease: 'power2.out', stagger: 0.3
        });
        sectionTimelines.push(tl);
        sectionTriggers.push(tl.scrollTrigger);
        new PlaceholderJS(li, { scrub: true, speed: 3 });
    });

    new PlaceholderJS(subtitle, { scrub: true, speed: 2, start: 'top 70%' })

    if (btn) {
        const btnTL = gsap.timeline({
            scrollTrigger: {
                trigger: btn,
                start: 'top bottom',
                toggleActions: 'play reverse play reverse',
                scrub: true
            },
            paused: true
        });
        btnTL.call(() => btn.classList.remove('wobble-ver-right'), null, 0);
        btnTL.fromTo(btn, { autoAlpha: 0, y: 40 }, {
            autoAlpha: 1, y: 0,
            duration: 0.3, ease: 'power2.out',
        }, 0);




        btnTL.call(() => btn.classList.add('wobble-ver-right'), null, "+=0.2");
        btnTL.call(() => btn.classList.remove('wobble-ver-right'), null, "+=0.6");
        sectionTimelines.push(btnTL);
        sectionTriggers.push(btnTL.scrollTrigger);
    }
}

watch(
    () => store.loaded,
    async (loaded) => {
        if (!loaded) return
        if (!store.reduceMotion) { await introAnims() }
    },
    { immediate: true }
)
watch(
    () => store.reduceMotion,
    async (reduceMotion) => {
        await nextTick()
        await introAnims()

        if (!reduceMotion) return
        if (store.reduceMotion) {
            sectionTriggers.forEach(trigger => trigger?.kill());
            sectionTimelines.forEach(tl => tl?.kill());
            sectionTriggers.length = 0;
            sectionTimelines.length = 0;
            if (!section.value) return
            const btn = section.value.querySelector('.btn');
            btn.removeAttribute?.('style');
        }
    },
    { immediate: true }
)
</script>