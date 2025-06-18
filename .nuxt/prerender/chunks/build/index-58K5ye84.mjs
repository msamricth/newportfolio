import { ref, unref, computed, mergeProps, useSSRContext } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/server-renderer/index.mjs';
import { I as InnerSecondaryNav, a as InnerNav } from './InnerNav-CpgFJA8H.mjs';
import { C as Contact, _ as _sfc_main$3 } from './Footer-DJEZ-W6W.mjs';
import { defineStore } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pinia/dist/pinia.prod.cjs';
import { u as useModalStore, w as work } from './work-eSm_XacQ.mjs';
import { u as useMainStore } from './server.mjs';
import { _ as _sfc_main$2 } from './Preloader-DLOGK4Oi.mjs';
import { onBeforeRouteLeave } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useHead } from './_plugin-vue_export-helper-CxiIwPb2.mjs';
import './nuxt-link-BvcfoKbn.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/gsap/dist/gsap.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/h3/dist/index.mjs';
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
import '../_/renderer.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/devalue/index.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';

const useWorkStore = defineStore("work", () => {
  const activeFilters = ref([]);
  const modalItem = ref(null);
  const work$1 = ref(work);
  const isFiltered = ref(false);
  const gridResults = ref(true);
  const allTech = Array.from(
    work.flatMap(
      (w) => (w.tech || []).map((tech) => ({
        tech,
        textColor: w.textColor || "text-primary"
      }))
    ).reduce((map, item) => {
      if (!map.has(item.tech)) {
        map.set(item.tech, item);
      }
      return map;
    }, /* @__PURE__ */ new Map()).values()
  );
  ref([...allTech]);
  const filteredWork = computed(() => {
    gridResults.value = true;
    if (activeFilters.value.length === 0) {
      isFiltered.value = false;
      return work$1.value;
    }
    const results = work$1.value.filter((item) => {
      const allTags = [
        ...item.caseStudy ? ["case-study"] : [],
        ...item.tech || []
      ];
      return activeFilters.value.every((tag) => allTags.includes(tag));
    });
    gridResults.value = results.length > 0;
    isFiltered.value = true;
    return results;
  });
  const toggleFilter = (tag) => {
    if (activeFilters.value.includes(tag)) {
      activeFilters.value = activeFilters.value.filter((t) => t !== tag);
    } else {
      activeFilters.value.push(tag);
    }
  };
  const resetFilter = () => {
    activeFilters.value = [];
    isFiltered.value = false;
    gridResults.value = true;
  };
  return {
    activeFilters,
    modalItem,
    allTech,
    filteredWork,
    toggleFilter,
    resetFilter,
    isFiltered,
    gridResults
  };
});
const _sfc_main$1 = {
  __name: "Work",
  __ssrInlineRender: true,
  setup(__props) {
    const tagsVisible = ref(null);
    ref(null);
    const store = useWorkStore();
    const techStack = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap sidebar w-full lg:w-1/4 gap-2 mb-8 md:mb-0 lg:sticky lg:top-30 xl:pr-8" }, _attrs))}><div class="flex justify-between w-full"><h4 class="font-bold placeholder-line h3" data-splitting="words">Tech Stack</h4>`);
      if (unref(store).isFiltered) {
        _push(`<button class="${ssrRenderClass([unref(store).isFiltered ? "animate  opacity-60" : "", "text-primary dark:text-accent inverted:text-accent inverted:dark:text-border tag-button relative overflow-hidden rounded-[6rem] transition-all duration-700 border-transparent dark:border-current border hover:text-accent dark:hover:text-electric-purple inverted:hover:text-electric-purple inverted:dark:hover:text-accent hover:scale-[1.15] hover:opacity-80 group cursor-pointer subtle-slide-in w-8 flex justify-center items-center"])}" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0s" })}"><svg class="feather feather-xtransition-all duration-700 opacity-60" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([tagsVisible.value ? "animate " : "opacity-0", "swing-in-left-fwd-slow h-[2px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition mb-3 lg:mb-5 w-full opacity-0"])}" style="${ssrRenderStyle([
        tagsVisible.value ? null : { display: "none" },
        { "--theme-main-animation-delay": "0.3s" }
      ])}"></div><div class="flex flex-wrap gap-1.5 items-start" style="${ssrRenderStyle(tagsVisible.value ? null : { display: "none" })}"><!--[-->`);
      ssrRenderList(techStack.value, (tag) => {
        _push(`<button class="${ssrRenderClass([[tag.textColor, unref(store).activeFilters.includes(tag.tech) ? "opacity-100 active wobble-ver-right" : "opacity-70"], "peer tag-button relative overflow-hidden rounded-[6rem] px-4 py-1 text-xs transition-all duration-700 bg-primary dark:bg-deep-purple inverted:bg-deep-purple border-transparent dark:border-current inverted:border-current border hover:scale-[1.08] hover:opacity-90 group cursor-pointer"])}"><span class="${ssrRenderClass([unref(store).activeFilters.includes(tag.tech) ? "w-full opacity-10" : "", "absolute left-0 top-0 h-full w-0 bg-current opacity-20 transition-[width] duration-700 ease-linear group-hover:w-full"])}"></span><span class="${ssrRenderClass([[unref(store).activeFilters.includes(tag.tech) ? "-translate-x-2" : ""], "relative z-10 block transition-all duration-700"])}">${ssrInterpolate(tag.tech)}</span><svg class="${ssrRenderClass([[unref(store).activeFilters.includes(tag.tech) ? "opacity-100" : "opacity-0"], "feather feather-x absolute right-1.5 top-1.5 transition-all duration-700"])}" fill="none" height="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg></button>`);
      });
      _push(`<!--]--></div><div style="${ssrRenderStyle([
        { "--theme-main-animation-delay": "2s" },
        tagsVisible.value ? null : { display: "none" }
      ])}" class="${ssrRenderClass([tagsVisible.value ? "animate " : "opacity-0", "swing-in-left-fwd-slow h-[2px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition my-3 lg:my-5 w-full opacity-0"])}"></div><button class="${ssrRenderClass([unref(store).activeFilters.includes("case-study") ? "opacity-100 active wobble-ver-right" : "opacity-70", "text-electric-purple dark:text-accent peer tag-button relative overflow-hidden rounded-[6rem] px-4 py-1 text-xs transition-all duration-700 bg-primary dark:bg-deep-purple inverted:bg-deep-purple border-transparent dark:border-current inverted:border-current border hover:scale-[1.08] hover:opacity-90 group cursor-pointer"])}"><span class="${ssrRenderClass([unref(store).activeFilters.includes("case-study") ? "w-full opacity-10" : "", "absolute left-0 top-0 h-full w-0 bg-current opacity-20 transition-[width] duration-700 ease-linear group-hover:w-full"])}"></span><span class="${ssrRenderClass([[unref(store).activeFilters.includes("case-study") ? "-translate-x-2" : ""], "relative z-10 block transition-all duration-700"])}">Case Studies</span><svg class="${ssrRenderClass([[unref(store).activeFilters.includes("case-study") ? "opacity-100" : "opacity-0"], "feather feather-x absolute right-1.5 top-1.5 transition-all duration-700"])}" fill="none" height="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg></button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebars/Work.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: "%s | Code Artisan",
      title: "Featured Work",
      meta: [
        { name: "description", content: "Expore my featured work and learn more about the brands that I have empowered." },
        { property: "og:title", content: "Featured Work | Code Artisan" },
        { property: "og:url", content: "https://codeartisan.dev/work/" },
        { property: "og:image", content: "https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto,w_960/v1745552050/Title_bjlnl8.png" }
      ],
      script: [
        {
          src: "/js/hls.mjs",
          type: "module"
        },
        {
          src: "/js/hls.min.js",
          nomodule: true
        }
      ]
    });
    const store = useWorkStore();
    const mainStore = useMainStore();
    ref([]);
    ref([false]);
    ref([]);
    ref([]);
    ref([]);
    ref([]);
    ref(null);
    ref(null);
    ref(null);
    const modalStore = useModalStore();
    onBeforeRouteLeave(() => {
      (void 0).body.style.overflow = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[--><div class="relative transition duration-700 font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary overflow-clip"><div class="utilities max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto pt-9 pb-18 lg:pb-20">`);
      _push(ssrRenderComponent(InnerSecondaryNav, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(InnerNav, {
        title: "Featured Work",
        brandLabel: "hi, i'm emm.",
        brandURL: "/"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="flex flex-col gap-6 lg:flex-row mt-28 lg:mt-60 max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto items-start lg:pb-60">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        style: unref(mainStore).loaded ? null : { display: "none" }
      }, null, _parent));
      _push(`<div class="flex flex-wrap w-full gap-6 work-grid lg:w-3/4" style="${ssrRenderStyle(unref(mainStore).loaded ? null : { display: "none" })}">`);
      if (!unref(store).gridResults) {
        _push(`<div class="text-3xl italic transition-all duration-700 work-grid--no-results"> No matching items found. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(store).filteredWork, (item, index) => {
        _push(`<div class="${ssrRenderClass([item.textColor, "work-grid--item cursor-pointer group w-full relative md:w-[48%] lg:w-full xl:w-[48%]"])}"><div class="relative flex mb-2 media rounded-xl overflow-clip"><img${ssrRenderAttr("src", item.image)} class="w-full h-auto group-hover:-translate-x-[34%] transition-all duration-700 relative z-10"><div class="z-0 w-[35%] transition-all duriation-900 absolute right-0 top-0"><video class="aspect-mobile"${ssrRenderAttr("data-src", item.video.replace("q_auto", "q_auto,w_360"))} muted playsinline loop background allow="picture-in-picture"${ssrRenderAttr("poster", item.video.replace(".m3u8", ".webp").replace("q_auto", "q_auto,so_0.2"))}></video></div></div><h3 class="w-5/6 mb-4 text-lg font-semibold transition duration-700 text-primary dark:text-background inverted:text-background group-hover:text-current">${ssrInterpolate(item.title)}</h3></div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(Contact, {
        style: unref(mainStore).ready ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        style: unref(mainStore).loaded ? null : { display: "none" }
      }, null, _parent));
      _push(`</div>`);
      if (unref(modalStore).modalItem) {
        _push(`<div class="fixed top-0 z-50 w-full overflow-y-auto lg:inset-0 lg:px-6 bg-black/50 backdrop-blur h-dvh overflow-x-clip lg:py-8"><div class="modal-copy bg-primary text-black p-12 lg:p-18 lg:rounded-[3rem] lg:max-w-2xl lg:max-w-5xl w-full relative mx-auto md:mt-0 lg:mt-5 lg:mb-20 is-active is-visible"><button class="${ssrRenderClass([unref(modalStore).modalItem.textColor, "absolute top-1 z-20 right-1 text-3xl cursor-pointer transition duration-700 hover:text-background rounded-[3rem] px-6 py-3 hover:scale-[1.08] group size-18 flex flex-col justify-center items-center hover:rotate-270"])}"><span class="w-10 h-[4px] bg-current block rotate-45 rounded-[3rem] absolute left-4 group-hover:-rotate-135 transition-all duration-700 shadow-md shadow-primary"></span><span class="w-10 h-[4px] bg-current block -rotate-45 rounded-[3rem] absolute left-4 group-hover:rotate-135 transition-all duration-700 shadow-md shadow-primary"></span></button><div class="${ssrRenderClass([unref(modalStore).modalItem.textColor, "relative z-10 flex flex-col items-center justify-center rounded-xl"])}"><div class="flex flex-col items-start justify-center gap-8 md:flex-row"><img${ssrRenderAttr("src", unref(modalStore).modalItem.image)} class="max-md:-mx-12 max-md:-mt-12 max-md:pb-6 max-md:min-w-dvw object-cover md:rounded-[3rem] md:w-[73.5%] transition-all duriation-900"><div class="rounded-xl w-[26.5%] transition-all duriation-900 hidden md:block overflow-clip"><video class="aspect-mobile"${ssrRenderAttr("data-src", unref(modalStore).modalItem.video)} playsinline muted loop></video></div></div><div class="flex flex-col justify-end w-full py-6 transition-all md:p-6 duriation-700"><h3 class="${ssrRenderClass([unref(modalStore).modalItem.textColor, "mb-2 text-2xl font-bold placeholder-line"])}" data-splitting="words">${ssrInterpolate(unref(modalStore).modalItem.title)}</h3><div class="flex flex-col justify-between mb-4 md:flex-row md:items-stretch"><div class="flex flex-col justify-between pr-8 lg:pr-18"><p class="${ssrRenderClass([unref(modalStore).modalItem.textColor, "text-base placeholder-line"])}" data-splitting="words">${(_a = unref(modalStore).modalItem.text) != null ? _a : ""}</p>`);
        if (unref(modalStore).modalItem.specialties) {
          _push(`<div class="mt-4 specialties-animate lg:w-90 xl:w-100"><h4 class="mt-8 mb-2">Specialties</h4><ul class="flex flex-wrap items-start gap-2"><!--[-->`);
          ssrRenderList(unref(modalStore).modalItem.specialties, (specialty, index) => {
            _push(`<li class="inline px-2 py-1 text-xs bg-current subtle-slide-in text-nowrap rounded-xl" style="${ssrRenderStyle("--theme-main-animation-delay:" + (index * 0.3 + 0.8) + "s")}"><span class="text-primary">${ssrInterpolate(specialty)}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex flex-col flex-wrap gap-2 mt-6 group/ctas max-w-75 md:mt-0"><!--[-->`);
        ssrRenderList(unref(modalStore).modalItem.buttons, (button, btnIndex) => {
          _push(`<div class="flex items-center order-2 h-14 md:order-1">`);
          if (button.github) {
            _push(`<a class="${ssrRenderClass([unref(modalStore).modalItem.textColor, "mr-4 transition rounded-full cursor-pointer group-hover/ctas:opacity-40 group-hover/ctas:hover:opacity-100 hover:bg-current hover:rotate-270 group/git subtle-slide-in"])}" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0.6s" })}" target="_blank"${ssrRenderAttr("href", unref(modalStore).modalItem.github)}><svg class="transition dark:group-hover/git:text-primary group-hover/git:rotate-90" enable-background="new 0 0 32 32" height="44px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="44px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" class="transition fill-current group-hover/git:stroke-current group-hover/git:fill-background" fill-rule="evenodd"></path><g></g><g></g><g></g><g></g><g></g><g></g></svg></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<a target="_blank"${ssrRenderAttr("href", button.url)} class="relative flex flex-wrap items-center overflow-hidden text-center transition cursor-pointer group-hover/ctas:opacity-40 group-hover/ctas:hover:opacity-100 group/cta w-60 subtle-slide-in" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0.7s" })}"><span class="relative z-10 inline-block w-full px-4 py-2 font-semibold transition-all border-2 border-current rounded-full bg-inherit text-nowrap">${ssrInterpolate(button.text)}</span><span class="absolute top-0 right-0 z-0 block w-0 h-full transition-all origin-left opacity-0 overflow-clip"><span class="z-0 flex items-center justify-center block w-10 h-full transition-all origin-left bg-current rounded-r-full"><svg class="w-24 h-24 fill-current arrow" viewBox="0 0 24 24"><path d="M8 5l8 7-8 7z"></path></svg></span></span></a></div>`);
        });
        _push(`<!--]-->`);
        if (unref(modalStore).modalItem.tech) {
          _push(`<div class="order-1 pl-2 my-6 max-w-75 md:mb-0 subtle-slide-in md:order-2" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0.8s" })}"><h4 class="mb-1">Tech Stack</h4><ul class="flex flex-wrap items-start gap-2 ml-3 list-disc"><!--[-->`);
          ssrRenderList(unref(modalStore).modalItem.tech, (t, i) => {
            _push(`<li class="pl-0 pr-3 text-sm ps-0 placeholder-line" data-splitting="words"><span class="-ml-1">${ssrInterpolate(t)}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/work/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-58K5ye84.mjs.map
