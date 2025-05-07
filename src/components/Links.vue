<template>
    <a
      :href="href"
      :target="target"
      rel="noopener noreferrer"
      class="animated-link group transition duration-700 overflow-hidden inline-block text-accent hover:scale-[1.08]"
      ref="linkEl"
      @mouseenter="onHoverIn"
      @mouseleave="onHoverOut"
    >
      <span class="nav-item">{{ text }}</span>
    </a>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import Splitting from 'splitting'
  
  gsap.registerPlugin(ScrollTrigger)
  
  const props = defineProps({
    href: { type: String, required: true },
    text: { type: String, required: true },
    target: { type: String, default: '_blank' },
  })
  
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
  
  onMounted(() => {
    timeline = effectTimeline(linkEl.value)
    if (!timeline) return
  
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
  