import { _ as __nuxt_component_0 } from './nuxt-link-BvcfoKbn.mjs';
import { mergeProps, withCtx, createBlock, createVNode, openBlock, ref, watch, nextTick, createTextVNode, toDisplayString, computed, useSSRContext } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/server-renderer/index.mjs';
import { c as _sfc_main$8, d as _sfc_main$4, e as _sfc_main$5, H as Hamburger, S as Splitting } from './Footer-DWew6Ibk.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-CxiIwPb2.mjs';
import gsap from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/gsap/dist/gsap.js';
import { u as useMainStore } from './server.mjs';

const _sfc_main$1 = {
  __name: "InnerSecondaryNav",
  __ssrInlineRender: true,
  props: {
    footer: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "secondary-nav group/secondaryNav max-w-1440 px-0 md:px-12 flex justify-end items-center relative gap-8 md:gap-6 dark:text-background inverted:text-background text-primary" }, _attrs))} data-v-9ec407c2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "aria-label": "Return Home",
        to: "/",
        class: "group relative block w-10 h-10 md:w-8 md:h-8 mr-auto transition-all duration-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="absolute inset-0 stroke-current group-hover:scale-[1.25] transition-all duration-700" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ec407c2${_scopeId}><polyline points="112 352 48 288 112 224" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-9ec407c2${_scopeId}></polyline><path d="M64,288H358c58.76,0,106-49.33,106-108V160" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-9ec407c2${_scopeId}></path></svg><svg class="absolute inset-0 stroke-current text-accent transition-all duration-700 ease-in-out stroke-animate group-hover:scale-[1.28]" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ec407c2${_scopeId}><polyline points="112 352 48 288 112 224" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-9ec407c2${_scopeId}></polyline><path d="M64,288H358c58.76,0,106-49.33,106-108V160" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-9ec407c2${_scopeId}></path></svg>`);
            _push2(ssrRenderComponent(_sfc_main$8, {
              class: "mt-10",
              message: "Return Home"
            }, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "absolute inset-0 stroke-current group-hover:scale-[1.25] transition-all duration-700",
                viewBox: "0 0 512 512",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("polyline", {
                  points: "112 352 48 288 112 224",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "32"
                }),
                createVNode("path", {
                  d: "M64,288H358c58.76,0,106-49.33,106-108V160",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "32"
                })
              ])),
              (openBlock(), createBlock("svg", {
                class: "absolute inset-0 stroke-current text-accent transition-all duration-700 ease-in-out stroke-animate group-hover:scale-[1.28]",
                viewBox: "0 0 512 512",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("polyline", {
                  points: "112 352 48 288 112 224",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "32"
                }),
                createVNode("path", {
                  d: "M64,288H358c58.76,0,106-49.33,106-108V160",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "32"
                })
              ])),
              createVNode(_sfc_main$8, {
                class: "mt-10",
                message: "Return Home"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(Hamburger, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/InnerSecondaryNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const InnerSecondaryNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9ec407c2"]]);
const _sfc_main = {
  __name: "InnerNav",
  __ssrInlineRender: true,
  props: {
    title: { type: String, default: () => "Something" },
    brandLabel: { type: String, default: () => "hi, i'm Emm." },
    brandURL: { type: String, default: () => "/" },
    topStacked: { type: Boolean, default: () => false }
  },
  setup(__props) {
    const mainStore = useMainStore();
    const nav = ref(null);
    const navContainer = ref(null);
    const navBrand = ref(null);
    const navBrandLink = ref(null);
    const heading = ref(null);
    ref(null);
    const isSticky = ref(false);
    const isDesktop = ref(false);
    ref(null);
    ref(false);
    let tl;
    function onBrandHoverIn(event) {
      const chars = event.target.querySelectorAll(".char");
      if (!chars.length) return;
      return gsap.fromTo(chars, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-40, 0),
        autoAlpha: 0
      }, {
        x: 0,
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.3, from: "random" }
      });
    }
    function onNavHoverIn(event) {
      const chars = event.target.querySelectorAll(".char");
      if (!chars.length) return;
      const tl2 = gsap.timeline();
      tl2.fromTo(chars, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-40, 0)
      }, {
        x: 0,
        y: 0,
        className: "char text-electric-purple dark:text-accent",
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.3, from: "random" }
      }).to(chars, {
        className: "char text-current",
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.3, from: "random" }
      }, 0.4);
    }
    function effectTimeline(el, interval = 0) {
      const split = Splitting()[0];
      const chars = (split == null ? void 0 : split.chars) || [];
      if (!chars.length) return;
      return gsap.timeline({ paused: true }).fromTo(chars, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-40, 0),
        autoAlpha: 0
      }, {
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
        duration: 0.5,
        stagger: { amount: 0.2, from: "random" }
      }, interval);
    }
    function updateStickyTimeline() {
      tl.clear();
      const scaleAmtCom = computed(() => isDesktop.value ? 0.2 : 0.4);
      const yCom = computed(() => isDesktop.value ? -28 : 0);
      const xCom = computed(() => isDesktop.value ? 130 : 0);
      const intCom = computed(() => isDesktop.value ? 0.2 : 0);
      const isReversed = tl.reversed();
      if (!nav.value || !heading.value || !navBrand.value) return;
      const scaleAmt = scaleAmtCom.value;
      const y = yCom.value;
      xCom.value;
      const int = intCom.value;
      tl.fromTo(nav.value, { alpha: 0 }, { alpha: 1 }, 0);
      tl.fromTo(heading.value, { scale: 1, y: 0 }, { scale: scaleAmt, y, duration: 0.1 }, int);
      if (isDesktop.value) {
        const xAmt = navBrand.value.getBoundingClientRect().width + 12;
        tl.fromTo(heading.value, { x: 0 }, { x: xAmt, duration: 0.3 }, int);
      }
      tl.fromTo(navBrand.value, { alpha: 0, y: 0 }, {
        alpha: 1,
        y: isDesktop.value ? 0 : -10,
        duration: isReversed ? 0 : 0.2
      }, int);
      tl.call(() => {
        const brandTL = effectTimeline(navBrand.value, 0.45);
        brandTL == null ? void 0 : brandTL.play();
      }, null, int);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav-wrapper" }, _attrs))} data-v-a3543719><div data-v-a3543719></div><header id="nav" class="${ssrRenderClass([isSticky.value ? "fixed left-0 w-full bg-background/70 dark:bg-primary/70 inverted:bg-primary/70 inverted:dark:bg-background/70 backdrop-blur transition duration-700 z-90" : " absolute ", "py-4 mx-auto z-20 w-full will-change-transform transform-gpu"])}" data-v-a3543719><div class="nav-wrapper max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto flex items-center relative" data-v-a3543719><div class="${ssrRenderClass([isSticky.value ? "opacity-75 duration-700 hover:opacity-100" : "opacity-0 duration-0", "text-primary dark:text-background inverted:text-background inverted:dark:text-primary nav-brand transition-all relative max-sm:z-10"])}" data-v-a3543719>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        ref_key: "navBrandLink",
        ref: navBrandLink,
        "aria-label": "Return Home",
        to: __props.brandURL,
        class: "navbrand-link animate subtle-slide-in pb-10 md:pb-0 max-sm:z-0 text-nowrap",
        onMouseenter: onBrandHoverIn
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.brandLabel)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.brandLabel), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="placeholder-line absolute left-8 lg:left-12 transition-all headingClass top-0 text-3xl md:text-5xl text-nowrap" data-splitting="words" data-v-a3543719><span class="transition-all duration-700 placeholder-line text-primary dark:text-background inverted:text-background opacity-0" data-splitting="words" data-v-a3543719>${ssrInterpolate(__props.title)}</span></h1><nav class="${ssrRenderClass([isSticky.value ? [""] : ["opacity-0"], "flex space-x-8 text-sm font-heading font-semibold group/nav ml-auto text-primary dark:text-background inverted:text-background inverted:dark:text-primary"])}" data-v-a3543719>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700",
        to: "/about",
        "aria-label": "Find out more about me!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-item" data-v-a3543719${_scopeId}>about</span>`);
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
        class: "group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700",
        to: "/work/",
        "aria-label": "View my featured work!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-item" data-v-a3543719${_scopeId}>work</span>`);
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
      _push(`<a href="#sayHello" class="group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700" aria-label="Send me a message!" data-v-a3543719><span class="nav-item" data-v-a3543719>say hello</span></a></nav></div></header></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/InnerNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InnerNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a3543719"]]);

export { InnerSecondaryNav as I, InnerNav as a };
//# sourceMappingURL=InnerNav-Ez5yWfyP.mjs.map
