<template>
    <section ref="testimonialSection" class="pb-0 lg:pb-24 overflow-clip relative">
        <div
            class="max-w-full lg:max-w-[1024px] xl:max-w-[1290px] px-8 lg:px-12 mx-auto flex justify-between items-end md:items-start heading">
            <h2 class="text-2xl md:text-3xl mb-8 max-w-110 placeholder-line" data-splitting="words" ref="heading">
                Past Experiences
            </h2>
        </div>

        <div
            class="max-w-full lg:max-w-[1024px] xl:max-w-[1290px] px-8 lg:px-12 mx-auto lg:flex gap-8 lg:gap-14 items-stretch lg:h-fit relative">
            <div v-for="(t, index) in loop" :key="index"
                class="testimonial-row relative flex flex-col justify-between items-start mb-8 w-fit group testimonal-card">
                <div class="flex-grow **:transition-all py-6">
                    <p class="font-semibold text-lg placeholder-line opacity-0" data-splitting="words">{{ t.name }}</p>
                    <p class="text-xs text-gray-500 mb-3 placeholder-line opacity-0" data-splitting="words">{{ t.title
                    }}</p>
                    <p v-for="(p, index) in getExcerptParagraphs(t.bodyPlain)" :key="index"
                        class="text-sm placeholder-line mb-6 last:mb-0 opacity-0" data-splitting="words">
                        {{ p }}
                    </p>
                </div>
                <Links href="#" text="Read More" :noEntry="true" :onClick="() => openModal(t)"
                    class="text-sm mb-6 md:mb-0" />
                <div
                    class="lg:absolute lg:-right-7 lg:top-15 card-border swing-in-responsive w-full  origin-center h-[3px] lg:w-[3px] lg:h-[75%] bg-current/20 transition duriation-900 animate group-last:hidden">
                </div>
            </div>
        </div>

        <div v-if="selectedTestimonial" ref="modalContainer"
            class="fixed inset-0 bg-primary/60 backdrop-blur z-50 top-0 py-5 lg:p-5 lg:pb-15 overflow-y-auto opacity-0 overflow-x-clip"
            @click.self="closeModal">
            <div
                class="bg-white dark:bg-gray-800 rounded-lg  lg:rounded-[3rem] lg:max-w-5xl xl:max-w-7xl w-full mx-auto p-6 lg:p-12 relative mt-10 modal-window origin-top">
                <button
                    class="absolute top-1 z-20 right-1 text-3xl cursor-pointer transition duration-700 text-current hover:text-accent rounded-[3rem] px-6 py-3 hover:scale-[1.08] group size-18 flex flex-col justify-center items-center hover:rotate-270 modal-contant"
                    @click="closeModal" aria-label="Close modal">
                    <span
                        class="w-10 h-[4px] bg-current block rotate-45 rounded-[3rem] absolute left-4 group-hover:-rotate-135 transition-all duration-700"></span>
                    <span
                        class="w-10 h-[4px] bg-current block -rotate-45 rounded-[3rem] absolute left-4 group-hover:rotate-135 transition-all duration-700"></span>
                </button>
                <Testimonial :name="selectedTestimonial.name" :title="selectedTestimonial.title"
                    :quote="selectedTestimonial.body" active="true" class="modal-contant" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import PlaceholderJS from '@/utils/placeholder.js'
import { testimonials } from '@/data/testimonials.js'
import Testimonial from './contexts/Testimonial.vue'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNuxtApp } from '#app'
import { useMainStore } from '@/stores/main.js'
import Links from './Links.vue'

const modalContainer = ref(null)
const { $gsap: gsap } = useNuxtApp()
const testimonialSection = ref(null)
const heading = ref(null)
const loop = ref([])
const selectedTestimonial = ref(null)
const excerptLength = 700
const store = useMainStore()

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
            // take the entire paragraph
            out.push(p)
            remaining -= p.length
        } else {
            // this paragraph would exceed the limit, so slice it
            out.push(p.slice(0, remaining) + "…")
            remaining = 0
            break
        }
    }

    return out
}
function openModal(testimonial) {
    selectedTestimonial.value = testimonial
    document.body.style.overflow = 'hidden'

    nextTick(() => {
        const elm = modalContainer.value
        if (!elm && store.reduceMotion) return
        const el = elm.querySelector('.modal-window')
        const elC = elm.querySelector('.modal-contant')
        //gsap.set(el, { transformOrigin: '50% 0%', scaleY: 0.3, scaleX: 1.2, skewX: -12, skewY: 8 })
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
}

function closeModal() {
    const elm = modalContainer.value
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
    selectedTestimonial.value = null
    document.body.style.overflow = ''
}

onMounted(async () => {
  // 1) populate and wait a tick so that `.testimonal-card` exists
  loop.value = testimonials.map(t => ({ ...t })).sort(() => Math.random() - 0.5)
  await nextTick()

  const testimonialSectionEl = testimonialSection.value
  const cards = testimonialSectionEl.querySelectorAll('.testimonal-card')
  if (!cards.length) return

  cards.forEach(card => {
    const phEls = card.querySelectorAll('.placeholder-line')
  const phInstances = Array.from(phEls).map((el) => new PlaceholderJS(el, { manual: true, speed: 0.5 }))
    gsap.fromTo(
      card,
      { y: 40, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 60%',
          onEnter: () => {
            // Staggered pH.play() calls
            phInstances.forEach((pH, i) => {
              setTimeout(() => pH.play(), i * 150)
            })
          },
          onEnterBack: () => {
            phInstances.forEach((pH, i) => {
              setTimeout(() => pH.play(), i * 150)
            })
          },
          onLeaveBack: () => {
            phInstances.forEach((pH, i) => {
              setTimeout(() => pH.getTimeline().reverse(), i * 150)
            })
          }
        }
      }
    )
  })

  //  since each card’s own timeline will reverse its placeholders for you.)
})


</script>

<style scoped></style>