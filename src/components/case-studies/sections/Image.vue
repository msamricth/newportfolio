<template>
    <section ref="imageSection"
        class="max-w-full lg:max-w-[1290px] xl:max-w-[1680px] mx-auto lg:px-12 py-12 lg:py-0 relative">
        <img class="md:max-h-[95dvh] mx-auto md:rounded-[3rem] lg:rounded-[6rem]" :src="image.replace('upload', 'upload/e_pixelate,q_auto:low,f_auto,e_grayscale')"
            :data-src="image" />
    </section>
</template>


<script setup>
import { ref, nextTick } from 'vue'
import { useMatchMedia } from '@/composables/useMatchMedia'
import gsap from 'gsap'
const props = defineProps({
    image: String
})
const imageSection = ref(null)

function setupRougeImages({ isDesktop, isTablet, isMobile }) {
    if (!imageSection.value) return;
    nextTick(() => {
        const image = imageSection.value.querySelector('img')
        const imageAnim = gsap.timeline({
            scrollTrigger: {
                trigger: imageSection.value,
                // markers: true,
                start: 'top 70%',
                pinSpacing: false,
                end: 'bottom top',
                toggleActions: 'play none none reverse',
            }
        })
        imageAnim.add(()=>{
            if (image && image.dataset.src) {
                image.src = image.dataset.src
                image.removeAttribute('data-src')
            }
        })
        imageAnim.fromTo(image, {
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
    })

}

useMatchMedia(setupRougeImages)
</script>