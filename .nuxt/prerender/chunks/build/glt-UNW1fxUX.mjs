import { defineComponent, mergeProps, unref, ref, createVNode, resolveDynamicComponent, computed, onMounted, nextTick, watch, useSSRContext } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderList } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/server-renderer/index.mjs';
import { I as InnerSecondaryNav, a as InnerNav } from './InnerNav-k0fxsU6_.mjs';
import { u as useMainStore } from './server.mjs';
import { C as Contact, _ as _sfc_main$f, b as _sfc_main$7$1 } from './Footer-CwtjJahA.mjs';
import { _ as _sfc_main$e, L as Links } from './Wordpress-X4cNZJL0.mjs';
import { a as useSeoMeta, _ as _export_sfc } from './_plugin-vue_export-helper-CxiIwPb2.mjs';
import { M as MainButton } from './MainButton-BKS2LnZK.mjs';
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
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/uuid/dist/esm/index.js';
import '../_/renderer.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/devalue/index.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Intro",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: [Object, Function],
      required: true
    },
    heading: String,
    videoURL: String,
    poster: String
  },
  setup(__props) {
    const store = useMainStore();
    const intro = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "intro",
        ref: intro,
        class: ["max-w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto intro flex flex-col md:flex-row relative overflow-clip lg:items-end", { "opacity-0": !unref(store).loaded }]
      }, _attrs))}><div class="px-8 lg:pl-12 relative pt-10 z-1 md:pt-40 flex flex-col items-start order-2 md:order-1 md:w-2xl lg:w-3/5 lg:pb-20">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), null, null), _parent);
      _push(`<h2 class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-3 px-6 mb-2 placeholder-line inline w-content text-background dark:text-primary inverted:text-primary" data-splitting="words">Case Study:</h2>`);
      if (__props.heading) {
        _push(`<h3 class="italic subtitle mb-4 text-3xl placeholder-line pr-6" data-splitting="words">${ssrInterpolate(__props.heading)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:max-w-3/5 mt-25 md:mt-0 lg:mt-6 order-1 md:order-2 md:min-h-[150dvh] lg:min-h-screen"><video class="aspect-square object-cover md:rounded-l-[3rem] lg:rounded-[3rem] sticky top-12"${ssrRenderAttr("data-src", __props.videoURL)} playsinline muted loop${ssrRenderAttr("poster", __props.poster)}></video></div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/case-studies/Intro.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "Overview",
  __ssrInlineRender: true,
  setup(__props) {
    const git = ref(null);
    const overview = ref(null);
    const sideBarVisible = ref(false);
    ref(null);
    const specialties = [
      "Print and Digital Media",
      "Video and Image optimizations",
      "API Integrations",
      "Custom Theme and Plugin Development",
      "CRM & Communications Strategy"
    ];
    const tech = [
      "WordPress",
      "ACF",
      "Webpack",
      "Airtable",
      "Cloudinary",
      "React",
      "Bootstrap",
      "GSAP"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "overview",
        ref: overview,
        class: "overview flex-wrap max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 xl:px-26 mx-auto intro flex md:flex-row relative md:pb-16 justify-center"
      }, _attrs))}><div class="flex flex-col md:w-1/3 lg:w-1/4 py-6 side"><div class="w-full flex justify-between relative"><h4 class="text-2xl font-black w-full placeholder-line" data-splitting="words">Overview</h4>`);
      _push(ssrRenderComponent(_sfc_main$7$1, {
        url: "https://github.com/msamricth/greenleadershiptrust",
        aria: "Green Leadership Trust's Github",
        class: "w-10 relative overview-git",
        ref_key: "git",
        ref: git
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([sideBarVisible.value ? "animate " : "opacity-0", "swing-in-left-fwd-slow h-[2px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition mb-3 lg:mb-5 w-full opacity-0"])}" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0.3s" })}"></div><div class="flex gap-2 items-center mb-4 md:flex-col xl:flex-row md:items-start xl:items-center"><h5 class="placeholder-line text-base" data-splitting="words">Client:</h5><span class="placeholder-line text-base" data-splitting="words">Green Leadership Trust</span></div><div class="specialties-animate mb-5"><h5 class="placeholder-line mb-2 text-base" data-splitting="words">Specialties:</h5><ul class="flex gap-1 items-start flex-wrap"><!--[-->`);
      ssrRenderList(specialties, (specialty, index) => {
        _push(`<li class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags" style="${ssrRenderStyle("--theme-main-animation-delay:" + (index * 0.3 + 0.8) + "s")}">${ssrInterpolate(specialty)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="specialties-animate mb-4"><h5 class="placeholder-line mb-2 text-base" data-splitting="words">Techstack:</h5><ul class="flex gap-1 items-start flex-wrap"><!--[-->`);
      ssrRenderList(tech, (t, index) => {
        _push(`<li class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags" style="${ssrRenderStyle("--theme-main-animation-delay:" + (index * 0.3 + 0.8) + "s")}">${ssrInterpolate(t)}</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="md:w-2/3 lg:w-3/4 entry md:pl-8 lg:pl-12 xl:pl-16 pt-5"><div class="sticky top-24 md:pb-10 lg:pb-0"><p class="placeholder-line text-lg lg:text-2xl leading-[1.4] mb-4" data-splitting="words"> Since 2022, I have partnered with Green Leadership Trust (GLT)\u2014an organization that elevates people of the global majority into leadership roles within the environmental movement\u2014by serving as their design and digital strategist. </p><p class="placeholder-line text-lg lg:text-2xl leading-[1.4]" data-splitting="words">Our collaboration has centered on elevating GLT\u2019s visibility, operational capacity, and engagement strategy through a deeply aligned and mission-driven creative approach. </p></div></div></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/case-studies/Overview.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "FullImage",
  __ssrInlineRender: true,
  setup(__props) {
    const section = ref(null);
    const sectionVis = ref(false);
    const imgLoaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "section",
        ref: section,
        class: "max-w-full lg:max-w-[1290px] xl:max-w-[1840px] md:px-8 lg:px-12 mx-auto relative md:pb-20 justify-center pt-10 relative pb-10 lg:min-h-dvh"
      }, _attrs))}><div class="${ssrRenderClass([sectionVis.value ? "animate " : "opacity-0", "swing-in-left-fwd-slow h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition mb-12 lg:mb-24 xl:mb-32 mx-8 lg:max-w-[842px] xl:max-w-[1260px] md:mx-auto lg:px-44"])}" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0s" })}"></div><img src="https://res.cloudinary.com/dp1qyhhlo/image/upload/w_100,e_pixelate,f_auto,e_grayscale/v1746750909/Title_2_jwbc2m.png" data-src="https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto/v1746750909/Title_2_jwbc2m.png" alt="A screenshot of the Green leadership Trust Website" class="${ssrRenderClass([imgLoaded.value ? "opacity-100" : "opacity-20", "w-full h-auto mx-auto transition-all duration-700 object-cover"])}"></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/case-studies/FullImage.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "BasicImage",
  __ssrInlineRender: true,
  props: {
    heading: String,
    paragraph: String,
    items: Array,
    tagIntro: String,
    tags: Array,
    image: String
  },
  setup(__props) {
    const el = ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "flex flex-col md:flex-row relative md:justify-between lg:justify-center items-start py-14 lg:py-0 gap-12 lg:min-h-[250dvh] overflow-clip md:mt-10 lg:mt-20 xl:mt-88"
      }, _attrs))}><div class="w-full md:max-w-2xl text-container px-8 lg:px-12 pb-12 md:pb-0 lg:min-h-dvh flex flex-col justify-center tl"><h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">${ssrInterpolate(__props.heading)}</h4>`);
      if (__props.paragraph) {
        _push(`<p class="text-xl mb-6 placeholder-line" data-splitting="words">${ssrInterpolate(__props.paragraph)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.items && __props.items.length) {
        _push(`<ul class="list-disc pl-6 space-y-3"><!--[-->`);
        ssrRenderList(__props.items, (item, i) => {
          _push(`<li class="text-lg font-medium opacity-0" data-item>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tags && __props.tags.length) {
        _push(`<h5 class="text-xl my-6 placeholder-line" data-splitting="words">${ssrInterpolate(__props.tagIntro)}</h5>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tags && __props.tags.length) {
        _push(`<ul class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(__props.tags, (tag, i) => {
          _push(`<li class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">${ssrInterpolate(tag)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-full lg:w-1/2 h-[90dvh] md:rounded-l-[3rem] bg-cover bg-no-repeat bg-center lg:opacity-0 lg:absolute top-18 right-0 image tl" style="${ssrRenderStyle(`background-image:url(${__props.image})`)}"></div></section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/case-studies/sections/BasicImage.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Image",
  __ssrInlineRender: true,
  props: {
    image: String
  },
  setup(__props) {
    const imageSection = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "imageSection",
        ref: imageSection,
        class: "max-w-full lg:max-w-[1290px] xl:max-w-[1680px] mx-auto lg:px-12 py-12 lg:py-0 relative"
      }, _attrs))}><img class="md:max-h-[95dvh] mx-auto md:rounded-[3rem] lg:rounded-[6rem]"${ssrRenderAttr("src", __props.image.replace("upload", "upload/w_100,e_pixelate,f_auto,e_grayscale"))}${ssrRenderAttr("data-src", __props.image)}></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/case-studies/sections/Image.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "Gist",
  __ssrInlineRender: true,
  props: {
    gistId: { type: String, required: true },
    repoUrl: { type: String, default: "" },
    FileName: { type: String, default: "" },
    Caption: { type: String, default: "" }
  },
  setup(__props) {
    const props = __props;
    const loading = ref(true);
    const error = ref("");
    const code = ref("");
    const gistLinkText = computed(() => {
      const intro = props.FileName ? `<strong class="block md:inline">${props.FileName} / </strong>` : "";
      return intro + "View the full repo \u2197";
    });
    const defaultGistPage = computed(() => {
      const id = props.gistId.split("/").pop();
      return `https://gist.github.com/${id}`;
    });
    async function fetchGist() {
      loading.value = true;
      error.value = "";
      code.value = "";
      const id = props.gistId.includes("gist.github.com") ? props.gistId.split("/").pop() : props.gistId;
      try {
        const res = await fetch(`https://api.github.com/gists/${id}`);
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
        const gist = await res.json();
        const files = gist.files;
        const filename = Object.keys(files)[0];
        code.value = files[filename].content;
      } catch (e) {
        error.value = e.message;
      } finally {
        loading.value = false;
      }
    }
    function linkText() {
      return gistLinkText.value;
    }
    onMounted(async () => {
      await nextTick();
      fetchGist();
    });
    watch(() => [props.gistId, props.file], fetchGist);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gist-embed lg:max-w-2xl rounded-[1.5rem] overflow-clip" }, _attrs))} data-v-c0824a19>`);
      if (loading.value) {
        _push(`<div data-v-c0824a19>Loading snippet\u2026</div>`);
      } else if (error.value) {
        _push(`<div class="text-red-500" data-v-c0824a19>Error: ${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<div data-v-c0824a19><div class="bg-gray-100/10 px-6 py-2 flex justify-between items-center text-background" data-v-c0824a19>`);
        if (__props.Caption) {
          _push(`<span class="text-xs" data-v-c0824a19>${ssrInterpolate(__props.Caption)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><pre class="overflow-y-auto overflow-x-clip px-6 bg-gray-700/10 text-hot-coral h-[45dvh] lg:h-[60dvh] relative transition-all duration-700 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-thumb]:cursor-pointer" data-v-c0824a19>                 <code class="text-xs/6 block opacity-70" data-v-c0824a19>${ssrInterpolate(code.value)}</code>
            </pre><div class="bg-gray-100/10 px-6 py-2 flex justify-between items-center text-background text-md" data-v-c0824a19>`);
        if (!loading.value) {
          _push(ssrRenderComponent(Links, {
            href: __props.repoUrl || defaultGistPage.value,
            text: typeof linkText === "function" ? linkText() : linkText
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$7$1, {
          url: __props.repoUrl || defaultGistPage.value,
          aria: __props.Caption,
          class: "w-10 relative"
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/Gist.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Gist = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-c0824a19"]]);
const _sfc_main$7 = {
  __name: "ImageGist",
  __ssrInlineRender: true,
  props: {
    heading: String,
    paragraph: String,
    items: Array,
    tagIntro: String,
    tags: Array,
    image: String,
    gistId: String,
    repoUrl: String,
    FileName: String,
    Caption: String
  },
  setup(__props) {
    const elm = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "elm",
        ref: elm,
        class: "min-h-dvh flex flex-col md:flex-row items-center justify-between py-14 gap-12 relative tl lg:min-h-[200vh] lg:items-start"
      }, _attrs))}><div class="w-full order-3 md:order-1 md:w-1/3 h-[80vh] bg-cover bg-center md:opacity-0 md:rounded-r-[3rem] image tl md:px-8 lg:px-12 lg:mt-8 xl:w-1/2" style="${ssrRenderStyle(`background-image:url(${__props.image})`)}"></div><div class="w-full order-1 md:order-2 lg:max-w-2xl md:mr-auto text-container px-8 lg:px-12 tl lg:h-[80vh] lg:flex lg:flex-col lg:justify-center lg:mt-8"><h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">${ssrInterpolate(__props.heading)}</h4>`);
      if (__props.paragraph) {
        _push(`<p class="text-xl mb-6 placeholder-line" data-splitting="words">${ssrInterpolate(__props.paragraph)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="list-disc pl-6 space-y-3"><!--[-->`);
      ssrRenderList(__props.items, (item, i) => {
        _push(`<li class="text-lg font-medium opacity-0" data-item>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul>`);
      if (__props.tags && __props.tags.length) {
        _push(`<h5 class="text-xl my-6 placeholder-line" data-splitting="words">${ssrInterpolate(__props.tagIntro)}</h5>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tags && __props.tags.length) {
        _push(`<ul class="flex gap-1 items-start flex-wrap"><!--[-->`);
        ssrRenderList(__props.tags, (tag, i) => {
          _push(`<li class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">${ssrInterpolate(tag)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.gistId) {
        _push(`<div class="order-2 md:px-0 md:pt-6 lg:pt-0 px-2 w-full md:absolute relative md:opacity-0 gist tl md:right-8 lg:right-12 md:w-2/3 flex flex-col justify-center xl:max-w-xl lg:mt-14">`);
        _push(ssrRenderComponent(Gist, {
          gistId: __props.gistId,
          repoUrl: __props.repoUrl,
          FileName: __props.FileName,
          Caption: __props.Caption,
          class: "lg:mx-auto w-full"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/case-studies/sections/ImageGist.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Basic",
  __ssrInlineRender: true,
  props: {
    heading: String,
    paragraph: String,
    items: { type: Array, default: () => [] },
    tagIntro: String,
    tags: { type: Array, default: () => [] }
  },
  setup(__props) {
    const el = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "px-8 max-w-full min-h-[150dvh] flex flex-col pt-24"
      }, _attrs))}><div class="w-full max-w-2xl text-container mx-auto sticky top-45 md:top-25 lg:top-45 xl:top-38"><h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">${ssrInterpolate(__props.heading)}</h4>`);
      if (__props.paragraph) {
        _push(`<p class="text-xl mb-6 placeholder-line" data-splitting="words">${ssrInterpolate(__props.paragraph)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="list-disc pl-6 space-y-3"><!--[-->`);
      ssrRenderList(__props.items, (item, i) => {
        _push(`<li class="text-lg font-medium opacity-0" data-item>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul>`);
      if (__props.tags && __props.tags.length) {
        _push(`<h5 class="text-xl my-6 placeholder-line" data-splitting="words">${ssrInterpolate(__props.tagIntro)}</h5>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tags && __props.tags.length) {
        _push(`<ul class="flex gap-1 items-start flex-wrap"><!--[-->`);
        ssrRenderList(__props.tags, (tag, i) => {
          _push(`<li class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">${ssrInterpolate(tag)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/case-studies/sections/Basic.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "IconGist",
  __ssrInlineRender: true,
  props: {
    heading: String,
    paragraph: String,
    items: Array,
    tagIntro: String,
    tags: Array,
    icons: Array,
    gistId: String,
    repoUrl: String,
    FileName: String,
    Caption: String
  },
  setup(__props) {
    const sectionEl = ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionEl",
        ref: sectionEl,
        class: "relative flex flex-col md:flex-row justify-between py-14 md:py-0 gap-12 max-w-full lg:max-w-[1024px] xl:max-w-[1290px] mx-auto overflow-clip md:min-h-[280dvh] lg:min-h-[200dvh] lg:justify-center lg:items-start"
      }, _attrs))}><div class="order-2 md:order-1 w-full md:max-w-4xl lg:max-w-2xl xl:max-w-xl md:ml-auto text-container pt-6 md:pt-0 lg:pt-6 px-8 lg:pl-12 lg:pr-0 tl lg:min-h-[70vh] lg:flex lg:flex-col lg:justify-center"><h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">${ssrInterpolate(__props.heading)}</h4>`);
      if (__props.paragraph) {
        _push(`<p class="text-xl mb-6 placeholder-line" data-splitting="words">${ssrInterpolate(__props.paragraph)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="list-disc pl-6 space-y-3"><!--[-->`);
      ssrRenderList(__props.items, (item, i) => {
        _push(`<li class="text-lg font-medium opacity-0" data-item>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul>`);
      if (__props.tags && __props.tags.length) {
        _push(`<h5 class="text-xl my-6 placeholder-line" data-splitting="words">${ssrInterpolate(__props.tagIntro)}</h5>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tags && __props.tags.length) {
        _push(`<ul class="flex gap-1 items-start flex-wrap"><!--[-->`);
        ssrRenderList(__props.tags, (tag, i) => {
          _push(`<li class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">${ssrInterpolate(tag)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.gistId) {
        _push(ssrRenderComponent(Gist, {
          gistId: __props.gistId,
          repoUrl: __props.repoUrl,
          FileName: __props.FileName,
          Caption: __props.Caption,
          class: "order-3 md:order-2 md:absolute md:max-w-xl lg:max-w-2xl md:opacity-0 gist mx-2 md:mx-6 md:mt-6 lg:mt-0 tl left-0"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="order-2 md:order-3 items-center relative space-y-12 md:w-2/5 lg:w-lg px-8 lg:pr-12 lg:pl-0 tl lg:h-[70vh] lg:flex lg:flex-col lg:justify-center"><div class="relative iconTrack space-y-12 md:size-90 lg:size-95 origin-center max-md:flex justify-between gap-3 tl">`);
      if (__props.icons[0]) {
        _push(`<div class="icon-btn md:absolute w-24 h-24 group md:min-w-[120px] top-0 left-30 tl">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icons[0]), { class: "icon-wipe-overlay inset-0 w-full h-full transition-all duration-700 z-10 text-hot-coral tl" }, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.icons[1]) {
        _push(`<div class="icon-btn md:absolute w-24 h-24 group md:min-w-[120px] overflow-visible top-34 lg:top-36 left-30 tl">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icons[1]), { class: "icon-wipe-overlay inset-0 w-full h-full transition-all duration-700 z-10 text-electric-purple tl" }, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.icons[2]) {
        _push(`<div class="icon-btn md:absolute w-24 h-24 group min-w-[120px] bottom-0 left-32 tl">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icons[1]), { class: "icon-wipe-overlay inset-0 w-full h-full transition-all duration-700 z-10 text-sunburn-orange tl" }, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/case-studies/sections/IconGist.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "SlideShow",
  __ssrInlineRender: true,
  props: {
    heading: String,
    paragraph: String,
    items: Array,
    tags: Array,
    Images: Array,
    buttonLabel: String,
    buttonHref: String
  },
  setup(__props) {
    const elm = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "elm",
        ref: elm,
        class: "flex flex-col md:flex-row items-center lg:pr-24 justify-center py-14 md:py-0 lg:mt-40 lg:min-h-[300vh] lg:items-start relative w-full lg:mb-0 lg:py-0"
      }, _attrs))}><div class="md:absolute w-full max-w-xl overflow-hidden md:w-1/2 md:h-dvh left-0 tl flex flex-col gap-12 order-2 md:order-1 lg:justify-center lg:max-w-1/2 lg:h-screen"><!--[-->`);
      ssrRenderList(__props.Images, (img, i) => {
        _push(`<img${ssrRenderAttr("src", img)} class="${ssrRenderClass(["results-image-" + i, "md:absolute top-0 left-0 w-full object-contain md:object-cover opacity-0 blur-xl h-full md:rounded-r-[3rem] tl md:h-[120vh]"])}">`);
      });
      _push(`<!--]--></div><div class="w-full md:w-1/2 lg:max-w-2xl mb-12 text-container px-8 lg:px-12 pt-18 order-1 md:order-2 lg:min-h-dvh lg:flex lg:flex-col lg:justify-center lg:mx-auto"><h4 class="text-2xl font-black placeholder-line mb-3" data-splitting="words">${ssrInterpolate(__props.heading)}</h4>`);
      if (__props.paragraph) {
        _push(`<p class="text-xl mb-6 placeholder-line" data-splitting="words">${ssrInterpolate(__props.paragraph)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="list-disc pl-6 space-y-1 lg:space-y-3"><!--[-->`);
      ssrRenderList(__props.items, (item, i) => {
        _push(`<li class="text-sm lg:text-lg font-medium opacity-0" data-item data-splitting="words">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul>`);
      if (__props.tags && __props.tags.length) {
        _push(`<h5 class="text-xl my-6 placeholder-line" data-splitting="words">${ssrInterpolate(_ctx.tagIntro)}</h5>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tags && __props.tags.length) {
        _push(`<ul class="flex gap-1 items-start flex-wrap"><!--[-->`);
        ssrRenderList(__props.tags, (tag, i) => {
          _push(`<li class="bg-primary rounded-[6rem] dark:bg-background inverted:bg-background py-2 px-3 inline w-content text-background dark:text-primary inverted:text-primary text-xs tags opacity-0">${ssrInterpolate(tag)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.buttonLabel && __props.buttonHref) {
        _push(ssrRenderComponent(MainButton, {
          onClick: () => _ctx.ctaClick(__props.buttonHref),
          href: __props.buttonHref,
          label: __props.buttonLabel,
          class: "max-md:text-md min-w-[270px] md:min-w-[306px] text-electric-purple dark:text-accent mt-6 lg:mt-24 btn"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/case-studies/sections/SlideShow.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const data = {
  intro: {
    title: "Empowering Environmental Leadership with Green Leadership Trust",
    video: "https://res.cloudinary.com/dp1qyhhlo/video/upload/q_auto,w_720/v1746727741/GLT-CaseStudy_bja6ze.m3u8",
    poster: "https://res.cloudinary.com/dp1qyhhlo/video/upload/q_auto,w_480/v1746727741/GLT-CaseStudy_bja6ze.webp"
  },
  sections: [
    {
      heading: "Challenges",
      paragraph: "GLT operates at the intersection of racial justice, environmental equity, and leadership development. Their expanding impact demanded:",
      items: [
        "A modern, accessible, and visually compelling brand identity",
        "A website that could serve both public audiences and internal stakeholders",
        "Better internal workflows, especially for managing a CRM and donor pipeline",
        "Cohesive and mission-aligned event materials and collateral"
      ]
    },
    {
      heading: "Brand and Visual Design",
      paragraph: "Designed and refined GLT\u2019s brand identity including event branding, print collateral, digital graphics, and campaign assets.",
      items: [
        "Developed a visual system that reflects GLT\u2019s values of equity, belonging, and sustainability."
      ],
      tagIntro: "Recent work includes:",
      tags: [
        "2024-2029 Strategic Plan",
        "10-Year Anniversary badge and visual materials",
        "Support materials for community pledges and donor outreach"
      ]
    },
    {
      heading: "Website Development",
      paragraph: "Designed and built greenleadershiptrust.org to reflect GLT\u2019s evolving mission. When I first started working on the GLT website it was using Elementor with a buggy theme; I ditched elementor for Gutenberg, built GLT a new theme using Twitter Bootstrap with both ACF Blocks and React based Blocks.",
      items: [
        "The site supports storytelling, calls-to-action for sponsorship, and seamless navigation across initiatives like the Vanguard Fellowship, Board Matchmaking, and partner programs.",
        "Ensured the site is responsive, accessible, and optimized for performance.",
        "Custom Block settings that control spacing, animation, look and feel",
        "Theme options that allows GLT to change or add colors without needing to change code"
      ]
    },
    {
      heading: "Airtable + Systems Automation",
      paragraph: "Built a custom Airtable CRM to track:",
      items: [
        "Member onboarding",
        "Partner organization relationships",
        "Board matchmaking and placements",
        "Event attendance and outreach",
        "Integrated forms, automations, and dashboards to minimize manual work and centralize data.",
        "Developed WordPress Form builder plugin that allows users to build and publish forms based off of Airtable Fields"
      ]
    }
  ],
  results: {
    heading: "Results",
    items: [
      "Brand cohesion across digital and print, increasing audience trust and recognition",
      "A scalable website that supports GLT\u2019s external communication and internal programming needs",
      "Streamlined internal operations using Airtable, resulting in more efficient board placements, tracking, and reporting",
      "Enhanced GLT\u2019s capacity to support its strategic plan (2024\u20132029), especially in areas of digital storytelling, recruitment, and fundraising"
    ],
    Images: [
      "https://res.cloudinary.com/dp1qyhhlo/image/upload/w_900,q_auto/v1746818458/3_1_mkdmee.png",
      "https://res.cloudinary.com/dp1qyhhlo/image/upload/w_900,q_auto/v1746818489/4_1_fz3muz.png"
    ],
    button: {
      href: "https://greenleadershiptrust.org/",
      label: "greenleadershiptrust.com"
    }
  }
};
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    fill: "none",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M4.59375 10.2656L11.0769 12.6857L3 16.5217V7.94203L12 4L21 7.71014V16.5217L12.675 20V11.4203L19 8.85239" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Airtable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Airtable = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "590",
    height: "235",
    viewBox: "0 0 590 235",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><mask id="path-1-inside-1_4_2" fill="white"><path stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M261.213 182.133C261.795 182.133 262.266 182.6 262.15 183.187C260.63 194.18 250.108 204 233.27 204C213.159 204 202.288 190.787 202.288 172.543C202.288 153.367 213.747 140.736 232.92 140.736C252.677 140.736 263.669 153.833 264.019 174.879C264.02 175.018 263.993 175.155 263.94 175.283C263.887 175.411 263.809 175.527 263.711 175.625C263.613 175.723 263.497 175.801 263.369 175.854C263.241 175.907 263.104 175.934 262.965 175.933H219.942C220.642 187.276 225.084 192.302 233.503 192.302C239.349 192.302 243.559 189.612 245.195 183.182C245.311 182.6 245.899 182.129 246.481 182.129H261.213V182.133ZM233.037 152.317C226.021 152.317 221.812 156.527 220.408 164.827H245.078C244.375 158.397 240.752 152.317 233.037 152.317ZM304.676 200.491C304.676 201.073 304.21 201.661 303.739 201.894C300.35 203.064 296.49 203.88 292.747 203.88C282.575 203.88 272.87 198.733 272.87 185.054L272.986 154.884H266.203C266.065 154.884 265.927 154.857 265.799 154.805C265.671 154.752 265.555 154.674 265.457 154.576C265.359 154.478 265.282 154.362 265.229 154.234C265.176 154.106 265.149 153.968 265.15 153.83V143.54C265.15 142.957 265.616 142.487 266.203 142.487H272.986L272.87 128.453C272.869 128.315 272.896 128.177 272.949 128.049C273.002 127.921 273.079 127.805 273.177 127.707C273.275 127.609 273.391 127.531 273.519 127.478C273.647 127.426 273.785 127.399 273.923 127.399H289.474C289.613 127.398 289.75 127.425 289.878 127.478C290.006 127.531 290.122 127.609 290.22 127.707C290.318 127.805 290.396 127.921 290.449 128.049C290.502 128.177 290.529 128.314 290.528 128.453L290.411 142.487H303.739C303.877 142.486 304.015 142.513 304.143 142.566C304.271 142.619 304.387 142.696 304.485 142.794C304.583 142.892 304.661 143.008 304.714 143.136C304.766 143.264 304.793 143.402 304.793 143.54V153.83C304.794 153.969 304.767 154.106 304.714 154.234C304.661 154.362 304.583 154.478 304.485 154.576C304.387 154.674 304.271 154.752 304.143 154.805C304.015 154.858 303.878 154.885 303.739 154.884H290.295L290.411 184.583C290.411 189.73 292.984 191.367 296.844 191.367C299.651 191.367 301.87 190.9 303.627 190.313C304.21 190.196 304.68 190.663 304.68 191.129V200.491H304.676ZM362.254 202.48C361.671 202.48 361.084 202.014 360.968 201.426L351.495 157.227L343.309 201.426C343.193 202.009 342.61 202.48 342.023 202.48H323.548C322.965 202.48 322.378 202.014 322.262 201.426L309.404 143.314C309.288 142.731 309.754 142.261 310.225 142.261H325.776C326.359 142.261 326.946 142.727 326.946 143.314L333.729 187.63L342.031 143.314C342.148 142.731 342.731 142.261 343.318 142.261H362.375C362.958 142.261 363.545 142.727 363.662 143.314L371.614 186.814L378.747 143.314C378.747 142.731 379.33 142.261 379.917 142.261H394.065C394.648 142.261 395.002 142.727 394.881 143.314L382.136 201.431C382.019 202.014 381.437 202.484 380.849 202.484H362.254V202.48ZM424.692 204C405.052 204 393.71 191.724 393.71 172.543C393.71 153.362 405.052 140.736 424.692 140.736C444.332 140.736 455.441 153.012 455.441 172.193C455.441 191.369 444.336 204 424.692 204ZM424.692 192.306C433.344 192.306 437.437 186.343 437.437 172.547C437.437 158.984 433.228 152.434 424.575 152.434C415.69 152.55 411.597 159.101 411.597 172.664C411.597 186.227 415.923 192.306 424.692 192.306ZM459.312 203.207C459.174 203.208 459.036 203.181 458.908 203.128C458.78 203.075 458.664 202.998 458.566 202.9C458.468 202.802 458.39 202.686 458.337 202.558C458.285 202.43 458.258 202.292 458.258 202.154L458.725 173.037L458.258 144.038C458.257 143.899 458.284 143.762 458.337 143.634C458.39 143.506 458.468 143.39 458.566 143.292C458.663 143.194 458.78 143.116 458.908 143.063C459.036 143.01 459.173 142.983 459.312 142.984H474.747C474.885 142.984 475.023 143.011 475.151 143.063C475.279 143.116 475.395 143.194 475.493 143.292C475.591 143.39 475.668 143.506 475.721 143.634C475.774 143.762 475.801 143.9 475.8 144.038L475.334 153.157C480.01 146.024 488.079 142.518 496.848 142.518C497.785 142.518 498.717 142.634 499.537 142.751C500.12 142.867 500.591 143.455 500.591 144.038V154.91C500.591 155.493 500.125 155.847 499.537 155.847C498.838 155.731 498.018 155.731 497.314 155.731C484.919 155.731 475.684 162.631 475.8 176.427V202.154C475.8 202.737 475.334 203.207 474.747 203.207H459.312ZM536.907 189.85L529.425 176.52L523.696 183.77L523.812 201.427C523.812 202.01 523.346 202.48 522.759 202.48H507.441C507.303 202.481 507.165 202.454 507.037 202.401C506.909 202.348 506.793 202.271 506.695 202.173C506.597 202.075 506.519 201.959 506.466 201.831C506.414 201.703 506.387 201.565 506.387 201.427L506.853 161.554L506.387 121.681C506.387 121.543 506.414 121.405 506.466 121.277C506.519 121.149 506.597 121.033 506.695 120.935C506.793 120.837 506.909 120.76 507.037 120.707C507.165 120.654 507.303 120.627 507.441 120.628H522.759C523.342 120.628 523.812 121.094 523.812 121.681L523.463 161.204V164.827L540.884 143.077C541.35 142.611 542.054 142.261 542.636 142.261H559.824C560.291 142.261 560.407 142.728 560.174 143.077L541.583 163.89L563.33 201.543C563.563 202.01 563.213 202.48 562.747 202.48H544.506C543.923 202.48 543.219 202.131 542.986 201.543L536.907 189.85ZM143.355 166.347V201.427C143.355 201.565 143.328 201.703 143.276 201.831C143.223 201.959 143.145 202.075 143.047 202.173C142.949 202.271 142.833 202.348 142.705 202.401C142.577 202.454 142.439 202.481 142.301 202.48H127.687C127.549 202.481 127.411 202.454 127.283 202.401C127.155 202.348 127.039 202.271 126.941 202.173C126.843 202.075 126.765 201.959 126.712 201.831C126.66 201.703 126.633 201.565 126.633 201.427L127.1 161.554L126.633 121.681C126.633 121.543 126.66 121.405 126.712 121.277C126.765 121.149 126.843 121.033 126.941 120.935C127.039 120.837 127.155 120.76 127.283 120.707C127.411 120.654 127.549 120.627 127.687 120.628H147.21C147.793 120.628 148.497 120.978 148.73 121.565L181.586 179.098L180.882 160.738V121.682C180.881 121.544 180.908 121.406 180.961 121.278C181.014 121.15 181.091 121.034 181.189 120.936C181.287 120.838 181.403 120.76 181.531 120.707C181.659 120.655 181.797 120.628 181.935 120.628H196.55C196.688 120.627 196.826 120.654 196.954 120.707C197.082 120.76 197.198 120.837 197.296 120.935C197.394 121.033 197.472 121.149 197.525 121.277C197.577 121.405 197.604 121.543 197.604 121.681L197.137 161.554L197.604 201.427C197.604 201.565 197.577 201.703 197.525 201.831C197.472 201.959 197.394 202.075 197.296 202.173C197.198 202.271 197.082 202.348 196.954 202.401C196.826 202.454 196.688 202.481 196.55 202.48H176.323C175.74 202.48 175.036 202.131 174.803 201.543L142.651 144.131L142.768 147.287L143.355 166.347ZM189.263 113.538C188.68 113.538 188.093 113.072 187.86 112.485L181.548 92.725H150.916L144.837 112.485C144.604 113.068 144.016 113.538 143.433 113.538H127.416C126.833 113.538 126.479 113.072 126.716 112.485L154.421 32.735C154.655 32.152 155.242 31.682 155.825 31.682H177.688C178.271 31.682 178.858 32.148 179.091 32.735L206.218 112.485C206.451 113.068 206.101 113.538 205.518 113.538H189.263ZM177.105 78.575L165.88 43.612L155.242 78.575H177.105ZM234.514 115.056C215.223 115.056 203.765 102.78 203.765 83.6C203.765 64.419 215.223 51.793 234.863 51.793C250.298 51.793 260.349 60.563 261.752 73.659C261.869 74.242 261.403 74.713 260.815 74.713H246.667C246.084 74.713 245.614 74.247 245.497 73.659C244.094 66.876 239.884 63.603 234.859 63.603C225.974 63.719 221.764 70.153 221.764 83.483C221.764 97.283 226.09 103.247 234.859 103.363C240.821 103.48 245.264 99.27 245.968 91.437C246.084 90.854 246.551 90.383 247.138 90.383H261.636C262.219 90.383 262.689 90.849 262.573 91.437C261.286 105.117 250.298 115.056 234.514 115.056ZM302.21 111.313C302.21 111.896 301.744 112.483 301.273 112.717C297.884 113.887 294.024 114.703 290.281 114.703C280.109 114.703 270.404 109.556 270.404 95.876L270.52 65.706H263.738C263.6 65.7065 263.462 65.6797 263.334 65.6269C263.206 65.5742 263.09 65.4967 262.992 65.3988C262.894 65.301 262.816 65.1847 262.763 65.0567C262.711 64.9287 262.684 64.7915 262.684 64.653V54.367C262.684 54.2285 262.711 54.0913 262.763 53.9633C262.816 53.8353 262.894 53.719 262.992 53.6212C263.09 53.5233 263.206 53.4458 263.334 53.3931C263.462 53.3403 263.6 53.3135 263.738 53.314H270.52L270.404 39.28C270.404 39.1416 270.431 39.0045 270.483 38.8766C270.536 38.7486 270.614 38.6324 270.712 38.5345C270.809 38.4367 270.926 38.3591 271.054 38.3063C271.181 38.2536 271.319 38.2266 271.457 38.227H287.009C287.147 38.2266 287.285 38.2536 287.412 38.3063C287.54 38.3591 287.657 38.4367 287.754 38.5345C287.852 38.6324 287.93 38.7486 287.983 38.8766C288.035 39.0045 288.062 39.1416 288.062 39.28L287.945 53.314H301.273C301.411 53.3135 301.549 53.3403 301.677 53.3931C301.805 53.4458 301.921 53.5233 302.019 53.6212C302.117 53.719 302.195 53.8353 302.248 53.9633C302.3 54.0913 302.327 54.2285 302.327 54.367V64.657C302.328 64.7956 302.301 64.9329 302.248 65.061C302.195 65.1891 302.117 65.3055 302.019 65.4035C301.921 65.5014 301.805 65.5791 301.677 65.6318C301.549 65.6846 301.412 65.7115 301.273 65.711H287.829L287.945 95.411C287.945 100.557 290.519 102.194 294.378 102.194C297.185 102.194 299.404 101.727 301.161 101.14C301.744 101.024 302.215 101.49 302.215 101.956V111.313H302.21ZM307.473 47.468C307.335 47.4685 307.198 47.4418 307.07 47.3893C306.943 47.3368 306.827 47.2596 306.729 47.1622C306.631 47.0647 306.553 46.9489 306.5 46.8214C306.447 46.6938 306.42 46.5571 306.42 46.419V32.735C306.42 32.5966 306.447 32.4595 306.499 32.3316C306.552 32.2036 306.63 32.0874 306.728 31.9895C306.825 31.8917 306.942 31.8141 307.07 31.7613C307.198 31.7086 307.335 31.6816 307.473 31.682H323.141C323.279 31.6815 323.417 31.7083 323.545 31.7611C323.673 31.8138 323.789 31.8913 323.887 31.9892C323.985 32.087 324.063 32.2033 324.116 32.3313C324.168 32.4593 324.195 32.5965 324.195 32.735V46.42C324.195 47.003 323.729 47.47 323.141 47.47H307.473V47.468ZM307.473 113.538C307.335 113.538 307.198 113.511 307.07 113.459C306.942 113.406 306.825 113.328 306.728 113.23C306.63 113.133 306.552 113.016 306.499 112.888C306.447 112.761 306.42 112.623 306.42 112.485L306.77 83.485L306.42 54.369C306.419 54.2305 306.446 54.0933 306.499 53.9653C306.552 53.8372 306.629 53.7209 306.727 53.6229C306.825 53.5249 306.941 53.4473 307.069 53.3944C307.197 53.3416 307.335 53.3146 307.473 53.315H323.258C323.841 53.315 324.311 53.781 324.311 54.368L323.962 83.485L324.311 112.485C324.311 112.623 324.284 112.761 324.232 112.888C324.179 113.016 324.101 113.133 324.003 113.23C323.906 113.328 323.789 113.406 323.661 113.459C323.534 113.511 323.396 113.538 323.258 113.538H307.473ZM359.737 115.056C340.097 115.056 328.755 102.78 328.755 83.6C328.755 64.419 340.097 51.793 359.737 51.793C379.377 51.793 390.49 64.073 390.49 83.25C390.49 102.426 379.381 115.056 359.737 115.056ZM359.737 103.363C368.389 103.363 372.482 97.4 372.482 83.603C372.482 70.041 368.272 63.49 359.62 63.49C350.735 63.607 346.642 70.157 346.642 83.72C346.642 97.283 350.968 103.363 359.737 103.363ZM395.869 113.536C395.73 113.537 395.593 113.51 395.465 113.457C395.337 113.404 395.221 113.326 395.123 113.228C395.025 113.13 394.947 113.014 394.894 112.886C394.841 112.758 394.814 112.621 394.815 112.482L395.165 84.652L395.049 54.366C395.049 54.2276 395.076 54.0905 395.128 53.9626C395.181 53.8346 395.259 53.7184 395.357 53.6205C395.454 53.5227 395.571 53.4451 395.699 53.3923C395.827 53.3396 395.964 53.3126 396.102 53.313H410.954C411.092 53.3125 411.23 53.3393 411.358 53.3921C411.486 53.4448 411.602 53.5223 411.7 53.6202C411.798 53.7181 411.876 53.8343 411.929 53.9623C411.981 54.0903 412.008 54.2275 412.008 54.366L411.658 60.912C415.751 55.652 422.65 51.909 431.065 51.909C443.81 51.909 451.996 60.563 451.996 75.296V87.922L452.345 112.478C452.346 112.616 452.319 112.754 452.266 112.882C452.213 113.01 452.136 113.126 452.038 113.224C451.94 113.322 451.824 113.4 451.696 113.453C451.568 113.505 451.43 113.532 451.292 113.532H435.624C435.485 113.533 435.348 113.506 435.22 113.453C435.092 113.4 434.976 113.322 434.878 113.224C434.78 113.126 434.702 113.01 434.649 112.882C434.596 112.754 434.569 112.617 434.57 112.478L434.804 87.922V75.529C434.804 68.979 430.944 64.773 425.685 64.773C419.373 64.773 412.59 70.619 412.59 83.483V87.926L412.824 112.482C412.825 112.621 412.798 112.758 412.745 112.886C412.692 113.014 412.614 113.13 412.516 113.228C412.419 113.326 412.302 113.404 412.174 113.457C412.046 113.51 411.909 113.537 411.77 113.536H395.869Z"></path></mask><path d="M261.213 182.133C261.795 182.133 262.266 182.6 262.15 183.187C260.63 194.18 250.108 204 233.27 204C213.159 204 202.288 190.787 202.288 172.543C202.288 153.367 213.747 140.736 232.92 140.736C252.677 140.736 263.669 153.833 264.019 174.879C264.02 175.018 263.993 175.155 263.94 175.283C263.887 175.411 263.809 175.527 263.711 175.625C263.613 175.723 263.497 175.801 263.369 175.854C263.241 175.907 263.104 175.934 262.965 175.933H219.942C220.642 187.276 225.084 192.302 233.503 192.302C239.349 192.302 243.559 189.612 245.195 183.182C245.311 182.6 245.899 182.129 246.481 182.129H261.213V182.133ZM233.037 152.317C226.021 152.317 221.812 156.527 220.408 164.827H245.078C244.375 158.397 240.752 152.317 233.037 152.317ZM304.676 200.491C304.676 201.073 304.21 201.661 303.739 201.894C300.35 203.064 296.49 203.88 292.747 203.88C282.575 203.88 272.87 198.733 272.87 185.054L272.986 154.884H266.203C266.065 154.884 265.927 154.857 265.799 154.805C265.671 154.752 265.555 154.674 265.457 154.576C265.359 154.478 265.282 154.362 265.229 154.234C265.176 154.106 265.149 153.968 265.15 153.83V143.54C265.15 142.957 265.616 142.487 266.203 142.487H272.986L272.87 128.453C272.869 128.315 272.896 128.177 272.949 128.049C273.002 127.921 273.079 127.805 273.177 127.707C273.275 127.609 273.391 127.531 273.519 127.478C273.647 127.426 273.785 127.399 273.923 127.399H289.474C289.613 127.398 289.75 127.425 289.878 127.478C290.006 127.531 290.122 127.609 290.22 127.707C290.318 127.805 290.396 127.921 290.449 128.049C290.502 128.177 290.529 128.314 290.528 128.453L290.411 142.487H303.739C303.877 142.486 304.015 142.513 304.143 142.566C304.271 142.619 304.387 142.696 304.485 142.794C304.583 142.892 304.661 143.008 304.714 143.136C304.766 143.264 304.793 143.402 304.793 143.54V153.83C304.794 153.969 304.767 154.106 304.714 154.234C304.661 154.362 304.583 154.478 304.485 154.576C304.387 154.674 304.271 154.752 304.143 154.805C304.015 154.858 303.878 154.885 303.739 154.884H290.295L290.411 184.583C290.411 189.73 292.984 191.367 296.844 191.367C299.651 191.367 301.87 190.9 303.627 190.313C304.21 190.196 304.68 190.663 304.68 191.129V200.491H304.676ZM362.254 202.48C361.671 202.48 361.084 202.014 360.968 201.426L351.495 157.227L343.309 201.426C343.193 202.009 342.61 202.48 342.023 202.48H323.548C322.965 202.48 322.378 202.014 322.262 201.426L309.404 143.314C309.288 142.731 309.754 142.261 310.225 142.261H325.776C326.359 142.261 326.946 142.727 326.946 143.314L333.729 187.63L342.031 143.314C342.148 142.731 342.731 142.261 343.318 142.261H362.375C362.958 142.261 363.545 142.727 363.662 143.314L371.614 186.814L378.747 143.314C378.747 142.731 379.33 142.261 379.917 142.261H394.065C394.648 142.261 395.002 142.727 394.881 143.314L382.136 201.431C382.019 202.014 381.437 202.484 380.849 202.484H362.254V202.48ZM424.692 204C405.052 204 393.71 191.724 393.71 172.543C393.71 153.362 405.052 140.736 424.692 140.736C444.332 140.736 455.441 153.012 455.441 172.193C455.441 191.369 444.336 204 424.692 204ZM424.692 192.306C433.344 192.306 437.437 186.343 437.437 172.547C437.437 158.984 433.228 152.434 424.575 152.434C415.69 152.55 411.597 159.101 411.597 172.664C411.597 186.227 415.923 192.306 424.692 192.306ZM459.312 203.207C459.174 203.208 459.036 203.181 458.908 203.128C458.78 203.075 458.664 202.998 458.566 202.9C458.468 202.802 458.39 202.686 458.337 202.558C458.285 202.43 458.258 202.292 458.258 202.154L458.725 173.037L458.258 144.038C458.257 143.899 458.284 143.762 458.337 143.634C458.39 143.506 458.468 143.39 458.566 143.292C458.663 143.194 458.78 143.116 458.908 143.063C459.036 143.01 459.173 142.983 459.312 142.984H474.747C474.885 142.984 475.023 143.011 475.151 143.063C475.279 143.116 475.395 143.194 475.493 143.292C475.591 143.39 475.668 143.506 475.721 143.634C475.774 143.762 475.801 143.9 475.8 144.038L475.334 153.157C480.01 146.024 488.079 142.518 496.848 142.518C497.785 142.518 498.717 142.634 499.537 142.751C500.12 142.867 500.591 143.455 500.591 144.038V154.91C500.591 155.493 500.125 155.847 499.537 155.847C498.838 155.731 498.018 155.731 497.314 155.731C484.919 155.731 475.684 162.631 475.8 176.427V202.154C475.8 202.737 475.334 203.207 474.747 203.207H459.312ZM536.907 189.85L529.425 176.52L523.696 183.77L523.812 201.427C523.812 202.01 523.346 202.48 522.759 202.48H507.441C507.303 202.481 507.165 202.454 507.037 202.401C506.909 202.348 506.793 202.271 506.695 202.173C506.597 202.075 506.519 201.959 506.466 201.831C506.414 201.703 506.387 201.565 506.387 201.427L506.853 161.554L506.387 121.681C506.387 121.543 506.414 121.405 506.466 121.277C506.519 121.149 506.597 121.033 506.695 120.935C506.793 120.837 506.909 120.76 507.037 120.707C507.165 120.654 507.303 120.627 507.441 120.628H522.759C523.342 120.628 523.812 121.094 523.812 121.681L523.463 161.204V164.827L540.884 143.077C541.35 142.611 542.054 142.261 542.636 142.261H559.824C560.291 142.261 560.407 142.728 560.174 143.077L541.583 163.89L563.33 201.543C563.563 202.01 563.213 202.48 562.747 202.48H544.506C543.923 202.48 543.219 202.131 542.986 201.543L536.907 189.85ZM143.355 166.347V201.427C143.355 201.565 143.328 201.703 143.276 201.831C143.223 201.959 143.145 202.075 143.047 202.173C142.949 202.271 142.833 202.348 142.705 202.401C142.577 202.454 142.439 202.481 142.301 202.48H127.687C127.549 202.481 127.411 202.454 127.283 202.401C127.155 202.348 127.039 202.271 126.941 202.173C126.843 202.075 126.765 201.959 126.712 201.831C126.66 201.703 126.633 201.565 126.633 201.427L127.1 161.554L126.633 121.681C126.633 121.543 126.66 121.405 126.712 121.277C126.765 121.149 126.843 121.033 126.941 120.935C127.039 120.837 127.155 120.76 127.283 120.707C127.411 120.654 127.549 120.627 127.687 120.628H147.21C147.793 120.628 148.497 120.978 148.73 121.565L181.586 179.098L180.882 160.738V121.682C180.881 121.544 180.908 121.406 180.961 121.278C181.014 121.15 181.091 121.034 181.189 120.936C181.287 120.838 181.403 120.76 181.531 120.707C181.659 120.655 181.797 120.628 181.935 120.628H196.55C196.688 120.627 196.826 120.654 196.954 120.707C197.082 120.76 197.198 120.837 197.296 120.935C197.394 121.033 197.472 121.149 197.525 121.277C197.577 121.405 197.604 121.543 197.604 121.681L197.137 161.554L197.604 201.427C197.604 201.565 197.577 201.703 197.525 201.831C197.472 201.959 197.394 202.075 197.296 202.173C197.198 202.271 197.082 202.348 196.954 202.401C196.826 202.454 196.688 202.481 196.55 202.48H176.323C175.74 202.48 175.036 202.131 174.803 201.543L142.651 144.131L142.768 147.287L143.355 166.347ZM189.263 113.538C188.68 113.538 188.093 113.072 187.86 112.485L181.548 92.725H150.916L144.837 112.485C144.604 113.068 144.016 113.538 143.433 113.538H127.416C126.833 113.538 126.479 113.072 126.716 112.485L154.421 32.735C154.655 32.152 155.242 31.682 155.825 31.682H177.688C178.271 31.682 178.858 32.148 179.091 32.735L206.218 112.485C206.451 113.068 206.101 113.538 205.518 113.538H189.263ZM177.105 78.575L165.88 43.612L155.242 78.575H177.105ZM234.514 115.056C215.223 115.056 203.765 102.78 203.765 83.6C203.765 64.419 215.223 51.793 234.863 51.793C250.298 51.793 260.349 60.563 261.752 73.659C261.869 74.242 261.403 74.713 260.815 74.713H246.667C246.084 74.713 245.614 74.247 245.497 73.659C244.094 66.876 239.884 63.603 234.859 63.603C225.974 63.719 221.764 70.153 221.764 83.483C221.764 97.283 226.09 103.247 234.859 103.363C240.821 103.48 245.264 99.27 245.968 91.437C246.084 90.854 246.551 90.383 247.138 90.383H261.636C262.219 90.383 262.689 90.849 262.573 91.437C261.286 105.117 250.298 115.056 234.514 115.056ZM302.21 111.313C302.21 111.896 301.744 112.483 301.273 112.717C297.884 113.887 294.024 114.703 290.281 114.703C280.109 114.703 270.404 109.556 270.404 95.876L270.52 65.706H263.738C263.6 65.7065 263.462 65.6797 263.334 65.6269C263.206 65.5742 263.09 65.4967 262.992 65.3988C262.894 65.301 262.816 65.1847 262.763 65.0567C262.711 64.9287 262.684 64.7915 262.684 64.653V54.367C262.684 54.2285 262.711 54.0913 262.763 53.9633C262.816 53.8353 262.894 53.719 262.992 53.6212C263.09 53.5233 263.206 53.4458 263.334 53.3931C263.462 53.3403 263.6 53.3135 263.738 53.314H270.52L270.404 39.28C270.404 39.1416 270.431 39.0045 270.483 38.8766C270.536 38.7486 270.614 38.6324 270.712 38.5345C270.809 38.4367 270.926 38.3591 271.054 38.3063C271.181 38.2536 271.319 38.2266 271.457 38.227H287.009C287.147 38.2266 287.285 38.2536 287.412 38.3063C287.54 38.3591 287.657 38.4367 287.754 38.5345C287.852 38.6324 287.93 38.7486 287.983 38.8766C288.035 39.0045 288.062 39.1416 288.062 39.28L287.945 53.314H301.273C301.411 53.3135 301.549 53.3403 301.677 53.3931C301.805 53.4458 301.921 53.5233 302.019 53.6212C302.117 53.719 302.195 53.8353 302.248 53.9633C302.3 54.0913 302.327 54.2285 302.327 54.367V64.657C302.328 64.7956 302.301 64.9329 302.248 65.061C302.195 65.1891 302.117 65.3055 302.019 65.4035C301.921 65.5014 301.805 65.5791 301.677 65.6318C301.549 65.6846 301.412 65.7115 301.273 65.711H287.829L287.945 95.411C287.945 100.557 290.519 102.194 294.378 102.194C297.185 102.194 299.404 101.727 301.161 101.14C301.744 101.024 302.215 101.49 302.215 101.956V111.313H302.21ZM307.473 47.468C307.335 47.4685 307.198 47.4418 307.07 47.3893C306.943 47.3368 306.827 47.2596 306.729 47.1622C306.631 47.0647 306.553 46.9489 306.5 46.8214C306.447 46.6938 306.42 46.5571 306.42 46.419V32.735C306.42 32.5966 306.447 32.4595 306.499 32.3316C306.552 32.2036 306.63 32.0874 306.728 31.9895C306.825 31.8917 306.942 31.8141 307.07 31.7613C307.198 31.7086 307.335 31.6816 307.473 31.682H323.141C323.279 31.6815 323.417 31.7083 323.545 31.7611C323.673 31.8138 323.789 31.8913 323.887 31.9892C323.985 32.087 324.063 32.2033 324.116 32.3313C324.168 32.4593 324.195 32.5965 324.195 32.735V46.42C324.195 47.003 323.729 47.47 323.141 47.47H307.473V47.468ZM307.473 113.538C307.335 113.538 307.198 113.511 307.07 113.459C306.942 113.406 306.825 113.328 306.728 113.23C306.63 113.133 306.552 113.016 306.499 112.888C306.447 112.761 306.42 112.623 306.42 112.485L306.77 83.485L306.42 54.369C306.419 54.2305 306.446 54.0933 306.499 53.9653C306.552 53.8372 306.629 53.7209 306.727 53.6229C306.825 53.5249 306.941 53.4473 307.069 53.3944C307.197 53.3416 307.335 53.3146 307.473 53.315H323.258C323.841 53.315 324.311 53.781 324.311 54.368L323.962 83.485L324.311 112.485C324.311 112.623 324.284 112.761 324.232 112.888C324.179 113.016 324.101 113.133 324.003 113.23C323.906 113.328 323.789 113.406 323.661 113.459C323.534 113.511 323.396 113.538 323.258 113.538H307.473ZM359.737 115.056C340.097 115.056 328.755 102.78 328.755 83.6C328.755 64.419 340.097 51.793 359.737 51.793C379.377 51.793 390.49 64.073 390.49 83.25C390.49 102.426 379.381 115.056 359.737 115.056ZM359.737 103.363C368.389 103.363 372.482 97.4 372.482 83.603C372.482 70.041 368.272 63.49 359.62 63.49C350.735 63.607 346.642 70.157 346.642 83.72C346.642 97.283 350.968 103.363 359.737 103.363ZM395.869 113.536C395.73 113.537 395.593 113.51 395.465 113.457C395.337 113.404 395.221 113.326 395.123 113.228C395.025 113.13 394.947 113.014 394.894 112.886C394.841 112.758 394.814 112.621 394.815 112.482L395.165 84.652L395.049 54.366C395.049 54.2276 395.076 54.0905 395.128 53.9626C395.181 53.8346 395.259 53.7184 395.357 53.6205C395.454 53.5227 395.571 53.4451 395.699 53.3923C395.827 53.3396 395.964 53.3126 396.102 53.313H410.954C411.092 53.3125 411.23 53.3393 411.358 53.3921C411.486 53.4448 411.602 53.5223 411.7 53.6202C411.798 53.7181 411.876 53.8343 411.929 53.9623C411.981 54.0903 412.008 54.2275 412.008 54.366L411.658 60.912C415.751 55.652 422.65 51.909 431.065 51.909C443.81 51.909 451.996 60.563 451.996 75.296V87.922L452.345 112.478C452.346 112.616 452.319 112.754 452.266 112.882C452.213 113.01 452.136 113.126 452.038 113.224C451.94 113.322 451.824 113.4 451.696 113.453C451.568 113.505 451.43 113.532 451.292 113.532H435.624C435.485 113.533 435.348 113.506 435.22 113.453C435.092 113.4 434.976 113.322 434.878 113.224C434.78 113.126 434.702 113.01 434.649 112.882C434.596 112.754 434.569 112.617 434.57 112.478L434.804 87.922V75.529C434.804 68.979 430.944 64.773 425.685 64.773C419.373 64.773 412.59 70.619 412.59 83.483V87.926L412.824 112.482C412.825 112.621 412.798 112.758 412.745 112.886C412.692 113.014 412.614 113.13 412.516 113.228C412.419 113.326 412.302 113.404 412.174 113.457C412.046 113.51 411.909 113.537 411.77 113.536H395.869Z" stroke-width="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" mask="url(#path-1-inside-1_4_2)"></path><path d="M10.601 33.6143C10.8273 31.0512 14.4688 30.4654 15.4261 32.9785L47.2865 116.61C47.5047 117.183 47.5047 117.817 47.2865 118.39L15.4261 202.021C14.4379 204.616 10.5902 203.908 10.5902 201.132V33.8682L10.601 33.6143Z" stroke-width="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M47.601 33.9033C47.8291 31.3293 51.4965 30.7563 52.4349 33.29L83.3021 116.632C83.5095 117.192 83.5095 117.808 83.3021 118.368L52.4349 201.71C51.4663 204.325 47.5905 203.631 47.5902 200.842V34.1582L47.601 33.9033Z" stroke-width="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M83.601 33.6143C83.8273 31.0512 87.4688 30.4654 88.4261 32.9785L120.286 116.61C120.505 117.183 120.505 117.817 120.286 118.39L88.4261 202.021C87.4379 204.616 83.5902 203.908 83.5902 201.132V33.8682L83.601 33.6143Z" stroke-width="12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ActionNetwork.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ActionNetwork = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "w-[200px] -mx-10 mb-4 hidden md:block",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "375",
    zoomAndPan: "magnify",
    viewBox: "0 0 375 374.999991",
    height: "120",
    preserveAspectRatio: "xMidYMid meet",
    version: "1.0"
  }, _attrs))}><defs><filter x="0%" y="0%" width="100%" height="100%" id="d501b99749"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" color-interpolation-filters="sRGB"></feColorMatrix></filter><mask id="03f46f3e8c"><g filter="url(#d501b99749)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fill-opacity="0.1"></rect></g></mask><clipPath id="ac446979df"><path d="M 1 1 L 40 1 L 40 49.640625 L 1 49.640625 Z M 1 1 " clip-rule="nonzero"></path></clipPath><clipPath id="5e4c73190e"><rect x="0" width="41" y="0" height="50"></rect></clipPath><mask id="0c7daef01d"><g filter="url(#d501b99749)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fill-opacity="0.1"></rect></g></mask><clipPath id="5e647f62a6"><path d="M 0.398438 1 L 46 1 L 46 59 L 0.398438 59 Z M 0.398438 1 " clip-rule="nonzero"></path></clipPath><clipPath id="9b02b769e7"><rect x="0" width="46" y="0" height="60"></rect></clipPath><mask id="f92ee8ad26"><g filter="url(#d501b99749)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fill-opacity="0.1"></rect></g></mask><clipPath id="cb178b45a5"><rect x="0" width="34" y="0" height="56"></rect></clipPath><mask id="a1bfaf34d8"><g filter="url(#d501b99749)"><rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fill-opacity="0.1"></rect></g></mask><clipPath id="bcd5de605b"><path d="M 0.160156 1 L 43 1 L 43 68 L 0.160156 68 Z M 0.160156 1 " clip-rule="nonzero"></path></clipPath><clipPath id="e9f1f77f8a"><rect x="0" width="44" y="0" height="69"></rect></clipPath></defs><path fill="currentColor" d="M 292.9375 246.332031 C 293.628906 244.253906 294.257812 242.15625 294.828125 240.039062 C 295.394531 237.925781 295.902344 235.792969 296.34375 233.648438 C 296.785156 231.5 297.164062 229.34375 297.480469 227.175781 C 297.792969 225.007812 298.042969 222.832031 298.230469 220.648438 C 298.417969 218.464844 298.539062 216.277344 298.59375 214.089844 C 298.652344 211.898438 298.644531 209.707031 298.570312 207.519531 C 298.496094 205.328125 298.359375 203.144531 298.15625 200.960938 C 297.957031 198.78125 297.691406 196.605469 297.359375 194.441406 C 297.027344 192.273438 296.632812 190.121094 296.175781 187.976562 C 295.71875 185.835938 295.195312 183.707031 294.613281 181.59375 C 294.027344 179.484375 293.382812 177.390625 292.675781 175.316406 C 291.964844 173.242188 291.199219 171.191406 290.367188 169.164062 C 289.539062 167.136719 288.652344 165.132812 287.703125 163.160156 C 286.757812 161.183594 285.75 159.238281 284.6875 157.320312 C 283.625 155.40625 282.507812 153.523438 281.332031 151.671875 C 280.160156 149.824219 278.933594 148.007812 277.652344 146.230469 C 276.371094 144.453125 275.035156 142.714844 273.652344 141.019531 C 272.269531 139.320312 270.835938 137.664062 269.351562 136.050781 C 267.871094 134.433594 266.34375 132.867188 264.769531 131.34375 C 263.191406 129.820312 261.574219 128.34375 259.914062 126.917969 C 258.25 125.488281 256.546875 124.113281 254.804688 122.785156 C 253.058594 121.457031 251.277344 120.183594 249.460938 118.964844 C 247.640625 117.742188 245.789062 116.574219 243.898438 115.464844 C 242.011719 114.351562 240.09375 113.296875 238.140625 112.296875 C 236.191406 111.300781 234.214844 110.359375 232.207031 109.476562 C 230.203125 108.597656 228.171875 107.777344 226.117188 107.015625 C 224.0625 106.253906 221.988281 105.554688 219.890625 104.914062 C 217.792969 104.277344 215.683594 103.699219 213.550781 103.1875 C 211.421875 102.671875 209.277344 102.222656 207.121094 101.835938 C 204.964844 101.449219 202.800781 101.128906 200.625 100.871094 C 198.449219 100.609375 196.265625 100.417969 194.078125 100.289062 C 191.890625 100.15625 189.703125 100.09375 187.511719 100.09375 C 185.320312 100.09375 183.132812 100.15625 180.945312 100.289062 C 178.757812 100.417969 176.574219 100.609375 174.398438 100.871094 C 172.222656 101.128906 170.058594 101.449219 167.902344 101.835938 C 165.742188 102.222656 163.601562 102.671875 161.472656 103.1875 C 159.339844 103.699219 157.226562 104.277344 155.132812 104.914062 C 153.035156 105.554688 150.960938 106.253906 148.90625 107.015625 C 146.851562 107.777344 144.820312 108.597656 142.816406 109.476562 C 140.808594 110.359375 138.832031 111.300781 136.878906 112.296875 C 134.929688 113.296875 133.011719 114.351562 131.121094 115.464844 C 129.234375 116.574219 127.382812 117.742188 125.5625 118.964844 C 123.742188 120.183594 121.960938 121.457031 120.21875 122.785156 C 118.476562 124.113281 116.773438 125.488281 115.109375 126.917969 C 113.449219 128.34375 111.828125 129.820312 110.253906 131.34375 C 108.679688 132.867188 107.152344 134.433594 105.667969 136.050781 C 104.1875 137.664062 102.753906 139.320312 101.371094 141.019531 C 99.984375 142.714844 98.652344 144.453125 97.371094 146.230469 C 96.089844 148.007812 94.863281 149.824219 93.6875 151.671875 C 92.515625 153.523438 91.394531 155.40625 90.332031 157.320312 C 89.269531 159.238281 88.265625 161.183594 87.320312 163.160156 C 86.371094 165.132812 85.484375 167.136719 84.652344 169.164062 C 83.824219 171.191406 83.054688 173.242188 82.347656 175.316406 C 81.640625 177.390625 80.996094 179.484375 80.410156 181.59375 C 79.828125 183.707031 79.304688 185.835938 78.847656 187.976562 C 78.390625 190.121094 77.996094 192.273438 77.664062 194.441406 C 77.332031 196.605469 77.066406 198.78125 76.863281 200.960938 C 76.660156 203.144531 76.523438 205.328125 76.453125 207.519531 C 76.378906 209.707031 76.371094 211.898438 76.425781 214.089844 C 76.484375 216.277344 76.605469 218.464844 76.792969 220.648438 C 76.976562 222.832031 77.226562 225.007812 77.542969 227.175781 C 77.859375 229.34375 78.234375 231.5 78.679688 233.648438 C 79.121094 235.792969 79.625 237.925781 80.195312 240.039062 C 80.761719 242.15625 81.394531 244.253906 82.085938 246.332031 C 81.171875 244.167969 80.328125 241.976562 79.550781 239.761719 C 78.769531 237.546875 78.0625 235.308594 77.421875 233.046875 C 76.78125 230.789062 76.210938 228.511719 75.710938 226.214844 C 75.210938 223.921875 74.78125 221.613281 74.425781 219.292969 C 74.066406 216.96875 73.78125 214.640625 73.566406 212.300781 C 73.351562 209.960938 73.210938 207.617188 73.140625 205.269531 C 73.070312 202.921875 73.070312 200.574219 73.148438 198.226562 C 73.222656 195.878906 73.367188 193.539062 73.585938 191.199219 C 73.804688 188.859375 74.097656 186.53125 74.457031 184.210938 C 74.820312 181.890625 75.253906 179.582031 75.757812 177.289062 C 76.261719 174.992188 76.835938 172.71875 77.480469 170.460938 C 78.125 168.199219 78.839844 165.964844 79.621094 163.75 C 80.402344 161.535156 81.253906 159.347656 82.171875 157.183594 C 83.089844 155.019531 84.070312 152.890625 85.117188 150.789062 C 86.167969 148.6875 87.28125 146.617188 88.457031 144.585938 C 89.628906 142.550781 90.867188 140.554688 92.167969 138.597656 C 93.464844 136.640625 94.824219 134.726562 96.238281 132.851562 C 97.65625 130.980469 99.128906 129.152344 100.65625 127.367188 C 102.1875 125.585938 103.769531 123.851562 105.40625 122.164062 C 107.039062 120.480469 108.726562 118.847656 110.464844 117.265625 C 112.199219 115.683594 113.984375 114.15625 115.8125 112.683594 C 117.644531 111.214844 119.519531 109.800781 121.4375 108.441406 C 123.355469 107.085938 125.3125 105.789062 127.308594 104.554688 C 129.304688 103.320312 131.339844 102.144531 133.410156 101.035156 C 135.480469 99.925781 137.582031 98.878906 139.714844 97.898438 C 141.847656 96.917969 144.011719 96.003906 146.203125 95.152344 C 148.390625 94.304688 150.605469 93.527344 152.84375 92.816406 C 155.082031 92.101562 157.339844 91.460938 159.617188 90.886719 C 161.898438 90.316406 164.191406 89.8125 166.5 89.382812 C 168.808594 88.949219 171.128906 88.589844 173.457031 88.304688 C 175.789062 88.015625 178.128906 87.796875 180.472656 87.652344 C 182.816406 87.507812 185.164062 87.4375 187.511719 87.4375 C 189.859375 87.4375 192.207031 87.507812 194.550781 87.652344 C 196.894531 87.796875 199.234375 88.015625 201.5625 88.304688 C 203.894531 88.589844 206.214844 88.949219 208.523438 89.382812 C 210.832031 89.8125 213.125 90.316406 215.402344 90.886719 C 217.683594 91.460938 219.941406 92.101562 222.179688 92.816406 C 224.417969 93.527344 226.632812 94.304688 228.820312 95.152344 C 231.011719 96.003906 233.175781 96.917969 235.308594 97.898438 C 237.441406 98.878906 239.542969 99.925781 241.613281 101.035156 C 243.683594 102.144531 245.714844 103.320312 247.714844 104.554688 C 249.710938 105.789062 251.667969 107.085938 253.585938 108.441406 C 255.503906 109.800781 257.378906 111.214844 259.207031 112.683594 C 261.039062 114.15625 262.824219 115.683594 264.558594 117.265625 C 266.296875 118.847656 267.980469 120.480469 269.617188 122.164062 C 271.253906 123.851562 272.835938 125.585938 274.363281 127.367188 C 275.894531 129.152344 277.367188 130.980469 278.785156 132.851562 C 280.199219 134.726562 281.558594 136.640625 282.855469 138.597656 C 284.15625 140.554688 285.390625 142.550781 286.566406 144.585938 C 287.742188 146.617188 288.855469 148.6875 289.902344 150.789062 C 290.953125 152.890625 291.933594 155.019531 292.851562 157.183594 C 293.769531 159.347656 294.617188 161.535156 295.402344 163.75 C 296.183594 165.964844 296.894531 168.199219 297.539062 170.460938 C 298.183594 172.71875 298.761719 174.992188 299.265625 177.289062 C 299.769531 179.582031 300.203125 181.890625 300.5625 184.210938 C 300.925781 186.53125 301.21875 188.859375 301.4375 191.199219 C 301.65625 193.539062 301.800781 195.878906 301.875 198.226562 C 301.949219 200.574219 301.953125 202.921875 301.882812 205.269531 C 301.8125 207.617188 301.671875 209.960938 301.457031 212.300781 C 301.242188 214.640625 300.957031 216.96875 300.597656 219.292969 C 300.238281 221.613281 299.8125 223.921875 299.3125 226.214844 C 298.8125 228.511719 298.242188 230.789062 297.601562 233.046875 C 296.960938 235.308594 296.25 237.546875 295.472656 239.761719 C 294.695312 241.976562 293.851562 244.167969 292.9375 246.332031 Z M 292.9375 246.332031 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 192.027344 171.394531 C 191.945312 171.496094 191.867188 171.609375 191.773438 171.71875 C 191.460938 172.113281 191.101562 172.628906 190.714844 173.175781 C 190.328125 173.71875 189.886719 174.304688 189.472656 174.941406 C 189.058594 175.578125 188.625 176.234375 188.167969 176.933594 C 187.734375 177.640625 187.289062 178.363281 186.84375 179.105469 C 186.835938 179.113281 186.835938 179.136719 186.824219 179.144531 C 186.402344 179.894531 185.976562 180.652344 185.5625 181.410156 C 184.742188 182.972656 183.945312 184.550781 183.289062 186.074219 C 182.734375 187.328125 182.257812 188.542969 181.863281 189.632812 C 177.945312 171.910156 164.625 150.722656 155.382812 136.09375 C 158.644531 138.101562 173.75 147.539062 192.027344 171.394531 Z M 192.027344 171.394531 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 202.367188 194.847656 C 202.351562 194.847656 202.339844 194.855469 202.332031 194.863281 C 202.070312 195.058594 201.75 195.34375 201.414062 195.613281 C 201.078125 195.898438 200.691406 196.203125 200.320312 196.53125 C 199.949219 196.859375 199.5625 197.210938 199.15625 197.566406 C 198.375 198.300781 197.542969 199.105469 196.75 199.941406 C 195.277344 201.484375 193.917969 203.121094 192.667969 204.847656 C 192.507812 205.085938 192.339844 205.285156 192.1875 205.496094 C 191.246094 204.199219 190.285156 203.015625 189.347656 201.917969 C 188.792969 201.230469 188.210938 200.613281 187.664062 200.007812 C 187.117188 199.402344 186.578125 198.847656 186.074219 198.339844 C 185.082031 197.304688 184.09375 196.429688 183.328125 195.714844 C 183.136719 195.546875 182.96875 195.382812 182.792969 195.234375 C 183.113281 193.847656 183.511719 192.488281 183.992188 191.152344 C 184.433594 189.945312 184.945312 188.550781 185.601562 187.101562 C 186.242188 185.636719 187 184.101562 187.78125 182.605469 C 188.195312 181.855469 188.617188 181.113281 189.027344 180.375 C 189.457031 179.65625 189.886719 178.960938 190.300781 178.277344 C 190.738281 177.613281 191.160156 176.964844 191.5625 176.359375 C 191.96875 175.75 192.378906 175.195312 192.742188 174.664062 C 193.472656 173.621094 194.148438 172.789062 194.59375 172.207031 C 194.949219 171.761719 195.167969 171.457031 195.257812 171.332031 C 195.277344 171.3125 195.292969 171.292969 195.308594 171.273438 C 203.527344 161.515625 210.523438 153.800781 227.734375 148.582031 C 211.660156 163.9375 201.160156 183.109375 202.367188 194.847656 Z M 202.367188 194.847656 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 236.484375 182.347656 C 235.777344 182.78125 235.089844 183.21875 234.414062 183.652344 C 233.738281 184.085938 233.082031 184.53125 232.433594 184.976562 C 231.785156 185.417969 231.152344 185.855469 230.535156 186.308594 C 229.609375 186.976562 228.695312 187.640625 227.824219 188.328125 C 227.542969 188.542969 227.257812 188.765625 226.984375 188.996094 C 226.820312 189.117188 226.660156 189.25 226.5 189.378906 C 226.09375 189.703125 225.691406 190.035156 225.296875 190.371094 C 225.023438 190.59375 224.761719 190.824219 224.5 191.058594 C 224.234375 191.289062 223.972656 191.5 223.710938 191.746094 L 222.902344 192.460938 L 221.839844 193.460938 C 221.113281 194.148438 220.417969 194.847656 219.734375 195.554688 C 219.171875 196.144531 218.632812 196.726562 218.109375 197.3125 C 217.070312 198.472656 216.097656 199.65625 215.199219 200.828125 C 214.847656 201.292969 214.492188 201.769531 214.160156 202.242188 L 214.148438 202.253906 C 213.8125 202.71875 213.492188 203.191406 213.179688 203.667969 C 213.15625 203.691406 213.140625 203.71875 213.128906 203.75 C 212.785156 204.257812 212.472656 204.75 212.167969 205.257812 C 211.90625 205.671875 211.664062 206.097656 211.421875 206.507812 C 211.015625 207.21875 210.632812 207.925781 210.277344 208.632812 C 210.085938 209.015625 209.894531 209.398438 209.722656 209.773438 C 209.480469 210.277344 209.257812 210.785156 209.050781 211.277344 C 208.839844 211.773438 208.636719 212.277344 208.445312 212.773438 C 208.433594 212.804688 208.414062 212.84375 208.402344 212.875 C 208.234375 213.339844 208.058594 213.800781 207.90625 214.269531 C 207.824219 214.5 207.746094 214.734375 207.675781 214.964844 C 207.605469 215.199219 207.523438 215.429688 207.464844 215.664062 C 207.457031 215.667969 207.453125 215.675781 207.453125 215.683594 C 207.351562 216.027344 207.25 216.378906 207.160156 216.722656 C 207.070312 217.066406 206.96875 217.421875 206.886719 217.773438 C 206.785156 218.230469 206.6875 218.683594 206.59375 219.140625 C 206.585938 219.148438 206.585938 219.148438 206.585938 219.160156 C 206.515625 219.472656 206.453125 219.785156 206.402344 220.097656 L 206.222656 221.21875 C 206.148438 221.675781 206.097656 222.128906 206.050781 222.585938 C 206.042969 222.683594 206.03125 222.785156 206.023438 222.878906 C 205.992188 223.160156 205.960938 223.433594 205.953125 223.707031 C 205.941406 223.785156 205.933594 223.859375 205.929688 223.9375 C 205.890625 224.503906 205.859375 225.058594 205.847656 225.617188 C 205.828125 226.191406 205.828125 226.769531 205.847656 227.332031 C 205.839844 227.472656 205.84375 227.609375 205.855469 227.746094 C 205.855469 228 205.867188 228.253906 205.886719 228.503906 C 205.875 228.53125 205.875 228.554688 205.886719 228.578125 C 205.890625 228.832031 205.90625 229.089844 205.9375 229.34375 C 205.929688 229.378906 205.933594 229.414062 205.949219 229.445312 C 205.96875 229.757812 206 230.070312 206.03125 230.386719 C 205 228.210938 203.960938 225.96875 202.871094 223.746094 C 201.871094 221.675781 200.828125 219.605469 199.746094 217.582031 C 199.324219 216.773438 198.878906 215.976562 198.433594 215.1875 C 197.765625 214.007812 197.078125 212.84375 196.402344 211.722656 C 195.535156 210.328125 194.660156 208.988281 193.785156 207.703125 C 194.027344 207.328125 194.339844 206.84375 194.726562 206.316406 C 195.90625 204.6875 197.1875 203.144531 198.574219 201.6875 C 199.332031 200.886719 200.121094 200.121094 200.878906 199.421875 C 201.636719 198.726562 202.355469 198.101562 203 197.585938 C 203.628906 197.050781 204.179688 196.636719 204.558594 196.34375 L 205.152344 195.886719 C 209.910156 192.492188 221.765625 184.964844 236.484375 182.347656 Z M 236.484375 182.347656 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 219.8125 255.480469 C 219.8125 255.480469 219.589844 255.296875 219.175781 254.964844 C 218.730469 254.609375 218.289062 254.226562 217.851562 253.84375 C 217.417969 253.460938 216.996094 253.035156 216.570312 252.621094 L 216.246094 252.296875 C 216.023438 252.074219 215.800781 251.839844 215.601562 251.609375 C 215.589844 251.609375 215.589844 251.597656 215.582031 251.589844 C 215.480469 251.476562 215.367188 251.355469 215.257812 251.226562 C 215.144531 251.09375 215.054688 250.972656 214.945312 250.851562 C 214.742188 250.628906 214.550781 250.40625 214.367188 250.179688 L 214.246094 250.027344 C 212.953125 248.492188 211.808594 246.855469 210.8125 245.117188 C 210.800781 245.085938 210.78125 245.054688 210.761719 245.03125 C 210.253906 244.203125 209.742188 243.335938 209.234375 242.414062 C 208.273438 240.707031 207.316406 238.867188 206.371094 236.949219 C 204.472656 233.109375 202.59375 228.949219 200.601562 224.84375 C 199.601562 222.792969 198.570312 220.753906 197.519531 218.773438 C 196.46875 216.792969 195.347656 214.882812 194.246094 213.046875 C 193.152344 211.304688 192.074219 209.628906 190.957031 208.089844 C 184.171875 198.640625 172.425781 191.121094 168.125 188.554688 C 153.6875 180.113281 145.980469 178.472656 140.476562 177.347656 C 159.773438 191.734375 175.746094 203.929688 178.71875 223.308594 C 179.304688 226.839844 179.308594 230.371094 178.726562 233.90625 C 178.140625 237.4375 177.003906 240.78125 175.3125 243.9375 C 171.785156 250.542969 166.90625 254.261719 165.671875 254.699219 C 144.605469 254.960938 87.582031 262.546875 45.894531 277.320312 C 146.667969 263.617188 224.699219 261.070312 329.09375 277.308594 C 327.683594 276.796875 282.011719 260.1875 219.8125 255.480469 Z M 219.8125 255.480469 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 204.050781 150.820312 C 204.050781 151.480469 203.984375 152.136719 203.855469 152.785156 C 203.726562 153.433594 203.535156 154.066406 203.28125 154.675781 C 203.03125 155.289062 202.71875 155.867188 202.351562 156.417969 C 201.984375 156.96875 201.566406 157.476562 201.097656 157.945312 C 200.628906 158.414062 200.121094 158.832031 199.570312 159.199219 C 199.019531 159.566406 198.441406 159.878906 197.828125 160.132812 C 197.21875 160.382812 196.585938 160.574219 195.9375 160.703125 C 195.289062 160.832031 194.632812 160.898438 193.972656 160.898438 C 193.308594 160.898438 192.65625 160.832031 192.003906 160.703125 C 191.355469 160.574219 190.726562 160.382812 190.117188 160.132812 C 189.503906 159.878906 188.921875 159.566406 188.371094 159.199219 C 187.824219 158.832031 187.3125 158.414062 186.84375 157.945312 C 186.378906 157.476562 185.960938 156.96875 185.59375 156.417969 C 185.222656 155.867188 184.914062 155.289062 184.660156 154.675781 C 184.40625 154.066406 184.214844 153.433594 184.085938 152.785156 C 183.957031 152.136719 183.894531 151.480469 183.894531 150.820312 C 183.894531 150.15625 183.957031 149.503906 184.085938 148.855469 C 184.214844 148.203125 184.40625 147.574219 184.660156 146.964844 C 184.914062 146.351562 185.222656 145.769531 185.59375 145.222656 C 185.960938 144.671875 186.378906 144.160156 186.84375 143.695312 C 187.3125 143.226562 187.824219 142.808594 188.371094 142.441406 C 188.921875 142.074219 189.503906 141.761719 190.117188 141.507812 C 190.726562 141.253906 191.355469 141.0625 192.007812 140.933594 C 192.65625 140.804688 193.308594 140.742188 193.972656 140.742188 C 194.632812 140.742188 195.289062 140.804688 195.9375 140.933594 C 196.585938 141.0625 197.21875 141.253906 197.828125 141.507812 C 198.441406 141.761719 199.019531 142.074219 199.570312 142.441406 C 200.121094 142.808594 200.628906 143.226562 201.097656 143.695312 C 201.566406 144.160156 201.984375 144.671875 202.351562 145.222656 C 202.71875 145.769531 203.03125 146.351562 203.28125 146.964844 C 203.535156 147.574219 203.726562 148.203125 203.855469 148.855469 C 203.984375 149.503906 204.050781 150.15625 204.050781 150.820312 Z M 204.050781 150.820312 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 221.429688 179.828125 C 221.429688 180.230469 221.390625 180.628906 221.3125 181.023438 C 221.234375 181.421875 221.117188 181.804688 220.960938 182.175781 C 220.808594 182.550781 220.621094 182.902344 220.394531 183.238281 C 220.171875 183.574219 219.917969 183.882812 219.632812 184.167969 C 219.347656 184.453125 219.039062 184.707031 218.703125 184.929688 C 218.367188 185.15625 218.011719 185.34375 217.640625 185.5 C 217.269531 185.652344 216.886719 185.769531 216.488281 185.847656 C 216.09375 185.925781 215.695312 185.964844 215.292969 185.964844 C 214.890625 185.964844 214.488281 185.925781 214.09375 185.847656 C 213.699219 185.769531 213.316406 185.652344 212.941406 185.5 C 212.570312 185.34375 212.21875 185.15625 211.882812 184.929688 C 211.546875 184.707031 211.238281 184.453125 210.953125 184.167969 C 210.667969 183.882812 210.414062 183.574219 210.1875 183.238281 C 209.964844 182.902344 209.777344 182.550781 209.621094 182.175781 C 209.46875 181.804688 209.351562 181.421875 209.273438 181.023438 C 209.195312 180.628906 209.152344 180.230469 209.152344 179.828125 C 209.152344 179.425781 209.195312 179.027344 209.273438 178.628906 C 209.351562 178.234375 209.46875 177.851562 209.621094 177.480469 C 209.777344 177.105469 209.964844 176.753906 210.1875 176.417969 C 210.414062 176.082031 210.667969 175.773438 210.953125 175.488281 C 211.238281 175.203125 211.546875 174.949219 211.882812 174.722656 C 212.21875 174.5 212.570312 174.3125 212.941406 174.15625 C 213.316406 174.003906 213.699219 173.886719 214.09375 173.808594 C 214.488281 173.730469 214.890625 173.691406 215.292969 173.691406 C 215.695312 173.691406 216.09375 173.730469 216.488281 173.808594 C 216.886719 173.886719 217.269531 174.003906 217.640625 174.15625 C 218.011719 174.3125 218.367188 174.5 218.703125 174.722656 C 219.039062 174.949219 219.347656 175.203125 219.632812 175.488281 C 219.917969 175.773438 220.171875 176.082031 220.394531 176.417969 C 220.621094 176.753906 220.808594 177.105469 220.960938 177.480469 C 221.117188 177.851562 221.234375 178.234375 221.3125 178.628906 C 221.390625 179.027344 221.429688 179.425781 221.429688 179.828125 Z M 221.429688 179.828125 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 173.847656 177.4375 C 173.847656 177.921875 173.800781 178.398438 173.707031 178.875 C 173.613281 179.347656 173.472656 179.808594 173.285156 180.253906 C 173.101562 180.703125 172.875 181.125 172.605469 181.527344 C 172.335938 181.929688 172.03125 182.300781 171.691406 182.644531 C 171.347656 182.984375 170.976562 183.292969 170.574219 183.558594 C 170.171875 183.828125 169.746094 184.054688 169.300781 184.242188 C 168.855469 184.425781 168.394531 184.566406 167.917969 184.660156 C 167.445312 184.753906 166.964844 184.800781 166.484375 184.800781 C 166 184.800781 165.519531 184.753906 165.046875 184.660156 C 164.570312 184.566406 164.109375 184.425781 163.664062 184.242188 C 163.21875 184.054688 162.792969 183.828125 162.390625 183.558594 C 161.988281 183.292969 161.617188 182.984375 161.273438 182.644531 C 160.933594 182.300781 160.628906 181.929688 160.359375 181.527344 C 160.089844 181.125 159.863281 180.703125 159.679688 180.253906 C 159.492188 179.808594 159.355469 179.347656 159.261719 178.875 C 159.164062 178.398438 159.117188 177.921875 159.117188 177.4375 C 159.117188 176.953125 159.164062 176.472656 159.261719 176 C 159.355469 175.527344 159.492188 175.066406 159.679688 174.617188 C 159.863281 174.171875 160.089844 173.746094 160.359375 173.34375 C 160.628906 172.941406 160.933594 172.570312 161.273438 172.230469 C 161.617188 171.886719 161.988281 171.582031 162.390625 171.3125 C 162.792969 171.042969 163.21875 170.816406 163.664062 170.632812 C 164.109375 170.449219 164.570312 170.308594 165.046875 170.214844 C 165.519531 170.121094 166 170.070312 166.484375 170.070312 C 166.964844 170.070312 167.445312 170.121094 167.917969 170.214844 C 168.394531 170.308594 168.855469 170.449219 169.300781 170.632812 C 169.746094 170.816406 170.171875 171.042969 170.574219 171.3125 C 170.976562 171.582031 171.347656 171.886719 171.691406 172.230469 C 172.03125 172.570312 172.335938 172.941406 172.605469 173.34375 C 172.875 173.746094 173.101562 174.171875 173.285156 174.617188 C 173.472656 175.066406 173.613281 175.527344 173.707031 176 C 173.800781 176.472656 173.847656 176.953125 173.847656 177.4375 Z M 173.847656 177.4375 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 225.144531 145.617188 C 232.671875 139.21875 235.285156 133.019531 225.46875 125.71875 C 218.941406 131.632812 216.003906 136.1875 225.144531 145.617188 Z M 225.144531 145.617188 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 232.414062 147.816406 C 236.65625 134.410156 246.304688 129.199219 261.460938 135.488281 C 259.050781 146.511719 248.453125 154.652344 232.414062 147.816406 Z M 232.414062 147.816406 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 226.40625 154.652344 C 236.351562 149.914062 242.039062 156.503906 242.425781 163.179688 C 236.871094 165.9375 227.78125 164.386719 226.40625 154.652344 Z M 226.40625 154.652344 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 222.65625 157.5625 C 226.617188 160.984375 225.714844 164.34375 222.488281 166.519531 C 218.480469 163.332031 219.148438 161.113281 222.65625 157.5625 Z M 222.65625 157.5625 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 220.429688 147.734375 C 217.925781 141.984375 214.839844 141.453125 210.578125 143.503906 C 211.125 148.285156 215.007812 150.460938 220.429688 147.734375 Z M 220.429688 147.734375 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 236.902344 179.828125 C 243.523438 174.851562 237.613281 170.070312 237.613281 170.070312 C 237.613281 170.070312 230.28125 173.722656 236.902344 179.828125 Z M 236.902344 179.828125 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 241.261719 180.636719 C 244.589844 169.039062 254.121094 169.230469 260.546875 172.496094 C 257.714844 182.132812 249.984375 184.609375 241.261719 180.636719 Z M 241.261719 180.636719 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 236.691406 186.417969 C 243.992188 183.605469 249.304688 185.0625 250.632812 192.648438 C 243.65625 194.71875 237.839844 193.71875 236.691406 186.417969 Z M 236.691406 186.417969 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 233.960938 187.6875 C 234.847656 192.769531 235.664062 194.363281 231.078125 196.863281 C 228.472656 191.21875 229.613281 189.820312 233.960938 187.6875 Z M 233.960938 187.6875 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 233.789062 180.386719 C 231.875 175.820312 230.109375 175.820312 227.546875 176.144531 C 227.523438 180.539062 229.320312 182.136719 233.789062 180.386719 Z M 233.789062 180.386719 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 159.730469 133.765625 C 169.160156 125.496094 167.269531 117.398438 163.027344 115.285156 C 160.34375 114.09375 154.820312 117.902344 154.691406 123.910156 C 154.585938 128.839844 156.984375 131.695312 159.730469 133.765625 Z M 159.730469 133.765625 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 164.222656 137.15625 C 168.164062 131.179688 172.589844 131.890625 174.945312 134.992188 C 172.523438 139.515625 169.421875 140.320312 164.222656 137.15625 Z M 164.222656 137.15625 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 150.210938 131.566406 C 148.75 122.78125 143.191406 118.347656 131.691406 121.144531 C 133.113281 129.199219 140.910156 136.261719 150.210938 131.566406 Z M 150.210938 131.566406 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 154.6875 144.101562 C 146.378906 137.640625 136.945312 137.253906 130.402344 147.203125 C 144.398438 157.109375 151.152344 149.65625 154.6875 144.101562 Z M 154.6875 144.101562 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 157.726562 147.523438 C 154.722656 151.691406 154.175781 153.015625 158.277344 156.28125 C 163.058594 152.050781 160.925781 150.335938 157.726562 147.523438 Z M 157.726562 147.523438 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 146.1875 175.5625 C 146.445312 171.234375 147.871094 170.417969 151.183594 170.675781 C 151.785156 174.960938 150.191406 175.929688 146.1875 175.5625 Z M 146.1875 175.5625 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 142.222656 174.59375 C 147.070312 167.777344 145.128906 165.777344 143.097656 163.191406 C 141.0625 160.609375 138.183594 160.027344 136.570312 165.453125 C 134.957031 170.878906 142.222656 174.59375 142.222656 174.59375 Z M 142.222656 174.59375 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 134.921875 175.304688 C 132.339844 163.480469 121.160156 160.253906 110.890625 165.679688 C 114.441406 178.277344 127.363281 181.25 134.921875 175.304688 Z M 134.921875 175.304688 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 124.390625 190.359375 C 125.234375 177.695312 139.445312 181.3125 139.445312 181.3125 C 139.445312 181.3125 141.1875 193.847656 124.390625 190.359375 Z M 124.390625 190.359375 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 144.90625 185.222656 C 141.640625 190.132812 142.742188 193.363281 145.96875 193.523438 C 149.199219 193.6875 149.945312 188.226562 144.90625 185.222656 Z M 144.90625 185.222656 " fill-opacity="1" fill-rule="nonzero"></path><g mask="url(#03f46f3e8c)"><g transform="matrix(1, 0, 0, 1, 197, 181)"><g clip-path="url(#5e4c73190e)"><g clip-path="url(#ac446979df)"><path fill="#000000" d="M 39.484375 1.347656 C 38.777344 1.78125 38.089844 2.21875 37.414062 2.652344 C 36.738281 3.085938 36.082031 3.53125 35.433594 3.976562 C 34.785156 4.417969 34.152344 4.855469 33.535156 5.308594 C 32.609375 5.976562 31.695312 6.640625 30.824219 7.328125 C 30.542969 7.542969 30.257812 7.765625 29.984375 7.996094 C 29.820312 8.117188 29.660156 8.25 29.5 8.378906 C 29.09375 8.703125 28.691406 9.035156 28.296875 9.371094 C 28.023438 9.59375 27.761719 9.824219 27.5 10.058594 C 27.234375 10.289062 26.972656 10.5 26.710938 10.746094 L 25.902344 11.460938 L 24.839844 12.460938 C 24.113281 13.148438 23.417969 13.847656 22.734375 14.554688 C 22.171875 15.144531 21.632812 15.726562 21.109375 16.3125 C 20.070312 17.472656 19.097656 18.65625 18.199219 19.828125 C 17.835938 20.304688 17.492188 20.769531 17.160156 21.242188 L 17.148438 21.253906 C 16.8125 21.71875 16.492188 22.191406 16.179688 22.667969 C 16.15625 22.691406 16.140625 22.71875 16.128906 22.75 C 15.785156 23.257812 15.472656 23.75 15.167969 24.257812 C 14.90625 24.671875 14.664062 25.097656 14.421875 25.507812 C 14.015625 26.21875 13.632812 26.925781 13.277344 27.632812 C 13.085938 28.015625 12.894531 28.398438 12.722656 28.773438 C 12.480469 29.277344 12.257812 29.785156 12.050781 30.277344 C 11.839844 30.773438 11.636719 31.277344 11.445312 31.773438 C 11.433594 31.804688 11.414062 31.84375 11.402344 31.875 C 11.234375 32.339844 11.058594 32.800781 10.90625 33.269531 C 10.824219 33.5 10.746094 33.734375 10.675781 33.964844 C 10.605469 34.199219 10.523438 34.429688 10.464844 34.664062 C 10.457031 34.667969 10.453125 34.675781 10.453125 34.683594 C 10.351562 35.027344 10.25 35.378906 10.160156 35.722656 C 10.070312 36.066406 9.96875 36.421875 9.886719 36.773438 C 9.777344 37.230469 9.675781 37.683594 9.59375 38.140625 C 9.585938 38.148438 9.585938 38.148438 9.585938 38.160156 C 9.515625 38.472656 9.453125 38.785156 9.402344 39.097656 L 9.222656 40.21875 C 9.148438 40.675781 9.097656 41.128906 9.050781 41.585938 C 9.042969 41.683594 9.03125 41.785156 9.023438 41.878906 C 8.992188 42.160156 8.960938 42.433594 8.953125 42.707031 C 8.941406 42.785156 8.933594 42.859375 8.929688 42.9375 C 8.890625 43.503906 8.859375 44.058594 8.847656 44.617188 C 8.828125 45.191406 8.828125 45.769531 8.847656 46.332031 C 8.839844 46.472656 8.84375 46.609375 8.855469 46.746094 C 8.855469 47 8.867188 47.253906 8.886719 47.503906 C 8.875 47.53125 8.875 47.554688 8.886719 47.578125 C 8.898438 47.839844 8.90625 48.089844 8.9375 48.34375 C 8.929688 48.378906 8.933594 48.414062 8.949219 48.445312 C 8.957031 48.757812 8.988281 49.070312 9.03125 49.386719 C 8 47.210938 6.960938 44.96875 5.871094 42.746094 C 4.871094 40.675781 3.828125 38.605469 2.746094 36.582031 C 2.324219 35.773438 1.878906 34.976562 1.433594 34.1875 C 10.972656 14.90625 28.574219 5.289062 39.484375 1.347656 Z M 39.484375 1.347656 " fill-opacity="1" fill-rule="nonzero"></path></g></g></g></g><g mask="url(#0c7daef01d)"><g transform="matrix(1, 0, 0, 1, 182, 147)"><g clip-path="url(#9b02b769e7)"><g clip-path="url(#5e647f62a6)"><path fill="#000000" d="M 45.734375 1.582031 C 20.332031 15.414062 11.078125 33.480469 10.1875 58.496094 C 9.238281 57.203125 8.28125 56.011719 7.351562 54.921875 C 6.792969 54.234375 6.207031 53.617188 5.667969 53.011719 C 5.125 52.40625 4.585938 51.847656 4.082031 51.34375 C 3.082031 50.304688 2.101562 49.433594 1.332031 48.714844 C 1.140625 48.546875 0.964844 48.386719 0.796875 48.234375 C 1.117188 46.847656 1.519531 45.488281 2 44.148438 C 2.433594 42.945312 2.949219 41.550781 3.605469 40.097656 C 4.242188 38.632812 5 37.105469 5.789062 35.601562 C 6.203125 34.855469 6.617188 34.117188 7.03125 33.378906 C 7.464844 32.660156 7.890625 31.964844 8.304688 31.273438 C 8.738281 30.605469 9.164062 29.960938 9.566406 29.355469 C 9.972656 28.746094 10.386719 28.191406 10.746094 27.671875 C 11.472656 26.621094 12.148438 25.789062 12.597656 25.203125 C 12.953125 24.761719 13.171875 24.457031 13.265625 24.335938 C 13.28125 24.316406 13.296875 24.292969 13.316406 24.273438 C 21.527344 14.511719 28.527344 6.804688 45.734375 1.582031 Z M 45.734375 1.582031 " fill-opacity="1" fill-rule="nonzero"></path></g></g></g></g><g mask="url(#f92ee8ad26)"><g transform="matrix(1, 0, 0, 1, 154, 135)"><g clip-path="url(#cb178b45a5)"><path fill="#000000" d="M 32.824219 44.144531 C 32.402344 44.894531 31.972656 45.652344 31.558594 46.410156 C 30.742188 47.972656 29.945312 49.550781 29.285156 51.074219 C 28.730469 52.328125 28.257812 53.542969 27.863281 54.632812 C 23.941406 36.910156 10.625 15.722656 1.378906 1.09375 C 22.136719 21.632812 30.542969 38.839844 32.824219 44.144531 Z M 32.824219 44.144531 " fill-opacity="1" fill-rule="nonzero"></path></g></g></g><g mask="url(#a1bfaf34d8)"><g transform="matrix(1, 0, 0, 1, 140, 176)"><g clip-path="url(#e9f1f77f8a)"><g clip-path="url(#bcd5de605b)"><path fill="#000000" d="M 35.328125 67.949219 C 35.328125 67.945312 35.324219 67.941406 35.316406 67.941406 C 37.007812 64.785156 38.144531 61.441406 38.730469 57.910156 C 39.3125 54.375 39.308594 50.84375 38.722656 47.3125 C 35.75 27.933594 19.777344 15.738281 0.476562 1.351562 C 40.5 19.585938 52.117188 41.785156 35.328125 67.949219 Z M 35.328125 67.949219 " fill-opacity="1" fill-rule="nonzero"></path></g></g></g></g><path fill="currentColor" d="M 321.023438 292.695312 L 318.136719 292.308594 C 305.480469 290.617188 293.433594 289.144531 281.855469 287.875 L 283.691406 277.992188 L 282.597656 277.882812 C 249.710938 274.648438 220.515625 273.140625 191.898438 273.140625 C 163.277344 273.140625 134.082031 274.648438 101.199219 277.882812 L 100.101562 277.992188 L 101.941406 287.875 C 90.363281 289.144531 78.316406 290.617188 65.660156 292.308594 L 62.773438 292.695312 L 83.59375 305.042969 L 69.597656 323.367188 L 72.011719 323.050781 C 89.453125 320.742188 105.710938 318.867188 121.117188 317.382812 L 122.210938 317.277344 L 122.007812 316.191406 L 120.410156 307.585938 C 145.816406 305.457031 169.074219 304.460938 191.890625 304.460938 C 214.710938 304.460938 237.972656 305.457031 263.375 307.585938 L 261.574219 317.277344 L 262.667969 317.382812 C 278.074219 318.867188 294.332031 320.742188 311.773438 323.050781 L 314.1875 323.367188 L 300.191406 305.042969 Z M 107.496094 306.71875 L 102.492188 279.792969 C 134.871094 276.636719 163.667969 275.164062 191.898438 275.164062 C 220.125 275.164062 248.921875 276.636719 281.300781 279.792969 L 276.296875 306.71875 C 245.78125 303.796875 218.539062 302.445312 191.898438 302.445312 C 165.253906 302.445312 138.015625 303.792969 107.496094 306.71875 Z M 68.816406 293.933594 C 80.457031 292.394531 91.589844 291.042969 102.308594 289.871094 L 105.84375 308.90625 L 117.867188 315.675781 C 104.058594 317.042969 89.5625 318.71875 74.148438 320.734375 L 86.574219 304.46875 Z M 309.640625 320.734375 C 294.226562 318.71875 279.730469 317.042969 265.925781 315.675781 L 277.945312 308.90625 L 281.484375 289.871094 C 292.203125 291.042969 303.335938 292.394531 314.976562 293.933594 L 297.214844 304.46875 Z M 309.640625 320.734375 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 122.5 298.585938 L 121.492188 287.261719 L 122.402344 288.875 L 119.539062 290.542969 L 118.667969 287.570312 L 122.503906 285.25 L 124.6875 285.054688 L 125.867188 298.285156 Z M 120.046875 299.8125 L 119.777344 296.785156 L 128.316406 296.03125 L 128.585938 299.054688 Z M 120.046875 299.8125 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 143.125 298.167969 C 141.96875 298.28125 140.878906 298.066406 139.855469 297.519531 C 138.882812 296.964844 138.152344 296.179688 137.660156 295.175781 C 137.109375 293.953125 136.789062 292.675781 136.699219 291.339844 C 136.609375 290 136.757812 288.691406 137.140625 287.40625 C 137.496094 286.34375 138.117188 285.472656 139.003906 284.789062 C 139.472656 284.476562 139.972656 284.226562 140.507812 284.042969 C 141.042969 283.859375 141.59375 283.75 142.15625 283.710938 C 142.722656 283.675781 143.28125 283.710938 143.835938 283.820312 C 144.390625 283.929688 144.921875 284.109375 145.429688 284.359375 C 146.398438 284.917969 147.128906 285.699219 147.617188 286.703125 C 148.171875 287.925781 148.492188 289.207031 148.582031 290.542969 C 148.671875 291.878906 148.523438 293.191406 148.136719 294.476562 C 147.785156 295.539062 147.164062 296.410156 146.277344 297.089844 C 145.332031 297.765625 144.285156 298.125 143.125 298.167969 Z M 142.929688 295.257812 C 143.339844 295.242188 143.714844 295.121094 144.058594 294.894531 C 144.398438 294.667969 144.65625 294.371094 144.832031 294 C 145.292969 292.964844 145.453125 291.886719 145.3125 290.761719 C 145.300781 289.597656 144.996094 288.515625 144.398438 287.515625 C 144.179688 287.167969 143.882812 286.902344 143.515625 286.71875 C 143.144531 286.539062 142.753906 286.464844 142.34375 286.503906 C 141.933594 286.523438 141.554688 286.648438 141.210938 286.875 C 140.867188 287.105469 140.609375 287.40625 140.433594 287.78125 C 139.964844 288.851562 139.804688 289.964844 139.949219 291.121094 C 139.960938 292.257812 140.265625 293.304688 140.867188 294.269531 C 141.09375 294.609375 141.390625 294.871094 141.761719 295.046875 C 142.132812 295.226562 142.523438 295.296875 142.933594 295.257812 Z M 142.929688 295.257812 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 175.195312 296.492188 L 175.042969 289.472656 L 175.207031 290.457031 L 169.339844 282.53125 L 173.242188 282.449219 L 177.703125 288.550781 L 175.953125 288.527344 L 179.703125 282.304688 L 183.503906 282.222656 L 178.234375 290.609375 L 178.503906 289.214844 L 178.660156 296.417969 Z M 175.195312 296.492188 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 192.148438 296.277344 L 192.25 282.191406 L 202.070312 282.261719 L 202.050781 285.199219 L 195.589844 285.152344 L 195.53125 293.363281 L 202.210938 293.410156 L 202.191406 296.351562 Z M 193.820312 290.535156 L 193.839844 287.714844 L 201.144531 287.769531 L 201.125 290.585938 Z M 193.820312 290.535156 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 210.128906 296.5 L 216.203125 282.625 L 219.121094 282.726562 L 224.144531 297.003906 L 220.6875 296.878906 L 218.269531 289.644531 C 218.183594 289.359375 218.089844 289.054688 217.988281 288.730469 C 217.886719 288.402344 217.789062 288.0625 217.695312 287.710938 C 217.597656 287.359375 217.511719 287.019531 217.429688 286.695312 C 217.347656 286.371094 217.277344 286.066406 217.21875 285.78125 L 217.808594 285.78125 C 217.714844 286.113281 217.617188 286.4375 217.511719 286.757812 C 217.40625 287.074219 217.292969 287.394531 217.171875 287.710938 C 217.054688 288.027344 216.933594 288.34375 216.808594 288.65625 L 216.417969 289.617188 L 213.511719 296.621094 Z M 212.878906 293.902344 L 214.058594 291.324219 L 220.492188 291.558594 L 221.484375 294.210938 Z M 212.878906 293.902344 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 232.648438 297.457031 L 233.542969 283.394531 L 239.90625 283.800781 C 240.773438 283.839844 241.578125 284.085938 242.320312 284.539062 C 243.011719 284.960938 243.550781 285.53125 243.9375 286.242188 C 244.328125 286.984375 244.488281 287.769531 244.421875 288.601562 C 244.382812 289.453125 244.121094 290.230469 243.636719 290.929688 C 243.167969 291.609375 242.558594 292.125 241.816406 292.480469 C 241.027344 292.851562 240.195312 293.003906 239.328125 292.933594 L 236.234375 292.742188 L 235.921875 297.660156 Z M 236.402344 290.074219 L 239.195312 290.25 C 239.519531 290.277344 239.828125 290.21875 240.121094 290.078125 C 240.394531 289.941406 240.605469 289.742188 240.765625 289.484375 C 240.929688 289.203125 241.019531 288.898438 241.035156 288.574219 C 241.066406 288.238281 241.003906 287.925781 240.847656 287.628906 C 240.695312 287.332031 240.46875 287.101562 240.179688 286.933594 C 239.851562 286.75 239.496094 286.652344 239.121094 286.636719 L 236.628906 286.476562 Z M 240.460938 297.953125 L 237.289062 291.359375 L 240.835938 291.082031 L 244.371094 298.222656 Z M 240.460938 297.953125 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 258.171875 299.523438 C 256.9375 299.457031 255.789062 299.109375 254.722656 298.488281 C 253.789062 297.898438 253.03125 297.136719 252.449219 296.195312 L 254.738281 294.035156 C 255.179688 294.847656 255.789062 295.507812 256.566406 296.011719 C 257.191406 296.375 257.867188 296.589844 258.589844 296.652344 C 258.921875 296.6875 259.25 296.667969 259.574219 296.597656 C 259.84375 296.542969 260.082031 296.425781 260.292969 296.246094 C 260.480469 296.078125 260.582031 295.867188 260.597656 295.617188 C 260.617188 295.421875 260.585938 295.234375 260.496094 295.0625 C 260.402344 294.882812 260.277344 294.730469 260.121094 294.605469 C 259.941406 294.457031 259.753906 294.332031 259.550781 294.222656 C 259.316406 294.09375 259.070312 293.988281 258.820312 293.90625 C 258.550781 293.8125 258.277344 293.730469 258.003906 293.652344 C 257.320312 293.457031 256.667969 293.1875 256.042969 292.847656 C 255.535156 292.566406 255.089844 292.210938 254.703125 291.777344 C 254.355469 291.386719 254.109375 290.941406 253.960938 290.441406 C 253.808594 289.90625 253.761719 289.359375 253.820312 288.804688 C 253.878906 287.96875 254.1875 287.242188 254.746094 286.621094 C 255.320312 286 256.007812 285.554688 256.8125 285.285156 C 257.675781 284.992188 258.558594 284.886719 259.464844 284.972656 C 260.621094 285.027344 261.703125 285.339844 262.707031 285.914062 C 263.496094 286.402344 264.109375 287.058594 264.546875 287.878906 L 262.242188 289.761719 C 261.90625 289.21875 261.46875 288.777344 260.933594 288.433594 C 260.4375 288.121094 259.898438 287.941406 259.3125 287.890625 C 258.964844 287.851562 258.621094 287.871094 258.277344 287.941406 C 258.007812 287.988281 257.773438 288.105469 257.570312 288.292969 C 257.394531 288.464844 257.300781 288.675781 257.285156 288.925781 C 257.261719 289.136719 257.308594 289.332031 257.425781 289.511719 C 257.554688 289.710938 257.71875 289.867188 257.917969 289.992188 C 258.15625 290.144531 258.410156 290.269531 258.675781 290.371094 C 258.972656 290.484375 259.273438 290.582031 259.578125 290.660156 C 260.25 290.851562 260.898438 291.105469 261.523438 291.417969 C 262.0625 291.6875 262.546875 292.027344 262.980469 292.445312 C 263.371094 292.824219 263.664062 293.265625 263.863281 293.773438 C 264.0625 294.3125 264.132812 294.867188 264.070312 295.4375 C 264.019531 296.335938 263.714844 297.136719 263.15625 297.84375 C 262.597656 298.511719 261.902344 298.976562 261.074219 299.238281 C 260.128906 299.535156 259.160156 299.632812 258.171875 299.523438 Z M 258.171875 299.523438 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 60.796875 194.914062 C 60.742188 196.523438 60.386719 198.070312 59.734375 199.542969 C 59.136719 200.878906 58.296875 202.035156 57.21875 203.023438 C 56.148438 203.992188 54.929688 204.707031 53.558594 205.164062 C 52.105469 205.644531 50.613281 205.839844 49.082031 205.75 C 47.542969 205.695312 46.074219 205.335938 44.683594 204.671875 C 43.363281 204.042969 42.222656 203.179688 41.253906 202.082031 C 40.273438 200.957031 39.554688 199.6875 39.09375 198.269531 C 38.59375 196.726562 38.390625 195.144531 38.488281 193.527344 C 38.585938 191.285156 39.265625 189.230469 40.515625 187.367188 C 41.046875 186.566406 41.6875 185.875 42.441406 185.28125 L 45.675781 188.683594 C 44.964844 189.359375 44.375 190.128906 43.90625 190.992188 C 43.449219 191.886719 43.199219 192.839844 43.167969 193.847656 C 43.117188 194.695312 43.238281 195.519531 43.527344 196.320312 C 43.808594 197.085938 44.226562 197.765625 44.789062 198.359375 C 45.363281 198.964844 46.027344 199.433594 46.792969 199.769531 C 47.605469 200.128906 48.457031 200.324219 49.34375 200.359375 C 50.230469 200.414062 51.089844 200.289062 51.925781 199.992188 C 52.714844 199.707031 53.421875 199.28125 54.042969 198.71875 C 54.664062 198.152344 55.15625 197.492188 55.515625 196.734375 C 55.890625 195.941406 56.09375 195.105469 56.128906 194.230469 C 56.167969 193.621094 56.097656 193.027344 55.921875 192.441406 C 55.765625 191.90625 55.519531 191.410156 55.191406 190.957031 C 54.882812 190.523438 54.5 190.175781 54.039062 189.910156 C 53.582031 189.648438 53.085938 189.503906 52.558594 189.484375 L 51.757812 189.445312 L 52.839844 188.816406 L 52.554688 194.707031 L 48.390625 194.503906 L 48.882812 184.359375 C 49.191406 184.324219 49.5 184.308594 49.808594 184.3125 C 50.203125 184.3125 50.578125 184.316406 50.9375 184.320312 C 51.296875 184.328125 51.582031 184.335938 51.785156 184.347656 C 53.117188 184.394531 54.386719 184.710938 55.589844 185.289062 C 56.71875 185.839844 57.6875 186.597656 58.492188 187.5625 C 59.308594 188.546875 59.910156 189.652344 60.292969 190.878906 C 60.707031 192.191406 60.875 193.539062 60.796875 194.914062 Z M 60.796875 194.914062 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 62.214844 179.203125 L 46.195312 175.710938 L 47.207031 171.09375 L 52.46875 172.019531 L 51.246094 172.703125 C 50.464844 172.261719 49.785156 171.691406 49.21875 170.996094 C 48.65625 170.3125 48.253906 169.546875 48.015625 168.695312 C 47.777344 167.871094 47.746094 167.035156 47.929688 166.195312 C 48.003906 165.855469 48.101562 165.527344 48.226562 165.203125 C 48.332031 164.925781 48.46875 164.667969 48.632812 164.421875 L 53.6875 166.882812 C 53.480469 167.136719 53.308594 167.410156 53.175781 167.703125 C 53 168.066406 52.871094 168.445312 52.785156 168.835938 C 52.6875 169.257812 52.675781 169.679688 52.746094 170.105469 C 52.8125 170.507812 52.957031 170.875 53.183594 171.214844 C 53.410156 171.554688 53.695312 171.835938 54.039062 172.0625 C 54.421875 172.3125 54.839844 172.484375 55.285156 172.574219 L 63.277344 174.316406 Z M 62.214844 179.203125 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 68.851562 156.648438 C 68.308594 158.230469 67.421875 159.585938 66.191406 160.714844 C 65.082031 161.722656 63.792969 162.351562 62.316406 162.605469 C 60.792969 162.847656 59.308594 162.6875 57.871094 162.125 C 56.734375 161.71875 55.710938 161.117188 54.800781 160.328125 C 53.972656 159.609375 53.324219 158.753906 52.855469 157.765625 C 52.386719 156.773438 52.136719 155.730469 52.105469 154.636719 C 52.070312 153.476562 52.261719 152.359375 52.675781 151.277344 C 53.042969 150.246094 53.601562 149.335938 54.351562 148.539062 C 55.058594 147.796875 55.886719 147.226562 56.828125 146.824219 C 57.792969 146.417969 58.800781 146.21875 59.847656 146.230469 C 60.984375 146.242188 62.078125 146.464844 63.128906 146.886719 L 64.394531 147.390625 L 59.855469 159.601562 L 56.964844 159.320312 L 60.34375 150.203125 L 60.679688 150.890625 L 60.101562 150.671875 C 59.628906 150.53125 59.15625 150.523438 58.675781 150.65625 C 58.210938 150.789062 57.800781 151.023438 57.449219 151.351562 C 57.0625 151.710938 56.78125 152.140625 56.605469 152.636719 C 56.328125 153.320312 56.238281 154.027344 56.332031 154.757812 C 56.429688 155.40625 56.710938 155.96875 57.171875 156.4375 C 57.730469 156.976562 58.375 157.371094 59.109375 157.617188 C 59.882812 157.921875 60.683594 158.015625 61.507812 157.894531 C 62.296875 157.769531 62.984375 157.433594 63.5625 156.878906 C 64.21875 156.242188 64.695312 155.492188 64.992188 154.628906 C 65.21875 154.035156 65.339844 153.421875 65.347656 152.785156 C 65.328125 152.085938 65.207031 151.402344 64.984375 150.742188 L 68.855469 149.707031 C 69.132812 150.476562 69.320312 151.269531 69.410156 152.085938 C 69.585938 153.652344 69.398438 155.171875 68.851562 156.652344 Z M 68.851562 156.648438 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 77.535156 138.316406 C 76.75 139.792969 75.65625 140.988281 74.261719 141.910156 C 73.007812 142.726562 71.632812 143.140625 70.136719 143.15625 C 68.589844 143.152344 67.152344 142.761719 65.824219 141.976562 C 64.765625 141.394531 63.851562 140.640625 63.078125 139.710938 C 62.375 138.871094 61.871094 137.925781 61.566406 136.871094 C 61.261719 135.820312 61.179688 134.75 61.320312 133.664062 C 61.472656 132.515625 61.839844 131.441406 62.421875 130.4375 C 62.945312 129.480469 63.644531 128.667969 64.507812 128.003906 C 65.328125 127.382812 66.234375 126.949219 67.230469 126.707031 C 68.246094 126.457031 69.273438 126.421875 70.304688 126.601562 C 71.421875 126.796875 72.464844 127.183594 73.4375 127.769531 L 74.601562 128.464844 L 68.191406 139.800781 L 65.382812 139.058594 L 70.171875 130.597656 L 70.394531 131.328125 L 69.859375 131.023438 C 69.414062 130.808594 68.945312 130.726562 68.453125 130.78125 C 67.972656 130.835938 67.53125 131 67.128906 131.269531 C 66.691406 131.566406 66.347656 131.945312 66.097656 132.40625 C 65.714844 133.035156 65.511719 133.71875 65.488281 134.457031 C 65.484375 135.113281 65.671875 135.710938 66.050781 136.246094 C 66.511719 136.867188 67.085938 137.359375 67.773438 137.71875 C 68.488281 138.144531 69.261719 138.363281 70.09375 138.375 C 70.894531 138.378906 71.625 138.15625 72.285156 137.703125 C 73.035156 137.179688 73.625 136.515625 74.050781 135.707031 C 74.375 135.15625 74.585938 134.566406 74.695312 133.9375 C 74.789062 133.246094 74.78125 132.554688 74.664062 131.863281 L 78.652344 131.460938 C 78.804688 132.265625 78.859375 133.078125 78.820312 133.894531 C 78.746094 135.46875 78.320312 136.945312 77.542969 138.316406 Z M 77.535156 138.316406 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 83.878906 127.476562 L 71.136719 117.171875 L 74.105469 113.5 L 76.816406 115.453125 L 76.464844 116.476562 C 76.015625 115.804688 75.746094 115.0625 75.660156 114.257812 C 75.554688 113.390625 75.617188 112.535156 75.847656 111.691406 C 76.074219 110.816406 76.476562 110.027344 77.042969 109.328125 C 77.714844 108.441406 78.5625 107.792969 79.59375 107.378906 C 80.570312 107.027344 81.550781 107.007812 82.539062 107.320312 C 83.75 107.707031 84.839844 108.316406 85.808594 109.144531 L 93.609375 115.453125 L 90.484375 119.316406 L 82.96875 113.242188 C 82.542969 112.875 82.058594 112.601562 81.523438 112.429688 C 81.097656 112.296875 80.675781 112.3125 80.261719 112.476562 C 79.8125 112.675781 79.449219 112.980469 79.171875 113.382812 C 78.90625 113.703125 78.707031 114.054688 78.570312 114.445312 C 78.441406 114.808594 78.390625 115.183594 78.414062 115.570312 C 78.4375 115.9375 78.53125 116.285156 78.699219 116.613281 C 78.882812 116.953125 79.125 117.242188 79.429688 117.480469 L 87.015625 123.613281 L 85.441406 125.558594 L 84.539062 126.675781 Z M 83.878906 127.476562 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 107.710938 102.265625 L 95.023438 84.777344 L 99.296875 81.679688 L 109.246094 95.394531 L 117.042969 89.742188 L 119.777344 93.515625 Z M 107.710938 102.265625 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 131.261719 87.683594 C 129.789062 88.476562 128.21875 88.871094 126.546875 88.871094 C 125.050781 88.855469 123.675781 88.441406 122.421875 87.625 C 121.132812 86.769531 120.152344 85.648438 119.472656 84.257812 C 118.914062 83.191406 118.570312 82.054688 118.4375 80.855469 C 118.316406 79.765625 118.417969 78.699219 118.746094 77.652344 C 119.074219 76.609375 119.597656 75.671875 120.316406 74.847656 C 121.074219 73.972656 121.972656 73.277344 123.011719 72.765625 C 123.976562 72.257812 125.007812 71.964844 126.097656 71.886719 C 127.121094 71.824219 128.117188 71.960938 129.082031 72.308594 C 130.066406 72.664062 130.9375 73.203125 131.699219 73.917969 C 132.523438 74.699219 133.179688 75.601562 133.664062 76.625 L 134.253906 77.851562 L 122.644531 83.753906 L 120.707031 81.585938 L 129.378906 77.179688 L 129.164062 77.914062 L 128.882812 77.363281 C 128.632812 76.9375 128.285156 76.609375 127.847656 76.382812 C 127.414062 76.164062 126.957031 76.054688 126.472656 76.058594 C 125.945312 76.0625 125.449219 76.191406 124.984375 76.4375 C 124.316406 76.75 123.769531 77.207031 123.34375 77.808594 C 122.976562 78.351562 122.804688 78.953125 122.824219 79.609375 C 122.867188 80.382812 123.074219 81.109375 123.445312 81.789062 C 123.808594 82.539062 124.332031 83.148438 125.019531 83.621094 C 125.683594 84.066406 126.417969 84.28125 127.21875 84.269531 C 128.132812 84.246094 128.988281 84.015625 129.792969 83.582031 C 130.367188 83.300781 130.871094 82.929688 131.308594 82.46875 C 131.769531 81.941406 132.144531 81.359375 132.429688 80.722656 L 135.976562 82.589844 C 135.65625 83.34375 135.253906 84.050781 134.769531 84.707031 C 133.835938 85.980469 132.667969 86.972656 131.261719 87.6875 Z M 131.261719 87.683594 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 150.894531 79.519531 L 147.800781 69.941406 C 147.636719 69.226562 147.222656 68.707031 146.566406 68.378906 C 145.890625 68.128906 145.21875 68.136719 144.546875 68.398438 C 143.828125 68.617188 143.195312 68.976562 142.644531 69.484375 C 142.082031 70.042969 141.660156 70.695312 141.378906 71.433594 L 137.675781 69.613281 C 138.300781 68.351562 139.132812 67.25 140.175781 66.308594 C 141.253906 65.335938 142.488281 64.636719 143.875 64.203125 C 145.039062 63.796875 146.238281 63.625 147.472656 63.691406 C 148.523438 63.75 149.460938 64.105469 150.285156 64.761719 C 151.160156 65.515625 151.753906 66.445312 152.0625 67.558594 L 155.449219 78.046875 Z M 146.9375 81.117188 C 146.007812 81.429688 145.058594 81.523438 144.089844 81.386719 C 143.191406 81.269531 142.390625 80.925781 141.683594 80.363281 C 140.960938 79.773438 140.464844 79.03125 140.199219 78.136719 C 139.945312 77.402344 139.863281 76.648438 139.957031 75.878906 C 140.058594 75.160156 140.332031 74.515625 140.777344 73.941406 C 141.300781 73.285156 141.925781 72.746094 142.65625 72.328125 C 143.585938 71.785156 144.566406 71.355469 145.59375 71.039062 L 150.324219 69.511719 L 151.019531 72.5625 L 146.671875 73.96875 C 146.304688 74.082031 145.953125 74.234375 145.617188 74.421875 C 145.351562 74.570312 145.121094 74.761719 144.929688 75 C 144.769531 75.199219 144.664062 75.425781 144.609375 75.675781 C 144.566406 75.933594 144.589844 76.183594 144.675781 76.433594 C 144.761719 76.714844 144.921875 76.945312 145.160156 77.121094 C 145.394531 77.289062 145.660156 77.386719 145.949219 77.414062 C 146.285156 77.445312 146.613281 77.402344 146.933594 77.292969 C 147.433594 77.132812 147.890625 76.894531 148.308594 76.574219 C 148.710938 76.261719 149.042969 75.890625 149.308594 75.453125 C 149.566406 75.03125 149.738281 74.578125 149.824219 74.089844 L 151.328125 75.941406 C 151.136719 76.734375 150.832031 77.480469 150.414062 78.179688 C 150.011719 78.863281 149.515625 79.46875 148.925781 79.992188 C 148.339844 80.507812 147.675781 80.882812 146.9375 81.121094 Z M 146.9375 81.117188 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 167.679688 75.957031 C 166.328125 76.175781 165.03125 76.003906 163.78125 75.441406 C 162.523438 74.863281 161.503906 74 160.730469 72.847656 C 159.894531 71.5625 159.367188 70.15625 159.140625 68.636719 C 158.917969 67.117188 159.019531 65.621094 159.445312 64.148438 C 159.859375 62.816406 160.578125 61.6875 161.613281 60.753906 C 162.644531 59.832031 163.847656 59.277344 165.222656 59.097656 C 166.671875 58.882812 168.050781 59.105469 169.359375 59.765625 C 169.929688 60.050781 170.4375 60.421875 170.882812 60.882812 C 171.289062 61.296875 171.582031 61.785156 171.753906 62.34375 L 170.601562 62.792969 L 169.058594 52.355469 L 173.976562 51.628906 L 177.316406 74.222656 L 172.734375 74.898438 L 171.917969 71.277344 L 172.921875 71.316406 C 172.949219 71.847656 172.835938 72.347656 172.585938 72.816406 C 172.300781 73.355469 171.929688 73.828125 171.46875 74.230469 C 170.957031 74.679688 170.394531 75.050781 169.777344 75.339844 C 169.109375 75.648438 168.410156 75.855469 167.679688 75.957031 Z M 168.300781 71.714844 C 169.003906 71.628906 169.625 71.355469 170.164062 70.894531 C 170.671875 70.425781 171.019531 69.863281 171.207031 69.195312 C 171.421875 68.417969 171.460938 67.632812 171.324219 66.835938 C 171.226562 66.027344 170.960938 65.277344 170.523438 64.585938 C 170.15625 64 169.65625 63.558594 169.035156 63.261719 C 168.386719 62.972656 167.710938 62.890625 167.011719 63.011719 C 166.320312 63.097656 165.710938 63.371094 165.183594 63.828125 C 164.671875 64.296875 164.324219 64.863281 164.140625 65.527344 C 163.921875 66.316406 163.886719 67.113281 164.023438 67.917969 C 164.125 68.71875 164.390625 69.457031 164.820312 70.140625 C 165.191406 70.722656 165.6875 71.164062 166.3125 71.464844 C 166.949219 71.75 167.609375 71.835938 168.300781 71.714844 Z M 168.300781 71.714844 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 191.492188 74.375 C 189.820312 74.386719 188.25 73.996094 186.777344 73.207031 C 185.460938 72.496094 184.441406 71.484375 183.714844 70.175781 C 182.980469 68.816406 182.640625 67.363281 182.699219 65.820312 C 182.707031 64.613281 182.933594 63.449219 183.382812 62.328125 C 183.785156 61.3125 184.378906 60.417969 185.160156 59.648438 C 185.9375 58.878906 186.839844 58.296875 187.863281 57.90625 C 188.945312 57.492188 190.066406 57.300781 191.222656 57.335938 C 192.316406 57.339844 193.363281 57.5625 194.359375 58.007812 C 195.296875 58.429688 196.105469 59.023438 196.796875 59.78125 C 197.5 60.558594 198.015625 61.441406 198.351562 62.433594 C 198.714844 63.511719 198.867188 64.613281 198.816406 65.746094 L 198.757812 67.105469 L 185.738281 66.863281 L 185.046875 64.039062 L 194.769531 64.222656 L 194.234375 64.765625 L 194.246094 64.148438 C 194.222656 63.65625 194.074219 63.207031 193.792969 62.800781 C 193.511719 62.410156 193.160156 62.101562 192.730469 61.875 C 192.261719 61.632812 191.765625 61.511719 191.238281 61.507812 C 190.503906 61.46875 189.804688 61.617188 189.148438 61.949219 C 188.566406 62.257812 188.132812 62.707031 187.839844 63.292969 C 187.515625 63.996094 187.355469 64.734375 187.367188 65.507812 C 187.335938 66.339844 187.511719 67.128906 187.894531 67.867188 C 188.273438 68.570312 188.820312 69.105469 189.53125 69.472656 C 190.347656 69.882812 191.214844 70.082031 192.128906 70.074219 C 192.765625 70.097656 193.382812 70.003906 193.988281 69.800781 C 194.640625 69.550781 195.242188 69.210938 195.796875 68.78125 L 198.046875 72.09375 C 197.414062 72.609375 196.726562 73.046875 195.988281 73.398438 C 194.566406 74.082031 193.066406 74.410156 191.492188 74.382812 Z M 191.492188 74.375 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 204.128906 74.925781 L 206.773438 58.75 L 211.433594 59.511719 L 210.785156 64.816406 L 210.039062 63.632812 C 210.4375 62.824219 210.972656 62.121094 211.640625 61.515625 C 212.292969 60.917969 213.035156 60.476562 213.875 60.191406 C 214.683594 59.910156 215.515625 59.835938 216.363281 59.976562 C 216.707031 60.027344 217.042969 60.109375 217.375 60.21875 C 217.65625 60.308594 217.921875 60.429688 218.175781 60.582031 L 215.984375 65.761719 C 215.726562 65.570312 215.445312 65.414062 215.144531 65.292969 C 214.773438 65.136719 214.390625 65.027344 213.992188 64.964844 C 213.566406 64.890625 213.144531 64.898438 212.722656 64.992188 C 212.328125 65.078125 211.964844 65.246094 211.640625 65.488281 C 211.3125 65.734375 211.042969 66.035156 210.835938 66.386719 C 210.609375 66.785156 210.460938 67.207031 210.394531 67.660156 L 209.074219 75.734375 Z M 204.128906 74.925781 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 225.496094 79.898438 C 224.101562 79.496094 222.835938 78.847656 221.699219 77.949219 C 220.71875 77.183594 219.976562 76.230469 219.472656 75.089844 L 223.125 73.492188 C 223.53125 74.269531 224.082031 74.929688 224.78125 75.464844 C 225.398438 75.953125 226.082031 76.316406 226.832031 76.558594 C 227.0625 76.632812 227.300781 76.671875 227.539062 76.679688 C 227.742188 76.679688 227.9375 76.648438 228.128906 76.585938 C 228.304688 76.527344 228.457031 76.433594 228.585938 76.304688 C 228.71875 76.167969 228.808594 76.007812 228.863281 75.824219 C 229 75.429688 228.921875 75.082031 228.628906 74.785156 C 228.402344 74.550781 228.152344 74.339844 227.886719 74.15625 C 227.417969 73.816406 226.933594 73.5 226.433594 73.210938 C 225.664062 72.753906 224.949219 72.222656 224.289062 71.621094 C 223.757812 71.140625 223.320312 70.585938 222.972656 69.957031 C 222.699219 69.449219 222.535156 68.902344 222.484375 68.324219 C 222.4375 67.710938 222.507812 67.109375 222.699219 66.519531 C 222.972656 65.5625 223.523438 64.804688 224.34375 64.246094 C 225.195312 63.675781 226.128906 63.339844 227.148438 63.246094 C 228.257812 63.136719 229.34375 63.246094 230.40625 63.582031 C 232.050781 64.074219 233.488281 64.921875 234.710938 66.125 C 235.269531 66.667969 235.75 67.277344 236.144531 67.949219 L 232.777344 69.988281 C 232.527344 69.527344 232.226562 69.105469 231.871094 68.722656 C 231.515625 68.335938 231.128906 67.980469 230.710938 67.660156 C 230.351562 67.375 229.953125 67.164062 229.519531 67.019531 C 229.253906 66.9375 228.988281 66.878906 228.714844 66.851562 C 228.496094 66.828125 228.285156 66.851562 228.078125 66.917969 C 227.90625 66.976562 227.753906 67.070312 227.625 67.199219 C 227.496094 67.324219 227.40625 67.476562 227.355469 67.648438 C 227.289062 67.855469 227.285156 68.0625 227.34375 68.273438 C 227.410156 68.496094 227.515625 68.695312 227.660156 68.871094 C 227.914062 69.113281 228.1875 69.335938 228.472656 69.539062 C 228.867188 69.832031 229.398438 70.1875 230.066406 70.605469 C 230.820312 71.074219 231.523438 71.605469 232.175781 72.207031 C 232.691406 72.667969 233.105469 73.210938 233.414062 73.832031 C 233.648438 74.265625 233.769531 74.726562 233.78125 75.21875 C 233.792969 75.730469 233.71875 76.230469 233.566406 76.71875 C 233.28125 77.707031 232.726562 78.511719 231.910156 79.132812 C 231.054688 79.765625 230.101562 80.140625 229.046875 80.261719 C 227.835938 80.398438 226.652344 80.277344 225.496094 79.898438 Z M 225.496094 79.898438 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 236.996094 83.453125 L 246.96875 62.902344 L 251.382812 65.046875 L 247.113281 73.847656 L 246.035156 73.738281 C 246.589844 73.148438 247.25 72.71875 248.015625 72.449219 C 248.835938 72.15625 249.683594 72.023438 250.558594 72.054688 C 251.460938 72.078125 252.320312 72.289062 253.132812 72.6875 C 254.144531 73.136719 254.972656 73.816406 255.605469 74.726562 C 256.167969 75.597656 256.40625 76.550781 256.332031 77.582031 C 256.226562 78.851562 255.878906 80.050781 255.289062 81.179688 L 250.910156 90.203125 L 246.441406 88.035156 L 250.65625 79.34375 C 250.917969 78.84375 251.074219 78.3125 251.121094 77.75 C 251.152344 77.300781 251.042969 76.894531 250.789062 76.523438 C 250.492188 76.132812 250.117188 75.847656 249.660156 75.667969 C 249.289062 75.484375 248.902344 75.371094 248.492188 75.324219 C 248.105469 75.28125 247.730469 75.316406 247.359375 75.425781 C 247.003906 75.53125 246.6875 75.703125 246.40625 75.941406 C 246.117188 76.195312 245.890625 76.496094 245.726562 76.847656 L 241.464844 85.621094 L 239.21875 84.527344 L 237.925781 83.902344 Z M 236.996094 83.453125 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 256.671875 93.910156 L 265.738281 80.253906 L 269.878906 83.003906 L 260.8125 96.660156 Z M 269.617188 78.9375 C 268.90625 78.527344 268.417969 77.9375 268.144531 77.164062 C 268.070312 76.820312 268.066406 76.472656 268.132812 76.125 C 268.199219 75.777344 268.332031 75.457031 268.527344 75.164062 C 268.722656 74.871094 268.972656 74.628906 269.265625 74.433594 C 269.5625 74.238281 269.882812 74.113281 270.230469 74.050781 C 271.050781 73.96875 271.789062 74.175781 272.449219 74.667969 C 273.136719 75.074219 273.613281 75.652344 273.871094 76.410156 C 274.066406 77.148438 273.9375 77.820312 273.476562 78.429688 C 273.085938 79.0625 272.527344 79.429688 271.792969 79.535156 C 270.988281 79.621094 270.261719 79.421875 269.617188 78.9375 Z M 269.617188 78.9375 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 262.136719 105.742188 L 277.460938 88.347656 L 281.003906 91.472656 L 278.777344 94.324219 L 278.242188 93.480469 C 278.828125 93.042969 279.484375 92.816406 280.214844 92.808594 C 281.0625 92.78125 281.882812 92.914062 282.675781 93.210938 C 283.550781 93.519531 284.335938 93.984375 285.027344 94.601562 C 286.0625 95.484375 286.757812 96.578125 287.117188 97.886719 C 287.464844 99.210938 287.445312 100.535156 287.0625 101.847656 C 286.628906 103.335938 285.886719 104.652344 284.839844 105.792969 C 283.851562 106.957031 282.660156 107.835938 281.257812 108.4375 C 279.996094 108.980469 278.683594 109.160156 277.320312 108.980469 C 275.972656 108.792969 274.792969 108.242188 273.785156 107.324219 C 273.082031 106.710938 272.527344 105.984375 272.125 105.144531 C 271.742188 104.367188 271.519531 103.546875 271.457031 102.683594 C 271.390625 101.925781 271.527344 101.210938 271.867188 100.535156 L 273.03125 100.941406 L 265.890625 109.046875 Z M 275.65625 103.378906 C 276.167969 103.851562 276.765625 104.144531 277.449219 104.261719 C 278.125 104.355469 278.769531 104.261719 279.386719 103.972656 C 280.09375 103.644531 280.699219 103.183594 281.203125 102.589844 C 281.738281 102.007812 282.125 101.34375 282.367188 100.59375 C 282.574219 99.941406 282.589844 99.28125 282.417969 98.621094 C 282.222656 97.945312 281.859375 97.386719 281.324219 96.9375 C 280.800781 96.453125 280.1875 96.152344 279.480469 96.035156 C 278.804688 95.9375 278.148438 96.027344 277.519531 96.300781 C 276.792969 96.628906 276.175781 97.097656 275.664062 97.710938 C 275.136719 98.285156 274.757812 98.949219 274.53125 99.695312 C 274.332031 100.355469 274.324219 101.015625 274.515625 101.675781 C 274.726562 102.355469 275.109375 102.921875 275.65625 103.375 Z M 275.65625 103.378906 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 293.835938 129.90625 L 308.035156 120.660156 L 304.566406 115.332031 L 308.472656 112.785156 L 318.40625 128.046875 L 314.5 130.589844 L 310.914062 125.082031 L 296.714844 134.328125 Z M 293.835938 129.90625 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 301.847656 143.210938 L 316.683594 136.242188 L 318.691406 140.519531 L 313.953125 142.984375 L 314.507812 141.699219 C 315.398438 141.574219 316.28125 141.613281 317.15625 141.820312 C 318.015625 142.019531 318.804688 142.382812 319.511719 142.914062 C 320.207031 143.421875 320.734375 144.066406 321.101562 144.847656 C 321.25 145.160156 321.375 145.480469 321.472656 145.816406 C 321.554688 146.097656 321.605469 146.386719 321.621094 146.683594 L 316.113281 147.800781 C 316.121094 147.476562 316.089844 147.15625 316.019531 146.839844 C 315.9375 146.445312 315.8125 146.070312 315.640625 145.707031 C 315.460938 145.3125 315.214844 144.96875 314.898438 144.671875 C 314.601562 144.394531 314.261719 144.191406 313.878906 144.058594 C 313.488281 143.929688 313.089844 143.878906 312.679688 143.90625 C 312.226562 143.941406 311.792969 144.058594 311.378906 144.261719 L 303.976562 147.738281 Z M 301.847656 143.210938 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 309.839844 163.617188 C 309.5 162.566406 309.460938 161.507812 309.71875 160.433594 C 309.992188 159.421875 310.527344 158.570312 311.320312 157.886719 C 312.257812 157.089844 313.324219 156.535156 314.511719 156.21875 L 324.222656 153.351562 L 325.628906 158.117188 L 316.632812 160.773438 C 315.773438 160.972656 315.089844 161.425781 314.574219 162.140625 C 314.140625 162.828125 314.058594 163.554688 314.332031 164.320312 C 314.441406 164.707031 314.613281 165.0625 314.855469 165.386719 C 315.078125 165.683594 315.351562 165.917969 315.675781 166.09375 C 316.003906 166.269531 316.351562 166.378906 316.71875 166.414062 C 317.113281 166.453125 317.5 166.414062 317.875 166.296875 L 327.230469 163.535156 L 328.640625 168.300781 L 312.917969 172.941406 L 311.597656 168.472656 L 314.773438 167.34375 L 315.382812 168.101562 C 314.558594 168.09375 313.78125 167.898438 313.054688 167.515625 C 312.273438 167.117188 311.605469 166.578125 311.046875 165.898438 C 310.488281 165.222656 310.089844 164.464844 309.84375 163.621094 Z M 309.839844 163.617188 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 314.558594 185.070312 C 314.34375 183.636719 314.410156 182.214844 314.757812 180.808594 C 315.050781 179.597656 315.609375 178.527344 316.4375 177.597656 L 319.402344 180.257812 C 318.863281 180.953125 318.492188 181.726562 318.292969 182.585938 C 318.105469 183.351562 318.058594 184.125 318.148438 184.90625 C 318.175781 185.148438 318.238281 185.378906 318.332031 185.597656 C 318.414062 185.785156 318.523438 185.953125 318.664062 186.105469 C 318.789062 186.238281 318.9375 186.339844 319.109375 186.402344 C 319.289062 186.46875 319.472656 186.484375 319.660156 186.453125 C 320.078125 186.417969 320.359375 186.203125 320.511719 185.8125 C 320.628906 185.511719 320.71875 185.199219 320.777344 184.875 C 320.871094 184.425781 320.957031 183.855469 321.027344 183.160156 C 321.125 182.273438 321.308594 181.402344 321.585938 180.550781 C 321.804688 179.867188 322.125 179.238281 322.550781 178.664062 C 322.902344 178.203125 323.332031 177.828125 323.835938 177.546875 C 324.375 177.246094 324.953125 177.0625 325.566406 176.988281 C 326.550781 176.84375 327.46875 177.027344 328.320312 177.542969 C 329.191406 178.082031 329.882812 178.792969 330.390625 179.683594 C 330.953125 180.644531 331.304688 181.679688 331.441406 182.785156 C 331.671875 184.484375 331.5 186.140625 330.914062 187.757812 C 330.648438 188.488281 330.292969 189.175781 329.847656 189.8125 L 326.597656 187.59375 C 326.910156 187.179688 327.167969 186.730469 327.367188 186.246094 C 327.574219 185.761719 327.734375 185.265625 327.855469 184.75 C 327.964844 184.308594 327.992188 183.859375 327.941406 183.402344 C 327.90625 183.128906 327.84375 182.863281 327.757812 182.601562 C 327.6875 182.398438 327.578125 182.214844 327.433594 182.054688 C 327.308594 181.917969 327.160156 181.820312 326.988281 181.753906 C 326.820312 181.691406 326.648438 181.671875 326.46875 181.699219 C 326.253906 181.722656 326.0625 181.804688 325.894531 181.945312 C 325.722656 182.097656 325.585938 182.277344 325.480469 182.484375 C 325.367188 182.816406 325.277344 183.152344 325.210938 183.5 C 325.109375 183.980469 325.003906 184.609375 324.902344 185.394531 C 324.789062 186.273438 324.597656 187.132812 324.324219 187.976562 C 324.117188 188.632812 323.796875 189.230469 323.363281 189.769531 C 323.066406 190.160156 322.695312 190.464844 322.253906 190.679688 C 321.789062 190.898438 321.304688 191.039062 320.796875 191.097656 C 319.78125 191.25 318.820312 191.082031 317.914062 190.59375 C 316.984375 190.082031 316.246094 189.367188 315.703125 188.457031 C 315.074219 187.410156 314.695312 186.28125 314.558594 185.070312 Z M 314.558594 185.070312 " fill-opacity="1" fill-rule="nonzero"></path><path fill="currentColor" d="M 315.917969 198.476562 L 336.441406 198.144531 L 336.527344 203.113281 L 316.003906 203.445312 Z M 327.90625 195.378906 L 332.257812 195.308594 L 332.4375 206.328125 L 328.085938 206.398438 Z M 327.90625 195.378906 " fill-opacity="1" fill-rule="nonzero"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/GLT.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GLT = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "glt",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Green Leadership Trust | Featured Work",
      ogTitle: "Green Leadership Trust \u2013 Featured Work | Code Artisan",
      description: "Designed and developed Green Leadership Trust's website, and design most of GLT's media on an on-going basis.",
      ogDescription: "Designed and developed Green Leadership Trust's website, and design most of GLT's media on an on-going basis.",
      canonical: "https://codeartisan.dev/work/glt/",
      ogUrl: "https://codeartisan.dev/work/glt/",
      ogImage: "https://codeartisan.dev/glt-meta.webp",
      ogImageWidth: 1200,
      ogImageHeight: 627,
      ogImageAlt: "Screenshot of the GLT project",
      twitterCard: "summary_large_image"
    });
    const icons = [Airtable, _sfc_main$e, ActionNetwork];
    const sections = data.sections;
    const results = data.results;
    const introData = data.intro;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary transition duration-700" }, _attrs))}><div class="utilities max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto pt-9 lg:pt-24 pb-18 lg:pb-20">`);
      _push(ssrRenderComponent(InnerSecondaryNav, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(InnerNav, {
        title: "GLT",
        brandLabel: "Featured Work",
        brandURL: "/work"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, {
        icon: GLT,
        video: unref(introData).video,
        poster: unref(introData).poster,
        heading: unref(introData).title
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, null, null, _parent));
      _push(`<div class="overflow-clip">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        heading: unref(sections)[0].heading,
        paragraph: unref(sections)[0].paragraph,
        items: unref(sections)[0].items,
        tagIntro: unref(sections)[0].tagIntro,
        tags: unref(sections)[0].tags
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, { image: "https://res.cloudinary.com/dp1qyhhlo/image/upload/v1747698374/1_Pager_11_x_11_in_zcsbil.webp" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, {
        heading: unref(sections)[1].heading,
        paragraph: unref(sections)[1].paragraph,
        items: unref(sections)[1].items,
        tagIntro: unref(sections)[1].tagIntro,
        tags: unref(sections)[1].tags,
        image: "https://res.cloudinary.com/dp1qyhhlo/image/upload/w_900,f_auto/v1746818135/2_ev2u7a.jpg"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        heading: unref(sections)[2].heading,
        paragraph: unref(sections)[2].paragraph,
        items: unref(sections)[2].items,
        tagIntro: unref(sections)[2].tagIntro,
        tags: unref(sections)[2].tags,
        image: "https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto/v1746818136/Untitled_design_8_ia98uc.jpg",
        gistId: "11de8482695bd4c490300e3e4077edda",
        repoUrl: "https://github.com/msamricth/theme-main",
        FileName: "sidebarBlockSettings.js",
        Caption: "Block settings for GLT's custom WordPress Theme"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        heading: unref(sections)[3].heading,
        paragraph: unref(sections)[3].paragraph,
        items: unref(sections)[3].items,
        tagIntro: unref(sections)[3].tagIntro,
        tags: unref(sections)[3].tags,
        gistId: "2e77a8ac064d7665b942021b08e9aa85",
        repoUrl: "https://github.com/msamricth/airtable-WP",
        FileName: "class-airtable-service.php",
        Caption: "WordPress form builder plugin that connects and syncs with Airtable",
        icons
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        heading: unref(results).heading,
        items: unref(results).items,
        Images: unref(results).Images,
        buttonLabel: unref(results).button.label,
        buttonHref: unref(results).button.href
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Contact, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/work/glt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=glt-UNW1fxUX.mjs.map
