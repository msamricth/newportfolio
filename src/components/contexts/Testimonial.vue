<template>
  <div class="mx-auto transition-all duration-700" ref="testimonial">
    <div class="flex items-center gap-4 mb-4">
      <div>
        <h3
          class="text-lg font-semibold transition-all duration-700 xl:text-xl 2xl:text-2xl text-background placeholder-line"
          data-splitting="words">
          {{ name }}
        </h3>
        <p class="text-sm transition-all duration-700 xl:-text-lg 2xl:text-base text-background/60 placeholder-line"
          data-splitting="words">
          {{ title }}
        </p>
      </div>
    </div>
    <div class="relative flex items-stretch h-full gap-6 mb-4">
      <div class="w-3 min-h-full transition-all duration-700 bg-background bq-border swing-in-top-bck motionless:opacity-100" :class="{'animate': store.reduceMotion}">
      </div>

      <blockquote
        class="text-xs italic font-thin leading-relaxed tracking-wide transition-all duration-700 md:text-base xl:text-lg 2xl:text-xl"
        v-html="quote"></blockquote>
    </div>

    <Links text="View on LinkedIn →" href="https://www.linkedin.com/in/emmtalarico" target="_blank"
      class="mb-6 text-sm lg:mb-0" />

  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'

import { useNuxtApp } from '#app'

const { $gsap: gsap } = useNuxtApp()
import Links from '@/components/Links.vue'
import Splitting from '@/utils/splitting'
import PlaceholderJS from '@/utils/placeholder.js'
import { useMainStore } from '@/stores/main.js'
const store = useMainStore()
const props = defineProps({
  name: String,
  title: String,
  image: String,
  quote: String,
  width: String,
  active: Boolean,
})

const testimonial = ref(null)
let masterTL = null
let headingPlaceholder = null
let titlePlaceholder = null
let bqBorder = null
let chars = []

const animateAll = async () => {
  const el = testimonial.value
  if (!el) return

  masterTL = gsap.timeline({ paused: true })

  const h4 = el.querySelector('h3.placeholder-line')
  if (h4) {
    headingPlaceholder = new PlaceholderJS(h4, { manual: true, speed: 1 })

    headingPlaceholder.getTimeline()?.progress(1).reverse()
    masterTL.add(() => { if (props.active) headingPlaceholder.play() }, 0)
  }

  const p = el.querySelector('p.placeholder-line')
  if (p) {
    titlePlaceholder = new PlaceholderJS(p, { manual: true, speed: 1 })
    titlePlaceholder.getTimeline()?.progress(1).reverse()
    masterTL.add(() => { if (props.active) titlePlaceholder.play() }, '+=0.2')
  }

  const paragraphs = el.querySelectorAll('blockquote p') || []
  bqBorder = el.querySelector('.bq-border')
  paragraphs.forEach((pEl, i) => {
    masterTL.call(() => {
      const bqAnim = new PlaceholderJS(pEl, { manual: true, speed: 0.2 })
      bqAnim.play()
    }, null, `+=${i === 0 ? 0.3 : 0.1}`)
  })
  if (bqBorder) {
    masterTL.add(() => {
      bqBorder.classList.remove('animate')
      if (props.active) bqBorder.classList.add('animate')
    }, '0.9')
  }

  const link = el.querySelector('.animated-link')
  if (link) {
    const split = Splitting({ target: link, by: 'chars' })?.[0]
    chars = Array.isArray(split?.chars) ? split.chars : []
    if (chars.length) {
      masterTL.fromTo(
        chars,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          ease: 'power3.out',
          duration: 0.5,
          stagger: { amount: 0.1, from: 'start' },
        },
        '+=0.1'
      )
    }
  }
}

onMounted(async () => {
  await nextTick()
  if (!store.loaded || store.reduceMotion) return
  await animateAll()
  if (props.active) masterTL?.play()
})

watch(() => props.active, (isActive) => {
  if (!masterTL || store.reduceMotion) return

  if (isActive) {
    masterTL.timeScale(1).play()
    headingPlaceholder.play()
    titlePlaceholder.play()
  } else {
    bqBorder.classList.remove('animate')
    masterTL.timeScale(2).reverse()
    headingPlaceholder.getTimeline()?.progress(1).reverse()
    titlePlaceholder.getTimeline()?.progress(1).reverse()
  }
})

const onHoverIn = () => {
  if (!chars.length) return
  gsap.fromTo(
    chars,
    {
      x: () => gsap.utils.random(-50, 50),
      y: () => gsap.utils.random(-40, 0),
      className: 'char text-current',
    },
    {
      x: 0,
      y: 0,
      className: 'char group-active:text-electric-purple group-hover:text-accent',
      ease: 'power3.out',
      duration: 0.5,
      stagger: { amount: 0.3, from: 'random' },
    }
  )
}

const onHoverOut = () => {
  if (!chars.length) return
  gsap.fromTo(
    chars,
    {
      x: () => gsap.utils.random(-50, 50),
      y: () => gsap.utils.random(-40, 0),
      className: 'char group-active:text-electric-purple group-hover:text-accent',
    },
    {
      x: 0,
      y: 0,
      className: 'char text-current',
      ease: 'power3.out',
      duration: 0.5,
      stagger: { amount: 0.3, from: 'random' },
    }
  )
}
</script>

<style scoped>
.animated-link .char {
  display: inline-block;
  transition: color 0.3s ease;
}
</style>
