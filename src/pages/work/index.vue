<script setup>
useHead({
    title: 'Featured Work',
    meta: [
        { name: 'description', content: "Expore my featured work and learn more about the brands that I have empowered." },
        { property: 'og:title', content: 'Featured Work | Code Artisan' },
        { property: 'og:url', content: 'https://codeartisan.dev/work/' },
        { property: 'og:image', content: "https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto,w_960/v1745552050/Title_bjlnl8.png" },
    ]
})
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import InnerSecondaryNav from '../../components/navigation/InnerSecondaryNav.vue'
import InnerNav from '../../components/navigation/InnerNav.vue';
import Contact from '../../components/Contact.vue';
import Footer from '../../components/Footer.vue';
import Work from '../../components/sidebars/Work.vue';

import { navigateTo } from '#imports';
import { useWorkStore } from '../../stores/work.js';
import { useModalStore } from '../../stores/modal.js';
import videoHandler from '../../utils/videoHandler.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PlaceholderJS from '../../utils/placeholder.js'

const store = useWorkStore();

import gsap from 'gsap';


const workGrid = ref([]);
const isHovered = ref([false])
const buttonRefs = ref([])
const labelRefs = ref([]);
const hoverTimelines = []
const blobRefs = ref([])
const blobInnerRefs = ref([]);
const modalWindow = ref(null);
const workPage = ref(null);
const modalVideo = ref(null);
const modalStore = useModalStore();


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

function startHover(event) {
    const gridItemEl = event.currentTarget;
    const video = gridItemEl.querySelector('video');
    const player = new videoHandler(video);
    player.play();
}

function endHover(event) {
    const gridItemEl = event.currentTarget;
    const video = gridItemEl.querySelector('video');
    const player = new videoHandler(video);
    player.pause();
}


function animateSquares() {
    nextTick(() => {
        // Kill previous triggers if needed
        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger?.classList.contains('work-grid--item')) {
                trigger.kill();
            }
        });

        const squares = document.querySelectorAll('.work-grid--item');

        squares.forEach((square, i) => {
            gsap.fromTo(
                square,
                {
                    autoAlpha: 0,
                    y: 60,
                    scale: 0.95,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: 'power3.out',
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: square,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                        once: false,
                    },
                }
            );
        });
    });
}


function closeModal() {

    const workPageEL = workPage.value;
    const modalWindowEl = modalWindow.value;
    if (modalWindowEl && !store.reduceMotion) {

        const modalCopy = modalWindowEl.querySelector('.modal-copy');
        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = ''
            }
        });
        tl.clear()
        tl.fromTo(modalCopy, {
            filter: 'none',
        }, {
            filter: 'blur(40px)',
            duration: 0.6,
            ease: 'power1.inOut'
        })
        tl.fromTo(modalCopy, {
            autoAlpha: 1,
            y: 0
        }, {
            y: 1000,
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power1.out'
        }, '-=0.3')
        tl.fromTo(modalWindowEl, {
            autoAlpha: 1,
            filter: 'none'
        }, {
            autoAlpha: 0,
            filter: 'blur(40px)',
            duration: 0.4,
            ease: 'power1.out'
        }, '-=0.6')
        return
    }
    document.body.style.overflow = ''
}


function openModal(item) {
    if (item.caseStudy) {
        const slug = '/work/' + item.slug
        navigateTo(slug)
        return;
    }
    document.body.style.overflow = 'hidden'
    modalStore.modalItem = item;
    window.scrollTo(0, 0);

    nextTick(() => {
        const modalWindowEl = modalWindow.value;
        if (!modalWindowEl && store.reduceMotion) return
        document.body.style.overflow = 'hidden'

        const placeholderItems = modalWindowEl.querySelectorAll('.placeholder-line');
        const modalCopy = modalWindowEl.querySelector('.modal-copy');
        const tl = gsap.timeline();
        const anims = [];
        tl.fromTo(modalWindowEl, {
            autoAlpha: 0,
            filter: 'blur(40px)'
        }, {
            autoAlpha: 1,
            filter: 'none',
            duration: 0.4,
            ease: 'power1.out'
        })
        tl.fromTo(modalCopy, {
            y:0,
            scale: 0,
            autoAlpha: 0,
            filter: 'blur(40px)',
        }, {
            y:0,
            autoAlpha: 1,
            scale: 1,
            filter: 'none',
            duration: 0.6,
            ease: 'elastic.out(0.9)'
        }, '-=0.2')

        placeholderItems.forEach((li) => {
            const anim = new PlaceholderJS(li, { manual: true, scrub: true });
            anims.push(anim);
            gsap.set(li, { autoAlpha: 0, y: 10 });
        });

        tl.to(placeholderItems, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.3,
            onStart: () => {
                anims.forEach((anim) => anim.play());
            }
        });
        const modalVideoEl = modalVideo.value;
        if (modalVideoEl) {
            const player = new videoHandler(modalVideoEl);
            player.play();
        }
    });
}


