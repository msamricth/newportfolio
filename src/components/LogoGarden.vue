<template>
  <div class="logo-garden max-w-full px-0 mx-auto mb-6 md:mb-32">
    <div class="flex **:max-w-1/2 xl:**:max-w-1/4 opacity-80 flex-wrap justify-center items-center">
      <img class="dark:invert inverted:invert transition-all mb-8 delay-700 w-70 md:w-100 md:delay-0 h-auto"
        v-for="(logo, i) in shuffledLogos" :key="i"
        :src="logo.src.replace('q_auto,f_auto', 'w_100,e_pixelate,f_auto,e_grayscale')" :data-src="logo.src"
        :alt="logo.alt" width="400" height="133" />
    </div>
  </div>
</template>
<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted, nextTick } from 'vue'
import { useMainStore } from '../stores/main.js'
import { logos } from '../data/logos.js'
gsap.registerPlugin(ScrollTrigger)


const shuffledLogos = ref([])

onMounted(async () => {
  shuffledLogos.value = [...logos].sort(() => Math.random() - 0.5)
  await nextTick()

  const logoEls = document.querySelectorAll('.logo-garden img')
  logoEls.forEach((logo) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (logo && logo.dataset.src) {
          logo.src = logo.dataset.src
          logo.removeAttribute('data-src')
        }
        observer.disconnect()
      }
    }, { rootMargin: '200px' })

    observer.observe(logo)
  })

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
        toggleActions: 'play reverse play reverse',
      },
    }
  )
})

</script>