<template>
    <section ref="section" class="pt-22 lg:pt-28" id="about" :class="{ 'opacity-0': !store.ready }">
        <div class="introduction-wrapper">
            <div
                class="sticky mt-4 md:max-w-2/3 md:mt-6 motionless:mt-5 max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto">
                <h2 class="mb-4 text-2xl italic opacity-0 subtitle placeholder-line max-w-160" data-splitting="words">Code that
                    clicks, pixels that pop, and strategy that actually makes sense.
                </h2>
            </div>
            <div
                class="introduction grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-8 lg:px-12 2xl:max-w-[1680px] mx-auto auto-rows-auto">
                <div class="row-start-2 md:row-start-1 md:col-span-2 lg:row-start-1 lg:col-span-4">
                    <div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto lg:px-12 pb-8 lg:pb-18">
                        <p class="placeholder-line text-secondary text-2xl leading-[1.8] mb-2" data-splitting="words">
                            I build fast, accessible digital experiences that go beyond typical marketing sites. With a
                            background in front-end development, design systems, and brand strategy, I help teams
                            deliver
                            products that are both technically sound and strategically focused.</p>
                    </div>
                </div>

                <div class="row-start-1 md:row-start-2 lg:row-start-2" v-if="store.ready">
                    <ServicesIntroBrand />
                </div>

                <div class="row-start-3 md:row-start-2 lg:row-start-2" v-if="store.ready">
                    <services-intro-design />
                </div>

                <div class="col-start-1 row-start-5 md:row-start-4 lg:row-start-2" v-if="store.ready">
                    <ServicesIntroCode />
                </div>

                <div class="col-start-1 row-start-7 md:col-start-2 md:row-start-4 lg:row-start-2 lg:col-start-auto"
                    v-if="store.ready">
                    <ServicesIntroMedia />
                </div>

                <div
                    class="col-start-1 row-start-4 md:row-start-3 md:col-span-2 lg:col-span-4 flex flex-col justify-center">
                    <div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto lg:px-12 py-8 lg:pt-18">
                        <p class="placeholder-line text-secondary text-base leading-[1.8]" data-splitting="words">
                            From modular WordPress platforms to custom Vue and Nuxt.js applications, I’ve led projects
                            that
                            support high-traffic publishing workflows, dynamic product filtering, API integrations, and
                            interactive tools. My app work includes location-based store finders, animated interfaces,
                            editorial hubs, and microsites that connect smoothly to Airtable, headless CMS platforms,
                            and
                            external APIs. I work confidently across JavaScript frameworks like Vue, Nuxt, and React,
                            and
                            have extensive experience with GSAP for motion design and user engagement.</p>
                    </div>
                </div>

                <div class="col-start-1 row-start-6 md:row-start-5 md:col-span-2 lg:row-start-4 lg:col-span-4">

                    <div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto lg:px-12">
                        <p class="placeholder-line text-secondary text-base leading-[1.8]" data-splitting="words">
                            However, good code is only part of the picture. I approach each project with a designer’s
                            perspective and a marketer’s mindset. I make sure our work performs well, tells the right
                            story,
                            and meets real-world goals. Whether you’re launching a brand, refining a product, or trying
                            to
                            improve the web, I can help you connect creative vision with technical execution.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';
import { useNuxtApp } from '#app'
//import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const { $gsap: gsap } = useNuxtApp()
import PlaceholderJS from '@/utils/placeholder.js';
import { useMainStore } from '@/stores/main.js'
import { AnimationFrame } from '@/utils/AnimationFrame';
const store = useMainStore()
const isArtisan = ref(false);
const isBQ = ref(false);
const artisan = ref(null)
const section = ref(null)
const sectionTriggers = []
const sectionTimelines = []
let tl
const ServicesIntroBrand = defineAsyncComponent(() => import('@/components/contexts/services/ServicesIntroBrand.vue'))
const ServicesIntroMedia = defineAsyncComponent(() => import('@/components/contexts/services/ServicesIntroMedia.vue'))
const ServicesIntroCode = defineAsyncComponent(() => import('@/components/contexts/services/ServicesIntroCode.vue'))
const ServicesIntroDesign = defineAsyncComponent(() => import('@/components/contexts/services/ServicesIntroDesign.vue'))
watch(
    () => store.ready,
    async (ready) => {
        if (!ready || store.reduceMotion) return
        await nextTick()
        await servicesIntroAnims()
    },
    { immediate: true }
)

watch(
    () => store.reduceMotion,
    async (reduceMotion) => {
        await nextTick()
        await servicesIntroAnims()

        if (!reduceMotion) return
        if (store.reduceMotion) {
            sectionTriggers.forEach(trigger => trigger?.kill());
            sectionTimelines.forEach(tl => tl?.kill());
            sectionTriggers.length = 0;
            sectionTimelines.length = 0;
        }
    },
    { immediate: true }
)

async function servicesIntroAnims() {
    await nextTick()
    if (!section.value) return
    const sectionEl = section.value;
    const introEl = sectionEl.querySelectorAll('.introduction p');
    const subtitle = sectionEl.querySelector('.subtitle');


    tl = gsap.timeline({ paused: true });
    if (store.ready) {


        if (subtitle) {
            const introAnim = new PlaceholderJS(subtitle, { manual: true });
            tl.add(() => introAnim.play(), "<+=0");
        }

        if (introEl.length) {
            introEl.forEach((p) => {
                const introAnim = new PlaceholderJS(p, { manual: true });
                tl.add(() => introAnim.play(), "<+=0.2");
            })
        }


        const tlScrollTrigger = ScrollTrigger.create({
            trigger: sectionEl,
            start: 'top top',
            end: 'bottom bottom',
            onEnter: () => tl.play(),
            onEnterBack: () => tl.play(),
        });

        if (window.scrollY < sectionEl.offsetHeight) {
            tl.play();
        }

        sectionTriggers.push(tlScrollTrigger);


    }

    ScrollTrigger.refresh()
    sectionTimelines.push(tl);
}



</script>