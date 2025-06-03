<template>
  <a :href="href" :target="target" @click.prevent="handleClick" rel="noopener noreferrer"
    class="animated-link group transition-all duration-700 overflow-hidden inline-block hover:scale-[1.04]"
    ref="linkEl" @mouseenter="onHoverIn" @mouseleave="onHoverOut">
    <span class="nav-item" v-html="text"></span>
  </a>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Splitting from '../utils/splitting.js'



const props = defineProps({
  href: { type: String, required: true },
  text: { type: String, required: true  },
  target: { type: String, default: '_blank' },
  NoEntry: { type: Boolean, default: false},
  onClick: Function,
})
const handleClick = () => {
  onHoverIn();
  setTimeout(() => {
    if(props.onClick){
    props.onClick?.()
    } else {
      window.open(props.href, props.target);
    }
    onHoverOut()
  }, 300)
}
const linkEl = ref(null)
let chars = []
let timeline = null

const effectTimeline = (targetEl) => {
  const tl = gsap.timeline({ paused: true })
  const split = Splitting({ target: targetEl, by: 'chars' })[0]
  chars = split?.chars || []

  if (!chars.length) return null

  tl.fromTo(
    chars,
    {
      x: () => gsap.utils.random(-50, 50),
      y: () => gsap.utils.random(-40, 0),
      autoAlpha: 0,
    },
    {
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'power3.out',
      duration: 0.5,
      stagger: {
        amount: 0.2,
        from: 'random',
      },
    }
  )
  return tl
}

onMounted(async() => {
  await nextTick()
  timeline = effectTimeline(linkEl.value)
  if (!timeline) return
  if(props.NoEntry) return
  ScrollTrigger.create({
    trigger: linkEl.value,
    start: 'top 90%',
    end: 'bottom top',
    onEnter: () => timeline.timeScale(1).play(),
    onLeaveBack: () => timeline.timeScale(2).reverse(),
  })
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
      className: 'char text-electric-purple dark:text-accent',
      ease: 'power3.out',
      duration: 0.5,
      stagger: {
        amount: 0.3,
        from: 'random',
      },
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
      className: 'char text-electric-purple dark:text-accent',
    },
    {
      x: 0,
      y: 0,
      className: 'char text-current',
      ease: 'power3.out',
      duration: 0.5,
      stagger: {
        amount: 0.3,
        from: 'random',
      },
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