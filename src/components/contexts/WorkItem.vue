<template>
    <div class="transition-all duration-500 group opacity-0 translate-y-10 work-item md:min-h-dvh  mb-12" ref="workSection">
        <div class="relative rounded-xl overflow-hidden flex flex-col justify-center items-center md:max-w-4xl mx-auto"
            @click="handleClick" @mouseenter="onHoverIn" @mouseleave="onHoverOut" :class="item.hoverColor">
            <div class="flex flex-col md:flex-row justify-center items-start gap-8">
                <img crossorigin="anonymous"
                    :src="!store.ready ? item.image.replace('upload/q_auto,f_auto', 'upload/e_pixelate,q_auto:low,f_auto,e_grayscale,w_1260') : item.image.replace('/q_auto,f_auto', '/q_auto,f_auto,w_1260')"
                    class="w-full object-cover rounded-[3rem] transition-all cursor-pointer duriation-900" />

            </div>
            <div class="flex flex-col justify-end items-start pt-6 md:px-6 transition-all duriation-700 w-full"
                @mouseover="isHovered = true" @mouseleave="isHovered = false">
                <div class="flex flex-col md:flex-row items-end gap-6 justify-between w-full">
                    <div class="flex flex-col justify-between pr-8 lg:pr-18 cursor-pointer work-item-entry">
                        <h3 class="text-lg font-normal subtle-slide-in h4 transition-colors duration-1000">{{ item.client }}</h3>
                        <h4 class="text-primary dark:text-background text-2xl font-bold h3 mb-0 subtle-slide-in flex **:**:inline-flex">{{
                            item.projectTitle
                        }}
                        </h4>
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
const store = useMainStore()
const workSection = ref(null);
const isHovered = ref([false])
const loaded = ref(false)

let chars = []


const props = defineProps({
    item: { type: Object, required: true },
    onClick: Function,
})
const handleClick = () => {
    onHoverIn();
    setTimeout(() => {
        props.onClick?.()
        onHoverOut()
    }, 300)
}
const onHoverIn = () => {

    const textEntry = workSection.value.querySelector('.work-item-entry')
    const textElms = workSection.value.querySelectorAll('.work-item-entry h3, .work-item-entry h4')
    const colorCLass = props.item.textColor
    textElms.forEach((textEl, i) => {
        gsap.timeline().fromTo(
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
            }, "+=0.05"
        )
            .fromTo(
                chars,
                {
                    className: 'char text-current',
                },
                {
                    className: `char ${colorCLass}`,
                    ease: 'power3.out',
                    duration: 0.3,
                    stagger: {
                        amount: 0.3,
                        from: 'random',
                    },
                }, "-=0.25"
            )
    }
    )
}
const onHoverOut = () => {
    const colorCLass = props.item.textColor
    if (!chars.length) return null

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
function animateSquares() {
    nextTick(() => {
        const workSectionEl = workSection.value;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: workSectionEl,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
                once: false,
            },
        })
        const colorCLass = props.item.textColor
        const textElms = workSectionEl.querySelectorAll('.work-item-entry h3, .work-item-entry h4')
        const textEntry = workSectionEl.querySelector('.work-item-entry')
        tl.fromTo(
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
        textElms.forEach((textEl, i) => {
            const split = Splitting({ target: textEl, by: 'chars' })[0]
            chars = split?.chars || []

            if (!chars.length) return null

            gsap.timeline({
                scrollTrigger: {
                    trigger: textEntry,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                    once: false,
                },
            }).fromTo(
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
                }, "+=0.05"
            )
                .fromTo(
                    chars,
                    {
                        className: 'char text-current',
                    },
                    {
                        className: `char ${colorCLass}`,
                        ease: 'power3.out',
                        duration: 0.3,
                        stagger: {
                            amount: 0.3,
                            from: 'random',
                        },
                    }, "-=0.25"
                )
                .fromTo(
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
        });
    })
}
watch(() => props.item.image, async () => {
    await nextTick();
    const img = workSection.value?.querySelector('img');
    if (!img) return;

    if (img.complete && img.naturalWidth !== 0) {
        animateSquares();
    } else {
        img.addEventListener('load', animateSquares, { once: true });
    }
}, { immediate: true });
onMounted(async () => {
    await nextTick()


    const workSectionEl = workSection.value;


    ScrollTrigger.create({
        trigger: workSectionEl,
        start: 'top 20%',
        end: 'bottom bottom',
        onEnter: () => {
            store.toggleFold(true)
            loaded.value = true;
        }
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