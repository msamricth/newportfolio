<template>
    <section ref="testimonialSection" class="pb-0 lg:pb-24 overflow-clip relative">
        <div
            class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto flex justify-between items-end md:items-start heading">
            <h2 class="text-2xl md:text-3xl mb-8 max-w-110 placeholder-line" data-splitting="words" ref="heading">
                Past Experiences
            </h2>

            <button ref="sliderArrow"
                class="block lg:-mr-7 px-6 py-2 rounded-full transition duriation-900 cursor-pointer w-16 lg:w-20 flex flex-col justify-center items-center group/slider h-16 lg:h-20 hover:opacity-80 dark:hover:bg-primary/20 inverted:bg-background/0 relative text-primary dark:text-background inverted:text-background inverted:dark:text-primary mb-4"
                :class="[isHovered ? 'md:opacity-80' : '']" @click="onArrowClick" @mouseenter="onArrowHoverIn"
                @mouseleave="onArrowHoverOut">
                <svg fill="none" stroke-width="1.5" viewBox="0 0 24 24"
                    class="w-24 md:w-50 text-current hover:text-accent  transition duration-700"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" class="stroke-current" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg class="absolute inset-0 w-full h-full rounded-[9rem] w-full h-full pointer-events-none opacity-0 group-hover/slider:opacity-100 animate-spin-slow z-0  text-accent transition duration-700"
                    viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="6"
                        :stroke-dasharray="strokeLength" :stroke-dashoffset="progressOffset"
                        class="transition-all duration-100 ease-linear" ref="progressCircle" />
                </svg>
            </button>
        </div>
        <Splide ref="splide" :options="splideOptions"
            class="testimonials-carousel overflow-clip  max-md:bg-primary max-md:dark:bg-background transition duration-700">
            <SplideSlide v-for="(t, index) in loop" :key="index">
                <div class="testimonial-slide-wrapper h-full" :ref="el => setSlideRef(el, index)">
                    <Testimonial :name="t.name" :title="t.title" :quote="t.body" :width="t.width"
                        :active="visibleSlides.includes(index)" />
                </div>
            </SplideSlide>
        </Splide>
    </section>
</template>
<script setup>

import { ref, watch, onMounted } from 'vue';
import Testimonial from '../../components/contexts/Testimonial.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { testimonials } from '../../data/testimonials.js'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PlaceholderJS from './../../utils/placeholder.js';
const testimonialSection = ref(null);
const heading = ref(null);
const visibleSlides = ref([]);
const slideRefs = ref([]); // indexed refs
const observerReady = ref(false)
const setSlideRef = (el, index) => {
    if (el) {
        slideRefs.value[index] = el;
    }
};

const splide = ref(null);
const sliderArrow = ref([])
const isHovered = ref([false])
const activeSlideIndex = ref(0)
const progressOffset = ref(283);
const strokeLength = 2 * Math.PI * 45;
const progressCircle = ref(null);


function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

const loop = shuffleArray(testimonials);
const onArrowHoverIn = () => {
    // Prevent stacking if already running
    gsap.killTweensOf(progressOffset);

    gsap.to(progressOffset, {
        value: 0,
        duration: 1.5,
        ease: 'none',
        onUpdate: () => {
            progressCircle.value.style.strokeDashoffset = progressOffset.value;
        },
        onComplete: () => {
            onArrowClick();
        },
    });
};

const onArrowHoverOut = () => {
    gsap.killTweensOf(progressOffset);

    gsap.to(progressOffset, {
        value: strokeLength,
        duration: 0.3,
        ease: 'power2.out',
        onUpdate: () => {
            progressCircle.value.style.strokeDashoffset = progressOffset.value;
        },
    });
};

const onArrowClick = () => {
    gsap.killTweensOf(progressOffset);
    progressOffset.value = strokeLength;
    progressCircle.value.style.strokeDashoffset = strokeLength;
    goNext();
};

const goNext = () => {
    const instance = splide.value?.splide;
    if (instance) {
        const currentIndex = instance.index;
        const slideCount = instance.length;

        if (currentIndex >= slideCount - 1) {
            instance.go(0); // Reset to first slide
        } else {
            instance.go('>');
        }
    }
};


const splideOptions = {
    type: 'slide',
    pagination: false,
    arrows: false,
    gap: '1.5rem',
    loop: true,
    autoWidth: true,

    mediaQuery: 'min',
    breakpoints: {
        1024: {
            padding: {
                left: 'calc((100% - 1024px) / 2 + 48px)',
                right: 'calc((100% - 1024px) / 2 + 48px)',
            },
        },
        1269: {
            padding: {
                left: '48px',
                right: '48px',
            },
        },

        1440: {
            padding: {
                left: 'calc((100% - 1440px) / 2 + 48px)',
                right: 'calc((100% - 1440px) / 2 + 48px)',
            },
        },
    },
};

onMounted(() => {
    const testimonialSectionEl = testimonialSection.value;
    const headingEl = heading.value;
    new PlaceholderJS(headingEl, { scrub: true, speed: 2 });

    const tl = gsap.timeline({ paused: true })

    tl.fromTo(sliderArrow.value, {
        y: 40,
        autoAlpha: 0
    }, {
        y: 0,
        autoAlpha: 1,
        ease: 'power1.out',
        duration: 0.5
    })
    ScrollTrigger.create({
        trigger: testimonialSectionEl,
        start: 'top 80%',
        end: 'bottom 60%',
        onEnter: () => {
            tl.play()
            observerReady.value = true
            document.body.classList.remove('dark')
        },
        onEnterBack: () => {
            tl.play()
            document.body.classList.remove('dark')
        },
        onLeaveBack: () => {
            tl.reverse()
            document.body.classList.add('dark')
        },
        onLeave: () => {
            tl.reverse()
            document.body.classList.add('dark')
        },
    });


})
watch(observerReady, (ready) => {
    if (!ready) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const index = slideRefs.value.indexOf(entry.target);
                if (index !== -1) {
                    if (entry.isIntersecting) {
                        if (!visibleSlides.value.includes(index)) {
                            visibleSlides.value.push(index);
                        }
                    } else {
                        visibleSlides.value = visibleSlides.value.filter((i) => i !== index);
                    }
                }
            });
        },
        {
            root: splide.value?.$el.querySelector('.splide__track'),
            threshold: 0.5,
        }
    );

    slideRefs.value.forEach((el) => el && observer.observe(el));
});

</script>
<style scoped>
.splide__track,
.splide__list,
:deep(.splide__track),
:deep(.splide__list) {
    overflow-y: visible !important;
    overflow-x: visible !important;
}
</style>