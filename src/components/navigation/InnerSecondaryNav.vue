<template>
    <div
        class="secondary-nav group/secondaryNav max-w-1440 px-0 md:px-12 flex justify-end items-center relative gap-8 md:gap-6 dark:text-background inverted:text-background text-primary">
        <NuxtLink aria-label="Return Home" to="/"
            class="group relative block w-10 h-10 md:w-8 md:h-8 mr-auto transition-all duration-700">
            <svg class="absolute inset-0 stroke-current group-hover:scale-[1.25] transition-all duration-700" viewBox="0 0 512 512" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <polyline points="112 352 48 288 112 224" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="32" />
                <path d="M64,288H358c58.76,0,106-49.33,106-108V160" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="32" />
            </svg>


            <svg class="absolute inset-0 stroke-current text-accent transition-all duration-700 ease-in-out stroke-animate group-hover:scale-[1.25]"
                viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="112 352 48 288 112 224" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="32" />
                <path d="M64,288H358c58.76,0,106-49.33,106-108V160" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="32" />
            </svg>
            
        <Tooltips class="mt-10" message="Return Home" />
        </NuxtLink>
        <Mode />
        <Icons />
        <Hamburger />
    </div>
</template>


<script setup>
import Tooltips from '../buttons/Tooltips.vue'
import Icons from './Icons.vue'
import Mode from './Mode.vue'
import Hamburger from './Hamburger.vue'
defineProps({
    footer: { type: Boolean },
})
</script>
<style scoped>
.stroke-animate {
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
}

.group:hover .stroke-animate {
    stroke-dashoffset: 0;
}

.icon-wipe-overlay path {
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
    transition: stroke-dashoffset 0.9s ease-in-out;
}

.icon-btn:hover .icon-wipe-overlay path {
    stroke-dashoffset: 0;
}
</style>