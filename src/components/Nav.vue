<template>
    <header ref="navContainer" class="py-4 mx-auto absolute z-20 w-full"
        :class="{ 'fixed top-0 left-0 w-full bg-background/70 dark:bg-primary/70 backdrop-blur transition duration-700': isSticky }">
        <div
            class="nav-wrapper max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto flex items-center justify-between">
            <div class="text-primary dark:text-background nav-brand transition-all duration-700"
                :class="isSticky ? ['text-lg', 'lg:text-lg'] : ['text-2xl', 'lg:text-4xl']"><a href="/" class="animate  subtle-slide-in font-black">hi, i’m Emm.</a></div>
            <nav ref="nav" class="flex space-x-8 text-sm font-heading font-semibold"
                :class="isSticky ? [''] : ['opacity-0']">
                <a href="#about" class="hover:text-accent transition relative overflow-clip">
                    <span class="nav-item absolute">about</span>
                    <span class="opacity-0">about</span>
                </a>
                <a href="#work" class="hover:text-accent transition relative overflow-clip">
                    <span class="nav-item absolute">
                        work
                    </span>
                    <span class="opacity-0">
                        work
                    </span>
                </a>
                <a href="#contact" class="hover:text-accent transition relative overflow-clip">
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

gsap.registerPlugin(ScrollTrigger);
const navContainer = ref(null);
const isSticky = ref(false);

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
  