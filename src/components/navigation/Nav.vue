<template>
    <div ref="sentinal"></div>
    <header ref="navContainer" class="py-4 mx-auto absolute z-20 w-full"
        :class="{ 'fixed top-0 left-0 w-full bg-background/70 dark:bg-primary/70 inverted:bg-primary/70 inverted:dark:bg-background/70 backdrop-blur transition duration-700': isSticky }">
        <div
            class="nav-wrapper max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto flex items-center justify-between">
            <div ref="navBrand"
                class="text-primary dark:text-background inverted:text-background inverted:dark:text-primary nav-brand transition-all duration-700"
                :class="isSticky ? ['text-lg', 'lg:text-lg', 'hover:text-electric-purple', 'dark:hover:text-accent'] : ['text-2xl', 'lg:text-4xl']">
                <RouterLink aria-label="Return Home" to="/" class="text-nowrap animate subtle-slide-in font-black block "
                    @mouseenter="onBrandHoverIn">
                    hi, i’m Emm.</RouterLink>
            </div>
            <nav ref="nav"
                class="flex space-x-8 text-sm font-heading font-semibold group/nav ml-auto text-primary dark:text-background inverted:text-background inverted:dark:text-primary "
                :class="isSticky ? [''] : ['opacity-0']">
                <RouterLink
                    class="group-hover/nav:opacity-60 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700 "
                    to="/about">
                    <span class="nav-item" @mouseenter="onNavHoverIn">about</span>
                </RouterLink>
                <RouterLink
                    class="group-hover/nav:opacity-60 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700 "
                    to="/work">
                    <span class="nav-item" @mouseenter="onNavHoverIn">work</span>
                </RouterLink>
                <a href="#sayHello"
                    class="group-hover/nav:opacity-60 group-hover/nav:hover:opacity-100  transition relative overflow-clip duration-700"
                    @click.prevent="smoothScrollTo('#sayHello')">
                    <span class="nav-item" @mouseenter="onNavHoverIn">say hello</span>
                </a>
            </nav>
        </div>
    </header>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import gsap from 'gsap';
import { RouterLink } from 'vue-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';

const navBrand = ref(null);
gsap.registerPlugin(ScrollTrigger);
const navContainer = ref(null);
const isSticky = ref(false);
const nav = ref(null)
const sentinal = ref(null)

const isDesktop = ref(window.innerWidth >= 620)
const stickyObserver = ref(null)
const tl = gsap.timeline({ paused: true })
function handleResize() {
    isDesktop.value = window.innerWidth >= 620
    console.log('isDesktop.value: ' + isDesktop.value)
    console.log('window.innerWidth: ' + window.innerWidth)
    if (isSticky.value) {
        tl.restart();
    } else {
        tl.timeScale(3).reverse()
    }
}
const onBrandHoverIn = (event) => {
    if (!isSticky.value) return;
    const targetEl = event.target;
    const chars = targetEl.querySelectorAll('.char'); // Correct class from Splitting

    if (!chars.length) return;

    const tl = gsap.timeline();

    tl.fromTo(
        chars,
        {
            x: () => gsap.utils.random(-50, 50),
            y: () => gsap.utils.random(-40, 0),
            autoAlpha: 0,
        },
        {
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'power3.out',
            duration: 0.5,
            stagger: {
                amount: 0.3,
                from: 'random',
            },
        }
    );

    return tl;
};
const onNavHoverIn = (event) => {
    const targetEl = event.target;
    const chars = targetEl.querySelectorAll('.char'); // Correct class from Splitting

    if (!chars.length) return;

    const tl = gsap.timeline();

    tl.fromTo(
        chars,
        {
            x: () => gsap.utils.random(-50, 50),
            y: () => gsap.utils.random(-40, 0),
            className: 'char text-current'
        },
        {
            x: 0,
            y: 0,
            className: 'char text-electric-purple dark:text-accent',
            ease: 'power3.out',
            duration: 0.5,
            stagger: {
                amount: 0.3,
                from: 'random',
            },
        }
    );
    tl.fromTo(
        chars,
        {
            x: () => gsap.utils.random(-50, 50),
            y: () => gsap.utils.random(-40, 0),
            className: 'char text-electric-purple dark:text-accent'
        },
        {
            x: 0,
            y: 0,
            className: 'char text-current',
            ease: 'power3.out',
            duration: 0.5,
            stagger: {
                amount: 0.3,
                from: 'random',
            },
        }, .4
    );
    return tl;
};
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
const effectTimeline = (targetEl, interval = 0) => {
    const tl = gsap.timeline({ paused: true })
    const split = Splitting({ target: targetEl, by: 'chars' })[0];
    const chars = split?.chars || [];

    if (chars.length === 0) return;

    tl.fromTo(
        chars,
        {
            x: () => gsap.utils.random(-50, 50),
            y: () => gsap.utils.random(-40, 0),
            autoAlpha: 0,
        },
        {
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'power3.out',
            duration: 0.5,
            stagger: {
                amount: 0.2,
                from: 'random',
            },
        },
        interval
    );
    return tl;
}

function updateStickyTimeline() {
    tl.clear();
    const intCom = computed(() => isDesktop.value ? 0.2 : 0)

    if (!nav.value) return
    const int = intCom.value

    tl.fromTo(nav.value, { alpha: 0 }, { alpha: 1 }, 0)

    const navItems = nav.value.querySelectorAll('.nav-item')
    navItems.forEach((item, i) => {
        tl.fromTo(item, { autoAlpha: 0 }, {
            autoAlpha: 1,
            duration: 0.15,
            ease: 'cubic-bezier(.215, .61, .355, 1.000)',
            onStart: () => {
                const itemTL = effectTimeline(item, (i * 0.2) + (int + 0.2))
                itemTL?.play()
            }
        }, (i * 0.1) + (int + 0.1))
    })
}

function setupStickyObserver() {
    if (!sentinal.value) return
    if (stickyObserver.value) stickyObserver.value.disconnect()

    let lastStickyState = null
    let ticking = false

    stickyObserver.value = new IntersectionObserver(([entry]) => {
        if (ticking) return
        ticking = true

        requestAnimationFrame(() => {
            const shouldBeSticky = !entry.isIntersecting && window.scrollY > 300 && sentinal.value.getBoundingClientRect().top < 0

            if (shouldBeSticky !== lastStickyState) {
                lastStickyState = shouldBeSticky
                isSticky.value = shouldBeSticky
            }

            ticking = false
        })
    }, {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px'
    })

    stickyObserver.value.observe(sentinal.value)
}
onMounted(() => {
    updateStickyTimeline()
    setupStickyObserver()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    ScrollTrigger.getAll().forEach(t => t.kill())
    stickyObserver.value?.disconnect()
    isSticky.value = false
})

watch([isSticky, isDesktop], () => {
    updateStickyTimeline()
    if (isSticky.value) {
        tl.timeScale(1).restart()
    } else {
        tl.timeScale(3).reverse()
    }
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
  