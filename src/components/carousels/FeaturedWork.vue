<template>
    <section ref="sliderSection" class="pt-20" id="work">
        <div class="relative group h-[70vh] min-h-[750px] md:h-[670px] lg:h-dvh overflow-y-visible overflow-x-clip pb-8">
            <h2 class="mb-6 lg:mb-18 max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto text-2xl lg:text-5xl placeholder-line"
                data-splitting="words">
                Featured Work</h2>
            <div class="splideSlider relative">
                <Splide ref="splide" :options="splideOptions" class="overflow-visible peer">
                    <SplideSlide v-for="(slide, index) in slides" :key="index" class="transition-all duration-500 group"
                        :class="slide.textColor">
                        <div class="relative rounded-xl overflow-hidden flex flex-col justify-center items-center">
                            <div class="flex flex-col md:flex-row justify-center items-start gap-8">
                                <img :src="slide.image"
                                    class="w-full object-cover rounded-xl group-[.is-active]:w-[90%] md:group-[.is-active]:w-[var(--width-slide)] transition-all cursor-pointer duriation-900" @click.prevent="openWork(slide.slug)" />
                                <div
                                    class="opacity-0 rounded-xl w-0 group-[.is-active]:opacity-100 group-[.is-active]:w-[20%] transition-all duriation-900 hidden md:block overflow-clip">
                                    <video class="aspect-mobile" :data-src="slide.video" playsinline muted="" loop :poster="slide.video.replace('m3u8', 'png')"></video>
                                </div>
                            </div>
                            <div class="h-0 opacity-0 flex flex-col justify-end items-start py-6 md:p-6 group-[.is-active]:opacity-100 group-[.is-active]:h-full transition-all duriation-700 w-[85%] lg:w-[65%] lg:mr-26"
                                @mouseover="isHovered = true" @mouseleave="isHovered = false">
                                <h3 :class="slide.textColor" class="text-2xl font-bold mb-2 subtle-slide-in">{{ slide.title
                                }}
                                </h3>
                                <div class="flex flex-col gap-6 mb-4">
                                    <div class="flex flex-col justify-between pr-8 lg:pr-18">
                                        <p :class="slide.textColor" class="text-base subtle-slide-in"
                                            style="--theme-main-animation-delay:0.2s">
                                            {{ truncateHtmlText(slide.text, 100) }}
                                        </p>
                                    </div>
                                    <div class="flex gap-2 group/ctas flex-wrap max-w-75 flex-col mt-6 md:mt-0">

                                        <Buttons :href="slide.slug" :label="slide.projectTitle"
                                            :onClick="() => openWork(slide.slug)" :delay="'0.7s'" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
            <button ref="sliderArrow"
                class="mt-8 block -right-2 md:-right-8 lg:right-65 mx-auto text-white px-6 py-2 rounded-full transition duriation-900 cursor-pointer w-24 md:w-50 flex flex-col justify-center items-center group/slider h-26 md:h-50 hover:opacity-80 dark:hover:bg-primary/20 inverted:bg-background/0 absolute bottom-90 md:bottom-0 lg:bottom-60"
                :class="[isHovered ? 'md:opacity-80' : '']" @click="onArrowClick" @mouseenter="onArrowHoverIn"
                @mouseleave="onArrowHoverOut">
                <svg fill="none" stroke-width="1.5" viewBox="0 0 24 24" class="w-24 md:w-50" :class="activeTextColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" class="stroke-current" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg class="absolute inset-0 w-full h-full rounded-[9rem] w-full h-full pointer-events-none opacity-0 group-hover/slider:opacity-100 animate-spin-slow z-0"
                    :class="activeTextColor" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="6"
                        :stroke-dasharray="strokeLength" :stroke-dashoffset="progressOffset"
                        class="transition-all duration-100 ease-linear" ref="progressCircle" />
                </svg>
            </button>
        </div>
    </section>
    <div class="hidden stroke-sunburn-orange stroke-"></div>
</template>
  