onMounted(async () => {
    await nextTick()
    animateSquares();
    watch(() => store.filteredWork, async () => {
        await nextTick();
        const items = document.querySelectorAll('.work-grid--item');
        items.forEach(item => {
            const video = item.querySelector('video');
            if (video && !video.dataset.loaded) {
                const player = new videoHandler(video);
                player.pause();
            }
        });

        animateSquares();
    }, { immediate: true });
    nextTick(() => {
        const slug = modalStore.pendingModalSlug;
        if (slug) {
            const item = store.filteredWork.find(w => w.slug === slug);
            if (item) {
                openModal(item);
                modalStore.pendingModalSlug = null;
            } else {
                console.warn('Item not found immediately, waiting on filteredWork...');
            }
        }

        watch(() => store.filteredWork.length, () => {
            const slug = modalStore.pendingModalSlug;
            if (!slug) return;
            const item = store.filteredWork.find(w => w.slug === slug);
            if (item) {
                openModal(item);
                modalStore.pendingModalSlug = null;
            }
        });

    });
    const workGridEl = workGrid.value;
    ScrollTrigger.create({
        trigger: workGridEl,
        start: 'top 5%',
        end: 'bottom 70%',
        onEnter: () => {
            document.body.classList.remove('dark')
        },
        onEnterBack: () => {
            document.body.classList.remove('dark')
        },
        onLeave: () => {
            document.body.classList.add('dark')
        },
    });


})
</script>

