import { mergeProps, ref, reactive, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useMainStore } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-CxiIwPb2.mjs';

const _sfc_main$7 = {
  __name: "Github",
  __ssrInlineRender: true,
  props: {
    url: String,
    aria: String
  },
  setup(__props) {
    const btn = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        ref_key: "btn",
        ref: btn,
        class: "group-hover/secondaryNav:opacity-40 text-primary/80 dark:text-background/80 dark:group-has-[a]/footer:text-primary/80 group-hover/secondaryNav:hover:opacity-100 cursor-pointer group icon-btn rounded-full h-8 w-8 hover:scale-[1.25] transition-all duration-700",
        "aria-label": __props.aria,
        target: "_blank",
        href: __props.url
      }, _attrs))}><svg fill="none" height="56" stroke-width="1.5" viewBox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg" class="group-hover/secondaryNav:opacity-80 absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-700"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" class="icon-wipe-overlay absolute top-0 left-0 w-full h-full z-10 pointer-events-none text-accent group-hover:bg-deep-purple rounded-[6rem] transition-all duration-700"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/buttons/Github.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "LinkedIn",
  __ssrInlineRender: true,
  props: {
    url: String,
    aria: String
  },
  setup(__props) {
    const btn = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        ref_key: "btn",
        ref: btn,
        class: "group-hover/secondaryNav:opacity-40 text-primary/80 inverted:text-background/80 dark:group-has-[a]/footer:text-primary/80 dark:text-background/80 group-hover/secondaryNav:hover:opacity-100 cursor-pointer group icon-btn rounded-full h-8 w-8 hover:scale-[1.25] transition-all duration-700",
        "aria-label": __props.aria,
        target: "_blank",
        href: __props.url
      }, _attrs))}><svg class="group-hover/secondaryNav:opacity-80 absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-700" stroke-width="1.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2792 8.73516C16.3984 8.73516 17.4717 9.17973 18.263 9.97108C19.0544 10.7624 19.4989 11.8357 19.4989 12.9549V17.8778H16.6858V12.9549C16.6858 12.5818 16.5376 12.224 16.2738 11.9603C16.0101 11.6965 15.6523 11.5483 15.2792 11.5483C14.9062 11.5483 14.5484 11.6965 14.2847 11.9603C14.0209 12.224 13.8727 12.5818 13.8727 12.9549V17.8778H11.0595V12.9549C11.0595 11.8357 11.5041 10.7624 12.2955 9.97108C13.0868 9.17973 14.1601 8.73516 15.2792 8.73516Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.43329 9.43844H8.24642V17.8778H5.43329V9.43844Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.83985 7.32859C7.21289 7.32859 7.57066 7.1804 7.83444 6.91662C8.09822 6.65284 8.24642 6.29507 8.24642 5.92203C8.24642 5.54898 8.09822 5.19122 7.83444 4.92744C7.57066 4.66365 7.21289 4.51546 6.83985 4.51546C6.46681 4.51546 6.10904 4.66365 5.84526 4.92744C5.58148 5.19122 5.43329 5.54898 5.43329 5.92203C5.43329 6.29507 5.58148 6.65284 5.84526 6.91662C6.10904 7.1804 6.46681 7.32859 6.83985 7.32859Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.4447,11.9883
     a10.4564,10.4564 0 1,1 -20.9128,0
     a10.4564,10.4564 0 1,1 20.9128,0" stroke="currentColor" fill="none"></path></svg><svg class="icon-wipe-overlay absolute top-0 left-0 w-full h-full z-10 pointer-events-none text-accent group-hover:bg-deep-purple rounded-[6rem] transition-all duration-700" stroke-width="1.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2792 8.73516C16.3984 8.73516 17.4717 9.17973 18.263 9.97108C19.0544 10.7624 19.4989 11.8357 19.4989 12.9549V17.8778H16.6858V12.9549C16.6858 12.5818 16.5376 12.224 16.2738 11.9603C16.0101 11.6965 15.6523 11.5483 15.2792 11.5483C14.9062 11.5483 14.5484 11.6965 14.2847 11.9603C14.0209 12.224 13.8727 12.5818 13.8727 12.9549V17.8778H11.0595V12.9549C11.0595 11.8357 11.5041 10.7624 12.2955 9.97108C13.0868 9.17973 14.1601 8.73516 15.2792 8.73516Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.43329 9.43844H8.24642V17.8778H5.43329V9.43844Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.83985 7.32859C7.21289 7.32859 7.57066 7.1804 7.83444 6.91662C8.09822 6.65284 8.24642 6.29507 8.24642 5.92203C8.24642 5.54898 8.09822 5.19122 7.83444 4.92744C7.57066 4.66365 7.21289 4.51546 6.83985 4.51546C6.46681 4.51546 6.10904 4.66365 5.84526 4.92744C5.58148 5.19122 5.43329 5.54898 5.43329 5.92203C5.43329 6.29507 5.58148 6.65284 5.84526 6.91662C6.10904 7.1804 6.46681 7.32859 6.83985 7.32859Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.4447,11.9883
     a10.4564,10.4564 0 1,1 -20.9128,0
     a10.4564,10.4564 0 1,1 20.9128,0" stroke="currentColor" fill="none"></path></svg></a>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/buttons/LinkedIn.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Icons",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "animate subtle-slide-in",
        aria: "Emm's Github account",
        style: { "--theme-main-animation-delay": "0.5s" },
        url: "https://github.com/msamricth"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        class: "animate subtle-slide-in",
        aria: "Emm's Linkedin account",
        style: { "--theme-main-animation-delay": "0.6s" },
        url: "https://www.linkedin.com/in/emmtalarico/"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/Icons.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Mode",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: "inline-flex items-start cursor-pointer group max-md:scale-[1.2] mt-0.5 mx-1 md:mx-0 group-hover/secondaryNav:opacity-80 transition-opacity duration-700 group-hover/secondaryNav:hover:opacity-100",
        for: "mode"
      }, _attrs))}><span class="me-3 text-xl font-medium animate subtle-slide-in block relative" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0.1s" })}"><svg width="1.6rem" class="${ssrRenderClass([unref(store).isDark ? "opacity-100 duration-700" : "opacity-0 duration-0", "group-hover:text-accent transition-all"])}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z" fill="currentColor"></path></svg><svg width="1.6rem" class="${ssrRenderClass([unref(store).isDark ? "opacity-0 duration-0" : " opacity-100 duration-700", "group-hover:text-accent group-hover:rotate-360 transition absolute top-0"])}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><circle cx="12" cy="12" fill="currentColor" r="5"></circle><path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" fill="currentColor"></path><path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" fill="currentColor"></path><path d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z" fill="currentColor"></path><path d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z" fill="currentColor"></path><path d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z" fill="currentColor"></path><path d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z" fill="currentColor"></path><path d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z" fill="currentColor"></path><path d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z" fill="currentColor"></path></svg></span><span class="sr-only">Dark Mode</span><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(unref(store).isDark) ? " checked" : ""} name="mode" id="mode"><div class="relative w-11 h-6 bg-primary/60 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent inverted:peer-focus:ring-accent dark:peer-focus:ring-accent rounded-full peer inverted:bg-gray-700 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:start-[2px] after:bg-accent after:border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all inverted:border-gray-600 dark:border-gray-600 peer-checked:bg-border inverted:peer-checked:bg-border dark:peer-checked:bg-border animate subtle-slide-in" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0.3s" })}"></div></label>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/Mode.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Hamburger",
  __ssrInlineRender: true,
  props: {
    footer: { type: Boolean }
  },
  setup(__props) {
    useMainStore();
    const menuBTN = ref(null);
    const menuBTNActive = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.footer) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          ref_key: "menuBTN",
          ref: menuBTN,
          class: ["animate group-hover/secondaryNav:opacity-80 text-current/80 cursor-pointer transition group/menu rounded-full subtle-slide-in hamburger hamburger--arrowturn-r flex flex-col justify-center md:hover:**:text-accent duration-700", menuBTNActive.value ? "is-active **:text-accent" : ""],
          "aria-label": "Go to menu",
          style: { "--theme-main-animation-delay": "0.7s" }
        }, _attrs))} data-v-32af4dd5><div class="hamburger-box text-current transition-all duration-700 **:transition-all **:duration-700" data-v-32af4dd5><div class="hamburger-inner text-current **:transition-all **:duration-700" data-v-32af4dd5></div></div></button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/Hamburger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Hamburger = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-32af4dd5"]]);
