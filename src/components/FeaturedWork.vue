<template>
    <section ref="sliderSection" class="py-20">
        <div class="relative group min-h-screen">
            <h2
                class="mb-6 lg:mb-18 max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto text-2xl lg:text-5xl">
                Featured Work</h2>
            <Splide ref="splide" :options="splideOptions" class="overflow-visible">
                <SplideSlide v-for="(slide, index) in slides" :key="index" class="transition-all duration-500 group"  :class="slide.textColor">
                    <div class="relative rounded-xl overflow-hidden flex flex-col justify-center items-center">
                        <img :src="slide.image"
                            class="w-full mx-auto object-cover rounded-xl group-[.is-active]:w-[var(--width-slide)] transition-all" />
                        <div
                            class="h-0 opacity-0 flex flex-col justify-end p-6 group-[.is-active]:opacity-100 group-[.is-active]:h-full transition-all">
                            <h3 :class="slide.textColor" class="text-2xl font-bold mb-2">{{ slide.title }}</h3>
                            <p :class="slide.textColor" class="text-base mb-4">{{ slide.text }}</p>
                            <button class="bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-gray-200">
                                {{ slide.buttonText }}
                            </button>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>

            <button @click="goNext"
                class="mt-8 block absolute bottom-[45px] right-0 mx-auto text-white px-6 text-4xl py-2 rounded-full hover:bg-accent transition">
                <svg fill="none" height="64" stroke-width="1.5" viewBox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" class="stroke-current  group-has-[.is-active.text-red-400]:stroke-red-400 group-has-[.is-active.text-yellow-300]:stroke-yellow-400" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
        </div>
    </section>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@splidejs/vue-splide/css';

gsap.registerPlugin(ScrollTrigger);

const active = ref(0);
const splide = ref(null);
const sliderSection = ref(null);

const slides = [
    {
        image: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745385371/workwithsupply_mj0pag.png',
        title: 'First Slide',
        text: 'This is the first slide description.',
        buttonText: 'Learn More',
        textColor: 'text-white'
    },
    {
        image: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745385370/Product-Finder_ofzt6p.png',
        title: 'Second Slide',
        text: 'Second slide intro goes here.',
        buttonText: 'See Details',
        textColor: 'text-yellow-300'
    },
    {
        image: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745385369/DM-Presents_iauzjs.png',
        title: 'Third Slide',
        text: 'More info on the third slide.',
        buttonText: 'Explore',
        textColor: 'text-red-400'
    },
];

const splideOptions = {
    type: 'loop',
    focus: 'center',
    autoplay: true,
    pagination: false,
    arrows: false,
    padding: '20%',
};

const goNext = () => {
    if (splide.value) {
        splide.value.go('>');
    }
};

onMounted(() => {
    ScrollTrigger.create({
        trigger: sliderSection.value,
        start: 'top 20%',
        onEnter: () => {
            document.body.classList.add('dark')
            //splide.value?.mount();
            //splide.value?.on('move', (newIndex) => {
               // active.value = newIndex;
            //});
        },
        onLeaveBack: () => {
            document.body.classList.remove('dark')
        },
        onEnterBack: () => {
            document.body.classList.remove('dark')
        },
    });
});
</script>
  
<style scoped>
/* Optional: add shadow or transition smoothing if needed */
</style>
  