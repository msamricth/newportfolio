import { mergeProps, unref, ref, watch, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderTeleport, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { a as useMainStore, d as useNuxtApp } from './server.mjs';
import { u as useModalStore } from './modal-Cy99Pjki.mjs';

const _sfc_main$1 = {
  __name: "Preloader",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["absolute top-0 left-0 flex flex-col items-center justify-center w-full pointer-events-none min-h-dvh", unref(store).loaded ? "disapear opacity-0" : ""],
        style: !unref(store).ready ? null : { display: "none" }
      }, _attrs))}><svg width="300" height="217" viewBox="0 0 1061 770" fill="none" xmlns="http://www.w3.org/2000/svg" class="relative w-1/2 max-w-100"><g clip-path="url(#clip0_7_2)"><g class="origin-center opacity-25 animate-spin"><g clip-path="url(#paint0_angular_7_2_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0 0.361 -0.361 0 531 384)"><foreignObject x="-1138.5" y="-1138.5" width="2277.01" height="2277.01"><div xmlns="http://www.w3.org/1999/xhtml" style="${ssrRenderStyle({ "background": "conic-gradient(from 90deg,rgba(201, 124, 205, 1) 0deg,rgba(201, 124, 205, 1) 330.322deg,rgba(201, 124, 205, 1) 360deg)", "height": "100%", "width": "100%", "opacity": "0.75" })}"></div></foreignObject></g></g><path d="M892 384H867C867 569.568 716.568 720 531 720V745V770C744.182 770 917 597.182 917 384H892ZM531 745V720C345.432 720 195 569.568 195 384H170H145C145 597.182 317.818 770 531 770V745ZM170 384H195C195 198.432 345.432 48 531 48V23V-2C317.818 -2 145 170.818 145 384H170ZM531 23V48C716.568 48 867 198.432 867 384H892H917C917 170.818 744.182 -2 531 -2V23Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_ANGULAR&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.78823530673980713,&quot;g&quot;:0.48627451062202454,&quot;b&quot;:0.80392158031463623,&quot;a&quot;:1.0},&quot;position&quot;:0.91756075620651245}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.78823530673980713,&quot;g&quot;:0.48627451062202454,&quot;b&quot;:0.80392158031463623,&quot;a&quot;:1.0},&quot;position&quot;:0.91756075620651245}],&quot;transform&quot;:{&quot;m00&quot;:4.4209753045920674e-14,&quot;m01&quot;:-722.0,&quot;m02&quot;:892.0,&quot;m10&quot;:722.0,&quot;m11&quot;:4.4209753045920674e-14,&quot;m12&quot;:23.0},&quot;opacity&quot;:0.750,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}"></path><g clip-path="url(#paint1_angular_7_2_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0 0.361 -0.361 0 531 384)"><foreignObject x="-1138.5" y="-1138.5" width="2277.01" height="2277.01"><div xmlns="http://www.w3.org/1999/xhtml" style="${ssrRenderStyle({ "background": "conic-gradient(from 90deg,rgba(255, 137, 149, 1) 0deg,rgba(255, 137, 149, 1) 330.322deg,rgba(255, 137, 149, 1) 360deg)", "height": "100%", "width": "100%", "opacity": "1" })}"></div></foreignObject></g></g><path d="M531 745V720C345.432 720 195 569.568 195 384H170H145C145 597.182 317.818 770 531 770V745Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_ANGULAR&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.53725492954254150,&quot;b&quot;:0.58431375026702881,&quot;a&quot;:1.0},&quot;position&quot;:0.91756075620651245}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.53725492954254150,&quot;b&quot;:0.58431375026702881,&quot;a&quot;:1.0},&quot;position&quot;:0.91756075620651245}],&quot;transform&quot;:{&quot;m00&quot;:4.4209753045920674e-14,&quot;m01&quot;:-722.0,&quot;m02&quot;:892.0,&quot;m10&quot;:722.0,&quot;m11&quot;:4.4209753045920674e-14,&quot;m12&quot;:22.999948501586914},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}"></path></g><g class="relative object-contain object-center origin-center jello-horizontal"><mask id="mask0_7_2" style="${ssrRenderStyle({ "mask-type": "luminance" })}" maskUnits="userSpaceOnUse" x="351" y="229" width="361" height="310"><path d="M351 229H711.561V539H351V229Z" fill="white"></path></mask><g mask="url(#mask0_7_2)"><path d="M650.294 234.349C560.555 209.554 531.346 303.139 531.346 303.139C531.346 303.139 502.132 209.554 412.398 234.349C326.879 257.979 306.471 441.327 519.607 535.758C527.093 539.077 535.599 539.077 543.084 535.758C756.221 441.327 735.812 257.979 650.294 234.349Z" fill="#FF8995"></path></g><path d="M446.01 428.631C449.989 432.538 450.102 438.991 446.265 443.043C444.299 445.117 441.681 446.156 439.058 446.156C436.559 446.156 434.054 445.208 432.112 443.298C392.96 404.836 383.352 366.027 382.185 340.244C380.905 311.912 389.226 292.683 389.581 291.879C391.844 286.745 397.77 284.45 402.813 286.759C407.845 289.059 410.1 295.065 407.86 300.194C407.746 300.464 400.946 316.647 402.236 340.331C403.966 372.081 418.696 401.79 446.01 428.631ZM461.089 444.222C455.31 444.222 450.627 448.991 450.627 454.876C450.627 460.761 455.31 465.529 461.089 465.529C466.869 465.529 471.552 460.756 471.552 454.876C471.552 448.991 466.864 444.222 461.089 444.222Z" fill="#C97CCD"></path></g></g><defs><clipPath id="paint0_angular_7_2_clip_path"><path d="M892 384H867C867 569.568 716.568 720 531 720V745V770C744.182 770 917 597.182 917 384H892ZM531 745V720C345.432 720 195 569.568 195 384H170H145C145 597.182 317.818 770 531 770V745ZM170 384H195C195 198.432 345.432 48 531 48V23V-2C317.818 -2 145 170.818 145 384H170ZM531 23V48C716.568 48 867 198.432 867 384H892H917C917 170.818 744.182 -2 531 -2V23Z"></path></clipPath><clipPath id="paint1_angular_7_2_clip_path"><path d="M531 745V720C345.432 720 195 569.568 195 384H170H145C145 597.182 317.818 770 531 770V745Z"></path></clipPath><clipPath id="clip0_7_2"><rect width="1061" height="767" fill="white"></rect></clipPath></defs></svg></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preloader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean, required: true },
    contentClass: { type: String }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const { $gsap: gsap } = useNuxtApp();
    const props = __props;
    const overlay = ref(null);
    const modalContent = ref(null);
    const store = useMainStore();
    const modalStore = useModalStore();
    let lastFocusedElement = null;
    function trapFocus() {
      var _a;
      const focusable = modalContent.value.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first) {
        modalContent.value.focus();
        return;
      }
      const keyHandler = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey && (void 0).activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && (void 0).activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      (_a = modalContent.value) == null ? void 0 : _a.addEventListener("keydown", keyHandler);
      return () => {
        var _a2;
        return (_a2 = modalContent.value) == null ? void 0 : _a2.removeEventListener("keydown", keyHandler);
      };
    }
    watch(() => props.isOpen, async (open) => {
      if (!open) return;
      await nextTick();
      (void 0).body.style.overflow = "hidden";
      lastFocusedElement = (void 0).activeElement;
      if (store.reduceMotion) {
        gsap.set([overlay.value, modalContent.value], { clearProps: "all" });
        modalContent.value.focus();
        return;
      }
      if (!overlay.value) return;
      const tl = gsap.timeline();
      tl.fromTo(overlay.value, {
        autoAlpha: 0,
        filter: "blur(40px)"
      }, {
        autoAlpha: 1,
        filter: "none",
        duration: 0.4,
        ease: "power1.out"
      });
      tl.fromTo(modalContent.value, {
        scale: 0
      }, {
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(0.9)",
        onComplete: () => {
          modalContent.value.focus();
          trapFocus();
        }
      }, "-=0.2");
    });
    watch(() => props.isOpen, (open) => {
      if (!open && lastFocusedElement) {
        lastFocusedElement.focus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        var _a;
        if (__props.isOpen) {
          _push2(`<div class="${ssrRenderClass([(_a = unref(modalStore).modalItem) == null ? void 0 : _a.textColor, "fixed inset-0 top-0 z-50 w-full py-5 overflow-y-auto bg-primary/60 backdrop-blur h-dvh lg:p-5 lg:pb-15 overflow-x-clip z-100"])}"><div class="${ssrRenderClass([__props.contentClass ? __props.contentClass : "bg-background", "rounded-lg lg:rounded-[3rem] lg:max-w-5xl xl:max-w-7xl w-full mx-auto p-6 lg:p-12 relative mt-10 modal-window origin-top motionless:duration-50 focus-visible:outline-none"])}" tabindex="-1"><button class="absolute top-1 z-20 right-1 text-3xl cursor-pointer transition duration-700 text-current hover:text-accent rounded-[3rem] px-6 py-3 hover:scale-108 group size-18 flex flex-col justify-center items-center hover:rotate-270 modal-contant motionless:hover:rotate-0 active:scale-95 motionless:duration-50" aria-label="Close modal"><span class="w-10 h-[4px] bg-current block rotate-45 motionless:group-hover:rotate-45 rounded-[3rem] absolute left-4 group-hover:-rotate-135 transition-all duration-700"></span><span class="w-10 h-[4px] bg-current block -rotate-45 motionless:group-hover:-rotate-45 rounded-[3rem] absolute left-4 group-hover:rotate-135 transition-all duration-700"></span></button><span tabindex="0"></span>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          _push2(`<span tabindex="0"></span></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Modal-C0Zgvi9q.mjs.map
