<template>
    <section id="offerings" ref="section" class="py-25  bg-primary/5 dark:bg-background/5 transition duration-700">
        <div class="max-w-[1440px] mx-auto px-8 lg:px-12">
            <h2 class="text-3xl md:text-4xl font-heading font-bold mb-12 placeholder-line text-center md:text-left" data-splitting="words" ref="heading">I want to help</h2>
            <div class="flex gap-10 flex-col">

                <div v-for="(item, index) in offerings" ref="offeringRefs" :key="index" class="offering-card">
                    <div class="gap-6 lg:gap-12 flex-col md:flex-row flex items-center transition-all duration-700 pb-4">
                        <div class="icon-btn relative w-24 h-24 group min-w-[120px]" v-if="item.icon">
                            <component :is="item.icon" class="absolute inset-0 w-full h-full text-current z-0" />
                            <component :is="item.icon"
                                class="icon-wipe-overlay absolute inset-0 w-full h-full transition-all duration-700 z-10"
                                :class="item.textColor" />
                        </div>
                        <div class="list-content text-center md:text-left">
                            <h3 class="text-1xl md:text-2xl font-semibold md:mb-2 transition-all duration-700">{{ item.title
                            }}</h3>
                            <p class="text-md md:text-base opacity-80 leading-relaxedtransition-all duration-700">{{
                                item.description
                            }}</p>
                            <ul
                                class="mt-4 list-disc list-inside text-sm opacity-70 transition-all duration-700 justify-center flex flex-wrap md:flex-col">
                                <li class="mr-2" v-for="(point, i) in item.points" :key="i">
                                    <span class="-ml-2">{{ point }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-border swing-in-left-fwd-slow h-[2px] bg-current/20 transition duriation-900 mt-4  opacity-0"
                        :class="{ 'hidden': index === offerings.length - 1 }">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { onMounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { offerings } from '../../data/offerings'
import PlaceholderJS from './../../utils/placeholder.js';

const heading = ref(null);
gsap.registerPlugin(ScrollTrigger)
const section = ref(null)
const offeringRefs = ref([])

onMounted(async() => {
    await nextTick()
    const offeringsEl = section.value;
    const headingEl = heading.value;
    const headingAnim = new PlaceholderJS(headingEl, { manual: true, speed: 2 });
        ScrollTrigger.create({
            trigger: offeringsEl,
            start: 'top 85%',
            end: 'bottom 44%',
            onEnter: () => {
                headingAnim.play()
            },
            onEnterBack: () => {
                //headingAnim.play()
            },
            onLeaveBack: () => {
                headingAnim.getTimeline()?.progress(1).reverse()

            },
            onLeave: () => {
               // headingAnim.getTimeline()?.progress(1).reverse()
            },
        });
    offeringRefs.value.forEach(async(card, index) => {

        await nextTick()
        const { textColor } = offerings[index];
        const baseIcon = card.querySelector('.text-current');
        const cardBorder = card.querySelector('.card-border');
        const overlayIcon = card.querySelector('.icon-wipe-overlay');
        const iconBTN = card.querySelector('.icon-btn');
        if (!baseIcon || !overlayIcon) return;
        gsap.fromTo(card, {
            y: 40,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            ease: 'power1.out',
            duration: 0.5,
            onComplete: (() => {
                cardBorder.classList.add('animate')
            }),
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none',
            }
        });

        // Prep stroke paths
        const overlayPaths = overlayIcon.querySelectorAll('path');
        overlayPaths.forEach((path) => {
            const len = path.getTotalLength();
            path.style.strokeDasharray = len;
            path.style.strokeDashoffset = len;
        });

        // Icon animation timeline
        const iconTL = gsap.timeline({ paused: true });
        iconTL
            .fromTo(overlayIcon, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0)
            .to(overlayPaths, {
                strokeDashoffset: 0,
                duration: 0.5,
                ease: 'power3.out',
                stagger: 0.05
            }, 0.1)
            .fromTo(baseIcon, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.3 }, 0.1)
            .fromTo(iconBTN, { scale: 1 }, { scale: 1.15, duration: 0.3 }, 0.1)
            .add(() => {
                iconBTN.classList.add('wobble-ver-right');
            }, '+=0.1');

        ScrollTrigger.create({
            trigger: card,
            start: 'top 55%',
            end: 'bottom 44%',
            onEnter: () => {
                iconTL.play()
                card.classList.add(textColor);
            },
            onEnterBack: () => {
                iconTL.play()
                card.classList.add(textColor);
            },
            onLeaveBack: () => {
                iconTL.reverse();
                overlayPaths.forEach(p => p.style.strokeDashoffset = p.style.strokeDasharray);
                iconBTN.classList.remove('wobble-ver-right');
                card.classList.remove(textColor);

            },
            onLeave: () => {
                iconTL.reverse();
                overlayPaths.forEach(p => p.style.strokeDashoffset = p.style.strokeDasharray);
                iconBTN.classList.remove('wobble-ver-right');
                card.classList.remove(textColor);
            },
        });
        
    ScrollTrigger.refresh()
    });
});


</script>

<style scoped>
.icon-wipe-overlay path {
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
    transition: stroke-dashoffset 0.3s ease-in-out;
}</style>