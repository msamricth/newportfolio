<template>
    <section ref="testimonialSection" class="relative pb-0 lg:pb-24 overflow-clip">
        <div
            class="max-w-full lg:max-w-[1024px] xl:max-w-[1290px] px-8 lg:px-12 mx-auto flex justify-between items-end md:items-start heading">
            <h2 class="mb-8 text-2xl md:text-3xl max-w-110 placeholder-line" data-splitting="words" ref="heading">
                Past Experiences
            </h2>
        </div>

        <div
            class="max-w-full lg:max-w-[1024px] xl:max-w-[1290px] px-8 lg:px-12 mx-auto lg:flex gap-8 lg:gap-14 items-stretch lg:h-fit relative">
            <div v-for="(t, index) in loop" :key="index"
                class="relative flex flex-col items-start justify-between mb-8 testimonial-row w-fit group testimonal-card">
                <div class="flex-grow **:transition-all py-6">
                    <p class="text-lg font-semibold opacity-0 text-primary dark:text-background placeholder-line"
                        data-splitting="words">{{ t.name }}</p>
                    <p class="mb-3 text-xs text-gray-500 opacity-0 placeholder-line" data-splitting="words">{{ t.title
                    }}</p>
                    <p v-for="(p, index) in getExcerptParagraphs(t.bodyPlain)" :key="index"
                        class="mb-6 text-sm opacity-0 text-primary dark:text-background placeholder-line last:mb-0"
                        data-splitting="words">
                        {{ p }}
                    </p>
                </div>
                <Links href="#" text="Read More" :onClick="() => openModal(t)" class="mb-6 text-sm lg:mb-0" />
                <div
                    class="lg:absolute lg:-right-7 lg:top-15 card-border swing-in-responsive w-full  origin-center h-[3px] lg:w-[3px] lg:h-[75%] bg-current/20 transition duriation-900 animate group-last:hidden">
                </div>
            </div>
        </div>
        <Modal :isOpen="!!modalOpen" @close="closeModal" contentClass="bg-gray-800 text-white">
            <Testimonial :name="selectedTestimonial.name" :title="selectedTestimonial.title"
                :quote="selectedTestimonial.body" :active="true" class="modal-contant" />
        </Modal>

    </section>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import PlaceholderJS from '@/utils/placeholder.js'
import { testimonials } from '@/data/testimonials.js'
import Testimonial from '@/components/contexts/Testimonial.vue'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Modal from '@/components/contexts/Modal.vue'
import { useNuxtApp } from '#app'
import { useMainStore } from '@/stores/main.js'
import Links from '@/components/Links.vue'
import { AnimationFrame } from '@/utils/AnimationFrame'

const modalContainer = ref(null)
const { $gsap: gsap } = useNuxtApp()
const testimonialSection = ref(null)
const heading = ref(null)
const loop = ref([])
const selectedTestimonial = ref(null)
const excerptLength = 700
const store = useMainStore()
const modalOpen = ref(false)

const sectionTriggers = []
const sectionTimelines = []

