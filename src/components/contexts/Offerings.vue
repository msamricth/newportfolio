<template>
    <section id="offerings" ref="section"
        class="transition duration-700 py-25 bg-primary/5 dark:bg-background/5 motionless:bg-primary/95 overflow-x-clip motionless:text-background">
        <div class="max-w-[1440px] mx-auto px-8 lg:px-12">
            <h2 class="mb-12 text-3xl font-bold text-center md:text-4xl font-heading placeholder-line md:text-left"
                data-splitting="words" ref="heading">I want to help</h2>
            <div class="flex flex-col gap-10">

                <div v-for="(item, index) in offerings" ref="offeringRefs" :key="index" class="offering-card">
                    <div class="sentry"></div>
                    <div
                        class="relative flex flex-col items-center gap-6 pb-4 transition-all duration-700 lg:gap-12 md:flex-row">
                        <div class="icon-btn relative w-24 h-24 group min-w-[120px] opacity-0 md:absolute md:top-2 delay-200 motionless:md:relative motionless:opacity-100"
                            v-if="item.icon">
                            <component :is="item.icon"
                                class="absolute inset-0 z-0 w-full h-full text-current opacity-0" />
                            <component :is="item.icon"
                                class="absolute inset-0 z-10 w-full h-full transition-all duration-700 opacity-0 icon-wipe-overlay motionless:opacity-100"
                                :class="item.textColor" />
                        </div>
                        <div class="text-center list-content md:text-left md:max-w-4/5">
                            <h3 class="font-semibold opacity-0 text-1xl md:text-2xl md:mb-2 placeholder-line"
                                data-splitting="words">{{ item.title
                                }}</h3>
                            <p class="leading-relaxed opacity-0 text-md md:text-base placeholder-line"
                                data-splitting="words">{{
                                    item.description
                                }}</p>
                            <ul
                                class="flex flex-wrap justify-center mt-4 text-sm list-disc list-inside opacity-70 md:flex-col listings">
                                <li class="mr-2 opacity-0 motionless:opacity-100" v-for="(point, i) in item.points" :key="i">
                                    <span class="-ml-2">{{ point }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-border swing-in-left-fwd-slow h-[2px] bg-current/20 transition duriation-900 mt-4 opacity-0 motionless:opacity-100"
                        :class="{ 'hidden': index === offerings.length - 1 }">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref, nextTick, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { offerings } from '../../data/offerings'
import PlaceholderJS from './../../utils/placeholder.js'
import { useMainStore } from '@/stores/main.js'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
let lastIsDesktop = width.value > 778
const heading = ref(null)
const section = ref(null)
const offeringRefs = ref([])
const store = useMainStore()
const isDesktop = ref(false)
const triggers = []
const timelines = []
onMounted(async () => {
    await nextTick()
    isDesktop.value = width.value > 772
})
function clearAllAnimations() {
    triggers.forEach(t => t?.kill())
    timelines.forEach(tl => tl?.kill())
    triggers.length = 0
    timelines.length = 0

    nextTick(() => {
        offeringRefs.value.forEach(card => {
            gsap.set(card, { clearProps: 'all' })
            const listContent = card.querySelector('.list-content')
            gsap.set(listContent, { clearProps: 'all' })
            const overlayPaths = card.querySelectorAll('.icon-wipe-overlay path')
            overlayPaths.forEach(path => {
                path.style.strokeDashoffset = path.style.strokeDasharray = 0
            })
        })
    })
}

async function offeringsDesktop() {
    if (!store.ready || store.reduceMotion) return

    offeringRefs.value.forEach(async (card, index) => {
        await nextTick()
        const { textColor } = offerings[index]
        const baseIcon = card.querySelector('.text-current')
        const listContent = card.querySelector('.list-content')
        const cardBorder = card.querySelector('.card-border')
        const overlayIcon = card.querySelector('.icon-wipe-overlay')
        const iconBTN = card.querySelector('.icon-btn')
        const cardHeader = card.querySelector('h3')
        const cardP = card.querySelector('p')
        const cardListings = card.querySelectorAll('.listings li')

        const cardHeaderAnim = new PlaceholderJS(cardHeader, { manual: true, speed: 2 })
        const cardPAnim = new PlaceholderJS(cardP, { manual: true, speed: 0.5 })

        if (!baseIcon || !overlayIcon) return

        const overlayPaths = overlayIcon.querySelectorAll('path')
        console.log(overlayPaths)
        overlayPaths.forEach((path) => {
            const len = path.getTotalLength()
            path.style.strokeDasharray = len
            path.style.strokeDashoffset = len
        })

        const entryTL = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        })
            .timeScale(1.5)


        entryTL.fromTo(card, { autoAlpha: 0 }, {
            autoAlpha: 1,
            ease: 'power1.out',
            duration: 0.3,
            onComplete: () => cardBorder.classList.add('animate')
        }, '+=0.5')


        entryTL.fromTo(iconBTN, {
            scale: 1,
            autoAlpha: 0
        }, {
            scale: 1.15,
            autoAlpha: 0.8,
            duration: 0.3
        }, '-=0.5')
            .fromTo(overlayIcon, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 0.3
            }, '-=0.5')
            .to(overlayPaths, {
                strokeDashoffset: 0,
                duration: 0.5,
                ease: 'power3.out',
                stagger: 0.05
            }, '+=0.3')
        if (isDesktop.value) {
            entryTL.fromTo(listContent, { x: 0 }, {
                x: 145,
                duration: 0.5,
                ease: 'back.out(0.9)'
            }, '-=0.3')
        }
        
        entryTL.call(() => {
            cardHeaderAnim.play()
            cardPAnim.play()
        }, null, 0)
        entryTL.fromTo(cardP, { autoAlpha: 1 }, {
            autoAlpha: 0.8,
            ease: 'power1.out',
            duration: 0.3
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



        timelines.push(entryTL)

        const trigger = ScrollTrigger.create({
            trigger: card.querySelector('.sentry'),
            start: 'top 65%',
            end: 'bottom 24%',
            onEnter: () => {
                iconBTN.classList.add('wobble-ver-right-scale')
                card.classList.add(textColor)
            },
            onEnterBack: () => {
                iconBTN.classList.add('wobble-ver-right-scale')
                card.classList.add(textColor)
            },
            onLeaveBack: () => {
                iconBTN.classList.remove('wobble-ver-right-scale')
                card.classList.remove(textColor)
            },
            onLeave: () => {
                iconBTN.classList.remove('wobble-ver-right-scale')
                card.classList.remove(textColor)
            },
        })

        triggers.push(trigger)
    })

    ScrollTrigger.refresh()
}

