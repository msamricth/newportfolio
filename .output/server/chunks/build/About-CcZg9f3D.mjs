import { defineComponent, mergeProps, ref, watch, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { I as InnerNav } from './InnerNav-DTyxX4vK.mjs';
import { C as Contact, _ as _sfc_main$9, u as useMainStore } from './Footer-CpeEpO-l.mjs';
import { _ as _export_sfc, u as useNuxtApp } from './server.mjs';
import { S as Splide, a as SplideSlide } from '../_/vue-splide.esm.mjs';
import { _ as _sfc_main$a } from './Wordpress-DUY-2jWg.mjs';
import { u as useHead } from './v3-Cu9oYNPx.mjs';
import './nuxt-link-KCT0ISDr.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'gsap';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$8 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap } = useNuxtApp();
    useMainStore();
    const isArtisan = ref(false);
    const isBQ = ref(false);
    ref(null);
    const section = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "section",
        ref: section,
        class: "pt-16",
        id: "about"
      }, _attrs))}><div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto"><div class="min-h-screen"><div class="introduction-wrapper sticky md:max-w-2/3 mt-4 md:mt-6 top-[15%] md:top-[10%]"><h2 class="italic subtitle mb-4 text-2xl placeholder-line" data-splitting="words">So here&#39;s the thing: </h2><ul class="list-disc mb-12 pl-6 hidden md:block"><li class="placeholder-line text-xl" data-splitting="words">A Developer with <strong>PASSION</strong></li><li class="placeholder-line text-xl" data-splitting="words">An eye for design</li><li class="placeholder-line text-xl" data-splitting="words">API nerd</li><li class="placeholder-line text-xl" data-splitting="words">Bootstrap &amp; Tailwind Queen\u{1F478}</li></ul><div class="placeholder-line" data-splitting="words"><p class="placeholder-line text-secondary text-base leading-[1.8] mb-6 introduction" data-splitting="words">I&#39;m a full-stack developer with a passion for clean code, bold design, and building things that actually work\u2014both on screen and in the dirt.\u{1F6B4}\u200D\u2640\uFE0F With deep experience in WordPress, Vue.js, and the occasional Tailwind bender, I specialize in crafting digital systems that are fast, accessible, and built to last.</p><blockquote data-splitting="words" class="${ssrRenderClass([isBQ.value ? ["border-current"] : ["border-transparent"], "transition duriation-900 border-l-4 pl-4 mt-4 mb-8 py-2"])}"> \u201CA problem solver who will keep you honest, but isn\u2019t going to \u2018value engineer\u2019 a perfectly good design into something unrecognizable.\u201D </blockquote><p class="text-secondary text-base leading-[1.8] final-p placeholder-line" data-splitting="words"> I\u2019ve worked across agencies, brands and NGO spaces, building digital products, wrangling APIs, and pushing pixels with a strong eye for user experience.</p></div></div></div><div class="md:min-h-[60vh]"><div class="code-artisan lg:my-34 my-18 md:w-3/4 mx-auto relative md:sticky top-[20%]"><div class="${ssrRenderClass([isArtisan.value ? ["animate"] : ["opacity-0"], "swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mb-4 delay-700"])}"></div><h3 class="font-heading font-semibold text-2xl lg:text-3xl leading-snug placeholder-line" data-splitting="words"> Code artisan forging WordPress &amp; Vue.js experiences by day, crafting dirt jumps &amp; trails for bikes by night\u2014 UX zeal meets mud-and-grit creativity. </h3><div class="${ssrRenderClass([isArtisan.value ? ["animate"] : ["opacity-0"], "swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mt-4 delay-700"])}"></div></div></div></div></section>`);
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
    const props = __props;
    const testimonial = ref(null);
    watch(() => props.active, (isActive) => {
      return;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["bg-primary dark:bg-background p-6 md:rounded-[2rem] mx-auto transition-all duration-700 max-w-dvw md:max-w-[58vw] sticky top-20 lg:top-0", __props.width],
        ref_key: "testimonial",
        ref: testimonial
      }, _attrs))} data-v-75a0f306><div class="flex items-center gap-4 mb-4" data-v-75a0f306><div data-v-75a0f306><h3 class="text-lg font-semibold dark:text-primary text-background transition-all duration-700 placeholder-line" data-splitting="words" data-v-75a0f306>${ssrInterpolate(__props.name)}</h3><p class="text-sm dark:text-gray-600 text-background/60 transition-all duration-700 placeholder-line" data-splitting="words" data-v-75a0f306>${ssrInterpolate(__props.title)}</p></div></div><div class="flex items-stretch relative h-full mb-4 gap-6" data-v-75a0f306><div class="w-3 bg-background dark:bg-primary inverted:bg-primary inverted:dark:bg-background transition-all duration-700 bq-border min-h-full swing-in-top-bck" data-v-75a0f306></div><blockquote class="text-xs md:text-sm dark:text-gray-800 text-background/80 leading-relaxed transition-all duration-700 placeholder-line" data-splitting="words" data-v-75a0f306>${(_a = __props.quote) != null ? _a : ""}</blockquote></div><a href="https://www.linkedin.com/in/emmtalarico/details/recommendations/?detailScreenTabIndex=0" target="_blank" rel="noopener noreferrer" class="animated-link group transition duration-700 overflow-hidden inline-block dark:text-primary text-background hover:scale-[1.08] text-sm dark:group-hover:text-electric-purple group-hover:text-accent" data-v-75a0f306> View on LinkedIn \u2192 </a></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/Testimonial.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Testimonial = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-75a0f306"]]);
