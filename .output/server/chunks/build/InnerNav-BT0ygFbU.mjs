import { _ as __nuxt_component_0 } from './nuxt-link-w3y78dWa.mjs';
import { mergeProps, withCtx, createBlock, createVNode, openBlock, ref, watch, nextTick, createTextVNode, toDisplayString, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { e as _sfc_main$a, f as _sfc_main$5, g as _sfc_main$7, H as Hamburger, P as PlaceholderJS, c as Splitting } from './Footer-TWd70w3k.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-CHu_jgWj.mjs';
import { u as useNuxtApp, a as useMainStore } from './server.mjs';

const _sfc_main$1 = {
  __name: "InnerSecondaryNav",
  __ssrInlineRender: true,
  props: {
    footer: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-end gap-8 px-0 secondary-nav group/secondaryNav max-w-1440 md:px-12 md:gap-6 dark:text-background inverted:text-background text-primary" }, _attrs))} data-v-6b22ee99>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "aria-label": "Return Home",
        to: "/",
        class: "relative block w-10 h-10 mr-auto transition-all duration-700 group md:w-8 md:h-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="absolute inset-0 stroke-current group-hover:scale-[1.25] transition-all group-hover:stroke-accent duration-700" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6b22ee99${_scopeId}><polyline points="112 352 48 288 112 224" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-6b22ee99${_scopeId}></polyline><path d="M64,288H358c58.76,0,106-49.33,106-108V160" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-6b22ee99${_scopeId}></path></svg><svg class="absolute inset-0 stroke-current text-accent transition-all duration-700 ease-in-out stroke-animate group-hover:scale-[1.28] group-hover:stroke-accent" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6b22ee99${_scopeId}><polyline points="112 352 48 288 112 224" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-6b22ee99${_scopeId}></polyline><path d="M64,288H358c58.76,0,106-49.33,106-108V160" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-6b22ee99${_scopeId}></path></svg>`);
            _push2(ssrRenderComponent(_sfc_main$a, {
              class: "mt-10",
              message: "Return Home"
            }, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "absolute inset-0 stroke-current group-hover:scale-[1.25] transition-all group-hover:stroke-accent duration-700",
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
                class: "absolute inset-0 stroke-current text-accent transition-all duration-700 ease-in-out stroke-animate group-hover:scale-[1.28] group-hover:stroke-accent",
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
              createVNode(_sfc_main$a, {
                class: "mt-10",
                message: "Return Home"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
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
const InnerSecondaryNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6b22ee99"]]);
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
    const { $gsap: gsap } = useNuxtApp();
    const store = useMainStore();
    const nav = ref(null);
    const navContainer = ref(null);
    const navBrand = ref(null);
    const navBrandLink = ref(null);
    const heading = ref(null);
    ref(null);
    const isSticky = ref(false);
    const isDesktop = ref(false);
    ref(null);
    let navPlaceholder;
    ref(false);
    let tl;
    function onBrandHoverIn(event) {
      if (store.reduceMotion) return;
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
      if (store.reduceMotion) return;
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
    async function updateStickyTimeline() {
      await nextTick();
      if (store.reduceMotion) return;
      if (!tl) tl = gsap.timeline({ paused: true });
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
    async function checkAnimation(forceRM = false) {
      await nextTick();
      const rm = forceRM || store.reduceMotion;
      if (heading.value) {
        if (!navPlaceholder) {
          navPlaceholder = new PlaceholderJS(heading.value.querySelector("span"), { manual: true });
          navPlaceholder.update();
        }
      }
      if (rm) {
        tl == null ? void 0 : tl.kill();
        if (navBrand.value && heading.value && nav.value) {
          gsap.set([navBrand.value, heading.value, nav.value], { clearProps: "all" });
        }
        if (nav.value) {
          const navItems = nav.value.querySelectorAll(".nav-item");
          if (!navItems.length) return;
        }
        return;
      }
      await updateStickyTimeline();
      if (heading.value) {
        navPlaceholder.play();
      }
    }
    watch(() => store.loaded, async (loaded) => {
      if (!loaded) return;
      await checkAnimation();
    }, { immediate: true });
    watch(
      () => store.reduceMotion,
      async (reduceMotion, prev) => {
        await nextTick();
        if (!store.loaded) return;
        if (reduceMotion) {
          tl == null ? void 0 : tl.kill();
          if (!navBrand.value || !heading.value) return;
          gsap.set([navBrand.value, heading.value], { clearProps: "all" });
          if (nav.value) {
            const navItems = nav.value.querySelectorAll(".nav-item");
            navItems.forEach((item) => {
              gsap.set(item, { clearProps: "all", autoAlpha: 1 });
            });
          }
          return;
        }
        if (!reduceMotion && prev) {
          if (nav.value) {
            const navItems = nav.value.querySelectorAll(".nav-item");
            navItems.forEach((item) => {
              item.classList.add("opacity-0", "motionless:opacity-100");
              gsap.set(item, { autoAlpha: 0 });
            });
          }
        }
        await checkAnimation(false);
      },
      { immediate: true }
    );
    watch([isSticky, isDesktop], async () => {
      await nextTick();
      if (!store.loaded) return;
      await checkAnimation(store.reduceMotion);
      if (store.reduceMotion) return;
      if (isSticky.value) {
        tl.timeScale(1).restart();
      } else {
        tl.timeScale(3).reverse();
      }
    });
    watch(
      () => store.navOpen,
      async (open) => {
        await nextTick();
        if (!store.loaded) return;
        if (open && navContainer.value) {
          await nextTick();
          const el = navContainer.value;
          const buffer = 200;
          const startY = (void 0).scrollY;
          const targetY = el.getBoundingClientRect().top + startY + buffer;
          (void 0).scrollTo({ top: targetY, behavior: "smooth" });
          store.closeNav();
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav-wrapper" }, _attrs))} data-v-55061bc4><div data-v-55061bc4></div><header id="nav" class="${ssrRenderClass([isSticky.value ? "fixed left-0 w-full bg-background/70 dark:bg-primary/70 inverted:bg-primary/70 inverted:dark:bg-background/70 backdrop-blur transition duration-700 z-90 motionless:durarion-50" : " absolute ", "z-20 w-full py-4 mx-auto will-change-transform transform-gpu"])}" data-v-55061bc4><div class="nav-wrapper max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto flex items-center relative" data-v-55061bc4><div class="${ssrRenderClass([isSticky.value ? "opacity-75 duration-700 hover:opacity-100 max-md:motionless:mt-4 max-md:motionless:-mb-4 motionless:duration-100" : "opacity-0 duration-0", "relative transition-all text-primary dark:text-background inverted:text-background inverted:dark:text-primary nav-brand max-sm:z-10"])}" data-v-55061bc4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        ref_key: "navBrandLink",
        ref: navBrandLink,
        "aria-label": "Return Home",
        to: __props.brandURL,
        class: "pb-10 navbrand-link animate subtle-slide-in md:pb-0 max-sm:z-0 text-nowrap",
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
      _push(`</div><h1 class="${ssrRenderClass([isSticky.value ? "motionless:text-lg md:motionless:static max-md:motionless:-mt-1 motionless:mt-0.25 md:motionless:ml-2 motionless:mb-0" : "", "absolute top-0 mb-6 text-3xl transition-all left-8 lg:left-12 headingClass lg:mb-18 md:text-5xl text-nowrap motionless:duration-50"])}" data-v-55061bc4><span class="transition-all duration-700 opacity-0 placeholder-line text-primary dark:text-background inverted:text-background motionless:duration-50 motionless:**:duration-50" data-splitting="words" data-v-55061bc4>${ssrInterpolate(__props.title)}</span></h1><nav class="${ssrRenderClass([isSticky.value ? ["opacity-0", "motionless:opacity-100"] : ["opacity-0"], "flex ml-auto space-x-8 text-sm font-semibold font-heading group/nav text-primary dark:text-background inverted:text-background inverted:dark:text-primary"])}" data-v-55061bc4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "relative transition duration-700 group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 overflow-clip",
        to: "/about",
        "aria-label": "Find out more about me!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-item" data-v-55061bc4${_scopeId}>about</span>`);
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
        class: "relative transition duration-700 group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 overflow-clip",
        to: "/work/",
        "aria-label": "View my featured work!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-item" data-v-55061bc4${_scopeId}>work</span>`);
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
      _push(`<a href="#sayHello" class="relative transition duration-700 group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 overflow-clip" aria-label="Send me a message!" data-v-55061bc4><span class="nav-item" data-v-55061bc4>say hello</span></a></nav></div></header></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/InnerNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InnerNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-55061bc4"]]);

export { InnerSecondaryNav as I, InnerNav as a };
//# sourceMappingURL=InnerNav-BT0ygFbU.mjs.map
