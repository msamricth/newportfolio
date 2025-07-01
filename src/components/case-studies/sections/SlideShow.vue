<template>
    <section ref="elm"
        class="flex flex-col md:flex-row items-center lg:pr-24 justify-center py-14 md:py-0 lg:mt-40  md:min-h-[350vh] lg:min-h-[300vh] xl:min-h-[350vh] md:items-start relative w-full lg:py-20 lg:mb-40 motionless:md:min-h-screen motionless:lg:min-h-screen motionless:xl:min-h-screen motionless:mt-0 motionless:pt-0">

        <div ref="imgContainer"
            class="left-0 flex flex-col order-2 w-full max-w-xl gap-12 overflow-hidden md:absolute md:w-1/2 md:h-dvh tl md:order-1 lg:justify-center lg:max-w-1/2 lg:h-screen motionless:lg:h-auto motionless:md:relative motionless:gap-0 motionless:lg:gap-6">
            <img v-for="(img, i) in Images" :key="i" :src="img" :class="'results-image-' + i"
                class="md:absolute top-0 left-0 w-full object-contain md:object-cover opacity-0 motionless:opacity-100 blur-xl h-full md:rounded-r-[3rem] tl md:h-[120vh] motionless:relative motionless:blur-none" />
        </div>

        <div
            class="order-1 w-full px-8 mb-12 md:w-9/20 lg:max-w-2xl text-container lg:px-12 pt-18 md:order-2 lg:min-h-dvh lg:flex lg:flex-col lg:justify-center lg:mx-auto motionless:md:sticky motionless:md:top-10 motionless:md:mb-20 motionless:justify-center">
            <h4 class="mb-3 text-2xl font-black h3 placeholder-line" data-splitting="words">{{ heading }}
            </h4>
            <p class="mb-6 text-sm smd:text-lg placeholder-line" data-splitting="words" v-if="paragraph">{{
                paragraph }}</p>

            <ul class="pl-6 mb-6 space-y-1 list-disc lg:space-y-3">
                <li v-for="(item, i) in items" :key="i" class="text-sm smd:text-lg font-medium opacity-0 motionless:opacity-100 **:inline-flex **:flex-wrap" data-item
                    data-splitting="words">
                    {{ item }}</li>
            </ul>


            <h5 v-if="tags && tags.length" class="my-6 text-xl placeholder-line" data-splitting="words">
                {{ tagIntro }}
            </h5>

            <ul v-if="tags && tags.length" class="flex flex-wrap items-start gap-1 mb-6">
                <li v-for="(tag, i) in tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0 motionless:opacity-100">
                    {{ tag }}
                </li>
            </ul>
                <PrimaryBTN class="text-electric-purple dark:text-accent btn lg:mb-35 motionless:mx-auto"
                        label="GLT's Website" href="https://greenleadershiptrust.org/" v-if="buttonLabel && buttonHref" :href="buttonHref" />
        </div>
    </section>

</template>

<script setup>
import { ref, nextTick, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useMainStore } from '@/stores/main'
import PrimaryBTN from '@/components/buttons/PrimaryBTN.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import textAnim from '@/utils/textAnims'
import { imgAnim } from '@/composables/imgAnims'
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  heading: String,
  paragraph: String,
  items: Array,
  tags: Array,
  Images: Array,
  buttonLabel: String,
  buttonHref: String
})

const elm = ref(null)
const imgContainer = ref(null)
const store = useMainStore()
const { width } = useWindowSize()

let scrollTL = null
let anim = null

function cleanup() {
  scrollTL?.kill()
  scrollTL = null
  anim?.kill()
  anim = null
  if (elm.value) gsap.set(elm.value, { clearProps: 'all' })
  const text = elm.value?.querySelector('.text-container')
  const imgs = imgContainer.value?.querySelectorAll('img') || []
  if (text) text.removeAttribute('style')
  imgs.forEach(img => img.removeAttribute('style'))
}

async function initSection() {
  await nextTick()
  if (!elm.value || store.reduceMotion) return

  const isMobile = width.value < 768
  const el = elm.value
  const text = el.querySelector('.text-container')
  const img1 = el.querySelector('.results-image-0')
  const img2 = el.querySelector('.results-image-1')
  const imgs = imgContainer.value.querySelectorAll('img')

  if (isMobile) {
    anim = new textAnim(el, { toggleActions: 'play none none reverse' })
    imgAnim(el, false, 'play none none reverse')
    anim?.init()
    return
  }

  anim = new textAnim(el, { toggleActions: 'play none none reverse' })
  anim?.init()

  scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: 'top top',
      end: '+=300%',
      pinSpacing: false,
      scrub: true,
      pin: true,
    }
  })

  scrollTL.to(text, {
    x: '58%',
    ease: 'power2.inOut',
    duration: 1,
  })

  scrollTL.fromTo(img1, { y: 1000, autoAlpha: 0 }, { y: -50, autoAlpha: 1, duration: 0.6 }, '+=0.9')
  scrollTL.fromTo(img1, { filter: 'blur(20px)' }, { filter: 'blur(0px)', duration: 0.3 }, '+=0.2')
  scrollTL.to(img1, { y: -1000, autoAlpha: 0, filter: 'blur(20px)', duration: 1 }, '+=2')

  scrollTL.addLabel('img2Enter', '+=0')

  scrollTL.fromTo(img2,
    { y: 1000, autoAlpha: 0, filter: 'blur(20px)' },
    { y: -50, autoAlpha: 1, duration: 0.3, ease: 'power1.out' },
    'img2Enter'
  )
  scrollTL.to(img2, {
    filter: 'blur(0px)',
    duration: 0.3,
    ease: 'none'
  }, 'img2Enter+=0.3')

  scrollTL.to(img2, {
    y: -1000,
    autoAlpha: 0,
    filter: 'blur(20px)',
    duration: 0.7
  }, 'img2Enter+=2.3')

  scrollTL.to(el, {
    y: -200,
    autoAlpha: 0,
    filter: 'blur(40px)',
    duration: 1
  }, 'img2Enter+=2.5')

  scrollTL.to(text, {
    filter: 'blur(40px)',
    ease: 'power2.inOut',
    duration: 1
  }, 'img2Enter+=2.3')
}


watch(()=>store.ready, async(ready)=>{
    if(!ready) return
    await nextTick()
    if (!store.reduceMotion) await initSection()
},{immediate:true})
watch(() => store.reduceMotion, async (rm) => {
  await nextTick()
  cleanup()
  if (!rm) await initSection()
})
</script>