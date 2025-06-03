<template>
    <section ref="el" class="px-8 max-w-full min-h-[150dvh] flex flex-col pt-24">
        <div class="w-full max-w-2xl text-container mx-auto sticky top-45 md:top-25 lg:top-45 xl:top-38">
            <h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">{{ heading
            }}
            </h4>
            <p class="text-xl mb-6 placeholder-line" data-splitting="words" v-if="paragraph">{{
                paragraph }}</p>
            <ul class="list-disc pl-6 space-y-3">
                <li v-for="(item, i) in items" :key="i" class="text-lg font-medium opacity-0" data-item>
                    {{ item }}</li>
            </ul>

            <h5 v-if="tags && tags.length" class="text-xl my-6 placeholder-line" data-splitting="words">
                {{ tagIntro }}
            </h5>

            <ul v-if="tags && tags.length" class="flex gap-1 items-start flex-wrap">
                <li v-for="(tag, i) in tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">
                    {{ tag }}
                </li>
            </ul>
        </div>
    </section>
</template>


<script setup>
import { ref, nextTick } from 'vue'
import PlaceholderJS from '@/utils/placeholder.js'
import { useMatchMedia } from '@/composables/useMatchMedia'
import { textAnim } from '@/composables/textAnims'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const props = defineProps({
    heading: String,
    paragraph: String,
    items: { type: Array, default: () => [] },
    tagIntro: String,
    tags: { type: Array, default: () => [] },
})

const el = ref(null)

function setupSection1({ isDesktop, isTablet, isMobile }) {
    nextTick(() => {

        textAnim(el.value, false, 'play none none reverse');
        const leaveTL = gsap.timeline({
            paused: true,
        })

        leaveTL.fromTo(el.value, { x: '0%', autoAlpha: 1 }, { x: '-100%', autoAlpha: 0, duration: 1, filter: 'blur(40px)', ease: 'power3.inOut' })
        ScrollTrigger.create({
            trigger: el.value,
            start: 'top top',
            end: 'bottom 70%',
            scrub: true,
            onEnter: () => {
                leaveTL.reverse()
            },
            onLeave: () => {
                leaveTL.play()
            },
            onEnterBack: () => {
                textAnim(el, true);
                leaveTL.reverse()
            },
            onLeaveBack: () => {
                leaveTL.reverse()
            }
        })
    })
}

useMatchMedia(setupSection1)
</script>