function headingTrigger() {
    const headingEl = heading.value
    const offeringsEl = section.value
    const headingAnim = new PlaceholderJS(headingEl, { manual: true, speed: 2 })

    const trigger = ScrollTrigger.create({
        trigger: offeringsEl,
        start: 'top 85%',
        end: 'bottom 44%',
        onEnter: () => headingAnim.play(),
        onLeaveBack: () => headingAnim.getTimeline()?.progress(1).reverse()
    })

    triggers.push(trigger)
}

watch(
    () => store.ready,
    async (ready) => {
        if (!ready || store.reduceMotion) return
        await nextTick()
        headingTrigger()
        await offeringsDesktop()
    },
    { immediate: true }
)

watch(
    () => store.reduceMotion,
    async (rm) => {
        clearAllAnimations()
        if (!rm && store.ready) {
            await nextTick()
            headingTrigger()
            await offeringsDesktop()
        }
    },
    { immediate: true }
)

watch(width, async (newWidth) => {
    const desktopNow = newWidth > 772
    if (desktopNow !== isDesktop.value) {
        isDesktop.value = desktopNow
        if (!store.reduceMotion && store.ready) {
            clearAllAnimations()
            await nextTick()
            headingTrigger()
            await offeringsDesktop()
        }
    }
})
</script>
