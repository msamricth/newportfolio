<template>
    <div ref="sectionRef" class="w-full flex justify-center overflow-x-clip lg:-mt-60">
        <div class="absolute top-0 left-0 h-full w-full lg:w-1/2 z-0 rounded-e-[1.75rem] overflow-clip" ref="imageContainer">
            <img v-for="(image, i) in images" :key="i" :src="image"
                class="absolute top-0 left-0 w-full h-full object-cover opacity-0" :ref="el => imageRefs[i] = el" />
        </div>
        <div class="w-full max-w-full lg:max-w-2/5 px-8 lg:px-12 z-10 pt-24 lg:pt-60" ref="contentBox">
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
            <MainButton href="https://greenleadershiptrust.org/" label="greenleadershiptrust.com" :onClick="() => ctaClick('https://greenleadershiptrust.org/')" class="max-md:text-md min-w-[270px] md:min-w-[306px] text-electric-purple dark:text-accent mt-24 btn"/>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PlaceholderJS from '../../utils/placeholder.js'
import MainButton from '../Buttons/MainButton.vue'
const sectionRef = ref(null)
const contentBox = ref(null)
const imageContainer = ref(null)
const imageRefs = []
const images = [
    'https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto/v1746818136/Untitled_design_8_ia98uc.jpg',
    'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_900,f_auto/v1746818135/2_ev2u7a.jpg',
    'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_900,q_auto/v1746818458/3_1_mkdmee.png',
    'https://res.cloudinary.com/dp1qyhhlo/image/upload/w_900,q_auto/v1746818489/4_1_fz3muz.png',
]
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
    heading: String,
    paragraph: String,
    items: Array,
    tags: Array,
    tagIntro: String,
})
const ctaClick = (url)=> {
    window.open(url, '_blank');
}
const btnWobble = (btn, reversed=false) => {
    return !reversed ? btn.classList.add('wobble-ver-right') : btn.classList.remove('wobble-ver-right');
}
onMounted(() => {
    nextTick(() => {
        const el = sectionRef.value
        const h = el.querySelector('h4.placeholder-line')
        const h5 = el.querySelector('h5.placeholder-line')
        const p = el.querySelector('p.placeholder-line')
        const items = el.querySelectorAll('[data-item]')
        const tagEls = el.querySelectorAll('.tags')
        const btnEls = el.querySelectorAll('.btn')
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
                        if (!masterTL.reversed()) phP.play()
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
                y: 40
            }, {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: 'power2.out'
            }, items.length * 0.15 + 0.6 + (i * 0.05))
        })
        btnEls.forEach((btn, i) => {
            masterTL.fromTo(btn, {
                opacity: 0,
                y: 40
            }, {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: 'power2.out',
                onStart:()=> {btn.classList.remove('wobble-ver-right')},
                onComplete: ()=> {btn.classList.add('wobble-ver-right')},
            }, tagEls.length * 0.15 + 0.6 + (i * 0.05))
        })
        ScrollTrigger.create({
            trigger: el,
            start: 'top 40%',
            onEnter: () => {
               // document.body.classList.remove('dark');
                masterTL.play()
            },
            onLeaveBack: () => {
                //document.body.classList.add('dark');
                masterTL.reverse()
            },
            onLeave: () => {
               // document.body.classList.add('dark');
            },
        })
        const contentEl = contentBox.value

        const shiftTimeline = gsap.timeline({ paused: true })
        shiftTimeline.to(contentEl, {
            x: '50%',
            ease: 'power2.inOut',
            duration: 1,
        })

        const imageTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top top',
                end: '+=400%',
                scrub: true,
                pin: true,
                anticipatePin: 1,
            }
        })
        imageTimeline.add(shiftTimeline.play(), 0)
        images.forEach((_, i) => {
            imageTimeline.to(imageRefs[i], {
                autoAlpha: 1,
                duration: 1,
                ease: 'power2.inOut',
            }, i + 1)
            if (imageRefs[i - 1]) {
                imageTimeline.to(imageRefs[i - 1], {
                    autoAlpha: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                }, i + 1)
            }
        })
    })

})

</script>
  