<script setup>
import { ref, onMounted, computed, nextTick } from 'vue';
import router from '../../utils/router.js'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@splidejs/vue-splide/css';
import { useMainStore } from '../../stores/main.js'
import { useModalStore } from '../../stores/modal.js'
import placeholderJS from '../../utils/placeholder.js'
import { work as slides } from '../../data/work.js';
import Buttons from './../Buttons.vue';
import videoHandler from '../../utils/videoHandler.js';
gsap.registerPlugin(ScrollTrigger);
const store = useMainStore()
const modalStore = useModalStore()
const splide = ref(null);
const sliderSection = ref(null);
const sliderArrow = ref([])
const isHovered = ref([false])
const activeSlideIndex = ref(0)
const progressOffset = ref(283);
const strokeLength = 2 * Math.PI * 45;
const progressCircle = ref(null);

const shuffledWork = ref([])
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
const truncateHtmlText = (html, maxChars = 140) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || '';
    return text.length > maxChars ? text.slice(0, maxChars) + '…' : text;
};
const onArrowClick = () => {
    gsap.killTweensOf(progressOffset);
    progressOffset.value = strokeLength;
    progressCircle.value.style.strokeDashoffset = strokeLength;
    goNext();
};
const activeStrokeColor = computed(() =>
    slides[activeSlideIndex.value]?.textColor.replace('text-', '#') || '#00ffd5'
);

const activeTextColor = computed(() => {
    return slides[activeSlideIndex.value]?.textColor || 'text-primary';
});


const splideOptions = {
    type: 'loop',
    focus: 'center',
    //autoplay: true,
    pagination: false,
    pauseOnHover: true,
    arrows: false,
    padding: '15%',
    breakpoints: {
        940: {
            padding: { gap:'12px', left: '12px', right: '2rem' },
        },
    }
};

const goNext = () => {
    if (splide.value) {
        splide.value.go('>');
        //setInterval(store.setsliderTimeline('after'), 1500);
    }
};
const handleSlideActive = (index) => {
    activeSlideIndex.value = index;
        const currentSlide = document.querySelector('.is-active.is-visible');
        const video = currentSlide.querySelector('video');
        const player = new videoHandler(video);
        player.play();
};
const openWork = (item) => {
    modalStore.queueModalBySlug(item)
    router.push('/work')
}
onMounted(() => {

    const sliderSectionEl = sliderSection.value;
    const headline = sliderSectionEl.querySelector('h2');
    new placeholderJS((headline))
    shuffledWork.value = [...slides].sort(() => Math.random() - 0.5)

    store.setSliderArrowSticky(false);
    const waitForSplide = () => {
        nextTick(()=>{
        const instance = splide.value?.splide;
        if (!instance) {
            requestAnimationFrame(waitForSplide); // try again next frame
            return;
        }

        const allSlides = document.querySelectorAll('.splide__slide video');
        allSlides.forEach((video, index) => {
            const player = new videoHandler(video);
            player.pause();
        });

        instance.on('moved', (destIndex) => {
            handleSlideActive(destIndex);
            //slideAnims()
        });
        handleSlideActive(splide.value.index);
    })
    };


    ScrollTrigger.create({
        trigger: sliderSectionEl,
        start: 'top 20%',
        end: 'bottom bottom',
        onEnter: () => {
            document.body.classList.add('dark')
            waitForSplide();
        }
    });
    ScrollTrigger.create({
        trigger: '.splideSlider',
        start: 'top 50%',
        end: 'bottom bottom',
        onEnter: () => {
            store.setSliderArrowSticky(true)
            //splide.value?.mount();
            //splide.value?.on('move', (newIndex) => {
            // active.value = newIndex;
            //});
        },
        onLeave: () => {

            store.setSliderArrowSticky(false)
            store.setsliderTimeline('after')
        },
        onLeaveBack: () => {
            store.setSliderArrowSticky(false)
            store.setsliderTimeline('before')
            //sliderArrowSticky.value = false
            //document.body.classList.remove('dark')
        },
        onEnterBack: () => {
            store.setSliderArrowSticky(true)
            store.setsliderTimeline('before')
            //document.body.classList.remove('dark')
        },
    });

});
</script>
  
<style scoped>
@keyframes spin-slow {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin-slow 4s linear infinite;
}

.gradient-border {
    border-image: conic-gradient(from 0deg, #00ffd5, #ff00c3, #00ffd5) 1;
}
</style>
  