<template>
    <div class="font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary transition duration-700 relative overflow-clip"
        ref="workPage">

        <div class="utilities max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto pt-9 lg:pt-24 pb-18 lg:pb-20"
            ref="utilityBar">
            <InnerSecondaryNav />
        </div>
        <InnerNav title="Featured Work" brandLabel="hi, i'm emm." brandURL="/" />
        <div
            class="flex flex-col gap-6 lg:flex-row mt-28 lg:mt-60 max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto items-start">
            <Work />
            <div class="work-grid flex flex-wrap gap-6 w-full lg:w-3/4" ref="workGrid">
                <div v-if="!store.gridResults"
                    class="text-3xl italic transition-all duration-700 work-grid--no-results">
                    No matching items found.
                </div>
                <div v-for="(item, index) in store.filteredWork" :key="index"
                    class="work-grid--item cursor-pointer group w-full relative md:w-[48%] lg:w-full xl:w-[48%]"
                    :class="item.textColor" @click="openModal(item)" @mouseenter="startHover($event)">
                    <div class="media relative rounded-xl mb-2 overflow-clip flex">
                        <img :src="item.image"
                            class=" w-full h-auto group-hover:-translate-x-[34%] transition-all duration-700 relative z-10" />
                        <div class="z-0 w-[35%] transition-all duriation-900 absolute right-0 top-0">
                            <video class="aspect-mobile" :data-src="item.video.replace('q_auto', 'q_auto,w_360')" muted
                                playsinline loop background allow="picture-in-picture"
                                :poster="(item.video.replace('.m3u8', '.webp')).replace('q_auto', 'q_auto,so_0.2')"></video>
                        </div>
                    </div>

                    <h3
                        class="font-semibold text-lg text-primary dark:text-background inverted:text-background transition duration-700 group-hover:text-current mb-4 w-5/6">
                        {{ item.title }}</h3>
                </div>
            </div>
        </div>
        <Contact />
        <Footer />


    </div>
    <div ref="modalWindow" v-if="modalStore.modalItem"
        class="fixed lg:inset-0 z-50 lg:px-6 bg-black/50 backdrop-blur top-0 h-dvh w-full overflow-y-auto overflow-x-clip lg:py-8"
        @click.self="closeModal">
        <div
            class="modal-copy bg-primary text-black p-12 lg:p-18 lg:rounded-[3rem] lg:max-w-2xl lg:max-w-5xl w-full relative mx-auto md:mt-0 lg:mt-5 lg:mb-20 is-active is-visible">

            <button
                class="absolute top-1 z-20 right-1 text-3xl cursor-pointer transition duration-700 hover:text-background rounded-[3rem] px-6 py-3 hover:scale-[1.08] group size-18 flex flex-col justify-center items-center hover:rotate-270"
                @click="closeModal" :class="modalStore.modalItem.textColor">
                <span
                    class="w-10 h-[4px] bg-current block rotate-45 rounded-[3rem] absolute left-4 group-hover:-rotate-135 transition-all duration-700 shadow-md shadow-primary"></span>
                <span
                    class="w-10 h-[4px] bg-current block -rotate-45 rounded-[3rem] absolute left-4 group-hover:rotate-135 transition-all duration-700 shadow-md shadow-primary"></span>
            </button>

            <div class="relative rounded-xl flex flex-col justify-center items-center z-10"
                :class="modalStore.modalItem.textColor">
                <div class="flex flex-col md:flex-row justify-center items-start gap-8">
                    <img :src="modalStore.modalItem.image"
                        class="max-md:-mx-12 max-md:-mt-12 max-md:pb-6 max-md:min-w-dvw object-cover md:rounded-[3rem] md:w-[73.5%] transition-all duriation-900" />
                    <div class="rounded-xl w-[26.5%] transition-all duriation-900 hidden md:block overflow-clip">
                        <video ref="modalVideo" class="aspect-mobile" :data-src="modalStore.modalItem.video" playsinline
                            muted loop></video>
                    </div>
                </div>
                <div class="flex flex-col justify-end py-6 md:p-6 transition-all duriation-700 w-full"
                    @mouseover="isHovered = true" @mouseleave="isHovered = false">
                    <h3 :class="modalStore.modalItem.textColor" class="text-2xl font-bold mb-2 placeholder-line"
                        data-splitting="words">{{ modalStore.modalItem.title
                        }}
                    </h3>
                    <div class="flex flex-col md:flex-row md:items-stretch justify-between mb-4">
                        <div class="flex flex-col justify-between pr-8 lg:pr-18">
                            <p :class="modalStore.modalItem.textColor" class="text-base placeholder-line"
                                data-splitting="words" v-html="modalStore.modalItem.text"></p>

                            <div class="specialties-animate mt-4 lg:w-90 xl:w-100"
                                v-if="modalStore.modalItem.specialties">
                                <h4 class="mb-2 mt-8">Specialties</h4>
                                <ul class="flex gap-2 items-start flex-wrap">
                                    <li v-for="(specialty, index) in modalStore.modalItem.specialties" :key="index"
                                        class="subtle-slide-in bg-current px-2 py-1 text-nowrap rounded-xl text-xs inline"
                                        :style="'--theme-main-animation-delay:' + ((index * 0.3) + 0.8) + 's'">
                                        <span class="text-primary">{{ specialty }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        <div class="flex gap-2 group/ctas flex-wrap max-w-75 flex-col mt-6 md:mt-0">
                            <div v-for="(button, btnIndex) in modalStore.modalItem.buttons" :key="btnIndex"
                                class="flex items-center h-14 order-2 md:order-1">
                                <a v-if="button.github" :class="modalStore.modalItem.textColor"
                                    class="group-hover/ctas:opacity-40 group-hover/ctas:hover:opacity-100 cursor-pointer hover:bg-current hover:rotate-270 transition group/git rounded-full subtle-slide-in mr-4"
                                    style="--theme-main-animation-delay:0.6s" target="_blank"
                                    :href="modalStore.modalItem.github">
                                    <svg class="dark:group-hover/git:text-primary group-hover/git:rotate-90 transition"
                                        enable-background="new 0 0 32 32" height="44px" id="Layer_1" version="1.0"
                                        viewBox="0 0 32 32" width="44px" xml:space="preserve"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path clip-rule="evenodd"
                                            d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
                                            class="group-hover/git:stroke-current transition fill-current group-hover/git:fill-background"
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
                                    }" @mouseenter="hoverIn(index, btnIndex)" @mouseleave="hoverOut(index, btnIndex)">
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
                                style="--theme-main-animation-delay:0.8s" v-if="modalStore.modalItem.tech">
                                <h4 class="mb-1">Tech Stack</h4>
                                <ul class="flex list-disc gap-2 items-start flex-wrap ml-3">
                                    <li v-for="(t, i) in modalStore.modalItem.tech" :key="i"
                                        class="text-sm ps-0 pl-0 pr-3 placeholder-line" data-splitting="words">
                                        <span class="-ml-1">{{ t }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>