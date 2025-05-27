<template>
    <a
      target="_blank"
      :href="url"
      class="group/cta relative flex items-center transition overflow-hidden w-60 text-center subtle-slide-in cursor-pointer"
      style="--theme-main-animation-delay:0.7s"
      ref="buttonEl"
      @mouseenter="play"
      @mouseleave="reverse"
    >
      <span
        class="inline-block font-semibold px-4 py-2 border-current border-2 rounded-full transition-all relative z-10 bg-inherit w-full whitespace-nowrap"
        ref="labelEl"
      >
        {{ text }}
      </span>
      <span
        class="absolute right-0 top-0 w-0 h-full opacity-0 transition-all z-0 origin-left block overflow-clip"
        ref="blobEl"
      >
        <span
          ref="blobInnerEl"
          class="flex items-center justify-center rounded-r-full bg-current h-full transition-all z-0 origin-left block w-10"
        >
          <svg class="arrow w-24 h-24 fill-current" viewBox="0 0 24 24">
            <path d="M8 5l8 7-8 7z" />
          </svg>
        </span>
      </span>
    </a>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue'
  import gsap from 'gsap'
  
  const props = defineProps({
    text: String,
    url: String
  })
  
  const buttonEl = ref(null)
  const labelEl = ref(null)
  const blobEl = ref(null)
  const blobInnerEl = ref(null)
  
  let tl
  
  onMounted(async() => {
    await nextTick()
    tl = gsap.timeline({ paused: true })
  
    tl.set(blobEl.value, { opacity: 0, width: 0 })
    tl.set(blobInnerEl.value, { x: '-2.5rem' })
  
    tl.to(blobEl.value, { opacity: 1, duration: 0.2 }, 0)
    tl.to(labelEl.value, { paddingRight: '2rem', duration: 0.2 }, 0)
    tl.fromTo(blobInnerEl.value, { x: '-2.5rem' }, { x: 0, duration: 0.2, ease: 'power2.out' }, 0.1)
    tl.fromTo(blobEl.value, { width: 0 }, { width: '2.5rem', duration: 0.2, ease: 'power2.out' }, 0.1)
    tl.to(labelEl.value, {
      borderTopRightRadius: '0.5rem',
      borderBottomRightRadius: '0.5rem',
      width: '80%',
      duration: 0.2,
      ease: 'power2.out'
    }, 0.25)
    tl.to(blobInnerEl.value, { backgroundColor: 'transparent', duration: 0.2, ease: 'power3.out' }, 0.5)
  })
  
  const play = () => tl?.play()
  const reverse = () => tl?.reverse()
  </script>
  