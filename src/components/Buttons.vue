<template>
    <a
      target="_blank"
      :href="href"
      @click.prevent="handleClick"
      class="group-hover/ctas:opacity-40 group-hover/ctas:hover:opacity-100 cursor-pointer relative flex flex-wrap items-center transition group/cta overflow-hidden w-65 text-center subtle-slide-in"
      :style="{ '--theme-main-animation-delay': delay }"
      ref="buttonEl"
      @mouseenter="handleHoverIn"
      @mouseleave="handleHoverOut"
    >
      <span
        class="inline-block font-semibold px-4 py-2 border-current border-2 rounded-full transition-all relative z-10 bg-inherit w-full text-nowrap"
        ref="labelEl"
      >
        {{ label }}
      </span>
      <span
        class="absolute right-0 top-0 w-0 h-full opacity-0 transition-all z-0 origin-left block overflow-clip"
        ref="blobEl"
      >
        <span
          class="flex items-center justify-center rounded-r-full bg-current h-full transition-all z-0 origin-left block w-10"
          ref="blobInnerEl"
        >
          <svg class="arrow w-24 h-24 fill-current transition-all" viewBox="0 0 24 24">
            <path d="M8 5l8 7-8 7z" />
          </svg>
        </span>
      </span>
    </a>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  
  const props = defineProps({
    href: String,
    label: String,
    delay: {
      type: String,
      default: '0.7s',
    },
    onClick: Function,
  })
  
  const buttonEl = ref(null)
  const labelEl = ref(null)
  const blobEl = ref(null)
  const blobInnerEl = ref(null)
  let tl = null
  
  const handleClick = () => {
    props.onClick?.()
    console.log('test' +props.onClick)
  }
  
  const handleHoverIn = () => {
    if (!tl) {
      tl = gsap.timeline({ paused: true })
      tl.set(blobEl.value, { opacity: 0, width: 0 })
      tl.set(blobInnerEl.value, { x: '-2.5rem' })
      tl.to(blobEl.value, { opacity: 1, duration: 0.2 }, 0)
      tl.to(labelEl.value, { paddingRight: '2rem', duration: 0.2 }, 0)
      tl.to(blobInnerEl.value, { x: 0, duration: 0.2, ease: 'power2.out' }, 0.1)
      tl.to(blobEl.value, { width: '2.5rem', duration: 0.2, ease: 'power2.out' }, 0.1)
      tl.to(labelEl.value, {
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        width: '80%',
        duration: 0.2,
        ease: 'power2.out',
      }, 0.25)
      tl.to(blobInnerEl.value, {
        backgroundColor: 'transparent',
        duration: 0.2,
        ease: 'power3.out',
      }, 0.5)
    }
  
    tl.play()
  }
  
  const handleHoverOut = () => {
    tl?.reverse()
  }
  </script>
  <style scoped>
  .border-current {
    transition: color 0.7s ease-in-out;
  }
</style>