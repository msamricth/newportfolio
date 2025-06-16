<template>

    <label class="inline-flex items-start cursor-pointer group max-md:scale-[1.2] mt-0.5 mx-1 md:mx-0 group-hover/secondaryNav:opacity-80
 transition-opacity duration-700 group-hover/secondaryNav:hover:opacity-100 animate subtle-slide-in"
        :for="footer ? 'mode-footer' : 'mode'">
        <span
            class="text-xl font-medium animate subtle-slide-in block relative cursor-pointer group-icon transition-all group"
            style="--theme-main-animation-delay:0.1s" @click="store.toggleUseMode()"
            :class="{ 'scale-140': !store.useMode }">
            <svg width="1.6rem" :class="moonVisible
                ? 'opacity-100'
                : 'opacity-0 duration-0'" class="group-hover:text-accent transition-all" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title />
                <path
                    d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z"
                    fill="currentColor" />
            </svg>
            <svg width="1.6rem" :class="sunVisible
                ? 'opacity-100'
                : 'opacity-0 duration-0'"
                class="group-hover:text-accent group-hover:rotate-360 transition absolute top-0" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title />
                <circle cx="12" cy="12" fill="currentColor" r="5" />
                <path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" fill="currentColor" />
                <path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" fill="currentColor" />
                <path
                    d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z"
                    fill="currentColor" />
                <path
                    d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z"
                    fill="currentColor" />
                <path d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z" fill="currentColor" />
                <path d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z" fill="currentColor" />
                <path
                    d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z"
                    fill="currentColor" />
                <path
                    d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z"
                    fill="currentColor" />
            </svg>
            <Tooltips message="Change light/dark mode" v-if="!store.useMode" class="scale-70" />
        </span>
        <span class="sr-only">Dark Mode</span>

        <input type="checkbox" class="sr-only peer" :checked="store.isDark"
            @change="store.toggleTheme($event.target.checked)" :name="footer ? 'mode-footer' : 'mode'"
            :id="footer ? 'mode-footer' : 'mode'" />

        <div class="ms-3 relative w-11 h-6 bg-primary/60 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent inverted:peer-focus:ring-accent dark:peer-focus:ring-accent rounded-full peer inverted:bg-gray-700 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-accent after:border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all inverted:border-gray-600 dark:border-gray-600 peer-checked:bg-border inverted:peer-checked:bg-border dark:peer-checked:bg-border animate swing-in-left-fwd-slow"
            style="--theme-main-animation-delay:0.3s" v-if="store.useMode">
        </div>
        <Tooltips :message="`Change ${store.darkMode} mode`" v-if="store.useMode" class="mt-10" />
    </label>
</template>


<script setup>
import { useMainStore } from '../../stores/main.js'
import { onMounted, ref, computed, watchEffect } from 'vue'
import Tooltips from '../buttons/Tooltips.vue'
const store = useMainStore()
defineProps({
    footer: { type: Boolean },
})
const sunVisible = computed(() =>
  (store.useMode && !store.isDark) || (!store.useMode && !store.fold)
)

const moonVisible = computed(() =>
  (store.useMode && store.isDark) || (!store.useMode && store.fold)
)

//const key = computed(() => `${store.useMode}-${store.isDark}-${store.fold}`)
onMounted(async () => {
    await nextTick()
    
})
</script>