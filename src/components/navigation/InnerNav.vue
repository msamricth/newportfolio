<template>
    <div
        class="utilities max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto pt-9 lg:pt-24 pb-18 lg:pb-20">
        <InnerSecondaryNav />
    </div>
    <header ref="navContainer" class="py-4 mx-auto absolute z-20 w-full"
        :class="{ 'fixed top-0 left-0 w-full bg-background/70 dark:bg-primary/70 inverted:bg-primary/70 inverted:dark:bg-background/70 backdrop-blur transition duration-700': isSticky }">
        <div
            class="nav-wrapper max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto flex items-center relative">
            <div ref="navBrand"
                class="text-primary dark:text-background inverted:text-background inverted:dark:text-primary nav-brand transition-all duration-700 relative max-sm:z-10"
                :class="isSticky ? 'opacity-75 hover:opacity-100' : 'opacity-0'">
                <RouterLink aria-label="Return Home" to="/"
                    class="animate subtle-slide-in font-black pb-10 md:pb-0 max-sm:z-0" @mouseenter="onBrandHoverIn">
                    hi, i’m Emm.</RouterLink>
            </div>
            <h1 class="placeholder-line absolute left-8 lg:left-12 transition-all headingClass text-nowrap top-0 text-3xl md:text-5xl"
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
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InnerSecondaryNav from './InnerSecondaryNav.vue';
import Splitting from 'splitting';
import placeholderJS from '../../utils/placeholder.js'

const heading = ref(null);
gsap.registerPlugin(ScrollTrigger);
const navContainer = ref(null);
const navBrand = ref(null);
const isSticky = ref(false);
const nav = ref(null)

const onBrandHoverIn = (event) => {
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
const props = defineProps({
    title: {
        type: String,
        default: () => 'Something'
    },
});
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
onMounted(() => {
    const navEl = nav.value
    const headerEl = heading.value
    const navBrandEl = navBrand.value
    const navItems = navEl.querySelectorAll('.nav-item')

    const anim = new placeholderJS((headerEl), { manual: true })
    anim.play();


    const mm = gsap.matchMedia(),
        breakPoint = 620;
    isSticky.value = false;
    const tl = gsap.timeline({ paused: true })
    mm.add(
        {
            // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
            isDesktop: `(min-width: ${breakPoint}px)`,
            isMobile: `(max-width: ${breakPoint - 1}px)`,
            reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
            let int = 0;
            const { isDesktop, isMobile, reduceMotion } = context.conditions;
            tl.fromTo(navEl, {
                alpha: 0,
            }, {
                alpha: 1,
            }, 0);


            tl.fromTo(headerEl, {
                scale: 1,
                y: 0
            }, {
                scale: isDesktop ? 0.2 : 0.4,
                y: isMobile ? 0 : -28,
                duration: 0.1
            }, int);

            if (isDesktop) {
                int = 0.2;
                tl.fromTo(headerEl, {
                    x: 0,
                }, {
                    x: 130,
                    duration: 0.3
                }, int)
            }
            tl.fromTo(navBrandEl, {
                alpha: 0,
                y: 0
            }, {
                alpha: 1,
                y: isMobile ? -10 : 0,
                duration: 0.2,
                onStart: () => {
                    if (tl.reversed()) {
                        effectTimeline(navBrandEl, 0).reverse().timeScale(3)
                    } else {
                        effectTimeline(navBrandEl, 0.45).play().timeScale(1)
                    }
                }
            }, int)

                .fromTo(headerEl, {
                    fontWeight: 700,
                }, {
                    fontWeight: 400,
                    duration: 0.2,

                }, int + 0.1);

            navItems.forEach((navItem, i) => {
                tl.fromTo(
                    navItem,
                    {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        ease: 'cubic-bezier(.215, .61, .355, 1.000)',
                        duration: 0.15,
                        onStart: () => {
                            if (tl.reversed()) {
                                effectTimeline(navItem, 0).reverse().timeScale(3)
                            } else {
                                effectTimeline(navItem, (i * 0.2) + (int + 0.2)).play().timeScale(1)
                            }
                        }
                    },
                    (i * 0.1) + (int + 0.1)
                );
            });
            ScrollTrigger.create({
                trigger: navEl,
                start: 'top 5%',
                onEnter: () => {
                    isSticky.value = true;
                    tl.timeScale(1).play();
                },
                onLeaveBack: () => {
                    isSticky.value = false;
                    tl.timeScale(3).reverse();
                },
                onEnterBack: () => {
                    isSticky.value = false;
                    tl.timeScale(3).reverse();
                    document.body.classList.remove('dark')
                },
            });
            nextTick(() => {
                if (window.scrollY > 1900) {
                    console.log('window pos: ' + window.scrollY)
                    isSticky.value = true;
                    tl.progress(1).timeScale(1).play(0);
                }
            })
        }

    );
})
</script>
  
<style scoped>
.nav {
    --theme-main-animation-delay: 0;
}
</style>
  