<template>
    <section ref="el"
        class="flex flex-col md:flex-row relative md:justify-between lg:justify-center items-start py-14 lg:py-0 gap-12 lg:min-h-[250dvh] overflow-clip md:mt-10 lg:mt-20 xl:mt-88">
        <div ref="textEl"
            class="w-full md:max-w-2xl text-container px-8 lg:px-12 pb-12 md:pb-0 lg:min-h-dvh flex flex-col justify-center tl">
            <h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">{{ heading }}
            </h4>
            <p class="text-xl mb-6 placeholder-line" data-splitting="words" v-if="paragraph">{{
                paragraph }}</p>
            <ul class="list-disc pl-6 space-y-3" v-if="items && items.length">
                <li v-for="(item, i) in items" :key="i" class="text-lg font-medium opacity-0" data-item>
                    {{ item }}</li>
            </ul>
            <h5 class="text-xl my-6 placeholder-line" data-splitting="words" v-if="tags && tags.length">{{ tagIntro }}
            </h5>
            <ul class="flex flex-wrap gap-2" v-if="tags && tags.length">
                <li v-for="(tag, i) in tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">
                    {{ tag }}</li>
            </ul>
        </div>
        <div ref="imgEl"
            class="w-full lg:w-1/2 h-[90dvh] md:rounded-l-[3rem] bg-cover bg-no-repeat bg-center lg:opacity-0 lg:absolute top-18 right-0 image tl"
            :style="`background-image:url(${image})`"></div>
    </section>
</template>





<script setup>
import { ref, nextTick } from 'vue'
import PlaceholderJS from '@/utils/placeholder.js'
import { useMatchMedia } from '@/composables/useMatchMedia'
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

function setupSection2({ isDesktop }) {
    nextTick(() => {
        const h = el.value.querySelector('h4.placeholder-line')
        const h5 = el.value.querySelector('h5.placeholder-line')
        const p = el.value.querySelector('p.placeholder-line')
        const items = el.value.querySelectorAll('.list-disc li')
        const tagEls = el.value.querySelectorAll('.tags')

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
        tl.fromTo(textEl.value, { x: '0%' }, { x: '-50%', duration: 1, ease: 'power2.inOut' }, 'entrance');

        tl.fromTo(h,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 0.3
            }, 'entrance+=0.1'
        );

        tl.add(() => {
            const phH = new PlaceholderJS(h, { manual: true });
            phH.play()
        }, 'entrance+=0.1')
        if (p) {
            tl.fromTo(p,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                    onStart: () => {
                        //   phP.play()
                    }
                }, 'entrance+=0.3'
            )
            tl.add(() => {
                const phP = new PlaceholderJS(p, { manual: true, speed: 2 });
                phP.play()
            }, 'entrance+=0.34')
        }
        if (h5) {
            tl.fromTo(h5,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                }, 'entrance+=0.38'
            )
            tl.add(() => {
                const phP = new PlaceholderJS(h5, { manual: true, speed: 2 });
                phP.play()
            }, 'entrance+=0.42')
        }

        items.forEach((item, i) => {
            tl.fromTo(item,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                },
                `entrance+=0.42 ${+ (i * 0.15)}`
            );
        })
        let entranceTotal = 0;
        tagEls.forEach((tag, i) => {
            tl.fromTo(tag, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: 'power2.out'
            }, `entrance+=${items.length * 0.15 + 0.6 + (i * 0.05)}`)
            entranceTotal = `${items.length * 0.15 + 0.6 + (i * 0.08)}`
        })
        tl.fromTo(imgEl.value, { autoAlpha: 0, y: '200%', filter: 'blur(40px)' },
                { autoAlpha: 1, y: 0, filter: 'blur(0)', duration: 1 }, 'entrance+=0.5')
        tl.addLabel('leave', `entrance+=${entranceTotal + 2}`)
            .to(textEl.value, { x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'leave+=1.5')
            .to(imgEl.value, { x: '100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'leave+=1.5')
    })
}

useMatchMedia(setupSection2)
</script>