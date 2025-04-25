<template>
    <header ref="navContainer" class="py-4 mx-auto absolute z-20 w-full"
        :class="{ 'fixed top-0 left-0 w-full bg-background/70 dark:bg-primary/70 inverted:bg-primary/70 inverted:dark:bg-background/70 backdrop-blur transition duration-700': isSticky }">
        <div
            class="nav-wrapper max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto flex items-center justify-between">
            <div class="text-primary dark:text-background inverted:text-background inverted:dark:text-primary nav-brand transition-all duration-700"
                :class="isSticky ? ['text-lg', 'lg:text-lg', 'hover:text-electric-purple', 'dark:hover:text-accent'] : ['text-2xl', 'lg:text-4xl']">
                <a href="/" class="animate subtle-slide-in font-black">hi, i’m Emm.</a>
            </div>
            <nav ref="nav" class="flex space-x-8 text-sm font-heading font-semibold group/nav"
                :class="isSticky ? [''] : ['opacity-0']">
                <a href="#about" class="group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 hover:text-electric-purple dark:hover:text-accent transition relative overflow-clip" @click.prevent="smoothScrollTo('#about')">
                    <span class="nav-item absolute">about</span>
                    <span class="opacity-0">about</span>
                </a>
                <a href="#work" class="group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 hover:text-electric-purple dark:hover:text-accent transition relative overflow-clip" @click.prevent="smoothScrollTo('#work')">
                    <span class="nav-item absolute">
                        work
                    </span>
                    <span class="opacity-0">
                        work
                    </span>
                </a>
                <a href="#sayHello" class="group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 hover:text-electric-purple dark:hover:text-accent transition relative overflow-clip" @click.prevent="smoothScrollTo('#sayHello')">
                    <span class="nav-item absolute">
                        say hello
                    </span>
                    <span class="opacity-0">
                        say hello
                    </span>
                </a>
            </nav>
        </div>
    </header>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import cashRegister from './../utils/cashRegister.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const trigger = ref(null);
gsap.registerPlugin(ScrollTrigger);
const navContainer = ref(null);
const isSticky = ref(false);

const smoothScrollTo = (selector) => {
    const target = document.querySelector(selector);
    if (target) {
      smoothScroll(target)
    }
};

const smoothScroll = (target, buffer = 100, duration = 500) => {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - buffer;
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

const nav = ref(null)
onMounted(() => {
    const navEl = nav.value
    const navItems = navEl.querySelectorAll('.nav-item')

    const tl = gsap.timeline({ paused: true })
        .fromTo(navEl, {
            alpha: 0,
        }, {
            alpha: 1,
        });
    navItems.forEach(function (navItem) {
        const linkAnimation = new cashRegister(navItem);
        tl.fromTo(navItem, {
            alpha: 0
        }, {
            alpha: 1,
            ease: 'cubic-bezier(.215, .61, .355, 1.000)',
            duration: 0.35,
            stagger: 0.01,
            onComplete: () => {
                linkAnimation.checkOut(navItem)
            }
        })
    });


    ScrollTrigger.create({
        trigger: navEl,
        start: 'top 5%',
        onEnter: () => {
            isSticky.value = true
            tl.play()
        },
        onLeaveBack: () => {
            isSticky.value = false
            tl.reverse()
        },
    })
})
</script>
  
<style scoped>
.nav {
    --theme-main-animation-delay: 0;
}

.fixed {
    position: fixed;
}
</style>
  