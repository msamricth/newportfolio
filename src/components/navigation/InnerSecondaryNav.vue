<template>
    <div
        class="secondary-nav group/secondaryNav max-w-1440 px-0 md:px-12 flex justify-end items-center relative gap-8 md:gap-6 dark:text-background inverted:text-background text-primary">
        <RouterLink aria-label="Return Home" to="/"
            class="group relative block w-10 h-10 md:w-8 md:h-8 mr-auto hover:scale-[1.25] transition-all duration-700">
            <svg class="absolute inset-0 stroke-current" viewBox="0 0 512 512" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <polyline points="112 352 48 288 112 224" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="32" />
                <path d="M64,288H358c58.76,0,106-49.33,106-108V160" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="32" />
            </svg>


            <svg class="absolute inset-0 stroke-current text-accent transition-all duration-700 ease-in-out stroke-animate"
                viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="112 352 48 288 112 224" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="32" />
                <path d="M64,288H358c58.76,0,106-49.33,106-108V160" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="32" />
            </svg>
        </RouterLink>
        <Mode />
        <Icons />
        <button ref="menuBTN"
            class="animate group-hover/secondaryNav:opacity-40 text-primary/80 group-hover/secondaryNav:hover:opacity-100 cursor-pointer transition group/menu rounded-full subtle-slide-in hamburger hamburger--arrowturn-r flex flex-col justify-center md:hover:**:text-accent"
            aria-label="Go to menu" style="--theme-main-animation-delay:0.6s" @click.prevent="smoothScroll('#main-menu')"
            :class="menuBTNActive ? 'is-active **:text-accent' : ''">
            <div class="hamburger-box">
                <div class="hamburger-inner"></div>
            </div>
        </button>

    </div>
</template>


<script setup>
import { RouterLink } from 'vue-router'
import Icons from './Icons.vue'
import Mode from './Mode.vue'
import { onMounted, computed, ref } from 'vue'
const menuBTN = ref(null)
const menuBTNActive = ref(false)

const smoothScroll = (target, buffer = 100, duration = 500) => {
    menuAnim()
    const targetPosition = 400 - buffer;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeInOutCubic = progress < 0.5
            ? 4 * progress ** 3
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * easeInOutCubic);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}


const menuAnim = () => {
    menuBTNActive.value = true;
    setTimeout(() => {
        menuBTNActive.value = false;
    }, 400)
}

onMounted(() => {
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

.hamburger {
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
    background-color: currentColor;
}

.hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
}

.hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: currentColor;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
    content: "";
    display: block;
}

.hamburger-inner::before {
    top: -10px;
}

.hamburger-inner::after {
    bottom: -10px;
}

.hamburger--arrowturn-r.is-active .hamburger-inner {
    transform: rotate(-90deg);
}

.hamburger--arrowturn-r.is-active .hamburger-inner::before {
    transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
}

.hamburger--arrowturn-r.is-active .hamburger-inner::after {
    transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
}

@media screen and (min-width: 768px) {
    .hamburger--arrowturn-r:hover .hamburger-inner {
        transform: rotate(-90deg);
    }

    .hamburger--arrowturn-r:hover .hamburger-inner::before {
        transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
    }

    .hamburger--arrowturn-r:hover .hamburger-inner::after {
        transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
    }

}</style>