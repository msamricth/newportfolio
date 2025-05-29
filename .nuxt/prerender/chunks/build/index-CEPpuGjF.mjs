import { mergeProps, ref, computed, watch, nextTick, withCtx, createVNode, unref, createBlock, createCommentVNode, openBlock, withModifiers, toDisplayString, Fragment, renderList, useSSRContext } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-KCT0ISDr.mjs';
import { C as Contact, _ as _sfc_main$7, S as SecondaryNav, u as useMainStore } from './Footer-CpeEpO-l.mjs';
import gsap from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/gsap/dist/gsap.js';
import { _ as _export_sfc, u as useNuxtApp, n as navigateTo } from './server.mjs';
import { M as MainButton } from './MainButton-CMkhavkU.mjs';
import { S as Splide, a as SplideSlide } from '../_/vue-splide.esm.mjs';
import { u as useModalStore, w as work } from './work-Dx-p7MSX.mjs';
import { u as useHead } from './v3-Dnw41gJi.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/devalue/index.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$6 = {
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const mainStore = useMainStore();
    const navContainer = ref(null);
    const isSticky = ref(false);
    const nav = ref(null);
    ref(null);
    const isDesktop = ref(false);
    ref(null);
    let tl;
    const onNavHoverIn = (event) => {
      const targetEl = event.target;
      const chars = targetEl.querySelectorAll(".char");
      if (!chars.length) return;
      const tl2 = gsap.timeline();
      tl2.fromTo(
        chars,
        {
          x: () => gsap.utils.random(-50, 50),
          y: () => gsap.utils.random(-40, 0),
          className: "char text-current"
        },
        {
          x: 0,
          y: 0,
          className: "char text-electric-purple dark:text-accent",
          ease: "power3.out",
          duration: 0.5,
          stagger: {
            amount: 0.3,
            from: "random"
          }
        }
      );
      tl2.fromTo(
        chars,
        {
          x: () => gsap.utils.random(-50, 50),
          y: () => gsap.utils.random(-40, 0),
          className: "char text-electric-purple dark:text-accent"
        },
        {
          x: 0,
          y: 0,
          className: "char text-current",
          ease: "power3.out",
          duration: 0.5,
          stagger: {
            amount: 0.3,
            from: "random"
          }
        },
        0.4
      );
      return tl2;
    };
    const effectTimeline = (targetEl, interval = 0) => {
      const tl2 = gsap.timeline({ paused: true });
      const chars = [];
      if (chars.length === 0) return;
      tl2.fromTo(
        chars,
        {
          x: () => gsap.utils.random(-50, 50),
          y: () => gsap.utils.random(-40, 0),
          autoAlpha: 0
        },
        {
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: "power3.out",
          duration: 0.5,
          stagger: {
            amount: 0.2,
            from: "random"
          }
        },
        interval
      );
      return tl2;
    };
    function updateStickyTimeline() {
      tl.clear();
      const intCom = computed(() => isDesktop.value ? 0.2 : 0);
      if (!nav.value) return;
      const int = intCom.value;
      tl.fromTo(nav.value, { alpha: 0 }, { alpha: 1 }, 0);
      const navItems = nav.value.querySelectorAll(".nav-item");
      navItems.forEach((item, i) => {
        tl.fromTo(item, { autoAlpha: 0 }, {
          autoAlpha: 1,
          duration: 0.15,
          ease: "cubic-bezier(.215, .61, .355, 1.000)",
          onStart: () => {
            const itemTL = effectTimeline(item, i * 0.2 + (int + 0.2));
            itemTL == null ? void 0 : itemTL.play();
          }
        }, i * 0.1 + (int + 0.1));
      });
    }
    watch([isSticky, isDesktop], () => {
      updateStickyTimeline();
      if (isSticky.value) {
        tl.timeScale(1).restart();
      } else {
        tl.timeScale(3).reverse();
      }
    });
    watch(
      () => mainStore.navOpen,
      async (open) => {
        if (open && navContainer.value) {
          await nextTick();
          const el = navContainer.value;
          const buffer = 200;
          const startY = (void 0).scrollY;
          const targetY = el.getBoundingClientRect().top + startY + buffer;
          (void 0).scrollTo({ top: targetY, behavior: "smooth" });
          mainStore.closeNav();
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div data-v-d2860ce8></div><header id="nav" class="${ssrRenderClass([isSticky.value ? "fixed left-0 w-full bg-background/70 dark:bg-primary/70 inverted:bg-primary/70 inverted:dark:bg-background/70 backdrop-blur transition duration-700" : " absolute ", "py-4 mx-auto z-20 w-full will-change-transform transform-gpu"])}" data-v-d2860ce8><div class="nav-wrapper max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto flex items-center justify-between" data-v-d2860ce8><div class="${ssrRenderClass([isSticky.value ? ["text-lg", "lg:text-lg", "hover:text-electric-purple", "dark:hover:text-accent"] : ["text-2xl", "lg:text-4xl"], "text-primary dark:text-background inverted:text-background inverted:dark:text-primary nav-brand transition-all duration-700"])}" data-v-d2860ce8><a aria-label="Return Home" href="/" class="text-nowrap animate subtle-slide-in font-black block" data-v-d2860ce8> hi, i\u2019m Emm.</a></div><nav class="${ssrRenderClass([isSticky.value ? [""] : ["opacity-0"], "flex space-x-8 text-sm font-heading font-semibold group/nav ml-auto text-primary dark:text-background inverted:text-background inverted:dark:text-primary"])}" data-v-d2860ce8>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "group-hover/nav:opacity-60 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-item" data-v-d2860ce8${_scopeId}>about</span>`);
          } else {
            return [
              createVNode("span", {
                class: "nav-item",
                onMouseenter: onNavHoverIn
              }, "about", 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "group-hover/nav:opacity-60 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700",
        to: "/work/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-item" data-v-d2860ce8${_scopeId}>work</span>`);
          } else {
            return [
              createVNode("span", {
                class: "nav-item",
                onMouseenter: onNavHoverIn
              }, "work", 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#sayHello" class="group-hover/nav:opacity-60 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700" data-v-d2860ce8><span class="nav-item" data-v-d2860ce8>say hello</span></a></nav></div></header><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/Nav.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Nav = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d2860ce8"]]);
const _sfc_main$5 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap2 } = useNuxtApp();
    ref(null);
    const container = ref(null);
    ref(null);
    const delay = ref("0.5s");
    const animDelay = computed(() => ({
      "--theme-main-animation-delay": delay.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: "max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto min-h-[85dvh] py-24 hero-container flex flex-col justify-center"
      }, _attrs))}><div class="hero-wrapper animate relative w-full"><div class="utilties absolute right-0 -top-15">`);
      _push(ssrRenderComponent(SecondaryNav, null, null, _parent));
      _push(`</div><div class="headline-wrapper decor-grid"><h1 class="headline font-heading font-black text-6xl leading-none xl:pt-8 **:align-sub mt-6 uppercase placeholder-line" data-splitting="words"> Building digital bridges between ideas &amp; impact </h1><div class="decor-wrap"><img crossorigin="anonymous" src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346874/mixer_ha98hb.svg" class="decor jello-horizontal h-auto" width="180" height="180" alt="Illustration of a mixer" style="${ssrRenderStyle(animDelay.value)}"></div><div class="decor-wrap"><img crossorigin="anonymous" src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346872/flower-4_hnflq8.svg" class="decor heartbeat h-auto" width="180" height="180" alt="Illustration of a flower"></div><div class="decor-wrap"><img crossorigin="anonymous" src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346873/headphones_asqozg.svg" class="decor shake-top h-auto" width="180" height="180" alt="Illustration of headphones"></div><div class="decor-wrap"><img crossorigin="anonymous" src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346873/flower-5_xaniod.svg" class="decor rotate-ccw90-forever h-auto" width="180" height="180" alt="Illustration of a flower"></div><div class="decor-wrap"><img crossorigin="anonymous" src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745390483/bmx_hzx4dd.svg" class="decor rotate-forever h-auto" width="180" height="180" alt="Illustration of a bmx bike"></div><div class="decor-wrap"><img crossorigin="anonymous" src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346872/flower-2_ixqfek.svg" width="180" height="180" class="decor rotate-ccw90-forever h-auto" style="${ssrRenderStyle(animDelay.value)}" alt="Illustration of a flower"></div><div class="decor-wrap"><img crossorigin="anonymous" src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745346872/heart_dfz3gf.svg" class="decor jello-horizontal h-auto" width="180" height="180" alt="Illustration of a heart"></div><div class="decor-wrap"><img crossorigin="anonymous" src="https://res.cloudinary.com/dp1qyhhlo/image/upload/v1745390928/code_tigrlv.svg" class="decor vibrate h-auto" width="180" height="180" alt="Illustration of code syntex"></div></div><div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Artisan",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap2 } = useNuxtApp();
    const isArtisan = ref(false);
    const artisan = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "md:min-h-[60vh]",
        ref_key: "artisan",
        ref: artisan
      }, _attrs))}><div class="code-artisan lg:my-34 my-18 md:w-3/4 mx-auto relative md:sticky top-[20%]"><div class="${ssrRenderClass([isArtisan.value ? ["animate"] : ["opacity-0"], "swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mb-4 delay-700"])}"></div><h3 class="font-heading font-semibold text-2xl lg:text-3xl leading-snug placeholder-line" data-splitting="words"> Code artisan forging WordPress &amp; Vue.js experiences by day, crafting dirt jumps &amp; trails for bikes by night\u2014 UX zeal meets mud-and-grit creativity. </h3><div class="${ssrRenderClass([isArtisan.value ? ["animate"] : ["opacity-0"], "swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mt-4 delay-700"])}"></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/Artisan.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap2 } = useNuxtApp();
    ref(false);
    const section = ref(null);
    const openAbout = () => {
      navigateTo("/about");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "section",
        ref: section,
        class: "pt-16",
        id: "about"
      }, _attrs))}><div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto"><div class="min-h-[80vh]"><div class="introduction-wrapper sticky md:max-w-2/3 mt-4 md:mt-8 top-[15%] md:top-[12%]"><h2 class="italic subtitle mb-4 text-3xl placeholder-line" data-splitting="words">So here&#39;s the thing: </h2><ul class="list-disc mb-12 pl-6 hidden md:block"><li class="placeholder-line text-xl" data-splitting="words">A Developer with <strong>PASSION</strong></li><li class="placeholder-line text-xl" data-splitting="words">An eye for design</li><li class="placeholder-line text-xl" data-splitting="words">API nerd</li><li class="placeholder-line text-xl" data-splitting="words">Bootstrap &amp; Tailwind Queen\u{1F478}</li></ul><div class="placeholder-line introduction" data-splitting="words"><p class="text-secondary text-xl leading-[1.8] mb-6 lg:mb-14" data-splitting="words">I&#39;m a full-stack developer with a passion for clean code, bold design, and building things that actually work\u2014both on screen and in the dirt.\u{1F6B4}\u200D\u2640\uFE0F With deep experience in WordPress, Vue.js, and the occasional Tailwind bender, I specialize in crafting digital systems that are fast, accessible, and built to last.</p></div>`);
      _push(ssrRenderComponent(MainButton, {
        href: "/about",
        class: "btn text-primary dark:text-background inverted:text-background inverted:dark:text-primary hover:text-accent subtle-slide-in",
        label: "What drives me",
        onClick: () => openAbout(),
        delay: "0.7s"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/Intro.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "LogoGarden",
  __ssrInlineRender: true,
  setup(__props) {
    const shuffledLogos = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo-garden max-w-full px-0 mx-auto mb-6 md:mb-32" }, _attrs))}><div class="flex **:max-w-1/2 xl:**:max-w-1/4 opacity-80 flex-wrap justify-center items-center"><!--[-->`);
      ssrRenderList(shuffledLogos.value, (logo, i) => {
        _push(`<img class="dark:invert inverted:invert transition-all mb-8 delay-700 w-70 md:w-100 md:delay-0 h-auto"${ssrRenderAttr("src", logo.src.replace("q_auto,f_auto", "w_100,e_pixelate,f_auto,e_grayscale"))}${ssrRenderAttr("data-src", logo.src)}${ssrRenderAttr("alt", logo.alt)} width="400" height="133">`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LogoGarden.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "FeaturedWork",
  __ssrInlineRender: true,
  setup(__props) {
    useMainStore();
    const modalStore = useModalStore();
    const splide = ref(null);
    ref(null);
    ref([]);
    const isHovered = ref([false]);
    const activeSlideIndex = ref(0);
    const progressOffset = ref(283);
    const strokeLength = 2 * Math.PI * 45;
    ref(null);
    const loaded = ref(false);
    ref([]);
    const truncateHtmlText = (html, maxChars = 140) => {
      let text;
      {
        text = html.replace(/<[^>]+>/g, "");
      }
      return text.length > maxChars ? text.slice(0, maxChars) + "\u2026" : text;
    };
    computed(
      () => {
        var _a;
        return ((_a = work[activeSlideIndex.value]) == null ? void 0 : _a.textColor.replace("text-", "#")) || "#00ffd5";
      }
    );
    const activeTextColor = computed(() => {
      var _a;
      return ((_a = work[activeSlideIndex.value]) == null ? void 0 : _a.textColor) || "text-primary";
    });
    const splideOptions = {
      type: "loop",
      focus: "center",
      //autoplay: true,
      pagination: false,
      pauseOnHover: true,
      arrows: false,
      padding: "15%",
      breakpoints: {
        940: {
          padding: { gap: "12px", left: "12px", right: "2rem" }
        }
      }
    };
    const openWork = (item) => {
      if (item.caseStudy) {
        const slug = "/work/" + item.slug;
        navigateTo(slug);
        return;
      }
      modalStore.queueModalBySlug(item);
      navigateTo("/work");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="pt-20" id="work" data-v-108cd363><div class="relative group h-[70vh] min-h-[550px] md:h-[570px] lg:h-[700px] xl:h-[900px] overflow-y-visible overflow-x-clip pb-8" data-v-108cd363><h2 class="mb-6 lg:mb-18 max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto text-2xl lg:text-5xl placeholder-line" data-splitting="words" data-v-108cd363> Featured Work</h2><div class="splideSlider relative" data-v-108cd363>`);
      _push(ssrRenderComponent(unref(Splide), {
        ref_key: "splide",
        ref: splide,
        options: splideOptions,
        class: "overflow-visible peer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(work), (slide, index) => {
              _push2(ssrRenderComponent(unref(SplideSlide), {
                key: index,
                class: ["transition-all duration-500 group", slide.textColor]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative rounded-xl overflow-hidden flex flex-col justify-center items-center" data-v-108cd363${_scopeId2}>`);
                    if (loaded.value) {
                      _push3(`<div class="flex flex-col md:flex-row justify-center items-start gap-8" data-v-108cd363${_scopeId2}><img crossorigin="anonymous"${ssrRenderAttr("src", slide.image.replace("/q_auto,f_auto", "/q_auto,f_auto,w_1260"))} class="w-full object-cover rounded-xl group-[.is-active]:w-[90%] md:group-[.is-active]:w-[var(--width-slide)] transition-all cursor-pointer duriation-900" data-v-108cd363${_scopeId2}><div class="opacity-0 rounded-xl w-0 group-[.is-active]:opacity-100 group-[.is-active]:w-[20%] transition-all duriation-900 hidden md:block overflow-clip" data-v-108cd363${_scopeId2}><video crossorigin="anonymous" class="aspect-mobile"${ssrRenderAttr("data-src", slide.video.replace("q_auto", "q_auto,w_480"))} playsinline muted="" loop${ssrRenderAttr("poster", slide.video.replace(".m3u8", ".webp").replace("q_auto", "q_auto,so_0.2"))} data-v-108cd363${_scopeId2}></video></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="h-0 opacity-0 flex flex-col justify-end items-start py-6 md:p-6 group-[.is-active]:opacity-100 group-[.is-active]:h-full transition-all duriation-700 w-[85%] lg:w-[65%] lg:mr-26" data-v-108cd363${_scopeId2}><h3 class="${ssrRenderClass([slide.textColor, "text-2xl font-bold mb-2 subtle-slide-in"])}" data-v-108cd363${_scopeId2}>${ssrInterpolate(slide.title)}</h3><div class="flex flex-col gap-6 mb-4" data-v-108cd363${_scopeId2}><div class="flex flex-col justify-between pr-8 lg:pr-18" data-v-108cd363${_scopeId2}><p class="${ssrRenderClass([slide.textColor, "text-base subtle-slide-in"])}" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0.2s" })}" data-v-108cd363${_scopeId2}>${ssrInterpolate(truncateHtmlText(slide.text, 100))}</p></div><div class="flex gap-2 group/ctas flex-wrap max-w-75 flex-col mt-6 md:mt-0" data-v-108cd363${_scopeId2}>`);
                    _push3(ssrRenderComponent(MainButton, {
                      href: "/work/",
                      label: slide.projectTitle,
                      onClick: () => openWork(slide.slug),
                      delay: "0.7s"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative rounded-xl overflow-hidden flex flex-col justify-center items-center" }, [
                        loaded.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-col md:flex-row justify-center items-start gap-8"
                        }, [
                          createVNode("img", {
                            crossorigin: "anonymous",
                            src: slide.image.replace("/q_auto,f_auto", "/q_auto,f_auto,w_1260"),
                            class: "w-full object-cover rounded-xl group-[.is-active]:w-[90%] md:group-[.is-active]:w-[var(--width-slide)] transition-all cursor-pointer duriation-900",
                            onClick: withModifiers(($event) => openWork(slide.slug), ["prevent"])
                          }, null, 8, ["src", "onClick"]),
                          createVNode("div", { class: "opacity-0 rounded-xl w-0 group-[.is-active]:opacity-100 group-[.is-active]:w-[20%] transition-all duriation-900 hidden md:block overflow-clip" }, [
                            createVNode("video", {
                              crossorigin: "anonymous",
                              class: "aspect-mobile",
                              "data-src": slide.video.replace("q_auto", "q_auto,w_480"),
                              playsinline: "",
                              muted: "",
                              loop: "",
                              poster: slide.video.replace(".m3u8", ".webp").replace("q_auto", "q_auto,so_0.2")
                            }, null, 8, ["data-src", "poster"])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", {
                          class: "h-0 opacity-0 flex flex-col justify-end items-start py-6 md:p-6 group-[.is-active]:opacity-100 group-[.is-active]:h-full transition-all duriation-700 w-[85%] lg:w-[65%] lg:mr-26",
                          onMouseover: ($event) => isHovered.value = true,
                          onMouseleave: ($event) => isHovered.value = false
                        }, [
                          createVNode("h3", {
                            class: [slide.textColor, "text-2xl font-bold mb-2 subtle-slide-in"]
                          }, toDisplayString(slide.title), 3),
                          createVNode("div", { class: "flex flex-col gap-6 mb-4" }, [
                            createVNode("div", { class: "flex flex-col justify-between pr-8 lg:pr-18" }, [
                              createVNode("p", {
                                class: [slide.textColor, "text-base subtle-slide-in"],
                                style: { "--theme-main-animation-delay": "0.2s" }
                              }, toDisplayString(truncateHtmlText(slide.text, 100)), 3)
                            ]),
                            createVNode("div", { class: "flex gap-2 group/ctas flex-wrap max-w-75 flex-col mt-6 md:mt-0" }, [
                              createVNode(MainButton, {
                                href: "/work/",
                                label: slide.projectTitle,
                                onClick: () => openWork(slide.slug),
                                delay: "0.7s"
                              }, null, 8, ["label", "onClick"])
                            ])
                          ])
                        ], 40, ["onMouseover", "onMouseleave"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(work), (slide, index) => {
                return openBlock(), createBlock(unref(SplideSlide), {
                  key: index,
                  class: ["transition-all duration-500 group", slide.textColor]
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "relative rounded-xl overflow-hidden flex flex-col justify-center items-center" }, [
                      loaded.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex flex-col md:flex-row justify-center items-start gap-8"
                      }, [
                        createVNode("img", {
                          crossorigin: "anonymous",
                          src: slide.image.replace("/q_auto,f_auto", "/q_auto,f_auto,w_1260"),
                          class: "w-full object-cover rounded-xl group-[.is-active]:w-[90%] md:group-[.is-active]:w-[var(--width-slide)] transition-all cursor-pointer duriation-900",
                          onClick: withModifiers(($event) => openWork(slide.slug), ["prevent"])
                        }, null, 8, ["src", "onClick"]),
                        createVNode("div", { class: "opacity-0 rounded-xl w-0 group-[.is-active]:opacity-100 group-[.is-active]:w-[20%] transition-all duriation-900 hidden md:block overflow-clip" }, [
                          createVNode("video", {
                            crossorigin: "anonymous",
                            class: "aspect-mobile",
                            "data-src": slide.video.replace("q_auto", "q_auto,w_480"),
                            playsinline: "",
                            muted: "",
                            loop: "",
                            poster: slide.video.replace(".m3u8", ".webp").replace("q_auto", "q_auto,so_0.2")
                          }, null, 8, ["data-src", "poster"])
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", {
                        class: "h-0 opacity-0 flex flex-col justify-end items-start py-6 md:p-6 group-[.is-active]:opacity-100 group-[.is-active]:h-full transition-all duriation-700 w-[85%] lg:w-[65%] lg:mr-26",
                        onMouseover: ($event) => isHovered.value = true,
                        onMouseleave: ($event) => isHovered.value = false
                      }, [
                        createVNode("h3", {
                          class: [slide.textColor, "text-2xl font-bold mb-2 subtle-slide-in"]
                        }, toDisplayString(slide.title), 3),
                        createVNode("div", { class: "flex flex-col gap-6 mb-4" }, [
                          createVNode("div", { class: "flex flex-col justify-between pr-8 lg:pr-18" }, [
                            createVNode("p", {
                              class: [slide.textColor, "text-base subtle-slide-in"],
                              style: { "--theme-main-animation-delay": "0.2s" }
                            }, toDisplayString(truncateHtmlText(slide.text, 100)), 3)
                          ]),
                          createVNode("div", { class: "flex gap-2 group/ctas flex-wrap max-w-75 flex-col mt-6 md:mt-0" }, [
                            createVNode(MainButton, {
                              href: "/work/",
                              label: slide.projectTitle,
                              onClick: () => openWork(slide.slug),
                              delay: "0.7s"
                            }, null, 8, ["label", "onClick"])
                          ])
                        ])
                      ], 40, ["onMouseover", "onMouseleave"])
                    ])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="${ssrRenderClass([[isHovered.value ? "md:opacity-80" : ""], "mt-8 block -right-2 md:-right-8 lg:right-65 xl:right-95 mx-auto text-white px-6 py-2 rounded-full transition duriation-900 cursor-pointer w-24 md:w-50 flex flex-col justify-center items-center group/slider h-26 md:h-50 hover:opacity-80 dark:hover:bg-primary/20 inverted:bg-background/0 absolute bottom-90 md:bottom-0 xl:bottom-25"])}" data-v-108cd363><svg fill="none" stroke-width="1.5" viewBox="0 0 24 24" class="${ssrRenderClass([activeTextColor.value, "w-24 md:w-50"])}" xmlns="http://www.w3.org/2000/svg" data-v-108cd363><path d="M9 6L15 12L9 18" class="stroke-current" stroke-linecap="round" stroke-linejoin="round" data-v-108cd363></path></svg><svg class="${ssrRenderClass([activeTextColor.value, "absolute inset-0 rounded-[9rem] w-full h-full pointer-events-none opacity-0 group-hover/slider:opacity-100 animate-spin-slow z-0"])}" viewBox="0 0 100 100" data-v-108cd363><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="6"${ssrRenderAttr("stroke-dasharray", strokeLength)}${ssrRenderAttr("stroke-dashoffset", progressOffset.value)} class="transition-all duration-100 ease-linear" data-v-108cd363></circle></svg></button></div></section><div class="hidden stroke-sunburn-orange stroke-" data-v-108cd363></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carousels/FeaturedWork.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FeaturedWork = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-108cd363"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home",
      link: [
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }
      ],
      meta: [
        { name: "description", content: "Code artisan forging WordPress & Vue.js experiences by day, crafting dirt jumps & trails for bikes by night UX zeal meets mud and grit creativity." },
        { property: "og:title", content: "Building digital bridges between ideas & impact" },
        { property: "og:image", content: "https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto,w_960/v1745552050/Title_bjlnl8.png" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary transition duration-700 relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(Nav, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(FeaturedWork, null, null, _parent));
      _push(ssrRenderComponent(Contact, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CEPpuGjF.mjs.map