function getExcerpt(text) {
    return text.slice(0, excerptLength) + '...'
}
function getExcerptParagraphs(paragraphs) {
    let remaining = excerptLength
    const out = []

    for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i]
        if (remaining <= 0) break

        if (p.length <= remaining) {
            out.push(p)
            remaining -= p.length
        } else {
            out.push(p.slice(0, remaining) + "…")
            remaining = 0
            break
        }
    }

    return out
}
function openModal(testimonial) {
    modalOpen.value = true
    selectedTestimonial.value = testimonial
    // document.body.style.overflow = 'hidden'
    /*
        nextTick(() => {
            const elm = modalContainer.value
            if (!elm && store.reduceMotion) return
            const el = elm.querySelector('.modal-window')
            const elC = elm.querySelector('.modal-contant')
            const tl = gsap.timeline()
            tl.fromTo(elm, {
                autoAlpha: 0,
                filter: 'blur(40px)'
            }, {
                autoAlpha: 1,
                filter: 'none',
                duration: 0.4,
                ease: 'power1.out'
            })
            tl.fromTo(el, {
                scale: 0,
            }, {
                scale: 1,
                duration: 0.6,
                ease: 'elastic.out(0.9)'
            }, '-=0.2')
            tl.fromTo(elC, {
                filter: 'blur(40px)',
            }, {
                filter: 'none',
                duration: 0.6,
                ease: 'power1.inOut'
            }, '-=0.3')
        })
        */
}
function closeModal() {
    const elm = modalContainer.value
    modalOpen.value = false
    /*
    if (elm && !store.reduceMotion) {
        const el = elm.querySelector('.modal-window')
        const elC = elm.querySelector('.modal-contant')
        const tl = gsap.timeline({
            onComplete: () => {
                selectedTestimonial.value = null
                document.body.style.overflow = ''
            }
        })
        tl.fromTo(elC, {
            filter: 'none',
        }, {
            filter: 'blur(40px)',
            duration: 0.6,
            ease: 'power1.inOut'
        })
        tl.fromTo(el, {
            scale: 1,
            autoAlpha: 1,
            y: 0
        }, {
            y: 1000,
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power1.out'
        }, '-=0.3')
        tl.fromTo(elm, {
            autoAlpha: 1,
            filter: 'none'
        }, {
            autoAlpha: 0,
            filter: 'blur(40px)',
            duration: 0.4,
            ease: 'power1.out'
        }, '-=0.6')
        return
    }
        */
    selectedTestimonial.value = null
    //document.body.style.overflow = ''
}

async function initTestimonialAnimations() {
    if (!testimonialSection.value || store.reduceMotion) return

    const cards = testimonialSection.value.querySelectorAll('.testimonal-card')
    if (!cards.length) return

    cards.forEach(card => {
        const phEls = card.querySelectorAll('.placeholder-line')
        const phInstances = Array.from(phEls).map((el) => new PlaceholderJS(el, { manual: true, speed: 0.5 }))

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 60%',
                onEnter: () => {
                    store.toggleFold(true)
                    phInstances.forEach((pH, i) => {
                        AnimationFrame(()=>{pH.play()}, i * 150)
                    })
                },
                onEnterBack: () => {
                    store.toggleFold(false, true)
                    phInstances.forEach((pH, i) => {
                        AnimationFrame(()=>{pH.play()}, i * 150)
                    })
                },
                onLeaveBack: () => {
                    phInstances.forEach((pH, i) => {
                        if (pH.getTimeline()) {
                            AnimationFrame(()=>{pH.getTimeline().reverse()}, i * 150)
                        } else {
                            pH.update()
                        }
                    })
                }
            }
        })
            .fromTo(
                card,
                { y: 40, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: 'power1.out',

                }
            )

        sectionTimelines.push(tl)
        sectionTriggers.push(ScrollTrigger.getById(card) || ScrollTrigger.getAll().slice(-1)[0])
    })
}

onMounted(async () => {
    loop.value = testimonials.map(t => ({ ...t })).sort(() => Math.random() - 0.5)
    await nextTick()
    // await initTestimonialAnimations()
})

watch(() => store.ready, async (ready) => {
    if (!ready || store.reduceMotion) return
    await nextTick()
    await initTestimonialAnimations()
}, { immediate: true })

watch(() => store.reduceMotion, async (rm) => {
    await nextTick()
    if (!rm) {
        await initTestimonialAnimations()
    } else {
        sectionTriggers.forEach(t => t?.kill())
        sectionTimelines.forEach(tl => tl?.kill())
        sectionTriggers.length = 0
        sectionTimelines.length = 0

        // Clear gsap styles
        testimonialSection.value?.querySelectorAll('.testimonal-card')?.forEach(el => {
            gsap.set(el, { clearProps: 'all' })
        })
    }
}, { immediate: true })
</script>

<style scoped></style>