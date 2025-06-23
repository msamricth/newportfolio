<template>
    <section ref="elm"
        class="flex flex-col md:flex-row items-center lg:pr-24 justify-center py-14 md:py-0 lg:mt-40  md:min-h-[350vh] lg:min-h-[300vh] xl:min-h-[350vh] md:items-start relative w-full lg:py-20 lg:mb-40">

        <div ref="imgContainer"
            class="left-0 flex flex-col order-2 w-full max-w-xl gap-12 overflow-hidden md:absolute md:w-1/2 md:h-dvh tl md:order-1 lg:justify-center lg:max-w-1/2 lg:h-screen">
            <img v-for="(img, i) in Images" :key="i" :src="img" :class="'results-image-' + i"
                class="md:absolute top-0 left-0 w-full object-contain md:object-cover opacity-0 blur-xl h-full md:rounded-r-[3rem] tl md:h-[120vh]" />
        </div>

        <div
            class="order-1 w-full px-8 mb-12 md:w-9/20 lg:max-w-2xl text-container lg:px-12 pt-18 md:order-2 lg:min-h-dvh lg:flex lg:flex-col lg:justify-center lg:mx-auto">
            <h4 class="mb-3 text-2xl font-black placeholder-line" data-splitting="words">{{ heading }}
            </h4>
            <p class="mb-6 text-xl placeholder-line" data-splitting="words" v-if="paragraph">{{
                paragraph }}</p>

            <ul class="pl-6 mb-6 space-y-1 list-disc lg:space-y-3">
                <li v-for="(item, i) in items" :key="i" class="text-sm lg:text-lg font-medium opacity-0 **:inline-flex **:flex-wrap" data-item
                    data-splitting="words">
                    {{ item }}</li>
            </ul>


            <h5 v-if="tags && tags.length" class="my-6 text-xl placeholder-line" data-splitting="words">
                {{ tagIntro }}
            </h5>

            <ul v-if="tags && tags.length" class="flex flex-wrap items-start gap-1">
                <li v-for="(tag, i) in tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">
                    {{ tag }}
                </li>
            </ul>
                <PrimaryBTN class="text-electric-purple dark:text-accent btn lg:mb-35"
                        label="GLT's Website" href="https://greenleadershiptrust.org/" v-if="buttonLabel && buttonHref" :href="buttonHref" />
        </div>
    </section>

</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useMatchMedia } from '@/composables/useMatchMedia'
import PrimaryBTN from '@/components/buttons/PrimaryBTN.vue'
import gsap from 'gsap'
import textAnim from '@/utils/textAnims'
import { imgAnim } from '@/composables/imgAnims'
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

function setupSection5({ isDesktop, isTablet, isMobile }) {
    nextTick(() => {
        if(isMobile){
            const animM = new textAnim(elm.value, { toggleActions: 'play none none reverse' })
            imgAnim(elm.value, false, 'play none none reverse');
            animM?.init()
            return;
        }
        const anim = new textAnim(elm.value, { toggleActions: 'play none none reverse' })
        let left = '58%'
        //if (isDesktop) left = '58%'
        const el = elm.value
        const text = el.querySelector('.text-container')
        const img1 = el.querySelector('.results-image-0')
        const img2 = el.querySelector('.results-image-1')
        const imgs = imgContainer.value.querySelectorAll('img')
        anim?.init()

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top top',
                end: '+=300%',
                pinSpacing: false,
                scrub: true,
                pin: true,
            }
        })
        tl.to(text, {
            x: left,
            ease: 'power2.inOut',
            duration: 1,
        })

        tl.fromTo(img1, { y: 1000, autoAlpha: 0 }, { y: -50, autoAlpha: 1, duration: 0.6 }, '=+0.9')
        tl.fromTo(img1, { filter: 'blur(20px)' }, { filter: 'blur(0px)', duration: 0.3 }, '=+0.2')
        tl.to(img1, { y: -1000, autoAlpha: 0, filter: 'blur(20px)', duration: 1 }, '=+2')

        tl.addLabel('img2Enter', '+=0')


        tl.fromTo(img2,
            { y: 1000, autoAlpha: 0, filter: 'blur(20px)' },
            { y: -50, autoAlpha: 1, duration: 0.3, ease: 'power1.out' },
            'img2Enter'
        )
        tl.to(img2,
            { filter: 'blur(0px)', duration: 0.3, ease: 'none' },
            'img2Enter+=0.3'
        )
        tl.to(img2,
            { y: -1000, autoAlpha: 0, filter: 'blur(20px)', duration: 0.7 },
            'img2Enter+=2.3'
        )

        tl.to(el,
            { y: -200, autoAlpha: 0, filter: 'blur(40px)', duration: 1 },
            'img2Enter+=2.5'
        )
        tl.to(text, {
            filter: 'blur(40px)',
            ease: 'power2.inOut',
            duration: 1,
        },
            'img2Enter+=2.3')
    })
}



useMatchMedia(setupSection5)
</script>