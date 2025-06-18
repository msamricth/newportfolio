import { ref, mergeProps, useSSRContext } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-CxiIwPb2.mjs';

const _sfc_main = {
  __name: "MainButton",
  __ssrInlineRender: true,
  props: {
    href: String,
    label: String,
    delay: {
      type: String,
      default: "0.7s"
    },
    onClick: Function,
    hover: String
  },
  setup(__props) {
    const buttonEl = ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        target: "_blank",
        href: __props.href,
        class: "cursor-pointer relative flex flex-wrap items-center group/cta overflow-clip w-65 text-center subtle-slide-in rounded-full transition-all",
        style: { "--theme-main-animation-delay": __props.delay },
        ref_key: "buttonEl",
        ref: buttonEl
      }, _attrs))} data-v-a706f20d><span class="inline-block font-semibold px-4 py-2 border-current border-2 rounded-full transition-all relative z-10 bg-inherit w-full text-nowrap" data-v-a706f20d>${ssrInterpolate(__props.label)}</span><span class="absolute right-0 w-10 top-0 h-full opacity-0 transition-all z-0 origin-right block" data-v-a706f20d><span class="flex items-center justify-center rounded-r-full h-full z-0 origin-right w-10 transition-colors bg-current" data-v-a706f20d><svg class="arrow w-14 h-14 absolute fill-current transition-all text-current" viewBox="0 0 24 24" data-v-a706f20d><path d="M8 5l8 7-8 7z" data-v-a706f20d></path></svg></span></span></a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/buttons/MainButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MainButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a706f20d"]]);

export { MainButton as M };
//# sourceMappingURL=MainButton-DXF83GPb.mjs.map
