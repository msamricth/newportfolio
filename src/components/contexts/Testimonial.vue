<template>
  <div
    class="bg-primary dark:bg-background p-6 md:rounded-[2rem] mx-auto transition-all duration-700 max-w-dvw md:max-w-[58vw] sticky top-20 lg:top-0"
    :class="width" ref="testimonial">
    <div class="flex items-center gap-4 mb-4">
      <div>
        <h3 class="text-lg font-semibold dark:text-primary text-background transition-all duration-700 placeholder-line"
          data-splitting="words">
          {{ name }}
        </h3>
        <p class="text-sm dark:text-gray-600 text-background/60 transition-all duration-700 placeholder-line"
          data-splitting="words">
          {{ title }}
        </p>
      </div>
    </div>
    <div class="flex items-stretch relative h-full mb-4 gap-6">
      <div
        class="w-3 bg-background dark:bg-primary inverted:bg-primary inverted:dark:bg-background transition-all duration-700 bq-border min-h-full swing-in-top-bck">
      </div>

      <blockquote
        class="text-xs md:text-sm dark:text-gray-800 text-background/80 leading-relaxed transition-all duration-700 placeholder-line"
        data-splitting="words" v-html="quote"></blockquote>
    </div>

    <a href="https://www.linkedin.com/in/emmtalarico/details/recommendations/?detailScreenTabIndex=0" target="_blank"
      rel="noopener noreferrer"
      class="animated-link group transition duration-700 overflow-hidden inline-block dark:text-primary text-background hover:scale-[1.08] text-sm dark:group-hover:text-electric-purple group-hover:text-accent"
      ref="linkEl" @mouseenter="onHoverIn" @mouseleave="onHoverOut">
      View on LinkedIn →
    </a>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import Splitting from 'splitting'
import PlaceholderJS from './../../utils/placeholder.js'

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

const animateAll = () => {
  const el = testimonial.value
  if (!el) return

  masterTL = gsap.timeline({ paused: true })

  const h4 = el.querySelector('h3.placeholder-line')
  if (h4) {
    headingPlaceholder = new PlaceholderJS(h4, { manual: true, speed: 6 })

    headingPlaceholder.getTimeline()?.progress(1).reverse()
    masterTL.add(() => { if (props.active) headingPlaceholder.play() }, 0)
  }

  const p = el.querySelector('p.placeholder-line')
  if (p) {
    titlePlaceholder = new PlaceholderJS(p, { manual: true, speed: 6 })
    titlePlaceholder.getTimeline()?.progress(1).reverse()
    masterTL.add(() => { if (props.active) titlePlaceholder.play() }, '+=0.2')
  }

  const paragraphs = el.querySelectorAll('blockquote p') || []
  bqBorder = el.querySelector('.bq-border')
  paragraphs.forEach((pEl, i) => {
    masterTL.fromTo(
      pEl,
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, ease: 'power3.out', duration: 0.2 },
      `+=${i === 0 ? 0.3 : 0.1}`
    )
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
  animateAll()
  if (props.active) masterTL?.play()
})

watch(() => props.active, (isActive) => {
  if (!masterTL) return

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
      className: 'char dark:group-hover:text-electric-purple group-hover:text-accent',
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
      className: 'char dark:group-hover:text-electric-purple group-hover:text-accent',
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
