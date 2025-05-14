<template>
    <div class="flex flex-wrap sidebar w-full lg:w-1/4 gap-2 mb-8 md:mb-0 lg:sticky lg:top-30 xl:pr-8">
        <div class="flex justify-between w-full">
            <h4 class="font-bold placeholder-line" data-splitting="words" ref="headline">Tech Stack</h4>

            <button v-if="store.isFiltered"
                class="text-primary dark:text-accent inverted:text-accent inverted:dark:text-border tag-button relative overflow-hidden rounded-[6rem] transition-all duration-700 border-transparent dark:border-current border hover:text-accent dark:hover:text-electric-purple inverted:hover:text-electric-purple inverted:dark:hover:text-accent hover:scale-[1.15] hover:opacity-80 group cursor-pointer subtle-slide-in"
                @click="store.resetFilter" :class="store.isFiltered ? 'animate  opacity-60' : ''"
                style="--theme-main-animation-delay:0s">
                <svg class="feather feather-xtransition-all duration-700 opacity-60" fill="none" height="20"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
            </button>
        </div>
        <div class="swing-in-left-fwd-slow h-[2px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition mb-3 lg:mb-5 w-full opacity-0"
            :class="tagsVisible ? 'animate ' : 'opacity-0'" v-show="tagsVisible" style="--theme-main-animation-delay:0.3s">
        </div>

        <div class="flex flex-wrap gap-1.5 items-start" v-show="tagsVisible">
            <button v-for="tag in techStack" :key="tag.tech"
                :class="[tag.textColor, store.activeFilters.includes(tag.tech) ? 'opacity-100 active wobble-ver-right' : 'opacity-70']"
                class="peer tag-button relative overflow-hidden rounded-[6rem] px-4 py-1 text-xs transition-all duration-700 bg-primary dark:bg-deep-purple inverted:bg-deep-purple border-transparent dark:border-current inverted:border-current border hover:scale-[1.08] hover:opacity-90 group cursor-pointer"
                @click="store.toggleFilter(tag.tech)">
                <span
                    class="absolute left-0 top-0 h-full w-0 bg-current opacity-20 transition-[width] duration-700 ease-linear group-hover:w-full"
                    :class="store.activeFilters.includes(tag.tech) ? 'w-full opacity-10' : ''"></span>
                <span class="relative z-10 block transition-all duration-700"
                    :class="[store.activeFilters.includes(tag.tech) ? '-translate-x-2' : '']">{{ tag.tech }}</span>
                <svg class="feather feather-x absolute right-1.5 top-1.5 transition-all duration-700"
                    :class="[store.activeFilters.includes(tag.tech) ? 'opacity-100' : 'opacity-0']" fill="none" height="10"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
            </button>
        </div>
        <div class="swing-in-left-fwd-slow h-[2px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition my-3 lg:my-5 w-full opacity-0"
            style="--theme-main-animation-delay:2s" :class="tagsVisible ? 'animate ' : 'opacity-0'" v-show="tagsVisible">
        </div>
        <button v-for="tag in techStack" :key="tag.tech"
            :class="[tag.textColor, store.activeFilters.includes(tag.tech) ? 'opacity-100 active wobble-ver-right' : 'opacity-70']"
            class="text-electric-purple dark:text-accent peer tag-button relative overflow-hidden rounded-[6rem] px-4 py-1 text-xs transition-all duration-700 bg-primary dark:bg-deep-purple inverted:bg-deep-purple border-transparent dark:border-current inverted:border-current border hover:scale-[1.08] hover:opacity-90 group cursor-pointer"
            @click="store.toggleFilter(tag.tech)">
            <span
                class="absolute left-0 top-0 h-full w-0 bg-current opacity-20 transition-[width] duration-700 ease-linear group-hover:w-full"
                :class="store.activeFilters.includes(tag.tech) ? 'w-full opacity-10' : ''"></span>
            <span class="relative z-10 block transition-all duration-700"
                :class="[store.activeFilters.includes(tag.tech) ? '-translate-x-2' : '']">{{ tag.tech }}</span>
            <svg class="feather feather-x absolute right-1.5 top-1.5 transition-all duration-700"
                :class="[store.activeFilters.includes(tag.tech) ? 'opacity-100' : 'opacity-0']" fill="none" height="10"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                width="10" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
        </button>
    </div>
</template>
  
<script setup>
import gsap from 'gsap';
import { onMounted, ref, nextTick } from 'vue';
import { useWorkStore } from '../../stores/work.js';
import placeholderJS from './../../utils/placeholder.js'
const tagsVisible = ref(null)
const headline = ref(null)
const store = useWorkStore();
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}


const techStack = ref([]);

onMounted(() => {
    techStack.value = shuffleArray(store.allTech);


    nextTick(() => {
        const header = headline.value

        new placeholderJS((header))
        const tags = document.querySelectorAll('.tag-button');
        const tl = gsap.timeline();
        tagsVisible.value = true;

        tags.forEach((tag, i) => {
            tl.fromTo(
                tag,
                {
                    opacity: 0,
                    y: 40,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power3.out',
                    onComplete: () => {
                        gsap.set(tag, { clearProps: 'all' });
                    },
                },
                i * 0.05
            );
        });
    });
});



</script>
  