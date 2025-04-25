<template>
    <section ref="sliderSection" class="pt-20" id="work">
        <div class="relative group h-[1100px] md:h-[950px] xl:h-[1100px] overflow-clip pb-8">
            <h2
                class="mb-6 lg:mb-18 max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto text-2xl lg:text-5xl placeholder-line"
                    data-splitting="words">
                Featured Work</h2>
            <Splide ref="splide" :options="splideOptions" class="overflow-visible peer">
                <SplideSlide v-for="(slide, index) in slides" :key="index"
                    class="transition-all duration-500 group" :class="slide.textColor">
                    <div class="relative rounded-xl overflow-hidden flex flex-col justify-center items-center">
                        <div class="flex flex-col md:flex-row justify-center items-center gap-8">
                            <img :src="slide.image"
                                class="w-full object-cover rounded-xl group-[.is-active]:w-[90%] md:group-[.is-active]:w-[var(--width-slide)] transition-all duriation-900" />
                            <div
                                class="opacity-0 rounded-xl w-0 group-[.is-active]:opacity-100 group-[.is-active]:w-[20%] transition-all duriation-900 hidden md:block overflow-clip">
                                <video class="aspect-mobile" :data-src="slide.video" playsinline muted="" loop></video>
                            </div>
                        </div>
                        <div class="h-0 opacity-0 flex flex-col justify-end py-6 md:p-6 group-[.is-active]:opacity-100 group-[.is-active]:h-full transition-all duriation-700 w-[85%]"
                            @mouseover="isHovered = true" @mouseleave="isHovered = false">
                            <h3 :class="slide.textColor" class="text-2xl font-bold mb-2 subtle-slide-in">{{ slide.title }}
                            </h3>
                            <div class="flex flex-col md:flex-row md:items-stretch justify-between mb-4">
                                <div class="flex flex-col justify-between pr-8 lg:pr-18">
                                    <p :class="slide.textColor" class="text-base subtle-slide-in" v-html="slide.text"
                                        style="--theme-main-animation-delay:0.2s"></p>

                                    <div class="specialties-animate mt-4 lg:w-90 xl:w-100" v-if="slide.specialties">
                                        <h4 class="mb-2 mt-8">Specialties</h4>
                                        <ul class="flex gap-2 items-start flex-wrap">
                                            <li v-for="(specialty, index) in slide.specialties" :key="index"
                                                class="subtle-slide-in bg-current px-2 py-1 text-nowrap rounded-xl text-xs inline"
                                                :style="'--theme-main-animation-delay:0.' + (index + 5) + 's'">
                                                <span class="text-primary">{{ specialty }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>



                                <div class="flex gap-2 group/ctas flex-wrap max-w-75 flex-col mt-6 md:mt-0">
                                    <div v-for="(button, btnIndex) in slide.buttons" :key="btnIndex"
                                        class="flex items-center h-14 order-2 md:order-1">
                                        <a v-if="button.github" :class="slide.textColor"
                                            class="group-hover/ctas:opacity-40 group-hover/ctas:hover:opacity-100 cursor-pointer hover:bg-current hover:rotate-270 transition group/git rounded-full subtle-slide-in mr-4"
                                            style="--theme-main-animation-delay:0.6s" target="_blank" :href="slide.github">
                                            <svg class="dark:group-hover/git:text-primary group-hover/git:rotate-90 transition"
                                                enable-background="new 0 0 32 32" height="44px" id="Layer_1" version="1.0"
                                                viewBox="0 0 32 32" width="44px" xml:space="preserve"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <path clip-rule="evenodd"
                                                    d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
                                                    class="group-hover/git:stroke-current transition fill-current"
                                                    fill-rule="evenodd" />
                                                <g />
                                                <g />
                                                <g />
                                                <g />
                                                <g />
                                                <g />
                                            </svg>
                                        </a>
                                        <a target="_blank" :href="button.url"
                                            class="group-hover/ctas:opacity-40 group-hover/ctas:hover:opacity-100 cursor-pointer relative flex flex-wrap items-center transition group/cta overflow-hidden w-60 text-center subtle-slide-in"
                                            style="--theme-main-animation-delay:0.7s" :ref="el => {
                                                if (!buttonRefs[index]) buttonRefs[index] = [];
                                                buttonRefs[index][btnIndex] = el;
                                            }" @mouseenter="hoverIn(index, btnIndex)"
                                            @mouseleave="hoverOut(index, btnIndex)">
                                            <span
                                                class="inline-block font-semibold px-4 py-2 border-current border-2 rounded-full transition-all relative z-10 bg-inherit w-full text-nowrap"
                                                :ref="el => {
                                                    if (!labelRefs[index]) labelRefs[index] = [];
                                                    labelRefs[index][btnIndex] = el;
                                                }">
                                                {{ button.text }}
                                            </span>
                                            <span
                                                class="absolute right-0 top-0 w-0 h-full opacity-0 transition-all z-0 origin-left block overflow-clip"
                                                :ref="el => {
                                                    if (!blobRefs[index]) blobRefs[index] = [];
                                                    blobRefs[index][btnIndex] = el;
                                                }">
                                                <span :ref="el => {
                                                    if (!blobInnerRefs[index]) blobInnerRefs[index] = [];
                                                    blobInnerRefs[index][btnIndex] = el;
                                                }"
                                                    class="flex items-center justify-center rounded-r-full bg-current h-full transition-all z-0 origin-left block w-10">
                                                    <svg class="arrow w-24 h-24 fill-current" viewBox="0 0 24 24">
                                                        <path d="M8 5l8 7-8 7z" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="max-w-75 pl-2 my-6 md:mb-0 subtle-slide-in order-1 md:order-2"
                                        style="--theme-main-animation-delay:0.8s" v-if="slide.tech">
                                        <h4 class="mb-1">Tech Stack</h4>
                                        <ul class="flex list-disc gap-2 items-start flex-wrap ml-3">
                                            <li v-for="(techStack, index) in slide.tech" :key="index"
                                                class="text-sm ps-0 pl-0 pr-3">
                                                <span class="-ml-1">{{ techStack }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>

            <button ref="sliderArrow"
                class="mt-8 block -right-2 md:-right-8 lg:right-15 mx-auto text-white px-6 py-2 rounded-full transition duriation-900 cursor-pointer w-24 md:w-50 flex flex-col justify-center items-center group/slider h-26 md:h-50 hover:opacity-80 dark:bg-primary/20 inverted:bg-background/0"
                :class="[isHovered ? 'md:opacity-80' : '', sliderArrowSticky ? 'fixed bottom-20 md:bottom-0 lg:bottom-10' : 'absolute top-[60vh] md:top-[85vh]']"
                @click="onArrowClick" @mouseenter="onArrowHoverIn" @mouseleave="onArrowHoverOut">
                <svg fill="none" stroke-width="1.5" viewBox="0 0 24 24" class="w-24 md:w-50" :class="activeTextColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" class="stroke-current" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg class="absolute inset-0 w-full h-fullabsolute rounded-[9rem] w-full h-full pointer-events-none opacity-0 group-hover/slider:opacity-100 animate-spin-slow z-0"
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
import { ref, onMounted, computed } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@splidejs/vue-splide/css';

import placeholderJS from './../utils/placeholder.js'

   
gsap.registerPlugin(ScrollTrigger);

const active = ref(0);
const splide = ref(null);
const sliderSection = ref(null);
const buttonRefs = ref([])
const labelRefs = ref([]);
const iconRefs = ref([])
const hoverTimelines = []
const blobRefs = ref([])
const sliderArrow = ref([])
const sliderArrowSticky = ref([false])
const isHovered = ref([false])
const blobInnerRefs = ref([]);
const activeSlideIndex = ref(0)
const progressOffset = ref(283); // full circumference of r=45 circle
const strokeLength = 2 * Math.PI * 45;
const progressCircle = ref(null);
let hoverTimer = null;

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
const hoverIn = (slideIndex, btnIndex) => {
    const label = labelRefs.value[slideIndex][btnIndex];
    const blob = blobRefs.value[slideIndex][btnIndex];
    const blobInner = blobInnerRefs.value[slideIndex][btnIndex];

    if (!hoverTimelines[slideIndex]) hoverTimelines[slideIndex] = [];
    if (!hoverTimelines[slideIndex][btnIndex]) {
        const tl = gsap.timeline({ paused: true });

        tl.set(blob, { opacity: 0, width: 0 });
        tl.set(blobInner, { x: "-2.5rem" })
        tl.to(blob, {
            opacity: 1,
            duration: 0.2,
        }, 0);
        tl.to(label, {
            paddingRight: '2rem',
            duration: 0.2,
        }, 0);
        tl.fromTo(blobInner, {
            x: "-2.5rem"
        }, {
            x: 0,
            duration: 0.2,
            ease: 'power2.out'
        }, 0.1);
        tl.fromTo(blob, {
            width: 0
        }, {
            width: '2.5rem',
            duration: 0.2,
            ease: 'power2.out'
        }, 0.1);

        tl.to(label, {
            borderTopRightRadius: '0.5rem',
            borderBottomRightRadius: '0.5rem',
            width: '80%',
            duration: 0.2,
            ease: 'power2.out'
        }, 0.25);


        tl.to(blobInner, {
            backgroundColor: 'transparent',
            duration: 0.2,
            ease: 'power3.out'
        }, 0.5);
        hoverTimelines[slideIndex][btnIndex] = tl;
    }
    hoverTimelines[slideIndex][btnIndex].play();
};

const hoverOut = (slideIndex, btnIndex) => {
    hoverTimelines[slideIndex]?.[btnIndex]?.reverse();
};
const slides = [
    {
        image: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/q_auto,f_auto/v1745385371/workwithsupply_mj0pag.png',
        title: 'workwithsupply.com',
        text: 'Full website build for digital marketing agency <i><strong>Supply</strong></i>.',
        specialties: [
            'Custom Gutenberg Blocks', 'Custom Theme Functions', 'Plugin and Theme Development', 'Components built using ACF fields', 'GSAP Animations',
        ],
        tech: [
            'Twitter Bootstrap',
            'ACF', 'Webpack', 'GSAP', 'WordPress'

        ],
        buttons: [
            {
                text: 'Supply Website',
                url: 'https://workwithsupply.com',
                github: 'https://github.com/msamricth/supply-theme'
            },
        ],

        video: 'https://res.cloudinary.com/dp1qyhhlo/video/upload/v1745546389/supply_tysvko.m3u8',
        textColor: 'text-toxic-mint',
    },
    {
        image: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/q_auto,f_auto/v1745385370/Product-Finder_ofzt6p.png',
        title: "dat.com & DAT's Product Finder",
        text: "This project was a overhaul of DAT's website, which is built on wordpress; with elementor page builder. The theme is a child theme of hello elementor and features several heavy customized components built to work in elementor and utilizes ACF.",
        textColor: 'text-lime-glow',
        video: 'https://res.cloudinary.com/dp1qyhhlo/video/upload/q_auto/v1745546408/DAT_1_nu49mn.m3u8',
        specialties: [
            'Custom Gutenberg Blocks', 'Custom Theme Functions', 'Plugin and Theme Development', 'Components built using ACF fields', 'Elementor Components + Extensions',
        ],
        tech: [
            'Twitter Bootstrap',
            'ACF', 'Webpack', 'Elementor', 'WordPress', 'SplideJS', 'MixItUp'

        ],
        buttons: [
            {
                text: 'DAT Website',
                url: 'https://dat.com/home-2'
            },
            {
                text: "Product Finder",
                url: 'https://www.dat.com/products'
            },
        ],
        video: 'https://res.cloudinary.com/dp1qyhhlo/video/upload/q_auto/v1745547305/DAT_1_vi5ruo.m3u8',
    },
    {
        image: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/q_auto,f_auto/v1745385369/DM-Presents_iauzjs.png',
        title: 'Dr Martens: DM Presents, Store Locator, & specialty pages',
        text: "Built several speciality pages, a platform for Dr Marten's live event series that integrates with EventBrite, and a interactive store locator that works with Dr Marten's existing Sharepoint/Hybris system",

        video: 'https://res.cloudinary.com/dp1qyhhlo/video/upload/q_auto/v1745546437/DM_nn6od6.m3u8',
        specialties: [
            'Delivering exceptional digital products with tight constraints', 'Video and Image optimizations', 'API Integrations',
        ],
        tech: [
            'pugJS',
            'Hybris', 'Babel', 'Gulp', 'SCSS', 'MapBox', 'Airtable', 'EventBrite', 'Vimeo'

        ],
        buttons: [
            {
                text: 'Store Locator',
                url: 'https://www.drmartens.com/us/en/store-locator',
                github: 'https://github.com/msamricth/dm-storefinder'
            },
            {
                text: "DM Presents",
                url: 'https://www.drmartens.com/us/en/dm-presents',
                github: 'https://github.com/msamricth/dm-presents'
            },
            {
                text: "Filmmaker Series",
                url: 'https://www.drmartens.com/us/en/celebrating-black-voices'
            },
        ],
        textColor: 'text-hot-coral'
    },
    {
        image: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/q_auto,f_auto/v1745546407/4_qsn9jm.jpg',
        title: 'jetfuelstudios.com',
        text: 'Developed website for Jetfuel Studios.',
        buttonText: 'Explore',
        textColor: 'text-sunburn-orange',
        specialties: [
            'Custom Theme and Plugin Development', 'GSAP Animations', 'Video and Image optimizations',
        ],
        tech: [
            'WordPress',
            'Sage', 'Bedrock', 'BuddJS', 'Larvel', 'Composer', 'ACF', 'Trellis', 'Tailwind'

        ],
        buttons: [
            {
                text: 'Jetfuel website',
                url: 'https://jetfuelstudio.com/',
            },
        ],
        video: 'https://res.cloudinary.com/dp1qyhhlo/video/upload/q_auto/v1745547316/Jetfuel_1_batw8j.m3u8',
    },
    {
        image: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/q_auto,f_auto/v1745546407/3_mwhi9l.jpg',
        title: 'Green Leadership Trust - Website, Branding & Media',
        text: "Designed and developed Green Leadership Trust's website, and design most of GLT's media on an on-going basis",
        textColor: 'text-electric-purple',
        specialties: [
            'Print and Digital Media', 'Video and Image optimizations', 'API Integrations', 'Custom Theme and Plugin Development', 'CRM & Communications Strategy'
        ],
        tech: [
            'WordPress',
            'ACF', 'Webpack', 'Airtable', 'Cloudinary', 'React', 'Bootstrap',

        ],
        buttons: [
            {
                text: 'GLT Website',
                url: 'https://greenleadershiptrust.org/',
                github: 'https://github.com/msamricth/greenleadershiptrust'
            },
        ],
        video: 'https://res.cloudinary.com/dp1qyhhlo/video/upload/q_auto/v1745547316/glt_1_rbnutw.m3u8',
    },
    {
        image: 'https://res.cloudinary.com/dp1qyhhlo/image/upload/q_auto,f_auto/v1745546407/5_vf2btn.jpg',
        title: 'Gators Dockside SweepStakes Landing Page',
        text: 'Build a series of Landing pages for Gators Dockside and Piesanos Stone Fire Pizza',
        textColor: 'text-lime-glow',
        specialties: [
            'Vue landing page', 'ADA & WCAG Web Accessibility', 'GSAP Animations', "SVG Customization"
        ],
        tech: [
            'Vite', 'Vue', 'Pinia', 'GSAP', 'Netlify', 'Tailwind'

        ],
        buttons: [
            {
                text: 'Landing Page',
                url: 'http://gatorsdocksidesweeps.com/',
            },
        ],
        video: 'https://res.cloudinary.com/dp1qyhhlo/video/upload/q_auto/v1745547316/Gators_1_ixzh4b.m3u8',
    },
];

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
            padding: { left: '0', right: '2rem' },
        },
    }
};

