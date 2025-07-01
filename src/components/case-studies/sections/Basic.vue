<template>
    <section ref="el" class="px-8 max-w-full min-h-[150dvh] flex flex-col pt-24">
        <div class="sticky w-full max-w-2xl mx-auto text-container top-45 md:top-25 lg:top-45 xl:top-38 motionless:mb-12 motionless:lg:mb-60">
            <h4 class="mb-3 text-2xl font-black opacity-0 h3 motionless:opacity-100 placeholder-line" data-splitting="words">{{ heading
            }}
            </h4>
            <p class="mb-6 text-xl opacity-0 motionless:opacity-100 placeholder-line" data-splitting="words" v-if="paragraph">{{
                paragraph }}</p>
            <ul class="pl-6 space-y-3 list-disc">
                <li v-for="(item, i) in items" :key="i" class="text-lg font-medium opacity-0 motionless:opacity-100 **:inline-flex **:flex-wrap" data-item>
                    {{ item }}</li>
            </ul>

            <h5 v-if="tags && tags.length" class="my-6 text-xl opacity-0 motionless:opacity-100 placeholder-line" data-splitting="words">
                {{ tagIntro }}
            </h5>

            <ul v-if="tags && tags.length" class="flex flex-wrap items-start gap-1">
                <li v-for="(tag, i) in tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0 motionless:opacity-100">
                    {{ tag }}
                </li>
            </ul>
        </div>
    </section>
</template>


<script setup>
import { ref, nextTick, watch, onMounted } from 'vue'
import PlaceholderJS from '@/utils/placeholder.js'
import textAnim from '@/utils/textAnims'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMainStore } from '@/stores/main'
import { useCSStore } from '@/stores/caseStudy'

const csStore = useCSStore()

const props = defineProps({
  heading: String,
  paragraph: String,
  items: { type: Array, default: () => [] },
  tagIntro: String,
  tags: { type: Array, default: () => [] },
})

const el = ref(null)
const store = useMainStore()
let animInstance = null
let leaveTL = null
let scrollTrigger = null

async function initSection() {
  await nextTick()
  if (!el.value || store.reduceMotion) return

  animInstance = new textAnim(el.value, { manual: true })
  animInstance.init()

  leaveTL = gsap.timeline({ paused: true })
  leaveTL.fromTo(
    el.value,
    { x: '0%', autoAlpha: 1 },
    {
      x: '-100%',
      autoAlpha: 0,
      duration: 1,
      filter: 'blur(40px)',
      ease: 'power3.inOut'
    }
  )

  scrollTrigger = ScrollTrigger.create({
    trigger: el.value,
    start: 'top 70%',
    end: 'bottom 70%',
    scrub: true,
    onEnter: () => {
      animInstance?.play()
      leaveTL?.reverse()
    },
    onLeave: () => {
      leaveTL?.play()
    },
    onEnterBack: () => {
      leaveTL?.pause(0)
    },
    onLeaveBack: () => {
      animInstance?.reverse()
      leaveTL?.reverse()
    }
  })
  
}

function cleanup() {
  scrollTrigger?.kill()
  scrollTrigger = null

  leaveTL?.kill()
  leaveTL = null

  animInstance?.getTimeline()?.kill()
  animInstance = null

  if (el.value) {
    gsap.set(el.value, { clearProps: 'all' })
  }
}

onMounted(async () => {
    csStore.sectionReady = 2
  if (!store.reduceMotion) await initSection()
})

watch(
  () => store.reduceMotion,
  async (rm) => {
    await nextTick()
    if (rm) {
      cleanup()
    } else {
      await initSection()
    }
  },
  { immediate: true }
)
</script>
