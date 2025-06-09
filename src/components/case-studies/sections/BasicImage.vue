<template>
    <section ref="el"
        class="flex flex-col md:flex-row relative md:justify-between lg:justify-center items-start py-14 lg:py-0 gap-12 lg:min-h-[250dvh] overflow-clip md:mt-10 lg:mt-20 xl:mt-24">
        <div ref="textEl"
            class="w-full md:max-w-2xl text-container px-8 lg:px-12 pb-12 md:pb-0 lg:min-h-dvh flex flex-col justify-center tl relative max-md:pt-12">
            <h4 class="text-2xl font-black placeholder-line mb-3 opacity-0" data-splitting="words">{{ heading }}
            </h4>
            <p class="text-xl mb-6 opacity-0 placeholder-line" data-splitting="words" v-if="paragraph">{{
                paragraph }}</p>
            <ul class="list-disc pl-6 space-y-3 max-w-full" v-if="items && items.length">
                <li v-for="(item, i) in items" :key="i"
                    class="text-lg font-medium opacity-0  max-w-full **:inline-flex placeholder-line"
                    data-splitting="words" data-item>
                    {{ item }}</li>
            </ul>
            <h5 class="text-xl my-6 placeholder-line opacity-0" data-splitting="words" v-if="tags && tags.length">{{
                tagIntro }}
            </h5>
            <ul class="flex flex-wrap gap-2" v-if="tags && tags.length">
                <li v-for="(tag, i) in tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">
                    {{ tag }}</li>
            </ul>
        </div>
        <div ref="imgEl"
            class="w-full lg:w-1/2 h-[50dvh] md:h-[90dvh] md:rounded-l-[3rem] bg-cover bg-no-repeat bg-center lg:opacity-0 lg:absolute top-18 right-0 image tl"
            :style="`background-image:url(${image})`"></div>
    </section>
</template>





<script setup>
import { ref, nextTick } from 'vue'
import PlaceholderJS from '@/utils/placeholder.js'
import { useMatchMedia } from '@/composables/useMatchMedia'
import textAnim from '@/utils/TextAnims'
import gsap from 'gsap'

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

function setupSection2({ isDesktop, isTablet, isMobile }) {
    nextTick(() => {
        if(isMobile || isTablet){
            const animM = new textAnim(el.value, { toggleActions: 'play none none reverse' })
            imgAnim(el.value, false, 'play none none reverse');
            animM?.init()
            return;
        }
        const anim = new textAnim(el.value, { toggleActions: 'play none none reverse' })
        anim?.init()

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el.value,
                start: 'top top',
                end: '+=200%',
                pinSpacing: false,
                scrub: true,
                pin: true,
            }
        })
        tl.addLabel('entrance')

        if (!isMobile) tl.fromTo(textEl.value, { x: '0%' }, { x: '-50%', duration: 1, ease: 'power2.inOut' }, 'entrance');

        const imgSpacing = isMobile ? 'entrance' : 'entrance+=0.5'
        tl.fromTo(imgEl.value, { autoAlpha: 0, y: '200%', filter: 'blur(40px)' },
            { autoAlpha: 1, y: 0, filter: 'blur(0)', duration: 0.8 }, imgSpacing)
        if (isMobile) tl.to(textEl.value, { x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'entrance+=1.5')
        if (isMobile) tl.fromTo(imgEl.value, { y: '0' },
            { y: '-70%', duration: 1 }, 'entrance+=1.5')

        if (isMobile) tl.fromTo(imgEl.value, { x: '0' },
            { x: '-52%', duration: 1.5 }, 'entrance+=2.5')
        tl.addLabel('leave', `entrance+=4`)
        if (!isMobile) tl.to(textEl.value, { x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'leave+=1.5')
        if (!isMobile)  tl.to(imgEl.value, { x: '100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'leave+=1.5')
        if (isMobile)  tl.to(imgEl.value, { x: '-130%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'leave+=1.5')
    })
}

useMatchMedia(setupSection2)
</script>