import { ref, watch, nextTick, unref, useSSRContext } from 'vue';
import { ssrRenderTeleport, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { d as useNuxtApp, a as useMainStore } from './server.mjs';
import { u as useModalStore } from './modal-Cy99Pjki.mjs';

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

export { _sfc_main as _ };
//# sourceMappingURL=Modal-DBaPYVP3.mjs.map
