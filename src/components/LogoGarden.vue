<template>
        <div class="logo-garden max-w-full px-0 mx-auto mb-32">
            <div class="flex **:max-w-1/2 xl:**:max-w-1/4 opacity-80 flex-wrap justify-center items-center">
                <img class="dark:invert transition-all mb-8" v-for="(logo, i) in shuffledLogos" :key="i" :src="logo.src" :alt="logo.alt" />
            </div>
        </div>
</template>
<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted, nextTick } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const logos = [
    { src: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto/v1745381975/supply_1_pua38q.svg', alt: 'supply logo' },
    { src: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745381975/response_gfiqhv.svg', alt: 'response logo' },
    { src: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745381975/gators_tpplzp.svg', alt: 'gators logo' },
    { src: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745381975/united_malt_mbqdet.svg', alt: 'united_malt logo' },
    { src: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745381975/ebad_gtytsv.svg', alt: 'ebad logo' },
    { src: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745381975/jetfuel-studios_aj1pzy.svg', alt: 'jetfuel logo' },
    { src: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745381975/hkholdings_lomarb.svg', alt: 'Horizon Kinetics logo' },
    { src: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745381975/drmartens_drifpo.webp', alt: 'Dr Martens logo' },
    { src: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745380127/DAT_zjylr9.svg', alt: 'DAT logo' },
    { src: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745381975/autodesk_lzqzr0.svg', alt: 'Autodesk logo' },
    { src: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745381975/consensusmining_wctjst.svg', alt: 'consensusmining logo' },
];

const shuffledLogos = ref([])

onMounted(async () => {
  shuffledLogos.value = [...logos].sort(() => Math.random() - 0.5)

  // Wait for DOM to update
  await nextTick()

  const logoEls = document.querySelectorAll('.logo-garden img')

  gsap.fromTo(
    logoEls,
    { autoAlpha: 0, y: 40 },
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