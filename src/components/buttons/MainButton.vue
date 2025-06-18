<template>
  <a target="_blank" :href="href" @click.prevent="handleClick"
    class="cursor-pointer relative flex flex-wrap items-center group/cta overflow-clip w-65 text-center subtle-slide-in rounded-full transition-all"
    :style="{ '--theme-main-animation-delay': delay }" ref="buttonEl" @mouseenter="handleHoverIn"
    @mouseleave="handleHoverOut">
    <span
      class="inline-block font-semibold px-4 py-2 border-current border-2 rounded-full transition-all relative z-10 bg-inherit w-full text-nowrap"
      ref="labelEl">
      {{ label }}
    </span>
    <span class="absolute right-0 w-10 top-0 h-full opacity-0 transition-all z-0 origin-right block" ref="blobEl">
      <span
        class="flex items-center justify-center rounded-r-full h-full z-0 origin-right w-10 transition-colors bg-current"
        ref="blobInnerEl">
        <svg class="arrow w-14 h-14 absolute fill-current transition-all text-current" viewBox="0 0 24 24"
          ref="triangleEl">
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
  hover: String,
})

const buttonEl = ref(null)
const labelEl = ref(null)
const blobEl = ref(null)
const blobInnerEl = ref(null)
const triangleEl = ref(null)
let tl = null

const handleClick = () => {
  handleHoverIn();
  setTimeout(() => {
    if (props.onClick) {
      props.onClick?.()
    } else {
      window.open(props.href, props.target);
    }
    handleHoverOut()
  }, 300)
}


const handleHoverIn = () => {
  if (!tl) {
    tl = gsap.timeline({ paused: true })
    tl.set(blobEl.value, { opacity: 0 })
    tl.set(blobInnerEl.value, { x: '2.5rem' })
    //tl.set(triangle.value, { width: 0 })
    tl.to(blobEl.value, { opacity: 1, duration: 0.2 }, 0)
    tl.to(labelEl.value, { paddingRight: '2rem', duration: 0.2 }, 0)
    //    tl.fromTo(blobInnerEl.value, { x: '2.5rem' }, { x: 0, duration: 0.2, ease: 'power2.out' }, '+=0.2')


    // tl.fromTo(blobEl.value, { width: 0 }, { width: '2.5rem', duration: 0.2, ease: 'power2.out' }, 0.1)

    tl.to(labelEl.value, {
      borderTopRightRadius: '0.5rem',
      borderBottomRightRadius: '0.5rem',
      width: 'calc(100% - 54px)',
      duration: 0.3,
      ease: 'back.inOut(0.7)',
    }, '-=0.2')

    tl.fromTo(blobInnerEl.value, { x: '2.5rem' }, { x: 0, duration: 0.3, ease: 'elastic.out(0.3)' }, '-=0.2')
    /* tl.to(triangle.value, {
       width:'80px',
       duration: 0.4,
       ease: 'power3.out',
     }, "-=0.3")*/
    tl.to(blobInnerEl.value, {
      backgroundColor: 'transparent',
      borderColor: 'currenColor',
      duration: 0.4,
      ease: 'power3.out',
    }, "-=0.1")
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