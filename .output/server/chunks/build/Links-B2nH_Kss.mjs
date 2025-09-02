import { ref, watch, nextTick, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import gsap from 'gsap';
import { _ as _export_sfc, a as useMainStore, S as ScrollTrigger, h as Splitting } from './server.mjs';

const _sfc_main = {
  __name: "Links",
  __ssrInlineRender: true,
  props: {
    href: { type: String, required: true },
    text: { type: String, required: true },
    target: { type: String, default: "_blank" },
    NoEntry: { type: Boolean, default: false },
    Play: { type: Boolean, default: false },
    onClick: Function
  },
  setup(__props) {
    const store = useMainStore();
    const props = __props;
    const linkEl = ref(null);
    let chars = [];
    let timeline = null;
    let scrollTrigger = null;
    const effectTimeline = (targetEl) => {
      const tl = gsap.timeline({ paused: true });
      const split = Splitting()[0];
      chars = (split == null ? void 0 : split.chars) || [];
      if (!chars.length) return null;
      tl.fromTo(
        chars,
        {
          x: () => gsap.utils.random(-50, 50),
          y: () => gsap.utils.random(-40, 0),
          autoAlpha: 0
        },
        {
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: "power3.out",
          duration: 0.5,
          stagger: {
            amount: 0.2,
            from: "random"
          }
        }
      );
      return tl;
    };
    async function initLinkAnimation() {
      await nextTick();
      if (!linkEl.value || store.reduceMotion || props.NoEntry) return;
      timeline = effectTimeline(linkEl.value);
      if (!timeline || props.NoEntry) return;
      scrollTrigger = ScrollTrigger.create({
        trigger: linkEl.value,
        start: "top 80%",
        end: "bottom top",
        onEnter: () => timeline.timeScale(1).play(),
        onLeaveBack: () => timeline.timeScale(2).reverse()
      });
    }
    watch(
      () => store.ready,
      async (ready) => {
        if (!ready || store.reduceMotion) return;
        await initLinkAnimation();
      },
      { immediate: true }
    );
    watch(
      () => props.Play,
      async (play) => {
        if (!play || !timeline || store.reduceMotion) return;
        timeline == null ? void 0 : timeline.timeScale(1).play();
      },
      { immediate: true }
    );
    watch(
      () => store.reduceMotion,
      async (rm) => {
        await nextTick();
        if (!rm) {
          await initLinkAnimation();
        } else {
          timeline == null ? void 0 : timeline.kill();
          scrollTrigger == null ? void 0 : scrollTrigger.kill();
          timeline = null;
          scrollTrigger = null;
          if (chars.length) {
            gsap.to(
              chars,
              {
                x: 0,
                y: 0,
                autoAlpha: 1,
                clearProps: "all",
                duration: 0
              }
            );
            chars = [];
          }
          if (linkEl.value) gsap.set(linkEl.value, { clearProps: "all" });
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.href,
        target: __props.target,
        rel: "noopener noreferrer",
        class: "inline-block font-bold transition-all duration-700 animated-link font-heading group overflow-clip motionless:duration-50 motionless:hover:text-accent active:text-electric-purple",
        ref_key: "linkEl",
        ref: linkEl,
        "aria-label": __props.text
      }, _attrs))} data-v-f3dc30ef><span class="nav-item flex motionless:**:**:inline motionless:**:**:visible **:**:inline-flex justify-center md:justify-start motionless:group-hover:text-current motionless:lg:duration-700" data-v-f3dc30ef>${(_a = __props.text) != null ? _a : ""}</span></a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Links.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Links = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f3dc30ef"]]);

export { Links as L };
//# sourceMappingURL=Links-B2nH_Kss.mjs.map
