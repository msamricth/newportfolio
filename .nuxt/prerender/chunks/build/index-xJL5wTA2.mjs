import { mergeProps, shallowRef, watch, nextTick, computed, toValue, watchEffect, getCurrentInstance, getCurrentScope, onScopeDispose, hasInjectionContext, unref, inject, ref, useSSRContext } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/server-renderer/index.mjs';
import gsap from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/gsap/dist/gsap.js';
import { S as ScrollTrigger, c as Splitting } from './Footer-TWd70w3k.mjs';
import { a as useMainStore } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-CHu_jgWj.mjs';

const _sfc_main$1 = {
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
      }, _attrs))} data-v-c976bf8f><span class="nav-item flex motionless:**:**:inline motionless:**:**:visible **:**:inline-flex justify-center md:justify-start motionless:group-hover:text-current motionless:lg:duration-700" data-v-c976bf8f>${(_a = __props.text) != null ? _a : ""}</span></a>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Links.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Links = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c976bf8f"]]);
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
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
const injectLocal = (...args) => {
  var _a;
  const key = args[0];
  const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
  if (instance == null && !hasInjectionContext())
    throw new Error("injectLocal must be called in setup");
  if (instance && localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance))
    return localProvidedStateMap.get(instance)[key];
  return inject(...args);
};
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
function useMounted() {
  const isMounted = shallowRef(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
const ssrWidthSymbol = Symbol("vueuse-ssr-width");
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow, ssrWidth = useSSRWidth() } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      const queryStrings = toValue(query).split(",");
      matches.value = queryStrings.some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) {
          res = ssrWidth >= pxValue(minWidth[1]);
        }
        if (maxWidth && res) {
          res = ssrWidth <= pxValue(maxWidth[1]);
        }
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value)
      return;
    mediaQuery.value = window2.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches.value);
}
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true,
    type = "inner"
  } = options;
  const width = shallowRef(initialWidth);
  const height = shallowRef(initialHeight);
  const update = () => {
    if (window2) {
      if (type === "outer") {
        width.value = window2.outerWidth;
        height.value = window2.outerHeight;
      } else if (type === "visual" && window2.visualViewport) {
        const { width: visualViewportWidth, height: visualViewportHeight, scale } = window2.visualViewport;
        width.value = Math.round(visualViewportWidth * scale);
        height.value = Math.round(visualViewportHeight * scale);
      } else if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  const listenerOptions = { passive: true };
  useEventListener("resize", update, listenerOptions);
  if (window2 && type === "visual" && window2.visualViewport) {
    useEventListener(window2.visualViewport, "resize", update, listenerOptions);
  }
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}

export { Links as L, _sfc_main as _, useWindowSize as u };
//# sourceMappingURL=index-xJL5wTA2.mjs.map
