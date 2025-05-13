<template>
    <div ref="section"
        class="overview flex-wrap max-w-full lg:max-w-[1290px] xl:max-w-[1840px] px-8 lg:px-12 mx-auto intro flex md:flex-row relative md:pb-20 justify-center pt-10 relative lg:pb-60">

        <div class="swing-in-left-fwd-slow h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition mb-12 lg:mb-24 xl:mb-32 w-full lg:max-w-[842px] xl:max-w-[1260px] mx-auto lg:px-44"
            :class="sectionVis ? 'animate ' : 'opacity-0'" style="--theme-main-animation-delay:0s">
        </div>
        <img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/w_300,e_pixelate,f_auto/v1746750909/Title_2_jwbc2m.png"
            data-src="https://res.cloudinary.com/dp1qyhhlo/image/upload/w_auto,f_auto/v1746750909/Title_2_jwbc2m.png"
            alt="A screenshot of the Green leadership Trust Website" class="w-full mx-auto" />
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const sectionVis = ref(false)

onMounted(() => {
    const sectionEl = section.value
    const img = sectionEl.querySelector('img[data-src]')
    const tl = gsap.timeline({ paused: true })
    tl.call(() => {
        return tl.reversed() ? sectionVis.value = false : sectionVis.value = true;
    },null, 0)
    tl.fromTo(img, {
        blur: 40,
        y: 40,
        autoAlpha: 0
    }, {
        blur: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'power2.inOut',
        duration: 0.3
    }, 0.3)
    ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top 50%',
        end: 'bottom 40%',
        onEnter: () => {
            tl.play()
            document.body.classList.add('dark')
            if (img && img.dataset.src) {
                img.src = img.dataset.src
                img.removeAttribute('data-src')
            }
        },
        onEnterBack: () => {
            tl.play()
        },
        onLeaveBack: () => {
            tl.reverse()
            document.body.classList.remove('dark')
            //sectionVis.value = false
        },
        onLeave: () => {
           // tl.reverse()
           // sectionVis.value = false
        }
    })
    nextTick(() => {
        ScrollTrigger.create({
            trigger: sectionEl,
            start: 'top top',
            onEnter: () => {
                document.body.classList.add('dark')
            },
            onLeaveBack: () => {
                document.body.classList.remove('dark')
            }
        })
    })
})

</script>