const _sfc_main$6 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap } = useNuxtApp();
    const testimonialSection = ref(null);
    ref(null);
    const visibleSlides = ref([]);
    const slideRefs = ref([]);
    const observerReady = ref(false);
    const setSlideRef = (el, index) => {
      if (el) {
        slideRefs.value[index] = el;
      }
    };
    const splide = ref(null);
    ref([]);
    const isHovered = ref([false]);
    ref(0);
    const progressOffset = ref(283);
    const strokeLength = 2 * Math.PI * 45;
    ref(null);
    const loop = ref([]);
    const splideOptions = {
      type: "slide",
      pagination: false,
      arrows: false,
      gap: "1.5rem",
      loop: true,
      autoWidth: true,
      mediaQuery: "min",
      breakpoints: {
        1024: {
          padding: {
            left: "calc((100% - 1024px) / 2 + 48px)",
            right: "calc((100% - 1024px) / 2 + 48px)"
          }
        },
        1269: {
          padding: {
            left: "48px",
            right: "48px"
          }
        },
        1440: {
          padding: {
            left: "calc((100% - 1440px) / 2 + 48px)",
            right: "calc((100% - 1440px) / 2 + 48px)"
          }
        }
      }
    };
    watch(observerReady, (ready) => {
      var _a;
      if (!ready) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = slideRefs.value.indexOf(entry.target);
            if (index !== -1) {
              if (entry.isIntersecting) {
                if (!visibleSlides.value.includes(index)) {
                  visibleSlides.value.push(index);
                }
              } else {
                visibleSlides.value = visibleSlides.value.filter((i) => i !== index);
              }
            }
          });
        },
        {
          root: (_a = splide.value) == null ? void 0 : _a.$el.querySelector(".splide__track"),
          threshold: 0.5
        }
      );
      slideRefs.value.forEach((el) => el && observer.observe(el));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "testimonialSection",
        ref: testimonialSection,
        class: "pb-0 lg:pb-24 overflow-clip relative"
      }, _attrs))} data-v-fd314439><div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto flex justify-between items-end md:items-start heading" data-v-fd314439><h2 class="text-2xl md:text-3xl mb-8 max-w-110 placeholder-line" data-splitting="words" data-v-fd314439> Past Experiences </h2><button class="${ssrRenderClass([[isHovered.value ? "md:opacity-80" : ""], "block lg:-mr-7 px-6 py-2 rounded-full transition duriation-900 cursor-pointer w-16 lg:w-20 flex flex-col justify-center items-center group/slider h-16 lg:h-20 hover:opacity-80 dark:hover:bg-primary/20 inverted:bg-background/0 relative text-primary dark:text-background inverted:text-background inverted:dark:text-primary mb-4"])}" data-v-fd314439><svg fill="none" stroke-width="1.5" viewBox="0 0 24 24" class="w-24 md:w-50 text-current hover:text-accent transition duration-700" xmlns="http://www.w3.org/2000/svg" data-v-fd314439><path d="M9 6L15 12L9 18" class="stroke-current" stroke-linecap="round" stroke-linejoin="round" data-v-fd314439></path></svg><svg class="absolute inset-0 w-full h-full rounded-[9rem] w-full h-full pointer-events-none opacity-0 group-hover/slider:opacity-100 animate-spin-slow z-0 text-accent transition duration-700" viewBox="0 0 100 100" data-v-fd314439><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="6"${ssrRenderAttr("stroke-dasharray", strokeLength)}${ssrRenderAttr("stroke-dashoffset", progressOffset.value)} class="transition-all duration-100 ease-linear" data-v-fd314439></circle></svg></button></div>`);
      _push(ssrRenderComponent(unref(Splide), {
        ref_key: "splide",
        ref: splide,
        options: splideOptions,
        class: "testimonials-carousel overflow-clip max-md:bg-primary max-md:dark:bg-background transition duration-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(loop.value, (t, index) => {
              _push2(ssrRenderComponent(unref(SplideSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="testimonial-slide-wrapper h-full" data-v-fd314439${_scopeId2}>`);
                    _push3(ssrRenderComponent(Testimonial, {
                      name: t.name,
                      title: t.title,
                      quote: t.body,
                      width: t.width,
                      active: visibleSlides.value.includes(index)
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "testimonial-slide-wrapper h-full",
                        ref_for: true,
                        ref: (el) => setSlideRef(el, index)
                      }, [
                        createVNode(Testimonial, {
                          name: t.name,
                          title: t.title,
                          quote: t.body,
                          width: t.width,
                          active: visibleSlides.value.includes(index)
                        }, null, 8, ["name", "title", "quote", "width", "active"])
                      ], 512)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(loop.value, (t, index) => {
                return openBlock(), createBlock(unref(SplideSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "testimonial-slide-wrapper h-full",
                      ref_for: true,
                      ref: (el) => setSlideRef(el, index)
                    }, [
                      createVNode(Testimonial, {
                        name: t.name,
                        title: t.title,
                        quote: t.body,
                        width: t.width,
                        active: visibleSlides.value.includes(index)
                      }, null, 8, ["name", "title", "quote", "width", "active"])
                    ], 512)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carousels/Testimonials.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Testimonials = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-fd314439"]]);
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
    icon: _sfc_main$a,
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
    ref(null);
    const section = ref(null);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "offerings",
        ref_key: "section",
        ref: section,
        class: "py-25 bg-primary/5 dark:bg-background/5 transition duration-700"
      }, _attrs))} data-v-fedf932f><div class="max-w-[1440px] mx-auto px-8 lg:px-12" data-v-fedf932f><h2 class="text-3xl md:text-4xl font-heading font-bold mb-12 placeholder-line text-center md:text-left" data-splitting="words" data-v-fedf932f>I want to help</h2><div class="flex gap-10 flex-col" data-v-fedf932f><!--[-->`);
      ssrRenderList(unref(offerings), (item, index) => {
        _push(`<div class="offering-card" data-v-fedf932f><div class="gap-6 lg:gap-12 flex-col md:flex-row flex items-center transition-all duration-700 pb-4" data-v-fedf932f>`);
        if (item.icon) {
          _push(`<div class="icon-btn relative w-24 h-24 group min-w-[120px]" data-v-fedf932f>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "absolute inset-0 w-full h-full text-current z-0" }, null), _parent);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
            class: ["icon-wipe-overlay absolute inset-0 w-full h-full transition-all duration-700 z-10", item.textColor]
          }, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="list-content text-center md:text-left" data-v-fedf932f><h3 class="text-1xl md:text-2xl font-semibold md:mb-2 transition-all duration-700" data-v-fedf932f>${ssrInterpolate(item.title)}</h3><p class="text-md md:text-base opacity-80 leading-relaxedtransition-all duration-700" data-v-fedf932f>${ssrInterpolate(item.description)}</p><ul class="mt-4 list-disc list-inside text-sm opacity-70 transition-all duration-700 justify-center flex flex-wrap md:flex-col" data-v-fedf932f><!--[-->`);
        ssrRenderList(item.points, (point, i) => {
          _push(`<li class="mr-2" data-v-fedf932f><span class="-ml-2" data-v-fedf932f>${ssrInterpolate(point)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div><div class="${ssrRenderClass([{ "hidden": index === unref(offerings).length - 1 }, "card-border swing-in-left-fwd-slow h-[2px] bg-current/20 transition duriation-900 mt-4 opacity-0"])}" data-v-fedf932f></div></div>`);
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
const Offerings = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fedf932f"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary transition duration-700 relative" }, _attrs))} data-v-65e7cefc>`);
      _push(ssrRenderComponent(InnerNav, {
        title: "About",
        brandLabel: "hi, i'm emm.",
        brandURL: "/"
      }, null, _parent));
      _push(`<div class="flex flex-col gap-6 max-w-full mt-6 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto items-start" data-v-65e7cefc>`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Testimonials, null, null, _parent));
      _push(ssrRenderComponent(Offerings, null, null, _parent));
      _push(ssrRenderComponent(Contact, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
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
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65e7cefc"]]);

export { About as default };
//# sourceMappingURL=About-CcZg9f3D.mjs.map
