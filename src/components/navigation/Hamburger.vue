<template>
    <button v-if="!footer" ref="menuBTN"
        class="animate group-hover/secondaryNav:opacity-80 text-current/80  cursor-pointer transition group/menu rounded-full subtle-slide-in hamburger hamburger--arrowturn-r flex flex-col justify-center md:hover:**:text-accent duration-700 "
        aria-label="Go to menu" style="--theme-main-animation-delay:0.7s" @click.prevent="smoothScroll('#main-menu')"
        :class="menuBTNActive ? 'is-active **:text-accent' : ''">
        <div class="hamburger-box text-current transition-all duration-700 **:transition-all **:duration-700">
            <div class="hamburger-inner text-current **:transition-all **:duration-700"></div>
        </div>
    </button>
</template>


<script setup>
import { ref, nextTick } from 'vue'
import { useMainStore} from '../../stores/main.js'

const store = useMainStore()
const menuBTN = ref(null)
const menuBTNActive = ref(false)
const smoothScroll = (duration = 500) => {
    nextTick(() => {
        menuAnim()
        store.openNav()
    })

}

defineProps({
    footer: { type: Boolean },
})
const menuAnim = () => {
    menuBTNActive.value = true;
    setTimeout(() => {
        menuBTNActive.value = false;
    }, 400)
}
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
    transition: transform 0.15s ease;
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

}
</style>