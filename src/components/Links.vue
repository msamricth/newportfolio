<template>
  <a :href="href" :target="target" @click.prevent="handleClick" rel="noopener noreferrer"
    class="inline-block font-bold transition-all duration-700 animated-link font-heading group overflow-clip motionless:duration-50 motionless:hover:text-accent active:text-electric-purple"
    ref="linkEl" @mouseenter="onHoverIn" @mouseleave="onHoverOut" :aria-label="text">
    <span
      class="nav-item flex motionless:**:**:inline motionless:**:**:visible **:**:inline-flex justify-center md:justify-start motionless:group-hover:text-current motionless:lg:duration-700"
      v-html="text"></span>
  </a>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Splitting from '@/utils/splitting.js'
import { useMainStore } from '@/stores/main.js'

const store = useMainStore()
const props = defineProps({
  href: { type: String, required: true },
  text: { type: String, required: true },
  target: { type: String, default: '_blank' },
  NoEntry: { type: Boolean, default: false },
  Play: { type: Boolean, default: false },
  onClick: Function,
})

const handleClick = () => {
  if (store.reduceMotion) {
    if (props.onClick) {
      props.onClick()
    } else {
      window.open(props.href, props.target)
    }
    return
  };
  onHoverIn()
  let startTime;
  const delayDuration = 300;
  const callFunct = (currentTime) => {
    if (!startTime) {
      startTime = currentTime;
    }
    const elapsedTime = currentTime - startTime;
    if (elapsedTime >= delayDuration) {
      onHoverOut()
      if (props.onClick) {
        props.onClick()
      } else {
        window.open(props.href, "_blank")
      }
    } else {
      requestAnimationFrame(callFunct);
    }
  }
  requestAnimationFrame(callFunct);
}
const linkEl = ref(null)
let chars = []
let timeline = null
let scrollTrigger = null

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

async function initLinkAnimation() {
  await nextTick()
  if (!linkEl.value || store.reduceMotion || props.NoEntry) return

  timeline = effectTimeline(linkEl.value)
  if (!timeline || props.NoEntry) return

  scrollTrigger = ScrollTrigger.create({
    trigger: linkEl.value,
    start: 'top 80%',
    end: 'bottom top',
    onEnter: () => timeline.timeScale(1).play(),
    onLeaveBack: () => timeline.timeScale(2).reverse(),
  })
}

watch(
  () => store.ready,
  async (ready) => {
    if (!ready || store.reduceMotion) return
    await initLinkAnimation()
  },
  { immediate: true }
)

watch(
  () => props.Play,
  async (play) => {
    if (!play || !timeline || store.reduceMotion) return
    timeline?.timeScale(1).play()
  }, { immediate: true })
watch(
  () => store.reduceMotion,
  async (rm) => {
    await nextTick()
    if (!rm) {
      await initLinkAnimation()
    } else {
      timeline?.kill()
      scrollTrigger?.kill()
      timeline = null
      scrollTrigger = null
      if (chars.length) {
        gsap.to(
          chars,
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            clearProps: "all",
            duration: 0
          })
        chars = []
      }
      if (linkEl.value) gsap.set(linkEl.value, { clearProps: 'all' })
    }
  },
  { immediate: true }
)

const onHoverIn = () => {
  if (!chars.length || store.reduceMotion) return
  gsap.fromTo(
    chars,
    {
      x: 0,
      y: 0,
      className: 'char text-current',
      autoAlpha: 0,
    },
    {
      x: 0,
      y: 0,
      autoAlpha: 1,
      className: 'char text-accent',
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
  if (!chars.length || store.reduceMotion) return
  gsap.fromTo(
    chars,
    {
      className: 'char text-accent',
    },
    {
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