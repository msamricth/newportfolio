<style scoped>
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

.hamburger--emphatic .hamburger-inner {
    transition: background-color 0.125s 0.175s ease-in;
}

.hamburger--emphatic .hamburger-inner::before {
    left: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
}

.hamburger--emphatic .hamburger-inner::after {
    top: 10px;
    right: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
}

.hamburger--emphatic.is-active .hamburger-inner {
    transition-delay: 0s;
    transition-timing-function: ease-out;
    background-color: transparent !important;
}

.hamburger--emphatic.is-active .hamburger-inner::before {
    left: -80px;
    top: -80px;
    transform: translate3d(80px, 80px, 0) rotate(45deg);
    transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.hamburger--emphatic.is-active .hamburger-inner::after {
    right: -80px;
    top: -80px;
    transform: translate3d(-80px, 80px, 0) rotate(-45deg);
    transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
<template>
    <button v-if="!footer" ref="menuBTN"
        class="animate text-current/80 relative cursor-pointer transition group/menu hamburger hamburger--emphatic flex flex-col justify-center duration-700 group"
        aria-label="Go to menu" style="--theme-main-animation-delay:0.7s" @click.prevent="openNav()"
        :class="store.mobileNav ? 'is-active **:text-accent' : ''">
        <div class="hamburger-box">
            <div class="hamburger-inner"></div>
        </div>
    </button>
</template>
<script setup>
import { ref, nextTick } from 'vue'
import { useMainStore } from '@/stores/main.js'
import { AnimationFrame } from '@/utils/AnimationFrame.js'
const store = useMainStore()
const menuBTN = ref(null)
const openNav = () => {
    nextTick(() => {
        store.mobileNav = !store.mobileNav
    })

}

defineProps({
    footer: { type: Boolean },
})

</script>