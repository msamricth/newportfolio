<template>
    <a ref="btn"
        class="group-hover/secondaryNav:opacity-40 text-primary/80 dark:text-background/80 dark:group-has-[a]/footer:text-primary/80 group-hover/secondaryNav:hover:opacity-100 cursor-pointer group icon-btn rounded-full h-8 w-8 transition-all duration-700"
        :aria-label="aria" target="_blank" :href="url">

        <svg fill="none" height="56" stroke-width="1.5" viewBox="0 0 24 24" width="56"
            xmlns="http://www.w3.org/2000/svg" class="group-hover/secondaryNav:opacity-80 absolute top-0 left-0 w-full h-full z-0 transition-all duration-700 group-hover:scale-[1.25]">
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <svg stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"
            class="icon-wipe-overlay absolute top-0 left-0 w-full h-full z-10 pointer-events-none text-accent group-hover:bg-deep-purple rounded-[6rem] transition-all duration-700 group-hover:scale-[1.25]">
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <Tooltips class="mt-11" message="View my GitHub account" />
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