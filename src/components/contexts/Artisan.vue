<template>
    <div class="md:min-h-[60vh]" ref="artisan">
        <div class="code-artisan lg:my-34 my-18  md:w-3/4 mx-auto relative md:sticky top-[20%]">
            <div class="swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mb-4 delay-700"
                :class="isArtisan ? ['animate'] : ['opacity-0']"></div>
            <h3 class="font-heading font-semibold text-2xl lg:text-3xl leading-snug placeholder-line"
                data-splitting="words">
                Code artisan forging WordPress & Vue.js experiences by day,
                crafting dirt jumps & trails for bikes by night—
                UX zeal meets mud-and-grit creativity.
            </h3>
            <div class="swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mt-4 delay-700"
                :class="isArtisan ? ['animate'] : ['opacity-0']"></div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import PlaceholderJS from '../../utils/placeholder.js';
import { useNuxtApp } from '#app'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const { $gsap: gsap } = useNuxtApp()
const isArtisan = ref(false);
const artisan = ref(null)

onMounted(async () => {
    await nextTick()
    
    const artisanEl = artisan.value;
    const artisanElHeadline = artisanEl.querySelector('h3');
    const artisanElHeadlineAnim = new PlaceholderJS(artisanElHeadline, { manual: true });

    artisanElHeadlineAnim.getTimeline().progress(1).reverse();
    ScrollTrigger.create({
        trigger: artisanEl,
        start: 'top 85%',
        onEnter: () => {
            isArtisan.value = true;
            artisanElHeadlineAnim.play();
        },
        onLeaveBack: () => {
            isArtisan.value = false;
            artisanElHeadlineAnim.getTimeline().progress(1).reverse();
        },
    });
    ScrollTrigger.create({
        trigger: artisanEl,
        start: 'top 10%',
        onEnter: () => {
            document.body.classList.remove('dark')
        },
        onLeaveBack: () => {
            document.body.classList.add('dark')
        },
    });


});
</script>