const _sfc_main$2 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    useMainStore();
    ref(null);
    const container = ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const nameError = ref(null);
    const emailError = ref(null);
    const messageError = ref(null);
    ref(null);
    const formDataValues = reactive({
      name: "",
      email: "",
      message: "",
      hpField: ""
    });
    const submitted = ref(false);
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        "aria-labelledby": "formHeader",
        id: "sayHello",
        tabindex: "0",
        class: "form-wrapper relative w-full mx-auto mb-2 text-primary dark:text-accent inverted:text-electric-purple items-center relative mt-25 md:mt-28 min-h-screen"
      }, _attrs))} data-v-535e8dd8><div class="h-full flex items-center sticky top-45 justify-center mx-auto pb-12 mb-4 lg:mb-8 px-6 flex-col max-w-[778px] relative xl:pb-24 xl:pb-16" data-v-535e8dd8><h3 data-splitting="words" id="formHeader" class="${ssrRenderClass([submitted.value ? "blur-sm" : "", "text-4xl font-black transition-all text-center mb-6 lg:mb-12 form-header uppercase placeholder-line"])}" data-v-535e8dd8>Lets get in touch!</h3>`);
      if (submitted.value) {
        _push(`<div class="text-center pt-16 fade-up absolute z-30" id="thanks" data-v-535e8dd8><h4 class="text-3xl mb-2 font-bold mb-2 text-yellow" data-v-535e8dd8>Success</h4><p class="text-white" data-v-535e8dd8>ss </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form novalidate class="${ssrRenderClass([submitted.value ? "blur-md opacity-25" : "", "transition-all w-full px-2 block flex flex-col gap-6 text-primary dark:text-accent inverted:text-electric-purple"])}" data-v-535e8dd8>`);
      if (error.value) {
        _push(`<div class="text-electric-purple text-sm mb-2" data-v-535e8dd8>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-wrap w-full" data-v-535e8dd8><div class="relative w-1/2 pr-4" data-v-535e8dd8><label class="sr-only focus:not-sr-only" tabindex="0" for="name" data-v-535e8dd8> Name </label><input type="text" placeholder="Name" id="name" name="name"${ssrRenderAttr("value", formDataValues.name)} class="${ssrRenderClass([{ "border-b border-yellow": nameError.value }, "w-full outline-0 h-12 pb-2 p bg-transparent border-current border rounded-[6rem] pl-6 py-[10px] pr-3 outline-none transition-all active:border-green disabled:cursor-default disabled:bg-gray-2 text-xl focus:border-green bg-transparent text-primary dark:text-accent inverted:text-electric-purple placeholder:text-primary/60 focus:placeholder:text-primary dark:placeholder:text-accent/60 dark:focus:placeholder:text-accent inverted:placeholder:text-electric-purple/60 inverted:focus:placeholder:text-electric-purple"])}" data-v-535e8dd8></div><div class="w-1/2" data-v-535e8dd8><label for="email" class="sr-only focus:not-sr-only" tabindex="0" data-v-535e8dd8> Email </label><input type="email" id="email" placeholder="Email" name="email"${ssrRenderAttr("value", formDataValues.email)} required class="${ssrRenderClass([{ "border-b border-yellow": emailError.value }, "w-full outline-0 h-12 pb-2 p bg-transparent border-current border rounded-[6rem] pl-6 py-[10px] pr-3 outline-none transition-all active:border-green disabled:cursor-default disabled:bg-gray-2 text-xl focus:border-green text-primary dark:text-accent inverted:text-electric-purple placeholder:text-primary/60 focus:placeholder:text-primary dark:placeholder:text-accent/60 dark:focus:placeholder:text-accent inverted:placeholder:text-electric-purple/60 inverted:focus:placeholder:text-electric-purple"])}" data-v-535e8dd8></div></div><label for="message" class="sr-only focus:not-sr-only" tabindex="0" data-v-535e8dd8> Type your message </label><textarea class="${ssrRenderClass([{ "border-b border-yellow": messageError.value }, "placeholder:text-current/60 focus:placeholder:text-current outline-0 h-22 pb-2 p bg-transparent border-current border rounded-[1rem] pl-6 py-6 text-primary dark:text-accent inverted:text-electric-purple"])}" id="message" name="message" placeholder="Your message" required data-v-535e8dd8>${ssrInterpolate(formDataValues.message)}</textarea><div class="hidden" data-v-535e8dd8><input type="text" id="hpField" name="hpField"${ssrRenderAttr("value", formDataValues.hpField)} tabindex="-1" autocomplete="off" data-v-535e8dd8></div><div data-v-535e8dd8><button type="submit" class="relative submit flex items-center transition-all overflow-hidden w-60 ml-auto text-center group/cta" data-v-535e8dd8><span class="inline-block font-semibold px-4 py-2 border-current border-2 rounded-full transition-all-all relative z-10 bg-inherit w-full whitespace-nowrap" data-v-535e8dd8> Submit </span><span class="absolute right-0 top-0 w-0 h-full opacity-0 transition-all-all z-0 origin-left block overflow-clip" data-v-535e8dd8><span class="flex items-center justify-center rounded-r-full bg-current h-full transition-all-all z-0 origin-left block w-10" data-v-535e8dd8><svg class="arrow w-24 h-24 fill-current" viewBox="0 0 24 24" data-v-535e8dd8><path d="M8 5l8 7-8 7z" data-v-535e8dd8></path></svg></span></span></button></div></form></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-535e8dd8"]]);
const _sfc_main$1 = {
  __name: "SecondaryNav",
  __ssrInlineRender: true,
  props: {
    footer: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "secondary-nav group/secondaryNav max-w-1440 px-0 md:px-12 flex justify-end items-center relative gap-8 md:gap-6" }, _attrs))} data-v-fe8e6d6a>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(Hamburger, { footer: __props.footer }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/SecondaryNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SecondaryNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fe8e6d6a"]]);
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-electric-purple inverted:bg-primary min-h-40 relative py-6 md:py-12 group/footer" }, _attrs))}><div class="utilties max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto">`);
      _push(ssrRenderComponent(SecondaryNav, {
        footer: true,
        class: "text-primary"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Contact as C, Hamburger as H, SecondaryNav as S, _sfc_main as _, _sfc_main$7 as a, _sfc_main$4 as b, _sfc_main$5 as c };
//# sourceMappingURL=Footer-D9OvthiA.mjs.map
