<template>
  <div class="logo-garden max-w-full px-0 mx-auto mb-6 md:mb-32 lg:max-w-[1024px] xl:max-w-[1440px]">
    <div class="flex **:max-w-1/2 xl:**:max-w-1/4 opacity-80 flex-wrap justify-center items-center" ref="garden">
      <img class="h-auto mb-8 transition-all dark:invert inverted:invert w-70 md:w-100 md:delay-0"
        v-for="(logo, i) in shuffledLogos" :key="i"
        :src="store.ready ? logo.src : logo.src.replace('q_auto,f_auto', 'w_100,e_pixelate,f_auto,e_grayscale')"
        :alt="logo.alt" width="400" height="133" />
    </div>
  </div>
</template>
<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted, nextTick } from 'vue'
import { logos } from '../data/logos.js'
import { useMainStore } from '../stores/main.js'
const shuffledLogos = ref([])
const store = useMainStore()
const garden = ref(null)
onMounted(async () => {
  shuffledLogos.value = [...logos].sort(() => Math.random() - 0.5)
  await nextTick()
  if (!garden.value) return
  const logoEls = garden.value.querySelectorAll('.logo-garden img')



})
watch(
  () => store.loaded,
  async (loaded) => {
    if (!loaded) return
    if (!store.reduceMotion) {
      await logoAnims()
    }
  },
  { immediate: true }
)
watch(
  () => store.reduceMotion,
  async (reduceMotion) => {
    if (!reduceMotion) return

    if (!store.reduceMotion)  await logoAnims()
    if (store.reduceMotion) {
      if(!garden.value) return
      const logoEls = garden.value.querySelectorAll('.logo-garden img')
      gsap.fromTo(
        logoEls,
        {
          clearProps:'all'
        })
    }
  },
  { immediate: true }
)

async function logoAnims() {
  await nextTick()
  if (!garden.value) return
  const logoEls = garden.value.querySelectorAll('.logo-garden img')
  gsap.fromTo(
    logoEls,
    {
      autoAlpha: 0, y: 40,
      onStart: () => {
        if (logoEls && logoEls.dataset.src) {
          logoEls.src = img.dataset.src
          logoEls.removeAttribute('data-src')
        }
      },
    },
    {
      autoAlpha: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.logo-garden',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  )
}

</script>