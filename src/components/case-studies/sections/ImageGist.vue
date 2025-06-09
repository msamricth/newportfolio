<template>
    <section ref="elm"
        class="mt-10 md:mt-0 flex flex-col md:flex-row items-center md:justify-between py-14 gap-12 relative  tl md:min-h-[250vh] lg:min-h-[200vh] md:items-start">
        <div ref="imgEl"
            class="w-full image order-2 md:order-1 md:w-1/3 h-[80vh] bg-cover bg-center md:opacity-0 md:rounded-r-[3rem] image tl md:px-8 lg:px-12 lg:mt-8 xl:w-1/2"
            :style="`background-image:url(${image})`"></div>
        <div
            class="w-full order-1 md:order-2 lg:max-w-2xl md:mr-auto text-container md:pt-6 px-8 lg:px-12 tl lg:h-[80vh] lg:flex lg:flex-col lg:justify-center lg:mt-8">
            <h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">{{ heading }}
            </h4>
            <p class="text-xl md:text-sm lg:text-xl mb-6 placeholder-line" data-splitting="words" v-if="paragraph">{{
                paragraph }}</p>
            <ul class="list-disc pl-6 space-y-3">
                <li v-for="(item, i) in items" :key="i" class="text-lg md:text-sm max-lg:mb-2 lg:text-xl font-medium opacity-0 **:inline-flex **:flex-wrap" data-item>
                    {{ item }}</li>
            </ul>


            <h5 v-if="tags && tags.length" class="text-xl md:text-md lg:text-xl my-6 placeholder-line" data-splitting="words">
                {{ tagIntro }}
            </h5>

            <ul v-if="tags && tags.length" class="flex gap-1 items-start flex-wrap">
                <li v-for="(tag, i) in tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">
                    {{ tag }}
                </li>
            </ul>
        </div>
        <div class="order-3 md:order-2 md:px-0 md:pt-6 lg:pt-0 px-2 w-full md:absolute relative md:opacity-0 gist tl md:right-8 lg:right-12 md:w-2/3 flex flex-col justify-center xl:max-w-xl  lg:mt-14"
            v-if="gistId">
            <Gist :gistId="gistId" :repoUrl="repoUrl" :FileName="FileName" :Caption="Caption"
                class="lg:mx-auto w-full" />
        </div>
    </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import PlaceholderJS from '@/utils/placeholder.js'
import { useMatchMedia } from '@/composables/useMatchMedia'
import {imgAnim} from '@/composables/imgAnims'
import textAnim from '@/utils/textAnims'
import Gist from '../../contexts/Gist.vue'
import gsap from 'gsap'

const props = defineProps({
    heading: String,
    paragraph: String,
    items: Array,
    tagIntro: String,
    tags: Array,
    image: String,
    gistId: String,
    repoUrl: String,
    FileName: String,
    Caption: String
})

const elm = ref(null)
const imgEl = ref(null)

function setupSection3({ isDesktop, isTablet, isMobile }) {

    nextTick(() => {
        const el = elm.value
        const text = el.querySelector('.text-container')
        const h = el.querySelector('h4.placeholder-line')
        const h5 = el.querySelector('h5.placeholder-line')
        const p = el.querySelector('p.placeholder-line')
        const items = el.querySelectorAll('.list-disc li')
        const gist = el.querySelector('.gist')
        const tagEls = el.querySelectorAll('.tags')
        const phH = new PlaceholderJS(h, { manual: true });
        const img = imgEl.value


        
        if(isMobile){
            imgAnim(el, false, 'play none none reverse');
            const anim = new textAnim(text, { toggleActions: 'play none none reverse' })
            anim?.init()
            return;
        }
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top top',
                end: '+=200%',
                scrub: true,
                id: 'sectionST',
                pinSpacing: false,
                pin: true,
            }
        })
        tl.addLabel('entrance')
        if (!isMobile) tl.fromTo(img, { x: '-100%', autoAlpha: 0, filter: 'blur(40px)' }, { x: '0%', filter: 'blur(0px)', autoAlpha: 1, duration: 0.75 })
        tl.fromTo(text, { x: '100%', autoAlpha: 0 }, { x: '0%', autoAlpha: 1, duration: 1 }, 'entrance-=0.05')

        tl.fromTo(h,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 0.3,
                onStart: () => {
                    phH.play()
                }
            }, 'entrance+=0.8'
        );
        if (p) {
            const phP = new PlaceholderJS(p, { manual: true, speed: 0.15 });
            tl.fromTo(p,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                    onStart: () => {
                        phP.play()
                    }
                }, 'entrance+=1'
            )
        }
        if (h5) {
            const phP = new PlaceholderJS(h5, { manual: true, speed: 2 });
            tl.fromTo(h5,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                    onComplete: () => {
                        if (!tl.reversed()) phP.play()
                    }
                }
            ), 'entrance+=1.1'
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
                `entrance+=${1 + (i * 0.15)}`
            );
        })

        tagEls.forEach((tag, i) => {
            tl.fromTo(tag, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: 'power2.out'
            }, `entrance+=${items.length * 0.15 + 1.2 + (i * 0.05)}`)
        })
        tl.addLabel('gist', 'entrance+=2')
        tl.to(text, { x: '200%', filter: 'blur(40px)', autoAlpha: 1, duration: 0.5 }, 'gist+=0.5')

            tl.fromTo(gist, { x: '-200%', filter: 'blur(40px)', autoAlpha: 0 }, { x: '0', filter: 'blur(0px)', autoAlpha: 1, duration: 0.5 }, 'gist+=0.5')
            tl.addLabel('leave', 'gist+=2')
            tl.to(gist, { x: '200%', filter: 'blur(40px)', autoAlpha: 1, duration: 0.5 }, 'leave+=0.5')
            tl.to(img, { y: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1 }, 'leave+=0.5')

    })
}

useMatchMedia(setupSection3)
</script>