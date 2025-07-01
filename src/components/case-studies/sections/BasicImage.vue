<template>
    <section ref="el"
        class="flex flex-col md:flex-row relative md:justify-between lg:justify-center items-start py-14 lg:py-0 gap-12 lg:min-h-[250dvh] overflow-clip md:mt-10 lg:mt-20 xl:mt-24 motionless:lg:max-w-[1290px] motionless:xl:max-w-[1680px] motionless:mx-auto motionless:lg:px-12 w-full  motionless:lg:min-h-screen motionless:lg:mb-60">
        
        <div ref="textEl"
            class="relative flex flex-col justify-center w-full px-8 pb-12 md:max-w-2xl text-container lg:px-12 md:pb-0 lg:min-h-dvh tl max-md:pt-12">
            <h4 class="mb-3 text-2xl font-black opacity-0 h3 placeholder-line motionless:opacity-100"
                data-splitting="words">{{ heading }}
            </h4>
            <p class="mb-6 text-xl opacity-0 md:text-sm lg:text-lg smd:text-xl motionless:opacity-100 placeholder-line"
                data-splitting="words" v-if="paragraph">{{
                    paragraph }}</p>
            <ul class="max-w-full pl-6 space-y-3 list-disc" v-if="items && items.length">
                <li v-for="(item, i) in items" :key="i"
                    class="text-xl md:text-sm smd:text-lg font-medium opacity-0 motionless:opacity-100  max-w-full **:inline-flex placeholder-line"
                    data-splitting="words" data-item>
                    {{ item }}</li>
            </ul>
            <h5 class="my-6 text-xl opacity-0 placeholder-line motionless:opacity-100" data-splitting="words"
                v-if="tags && tags.length">{{
                    tagIntro }}
            </h5>
            <ul class="flex flex-wrap gap-2" v-if="tags && tags.length">
                <li v-for="(tag, i) in tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0 motionless:opacity-100">
                    {{ tag }}</li>
            </ul>
        </div>
        <div ref="imgEl"
            class="w-full lg:w-1/2 h-[50dvh] md:h-[90dvh] md:rounded-l-[3rem] bg-cover bg-no-repeat bg-center lg:opacity-0 motionless:lg:opacity-100 motionless:lg:relative lg:absolute top-18 right-0 image tl motionless:w-full motionless:md:rounded-[3rem]"
            :style="`background-image:url(${image})`"></div>
    </section>
</template>




<script setup>
import { ref, nextTick, watch, onMounted } from 'vue'
import { useWindowSize, usePreferredReducedMotion } from '@vueuse/core'
import PlaceholderJS from '@/utils/placeholder.js'
import textAnim from '@/utils/textAnims'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMainStore } from '@/stores/main'
import { useCSStore } from '@/stores/caseStudy.js';

const csStore = useCSStore()

const props = defineProps({
    heading: String,
    paragraph: String,
    items: Array,
    tagIntro: String,
    tags: Array,
    image: String
})

const el = ref(null)
const textEl = ref(null)
const imgEl = ref(null)
const store = useMainStore()
const { width } = useWindowSize()

let anim = null
let scrollTL = null

function cleanup() {
    scrollTL?.kill()
    scrollTL = null
    anim?.kill()
    anim = null

    if (el.value) gsap.set(el.value, { clearProps: 'all' })
    if (textEl.value) {
        const h = textEl.value.querySelector('h4.placeholder-line')
        const h5 = textEl.value.querySelector('h5.placeholder-line')
        const p = textEl.value.querySelector('p.placeholder-line')
        const btn = textEl.value.querySelector('.btn')
        const items = textEl.value.querySelectorAll('.list-disc li')
        const tagEls = textEl.value.querySelectorAll('.tags')
        gsap.set(textEl.value, { clearProps: 'all' })
        if (h) h.removeAttribute("style")
        if (h5) h5.removeAttribute("style")
        if (p) p.removeAttribute("style")
        if (btn) btn.removeAttribute("style")
        if (items.length) items.forEach(item => item.removeAttribute("style"))
        if (tagEls.length) tagEls.forEach(tag => tag.removeAttribute("style"))
    }
    if (imgEl.value) gsap.set(imgEl.value, { clearProps: 'scale', autoAlpha: 1, filter: 'none' })

}

async function initSection() {
    await nextTick()

    const isMobile = width.value < 778
    const isTablet = width.value < 1024
    if (!el.value || store.reduceMotion) return
    if (isMobile || isTablet) {
        console.log(width.value)
        const animM = new textAnim(el.value, { toggleActions: 'play none none reverse' })
        imgAnim(el.value, false, 'play none none reverse');
       animM?.init()
        return;
    }
    const anim = new textAnim(el.value, { toggleActions: 'play none none reverse' })
    anim?.init()

    scrollTL = gsap.timeline({
        scrollTrigger: {
            trigger: el.value,
            start: 'top top',
            end: '+=200%',
            pinSpacing: false,
            scrub: true,
            pin: true,
        }
    })
    scrollTL.addLabel('entrance')

    if (!isMobile) scrollTL.fromTo(textEl.value, { x: '0%' }, { x: '-50%', duration: 1, ease: 'power2.inOut' }, 'entrance');

    const imgSpacing = isMobile ? 'entrance' : 'entrance+=0.5'
    scrollTL.fromTo(imgEl.value, { autoAlpha: 0, y: '200%', filter: 'blur(40px)' },
        { autoAlpha: 1, y: 0, filter: 'blur(0)', duration: 0.8 }, imgSpacing)
    if (isMobile) scrollTL.to(textEl.value, { x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'entrance+=1.5')
    if (isMobile) scrollTL.fromTo(imgEl.value, { y: '0' }, { y: '-70%', duration: 1 }, 'entrance+=1.5')

    if (isMobile) scrollTL.fromTo(imgEl.value, { x: '0' }, { x: '-52%', duration: 1.5 }, 'entrance+=2.5')
    scrollTL.addLabel('leave', `entrance+=4`)
    if (!isMobile) scrollTL.to(textEl.value, { x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'leave+=1.5')
    if (!isMobile) scrollTL.to(imgEl.value, { x: '100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'leave+=1.5')
    if (isMobile) scrollTL.to(imgEl.value, { x: '-130%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'leave+=1.5')
}

onMounted(async() => {
    await nextTick()
    csStore.sectionReady = 4
})
watch(() => store.loaded, async (ready) => {
    await nextTick()
    if (!ready || store.reduceMotion) return
    await nextTick()
    await initSection()
})
watch(() => store.reduceMotion, async (rm) => {
    await nextTick()
    if (rm) cleanup()
    else await initSection()
},
    { immediate: true })
</script>
