<template>
    <div class="" ref="sectionRef" :class="['overview', 'w-full', 'flex', 'justify-center']">
        <div class="w-full max-w-full lg:max-w-1/2 px-8 lg:px-12 mx-auto">
            <h4 class="text-2xl font-black w-full placeholder-line mb-3" data-splitting="words">
                {{ heading }}
            </h4>
            <p v-if="paragraph" class="text-xl mb-6 placeholder-line" data-splitting="words">
                {{ paragraph }}
            </p>

            <ul v-if="items && items.length" class="space-y-3 list-disc pl-6 challenges-list">
                <li v-for="(item, i) in items" :key="i" class="text-lg font-medium opacity-0" data-item>
                    <span v-html="item" />
                </li>
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
    </div>
</template>
  
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PlaceholderJS from '../../utils/placeholder.js'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
    heading: String,
    paragraph: String,
    items: Array,
    tags: Array,
    tagIntro: String,
})

const sectionRef = ref(null)

onMounted(() => {
    nextTick(() => {
        const el = sectionRef.value
        const h = el.querySelector('h4.placeholder-line')
        const h5 = el.querySelector('h5.placeholder-line')
        const p = el.querySelector('p.placeholder-line')
        const items = el.querySelectorAll('[data-item]')
        const tagEls = el.querySelectorAll('.tags')
        const phH = new PlaceholderJS(h, { manual: true });
        const masterTL = gsap.timeline({
           /* scrollTrigger: {
                trigger: el,
                start: 'top 15%',
                toggleActions: 'play none none reverse',
            }*/
            paused: true
        })
        masterTL.fromTo(h,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 0.3,
                onStart: () => {
                   phH.play()
                }
            }
        );
        if (p) {
            const phP = new PlaceholderJS(p, { manual: true, speed: 2 });
            masterTL.fromTo(p,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                    onStart: () => {
                        phP.play()
                    }
                }
            ), 0.3
        }
        if (h5) {
            const phP = new PlaceholderJS(h5, { manual: true, speed: 2 });
            masterTL.fromTo(h5,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                    onComplete: () => {
                        if(!masterTL.reversed()) phP.play()
                    }
                }
            ), 0.3
        }

        items.forEach((item, i) => {
            masterTL.fromTo(item,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                },
                0.3 + (i * 0.15)
            );
        })

        tagEls.forEach((tag, i) => {
            masterTL.fromTo(tag, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: 'power2.out'
            }, items.length * 0.15 + 0.6 + (i * 0.05))
        })
        const sectionTL = gsap.timeline({ paused: true })
       
        sectionTL.to(el, {
            x: '-100%',
            autoAlpha: 0,
            filter: 'blur(40px)',
            ease: 'power2.inOut',
            duration: 1
        })

        ScrollTrigger.create({
            trigger: el,
            start: 'top 30%',
            end: '+=60%',
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onEnter: () => {
                masterTL.play()
            },
            onLeave: () => {
                sectionTL.play()
            },
            onEnterBack: () => {
                sectionTL.reverse()
            },
            onLeaveBack: () => {
               // masterTL.restart().pause()
               // masterTL.reverse()
               sectionTL.reverse()
            }
        })
    })

})

</script>
  