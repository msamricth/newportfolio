import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-CHu_jgWj.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'consola';
import 'node:path';
import 'node:crypto';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "94",
    height: "92",
    viewBox: "0 0 94 92",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M47.8242 1.90403e-07C72.4424 0.00134942 92.5408 19.3429 93.7588 43.6602L93.8027 44.8223L93.8037 44.8604V44.8975L93.8174 45.9307V46.0078C93.8114 71.0121 73.8555 91.3515 49.001 91.9795L48.9629 91.9805H48.9248L47.8926 91.9932L47.8555 91.9941H45.9941C20.7001 91.9919 0.193098 71.5788 0.000976562 46.3584V45.6865L0.0195312 44.6592L0.0214844 44.582C0.773681 19.8147 21.0828 -0.0022429 46.001 1.90403e-07H47.8242ZM46 12C27.6005 11.9983 12.5985 26.6195 12.0176 44.8975L12 45.873C11.9314 64.6934 27.1693 79.9924 45.9951 79.9941H47.7422L48.6992 79.9814C67.0638 79.5168 81.813 64.4838 81.8174 46.0049L81.8047 45.084C81.3226 26.7329 66.2926 12.0008 47.8232 12H46Z" fill="#A66EFF"></path><path d="M34.3262 34.2443C34.3262 30.4934 38.3029 28.0782 41.6309 29.8068L63.2871 41.0597C66.8801 42.9267 66.88 48.0667 63.2871 49.9337L41.6309 61.1866C38.4069 62.8616 34.5743 60.648 34.3379 57.0978L34.3262 56.7501V34.2443Z" fill="#A66EFF"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Play.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Play = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Play as default };
//# sourceMappingURL=Play-BMyGzmoL.mjs.map
