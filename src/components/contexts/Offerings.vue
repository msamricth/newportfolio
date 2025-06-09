<template>
    <section id="offerings" ref="section"
        class="py-25  bg-primary/5 dark:bg-background/5 transition duration-700 overflow-x-clip">
        <div class="max-w-[1440px] mx-auto px-8 lg:px-12">
            <h2 class="text-3xl md:text-4xl font-heading font-bold mb-12 placeholder-line text-center md:text-left"
                data-splitting="words" ref="heading">I want to help</h2>
            <div class="flex gap-10 flex-col">

                <div v-for="(item, index) in offerings" ref="offeringRefs" :key="index" class="offering-card">
                    <div class="sentry"></div>
                    <div
                        class="gap-6 lg:gap-12 flex-col md:flex-row flex items-center transition-all duration-700 pb-4 relative">
                        <div class="icon-btn relative w-24 h-24 group min-w-[120px] opacity-0 md:absolute md:top-2 delay-200"
                            v-if="item.icon">
                            <component :is="item.icon"
                                class="absolute inset-0 w-full h-full text-current z-0 opacity-0" />
                            <component :is="item.icon"
                                class="icon-wipe-overlay absolute inset-0 w-full h-full transition-all duration-700 z-10 opacity-0"
                                :class="item.textColor" />
                        </div>
                        <div class="list-content text-center md:text-left md:max-w-4/5">
                            <h3 class="text-1xl md:text-2xl font-semibold md:mb-2  placeholder-line opacity-0"
                                data-splitting="words">{{ item.title
                                }}</h3>
                            <p class="text-md md:text-base leading-relaxed placeholder-line opacity-0"
                                data-splitting="words">{{
                                    item.description
                                }}</p>
                            <ul
                                class="mt-4 list-disc list-inside text-sm opacity-70 justify-center flex flex-wrap md:flex-col listings">
                                <li class="mr-2 opacity-0" v-for="(point, i) in item.points" :key="i">
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
import { useMatchMedia } from '@/composables/useMatchMedia'

const heading = ref(null);
const section = ref(null)
const offeringRefs = ref([])

function offeringsDesktop({ isMobile, isDesktop, isTablet }) {
    offeringRefs.value.forEach(async (card, index) => {

        await nextTick()
        console.log('funct: ' + isMobile, isDesktop, isTablet)
        const { textColor } = offerings[index];
        const baseIcon = card.querySelector('.text-current');
        const listContent = card.querySelector('.list-content');
        const cardBorder = card.querySelector('.card-border');
        const overlayIcon = card.querySelector('.icon-wipe-overlay');
        const iconBTN = card.querySelector('.icon-btn');
        const cardHeader = card.querySelector('h3')
        const cardP = card.querySelector('p')
        const cardListings = card.querySelectorAll('.listings li')

        const cardHeaderAnim = new PlaceholderJS(cardHeader, { manual: true, speed: 2 })
        const cardPAnim = new PlaceholderJS(cardP, { manual: true, speed: 0.5 })

        const entryTL = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        })

            .timeScale(1.5)

        if (!baseIcon || !overlayIcon) return;

        const overlayPaths = overlayIcon.querySelectorAll('path');
        overlayPaths.forEach((path) => {
            const len = path.getTotalLength();
            path.style.strokeDasharray = len;
            path.style.strokeDashoffset = len;
        });
        entryTL.call(() => {
            cardHeaderAnim.play()
            cardPAnim.play()
        }, null, 0)
        entryTL.fromTo(card, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: 'power1.out',
            duration: 0.3,
            onComplete: (() => {
                cardBorder.classList.add('animate')
            }),
        }, '+=0.5')
        entryTL.fromTo(cardP, {
            autoAlpha: 1
        }, {
            autoAlpha: 0.8,
            ease: 'power1.out',
            duration: 0.3,
        }, '-=0.2')

        entryTL.fromTo(cardListings, {
            autoAlpha: 0,
            y: -40
        }, {
            autoAlpha: 1,
            ease: 'back.out(0.9)',
            y: 0,
            duration: 0.3,
            stagger: 0.15
        }, '+=0.2')
        if (!isMobile) {
            entryTL.fromTo(listContent, {
                x: 0,
            }, {
                x: 145,
                duration: 0.5,
                ease: 'back.out(0.9)'

            }, '+=0.25')
        } else {
            entryTL.to(listContent, { x: 0 })
        }
        entryTL.fromTo(iconBTN, { scale: 1, autoAlpha: 0 }, { scale: 1.15, autoAlpha: 0.8, duration: 0.3 }, '-=0.5')
            .fromTo(overlayIcon, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, '-=0.6')
            .to(overlayPaths, {
                strokeDashoffset: 0,
                duration: 0.5,
                ease: 'power3.out',
                stagger: 0.05
            }, '-=0.8')

        ScrollTrigger.create({
            trigger: card.querySelector('.sentry'),
            start: 'top 65%',
            end: 'bottom 24%',
            onEnter: () => {
                iconBTN.classList.add('wobble-ver-right-scale');
                card.classList.add(textColor);
            },
            onEnterBack: () => {
                iconBTN.classList.add('wobble-ver-right-scale');
                card.classList.add(textColor);

            },
            onLeaveBack: () => {
                iconBTN.classList.remove('wobble-ver-right-scale');
                card.classList.remove(textColor);

            },
            onLeave: () => {
                iconBTN.classList.remove('wobble-ver-right-scale');
                card.classList.remove(textColor);
            },
        });

        ScrollTrigger.refresh()
    });
}

onMounted(async () => {
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

        }
    });
});

useMatchMedia(offeringsDesktop)

</script>

<style scoped>

</style>