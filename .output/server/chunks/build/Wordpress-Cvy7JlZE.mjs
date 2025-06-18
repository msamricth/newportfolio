import { mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  __name: "Links",
  __ssrInlineRender: true,
  props: {
    href: { type: String, required: true },
    text: { type: String, required: true },
    target: { type: String, default: "_blank" },
    NoEntry: { type: Boolean, default: false },
    onClick: Function
  },
  setup(__props) {
    const linkEl = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.href,
        target: __props.target,
        rel: "noopener noreferrer",
        class: "animated-link group transition-all duration-700 overflow-hidden inline-block hover:scale-[1.04]",
        ref_key: "linkEl",
        ref: linkEl,
        "aria-label": __props.text
      }, _attrs))} data-v-e5a9363b><span class="nav-item" data-v-e5a9363b>${(_a = __props.text) != null ? _a : ""}</span></a>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Links.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Links = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e5a9363b"]]);
const _sfc_main = {
  __name: "Wordpress",
  __ssrInlineRender: true,
  setup(__props) {
    const paths = [
      "M3.1,9.5c-0.8,1.7-1.3,3.7-1.3,5.7c0,5.5,3.2,10.2,7.9,12.3C10,27.6,3.2,9.3,3.1,9.5z",
      "M27.1,9c0-0.1,0.2-0.1,0.2,0c0.5,1.1,1.5,3.6,1.5,6.3c0,7.4-6,11.2-6,11.1C25.2,21.6,27.2,11.4,27.1,9z",
      "M7.3,9.9 L11.8,23.3 15.1,14.6 13.4,10.1",
      "M17.6,9.8L21.9,23c0,0,3.6-8.3,2.2-11c-3.2-6.2-0.6-6.6,0.2-6.6c0,0-2.5-3.7-9.8-3.7s-10.2,6-10.2,6h4.6",
      "M12.9,25.8l3.5-9.6L20.1,28c0,0-1.4,0.9-5.3,0.7C13.4,28.6,12.4,27.2,12.9,25.8z"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 30.1 30.2",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><!--[-->`);
      ssrRenderList(paths, (d, i) => {
        _push(`<path${ssrRenderAttr("d", d)} stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>`);
      });
      _push(`<!--]--></svg>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Wordpress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Links as L, _sfc_main as _ };
//# sourceMappingURL=Wordpress-Cvy7JlZE.mjs.map
