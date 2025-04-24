<template>
    <div class="secondary-nav group/secondaryNav max-w-1440 mx-auto px-8 md:px-12 flex justify-end items-start relative gap-6">
        <label class="inline-flex items-start cursor-pointer">
            <span class="me-3 text-xl font-medium text-gray-800 animate subtle-slide-in" style="--theme-main-animation-delay:0.1s">
                {{ isDark ? '🌙' : '🌞' }}
            </span>
            <input type="checkbox" class="sr-only peer" v-model="isDark" @change="toggleTheme" />
            <div
                class="relative w-11 h-6 bg-primary/60 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent inverted:peer-focus:ring-accent rounded-full peer inverted:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-accent after:border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all inverted:border-gray-600 peer-checked:bg-border inverted:peer-checked:bg-border animate subtle-slide-in" style="--theme-main-animation-delay:0.3s">
            </div>
        </label>

        <a class="animate group-hover/secondaryNav:opacity-40 text-primary/80 inverted:text-background/80 group-hover/secondaryNav:hover:opacity-100 cursor-pointer hover:bg-accent hover:rotate-270 transition group/git rounded-full subtle-slide-in"  aria-label="Emm's Github account"
            style="--theme-main-animation-delay:0.5s" target="_blank" href="https://github.com/msamricth">
            <svg class="group-hover/git:text-primary inverted:group-hover/git:text-background group-hover/git:rotate-90 transition h-6 w-6"
                enable-background="new 0 0 32 32" id="Layer_1" version="1.0" viewBox="0 0 32 32" 
                xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path clip-rule="evenodd"
                    d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
                    class="group-hover/git:stroke-current transition fill-current" fill-rule="evenodd" />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
            </svg>
        </a>
        <a class="animate group-hover/secondaryNav:opacity-40 text-primary/80 group-hover/secondaryNav:hover:opacity-100 cursor-pointer hover:rotate-270 transition group/linkedin rounded-full subtle-slide-in"  aria-label="Emm's Linkedin account"
            style="--theme-main-animation-delay:0.6s" target="_blank" href="https://www.linkedin.com/in/emmtalarico/">
       <svg class="fill-primary/80 inverted:fill-background/80 group-hover/linkedin:fill-primary inverted:group-hover/linkedin:fill-accent group-hover/linkedin:rotate-90 transition h-6 w-6" enable-background="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"/><path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"/></g></svg>
       </a>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
    document.body.classList.toggle('inverted', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
    const stored = localStorage.getItem('theme')
    isDark.value = stored === 'dark'
    document.body.classList.toggle('inverted', isDark.value)
})
</script>
