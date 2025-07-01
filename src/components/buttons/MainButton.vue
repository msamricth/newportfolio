<template>
  <a target="_blank" :href="href" @click.prevent="handleClick"
    class="relative flex flex-wrap items-center text-center transition-all duration-700 rounded-full cursor-pointer group/cta overflow-clip w-65 subtle-slide-in"
    :style="{ '--theme-main-animation-delay': delay }" ref="buttonEl" @mouseenter="handleHoverIn"
    @mouseleave="handleHoverOut">
    <span
      class="relative z-10 inline-block w-full px-4 py-2 font-semibold transition-all border-2 border-current rounded-full bg-inherit text-nowrap"
      ref="labelEl">
      {{ label }}
    </span>
    <span class="absolute top-0 right-0 z-0 block w-10 h-full transition-all origin-right opacity-0" ref="blobEl">
      <svg viewBox="0 0 40 54" class="w-full h-full" preserveAspectRatio="none">
        <path ref="blobInnerEl" fill="currentColor"
          d="M0 0H13C27.9117 0 40 12.0883 40 27C40 41.9117 27.9117 54 13 54H0V0Z" />
      </svg>
      <!--<span class="z-0 flex items-center justify-center w-10 h-full origin-right bg-current rounded-r-full"
        ref="blobInnerEl">
        <svg class="absolute text-current transition-all fill-current arrow w-14 h-14" viewBox="0 0 24 24"
          ref="triangleEl">
          <path d="M8 5l8 7-8 7z" />
        </svg>

      </span>-->
    </span>
  </a>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

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
onMounted(async () => {
  await nextTick();
  gsap.registerPlugin(MorphSVGPlugin)
})
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
    const triangle = triangleEl.value
    tl = gsap.timeline({ paused: true })
    tl.set(blobEl.value, { opacity: 0 })
    tl.set(blobInnerEl.value, { x: '2.5rem' })
    tl.set(blobInnerEl.value, {
      morphSVG: {
        shape: "M0 0H13C27.9117 0 40 12.0883 40 27C40 41.9117 27.9117 54 13 54H0V0Z"
      }
    });

    // tl.set(blobInnerEl.value, { x: '2.5rem', backgroundColor:'inherit', borderColor: 'inherit' })
    // tl.set(triangle, { width: 0 })
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
    /*    tl.to(triangle, {
          width:'80px',
          duration: 0.4,
          ease: 'power3.out',
        }, "-=0.3")*/


    tl.fromTo(blobInnerEl.value, {
      morphSVG: {
        shape: "M0 0H13C27.9117 0 40 12.0883 40 27C40 41.9117 27.9117 54 13 54H0V0Z"
      },
      scale:1
    }, {
      morphSVG: {
        shape: "M36.6289 19.5121C41.1211 23.1084 41.1211 29.8918 36.6289 33.4882L-0.00195312 54.0001V0L36.6289 19.5121Z"
      },
      transformOrigin: 'left center',
      duration: 0.4,
      ease: 'power3.out',
    }, "-=0.1")
    //  backgroundColor: 'transparent',
    // borderColor: 'currenColor', 

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