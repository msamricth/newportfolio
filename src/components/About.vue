<template>
    <section ref="section" class="pt-16">
        <div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto">
            <div class="min-h-[80vh]">
                <div class="introduction-wrapper sticky md:max-w-2/3 md:mt-4 top-[10%]">
                    <h2 class="italic subtitle mb-4 text-2xl placeholder-line hidden md:block" data-splitting="words">So here's the thing:
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
                        <p class="text-secondary text-base leading-[1.8] mb-6" data-splitting="words">I'm a full-stack
                            developer with a passion for clean code, bold design, and building things that actually
                            work—both on
                            screen
                            and in the dirt🚴‍♀️. With deep experience in WordPress, Vue.js, and the occasional Bootstrap
                            bender, I
                            specialize in crafting digital systems that are fast, accessible, and built to last.</p>
                        <blockquote class="transition duriation-900 border-l-4 pl-4 mt-4 mb-8 py-2"
                            :class="isBQ ? ['border-current'] : ['border-transparent']">
                            “A problem solver who will keep you honest, but isn’t going to ‘value engineer’ a perfectly good
                            design into something unrecognizable.”
                        </blockquote>

                        <p class="text-secondary text-base leading-[1.8]">
                            I’ve worked across agencies, brands and ngo spaces, building digital products, wrangling APIs,
                            and
                            pushing
                            pixels with a strong eye for user experience.</p>
                    </div>
                </div>
            </div>
            <div class="min-h-[60vh]" ref="artisan">
            <div class="code-artisan lg:my-34 mt-8 mb-8  md:w-3/4 mx-auto sticky top-[20%]">
                <div class="swing-in-left-fwd h-[4px] bg-border dark:bg-background transition duriation-900 mb-4 delay-700"
                    :class="isArtisan ? ['animate'] : ['opacity-0']"></div>
                <h3 class="font-heading font-semibold text-3xl leading-snug placeholder-line" data-splitting="words">
                    Code artisan forging WordPress & Vue.js experiences by day,
                    crafting dirt jumps & trails for bikes by night—
                    UX zeal meets mud‑and‑grit creativity.
                </h3>
                <div class="swing-in-left-fwd h-[4px] bg-border dark:bg-background transition duriation-900 mt-4 delay-700"
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
import placeholderJS from './../utils/placeholder.js'
import PlaceholderJS from './../utils/placeholder.js';
gsap.registerPlugin(ScrollTrigger);
const isArtisan = ref(false);
const isBQ = ref(false);
const artisan = ref(null)
const section = ref(null)
onMounted(() => {
    const artisanEl = artisan.value;
    const sectionEl = section.value;
    const subtitle = sectionEl.querySelector('.subtitle');
    const introduction = sectionEl.querySelector('.introduction');
    const artisanElHeadline = artisanEl.querySelector('h3');
    const listItems = sectionEl.querySelectorAll('li.placeholder-line');

    new placeholderJS(subtitle);
    new PlaceholderJS(introduction, { scrub: true, speed: 2 });

    const artisanElHeadlineAnim = new PlaceholderJS(artisanElHeadline, { manual: true });

    ScrollTrigger.create({
        trigger: artisanEl,
        start: 'top 75%',
        onEnter: () => {
            isArtisan.value = true;
            artisanElHeadlineAnim.play();
            document.body.classList.remove('dark')
        },
        onLeaveBack: () => {
            isArtisan.value = false;
            artisanElHeadlineAnim.getTimeline().progress(1).reverse();
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

    // Animate each list item with PlaceholderJS and fade-in
    listItems.forEach(li => {
        const anim = new PlaceholderJS(li, { manual: true, scrub: true });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: li,
                start: 'top 80%',
                onEnter: () => {
                    tl.play();
                    anim.play();

                },
                onLeaveBack: () => {
                    tl.reverse();
                    anim.getTimeline().progress(1).reverse();
                }
            },
            paused: true
        });

        tl.fromTo(li, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.3 });
    });
});

</script>