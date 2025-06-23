<template>
  <section ref="section" class="pt-16 lg:pt-22" id="about">
    <div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto"
      :class="{ 'opacity-0': !store.ready }">
      <div class="min-h-screen">
        <div class="introduction-wrapper sticky md:max-w-2/3 mt-4 md:mt-6 top-[15%] md:top-[10%]">
          <h2 class="mb-4 text-2xl italic opacity-0 subtitle placeholder-line" data-splitting="words">So
            here's the thing:
          </h2>
          <ul class="hidden pl-6 mb-12 list-disc md:block">
            <li class="text-xl opacity-0 placeholder-line" data-splitting="words">A Developer with
              <strong>PASSION</strong>
            </li>
            <li class="text-xl opacity-0 placeholder-line" data-splitting="words">An eye for design</li>
            <li class="text-xl opacity-0 placeholder-line" data-splitting="words">API nerd</li>
            <li class="text-xl opacity-0 placeholder-line" data-splitting="words">Bootstrap & Tailwind Queen👸</li>
          </ul>
          <div class="placeholder-line" data-splitting="words">
            <p class="placeholder-line opacity-0 text-secondary text-base leading-[1.8] mb-6 introduction"
              data-splitting="words">I'm a full-stack
              developer with a passion for clean code, bold design, and building things that actually
              work—both on
              screen
              and in the dirt.🚴‍♀️ With deep experience in WordPress, Vue.js, and the occasional Tailwind
              bender, I
              specialize in crafting digital systems that are fast, accessible, and built to last.</p>
            <blockquote class="py-2 pl-4 mt-4 mb-8 transition border-l-4 opacity-0 duriation-900" data-splitting="words"
              :class="isBQ ? ['border-current'] : ['border-transparent']">
              “A problem solver who will keep you honest, but isn’t going to ‘value engineer’ a perfectly good
              design into something unrecognizable.”
            </blockquote>

            <p class="text-secondary text-base leading-[1.8] final-p placeholder-line opacity-0" data-splitting="words">
              I’ve worked across agencies, brands and NGO spaces, building digital products, wrangling APIs,
              and
              pushing
              pixels with a strong eye for user experience.</p>
          </div>
        </div>
      </div>
      <div class="md:min-h-[60vh]" ref="artisan">
        <div class="code-artisan lg:my-34 my-18  md:w-3/4 mx-auto relative md:sticky top-[20%]">
          <div
            class="swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mb-4 delay-700"
            :class="isArtisan ? ['animate'] : ['opacity-0']"></div>
          <h3 class="text-2xl font-semibold leading-snug opacity-0 font-heading lg:text-3xl placeholder-line"
            data-splitting="words">
            Code artisan forging WordPress & Vue.js experiences by day,
            crafting dirt jumps & trails for bikes by night—
            UX zeal meets mud-and-grit creativity.
          </h3>
          <div
            class="swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mt-4 delay-700"
            :class="isArtisan ? ['animate'] : ['opacity-0']"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';
