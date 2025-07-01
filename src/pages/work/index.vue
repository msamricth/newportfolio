<script setup>
useHead({
    titleTemplate: '%s | Code Artisan',
    title: 'Featured Work',
    meta: [
        { name: 'description', content: "Expore my featured work and learn more about the brands that I have empowered." },
        { property: 'og:title', content: 'Featured Work | Code Artisan' },
        { property: 'og:url', content: 'https://codeartisan.dev/work/' },
        { property: 'og:image', content: "https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto,w_960/v1745552050/Title_bjlnl8.png" },
    ],
    script: [
        {
            src: '/js/hls.mjs',
            type: 'module',
        },
        {
            src: '/js/hls.min.js',
            nomodule: true,
        }
    ]
})
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import InnerSecondaryNav from '@/components/navigation/InnerSecondaryNav.vue'
import InnerNav from '@/components/navigation/InnerNav.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import Work from '@/components/sidebars/Work.vue';
import Preloader from '@/components/Preloader.vue';
import { navigateTo } from '#imports';
import { useWorkStore } from '@/stores/work.js';
import { useModalStore } from '@/stores/modal.js';
import { useMainStore } from '@/stores/main.js';
import videoHandler from '@/utils/videoHandler.js';
import Modal from '@/components/contexts/Modal.vue';
import WorkModalContent from '@/components/contexts/WorkModalContent.vue';
import { AnimationFrame } from '@/utils/AnimationFrame';
const store = useWorkStore();
import { useNuxtApp } from '#app'

const { $gsap: gsap } = useNuxtApp()
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onBeforeRouteLeave } from 'vue-router';

const mainStore = useMainStore()
const workGrid = ref([]);
const labelRefs = ref([]);
const hoverTimelines = []
const blobRefs = ref([])
const blobInnerRefs = ref([]);
const modalWindow = ref(null);
const workPage = ref(null);
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

onBeforeRouteLeave(() => {
    if(!mainStore.loaded) return
    document.body.style.overflow = '';
});
function startHover(event) {
    const gridItemEl = event.currentTarget;
    const video = gridItemEl.querySelector('video');
    const player = new videoHandler(video);
    player.play();
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
    modalStore.modalItem = '';
    modalStore.pendingModalSlug = '';
}


function openModal(item) {
    if (item.caseStudy) {
        const slug = '/work/' + item.slug
        navigateTo(slug)
        return;
    }
    modalStore.modalItem = item;
    //window.scrollTo(0, 0);
}
const getSrc = computed(() => (img, width) => {
    return store.ready
        ? img.replace('/q_auto,f_auto', `/q_auto,f_auto,w_${width}`)
        : img.replace('upload/q_auto,f_auto', `upload/e_pixelate,q_auto:low,f_auto,e_grayscale,w_${width}`);
});

const srcSet = computed(() => (img) =>
    [480, 768, 896, 1280].map(w => `${getSrc.value(img, w)} ${w}w`).join(', ')
);

onMounted(async () => {
    await nextTick()
    if(!mainStore.loaded) return
    AnimationFrame(() => { mainStore.ready = true }, 450)
    ScrollTrigger.create({
        trigger: workPage.value,
        start: 'top top',
        end: '+=1', // very short range
        onEnter: () => {
            if (window.scrollY <= 10) {
                mainStore.toggleFold(false, true)
            }
        },
        once: true,
    });

    animateSquares();
    watch(() => store.filteredWork, async () => {
        await nextTick();
        mainStore.toggleFold(false, true)
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
            mainStore.toggleFold(false, true)
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
            mainStore.toggleFold(false, true)
        },
        onEnterBack: () => {
            mainStore.toggleFold(false, true)
        },
        onLeave: () => {
            mainStore.toggleFold(true)
        },
    });


})
</script>

<template>
    <div class="relative transition duration-700 font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary overflow-clip min-h-dvh"
        ref="workPage">

        <div class="utilities max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto pt-9  pb-18 lg:pb-20"
            ref="utilityBar">
            <InnerSecondaryNav />
        </div>
        <InnerNav title="Featured Work" brandLabel="hi, i'm emm." brandURL="/" v-if="mainStore.loaded"/>
        <Preloader />
        <div
            class="flex flex-col gap-6 lg:flex-row mt-28 lg:mt-60 max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto items-start lg:pb-60"  v-if="mainStore.loaded">
            <Work v-show="mainStore.loaded" />
            <div class="flex flex-wrap w-full gap-6 work-grid lg:w-3/4" ref="workGrid" v-show="mainStore.loaded">
                <div v-if="!store.gridResults"
                    class="text-3xl italic transition-all duration-700 work-grid--no-results">
                    No matching items found.
                </div>
                <div v-for="(item, index) in store.filteredWork" :key="index"
                    class="work-grid--item cursor-pointer group w-full relative md:w-[48%] lg:w-full xl:w-[48%]"
                    :class="item.textColor" @click="openModal(item)" @mouseenter="startHover($event)">
                    <div class="relative flex mb-2 media rounded-xl overflow-clip">
                        <img crossorigin="anonymous" :src="store.ready
                            ? item.image.replace('/q_auto,f_auto', `/q_auto,f_auto,w_475`)
                            : item.image.replace('upload/q_auto,f_auto', `upload/e_pixelate,q_auto:low,f_auto,e_grayscale,w_475`)"
                            :srcset="srcSet(item.image)"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 475px"
                            class=" w-full h-auto group-hover:-translate-x-[34%] transition-all duration-700 relative z-10"
                            width="475" height="267" />
                        <div class="z-0 w-[35%] transition-all duriation-900 absolute right-0 top-0">
                            <video class="aspect-mobile" :data-src="item.video.replace('q_auto', 'q_auto,w_360')" muted
                                playsinline loop background allow="picture-in-picture"
                                :poster="(item.video.replace('.m3u8', '.webp')).replace('q_auto', 'q_auto,so_0.2')"></video>
                        </div>
                    </div>

                    <h3
                        class="w-5/6 mb-4 text-lg font-semibold transition duration-700 text-primary dark:text-background inverted:text-background group-hover:text-current">
                        {{ item.title }}</h3>
                </div>
            </div>
        </div>
        <Contact v-if="mainStore.loaded" />
        <Footer v-show="mainStore.loaded" />


        <Modal :isOpen="!!modalStore.modalItem" @close="closeModal" contentClass="bg-primary">
            <WorkModalContent :modalItem="modalStore.modalItem" />
        </Modal>
    </div>
</template>