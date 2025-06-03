<template>
    <section ref="sectionEl"
        class="relative flex flex-col md:flex-row justify-between py-14 md:py-0 gap-12 max-w-full lg:max-w-[1024px] xl:max-w-[1290px] mx-auto overflow-clip md:min-h-[280dvh] lg:min-h-[200dvh] lg:justify-center lg:items-start">
        <div ref="textEl"
            class="order-2 md:order-1 w-full md:max-w-4xl lg:max-w-2xl xl:max-w-xl md:ml-auto text-container pt-6 md:pt-0 lg:pt-6 px-8 lg:pl-12 lg:pr-0 tl lg:min-h-[70vh] lg:flex lg:flex-col lg:justify-center">
            <h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">{{ heading }}
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
        <Gist v-if="gistId" :gistId="gistId" :repoUrl="repoUrl" :FileName="FileName" :Caption="Caption"
            class="order-3 md:order-2 md:absolute md:max-w-xl lg:max-w-2xl md:opacity-0 gist mx-2 md:mx-6 md:mt-6 lg:mt-0 tl left-0" />

        <div
            class="order-2 md:order-3 items-center relative space-y-12 md:w-2/5 lg:w-lg px-8 lg:pr-12 lg:pl-0 tl  lg:h-[70vh]  lg:flex lg:flex-col lg:justify-center">
            <div ref="iconTrack"
                class="relative iconTrack space-y-12 md:size-90 lg:size-95 origin-center max-md:flex justify-between gap-3 tl">
                <div class="icon-btn md:absolute w-24 h-24 group md:min-w-[120px] top-0 left-30 tl" v-if="icons[0]">
                    <component :is="icons[0]"
                        class="icon-wipe-overlay inset-0 w-full h-full transition-all duration-700 z-10 text-hot-coral tl" />
                </div>
                <div class="icon-btn  md:absolute w-24 h-24 group md:min-w-[120px] overflow-visible top-34 lg:top-36 left-30 tl"
                    v-if="icons[1]">
                    <component :is="icons[1]"
                        class="icon-wipe-overlay  inset-0 w-full h-full transition-all duration-700 z-10 text-electric-purple tl" />
                </div>
                <div class="icon-btn md:absolute w-24 h-24 group min-w-[120px] bottom-0 left-32 tl" v-if="icons[2]">
                    <component :is="icons[1]"
                        class="icon-wipe-overlay inset-0 w-full h-full transition-all duration-700 z-10 text-sunburn-orange tl" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useMatchMedia } from '@/composables/useMatchMedia'
import { textAnim } from '@/composables/textAnims'
import { imgAnim } from '@/composables/imgAnims'
import Gist from '../../contexts/Gist.vue'
import gsap from 'gsap'

const props = defineProps({
    heading: String,
    paragraph: String,
    items: Array,
    tagIntro: String,
    tags: Array,
    icons: Array,
    gistId: String,
    repoUrl: String,
    FileName: String,
    Caption: String
})

const sectionEl = ref(null)
const textEl = ref(null)
const iconTrack = ref(null)
function setupSection4Mobile({ isMobile }) {
    nextTick(() => {
        imgAnim(sectionEl.value, false, 'play none none reverse');
        textAnim(sectionEl.value, false, 'play none none reverse');

    })
}

function setupSection4({ isDesktop, isTablet }) {
    nextTick(() => {
        const el = sectionEl.value
        const elm = textEl.value
        const gistEl = el.querySelector('.gist')
        let int = 0
        const icons = iconTrack.value.querySelectorAll('.icon-btn')

        textAnim(elm, false, 'play none none reverse');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top 15%',
                end: '+=200%',
                scrub: true,
                pinSpacing: false,
                pin: true,
            }
        })
        tl.addLabel('enter')
        tl.fromTo(elm, {
            y: '100%', autoAlpha: 0, filter: 'blur(40px)'
        }, {
            y: '0%', autoAlpha: 1, filter: 'none', duration: 0.5
        }, 'enter+=0')
        tl.addLabel('icons', 'enter+=0.1')
        icons.forEach((icon, index) => {
            const overlayIcon = icon.querySelector('.icon-wipe-overlay');
            const overlayPaths = overlayIcon.querySelectorAll('path');
            const baseIcon = icon.querySelector('.text-current');
            const cardBorder = icon.querySelector('.card-border');
            const iconBTN = icon.querySelector('.icon-btn');
            let len = 0;
            int = index * 0.25;
            // tl.fromTo(icon, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5 }, index * 0.5)
            overlayPaths.forEach((path) => {
                len = path.getTotalLength();
                path.style.strokeDasharray = len;
                path.style.strokeDashoffset = len;
            });
            tl.fromTo(icon, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.5 }, `icons+=${int}`)

            int = int * index
            tl.fromTo(overlayPaths, {
                autoAlpha: 0,
                strokeDashoffset: len
            }, {
                autoAlpha: 1,
                strokeDashoffset: 0,
                duration: 1,
                ease: 'power3.out',
            }, `icons+=${int}`)
            switch (index) {
                case 0:
                    tl.addLabel('iconsRP', 'icons+=3.5')
                    tl.to(icon, {
                        y: 70,
                        duration: 1.2,
                        ease: 'power3.inOut'
                    }, 'iconsRP+=0')
                    break;
                case 1:
                    tl.to(icon, {
                        x: -80,
                        y: 30,
                        duration: 1.2,
                        ease: 'power3.inOut'
                    }, 'iconsRP+=0')
                    break;
                case 2:
                    tl.to(icon, {
                        y: -104,
                        x: 80,
                        duration: 1.2,
                        ease: 'power3.inOut'
                    }, 'iconsRP+=0')
                    break;
            }
        });


        tl.addLabel('iconRoll', 'iconsRP+=1')
        tl.to(iconTrack.value, {
            rotation: '360deg',
            duration: 4,
            ease: 'power1.inOut'
        }, 'iconRoll+=0.6')

        tl.to(icons, {
            rotation: '-360deg',
            duration: 4,
            ease: 'power1.inOut'
        }, 'iconRoll+=0.6')
        if (gistEl) {

            tl.addLabel('gist', 'iconRoll+=1.5')
            tl.to(elm, {
                x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1.5
            }, 'gist+=1')
            tl.fromTo(gistEl, {
                y: 1000,
                autoAlpha: 0,
                filter: 'blur(40px)',
            }, {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: 1.5
            }, 'gist+=1')
        }
        tl.to(icons, {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: 'power1.inOut'
        }, 'iconRoll+=6')
        tl.addLabel('leave', 'iconRoll+=8')
        tl.to(icons, {
            y: -60,
            autoAlpha: 0,
            duration: .6,
            stagger: 0.2,
            ease: 'power1.inOut'
        }, 'leave+=1')
        tl.to(el, {
            x: '-100%', autoAlpha: 0, filter: 'blur(40px)', duration: 1
        }, 'leave+=1')
    })
}

useMatchMedia(setupSection4, setupSection4Mobile)
</script>