<template>
    <section ref="imageSection"
        class="max-w-full lg:max-w-[1290px] xl:max-w-[1680px] mx-auto lg:px-12 py-12 lg:py-0 relative motionless:lg:mb-60">
        <img class="md:max-h-[95dvh] mx-auto md:rounded-[3rem] lg:rounded-[6rem]" :src="store.loaded ? image : image.replace('upload', 'upload/e_pixelate,q_auto:low,f_auto,e_grayscale')"
            :data-src="image" />
    </section>
</template>


<script setup>
import { ref, nextTick, watch, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useCSStore } from '@/stores/caseStudy'

const csStore = useCSStore()
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  image: String
})

const imageSection = ref(null)
const store = useMainStore()

let scrollTL = null

function cleanup() {
  scrollTL?.kill()
  scrollTL = null

  const img = imageSection.value?.querySelector('img')
  if (img) {
    gsap.set(img, { clearProps: 'all' })
  }
}

async function initSection() {
  await nextTick()
  if (!imageSection.value || store.reduceMotion) return

  const img = imageSection.value.querySelector('img')

  scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: imageSection.value,
      start: 'top 70%',
      end: 'bottom top',
      pinSpacing: false,
      toggleActions: 'play none none reverse',
    }
  })


  scrollTL.fromTo(img, {
    y: '100%',
    autoAlpha: 0,
    filter: 'blur(40px)'
  }, {
    y: 0,
    autoAlpha: 1,
    filter: 'blur(0px)',
    duration: 0.6,
    ease: 'power3.inOut'
  })
}

onMounted(async () => {
    await nextTick()
    csStore.sectionReady = 3
  if (!store.reduceMotion) initSection()
})

watch(() => store.reduceMotion, async (rm) => {
  await nextTick()
  cleanup()
  if (!rm) await initSection()
})
</script>
