import { defineComponent, mergeProps, unref, ref, watch, nextTick, withCtx, createVNode, resolveDynamicComponent, useSSRContext } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderAttr, ssrRenderStyle } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$b } from './Modal-C0Zgvi9q.mjs';
import { _ as _export_sfc, u as useHead, a as useMainStore, I as InnerSecondaryNav, b as InnerNav, C as Contact, c as _sfc_main$2$1, d as useNuxtApp, P as PlaceholderJS, S as ScrollTrigger } from './server.mjs';
import { H as Heart } from './Heart-CXpxyos8.mjs';
import { L as Links, u as useWindowSize, _ as _sfc_main$c } from './index-PqXb4h_a.mjs';
import './modal-Cy99Pjki.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/consola/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/gsap/dist/gsap.js';
import '../_/renderer.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/devalue/index.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';

function AnimationFrame(elFunct, duration = 300) {
  let startTime;
  const callFunct = (currentTime) => {
    if (!startTime) {
      startTime = currentTime;
    }
    const elapsedTime = currentTime - startTime;
    if (elapsedTime >= duration) {
      elFunct();
    } else {
      requestAnimationFrame(callFunct);
    }
  };
  requestAnimationFrame(callFunct);
}
const _sfc_main$a = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fire" }, _attrs))} data-v-39656241><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div><div class="particle" data-v-39656241></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Fire.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Fire = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-39656241"]]);
const _sfc_main$9 = {
  __name: "Lyric",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap } = useNuxtApp();
    const showLyric = ref(false);
    ref(null);
    ref(null);
    const loaded = ref(false);
    const hasOpened = ref(false);
    const scene = ref(null);
    const store = useMainStore();
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "scene",
        ref: scene,
        class: "relative w-full overflow-x-clip motion-reduce:hidden header-scenes 2xl:pt-24"
      }, _attrs))} data-v-84fbcf36><canvas class="absolute top-0 bottom-0 w-full h-full" id="boom" data-v-84fbcf36></canvas><div class="flex flex-col md:flex-row justify-center lg:justify-between items-start md:gap-6 max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto lg:px-12 relative pt-22 md:py-0 lg:py-8 overflow-visible h-[85dvh] px-8 xl:items-center xl:max-h-218 2xl:max-h-270" data-v-84fbcf36><div class="${ssrRenderClass([unref(store).loaded ? "disapear opacity-0" : "animate subtle-slide-in", "absolute top-0 left-0 flex items-center justify-center w-full h-full pointer-events-none"])}" data-v-84fbcf36>`);
      _push(ssrRenderComponent(Heart, { class: "self-start object-contain object-center w-1/2 h-full max-w-100 jello-horizontal" }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "opacity-0": !loaded.value }, "flex flex-col justify-center gap-6 md:gap-0 lg:px-4 w-full md:max-w-3/5 lg:max-w-3xl relative z-20 font-heading animating lg:gap-6 xl:gap-8 group transition duration-700 h-dvh md:min-h-[70vh] xl:min-h-160 xl:h-160"])}" data-v-84fbcf36><div class="flex items-center justify-between w-full gap-6 max-md:flex-wrap md:flex-nowrap md:justify-center row-1 row leading-1" data-v-84fbcf36><span id="charA" class="text-6xl font-extrabold h1 lg:text-7xl bounce-in fold" data-v-84fbcf36>A</span><span id="charHeart" class="text-6xl font-extrabold text-center h1 lg:text-7xl" data-v-84fbcf36> HEART </span><div class="flex items-center justify-center h-full heart-container" data-v-84fbcf36><img crossorigin="anonymous" src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346872/heart_dfz3gf.svg" alt="Illustration of a heart" id="icon" class="self-start object-contain object-center w-24 h-full max-w-60 jello-horizontal" data-v-84fbcf36></div></div><div class="flex justify-center w-full gap-6 max-lg:flex-wrap lg:flex-nowrap lg:gap-24 row-2 row lg:-mt-10" data-v-84fbcf36><span id="charOf" class="font-extrabold text-8xl h1 fold" data-v-84fbcf36> OF </span><span id="charFire" class="font-extrabold text-8xl h1 fold" data-v-84fbcf36> FIRE </span></div><div class="flex max-md:flex-col md:flex-nowrap justify-center max-md:items-center md:justify-between gap-6 w-full md:w-fit max-w-4xl lg:max-w-2xl mx-auto row-3 row -rotate-5 leading-1.8 md:-mb-2 lg:-mt-4 xl:-mt-8" style="${ssrRenderStyle({ "opacity": "0" })}" data-v-84fbcf36><span class="font-extrabold text-7xl md:text-4xl lg:text-8mxl the h1 row md:text-left" data-v-84fbcf36>THE</span><span class="max-w-full pb-6 text-6xl font-extrabold md:text-4xl lg:text-8mxl explosions h1 row max-md:break-all lg:pb-0" id="exp" data-v-84fbcf36>EXPLOSIONS</span></div><div class="flex flex-nowrap justify-center group-[.animating]:max-md:flex-col text-center gap-6 w-full row-4 row lg:-mt-4 xl:-mt-8 md:leading-1" data-v-84fbcf36><span class="font-extrabold text-7xl h1" style="${ssrRenderStyle({ "opacity": "0" })}" data-v-84fbcf36> DONT </span><span class="font-extrabold text-7xl h1" style="${ssrRenderStyle({ "opacity": "0" })}" data-v-84fbcf36> EVEN </span></div><div class="flex flex-nowrap group-[.animating]:max-md:flex-col text-center justify-center gap-6 w-full row-5 row leading-1 lg:-mt-10" data-v-84fbcf36><span class="font-extrabold text-8xl md:text-7xl lg:text-8xl h1" style="${ssrRenderStyle({ "opacity": "0" })}" data-v-84fbcf36> SCARE </span><span class="font-extrabold text-8xl md:text-7xl lg:text-8xl h1" style="${ssrRenderStyle({ "opacity": "0" })}" data-v-84fbcf36> ME </span></div><div class="absolute bottom-0 z-0 w-full opacity-0 -bottom-30 lg:-bottom-10 xl:bottom-10" id="fire" data-v-84fbcf36>`);
      _push(ssrRenderComponent(Fire, null, null, _parent));
      _push(`</div></div><div class="${ssrRenderClass([loaded.value ? "animate subtle-slide-in" : "opacity-0", "relative z-10 flex-col items-start justify-center hidden h-full max-w-lg md:flex md:w-1/2 md:max-w-50 lg:max-w-60 xl:max-w-70 2xl:max-w-110"])}" data-v-84fbcf36><img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1748635877/1744399801866_qxlwrk.webp" alt="Emm as an action figure" class="object-contain w-auto" id="introImage" data-v-84fbcf36></div>`);
      if (loaded.value) {
        _push(`<div class="${ssrRenderClass([
          showLyric.value ? "animate slide-in-blurred-right" : hasOpened.value ? "disapear pointer-events-none" : "opacity-0 pointer-events-none",
          "mt-4 rounded-[3rem] px-3 py-1 overflow-hidden absolute bottom-0 lg:bottom-11 lg:right-21 z-50 right-16 md:right-18 md:bottom-6 bg-[#1f1f1f]"
        ])}" data-v-84fbcf36><button class="absolute top-2.5 right-4 hover:scale-[1.08] transition-all bg-[#1f1f1f] rounded-[3rem] cursor-pointer" data-v-84fbcf36><svg height="24px" class="text-current fill-current" id="Layer_1" style="${ssrRenderStyle({ "enable-background": "new 0 0 512 512" })}" version="1.1" viewBox="0 0 512 512" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-84fbcf36><g data-v-84fbcf36><path d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" data-v-84fbcf36></path></g></svg></button><iframe class="w-full h-20 max-w-md rounded-lg" src="https://open.spotify.com/embed/track/3Bp3aq6ftmUhxajD9T9kik?utm_source=generator&amp;theme=0" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" data-v-84fbcf36></iframe></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([!unref(store).loaded ? "opacity-0" : "animate subtle-slide-in", "w-full order-3 md:absolute md:bottom-6 lg:bottom-0 md:px-8 lg:px-12 z-40 max-w-full lg:max-w-[1024px] xl:max-w-[1440px] left-0 2xl:bottom-25"])}" data-v-84fbcf36><div class="flex items-end justify-between w-full flex-nowrap" data-v-84fbcf36><span class="flex gap-1 text-sm text-gray-500 animate subtle-slide-in" data-v-84fbcf36><svg enable-background="new 0 0 64 64" class="text-current fill-current" height="18px" id="Layer_1" version="1.1" viewBox="0 0 64 64" width="18px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-84fbcf36><path d="M23.727,16.403v4.84v5.058v14.236c-1.268-0.777-2.754-1.233-4.35-1.233c-4.612,0-8.353,3.74-8.353,8.349  c0,4.614,3.74,8.354,8.353,8.354c4.61,0,8.349-3.739,8.35-8.352h0V25.151l21.25-6.109V33.33c-1.268-0.777-2.754-1.233-4.35-1.233  c-4.614,0-8.353,3.739-8.353,8.348c0,4.613,3.739,8.354,8.353,8.354c4.344,0,7.914-3.325,8.31-7.57h0.04V17.892v-3.586V7.993  L23.727,16.403z" data-v-84fbcf36></path></svg><em data-v-84fbcf36><strong data-v-84fbcf36>Random Lyric</strong></em></span><button class="btn-secondary bg-gray-800 text-white p-2 rounded-[3rem] cursor-pointer transition-all hover:scale-[1.08] hover:text-accent duration-700" aria-label="Toggle lyric" data-v-84fbcf36><svg class="bi bi-question-circle-fill" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-v-84fbcf36><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" data-v-84fbcf36></path></svg></button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/Lyric.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Lyric = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-84fbcf36"]]);
const _sfc_main$8 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap } = useNuxtApp();
    const store = useMainStore();
    const isArtisan = ref(false);
    const isBQ = ref(false);
    const artisan = ref(null);
    const section = ref(null);
    const sectionTriggers = [];
    const sectionTimelines = [];
    let tl;
    watch(
      () => store.ready,
      async (ready) => {
        if (!ready || store.reduceMotion) return;
        await nextTick();
        await aboutAnims();
      },
      { immediate: true }
    );
    watch(
      () => store.reduceMotion,
      async (reduceMotion) => {
        await nextTick();
        await aboutAnims();
        if (!reduceMotion) return;
        if (store.reduceMotion) {
          sectionTriggers.forEach((trigger) => trigger == null ? void 0 : trigger.kill());
          sectionTimelines.forEach((tl2) => tl2 == null ? void 0 : tl2.kill());
          sectionTriggers.length = 0;
          sectionTimelines.length = 0;
        }
      },
      { immediate: true }
    );
    async function aboutAnims() {
      await nextTick();
      if (!section.value) return;
      const sectionEl = section.value;
      const introEl = sectionEl.querySelectorAll(".introduction p");
      const listItems = sectionEl.querySelectorAll("li.placeholder-line, .subtitle");
      const blockquoteEl = sectionEl.querySelector("blockquote");
      const finalP = sectionEl.querySelector(".final-p");
      tl = gsap.timeline({ paused: true });
      if (store.ready) {
        listItems.forEach((li) => {
          if (!li) return;
          const anim = new PlaceholderJS(li, { manual: true });
          tl.fromTo(li, { autoAlpha: 0, y: 4 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
            onStart: () => anim.play()
          }, "<+=0.05");
        });
        if (introEl.length) {
          introEl.forEach((p) => {
            const introAnim = new PlaceholderJS(p, { manual: true });
            tl.add(() => introAnim.play(), "<+=0.2");
          });
        }
        if (blockquoteEl) {
          new PlaceholderJS(blockquoteEl, { scrub: true, speed: 6 });
          tl.fromTo(blockquoteEl, { autoAlpha: 0, y: 8 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out"
          }, "<+=0.2");
        }
        if (finalP) {
          new PlaceholderJS(finalP, { scrub: true, speed: 6 });
          tl.fromTo(finalP, { autoAlpha: 0, y: 8 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out"
          }, "<+=0.3");
        }
        const tlScrollTrigger = ScrollTrigger.create({
          trigger: sectionEl,
          start: "top top",
          end: "bottom bottom",
          onEnter: () => tl.play(),
          onEnterBack: () => tl.play()
        });
        if ((void 0).scrollY < sectionEl.offsetHeight) {
          tl.play();
        }
        sectionTriggers.push(tlScrollTrigger);
        const BQScrollTrigger = ScrollTrigger.create({
          trigger: blockquoteEl,
          start: "top 60%",
          onEnter: () => isBQ.value = true,
          onLeaveBack: () => isBQ.value = false
        });
        sectionTriggers.push(BQScrollTrigger);
        if (!artisan.value) return;
        const artisanEl = artisan.value;
        const artisanHeadline = artisanEl.querySelector("h3");
        const artisanAnim = new PlaceholderJS(artisanHeadline, { manual: true });
        const artisanScrollTrigger = ScrollTrigger.create({
          trigger: artisanEl,
          start: "top 75%",
          onEnter: () => {
            isArtisan.value = true;
            artisanAnim.play();
          },
          onLeaveBack: () => {
            isArtisan.value = false;
            if (artisanAnim.getTimeline()) {
              artisanAnim.getTimeline().progress(1).reverse();
            } else {
              artisanAnim.update();
            }
          }
        });
        sectionTriggers.push(artisanScrollTrigger);
      }
      ScrollTrigger.refresh();
      sectionTimelines.push(tl);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "section",
        ref: section,
        class: "pt-16 lg:pt-22",
        id: "about"
      }, _attrs))}><div class="${ssrRenderClass([{ "opacity-0": !unref(store).ready }, "max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto"])}"><div class="sticky mt-4 introduction-wrapper md:max-w-2/3 md:mt-6 motionless:mt-5"><h2 class="mb-4 text-2xl italic opacity-0 subtitle placeholder-line" data-splitting="words">So here&#39;s the thing: </h2><ul class="hidden pl-6 mb-4 list-disc md:block motionless:mb-5"><li class="text-xl opacity-0 placeholder-line" data-splitting="words">A Developer with <strong>PASSION</strong></li><li class="text-xl opacity-0 placeholder-line" data-splitting="words">An eye for design</li><li class="text-xl opacity-0 placeholder-line" data-splitting="words">API nerd</li><li class="mb-0 text-xl opacity-0 placeholder-line" data-splitting="words">Bootstrap &amp; Tailwind Queen\u{1F478}</li></ul><div class="introduction"><p class="placeholder-line text-secondary text-base leading-[1.8] mb-2" data-splitting="words"> I&#39;m a full-stack developer with a passion for clean code, bold design, and building things that actually work both on screen and in the dirt.\u{1F6B4}\u200D\u2640\uFE0F With deep experience in WordPress, Vue.js, and the occasional Tailwind bender, I specialize in crafting digital systems that are fast, accessible, and built to last.</p><blockquote data-splitting="words" class="${ssrRenderClass([isBQ.value ? ["border-current"] : ["border-transparent"], "py-2 pl-4 mb-4 transition border-l-4 placeholder-line duriation-900 motionless:border-current"])}"> \u201CA problem solver who will keep you honest, but isn\u2019t going to \u2018value engineer\u2019 a perfectly good design into something unrecognizable.\u201D </blockquote><p class="text-secondary text-base leading-[1.8] final-p placeholder-line **:leading-[1.8]" data-splitting="words"> I\u2019ve worked across agencies, brands and NGO spaces, building digital products, wrangling APIs, and pushing pixels with a strong eye for user experience.</p></div></div><div class="lg:min-h-dvh 2xl:min-h-[60dvh]"><div class="code-artisan lg:my-34 my-18 md:w-3/4 mx-auto relative md:sticky top-[20%]"><div class="${ssrRenderClass([isArtisan.value ? ["animate"] : ["opacity-0"], "swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mb-4 delay-700 motionless:opacity-100"])}"></div><h3 class="text-2xl font-semibold leading-snug font-heading lg:text-3xl placeholder-line" data-splitting="words"> Code artisan forging WordPress &amp; Vue.js experiences by day, crafting dirt jumps &amp; trails for bikes by night. UX zeal meets mud &amp; grit creativity. </h3><div class="${ssrRenderClass([isArtisan.value ? ["animate"] : ["opacity-0"], "swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mt-4 delay-700 motionless:opacity-100"])}"></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/About.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "Testimonial",
  __ssrInlineRender: true,
  props: {
    name: String,
    title: String,
    image: String,
    quote: String,
    width: String,
    active: Boolean
  },
  setup(__props) {
    const { $gsap: gsap } = useNuxtApp();
    const store = useMainStore();
    const props = __props;
    const testimonial = ref(null);
    watch(() => props.active, (isActive) => {
      return;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "mx-auto transition-all duration-700",
        ref_key: "testimonial",
        ref: testimonial
      }, _attrs))} data-v-1733f595><div class="flex items-center gap-4 mb-4" data-v-1733f595><div data-v-1733f595><h3 class="text-lg font-semibold transition-all duration-700 xl:text-xl 2xl:text-2xl text-background placeholder-line" data-splitting="words" data-v-1733f595>${ssrInterpolate(__props.name)}</h3><p class="text-sm transition-all duration-700 xl:-text-lg 2xl:text-base text-background/60 placeholder-line" data-splitting="words" data-v-1733f595>${ssrInterpolate(__props.title)}</p></div></div><div class="relative flex items-stretch h-full gap-6 mb-4" data-v-1733f595><div class="${ssrRenderClass([{ "animate": unref(store).reduceMotion }, "w-3 min-h-full transition-all duration-700 bg-background bq-border swing-in-top-bck motionless:opacity-100"])}" data-v-1733f595></div><blockquote class="text-xs italic font-thin leading-relaxed tracking-wide transition-all duration-700 md:text-base xl:text-lg 2xl:text-xl" data-v-1733f595>${(_a = __props.quote) != null ? _a : ""}</blockquote></div>`);
      _push(ssrRenderComponent(Links, {
        text: "View on LinkedIn \u2192",
        href: "https://www.linkedin.com/in/emmtalarico",
        target: "_blank",
        class: "mb-6 text-sm lg:mb-0"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/Testimonial.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Testimonial = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-1733f595"]]);
const excerptLength = 700;
const _sfc_main$6 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const modalContainer = ref(null);
    const { $gsap: gsap } = useNuxtApp();
    const testimonialSection = ref(null);
    ref(null);
    const loop = ref([]);
    const selectedTestimonial = ref(null);
    const store = useMainStore();
    const modalOpen = ref(false);
    const sectionTriggers = [];
    const sectionTimelines = [];
    function getExcerptParagraphs(paragraphs) {
      let remaining = excerptLength;
      const out = [];
      for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i];
        if (remaining <= 0) break;
        if (p.length <= remaining) {
          out.push(p);
          remaining -= p.length;
        } else {
          out.push(p.slice(0, remaining) + "\u2026");
          remaining = 0;
          break;
        }
      }
      return out;
    }
    function openModal(testimonial) {
      modalOpen.value = true;
      selectedTestimonial.value = testimonial;
    }
    function closeModal() {
      modalContainer.value;
      modalOpen.value = false;
      selectedTestimonial.value = null;
    }
    async function initTestimonialAnimations() {
      if (!testimonialSection.value || store.reduceMotion) return;
      const cards = testimonialSection.value.querySelectorAll(".testimonal-card");
      if (!cards.length) return;
      cards.forEach((card) => {
        const phEls = card.querySelectorAll(".placeholder-line");
        const phInstances = Array.from(phEls).map((el) => new PlaceholderJS(el, { manual: true, speed: 0.5 }));
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 60%",
            onEnter: () => {
              store.toggleFold(true);
              phInstances.forEach((pH, i) => {
                AnimationFrame(() => {
                  pH.play();
                }, i * 150);
              });
            },
            onEnterBack: () => {
              store.toggleFold(false, true);
              phInstances.forEach((pH, i) => {
                AnimationFrame(() => {
                  pH.play();
                }, i * 150);
              });
            },
            onLeaveBack: () => {
              phInstances.forEach((pH, i) => {
                if (pH.getTimeline()) {
                  AnimationFrame(() => {
                    pH.getTimeline().reverse();
                  }, i * 150);
                } else {
                  pH.update();
                }
              });
            }
          }
        }).fromTo(
          card,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power1.out"
          }
        );
        sectionTimelines.push(tl);
        sectionTriggers.push(ScrollTrigger.getById(card) || ScrollTrigger.getAll().slice(-1)[0]);
      });
    }
    watch(() => store.ready, async (ready) => {
      if (!ready || store.reduceMotion) return;
      await nextTick();
      await initTestimonialAnimations();
    }, { immediate: true });
    watch(() => store.reduceMotion, async (rm) => {
      var _a, _b;
      await nextTick();
      if (!rm) {
        await initTestimonialAnimations();
      } else {
        sectionTriggers.forEach((t) => t == null ? void 0 : t.kill());
        sectionTimelines.forEach((tl) => tl == null ? void 0 : tl.kill());
        sectionTriggers.length = 0;
        sectionTimelines.length = 0;
        (_b = (_a = testimonialSection.value) == null ? void 0 : _a.querySelectorAll(".testimonal-card")) == null ? void 0 : _b.forEach((el) => {
          gsap.set(el, { clearProps: "all" });
        });
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "testimonialSection",
        ref: testimonialSection,
        class: "relative pb-0 lg:pb-24 overflow-clip"
      }, _attrs))}><div class="max-w-full lg:max-w-[1024px] xl:max-w-[1290px] px-8 lg:px-12 mx-auto flex justify-between items-end md:items-start heading"><h2 class="mb-8 text-2xl md:text-3xl max-w-110 placeholder-line" data-splitting="words"> Past Experiences </h2></div><div class="max-w-full lg:max-w-[1024px] xl:max-w-[1290px] px-8 lg:px-12 mx-auto lg:flex gap-8 lg:gap-14 items-stretch lg:h-fit relative"><!--[-->`);
      ssrRenderList(loop.value, (t, index) => {
        _push(`<div class="relative flex flex-col items-start justify-between mb-8 testimonial-row w-fit group testimonal-card"><div class="flex-grow **:transition-all py-6"><p class="text-lg font-semibold opacity-0 text-primary dark:text-background placeholder-line" data-splitting="words">${ssrInterpolate(t.name)}</p><p class="mb-3 text-xs text-gray-500 opacity-0 placeholder-line" data-splitting="words">${ssrInterpolate(t.title)}</p><!--[-->`);
        ssrRenderList(getExcerptParagraphs(t.bodyPlain), (p, index2) => {
          _push(`<p class="mb-6 text-sm opacity-0 text-primary dark:text-background placeholder-line last:mb-0" data-splitting="words">${ssrInterpolate(p)}</p>`);
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(Links, {
          href: "#",
          text: "Read More",
          onClick: () => openModal(t),
          class: "mb-6 text-sm lg:mb-0"
        }, null, _parent));
        _push(`<div class="lg:absolute lg:-right-7 lg:top-15 card-border swing-in-responsive w-full origin-center h-[3px] lg:w-[3px] lg:h-[75%] bg-current/20 transition duriation-900 animate group-last:hidden"></div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_sfc_main$b, {
        isOpen: !!modalOpen.value,
        onClose: closeModal,
        contentClass: "bg-gray-800 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Testimonial, {
              name: selectedTestimonial.value.name,
              title: selectedTestimonial.value.title,
              quote: selectedTestimonial.value.body,
              active: true,
              class: "modal-contant"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Testimonial, {
                name: selectedTestimonial.value.name,
                title: selectedTestimonial.value.title,
                quote: selectedTestimonial.value.body,
                active: true,
                class: "modal-contant"
              }, null, 8, ["name", "title", "quote"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "UX",
  __ssrInlineRender: true,
  setup(__props) {
    const paths = [
      // Path split manually to preserve layering and DRY logic
      "M6.917,26.041h26.667c2.11,3.536,5.964,5.917,10.372,5.917c4.409,0,8.263-2.381,10.373-5.917h2.754  c3.4,0,6.167-2.767,6.167-6.167s-2.767-6.167-6.167-6.167h-2.754c-2.11-3.536-5.964-5.917-10.373-5.917  c-4.408,0-8.262,2.381-10.372,5.917H6.917c-3.4,0-6.167,2.766-6.167,6.167S3.517,26.041,6.917,26.041z",
      "M57.083,16.708  c1.746,0,3.167,1.42,3.167,3.167s-1.421,3.167-3.167,3.167h-1.479c0.275-1.011,0.436-2.07,0.436-3.167s-0.16-2.155-0.436-3.167  H57.083z",
      "M43.956,10.791c5.009,0,9.084,4.075,9.084,9.083c0,5.009-4.075,9.084-9.084,9.084s-9.083-4.075-9.083-9.084  C34.873,14.866,38.947,10.791,43.956,10.791z",
      "M6.917,16.708h25.391c-0.275,1.011-0.435,2.069-0.435,3.167s0.16,2.156,0.436,3.167  H6.917c-1.746,0-3.167-1.421-3.167-3.167S5.171,16.708,6.917,16.708z",
      "M57.082,37.959H30.417c-2.11-3.537-5.964-5.918-10.373-5.918c-4.409,0-8.263,2.381-10.374,5.918H6.917  c-3.4,0-6.167,2.766-6.167,6.166s2.767,6.167,6.167,6.167h2.754c2.111,3.536,5.964,5.917,10.373,5.917  c4.408,0,8.262-2.381,10.372-5.917h26.666c3.401,0,6.168-2.767,6.168-6.167S60.483,37.959,57.082,37.959z",
      "M6.917,47.292  c-1.746,0-3.167-1.421-3.167-3.167s1.421-3.166,3.167-3.166h1.478C8.12,41.97,7.96,43.028,7.96,44.125  c0,1.098,0.16,2.155,0.436,3.167H6.917z",
      "M20.044,53.209c-5.009,0-9.084-4.075-9.084-9.084s4.075-9.084,9.084-9.084  c5.008,0,9.083,4.075,9.083,9.084S25.052,53.209,20.044,53.209z",
      "M57.082,47.292h-25.39c0.275-1.012,0.435-2.069,0.435-3.167  c0-1.097-0.16-2.155-0.435-3.166h25.39c1.747,0,3.168,1.42,3.168,3.166S58.829,47.292,57.082,47.292z"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        ref: "mainIcon",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><!--[-->`);
      ssrRenderList(paths, (d, i) => {
        _push(`<path${ssrRenderAttr("d", d)} stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>`);
      });
      _push(`<!--]--></svg>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/UX.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Frontend",
  __ssrInlineRender: true,
  setup(__props) {
    const paths = [
      "M490.39,399.89H21.61C10.24,399.89,1,390.64,1,379.28V56.91C1,45.55,10.24,36.3,21.61,36.3h468.78c11.36,0,20.61,9.24,20.61,20.61v322.36C511,390.64,501.76,399.89,490.39,399.89z M21.61,51.76c-2.84,0-5.15,2.31-5.15,5.15v322.36c0,2.84,2.31,5.16,5.15,5.16h468.78c2.84,0,5.15-2.32,5.15-5.16V56.91c0-2.84-2.31-5.15-5.15-5.15H21.61z",
      "M468.63,475.7H43.36C20,475.7,1,451.39,1,421.51c0-4.27,3.46-7.73,7.73-7.73h164.85c1.64,0,3.22,0.52,4.55,1.48l21.82,15.88h94.19l29.7-16.4c1.15-0.63,2.43-0.97,3.74-0.97h175.7c4.27,0,7.73,3.46,7.73,7.73C511,451.39,491.99,475.7,468.63,475.7z M17.02,429.24c2.57,17.44,13.59,31,26.34,31h425.26c12.76,0,23.79-13.56,26.35-31H329.57l-29.7,16.4c-1.15,0.63-2.43,0.97-3.74,0.97h-98.7c-1.64,0-3.22-0.52-4.55-1.48l-21.82-15.88H17.02z",
      "M161.64,98.39H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h87.84c4.27,0,7.73,3.46,7.73,7.73C169.37,94.94,165.91,98.39,161.64,98.39z",
      "M117.72,141.77H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.93c4.27,0,7.73,3.46,7.73,7.73C125.45,138.31,122,141.77,117.72,141.77z",
      "M366.62,141.77H322.7c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.92c4.27,0,7.73,3.46,7.73,7.73C374.35,138.31,370.89,141.77,366.62,141.77z",
      "M271.18,141.77H169.23c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73C278.91,138.31,275.45,141.77,271.18,141.77z",
      "M117.72,242.63H73.8c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h43.93c4.27,0,7.73,3.46,7.73,7.73S122,242.63,117.72,242.63z",
      "M366.62,242.63H322.7c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h43.92c4.27,0,7.73,3.46,7.73,7.73S370.89,242.63,366.62,242.63z",
      "M271.18,242.63H169.23c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73S275.45,242.63,271.18,242.63z",
      "M117.72,343.49H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.93c4.27,0,7.73,3.46,7.73,7.73C125.45,340.04,122,343.49,117.72,343.49z",
      "M366.62,343.49H322.7c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.92c4.27,0,7.73,3.46,7.73,7.73C374.35,340.04,370.89,343.49,366.62,343.49z",
      "M271.18,343.49H169.23c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73C278.91,340.04,275.45,343.49,271.18,343.49z",
      "M175.75,293.06H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73C183.47,289.61,180.02,293.06,175.75,293.06z",
      "M323.27,293.06H221.33c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73C331,289.61,327.55,293.06,323.27,293.06z",
      "M175.75,192.2H73.8c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73S180.02,192.2,175.75,192.2z",
      "M323.27,192.2H221.33c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73S327.55,192.2,323.27,192.2z"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        ref: "mainIcon",
        viewBox: "0 0 512 512",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><!--[-->`);
      ssrRenderList(paths, (d, i) => {
        _push(`<path${ssrRenderAttr("d", d)} stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>`);
      });
      _push(`<!--]--></svg>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Frontend.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "API",
  __ssrInlineRender: true,
  setup(__props) {
    const paths = [
      "M18,9.7a.51.51,0,0,1-.1.7h0a3.55,3.55,0,0,0,3,1.67A3.7,3.7,0,0,0,24.5,8.29,3.7,3.7,0,0,0,20.91,4.5a3.7,3.7,0,0,0-3.59,3.79,3.76,3.76,0,0,0,.21,1.22A.52.52,0,0,1,18,9.7Z",
      "M20.91,3.5a4.7,4.7,0,0,0-4.59,4.79,4.74,4.74,0,0,0,.35,1.81l-5.06,3.79a.5.5,0,0,0,.3.9.57.57,0,0,0,.3-.1L17.14,11a4.52,4.52,0,0,0,3.77,2.07A4.7,4.7,0,0,0,25.5,8.29,4.7,4.7,0,0,0,20.91,3.5Zm0,8.57a3.55,3.55,0,0,1-3-1.67,3.78,3.78,0,0,1-.4-.89,3.76,3.76,0,0,1-.21-1.22A3.7,3.7,0,0,1,20.91,4.5,3.7,3.7,0,0,1,24.5,8.29,3.7,3.7,0,0,1,20.91,12.07Z",
      "M16.82,20.64a3.62,3.62,0,0,0-1.81.51.31.31,0,0,0-.1-.15l-2.36-2.48a3.6,3.6,0,0,0,.68-2.09,3.44,3.44,0,0,0-3.37-3.5,3.5,3.5,0,0,0,0,7,3.24,3.24,0,0,0,2-.69l2.34,2.45.05,0a4,4,0,0,0-1.19,2.85,3.77,3.77,0,1,0,7.54,0A3.86,3.86,0,0,0,16.82,20.64ZM7.5,16.43a2.44,2.44,0,0,1,2.36-2.5,2.5,2.5,0,0,1,0,5A2.44,2.44,0,0,1,7.5,16.43ZM16.82,27.5a2.93,2.93,0,0,1,0-5.86,2.93,2.93,0,0,1,0,5.86Z"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        ref: "mainIcon",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      }, _attrs))}><!--[-->`);
      ssrRenderList(paths, (d, i) => {
        _push(`<path${ssrRenderAttr("d", d)} stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>`);
      });
      _push(`<!--]--></svg>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/API.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ProblemSolving",
  __ssrInlineRender: true,
  setup(__props) {
    const paths = [
      "M3.10897 11.1774C4.28484 10.7331 12.7574 10.6043 19.7112 10.3991C19.7112 10.3991 20.1081 9.35233 19.7112 9.23759C16.3323 8.26088 17.2562 3.48293 20.6879 3.16616C24.1196 2.84939 25.677 7.20498 22.7997 9.23759C22.2956 9.59368 22.7997 10.3991 22.7997 10.3991C22.7997 10.3991 37.3873 10.3505 38.0724 11.1774C38.8801 12.1523 37.9502 19.3645 38.0724 26.9901C38.0724 26.9901 38.845 26.9596 39.477 26.9901C41.8806 23.8028 45.8517 25.7883 45.7472 28.9757C45.6427 32.163 40.94 32.6856 39.477 30.3865C38.8559 30.4254 38.0724 30.3865 38.0724 30.3865C38.0525 38.0457 39.0834 45.6352 38.0724 46.1407C37.01 46.6719 29.6559 46.9243 22.0031 46.8074C22.0031 46.8074 22.0573 45.36 22.0031 44.4352C24.8986 43.277 25.304 37.3701 20.1499 37.0805C14.9959 36.791 14.8221 42.7558 18.1205 44.4352C18.0656 45.3242 18.1205 46.7159 18.1205 46.7159C11.3896 46.4989 5.22256 45.9788 3.81184 45.0923C0.542975 43.0382 1.81419 29.7099 1.81419 29.7099C1.81419 29.7099 2.86584 29.7249 3.36813 29.7099C7.27281 33.9695 11 31.1741 11 28.0681C11 24.9621 8.33772 22.0336 3.81184 25.8052C2.99737 25.7516 1.72173 25.8052 1.72173 25.8052C1.60988 18.3659 1.90664 11.6316 3.10897 11.1774Z"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><!--[-->`);
      ssrRenderList(paths, (d, i) => {
        _push(`<path${ssrRenderAttr("d", d)} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>`);
      });
      _push(`<!--]--></svg>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ProblemSolving.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const offerings = [
  {
    title: "Front-End Development",
    description: "I build performant, responsive, and accessible interfaces using modern frameworks and workflows.",
    points: ["Vue.js & Nuxt.js", "Tailwind & Bootstrap", "GSAP & Motion Design"],
    icon: _sfc_main$4,
    textColor: "text-toxic-mint"
  },
  {
    title: "Custom WordPress Builds",
    description: "Modular and maintainable WordPress sites using ACF, Sage, and custom blocks.",
    points: ["ACF + Block Development", "Theme Optimization", "Bedrock/Trellis Stack"],
    icon: _sfc_main$c,
    textColor: "text-lime-glow"
  },
  {
    title: "UI/UX Strategy",
    description: "Collaborative design/dev feedback loops to ensure UI systems support real-world use cases.",
    points: ["Design-Dev Bridge", "Reusable Components", "Accessibility First"],
    icon: _sfc_main$5,
    textColor: "text-hot-coral"
  },
  {
    title: "API Integrations",
    description: "I wire up third-party data in ways that are efficient, flexible, and reliable.",
    points: ["Airtable & Headless CMS", "REST/GraphQL Consumption", "Dynamic Filtering & Pagination"],
    icon: _sfc_main$3,
    textColor: "text-electric-purple"
  },
  {
    title: "Creative Tech Problem Solving",
    description: "Whether the brief is loose, messy, or deeply complex\u2014I break it down and get it working. From branding launches to press strategies, I bring a cross-disciplinary mindset shaped by years of managing communications, PR, and digital systems across mission-driven orgs and creative teams.",
    points: ["Systems Thinking", "Cross-Channel Coordination", "Project Management", "Rapid Prototyping", "Technical & Strategic Advising"],
    textColor: "text-lime-glow",
    icon: _sfc_main$2
  }
];
const _sfc_main$1 = {
  __name: "Offerings",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap } = useNuxtApp();
    const { width } = useWindowSize();
    width.value > 778;
    const heading = ref(null);
    const section = ref(null);
    const offeringRefs = ref([]);
    const store = useMainStore();
    const isDesktop = ref(false);
    const triggers = [];
    const timelines = [];
    function clearAllAnimations() {
      triggers.forEach((t) => t == null ? void 0 : t.kill());
      timelines.forEach((tl) => tl == null ? void 0 : tl.kill());
      triggers.length = 0;
      timelines.length = 0;
      nextTick(() => {
        offeringRefs.value.forEach((card) => {
          gsap.set(card, { clearProps: "all" });
          const listContent = card.querySelector(".list-content");
          gsap.set(listContent, { clearProps: "all" });
          const overlayPaths = card.querySelectorAll(".icon-wipe-overlay path");
          overlayPaths.forEach((path) => {
            path.style.strokeDashoffset = path.style.strokeDasharray = 0;
          });
        });
      });
    }
    async function offeringsDesktop() {
      if (!store.ready || store.reduceMotion) return;
      offeringRefs.value.forEach(async (card, index) => {
        await nextTick();
        const { textColor } = offerings[index];
        const baseIcon = card.querySelector(".text-current");
        const listContent = card.querySelector(".list-content");
        const cardBorder = card.querySelector(".card-border");
        const overlayIcon = card.querySelector(".icon-wipe-overlay");
        const iconBTN = card.querySelector(".icon-btn");
        const cardHeader = card.querySelector("h3");
        const cardP = card.querySelector("p");
        const cardListings = card.querySelectorAll(".listings li");
        const cardHeaderAnim = new PlaceholderJS(cardHeader, { manual: true, speed: 2 });
        const cardPAnim = new PlaceholderJS(cardP, { manual: true, speed: 0.5 });
        if (!baseIcon || !overlayIcon) return;
        const overlayPaths = overlayIcon.querySelectorAll("path");
        overlayPaths.forEach((path) => {
          const len = path.getTotalLength();
          path.style.strokeDasharray = len;
          path.style.strokeDashoffset = len;
        });
        const entryTL = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }).timeScale(1.5);
        entryTL.fromTo(card, { autoAlpha: 0 }, {
          autoAlpha: 1,
          ease: "power1.out",
          duration: 0.3,
          onComplete: () => cardBorder.classList.add("animate")
        }, "+=0.5");
        entryTL.fromTo(iconBTN, {
          scale: 1,
          autoAlpha: 0
        }, {
          scale: 1.15,
          autoAlpha: 0.8,
          duration: 0.3
        }, "-=0.5").fromTo(overlayIcon, {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          duration: 0.3
        }, "-=0.5").to(overlayPaths, {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.05
        }, "+=0.3");
        if (isDesktop.value) {
          entryTL.fromTo(listContent, { x: 0 }, {
            x: 145,
            duration: 0.5,
            ease: "back.out(0.9)"
          }, "-=0.3");
        }
        entryTL.call(() => {
          cardHeaderAnim.play();
          cardPAnim.play();
        }, null, 0);
        entryTL.fromTo(cardP, { autoAlpha: 1 }, {
          autoAlpha: 0.8,
          ease: "power1.out",
          duration: 0.3
        }, "-=0.2");
        entryTL.fromTo(cardListings, {
          autoAlpha: 0,
          y: -40
        }, {
          autoAlpha: 1,
          ease: "back.out(0.9)",
          y: 0,
          duration: 0.3,
          stagger: 0.15
        }, "+=0.2");
        timelines.push(entryTL);
        const trigger = ScrollTrigger.create({
          trigger: card.querySelector(".sentry"),
          start: "top 65%",
          end: "bottom 24%",
          onEnter: () => {
            iconBTN.classList.add("wobble-ver-right-scale");
            card.classList.add(textColor);
          },
          onEnterBack: () => {
            iconBTN.classList.add("wobble-ver-right-scale");
            card.classList.add(textColor);
          },
          onLeaveBack: () => {
            iconBTN.classList.remove("wobble-ver-right-scale");
            card.classList.remove(textColor);
          },
          onLeave: () => {
            iconBTN.classList.remove("wobble-ver-right-scale");
            card.classList.remove(textColor);
          }
        });
        triggers.push(trigger);
      });
      ScrollTrigger.refresh();
    }
    function headingTrigger() {
      const headingEl = heading.value;
      const offeringsEl = section.value;
      const headingAnim = new PlaceholderJS(headingEl, { manual: true, speed: 2 });
      const trigger = ScrollTrigger.create({
        trigger: offeringsEl,
        start: "top 85%",
        end: "bottom 44%",
        onEnter: () => headingAnim.play(),
        onLeaveBack: () => {
          var _a;
          return (_a = headingAnim.getTimeline()) == null ? void 0 : _a.progress(1).reverse();
        }
      });
      triggers.push(trigger);
    }
    watch(
      () => store.ready,
      async (ready) => {
        if (!ready || store.reduceMotion) return;
        await nextTick();
        headingTrigger();
        await offeringsDesktop();
      },
      { immediate: true }
    );
    watch(
      () => store.reduceMotion,
      async (rm) => {
        clearAllAnimations();
        if (!rm && store.ready) {
          await nextTick();
          headingTrigger();
          await offeringsDesktop();
        }
      },
      { immediate: true }
    );
    watch(width, async (newWidth) => {
      const desktopNow = newWidth > 772;
      if (desktopNow !== isDesktop.value) {
        isDesktop.value = desktopNow;
        if (!store.reduceMotion && store.ready) {
          clearAllAnimations();
          await nextTick();
          headingTrigger();
          await offeringsDesktop();
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "offerings",
        ref_key: "section",
        ref: section,
        class: "transition duration-700 py-25 bg-primary/5 dark:bg-background/5 motionless:bg-primary/95 overflow-x-clip motionless:text-background"
      }, _attrs))}><div class="max-w-[1440px] mx-auto px-8 lg:px-12"><h2 class="mb-12 text-3xl font-bold text-center md:text-4xl font-heading placeholder-line md:text-left" data-splitting="words">I want to help</h2><div class="flex flex-col gap-10"><!--[-->`);
      ssrRenderList(unref(offerings), (item, index) => {
        _push(`<div class="offering-card"><div class="sentry"></div><div class="relative flex flex-col items-center gap-6 pb-4 transition-all duration-700 lg:gap-12 md:flex-row">`);
        if (item.icon) {
          _push(`<div class="icon-btn relative w-24 h-24 group min-w-[120px] opacity-0 md:absolute md:top-2 delay-200 motionless:md:relative motionless:opacity-100">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "absolute inset-0 z-0 w-full h-full text-current opacity-0" }, null), _parent);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
            class: ["absolute inset-0 z-10 w-full h-full transition-all duration-700 opacity-0 icon-wipe-overlay motionless:opacity-100", item.textColor]
          }, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-center list-content md:text-left md:max-w-4/5"><h3 class="font-semibold opacity-0 text-1xl md:text-2xl md:mb-2 placeholder-line" data-splitting="words">${ssrInterpolate(item.title)}</h3><p class="leading-relaxed opacity-0 text-md md:text-base placeholder-line" data-splitting="words">${ssrInterpolate(item.description)}</p><ul class="flex flex-wrap justify-center mt-4 text-sm list-disc list-inside opacity-70 md:flex-col listings"><!--[-->`);
        ssrRenderList(item.points, (point, i) => {
          _push(`<li class="mr-2 opacity-0 motionless:opacity-100"><span class="-ml-2">${ssrInterpolate(point)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div><div class="${ssrRenderClass([{ "hidden": index === unref(offerings).length - 1 }, "card-border swing-in-left-fwd-slow h-[2px] bg-current/20 transition duriation-900 mt-4 opacity-0 motionless:opacity-100"])}"></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/Offerings.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: "%s | Code Artisan",
      title: "About",
      meta: [
        {
          name: "description",
          content: "Creating powerful digital products for brands that inspire us."
        },
        { property: "og:title", content: "About | Code Artisan" },
        { property: "og:url", content: "https://codeartisan.dev/about" },
        {
          property: "og:image",
          content: "https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto,w_960/v1745552050/Title_bjlnl8.png"
        }
      ]
    });
    const store = useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative transition duration-700 font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary overflow-x-clip" }, _attrs))} data-v-4f7a2736><div class="utilities max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto pt-9 lg:pt-12 pb-18 lg:pb-20" data-v-4f7a2736>`);
      if (unref(store).loaded) {
        _push(ssrRenderComponent(InnerSecondaryNav, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(store).loaded) {
        _push(ssrRenderComponent(InnerNav, {
          title: "About",
          brandLabel: "hi, i'm emm.",
          brandURL: "/"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$1$1, null, null, _parent));
      _push(`<div class="flex flex-col gap-6 max-w-full mt-6 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto items-start" data-v-4f7a2736>`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      if (unref(store).loaded) {
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(store).reduceMotion && unref(store).loaded) {
        _push(ssrRenderComponent(Lyric, { class: "my-20 lg:mt-34" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(store).loaded) {
        _push(ssrRenderComponent(Contact, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$2$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f7a2736"]]);

export { About as default };
//# sourceMappingURL=About-DQYRriDx.mjs.map
