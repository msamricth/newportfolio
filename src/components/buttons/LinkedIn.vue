<template>
    <a ref="btn"
        class="group-hover/secondaryNav:opacity-40 text-primary/80 inverted:text-background/80 dark:group-has-[a]/footer:text-primary/80 dark:text-background/80 group-hover/secondaryNav:hover:opacity-100 cursor-pointer group icon-btn rounded-full h-8 w-8 transition-all duration-700"
        :aria-label="aria" target="_blank" :href="url">

        <svg class="group-hover/secondaryNav:opacity-80 absolute top-0 left-0 w-full h-full z-0 transition-all group-hover:scale-[1.25] duration-700" stroke-width="1.5" width="24" height="24"
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.2792 8.73516C16.3984 8.73516 17.4717 9.17973 18.263 9.97108C19.0544 10.7624 19.4989 11.8357 19.4989 12.9549V17.8778H16.6858V12.9549C16.6858 12.5818 16.5376 12.224 16.2738 11.9603C16.0101 11.6965 15.6523 11.5483 15.2792 11.5483C14.9062 11.5483 14.5484 11.6965 14.2847 11.9603C14.0209 12.224 13.8727 12.5818 13.8727 12.9549V17.8778H11.0595V12.9549C11.0595 11.8357 11.5041 10.7624 12.2955 9.97108C13.0868 9.17973 14.1601 8.73516 15.2792 8.73516Z"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.43329 9.43844H8.24642V17.8778H5.43329V9.43844Z" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" />
            <path
                d="M6.83985 7.32859C7.21289 7.32859 7.57066 7.1804 7.83444 6.91662C8.09822 6.65284 8.24642 6.29507 8.24642 5.92203C8.24642 5.54898 8.09822 5.19122 7.83444 4.92744C7.57066 4.66365 7.21289 4.51546 6.83985 4.51546C6.46681 4.51546 6.10904 4.66365 5.84526 4.92744C5.58148 5.19122 5.43329 5.54898 5.43329 5.92203C5.43329 6.29507 5.58148 6.65284 5.84526 6.91662C6.10904 7.1804 6.46681 7.32859 6.83985 7.32859Z"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.4447,11.9883
     a10.4564,10.4564 0 1,1 -20.9128,0
     a10.4564,10.4564 0 1,1 20.9128,0" stroke="currentColor" fill="none" />
        </svg>

        <svg class="icon-wipe-overlay absolute top-0 left-0 w-full h-full z-10 pointer-events-none text-accent group-hover:bg-deep-purple group-hover:scale-[1.25] rounded-[6rem] transition-all duration-700"
            stroke-width="1.5" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.2792 8.73516C16.3984 8.73516 17.4717 9.17973 18.263 9.97108C19.0544 10.7624 19.4989 11.8357 19.4989 12.9549V17.8778H16.6858V12.9549C16.6858 12.5818 16.5376 12.224 16.2738 11.9603C16.0101 11.6965 15.6523 11.5483 15.2792 11.5483C14.9062 11.5483 14.5484 11.6965 14.2847 11.9603C14.0209 12.224 13.8727 12.5818 13.8727 12.9549V17.8778H11.0595V12.9549C11.0595 11.8357 11.5041 10.7624 12.2955 9.97108C13.0868 9.17973 14.1601 8.73516 15.2792 8.73516Z"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.43329 9.43844H8.24642V17.8778H5.43329V9.43844Z" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" />
            <path
                d="M6.83985 7.32859C7.21289 7.32859 7.57066 7.1804 7.83444 6.91662C8.09822 6.65284 8.24642 6.29507 8.24642 5.92203C8.24642 5.54898 8.09822 5.19122 7.83444 4.92744C7.57066 4.66365 7.21289 4.51546 6.83985 4.51546C6.46681 4.51546 6.10904 4.66365 5.84526 4.92744C5.58148 5.19122 5.43329 5.54898 5.43329 5.92203C5.43329 6.29507 5.58148 6.65284 5.84526 6.91662C6.10904 7.1804 6.46681 7.32859 6.83985 7.32859Z"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.4447,11.9883
     a10.4564,10.4564 0 1,1 -20.9128,0
     a10.4564,10.4564 0 1,1 20.9128,0" stroke="currentColor" fill="none" />
        </svg>
        <Tooltips class="mt-11" message="View my LinkIn account" />
    </a>
</template>
<script setup>
import Tooltips from './Tooltips.vue'
import { onMounted, ref } from 'vue'
const props = defineProps({
    url: String,
    aria: String,
})
const btn = ref(null)

onMounted(() => {
    const mobileAnims = () => {
        if (window.innerWidth >= 768) return;
        const btnEl = btn.value;

        const overlay = btnEl.querySelector('.icon-wipe-overlay');
        if (!overlay) return;
        const paths = overlay.querySelectorAll('path');
        paths.forEach((path) => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            path.style.transition = 'stroke-dashoffset 1s ease-out';
        });

        btnEl.addEventListener('click', (e) => {
            e.preventDefault();
            paths.forEach((path) => {
                path.style.strokeDashoffset = '0';
            });
            setTimeout(() => {
                window.open(btnEl.href, '_blank');
            }, 600);
            setTimeout(() => {
                paths.forEach((path) => {
                    path.style.strokeDashoffset = path.style.strokeDasharray;
                });
            }, 2000);
        });
    }
    mobileAnims();

})
</script>