<template>
    <div class="flex flex-wrap w-full gap-2 mb-8 sidebar lg:w-1/4 md:mb-0 lg:sticky lg:top-30 xl:pr-8" ref="sidebar">
        <div class="flex justify-between w-full">
            <h4 class="font-bold placeholder-line h3" data-splitting="words" ref="headline">Tech Stack</h4>

            <button v-if="store.isFiltered"
                class="text-primary dark:text-accent inverted:text-accent inverted:dark:text-border tag-button relative overflow-hidden rounded-[6rem] transition-all duration-700 border-transparent dark:border-current border hover:text-accent dark:hover:text-electric-purple inverted:hover:text-electric-purple inverted:dark:hover:text-accent hover:scale-[1.15] hover:opacity-80 group cursor-pointer subtle-slide-in w-8 flex justify-center items-center"
                @click="store.resetFilter" :class="store.isFiltered ? 'animate  opacity-60' : ''"
                style="--theme-main-animation-delay:0s">
                <svg class="duration-700 feather feather-xtransition-all opacity-60" fill="none" height="20"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
            </button>
        </div>
        <div class="swing-in-left-fwd-slow h-[2px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition mb-3 lg:mb-5 w-full opacity-0"
            :class="tagsVisible ? 'animate ' : 'opacity-0'" v-show="tagsVisible"
            style="--theme-main-animation-delay:0.3s">
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
                    :class="[store.activeFilters.includes(tag.tech) ? 'opacity-100' : 'opacity-0']" fill="none"
                    height="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
            </button>
        </div>
        <div class="swing-in-left-fwd-slow h-[2px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition my-3 lg:my-5 w-full opacity-0"
            style="--theme-main-animation-delay:2s" :class="tagsVisible ? 'animate ' : 'opacity-0'"
            v-show="tagsVisible">
        </div>
        <button
            :class="store.activeFilters.includes('case-study') ? 'opacity-100 active wobble-ver-right' : 'opacity-70'"
            class="text-electric-purple dark:text-accent peer tag-button relative overflow-hidden rounded-[6rem] px-4 py-1 text-xs transition-all duration-700 bg-primary dark:bg-deep-purple border-transparent dark:border-current inverted:border-current border hover:scale-[1.08] hover:opacity-90 group cursor-pointer"
            @click="store.toggleFilter('case-study')">
            <span
                class="absolute left-0 top-0 h-full w-0 bg-current opacity-20 transition-[width] duration-700 ease-linear group-hover:w-full"
                :class="store.activeFilters.includes('case-study') ? 'w-full opacity-10' : ''"></span>
            <span class="relative z-10 block transition-all duration-700"
                :class="[store.activeFilters.includes('case-study') ? '-translate-x-2' : '']">Case Studies</span>
            <svg class="feather feather-x absolute right-1.5 top-1.5 transition-all duration-700"
                :class="[store.activeFilters.includes('case-study') ? 'opacity-100' : 'opacity-0']" fill="none"
                height="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
        </button>
    </div>
</template>
<script setup>
import gsap from 'gsap';
import { onMounted, ref, nextTick, watch } from 'vue';
import { useWorkStore } from '@/stores/work.js';
import { useMainStore } from '../../stores/main';
import placeholderJS from '@/utils/placeholder.js'

const tagsVisible = ref(null)
const headline = ref(null)
const store = useWorkStore()
const techStack = ref([])
const sidebar = ref(null)
const mainStore = useMainStore()
let tl = null

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

async function clearAnimations() {
    if (tl) tl.kill()
    tl = null
    await nextTick()

    if (sidebar.value) {
        const tags = sidebar.value.querySelectorAll('.tag-button')
        if (!tags.length) return
        tags.forEach(tag => {
            gsap.set(tag, { clearProps: 'all' })
        })
    }

}

async function animateIn() {
    await nextTick()

    if (!sidebar.value) return
    const tags = sidebar.value.querySelectorAll('.tag-button')
    tagsVisible.value = true

    tl = gsap.timeline()
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
                    gsap.set(tag, { clearProps: 'all' })
                },
            },
            i * 0.05
        )
    })
}
onMounted(async () => {
    await nextTick()
    techStack.value = shuffleArray(store.allTech)
})
watch(
    [() => store.allTech, () => mainStore.loaded],
    async (newVal, loaded) => {
        if (!newVal?.length || !loaded) return
       // techStack.value = shuffleArray(store.allTech)
        await nextTick()
        
        if(headline.value) new placeholderJS(headline.value)
        if (!mainStore.reduceMotion) {animateIn()}
        else {
            tagsVisible.value = true
        }
    },
    { immediate: true }
)

watch(
    () => mainStore.reduceMotion,
    async (rm) => {
        await clearAnimations()
        if (!rm && techStack.value.length) {
            await animateIn()
        }
    },
    { immediate: true }
)
</script>
