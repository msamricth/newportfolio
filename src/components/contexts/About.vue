<template>
  <section ref="section" class="pt-16 lg:pt-22" id="about">
    <div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto"
      :class="{ 'opacity-0': !store.ready }">
        <div class="sticky mt-4 introduction-wrapper md:max-w-2/3 md:mt-6 motionless:mt-5">
          <h2 class="mb-4 text-2xl italic opacity-0 subtitle placeholder-line" data-splitting="words">So
            here's the thing:
          </h2>
          <ul class="hidden pl-6 mb-4 list-disc md:block motionless:mb-5">
            <li class="text-xl opacity-0 placeholder-line" data-splitting="words">A Developer with
              <strong>PASSION</strong>
            </li>
            <li class="text-xl opacity-0 placeholder-line" data-splitting="words">An eye for design</li>
            <li class="text-xl opacity-0 placeholder-line" data-splitting="words">API nerd</li>
            <li class="mb-0 text-xl opacity-0 placeholder-line" data-splitting="words">Bootstrap & Tailwind Queen👸</li>
          </ul>
          <div class="introduction">
            <p class="placeholder-line text-secondary text-base leading-[1.8] mb-2" data-splitting="words">
              I'm a full-stack
              developer with a passion for clean code, bold design, and building things that actually
              work both on
              screen
              and in the dirt.🚴‍♀️ With deep experience in WordPress, Vue.js, and the occasional Tailwind
              bender, I
              specialize in crafting digital systems that are fast, accessible, and built to last.</p>
            <blockquote
              class="py-2 pl-4 mb-4 transition border-l-4 placeholder-line duriation-900 motionless:border-current"
              data-splitting="words" :class="isBQ ? ['border-current'] : ['border-transparent']">
              “A problem solver who will keep you honest, but isn’t going to ‘value engineer’ a perfectly good
              design into something unrecognizable.”
            </blockquote>

            <p class="text-secondary text-base leading-[1.8] final-p placeholder-line **:leading-[1.8]" data-splitting="words">
              I’ve worked across agencies, brands and NGO spaces, building digital products, wrangling APIs,
              and
              pushing
              pixels with a strong eye for user experience.</p>
          </div>
        </div>
      <div class="lg:min-h-dvh 2xl:min-h-[60dvh]" ref="artisan">
        <div class="code-artisan lg:my-34 my-18 md:w-3/4 mx-auto relative md:sticky top-[20%]">
          <div
            class="swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mb-4 delay-700 motionless:opacity-100"
            :class="isArtisan ? ['animate'] : ['opacity-0']"></div>
          <h3 class="text-2xl font-semibold leading-snug font-heading lg:text-3xl placeholder-line"
            data-splitting="words">
                Code artisan forging WordPress & Vue.js experiences by day,
                crafting dirt jumps & trails for bikes by night. UX zeal meets mud & grit creativity.
          </h3>
          <div
            class="swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mt-4 delay-700 motionless:opacity-100"
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
import PlaceholderJS from '@/utils/placeholder.js';
import { useMainStore } from '@/stores/main.js'
import { AnimationFrame } from '@/utils/AnimationFrame';
const store = useMainStore()
const isArtisan = ref(false);
const isBQ = ref(false);
const artisan = ref(null)
const section = ref(null)
const sectionTriggers = []
const sectionTimelines = []
let tl
watch(
  () => store.ready,
  async (ready) => {
    if (!ready || store.reduceMotion) return
    await nextTick()
    await aboutAnims()
  },
  { immediate: true }
)

watch(
  () => store.reduceMotion,
  async (reduceMotion) => {
    await nextTick()
    await aboutAnims()

    if (!reduceMotion) return
    if (store.reduceMotion) {
      sectionTriggers.forEach(trigger => trigger?.kill());
      sectionTimelines.forEach(tl => tl?.kill());
      sectionTriggers.length = 0;
      sectionTimelines.length = 0;
    }
  },
  { immediate: true }
)

async function aboutAnims() {
  await nextTick()
  if (!section.value) return
  const sectionEl = section.value;
  const introEl = sectionEl.querySelectorAll('.introduction p');
  const listItems = sectionEl.querySelectorAll('li.placeholder-line, .subtitle');
  const blockquoteEl = sectionEl.querySelector('blockquote');
  const finalP = sectionEl.querySelector('.final-p');

  tl = gsap.timeline({ paused: true });
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

    if (introEl.length) {
      introEl.forEach((p)=>{
      const introAnim = new PlaceholderJS(p, { manual: true });
      tl.add(() => introAnim.play(), "<+=0.2");
      })
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

    const tlScrollTrigger = ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top top',
      end: 'bottom bottom',
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
    });

    if (window.scrollY < sectionEl.offsetHeight) {
      tl.play();
    }

    sectionTriggers.push(tlScrollTrigger);
    const BQScrollTrigger = ScrollTrigger.create({
      trigger: blockquoteEl,
      start: 'top 60%',
      onEnter: () => (isBQ.value = true),
      onLeaveBack: () => (isBQ.value = false),
    });

    sectionTriggers.push(BQScrollTrigger);


    if (!artisan.value) return
    const artisanEl = artisan.value;
    const artisanHeadline = artisanEl.querySelector('h3');
    const artisanAnim = new PlaceholderJS(artisanHeadline, { manual: true });
    //artisanAnim.getTimeline().progress(1).reverse();

    const artisanScrollTrigger = ScrollTrigger.create({
      trigger: artisanEl,
      start: 'top 75%',
      onEnter: () => {
        isArtisan.value = true;
        artisanAnim.play();
      },
      onLeaveBack: () => {
        isArtisan.value = false;
        if(artisanAnim.getTimeline()){
           artisanAnim.getTimeline().progress(1).reverse();
        } else {
          artisanAnim.update()
        }
      }
    });

    sectionTriggers.push(artisanScrollTrigger);

  }

  ScrollTrigger.refresh()
  sectionTimelines.push(tl);
}



</script>