<template>
    <div class="utilities max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto pt-9 lg:pt-24 pb-18 lg:pb-20"
        ref="utilityBar">
        <InnerSecondaryNav />
    </div>
    <header ref="navContainer" class="py-4 mx-auto z-20 w-full will-change-transform transform-gpu"
    :class="isSticky ? 'fixed left-0 w-full bg-background/70 dark:bg-primary/70 inverted:bg-primary/70 inverted:dark:bg-background/70 backdrop-blur transition duration-700' : ' absolute '">
        <div
            class="nav-wrapper max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto flex items-center relative">
            <div ref="navBrand"
                class="text-primary dark:text-background inverted:text-background inverted:dark:text-primary nav-brand transition-all duration-700 relative max-sm:z-10"
                :class="isSticky ? 'opacity-75 hover:opacity-100' : 'opacity-0'">
                <RouterLink aria-label="Return Home" :to="brandURL"
                    class="animate subtle-slide-in font-black pb-10 md:pb-0 max-sm:z-0 text-nowrap"
                    @mouseenter="onBrandHoverIn">{{brandLabel}}</RouterLink>
            </div>
            <h1 class="placeholder-line absolute left-8 lg:left-12 transition-all headingClass top-0 text-3xl md:text-5xl text-nowrap"
                data-splitting="words" ref="heading">
                <span class="transition-all duration-700 placeholder-line" data-splitting="words">{{ title }}</span>
            </h1>
            <nav ref="nav"
                class="flex space-x-8 text-sm font-heading font-semibold group/nav ml-auto text-primary dark:text-background inverted:text-background inverted:dark:text-primary "
                :class="isSticky ? [''] : ['opacity-0']">
                <RouterLink
                    class="group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700 "
                    to="/about">
                    <span class="nav-item" @mouseenter="onNavHoverIn">about</span>
                </RouterLink>
                <RouterLink
                    class="group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700 "
                    to="/work">
                    <span class="nav-item" @mouseenter="onNavHoverIn">work</span>
                </RouterLink>
                <a href="#sayHello"
                    class="group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100  transition relative overflow-clip duration-700"
                    @click.prevent="smoothScrollTo('#sayHello')">
                    <span class="nav-item" @mouseenter="onNavHoverIn">say hello</span>
                </a>
            </nav>
        </div>
    </header>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Splitting from 'splitting'
import InnerSecondaryNav from './InnerSecondaryNav.vue'
import placeholderJS from '../../utils/placeholder.js'

gsap.registerPlugin(ScrollTrigger)

const nav = ref(null)
const navContainer = ref(null)
const navBrand = ref(null)
const heading = ref(null)
const utilityBar = ref(null)
const isSticky = ref(false)
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

function onBrandHoverIn(event) {
    const chars = event.target.querySelectorAll('.char')
    if (!chars.length) return
    return gsap.fromTo(chars, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-40, 0),
        autoAlpha: 0
    }, {
        x: 0,
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: 'power3.out',
        stagger: { amount: 0.3, from: 'random' }
    })
}

function onNavHoverIn(event) {
    const chars = event.target.querySelectorAll('.char')
    if (!chars.length) return
    const tl = gsap.timeline()
    tl.fromTo(chars, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-40, 0)
    }, {
        x: 0,
        y: 0,
        className: 'char text-electric-purple dark:text-accent',
        duration: 0.5,
        ease: 'power3.out',
        stagger: { amount: 0.3, from: 'random' }
    }).to(chars, {
        className: 'char text-current',
        duration: 0.5,
        ease: 'power3.out',
        stagger: { amount: 0.3, from: 'random' }
    }, 0.4)
}

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

function effectTimeline(el, interval = 0) {
    const split = Splitting({ target: el, by: 'chars' })[0]
    const chars = split?.chars || []
    if (!chars.length) return
    return gsap.timeline({ paused: true }).fromTo(chars, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-40, 0),
        autoAlpha: 0
    }, {
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'power3.out',
        duration: 0.5,
        stagger: { amount: 0.2, from: 'random' }
    }, interval)
}


function updateStickyTimeline() {
    tl.clear();

    const scaleAmtCom = computed(() => isDesktop.value ? 0.2 : 0.4)
    const yCom = computed(() => isDesktop.value ? -28 : 0)
    const xCom = computed(() => isDesktop.value ? 130 : 0)
    const intCom = computed(() => isDesktop.value ? 0.2 : 0)

    if (!nav.value || !heading.value || !navBrand.value) return
    const scaleAmt = scaleAmtCom.value
    const y = yCom.value
    const x = xCom.value
    const int = intCom.value

    tl.fromTo(nav.value, { alpha: 0 }, { alpha: 1 }, 0)
    tl.fromTo(heading.value, { scale: 1, y: 0 }, { scale: scaleAmt, y, duration: 0.1 }, int)
    if (isDesktop.value) {
        const xAmt = navBrand.value.getBoundingClientRect().width + 12;
        tl.fromTo(heading.value, { x: 0 }, { x: xAmt, duration: 0.3 }, int)
    }

    tl.fromTo(navBrand.value, { alpha: 0, y: 0 }, {
        alpha: 1,
        y: isDesktop.value ? 0 : -10,
        duration: 0.2,
        onStart: () => {
            const brandTL = effectTimeline(navBrand.value, 0.45)
            brandTL?.play()
        }
    }, int)

    tl.fromTo(heading.value, { fontWeight: 700 }, { fontWeight: 400, duration: 0.2 }, int + 0.1)

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
    if (!utilityBar.value) return
    if (stickyObserver.value) stickyObserver.value.disconnect()

    let lastStickyState = null

    stickyObserver.value = new IntersectionObserver(([entry]) => {
        const shouldBeSticky = !entry.isIntersecting
        if (shouldBeSticky !== lastStickyState) {
            lastStickyState = shouldBeSticky
            isSticky.value = shouldBeSticky
        }
    }, {
        threshold: 0,
        rootMargin: '25px 0px 0px 0px'
    })

    stickyObserver.value.observe(utilityBar.value)
}

onMounted(() => {
    const anim = new placeholderJS(heading.value, { manual: true })
    anim.play()

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

const props = defineProps({
    title: { type: String, default: () => 'Something' },
    brandLabel: { type: String, default: () => "hi, i'm Emm." },
    brandURL: { type: String, default: () => '/' },
})
</script>

<style scoped>
.nav {
    --theme-main-animation-delay: 0;
}
header.fixed {
    top: env(safe-area-inset-top, 0px);
}
</style>
  