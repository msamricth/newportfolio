<template>
    <div ref="overview"
        class="overview flex-wrap max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 xl:px-26 mx-auto intro flex md:flex-row relative md:pb-16 justify-center">
        <div class="flex flex-col md:w-1/3 lg:w-1/4 py-6 side" ref="sidebar">
            <div class="w-full flex justify-between relative">
                <h4 class="text-2xl font-black w-full placeholder-line h3" data-splitting="words">Overview</h4>
                <Github url="https://github.com/msamricth/greenleadershiptrust" aria="Green Leadership Trust's Github"
                    class="w-10 relative overview-git" ref="git" />
            </div>
            <div class="swing-in-left-fwd-slow h-[2px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition mb-3 lg:mb-5 w-full opacity-0"
                :class="sideBarVisible ? 'animate ' : 'opacity-0'" style="--theme-main-animation-delay:0.3s">
            </div>
            <div class="flex gap-2 items-center mb-4 md:flex-col xl:flex-row md:items-start xl:items-center">
                <h5 class="placeholder-line text-base" data-splitting="words">Client:</h5>
                <span class="placeholder-line text-base" data-splitting="words">Green Leadership Trust</span>
            </div>
            <div class="specialties-animate mb-5">
                <h5 class="placeholder-line mb-2 text-base" data-splitting="words">Specialties:</h5>
                <ul class="flex gap-1 items-start flex-wrap">
                    <li v-for="(specialty, index) in specialties" :key="index"
                        class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags"
                        :style="'--theme-main-animation-delay:' + ((index * 0.3) + 0.8) + 's'">
                        {{ specialty }}
                    </li>
                </ul>
            </div>
            <div class="specialties-animate mb-4">
                <h5 class="placeholder-line mb-2 text-base" data-splitting="words">Techstack:</h5>
                <ul class="flex gap-1 items-start flex-wrap">
                    <li v-for="(t, index) in tech" :key="index"
                        class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags"
                        :style="'--theme-main-animation-delay:' + ((index * 0.3) + 0.8) + 's'">
                        {{ t }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="md:w-2/3 lg:w-3/4 entry md:pl-8 lg:pl-12 xl:pl-16 pt-5">
            <div class="sticky top-24 md:pb-10 lg:pb-0">
                <p class="placeholder-line text-lg lg:text-2xl leading-[1.4] mb-4" data-splitting="words">
                    Since 2022, I have partnered with Green Leadership Trust (GLT)—an organization that elevates people
                    of
                    the
                    global majority into leadership roles within the environmental movement—by serving as their design
                    and
                    digital strategist.
                </p>
                <p class="placeholder-line text-lg lg:text-2xl leading-[1.4]" data-splitting="words">Our collaboration
                    has centered on
                    elevating GLT’s visibility, operational capacity, and
                    engagement strategy through a deeply aligned and mission-driven creative approach.
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PlaceholderJS from './../../utils/placeholder.js'
import videoHandler from '../../utils/videoHandler.js';

import Github from '../buttons/Github.vue';


const git = ref(null)
const overview = ref(null)
const sideBarVisible = ref(false)
const sidebar = ref(null)
const specialties = [
    'Print and Digital Media', 'Video and Image optimizations', 'API Integrations', 'Custom Theme and Plugin Development', 'CRM & Communications Strategy'
];

const tech = [
    'WordPress',
    'ACF', 'Webpack', 'Airtable', 'Cloudinary', 'React', 'Bootstrap', 'GSAP'

];
onMounted(async() => {
    await nextTick()
    nextTick(() => {

        const overviewEl = overview.value
        const sideBarEl = sidebar.value

        const heading = overviewEl.querySelector('h4.placeholder-line')
        const entry = overviewEl.querySelectorAll('.entry .placeholder-line')
        const sidebarPlaceholders = sideBarEl.querySelectorAll('.placeholder-line')
        const gitEl = sideBarEl.querySelectorAll('.overview-git')
        const tags = sideBarEl.querySelectorAll('.tags');

        const entryAnims = Array.from(entry).map(el => new PlaceholderJS(el, { manual: true, speed: 0.45 }))
        const sidebarAnims = Array.from(sidebarPlaceholders).map(el => new PlaceholderJS(el, { manual: true }))
        let int = 0;
        const tl = gsap.timeline({ paused: true })

        //  tl.fromTo(heading, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.2, ease: 'power2.out' }, 0)

        entry.forEach((el, i) => {
            int = int + (i * 0.3)
            tl.fromTo(el, { opacity: 0, y: 40 }, {
                opacity: 1, y: 0, duration: 0.3, ease: 'power3.out', onStart: () => entryAnims[i]?.play()
            }, int)
        })
        sidebarPlaceholders.forEach((el, i) => {
            int = i * 0.3;
            tl.fromTo(el, { opacity: 0, y: 40 }, {
                opacity: 1, y: 0, duration: 0.3, ease: 'power3.out', onStart: () => sidebarAnims[i]?.play()
            }, int)
            if (i === 0) {
                if (gitEl) {
                    tl.fromTo(gitEl, { opacity: 0, x: 40 }, {
                        opacity: 1, x: 0, duration: 0.3, ease: 'power3.out'
                    }, '-=0.06')
                }
            }
        })  
        tags.forEach((tag, i) => {
            tl.fromTo(
                tag,
                { opacity: 0, y: 40, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power3.out' },
                int + i * 0.05
            );
        });
      

        ScrollTrigger.create({
            trigger: overviewEl,
            start: 'top 75%',
            end: 'bottom 25%',
            onEnter: () => {
                sideBarVisible.value = true
                tl.play(0)
            },
            onLeaveBack: () => {
                sideBarVisible.value = false
                //  headingAnim.getTimeline().progress(1).reverse()
                entryAnims.forEach(anim => {
                    const TLs = anim.getTimeline();
                   // console.log(TLs)
                    TLs.pause();
                    TLs.seek(0);
                })
                // sidebarAnims.forEach(anim => anim.getTimeline().progress(1).reverse())
                tl.reverse()
            }
        })
    })
})

</script>