const goNext = () => {
    if (splide.value) {
        splide.value.go('>');
    }
};
const handleSlideActive = (index) => {
    activeSlideIndex.value = index;

    const currentSlide = document.querySelectorAll('.splide__slide')[index];
    const video = currentSlide.querySelector('video');

    video.muted = true;
    video.currentTime = 0;

    if (video.readyState >= 1) {
        // video.play()
    } else {
        video.addEventListener('loadedmetadata', () => {
            // video.play()
        });
    }
};

onMounted(() => {

    const sliderSectionEl = sliderSection.value;
    const headline = sliderSectionEl.querySelector('h2');
    new placeholderJS((headline))
shuffledWork.value = [...slides].sort(() => Math.random() - 0.5)
    sliderArrowSticky.value = false;
    const waitForSplide = () => {
        const instance = splide.value?.splide;
        if (!instance) {
            requestAnimationFrame(waitForSplide); // try again next frame
            return;
        }

        const allSlides = document.querySelectorAll('.splide__slide video');
        allSlides.forEach((video, index) => {
            video.muted = true;
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(video.dataset.src);
                hls.attachMedia(video);
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = video.dataset.src;
            }
            if (video.readyState >= 1) {
                video.play();
            } else {
                video.addEventListener('loadedmetadata', () => {
                    video.play();
                });
            }
        });

        instance.on('moved', (destIndex) => {

            handleSlideActive(destIndex);
            //slideAnims()
        });
        handleSlideActive(splide.value.index);
    };

    waitForSplide();
    ScrollTrigger.create({
        trigger: sliderSectionEl,
        start: 'top 20%',
        end: 'bottom bottom',
        onEnter: () => {
            document.body.classList.add('dark')

            sliderArrowSticky.value = true
            //splide.value?.mount();
            //splide.value?.on('move', (newIndex) => {
            // active.value = newIndex;
            //});
        },
        onLeave: () => {
            sliderArrowSticky.value = false
        },
        onLeaveBack: () => {

            //sliderArrowSticky.value = false
            //document.body.classList.remove('dark')
        },
        onEnterBack: () => {
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
  