import { useNuxtApp } from '#app'
//import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const { $gsap: gsap } = useNuxtApp()
import PlaceholderJS from './../../utils/placeholder.js';
import { useMainStore } from '../../stores/main.js'
const store = useMainStore()
const isArtisan = ref(false);
const isBQ = ref(false);
const artisan = ref(null)
const section = ref(null)
watch(
  () => store.ready,
  (newValue, oldValue) => {
    nextTick(() => {
      const sectionEl = section.value;
      const artisanEl = artisan.value;
      const introEl = sectionEl.querySelector('.introduction');
      const listItems = sectionEl.querySelectorAll('li.placeholder-line, .subtitle');
      const blockquoteEl = sectionEl.querySelector('blockquote');
      const finalP = sectionEl.querySelector('.final-p');
      const artisanHeadline = artisanEl.querySelector('h3');

      const tl = gsap.timeline({ paused: true });
      if (store.ready) {
        listItems.forEach(li => {
          if (!li) return;
          const anim = new PlaceholderJS(li, { manual: true });
          tl.fromTo(li, { autoAlpha: 0, y: 4 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out',
            onStart: () => anim.play()
          }, "<+=0.05");
        });

        if (introEl) {
          const introAnim = new PlaceholderJS(introEl, { manual: true });
          tl.add(() => introAnim.play(), "<+=0.2");
        }

        if (blockquoteEl) {
          new PlaceholderJS(blockquoteEl, { scrub: true, speed: 6 });
          tl.fromTo(blockquoteEl, { autoAlpha: 0, y: 8 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out',
          }, "<+=0.2");
        }

        if (finalP) {
          new PlaceholderJS(finalP, { scrub: true, speed: 6 });
          tl.fromTo(finalP, { autoAlpha: 0, y: 8 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out',
          }, "<+=0.3");
        }

        ScrollTrigger.create({
          trigger: sectionEl,
          start: 'top top',
          end: 'bottom bottom',
          onEnter: () => tl.play(),
          onEnterBack: () => tl.play(),
        });

        if (window.scrollY < sectionEl.offsetHeight) {
          tl.play();
        }

        const artisanAnim = new PlaceholderJS(artisanHeadline, { manual: true });
        artisanAnim.getTimeline().progress(1).reverse();

        ScrollTrigger.create({
          trigger: artisanEl,
          start: 'top 75%',
          onEnter: () => {
            isArtisan.value = true;
            artisanAnim.play();
          },
          onLeaveBack: () => {
            isArtisan.value = false;
            artisanAnim.getTimeline().progress(1).reverse();
          }
        });

        ScrollTrigger.create({
          trigger: blockquoteEl,
          start: 'top 60%',
          onEnter: () => (isBQ.value = true),
          onLeaveBack: () => (isBQ.value = false),
        });

      }

      ScrollTrigger.refresh()
    })
  }
)
onMounted(async () => {
  await nextTick();
  const sectionEl = section.value;
  const artisanEl = artisan.value;
  const introEl = sectionEl.querySelector('.introduction');
  const listItems = sectionEl.querySelectorAll('li.placeholder-line, .subtitle');
  const blockquoteEl = sectionEl.querySelector('blockquote');
  const finalP = sectionEl.querySelector('.final-p');
  const artisanHeadline = artisanEl.querySelector('h3');
  
  setTimeout(() => store.ready = true, 400)

  const tl = gsap.timeline({ paused: true });
  if (store.ready) {
    listItems.forEach(li => {
      if (!li) return;
      const anim = new PlaceholderJS(li, { manual: true });
      tl.fromTo(li, { autoAlpha: 0, y: 4 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.25,
        ease: 'power2.out',
        onStart: () => anim.play()
      }, "<+=0.05");
    });

    if (introEl) {
      const introAnim = new PlaceholderJS(introEl, { manual: true });
      tl.add(() => introAnim.play(), "<+=0.2");
    }

    if (blockquoteEl) {
      new PlaceholderJS(blockquoteEl, { scrub: true, speed: 6 });
      tl.fromTo(blockquoteEl, { autoAlpha: 0, y: 8 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.25,
        ease: 'power2.out',
      }, "<+=0.2");
    }

    if (finalP) {
      new PlaceholderJS(finalP, { scrub: true, speed: 6 });
      tl.fromTo(finalP, { autoAlpha: 0, y: 8 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.25,
        ease: 'power2.out',
      }, "<+=0.3");
    }

    ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top top',
      end: 'bottom bottom',
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
    });

    if (window.scrollY < sectionEl.offsetHeight) {
      tl.play();
    }

    const artisanAnim = new PlaceholderJS(artisanHeadline, { manual: true });
    artisanAnim.getTimeline().progress(1).reverse();

    ScrollTrigger.create({
      trigger: artisanEl,
      start: 'top 75%',
      onEnter: () => {
        isArtisan.value = true;
        artisanAnim.play();
      },
      onLeaveBack: () => {
        isArtisan.value = false;
        artisanAnim.getTimeline().progress(1).reverse();
      },
    });

    ScrollTrigger.create({
      trigger: blockquoteEl,
      start: 'top 60%',
      onEnter: () => (isBQ.value = true),
      onLeaveBack: () => (isBQ.value = false),
    });

  }

  ScrollTrigger.refresh()

});


</script>