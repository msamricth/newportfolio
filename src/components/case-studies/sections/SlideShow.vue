<template>
    <section ref="elm"
        class="flex flex-col md:flex-row items-center lg:pr-24 justify-center py-14 md:py-0 lg:mt-40 lg:min-h-[300vh] lg:items-start relative w-full lg:mb-0 lg:py-0">

        <div ref="imgContainer"
            class="md:absolute w-full max-w-xl overflow-hidden md:w-1/2 md:h-dvh left-0 tl flex flex-col gap-12 order-2 md:order-1 lg:justify-center lg:max-w-1/2 lg:h-screen">
            <img v-for="(img, i) in Images" :key="i" :src="img" :class="'results-image-' + i"
                class="md:absolute top-0 left-0 w-full object-contain md:object-cover opacity-0 blur-xl h-full md:rounded-r-[3rem] tl md:h-[120vh]" />
        </div>

        <div
            class="w-full md:w-1/2 lg:max-w-2xl mb-12 text-container px-8 lg:px-12 pt-18 order-1 md:order-2 lg:min-h-dvh lg:flex lg:flex-col lg:justify-center lg:mx-auto">
            <h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">{{ heading }}
            </h4>
            <p class="text-xl mb-6 placeholder-line" data-splitting="words" v-if="paragraph">{{
                paragraph }}</p>

            <ul class="list-disc pl-6 space-y-1 lg:space-y-3">
                <li v-for="(item, i) in items" :key="i" class="text-sm lg:text-lg font-medium opacity-0" data-item data-splitting="words">
                    {{ item }}</li>
            </ul>


            <h5 v-if="tags && tags.length" class="text-xl my-6 placeholder-line" data-splitting="words">
                {{ tagIntro }}
            </h5>

            <ul v-if="tags && tags.length" class="flex gap-1 items-start flex-wrap">
                <li v-for="(tag, i) in tags" :key="i"
                    class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">
                    {{ tag }}
                </li>
            </ul>
            <MainButton :onClick="() => ctaClick(buttonHref)" v-if="buttonLabel && buttonHref" :href="buttonHref"
                :label="buttonLabel"
                class="max-md:text-md min-w-[270px] md:min-w-[306px] text-electric-purple dark:text-accent mt-6 lg:mt-24 btn" />
        </div>
    </section>

</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useMatchMedia } from '@/composables/useMatchMedia'
import MainButton from '@/components/buttons/MainButton.vue'
import gsap from 'gsap'
import { textAnim } from '@/composables/textAnims'
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
function Mobile({ isMobile }) {
    nextTick(() => {
        imgAnim(elm.value, false, 'play none none reverse');
        textAnim(elm.value, false, 'play none none reverse');

    })
}
function setupSection5({ isDesktop, isTablet }) {
    nextTick(() => {
        let left = '58%'
        //if (isDesktop) left = '58%'
        const el = elm.value
        const text = el.querySelector('.text-container')
        const img1 = el.querySelector('.results-image-0')
        const img2 = el.querySelector('.results-image-1')
        const imgs = imgContainer.value.querySelectorAll('img')
        textAnim(el, false, 'play none play reverse');

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








if (!el) return;
        const h = el.querySelector('h4.placeholder-line')
        const h5 = el.querySelector('h5.placeholder-line')
        const p = el.querySelector('p.placeholder-line')
        const btn = el.querySelector('.btn')
        const items = el.querySelectorAll('.list-disc li')
        const tagEls = el.querySelectorAll('.tags')
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                id: 'sectionST',
                start: 'top 50%',
                end: 'bottom 90%',
                toggleActions: toggleActions,
            }
        })
        tl.fromTo(h,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 0.3
            }, 0.1
        );

        tl.add(() => {
            const phH = new PlaceholderJS(h, { manual: true });
            phH.play()
        }, 0)
        if (p) {
            tl.fromTo(p,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                    onStart: () => {
                        //   phP.play()
                    }
                }, 0.3
            )
            tl.add(() => {
                const phP = new PlaceholderJS(p, { manual: true, speed: 2 });
                phP.play()
            }, 0.28)
        }
        if (h5) {
            tl.fromTo(h5,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                }, 0.4
            )
            tl.add(() => {
                const phP = new PlaceholderJS(h5, { manual: true, speed: 2 });
                phP.play()
            }, 0.38)
        }

        items.forEach((item, i) => {
            tl.fromTo(item,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    duration: 0.3,
                },
                0.3 + (i * 0.15)
            );
        })







useMatchMedia(setupSection5)
</script>