import { defineComponent, mergeProps, unref, ref, defineAsyncComponent, watch, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Preloader-DAxg_Uyc.mjs';
import { _ as _export_sfc, u as useHead, a as useMainStore, I as InnerSecondaryNav, b as InnerNav, C as Contact, c as _sfc_main$2$1, d as useNuxtApp, P as PlaceholderJS, S as ScrollTrigger } from './server.mjs';
import { _ as _sfc_main$3 } from './Offerings-bdGp7NUC.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'pinia';
import 'vue-router';
import 'gsap';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './index-B6mjYcVR.mjs';

const _sfc_main$1 = {
  __name: "ServicesIntro",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap } = useNuxtApp();
    const store = useMainStore();
    ref(false);
    ref(false);
    ref(null);
    const section = ref(null);
    const sectionTriggers = [];
    const sectionTimelines = [];
    let tl;
    const ServicesIntroBrand = defineAsyncComponent(() => import('./ServicesIntroBrand-D2StKdKi.mjs'));
    const ServicesIntroMedia = defineAsyncComponent(() => import('./ServicesIntroMedia-B4K4ac8Z.mjs'));
    const ServicesIntroCode = defineAsyncComponent(() => import('./ServicesIntroCode-DgyrFTtv.mjs'));
    const ServicesIntroDesign = defineAsyncComponent(() => import('./ServicesIntroDesign-Ci3MPrJx.mjs'));
    watch(
      () => store.ready,
      async (ready) => {
        if (!ready || store.reduceMotion) return;
        await nextTick();
        await servicesIntroAnims();
      },
      { immediate: true }
    );
    watch(
      () => store.reduceMotion,
      async (reduceMotion) => {
        await nextTick();
        await servicesIntroAnims();
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
    async function servicesIntroAnims() {
      await nextTick();
      if (!section.value) return;
      const sectionEl = section.value;
      const introEl = sectionEl.querySelectorAll(".introduction p");
      const subtitle = sectionEl.querySelector(".subtitle");
      tl = gsap.timeline({ paused: true });
      if (store.ready) {
        if (subtitle) {
          const introAnim = new PlaceholderJS(subtitle, { manual: true });
          tl.add(() => introAnim.play(), "<+=0");
        }
        if (introEl.length) {
          introEl.forEach((p) => {
            const introAnim = new PlaceholderJS(p, { manual: true });
            tl.add(() => introAnim.play(), "<+=0.2");
          });
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
      }
      ScrollTrigger.refresh();
      sectionTimelines.push(tl);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "section",
        ref: section,
        class: ["pt-22 lg:pt-28", { "opacity-0": !unref(store).ready }],
        id: "about"
      }, _attrs))}><div class="introduction-wrapper"><div class="sticky mt-4 md:max-w-2/3 md:mt-6 motionless:mt-5 max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto"><h2 class="mb-4 text-2xl italic opacity-0 subtitle placeholder-line max-w-160" data-splitting="words">Code that clicks, pixels that pop, and strategy that actually makes sense. </h2></div><div class="introduction grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-8 lg:px-12 2xl:max-w-[1680px] mx-auto auto-rows-auto"><div class="row-start-2 md:row-start-1 md:col-span-2 lg:row-start-1 lg:col-span-4"><div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto lg:px-12 pb-8 lg:pb-18"><p class="placeholder-line text-secondary text-2xl leading-[1.8] mb-2" data-splitting="words"> I build fast, accessible digital experiences that go beyond typical marketing sites. With a background in front-end development, design systems, and brand strategy, I help teams deliver products that are both technically sound and strategically focused.</p></div></div>`);
      if (unref(store).ready) {
        _push(`<div class="row-start-1 md:row-start-2 lg:row-start-2">`);
        _push(ssrRenderComponent(unref(ServicesIntroBrand), null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(store).ready) {
        _push(`<div class="row-start-3 md:row-start-2 lg:row-start-2">`);
        _push(ssrRenderComponent(unref(ServicesIntroDesign), null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(store).ready) {
        _push(`<div class="col-start-1 row-start-5 md:row-start-4 lg:row-start-2">`);
        _push(ssrRenderComponent(unref(ServicesIntroCode), null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(store).ready) {
        _push(`<div class="col-start-1 row-start-7 md:col-start-2 md:row-start-4 lg:row-start-2 lg:col-start-auto">`);
        _push(ssrRenderComponent(unref(ServicesIntroMedia), null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-start-1 row-start-4 md:row-start-3 md:col-span-2 lg:col-span-4 flex flex-col justify-center"><div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto lg:px-12 py-8 lg:pt-18"><p class="placeholder-line text-secondary text-base leading-[1.8]" data-splitting="words"> From modular WordPress platforms to custom Vue and Nuxt.js applications, I\u2019ve led projects that support high-traffic publishing workflows, dynamic product filtering, API integrations, and interactive tools. My app work includes location-based store finders, animated interfaces, editorial hubs, and microsites that connect smoothly to Airtable, headless CMS platforms, and external APIs. I work confidently across JavaScript frameworks like Vue, Nuxt, and React, and have extensive experience with GSAP for motion design and user engagement.</p></div></div><div class="col-start-1 row-start-6 md:row-start-5 md:col-span-2 lg:row-start-4 lg:col-span-4"><div class="max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto lg:px-12"><p class="placeholder-line text-secondary text-base leading-[1.8]" data-splitting="words"> However, good code is only part of the picture. I approach each project with a designer\u2019s perspective and a marketer\u2019s mindset. I make sure our work performs well, tells the right story, and meets real-world goals. Whether you\u2019re launching a brand, refining a product, or trying to improve the web, I can help you connect creative vision with technical execution. </p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/services/ServicesIntro.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: "%s | Code Artisan",
      title: "Services",
      meta: [
        {
          name: "description",
          content: "Code that clicks, pixels that pop, and strategy that actually makes sense."
        },
        { property: "og:title", content: "Services | Code Artisan" },
        { property: "og:url", content: "https://codeartisan.dev/services" },
        {
          property: "og:image",
          content: "https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto,w_960/v1745552050/Title_bjlnl8.png"
        }
      ]
    });
    const store = useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative transition duration-700 font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary overflow-x-clip" }, _attrs))} data-v-8987b5b6><div class="utilities max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto pt-9 lg:pt-12 pb-18 lg:pb-20" data-v-8987b5b6>`);
      if (unref(store).loaded) {
        _push(ssrRenderComponent(InnerSecondaryNav, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(store).loaded) {
        _push(ssrRenderComponent(InnerNav, {
          title: "Services",
          brandLabel: "hi, i'm emm.",
          brandURL: "/"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      if (unref(store).loaded) {
        _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8987b5b6"]]);

export { services as default };
//# sourceMappingURL=services-CjAJ5PqH.mjs.map
