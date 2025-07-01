<template>




    <div ref="modalContent" class="relative z-10 flex flex-col items-center justify-center rounded-xl"
        :class="modalItem.textColor">
        <div class="flex flex-col items-start justify-center gap-8 md:flex-row md:items-stretch md:mb-4">
            <img :src="modalItem.image"
                class="max-md:-mx-12 max-md:-mt-12 max-md:pb-6 max-md:min-w-dvw object-cover md:rounded-l-[3rem] md:rounded-r-none md:w-[73.5%] transition-all duration-900 md:min-h-full motionless:duration-5" />
            <div class="rounded-r-[3rem] w-[26.5%] transition-all duration-900 hidden md:block overflow-clip motionless:duration-50">
                <video ref="modalVideo" class="aspect-mobile" :data-src="modalItem.video" playsinline muted
                    loop></video>
            </div>
        </div>


        <div class="flex flex-col justify-end w-full py-6 transition-all duration-700 md:p-6 motionless:duration-50"
            @mouseover="isHovered = true" @mouseleave="isHovered = false">
            <h3 :class="modalItem.textColor" class="mb-2 text-2xl font-bold placeholder-line" data-splitting="words">{{
                modalItem.title
            }}
            </h3>
            <div class="flex flex-col justify-between mb-4 md:flex-row md:items-stretch">
                <div class="flex flex-col justify-between gap-6 pr-8 md:justify-start lg:pr-18">
                    <p :class="modalItem.textColor" class="text-base placeholder-line" data-splitting="words"
                        v-html="modalItem.text"></p>

                    <div class="mt-4 specialties-animate lg:w-90 xl:w-100" v-if="modalItem.specialties">
                        <h4 class="mt-8 mb-2">Specialties</h4>
                        <ul class="flex flex-wrap items-start gap-2">
                            <li v-for="(specialty, index) in modalItem.specialties" :key="index"
                                class="inline px-2 py-1 text-xs bg-current subtle-slide-in text-nowrap rounded-xl"
                                :style="'--theme-main-animation-delay:' + ((index * 0.3) + 0.8) + 's'">
                                <span class="text-primary">{{ specialty }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col flex-wrap gap-2 mt-6 lg:gap-4 group/ctas max-w-75 md:mt-0">
                    <div v-for="(button, btnIndex) in modalItem.buttons" :key="btnIndex"
                        class="flex items-center order-2 h-18 md:order-1" :class="{'justify-end' : modalItem.buttons.length > 1}">
                        <a v-if="button.github" :class="modalItem.textColor"
                            class="mr-4 overflow-visible transition rounded-full cursor-pointer group-hover/ctas:opacity-40 group-hover/ctas:hover:opacity-100 hover:bg-current hover:rotate-270 group/git subtle-slide-in"
                            style="--theme-main-animation-delay:0.6s" target="_blank" :href="modalItem.github">
                            <svg class="overflow-visible transition dark:group-hover/git:text-primary group-hover/git:rotate-90"
                                enable-background="new 0 0 32 32" height="44px" id="Layer_1" version="1.0"
                                viewBox="0 0 32 32" width="44px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path clip-rule="evenodd"
                                    d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
                                    class="transition fill-current group-hover/git:stroke-current group-hover/git:fill-background"
                                    fill-rule="evenodd" />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                            </svg>
                        </a>
                        <PrimaryBTN :href="button.url"
                            class="relative flex flex-wrap items-center overflow-hidden text-center transition cursor-pointer group-hover/ctas:opacity-40 group-hover/ctas:hover:opacity-100 group/cta w-60 subtle-slide-in"
                            style="--theme-main-animation-delay:0.7s" :label="button.text"  />
                    </div>
                    <div class="order-1 pl-2 my-4 max-w-75 md:mb-0 subtle-slide-in md:order-2"
                        style="--theme-main-animation-delay:0.8s" v-if="modalItem.tech">
                        <h4 class="mb-1">Tech Stack</h4>
                        <ul class="flex flex-wrap items-start gap-2 ml-3 list-disc">
                            <li v-for="(t, i) in modalItem.tech" :key="i"
                                class="pl-0 pr-3 text-sm ps-0 placeholder-line" data-splitting="words">
                                <span class="-ml-1">{{ t }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import gsap from 'gsap'
import PlaceholderJS from '@/utils/placeholder'
import videoHandler from '@/utils/videoHandler'
import { useMainStore } from '@/stores/main'
import PrimaryBTN from '@/components/buttons/PrimaryBTN.vue'
const props = defineProps({
    modalItem: { type: Object, required: true }
})

const mainStore = useMainStore()

const modalContent = ref(null)
const modalVideo = ref(null)

let timeline
let placeholderAnims = []

async function runAnimations() {
    if (!modalContent.value || mainStore.reduceMotion) return

    await nextTick()

    const placeholderItems = modalContent.value.querySelectorAll('.placeholder-line')
    const image = modalContent.value.querySelector('img')
    const videoWrapper = modalContent.value.querySelector('video')
    const copyWrap = modalContent.value.querySelector('.flex.flex-col.justify-end') // main copy container
    const title = modalContent.value.querySelector('h3')
    const paragraph = modalContent.value.querySelector('p')
    const specialties = modalContent.value.querySelector('.specialties-animate')
    const buttonWrap = modalContent.value.querySelector('.group\\/ctas')
    const techStack = modalContent.value.querySelector('.order-1.pl-2')

    timeline = gsap.timeline()

    timeline.fromTo(
        modalContent.value,
        { autoAlpha: 0, filter: 'blur(40px)' },
        { autoAlpha: 1, filter: 'none', duration: 0.4, ease: 'power1.out' }, "+=0.6"
    )

    if (image) {
        timeline.fromTo(image, {
            scale: 1.05,
            autoAlpha: 0,
            filter: 'blur(20px)'
        }, {
            scale: 1,
            autoAlpha: 1,
            filter: 'none',
            duration: 0.5,
            ease: 'power2.out'
        }, "-=0.3")
    }

    if (videoWrapper) {
        timeline.fromTo(videoWrapper, {
            scale: 0.95,
            autoAlpha: 0,
            filter: 'blur(20px)'
        }, {
            scale: 1,
            autoAlpha: 1,
            filter: 'none',
            duration: 0.5,
            ease: 'power2.out'
        }, "-=0.4")
    }

    if (copyWrap) {
        timeline.fromTo(copyWrap, {
            y: 40,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            duration: 0.4,
            ease: 'power2.out'
        }, "-=0.3")
    }

    if (title) {
        timeline.fromTo(title, {
            y: 20,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: 'power2.out'
        }, "-=0.2")
    }

    if (paragraph) {
        timeline.fromTo(paragraph, {
            y: 20,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: 'power2.out'
        }, "-=0.2")
    }
    if (specialties) {
        timeline.fromTo(specialties, {
            y: 20,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: 'power2.out'
        }, "-=0.2")
    }
    if (buttonWrap) {
        timeline.fromTo(buttonWrap, {
            y: 20,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: 'power2.out'
        }, "-=0.2")
    }

    placeholderAnims = Array.from(placeholderItems).map(el => {
        const anim = new PlaceholderJS(el, { manual: true })
        gsap.set(el, { autoAlpha: 0, y: 10 })
        return anim
    })

    timeline.to(placeholderItems, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.05,
        onStart: () => {
            placeholderAnims.forEach(a => a.play())
        }
    })
}
function cleanup() {
  timeline?.kill()
  timeline = null

  placeholderAnims.forEach(a => {
    a.getTimeline()?.kill()
  })
  placeholderAnims = []

  if (modalContent.value) {
    gsap.set(modalContent.value, { clearProps: 'all' })
  }
}

watch(
  [() => props.modalItem, () => modalContent.value],
  async ([item, content]) => {
    if (!content) return
    
    const video = modalVideo.value
    if (video) {
        const player = new videoHandler(video)
        player.play()
    }
    if (item && !mainStore.reduceMotion) {
      await runAnimations()
    } else {
      cleanup()
    }
  },
  { immediate: true }
)

watch(() => mainStore.reduceMotion, async (reduced) => {
    if (reduced) {
        timeline?.kill()
        timeline = null
        placeholderAnims.forEach(a => a.getTimeline()?.kill())
        placeholderAnims = []
        if (modalContent.value) {
            gsap.set(modalContent.value, { clearProps: 'all' })
        }
    } else if (props.modalItem) {
        await runAnimations()
    }
})
</script>
