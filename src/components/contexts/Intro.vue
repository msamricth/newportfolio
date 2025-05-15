<template>
    <section ref="section" class="pt-16" id="about">
        <div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto">
            <div class="min-h-[80vh]">
                <div class="introduction-wrapper sticky md:max-w-2/3 mt-4 md:mt-8 top-[15%] md:top-[12%]">
                    <h2 class="italic subtitle mb-4 text-3xl placeholder-line" data-splitting="words">So
                        here's the thing:
                    </h2>
                    <ul class="list-disc mb-12 pl-6 hidden md:block">
                        <li class="placeholder-line text-xl" data-splitting="words">A Developer with
                            <strong>PASSION</strong>
                        </li>
                        <li class="placeholder-line text-xl" data-splitting="words">An eye for design</li>
                        <li class="placeholder-line text-xl" data-splitting="words">API nerd</li>
                        <li class="placeholder-line text-xl" data-splitting="words">Bootstrap & Tailwind Queen👸</li>
                    </ul>
                    <div class="placeholder-line introduction" data-splitting="words">
                        <p class="text-secondary text-xl leading-[1.8] mb-6 lg:mb-14" data-splitting="words">I'm a
                            full-stack
                            developer with a passion for clean code, bold design, and building things that actually
                            work—both on
                            screen
                            and in the dirt.🚴‍♀️ With deep experience in WordPress, Vue.js, and the occasional Tailwind
                            bender, I
                            specialize in crafting digital systems that are fast, accessible, and built to last.</p>
                    </div>
                    <MainButton href="/about"
                        class="btn text-primary dark:text-background inverted:text-background inverted:dark:text-primary hover:text-accent subtle-slide-in"
                        label="What drives me" :onClick="() => openAbout()" :delay="'0.7s'" />
                </div>
            </div>
            <div class="md:min-h-[60vh]" ref="artisan">
                <div class="code-artisan lg:my-34 my-18  md:w-3/4 mx-auto relative md:sticky top-[20%]">
                    <div class="swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mb-4 delay-700"
                        :class="isArtisan ? ['animate'] : ['opacity-0']"></div>
                    <h3 class="font-heading font-semibold text-2xl lg:text-3xl leading-snug placeholder-line"
                        data-splitting="words">
                        Code artisan forging WordPress & Vue.js experiences by day,
                        crafting dirt jumps & trails for bikes by night—
                        UX zeal meets mud-and-grit creativity.
                    </h3>
                    <div class="swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mt-4 delay-700"
                        :class="isArtisan ? ['animate'] : ['opacity-0']"></div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PlaceholderJS from './../../utils/placeholder.js';
import MainButton from './../buttons/MainButton.vue'
import { useMainStore } from '../../stores/main.js'
import router from '../../routes/router';
const store = useMainStore()
gsap.registerPlugin(ScrollTrigger);
const isArtisan = ref(false);
const isBQ = ref(false);
const artisan = ref(null)
const section = ref(null)
const openAbout = () => {
    router.push('/about')
}
onMounted(() => {
    const artisanEl = artisan.value;
    const sectionEl = section.value;
    const introduction = sectionEl.querySelector('.introduction');
    const btn = sectionEl.querySelector('.btn');
    const artisanElHeadline = artisanEl.querySelector('h3');
    const listItems = sectionEl.querySelectorAll('li.placeholder-line');
    const subtitle = sectionEl.querySelector('.subtitle');



    const artisanElHeadlineAnim = new PlaceholderJS(artisanElHeadline, { manual: true });

    artisanElHeadlineAnim.getTimeline().progress(1).reverse();
    ScrollTrigger.create({
        trigger: artisanEl,
        start: 'top 85%',
        onEnter: () => {
            isArtisan.value = true;
            artisanElHeadlineAnim.play();
            store.setSliderArrowSticky(false)
            store.setsliderTimeline('before')
        },
        onEnterBack: () => {
            store.setSliderArrowSticky(false)
            store.setsliderTimeline('before')
        },
        onLeaveBack: () => {
            isArtisan.value = false;
            artisanElHeadlineAnim.getTimeline().progress(1).reverse();
        },
    });
    ScrollTrigger.create({
        trigger: artisanEl,
        start: 'top 10%',
        onEnter: () => {
            document.body.classList.remove('dark')
        },
        onLeaveBack: () => {
            document.body.classList.add('dark')
        },
    });
    // Highlight blockquote
    ScrollTrigger.create({
        trigger: sectionEl.querySelector('.introduction blockquote'),
        start: 'top 75%',
        onEnter: () => {
            isBQ.value = true;
        },
        onLeaveBack: () => {
            isBQ.value = false;
        },
    });

    new PlaceholderJS(subtitle, { scrub: true, speed: 2 });


    listItems.forEach((li, i) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: li,
                start: 'top 70%',
                toggleActions: 'play reverse play reverse',
                scrub: true
            },
            paused: true
        });
        tl.fromTo(li, { autoAlpha: 0 }, {
            autoAlpha: 1,
            duration: 0.5, ease: 'power2.out', stagger: 0.3
        })
        new PlaceholderJS(li, { scrub: true, speed: 3 });

    });
    new PlaceholderJS(introduction, { scrub: true, speed: 2, start: 'top 70%' });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: btn,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
            scrub: true
        },
        paused: true
    });
    tl.call(() => {
        btn.classList.remove('wobble-ver-right')
    }, null, 0)
    tl.fromTo(btn, { autoAlpha: 0, y: 40 }, {
        autoAlpha: 1, y: 0,
        duration: 0.3, ease: 'power2.out',
    }, 0)
    tl.call(() => {
        btn.classList.add('wobble-ver-right')
    }, null, 0.1)

});

</script>