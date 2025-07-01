<template>
    <div class="transition-all duration-500 group opacity-0 translate-y-10 work-item md:min-h-dvh lg:min-h-[50dvh] motionless:translate-y-0 motionless:opacity-100" ref="workSection">
        <div class="relative flex flex-col items-center justify-center mx-auto rounded-xl md:max-w-4xl"
            @mouseenter="onHoverIn" @mouseleave="onHoverOut" :class="item.hoverColor">
            <div class="relative">
                <a :href="Link" @click.prevent="handleClick" class="absolute z-20 w-full h-full"></a>
                <div class="flex flex-col items-start justify-center gap-8 md:flex-row">
                    <img crossorigin="anonymous" :src="optimizedSrc" :srcset="srcSet"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 896px"
                        class="-mx-8 max-md:max-w-[calc(100%+64px)] w-[calc(100%+64px)] md:w-full object-cover md:rounded-[3rem] transition-all cursor-pointer duriation-900"
                        width="896" height="504" />

                </div>
                <div class="flex flex-col items-start justify-end w-full pt-6 overflow-hidden md:px-6"
                    @mouseover="isHovered = true" @mouseleave="isHovered = false">
                    <div class="flex flex-col justify-between w-full gap-6">
                        <div
                            class="flex flex-col justify-between text-center cursor-pointer md:text-start md:pr-8 lg:pr-18 work-item-entry">
                            <h3
                                class="text-primary dark:text-background text-lg font-normal **:**:transition-none duration-0 subtle-slide-in h4 lg:duration-700 motionless:group-hover:text-current motionless:**:**:opacity-100">
                                {{
                                    item.client }}</h3>
                            <h4
                                class="text-primary dark:text-background text-2xl font-bold h3 mb-0 subtle-slide-in flex motionless:**:**:inline motionless:**:**:visible **:**:inline-flex justify-center md:justify-start motionless:group-hover:text-current motionless:lg:duration-700">
                                {{
                                    item.projectTitle
                                }}
                            </h4>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>

import { ref, onMounted, computed, nextTick, watch } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@splidejs/vue-splide/css';
import { useMainStore } from '@/stores/main.js'
import Splitting from '@/utils/splitting.js'
import { newPromise } from '@/utils/nextPromise';
const store = useMainStore()
const workSection = ref(null);
const isHovered = ref([false])
const loaded = ref(false)

let chars = []

const getSrc = computed(() => (width) => {
    return store.ready
        ? props.item.image.replace('/q_auto,f_auto', `/q_auto,f_auto,w_${width}`)
        : props.item.image.replace('upload/q_auto,f_auto', `upload/e_pixelate,q_auto:low,f_auto,e_grayscale,w_${width}`);
});

const optimizedSrc = computed(() => getSrc.value(896));
let animTL = null
let textTLs = []

const srcSet = computed(() =>
    [480, 768, 896, 1280].map(w => `${getSrc.value(w)} ${w}w`).join(', ')
);

const props = defineProps({
    item: { type: Object, required: true },
    Link: String,
    onClick: Function,
})
const handleClick = () => {

    if (!store.reduceMotion) {
        onHoverIn();
        props.onClick?.()
        onHoverOut()
    } else {
        props.onClick?.()
    }
}
const onHoverIn = () => {
    if (!chars.length || store.reduceMotion) return null
    if (!store.reduceMotion) {
        const textEntry = workSection.value.querySelector('.work-item-entry')
        const textElms = workSection.value.querySelectorAll('.work-item-entry h3, .work-item-entry h4')
        const colorCLass = props.item.textColor
        textElms.forEach((textEl, i) => {
            gsap.timeline().fromTo(
                chars,
                {
                    x: () => gsap.utils.random(-50, 50),
                    y: () => gsap.utils.random(-40, 0),
                    className: 'char text-current',
                    autoAlpha: 0,
                },
                {
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    className: `char ${colorCLass}`,
                    ease: 'power3.out',
                    duration: 0.3,
                    stagger: {
                        amount: 0.05,
                        from: 'random',
                    },
                }, "+=0.05"
            )

        }
        )
    }
}
const onHoverOut = () => {
    const colorCLass = props.item.textColor
    if (!chars.length || store.reduceMotion) return null

    gsap.timeline().fromTo(
        chars,
        {
            className: `char ${colorCLass}`,
        },
        {
            className: 'char text-current',
            ease: 'power3.out',
            duration: 0.5,
            stagger: {
                amount: 0.3,
                from: 'random',
            },
        }, "+=0.15"
    )
}
async function animateSquares() {
    if (store.reduceMotion === true || !workSection.value) return;
    const workSectionEl = workSection.value;
    animTL = gsap.timeline({
        scrollTrigger: {
            trigger: workSectionEl,
            start: 'top 60%',
            toggleActions: 'play none none none',
            once: false,
        },
    });

    const colorCLass = props.item.textColor;
    const textElms = workSectionEl.querySelectorAll('.work-item-entry h3, .work-item-entry h4');
    const textEntry = workSectionEl.querySelector('.work-item-entry');

    animTL.fromTo(
        workSectionEl,
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
        }
    );

    textTLs.push(animTL);
    textElms.forEach((textEl) => {
        const split = Splitting({ target: textEl, by: 'chars' })[0];
        chars = split?.chars || [];
        if (!chars.length) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textEntry,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: false,
            },
        });

        tl.fromTo(
            chars,
            {
                x: () => gsap.utils.random(-50, 50),
                y: () => gsap.utils.random(-40, 0),
                autoAlpha: 0,
            },
            {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: 'power3.out',
                duration: 0.3,
                stagger: {
                    amount: 0.05,
                    from: 'random',
                },
            }
        )
            .fromTo(
                chars,
                { className: 'char text-current' },
                {
                    className: `char ${colorCLass}`,
                    ease: 'power3.out',
                    duration: 0.3,
                    stagger: { amount: 0.3, from: 'random' },
                },
                '-=0.25'
            )
            .fromTo(
                chars,
                { className: `char ${colorCLass}` },
                {
                    className: 'char text-current',
                    ease: 'power3.out',
                    duration: 0.5,
                    stagger: { amount: 0.3, from: 'random' },
                },
                '+=0.15'
            );

        textTLs.push(tl);
    });
}

watch(
    () => props.item.image,
    async (valid) => {
        await nextTick();
        await newPromise();
        if (!valid || !workSection.value) return;

        const img = workSection.value.querySelector('img');
        if (!img) return;

        const run = () => {
            console.log()
            if (!store.reduceMotion) animateSquares();
        };

        if (img.complete && img.naturalWidth !== 0) {
            run();
        } else {
            img.addEventListener('load', run, { once: true });
        }
    },
    { immediate: true }
);
watch(() => store.reduceMotion, async (isReduced) => {
    await nextTick();

    await newPromise();
    //  ScrollTrigger.getAll().forEach(t => t.kill());
    textTLs.forEach(tl => tl.kill());
    textTLs = [];

    if (store.reduceMotion === true) {
        if (animTL) {
            animTL.kill();
            animTL = null;
        }
        gsap.set(workSection.value, { clearProps: 'all' });
        if (chars.length) {
            const textElms = workSection.value.querySelectorAll('.work-item-entry h3, .work-item-entry h4')
            textElms.forEach((textEl, i) => {
                gsap.set(textEl.querySelectorAll('.char'), { clearProps: 'all', className: 'char' });
            })
        }
    } else {
        await animateSquares();
    }
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