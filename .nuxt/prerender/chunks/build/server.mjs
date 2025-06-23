import { mergeProps, defineComponent, shallowRef, h, resolveComponent, ref, withCtx, createBlock, createVNode, openBlock, hasInjectionContext, getCurrentInstance, inject, watch, nextTick, createTextVNode, toDisplayString, computed, unref, createElementBlock, provide, cloneVNode, Suspense, Fragment, useSSRContext, createApp, shallowReactive, reactive, toRef, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, effectScope, isReadonly, isRef, isShallow, isReactive, toRaw, getCurrentScope } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import { $fetch } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ofetch/dist/node.mjs';
import { e as baseURL } from '../_/nitro.mjs';
import { createHooks } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unctx/dist/index.mjs';
import { sanitizeStatusCode, createError as createError$1, appendHeader } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/h3/dist/index.mjs';
import { defineStore, createPinia, setActivePinia, shouldHydrate } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pinia/dist/pinia.prod.cjs';
import defu$1, { defu } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/defu/dist/defu.mjs';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-router/dist/vue-router.node.mjs';
import { toRouteMatcher, createRouter as createRouter$1 } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/radix3/dist/index.mjs';
import { parseQuery, hasProtocol, isScriptProtocol, joinURL, withQuery, withTrailingSlash, withoutTrailingSlash } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ufo/dist/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderSuspense, ssrRenderVNode } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/server-renderer/index.mjs';
import gsap from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/gsap/dist/gsap.js';
import { u as useHead$1, a as useSeoMeta$1, h as headSymbol } from '../_/renderer.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/consola/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/devalue/index.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.17.4";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
const definePayloadPlugin = defineNuxtPlugin;
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance || (nuxtAppInstance = getNuxtAppCtx(id).tryUse());
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to || (to = "/");
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value || (error2.value = nuxtError);
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useSeoMeta$1(input, { head, ...options });
  }
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher2 = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher2.matchAll(path).reverse());
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const payloadPlugin = definePayloadPlugin(() => {
  definePayloadReducer(
    "skipHydrate",
    // We need to return something truthy to be treated as a match
    (data) => !shouldHydrate(data) && 1
  );
});
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
const __nuxt_page_meta = { prerender: true };
const _routes = [
  {
    name: "About",
    path: "/About",
    component: () => import('./About-DqZjj2sP.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-Z5JnIhrT.mjs')
  },
  {
    name: "work-glt",
    path: "/work/glt",
    meta: __nuxt_page_meta || {},
    component: () => import('./glt-BJAa02Sj.mjs')
  },
  {
    name: "work",
    path: "/work",
    component: () => import('./index-CJS5_btM.mjs')
  }
];
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    let position = savedPosition || void 0;
    if (!position && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      if (from === START_LOCATION) {
        resolve(_calculatePosition(to, "instant", position));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, "instant", position)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, scrollBehaviorType, position) {
  if (position) {
    return position;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: scrollBehaviorType
    };
  }
  return { left: 0, top: 0, behavior: scrollBehaviorType };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware || (nuxtApp._middleware = {
      global: [],
      named: {}
    });
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      var _a;
      if (mounted.value) {
        const vnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp) {
  var _a;
  nuxtApp || (nuxtApp = useNuxtApp());
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function prerenderRoutes(path) {
  const paths = toArray(path);
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a;
      const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link == null ? void 0 : link.isActive) ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link == null ? void 0 : link.isExactActive) ?? computed(() => to.value === router.currentRoute.value.path),
      route: (link == null ? void 0 : link.route) ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
    // }) as unknown as DefineComponent<NuxtLinkProps, object, object, ComputedOptions, MethodOptions, object, object, EmitsOptions, string, object, NuxtLinkProps, object, SlotsType<NuxtLinkSlots>>
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    const stack = (_b = (_a = useRequestEvent()) == null ? void 0 : _a.context) == null ? void 0 : _b.siteConfig;
    const state = useState("site-config");
    {
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = stack == null ? void 0 : stack.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = toRaw(pinia.state.value);
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
let routes;
let _routeRulesMatcher = void 0;
const prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk = /* @__PURE__ */ defineNuxtPlugin(async () => {
  let __temp, __restore;
  if (routes && !routes.length) {
    return;
  }
  const routeRules = (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules;
  if (routeRules && Object.values(routeRules).some((r) => r.prerender)) {
    _routeRulesMatcher = toRouteMatcher(createRouter$1({ routes: routeRules }));
  }
  routes || (routes = Array.from(processRoutes(([__temp, __restore] = executeAsync(() => {
    var _a;
    return (_a = routerOptions.routes) == null ? void 0 : _a.call(routerOptions, _routes);
  }), __temp = await __temp, __restore(), __temp) ?? _routes)));
  const batch = routes.splice(0, 10);
  prerenderRoutes(batch);
});
const OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function shouldPrerender(path) {
  return !_routeRulesMatcher || defu$1({}, ..._routeRulesMatcher.matchAll(path).reverse()).prerender;
}
function processRoutes(routes2, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
  var _a;
  for (const route of routes2) {
    if (OPTIONAL_PARAM_RE.test(route.path) && !((_a = route.children) == null ? void 0 : _a.length) && shouldPrerender(currentPath)) {
      routesToPrerender.add(currentPath);
    }
    if (route.path.includes(":")) {
      continue;
    }
    const fullPath = joinURL(currentPath, route.path);
    if (shouldPrerender(fullPath)) {
      routesToPrerender.add(fullPath);
    }
    if (route.children) {
      processRoutes(route.children, fullPath, routesToPrerender);
    }
  }
  return routesToPrerender;
}
const plugins = [
  payloadPlugin,
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk
];
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const useMainStore = defineStore("main", {
  state: () => ({
    sticky: true,
    darkMode: "clear",
    useMode: false,
    sliderArrowSticky: false,
    sliderTimeline: "before",
    fold: false,
    navOpen: false,
    reduceMotion: false,
    loaded: false,
    ready: false,
    returning: false,
    showBooking: true
  }),
  getters: {
    isDark: (state) => state.darkMode === "dark",
    arrowPos: (state) => state.sliderTimeline === "before",
    isSticky: (state) => state.sticky === true,
    toggleIcon: (state) => {
      return state.darkMode === "dark" ? '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z" fill="current"/></svg>' : '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><circle cx="12" cy="12" fill="current" r="5"/><path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" fill="current"/><path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" fill="current"/><path d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z" fill="current"/><path d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z" fill="current"/><path d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z" fill="current"/><path d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z" fill="current"/><path d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z" fill="current"/><path d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z" fill="current"/></svg>';
    }
  },
  actions: {
    setSliderArrowSticky(value) {
      this.sliderArrowSticky = value;
    },
    setSticky(value) {
      this.sticky = value;
    },
    setsliderTimeline(value) {
      this.sliderTimeline = value;
    },
    toggleSliderArrowSticky() {
      this.sliderArrowSticky = !this.sliderArrowSticky;
    },
    setupStateManagement() {
      const storedUseMode = localStorage.getItem("useLightMode");
      const storedHideBooking = localStorage.getItem("showBooking");
      this.useMode = storedUseMode === "true";
      const stored = localStorage.getItem("theme");
      if (localStorage.getItem("visited") === null) {
        localStorage.setItem("visited", "true");
      } else {
        this.returning = true;
      }
      if (storedHideBooking) {
        this.showBooking = false;
        this.returning = false;
      }
      if (!this.useMode) {
        this.darkMode = "clear";
        (void 0).body.classList.remove("dark");
        return;
      }
      this.darkMode = stored === "dark" ? "dark" : "light";
      (void 0).body.classList.toggle("dark", this.darkMode === "dark");
    },
    hideBooking() {
      localStorage.setItem("showBooking", "false");
      setTimeout(() => {
        this.showBooking = false;
      }, 800);
    },
    toggleTheme(value) {
      if (!this.useMode) {
        this.darkMode = "clear";
        (void 0).body.classList.remove("dark");
        localStorage.setItem("theme", "clear");
        return;
      }
      this.darkMode = value ? "dark" : "light";
      localStorage.setItem("theme", this.darkMode);
      (void 0).body.classList.toggle("dark", value);
    },
    toggleUseMode() {
      this.useMode = !this.useMode;
      localStorage.setItem("useLightMode", this.useMode);
    },
    toggleReduceMotion(value) {
      console.log(value);
      this.reduceMotion = value;
      localStorage.setItem("reduceMotion", this.reduceMotion);
      (void 0).body.classList.toggle("motionless", value);
    },
    initReduceMotion() {
      const stored = localStorage.getItem("reduceMotion");
      const mql = (void 0).matchMedia("(prefers-reduced-motion: reduce)");
      if (stored) {
        this.reduceMotion = stored;
        return;
      }
      this.reduceMotion = mql.matches;
      mql.addEventListener("change", (e) => {
        this.reduceMotion = e.matches;
      });
      (void 0).body.classList.toggle("motionless", this.reduceMotion);
    },
    openNav() {
      this.navOpen = true;
    },
    closeNav() {
      this.navOpen = false;
    },
    toggleFold(force = false, clear = null) {
      if (this.useMode) return;
      if (clear) {
        this.fold = false;
        (void 0).body.classList.remove("dark");
        return;
      }
      if (force) {
        this.fold = true;
        (void 0).body.classList.add("dark");
        return;
      }
      this.fold = !this.fold;
      if (this.fold) {
        (void 0).body.classList.add("dark");
      } else {
        (void 0).body.classList.remove("dark");
      }
    }
  }
});
const _sfc_main$e = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap2 } = useNuxtApp();
    useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("App.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "Tooltips",
  __ssrInlineRender: true,
  props: {
    message: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "opacity-0 group-hover:opacity-100 tooltip shadow-lg p-1 bg-slate-600 text-xs rounded-sm text-white absolute text-nowrap -translate-x-[50%] left-[50%] transition-all translate-y-2 duration-700 group-hover:translate-y-0" }, _attrs))}>${ssrInterpolate(__props.message)}</div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/buttons/Tooltips.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
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
        class: "group-hover/secondaryNav:opacity-40 text-primary/80 dark:text-background/80 dark:group-has-[a]/footer:text-primary/80 group-hover/secondaryNav:hover:opacity-100 cursor-pointer group icon-btn rounded-full h-8 w-8 transition-all duration-700",
        "aria-label": __props.aria,
        target: "_blank",
        href: __props.url
      }, _attrs))}><svg fill="none" height="56" stroke-width="1.5" viewBox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg" class="group-hover/secondaryNav:opacity-80 absolute top-0 left-0 w-full h-full z-0 transition-all duration-700 group-hover:scale-[1.25]"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" class="icon-wipe-overlay absolute top-0 left-0 w-full h-full z-10 pointer-events-none text-accent group-hover:bg-deep-purple rounded-[6rem] transition-all duration-700 group-hover:scale-[1.25]"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
      _push(ssrRenderComponent(_sfc_main$d, {
        class: "mt-11",
        message: "View my GitHub account"
      }, null, _parent));
      _push(`</a>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/buttons/Github.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
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
        class: "group-hover/secondaryNav:opacity-40 text-primary/80 inverted:text-background/80 dark:group-has-[a]/footer:text-primary/80 dark:text-background/80 group-hover/secondaryNav:hover:opacity-100 cursor-pointer group icon-btn rounded-full h-8 w-8 transition-all duration-700",
        "aria-label": __props.aria,
        target: "_blank",
        href: __props.url
      }, _attrs))}><svg class="group-hover/secondaryNav:opacity-80 absolute top-0 left-0 w-full h-full z-0 transition-all group-hover:scale-[1.25] duration-700" stroke-width="1.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2792 8.73516C16.3984 8.73516 17.4717 9.17973 18.263 9.97108C19.0544 10.7624 19.4989 11.8357 19.4989 12.9549V17.8778H16.6858V12.9549C16.6858 12.5818 16.5376 12.224 16.2738 11.9603C16.0101 11.6965 15.6523 11.5483 15.2792 11.5483C14.9062 11.5483 14.5484 11.6965 14.2847 11.9603C14.0209 12.224 13.8727 12.5818 13.8727 12.9549V17.8778H11.0595V12.9549C11.0595 11.8357 11.5041 10.7624 12.2955 9.97108C13.0868 9.17973 14.1601 8.73516 15.2792 8.73516Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.43329 9.43844H8.24642V17.8778H5.43329V9.43844Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.83985 7.32859C7.21289 7.32859 7.57066 7.1804 7.83444 6.91662C8.09822 6.65284 8.24642 6.29507 8.24642 5.92203C8.24642 5.54898 8.09822 5.19122 7.83444 4.92744C7.57066 4.66365 7.21289 4.51546 6.83985 4.51546C6.46681 4.51546 6.10904 4.66365 5.84526 4.92744C5.58148 5.19122 5.43329 5.54898 5.43329 5.92203C5.43329 6.29507 5.58148 6.65284 5.84526 6.91662C6.10904 7.1804 6.46681 7.32859 6.83985 7.32859Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.4447,11.9883
     a10.4564,10.4564 0 1,1 -20.9128,0
     a10.4564,10.4564 0 1,1 20.9128,0" stroke="currentColor" fill="none"></path></svg><svg class="icon-wipe-overlay absolute top-0 left-0 w-full h-full z-10 pointer-events-none text-accent group-hover:bg-deep-purple group-hover:scale-[1.25] rounded-[6rem] transition-all duration-700" stroke-width="1.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2792 8.73516C16.3984 8.73516 17.4717 9.17973 18.263 9.97108C19.0544 10.7624 19.4989 11.8357 19.4989 12.9549V17.8778H16.6858V12.9549C16.6858 12.5818 16.5376 12.224 16.2738 11.9603C16.0101 11.6965 15.6523 11.5483 15.2792 11.5483C14.9062 11.5483 14.5484 11.6965 14.2847 11.9603C14.0209 12.224 13.8727 12.5818 13.8727 12.9549V17.8778H11.0595V12.9549C11.0595 11.8357 11.5041 10.7624 12.2955 9.97108C13.0868 9.17973 14.1601 8.73516 15.2792 8.73516Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.43329 9.43844H8.24642V17.8778H5.43329V9.43844Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.83985 7.32859C7.21289 7.32859 7.57066 7.1804 7.83444 6.91662C8.09822 6.65284 8.24642 6.29507 8.24642 5.92203C8.24642 5.54898 8.09822 5.19122 7.83444 4.92744C7.57066 4.66365 7.21289 4.51546 6.83985 4.51546C6.46681 4.51546 6.10904 4.66365 5.84526 4.92744C5.58148 5.19122 5.43329 5.54898 5.43329 5.92203C5.43329 6.29507 5.58148 6.65284 5.84526 6.91662C6.10904 7.1804 6.46681 7.32859 6.83985 7.32859Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.4447,11.9883
     a10.4564,10.4564 0 1,1 -20.9128,0
     a10.4564,10.4564 0 1,1 20.9128,0" stroke="currentColor" fill="none"></path></svg>`);
      _push(ssrRenderComponent(_sfc_main$d, {
        class: "mt-11",
        message: "View my LinkIn account"
      }, null, _parent));
      _push(`</a>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/buttons/LinkedIn.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Icons",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$c, {
        class: "animate subtle-slide-in",
        aria: "Emm's Github account",
        style: { "--theme-main-animation-delay": "0.5s" },
        url: "https://github.com/msamricth"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, {
        class: "animate subtle-slide-in",
        aria: "Emm's Linkedin account",
        style: { "--theme-main-animation-delay": "0.6s" },
        url: "https://www.linkedin.com/in/emmtalarico/"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/Icons.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Mode",
  __ssrInlineRender: true,
  props: {
    footer: { type: Boolean }
  },
  setup(__props) {
    const store = useMainStore();
    const sunVisible = computed(
      () => store.useMode && !store.isDark || !store.useMode && !store.fold
    );
    const moonVisible = computed(
      () => store.useMode && store.isDark || !store.useMode && store.fold
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: "inline-flex items-start cursor-pointer group max-md:scale-[1.2] mt-0.5 mx-1 md:mx-0 group-hover/secondaryNav:opacity-80 transition-opacity duration-700 group-hover/secondaryNav:hover:opacity-100 animate subtle-slide-in",
        for: __props.footer ? "mode-footer" : "mode"
      }, _attrs))}><button style="${ssrRenderStyle({ "--theme-main-animation-delay": "0.1s" })}" class="${ssrRenderClass([{ "scale-140": !unref(store).useMode }, "text-xl font-medium animate subtle-slide-in block relative cursor-pointer group-icon transition-all group"])}"><svg width="1.6rem" class="${ssrRenderClass([moonVisible.value ? "opacity-100" : "opacity-0 duration-0", "group-hover:text-accent transition-all"])}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z" fill="currentColor"></path></svg><svg width="1.6rem" class="${ssrRenderClass([sunVisible.value ? "opacity-100" : "opacity-0 duration-0", "group-hover:text-accent group-hover:rotate-450 transition absolute top-0"])}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><circle cx="12" cy="12" fill="currentColor" r="5"></circle><path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" fill="currentColor"></path><path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" fill="currentColor"></path><path d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z" fill="currentColor"></path><path d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z" fill="currentColor"></path><path d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z" fill="currentColor"></path><path d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z" fill="currentColor"></path><path d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z" fill="currentColor"></path><path d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z" fill="currentColor"></path></svg>`);
      if (!unref(store).useMode) {
        _push(ssrRenderComponent(_sfc_main$d, {
          message: "Change light/dark mode",
          class: "scale-70"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button><span class="sr-only">Dark Mode</span><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(unref(store).isDark) ? " checked" : ""}${ssrRenderAttr("name", __props.footer ? "mode-footer" : "mode")}${ssrRenderAttr("id", __props.footer ? "mode-footer" : "mode")}>`);
      if (unref(store).useMode) {
        _push(`<div class="ms-3 relative w-11 h-6 bg-primary/60 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent inverted:peer-focus:ring-accent dark:peer-focus:ring-accent rounded-full peer inverted:bg-gray-700 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:start-[2px] after:bg-accent after:border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all inverted:border-gray-600 dark:border-gray-600 peer-checked:bg-border inverted:peer-checked:bg-border dark:peer-checked:bg-border animate swing-in-left-fwd-slow" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0.3s" })}"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(store).useMode) {
        _push(ssrRenderComponent(_sfc_main$d, {
          message: `Change ${unref(store).darkMode} mode`,
          class: "mt-10"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/Mode.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {
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
          class: ["animate group-hover/secondaryNav:opacity-80 text-current/80 relative cursor-pointer transition group/menu rounded-full subtle-slide-in hamburger hamburger--arrowturn-r flex flex-col justify-center duration-700 group", menuBTNActive.value ? "is-active **:text-accent" : ""],
          "aria-label": "Go to menu",
          style: { "--theme-main-animation-delay": "0.7s" }
        }, _attrs))} data-v-ad68b8a7><div class="hamburger-box text-current transition-all duration-700 **:transition-all **:duration-700 md:group-hover:text-accent" data-v-ad68b8a7><div class="hamburger-inner text-current **:transition-all **:duration-700" data-v-ad68b8a7></div></div>`);
        _push(ssrRenderComponent(_sfc_main$d, {
          class: "mt-20 text-white",
          message: "Scroll to navigation"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/Hamburger.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Hamburger = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-ad68b8a7"]]);
const _sfc_main$7 = {
  __name: "InnerSecondaryNav",
  __ssrInlineRender: true,
  props: {
    footer: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "secondary-nav group/secondaryNav max-w-1440 px-0 md:px-12 flex justify-end items-center relative gap-8 md:gap-6 dark:text-background inverted:text-background text-primary" }, _attrs))} data-v-9ec407c2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "aria-label": "Return Home",
        to: "/",
        class: "group relative block w-10 h-10 md:w-8 md:h-8 mr-auto transition-all duration-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="absolute inset-0 stroke-current group-hover:scale-[1.25] transition-all duration-700" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ec407c2${_scopeId}><polyline points="112 352 48 288 112 224" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-9ec407c2${_scopeId}></polyline><path d="M64,288H358c58.76,0,106-49.33,106-108V160" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-9ec407c2${_scopeId}></path></svg><svg class="absolute inset-0 stroke-current text-accent transition-all duration-700 ease-in-out stroke-animate group-hover:scale-[1.28]" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ec407c2${_scopeId}><polyline points="112 352 48 288 112 224" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-9ec407c2${_scopeId}></polyline><path d="M64,288H358c58.76,0,106-49.33,106-108V160" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" data-v-9ec407c2${_scopeId}></path></svg>`);
            _push2(ssrRenderComponent(_sfc_main$d, {
              class: "mt-10",
              message: "Return Home"
            }, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "absolute inset-0 stroke-current group-hover:scale-[1.25] transition-all duration-700",
                viewBox: "0 0 512 512",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("polyline", {
                  points: "112 352 48 288 112 224",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "32"
                }),
                createVNode("path", {
                  d: "M64,288H358c58.76,0,106-49.33,106-108V160",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "32"
                })
              ])),
              (openBlock(), createBlock("svg", {
                class: "absolute inset-0 stroke-current text-accent transition-all duration-700 ease-in-out stroke-animate group-hover:scale-[1.28]",
                viewBox: "0 0 512 512",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("polyline", {
                  points: "112 352 48 288 112 224",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "32"
                }),
                createVNode("path", {
                  d: "M64,288H358c58.76,0,106-49.33,106-108V160",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "32"
                })
              ])),
              createVNode(_sfc_main$d, {
                class: "mt-10",
                message: "Return Home"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(ssrRenderComponent(Hamburger, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/InnerSecondaryNav.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const InnerSecondaryNav = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-9ec407c2"]]);
let Splitting = () => [];
const _sfc_main$6 = {
  __name: "InnerNav",
  __ssrInlineRender: true,
  props: {
    title: { type: String, default: () => "Something" },
    brandLabel: { type: String, default: () => "hi, i'm Emm." },
    brandURL: { type: String, default: () => "/" },
    topStacked: { type: Boolean, default: () => false }
  },
  setup(__props) {
    const mainStore = useMainStore();
    const nav = ref(null);
    const navContainer = ref(null);
    const navBrand = ref(null);
    const navBrandLink = ref(null);
    const heading = ref(null);
    ref(null);
    const isSticky = ref(false);
    const isDesktop = ref(false);
    ref(null);
    ref(false);
    let tl;
    function onBrandHoverIn(event) {
      const chars = event.target.querySelectorAll(".char");
      if (!chars.length) return;
      return gsap.fromTo(chars, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-40, 0),
        autoAlpha: 0
      }, {
        x: 0,
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.3, from: "random" }
      });
    }
    function onNavHoverIn(event) {
      const chars = event.target.querySelectorAll(".char");
      if (!chars.length) return;
      const tl2 = gsap.timeline();
      tl2.fromTo(chars, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-40, 0)
      }, {
        x: 0,
        y: 0,
        className: "char text-electric-purple dark:text-accent",
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.3, from: "random" }
      }).to(chars, {
        className: "char text-current",
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.3, from: "random" }
      }, 0.4);
    }
    function effectTimeline(el, interval = 0) {
      const split = Splitting()[0];
      const chars = (split == null ? void 0 : split.chars) || [];
      if (!chars.length) return;
      return gsap.timeline({ paused: true }).fromTo(chars, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-40, 0),
        autoAlpha: 0
      }, {
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
        duration: 0.5,
        stagger: { amount: 0.2, from: "random" }
      }, interval);
    }
    function updateStickyTimeline() {
      tl.clear();
      const scaleAmtCom = computed(() => isDesktop.value ? 0.2 : 0.4);
      const yCom = computed(() => isDesktop.value ? -28 : 0);
      const xCom = computed(() => isDesktop.value ? 130 : 0);
      const intCom = computed(() => isDesktop.value ? 0.2 : 0);
      const isReversed = tl.reversed();
      if (!nav.value || !heading.value || !navBrand.value) return;
      const scaleAmt = scaleAmtCom.value;
      const y = yCom.value;
      xCom.value;
      const int = intCom.value;
      tl.fromTo(nav.value, { alpha: 0 }, { alpha: 1 }, 0);
      tl.fromTo(heading.value, { scale: 1, y: 0 }, { scale: scaleAmt, y, duration: 0.1 }, int);
      if (isDesktop.value) {
        const xAmt = navBrand.value.getBoundingClientRect().width + 12;
        tl.fromTo(heading.value, { x: 0 }, { x: xAmt, duration: 0.3 }, int);
      }
      tl.fromTo(navBrand.value, { alpha: 0, y: 0 }, {
        alpha: 1,
        y: isDesktop.value ? 0 : -10,
        duration: isReversed ? 0 : 0.2
      }, int);
      tl.call(() => {
        const brandTL = effectTimeline(navBrand.value, 0.45);
        brandTL == null ? void 0 : brandTL.play();
      }, null, int);
      const navItems = nav.value.querySelectorAll(".nav-item");
      navItems.forEach((item, i) => {
        tl.fromTo(item, { autoAlpha: 0 }, {
          autoAlpha: 1,
          duration: 0.15,
          ease: "cubic-bezier(.215, .61, .355, 1.000)",
          onStart: () => {
            const itemTL = effectTimeline(item, i * 0.2 + (int + 0.2));
            itemTL == null ? void 0 : itemTL.play();
          }
        }, i * 0.1 + (int + 0.1));
      });
    }
    watch([isSticky, isDesktop], () => {
      updateStickyTimeline();
      if (isSticky.value) {
        tl.timeScale(1).restart();
      } else {
        tl.timeScale(3).reverse();
      }
    });
    watch(
      () => mainStore.navOpen,
      async (open) => {
        if (open && navContainer.value) {
          await nextTick();
          const el = navContainer.value;
          const buffer = 200;
          const startY = (void 0).scrollY;
          const targetY = el.getBoundingClientRect().top + startY + buffer;
          (void 0).scrollTo({ top: targetY, behavior: "smooth" });
          mainStore.closeNav();
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav-wrapper" }, _attrs))} data-v-a3543719><div data-v-a3543719></div><header id="nav" class="${ssrRenderClass([isSticky.value ? "fixed left-0 w-full bg-background/70 dark:bg-primary/70 inverted:bg-primary/70 inverted:dark:bg-background/70 backdrop-blur transition duration-700 z-90" : " absolute ", "py-4 mx-auto z-20 w-full will-change-transform transform-gpu"])}" data-v-a3543719><div class="nav-wrapper max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto flex items-center relative" data-v-a3543719><div class="${ssrRenderClass([isSticky.value ? "opacity-75 duration-700 hover:opacity-100" : "opacity-0 duration-0", "text-primary dark:text-background inverted:text-background inverted:dark:text-primary nav-brand transition-all relative max-sm:z-10"])}" data-v-a3543719>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        ref_key: "navBrandLink",
        ref: navBrandLink,
        "aria-label": "Return Home",
        to: __props.brandURL,
        class: "navbrand-link animate subtle-slide-in pb-10 md:pb-0 max-sm:z-0 text-nowrap",
        onMouseenter: onBrandHoverIn
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.brandLabel)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.brandLabel), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="placeholder-line absolute left-8 lg:left-12 transition-all headingClass top-0 text-3xl md:text-5xl text-nowrap" data-splitting="words" data-v-a3543719><span class="transition-all duration-700 placeholder-line text-primary dark:text-background inverted:text-background opacity-0" data-splitting="words" data-v-a3543719>${ssrInterpolate(__props.title)}</span></h1><nav class="${ssrRenderClass([isSticky.value ? [""] : ["opacity-0"], "flex space-x-8 text-sm font-heading font-semibold group/nav ml-auto text-primary dark:text-background inverted:text-background inverted:dark:text-primary"])}" data-v-a3543719>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700",
        to: "/about",
        "aria-label": "Find out more about me!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-item" data-v-a3543719${_scopeId}>about</span>`);
          } else {
            return [
              createVNode("span", {
                class: "nav-item",
                onMouseenter: onNavHoverIn
              }, "about", 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700",
        to: "/work/",
        "aria-label": "View my featured work!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-item" data-v-a3543719${_scopeId}>work</span>`);
          } else {
            return [
              createVNode("span", {
                class: "nav-item",
                onMouseenter: onNavHoverIn
              }, "work", 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#sayHello" class="group-hover/nav:opacity-70 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700" aria-label="Send me a message!" data-v-a3543719><span class="nav-item" data-v-a3543719>say hello</span></a></nav></div></header></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/InnerNav.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const InnerNav = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-a3543719"]]);
const _sfc_main$5 = {
  __name: "PrimaryBTN",
  __ssrInlineRender: true,
  props: {
    href: String,
    label: String,
    target: String,
    delay: {
      type: String,
      default: "0.7s"
    },
    onClick: Function
  },
  setup(__props) {
    const buttonEl = ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.href,
        ref_key: "buttonEl",
        ref: buttonEl,
        role: "button",
        class: "relative flex flex-col items-center justify-center overflow-visible font-black transition-colors duration-700 cursor-pointer w-65 h-21 group/cta",
        "aria-label": __props.label
      }, _attrs))}><span class="flex gap-0.5 w-55 justify-center relative z-20" id="label">${ssrInterpolate(__props.label)}</span><svg viewBox="0 0 326 82" class="absolute w-full overflow-visible"><path id="mainPath" fill="none" stroke="currentColor" stroke-width="4" d="M0 41C0 18.3563 18.3563 0 41 0H285C307.644 0 326 18.3563 326 41C326 63.6437 307.644 82 285 82H41C18.3563 82 0 63.6437 0 41Z"></path><g class="absolute right-0 z-10 overflow-hidden w-18"><path id="tailPath" class="opacity-0 fill-current" d="M0 41C0 18.3563 18.3563 0 41 0H285C307.644 0 326 18.3563 326 41C326 63.6437 307.644 82 285 82H41C18.3563 82 0 63.6437 0 41Z"></path></g></svg></a>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/buttons/PrimaryBTN.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    useMainStore();
    const formButton = ref(null);
    const container = ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const nameError = ref(null);
    const emailError = ref(null);
    const messageError = ref(null);
    const formRef = ref(null);
    const formDataValues = reactive({
      name: "",
      email: "",
      message: "",
      hpField: ""
    });
    const submitted = ref(false);
    const error = ref("");
    async function submitForm() {
      if (!formDataValues.name || !formDataValues.email || !formDataValues.message) {
        nameError.value = computed(() => !formDataValues.name);
        emailError.value = computed(() => !formDataValues.email);
        messageError.value = computed(() => !formDataValues.message);
        error.value = "*Please fill in all required fields.";
        return;
      }
      if (formDataValues.hpField) {
        error.value = "No Robots!";
        console.warn("Bot detected.");
        return;
      }
      const formData = new FormData(formRef.value);
      try {
        const response = await fetch("https://usebasin.com/f/53cc1ac22741", {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: formData
        });
        if (response.status === 200) {
          submitted.value = true;
        } else {
          error.value = "There was an error submitting the form. Please try again.";
          console.error("Form submission failed with status:", response.status);
        }
      } catch (err) {
        error.value = "An unexpected error occurred.";
        console.error("Error submitting form:", err);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        "aria-labelledby": "formHeader",
        id: "sayHello",
        tabindex: "0",
        class: "relative items-center w-full min-h-screen mx-auto mb-2 form-wrapper text-primary dark:text-accent inverted:text-electric-purple mt-25 md:mt-28"
      }, _attrs))} data-v-ee8e4adf><div class="h-full flex items-center sticky top-45 justify-center mx-auto pb-12 mb-4 lg:mb-8 px-6 flex-col max-w-[778px] relative xl:pb-24 xl:pb-16" data-v-ee8e4adf><h3 data-splitting="words" id="formHeader" class="${ssrRenderClass([submitted.value ? "blur-sm" : "", "mb-6 text-4xl font-black text-center uppercase transition-all lg:mb-12 form-header placeholder-line"])}" data-v-ee8e4adf>Lets get in touch!</h3>`);
      if (submitted.value) {
        _push(`<div class="absolute z-30 pt-16 text-center fade-up" id="thanks" data-v-ee8e4adf><h4 class="mb-2 text-3xl font-bold text-yellow" data-v-ee8e4adf>Message sent!</h4><p class="text-white" data-v-ee8e4adf>We&#39;ll be in touch, thanks! </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form novalidate class="${ssrRenderClass([submitted.value ? "blur-md opacity-25" : "", "flex flex-col w-full gap-6 px-2 transition-all text-electric-purple dark:text-accent inverted:text-electric-purple"])}" data-v-ee8e4adf>`);
      if (error.value) {
        _push(`<div class="mb-2 text-sm text-electric-purple" data-v-ee8e4adf>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-wrap w-full" data-v-ee8e4adf><div class="relative w-1/2 pr-4" data-v-ee8e4adf><label class="sr-only focus:not-sr-only" tabindex="0" for="name" data-v-ee8e4adf> Name </label><input type="text" placeholder="Name" id="name" name="name"${ssrRenderAttr("value", formDataValues.name)} class="${ssrRenderClass([{ "border-b border-yellow": nameError.value }, "w-full outline-0 h-12 pb-2 p border-current border rounded-[6rem] pl-6 py-[10px] pr-3 outline-none transition-all active:border-green disabled:cursor-default disabled:bg-gray-2 text-xl focus:border-green bg-transparent text-electric-purple dark:text-accent inverted:text-electric-purple placeholder:text-electric-purple/60 focus:placeholder:text-electric-purple dark:placeholder:text-accent/60 dark:focus:placeholder:text-accent inverted:placeholder:text-electric-purple/60 inverted:focus:placeholder:text-electric-purple"])}" data-v-ee8e4adf></div><div class="w-1/2" data-v-ee8e4adf><label for="email" class="sr-only focus:not-sr-only" tabindex="0" data-v-ee8e4adf> Email </label><input type="email" id="email" placeholder="Email" name="email"${ssrRenderAttr("value", formDataValues.email)} required class="${ssrRenderClass([{ "border-b border-yellow": emailError.value }, "w-full outline-0 h-12 pb-2 p bg-transparent border-current border rounded-[6rem] pl-6 py-[10px] pr-3 outline-none transition-all active:border-green disabled:cursor-default disabled:bg-gray-2 text-xl focus:border-green text-electric-purple dark:text-accent inverted:text-electric-purple placeholder:text-electric-purple/60 focus:placeholder:text-electric-purple dark:placeholder:text-accent/60 dark:focus:placeholder:text-accent inverted:placeholder:text-electric-purple/60 inverted:focus:placeholder:text-electric-purple"])}" data-v-ee8e4adf></div></div><label for="message" class="sr-only focus:not-sr-only" tabindex="0" data-v-ee8e4adf> Type your message </label><textarea class="${ssrRenderClass([{ "border-b border-yellow": messageError.value }, "placeholder:text-current/60 focus:placeholder:text-current outline-0 h-22 pb-2 p bg-transparent border-current border rounded-[1rem] pl-6 py-6 text-electric-purple dark:text-accent inverted:text-electric-purple"])}" id="message" name="message" placeholder="Your message" required data-v-ee8e4adf>${ssrInterpolate(formDataValues.message)}</textarea><div class="hidden" data-v-ee8e4adf><input type="text" id="hpField" name="hpField"${ssrRenderAttr("value", formDataValues.hpField)} tabindex="-1" autocomplete="off" data-v-ee8e4adf></div><div data-v-ee8e4adf>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        type: "submit",
        class: "btn text-electric-purple dark:text-accent subtle-slide-in submit ms-auto",
        label: "Submit",
        onClick: () => submitForm(),
        delay: "0.7s",
        ref_key: "formButton",
        ref: formButton
      }, null, _parent));
      _push(`</div></form></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ee8e4adf"]]);
const _sfc_main$3 = {
  __name: "SecondaryNav",
  __ssrInlineRender: true,
  props: {
    footer: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "secondary-nav group/secondaryNav max-w-1440 px-0 md:px-12 flex justify-end items-center relative gap-8 md:gap-6 z-200" }, _attrs))} data-v-b86ce407>`);
      _push(ssrRenderComponent(_sfc_main$9, { footer: __props.footer }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(ssrRenderComponent(Hamburger, { footer: __props.footer }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/SecondaryNav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SecondaryNav = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b86ce407"]]);
const _sfc_main$2 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative py-6 bg-electric-purple inverted:bg-primary min-h-45 md:py-12 group/footer" }, _attrs))}><div class="utilties max-w-full px-8 md:px-0 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto">`);
      _push(ssrRenderComponent(SecondaryNav, {
        footer: true,
        class: "text-primary"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    useHead({
      titleTemplate: `${(_a = props.error) == null ? void 0 : _a.statusCode} | You can't park there!`,
      title: "Bridging good design & things that actually work",
      link: [
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }
      ],
      meta: [
        { name: "description", content: "Code artisan forging WordPress & Vue.js experiences by day, crafting dirt jumps & trails for bikes by night UX zeal meets mud and grit creativity." },
        { property: "og:title", content: "Building bridges between good design and things that actually work" },
        { property: "og:image", content: "https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto,w_960/v1745552050/Title_bjlnl8.png" }
      ]
    });
    const store = useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative transition duration-700 font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary overflow-x-clip" }, _attrs))}><div class="max-w-full mx-auto utilities pt-9 lg:pt-12 pb-18 lg:pb-20 px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto">`);
      _push(ssrRenderComponent(InnerSecondaryNav, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(InnerNav, {
        title: (_a2 = __props.error) == null ? void 0 : _a2.statusCode.toString(),
        brandLabel: "hi, i'm emm.",
        brandURL: "https://codeartisan.dev/"
      }, null, _parent));
      _push(`<div class="flex flex-col items-center justify-center w-full relative py-25 md:py-0 min-h-[80dvh] md:min-h-[60dvh] lg:min-h-[80dvh]"><div class="relative flex flex-col items-center w-full gap-4 overflow-x-clip h-134 md:h-84 md:flex-row md:gap-8 lg:gap-18 lg:h-134 2xl:h-230"><svg id="desert" class="relative z-0 order-2 max-w-2xl md:order-1 h-120 lg:max-w-4xl xl:w-3xl 2xl:w-1/2 lg:h-134 2xl:h-230" xmlns="http://www.w3.org/2000/svg" width="411" height="292" fill="none" viewBox="0 0 411 292"><mask id="a" width="412" height="292" x="0" y="0" fill="#000" maskUnits="userSpaceOnUse"><path fill="#fff" d="M0 0h412v292H0z"></path><path d="M290.513 252.751c.1.545-.149 1.15-.53 1.538-.515.528-1.148.422-1.79.201-.877-.299-1.351-1.118-.989-2.009.327-.798 1.273-1.368 2.132-1.078.614.21 1.086.691 1.177 1.348Zm-6.335-14.462c.015 0 .015.025 0 .025-.017 0-.017-.025 0-.025Zm3.566 3.882c-.201-.653-.017-2.164.871-2.226.727-.05 1.422.835 1.41 1.511-.002.754-.7 1.399-1.455 1.326-.367-.029-.708-.217-.826-.611Zm7.484-11.036c.182.498-.145 1.167-.605 1.402-.606.306-1.844-.272-1.711-1.043.054-.303.31-.527.575-.682.389-.226.948-.34 1.341-.139a.83.83 0 0 1 .4.462Zm12.138 18.43c-1.343.221-1.393-1.799-.095-1.781 1.109.015 1.124 1.623.095 1.781Zm-2.109-13.604c.408.773-.01 1.832-.741 2.255-1.051.609-1.885-.578-1.912-1.544-.021-.788.42-1.54 1.275-1.544a1.537 1.537 0 0 1 1.378.833Zm-5.41 6.971c-.25.559-1.024.991-1.593.605-.547-.367-.551-1.273-.276-1.803.698-1.223 2.478.058 1.869 1.198Zm-.567 7.885c.416.899-.188 2.499-1.331 2.415a1.187 1.187 0 0 1-1.126-1.014c-.084-.788.104-1.414.882-1.795.555-.272 1.277-.135 1.575.394Zm-1.6-41.251c.236-.205.551-.311.859-.295.443.025.809.328.861.774.015.126.017.259.004.391-.062.62-.432 1.229-1.115 1.261-1.205.06-1.372-1.466-.609-2.131Zm-2.761 11.67c-.778-.757-.765-2.85.69-2.629 1.146.222 1.401 1.569.815 2.434-.248.524-1.132.651-1.505.195Zm2.939-20.648c.369-.599 1.588-.744 2.128-.319.588.458.412 1.484.124 2.067-.112.23-.298.433-.542.503a1.157 1.157 0 0 1-.795-.055c-.799-.338-1.37-1.451-.915-2.196Zm-20.76 77.351c-1.296.235-2.755.454-4.069.367-.592-.037-1.041-.294-1.571-.524-.693-.299-1.38-.305-2.107-.471-.778-.174-.61-1.461.191-1.399.652.052 1.285-.184 1.935-.097.567.079 1.018.392 1.533.613 1.298.556 2.757.813 4.088 1.317.085.029.11.174 0 .194ZM283.371 239c-.669.182-.731-.695-.553-1.136a.626.626 0 0 1 .805-.5c.741.133.607 2.007-.252 1.636Zm8.202-33.655c-.05.77-.727 1.723-1.586 1.514-.486-.116-.763-.583-.813-1.055-.259-.863.06-1.982 1.08-2.05.346.029.644.147.876.371.323.308.47.777.443 1.22Zm-3.632 8.302c.231.319.173.786-.238.91-.371.158-.818.091-.938-.348-.341-.84.714-1.316 1.176-.562Zm50.089-99.654c.031.816.49 1.256-.038 1.76-2.392 1.33-2.125-12.972-1.479-16.693-2.879-4.558-.379-12.455.207-18.993.246-.632-.019-1.915.238-2.593.116-.305.548-.323.705-.037 1.472 2.665-.221 9.615-.498 13.977.13-.305.302-.591.529-.856 3.597-.813-1.123 16.323.336 23.435ZM204.379 260.944c-2.51 1.352-4.677 3.895-7.783 3.526-.472-.052-.499-.769 0-.754 2.208.068 3.977-1.555 5.687-2.745 1.128-.785 3.516-2.497 4.921-1.534.878.875-2.353 1.097-2.825 1.507ZM271.396 50.14c.201 10.553.104 20.726-.188 31.291.169 1-.814 1.293-1.186.58-.557-13.653-1.248-27.048-.78-40.687.018-.537.211-1.061.579-1.45 2.07-2.188 1.484 8.666 1.575 10.266ZM94.981 113.694c-.306 1.404-.062 2.971-.224 4.401-.13 1.169-.376 2.303-1.011 3.31-.534.842-.895 1.432-1.006 2.45-.085.755-.147 1.511-.232 2.268-.182 1.621-.346 3.24-.29 4.873.01.363-.513.344-.555 0-.209-1.855-.128-3.71-.076-5.572.04-1.343-.106-2.73.534-3.961.416-.802.869-1.513 1.064-2.415.32-1.876.08-4.05 1.579-5.48.087-.11.242.01.217.126Zm99.551 141.532c-.018 0-.018-.027 0-.027.015 0 .015.027 0 .027Zm113.325-133.798c-1.083 8.231.618 16.456.159 24.596-2.241 1.76-5.807-21.423.389-38.055 1.823-2.547-.677 9.821-.548 13.459Zm85.254 90.905c3.512-3.252 8.351 1.801 12.457.663-2.699 6.579-11.315 3.854-16.808 4.169-3.168.153-6.165 1.144-9.375 1.011-.84-.035-1.672-.155-2.51-.197-1.238-.016-3.531.382-3.792-1.223.079.021.517-.12.613-.143a62.809 62.809 0 0 1 5.519-1.177c2.016-.34 4.049-.477 6.066-.811.166-.029.168-.31 0-.337-3.835-.591-7.765.383-11.496 1.337 2.227-2.038 4.037-4.453 5.817-6.88 4.208-6.094 7.112-9.518 14.883-6.432 3.976 1.526 9.974 3.868 11.207 8.38-3.738 1.793-8.788-3.356-13.262.997-.743.744-.075 1.37.681.643Zm-23.377-63.208a58.787 58.787 0 0 0-3.593.584c.263-.049-.776-6.295-.875-6.873-.416-2.4-.484-4.913-.664-7.344-.363-4.9-.65-9.815-1.397-14.676-.507-3.295-1.418-6.587-1.731-9.906.667 1.748 1.673 3.058 3.008 4.498 1.84 1.984 3.669 3.974 5.157 6.242.981 1.502 1.85 3.101 2.374 4.823.602 7.446.381 14.947 1.105 22.378-1.107-.112-2.351.143-3.384.274Zm2.031 28.198c-1.849-2.336-4.202-4.28-5.648-6.908-1.838-3.344-2.24-7.193-3.065-10.86-.383-1.7-.88-3.362-1.395-5.022.14-.054.279-.11.42-.166a.485.485 0 0 0 .298.019c.952-.218 2.03-.069 3.017-.206a34.436 34.436 0 0 0 3.01-.561c1.421-.386 2.93-.809 4.395-.622-1.303 8.04-1.38 16.201-1.032 24.326Zm-136.796-71.731c.794-.956 1.798-1.634 2.707-2.467 3.679-3.416 4.288-10.35 4.681-15.146.064-1.474.122-2.954.126-4.43.002-1.301-.049-2.607.286-3.868 3.063 3.369.942 14.172-.139 18.38-1.086 5.211-5.027 8.065-9.609 10.136l.012-.599c.783-.506 1.342-1.293 1.936-2.006Zm-1.762-5.707c.011-.443.021-.885.033-1.324 4.367-4.096 3.494-16.99 7.327-19.369-1.122 3.584-.654 7.626-1.623 11.256-.966 4.137-2.874 6.444-5.737 9.437Zm.317 2.156c6.165-5.534 6.416-8.432 7.165-16.35.178-2.22.027-4.54.925-6.604.238.037.46.116.669.232-.779 2.04-.638 4.349-.739 6.494-.137 2.887-.284 5.85-1.091 8.644-.699 2.406-1.844 5.173-3.638 6.975-1.236 1.137-2.637 2.06-3.724 3.364.021-.846.038-1.692.056-2.535a.916.916 0 0 0 .377-.22Zm123.577 34.983c-.126-.259-.558-.135-.542.147.282 4.668 1.105 9.367 2.366 13.869-4.193.491-8.463-1.237-12.59.019 3.574-7.688 5.507-22.412 5.232-31.793-.635-6.036-6.654-8.816-6.676 3.111-1.056 10.555-2.933 32.458-10.899 31.258-.528-14.862 1.26-30.35-.362-45.173-.323-1.641-1.323-2.995-2.902-3.401-10.247-2.027-8.036 16.12-7.995 31.511-2.653-1.053-3.344-4.415-3.576-7.541-.151-2.887-.249-4.929-.23-7.827-.168-2.205 1.14-7.57-2.332-8.25-3.484-.665-2.157 9.823-2.414 14.369.156 7.273-.811 12.344 8.711 14.557.112 3.232.241 6.461.367 9.695-19.153-3.321-25.525 4.338-41.74 2.612 1.219-19.823 8.425-30.187 9.22-40.445-.333-12.451 1.304-17.503 4.211-26.457 2.182-5.676 4.314-21.473 1.882-20.581-.536.383-.267.537-.222 1.31.458 3.704-.012 7.1-.902 10.642-5.429 16.866-9.108 21.327-8.734 35.896-3.895 17.605-11.629 31.58-9.793 39.239-6.54-.867-20.254.425-20.535.483-.112-2.467-.112-4.932-.097-7.4-.067.089-.129.18-.197.271-1.244-24.063-13.062-18.995-15.038-12.557-1.819 6.693-1.478 13.496-1.109 20.341-.638-.175-1.468-.197-2.142-.073-1.037.015-3.951.093-4.698.048-.588-14.498-.625-29.196-.394-43.71 11.71-4.346 13.163-12.47 13.974-23.725.149-3.528.065-9.207-3.924-10.729-7.628-2.628-8.185 11.289-9.619 16.015.11-3.698.232-7.394.358-11.09l.112-.03c-.038-.602.095-1.55.091-2.246l-.124.038c1.165-16.541-11.82-23.548-18.969-14.628.801-6.074 2.316-11.898 2.623-18.544.759-7.779-.955-15.983 2.357-19.55 7.693-10.035 8.04-6.13 16.605-3.24-1.979 14.294.637 30.702 3.131 28.588.354-.3.457-.804.339-1.25-2.707-10.099-.198-17.52.224-25.88 4.894 2.234 11.114 3.531 12.028 6.512 1.174 5.802 1.66 11.39 2.509 17.266.141 8.542-2.09 16.825.441 14.164.387-.046 1.937-13.353 2.361-20.013.335-3.62-.213-7.46 1.089-10.853.66-1.333 3.8-5.848 3.862-4.608-.408 3.949-.172 13.88 1.817 14.298.848-.36.319-.972.205-1.834-1.17-4.455-.981-9.382.188-13.762 3.473-2.574 8.798-3.35 10.419-7.825 5.325 16.237 2.719 18.8 1.301 30.83-.372 3.152 1.178 4.483 1.511 7.283.193 1.826.673 4.158 1.296 1.538 1.469-12.727.401-28.184 1.088-41.07.41-6.053 3.889-4.959 5.04-7.68 4.526-1.719 9.733-.805 14.373.211.288 3.418-.057 6.93.375 10.422.267 2.258 4.017 14.415 3.798 10.095-1.436-6.544-1.563-13.092-1.484-19.818 15.661 2.056 14.413 4.332 21.406 13.86 2.552 3.479 1.666 8.974 1.888 13.325-1.344 5.515-3.273 10.758-2.554 16.555.223 1.66.25 5.522 1.91 4.913.559-.206.919-.763.933-1.36.075-2.728-.027-5.545.563-8.204 1.54-7.523 4.584-14.597 3.212-22.461 10.769.052 7.486-.417 13.623 6.515 2.005 7.89 5.319 10.362 2.796 19.428-.619 2.172-1.395 4.307-1.786 6.542a16.688 16.688 0 0 0-.234 1.932c.06 8.386.757 16.45-.567 24.693-.135 1.138 1.235 3.999 2.148 2.85.219-1.014-.037-2.355.281-3.46 1.412-1.525.112-8.734.499-10.484.857-3.87-.074-6.251.497-10.183.797-4.772 1.368-9.585 2.372-14.32.281-1.33.701-2.621.974-3.954.197-.952-.018-1.922-.138-2.867-.282-2.809-.195-5.644-.406-8.459.834 1.22.702 2.823.963 4.218.606 3.14.923 6.314 1.262 9.492.271 1.811.346 3.691.898 5.447.166 13.958-1.107 28.146 2.213 41.846.778 3.362 2.028 6.614 2.773 9.974.379 1.689.381 3.433.577 5.149.257 2.255.936 4.434 1.333 6.662a211.909 211.909 0 0 1 2.771 22.216c.063.854.207 10.269 1.124 10.269-1.053.226-2.111.452-3.175.622-1.508-4.519-1.399-9.467-3.421-13.811Zm-106.9 63.028c-1.774 7.868-9.442 6.917-14.291 10.102.008-.885.027-1.768.05-2.651 7.788-2.209 11.466-5.047 13.326-12.142 4.94-18.401.816-59.56-1.095-62.796 5.063 1.339 4.651 17.905 5.044 20.635.428 16.423.319 32.763-3.034 46.852Zm-2.699-67.323c1.047 3.076 1.474 6.595 1.65 9.964 2.881 54.606-.456 59.34-13.157 63.191.023-1.705-.006-3.422-.054-5.136 11.064-2.444 11.365-12.621 11.816-21.132 1.057-15.704-1.612-31.235-.255-46.887Zm-11.215 62.153c14.624-4.086 1.246-58.391 10.443-62.213-1.825 15.909 1.126 31.913-.186 47.898-.387 8.961-1.503 16.676-10.642 18.987.052-1.387.333-3.198.385-4.672Zm-2.237-27.299a551.886 551.886 0 0 1-.491-8.884c1.002.57 2.417.634 3.442.67 1.132.041 2.262-.007 3.396-.044.035.852.068 1.702.089 2.55-.112.141 2.999 23.565-3.551 29.392-1.124-2.34-1.271-5.031-1.538-7.599-.358-3.656-1.244-16.124-1.347-16.085Zm.681 106.401a4.708 4.708 0 0 1-1.631.042c-5.64-63.544-3.539-127.565-6.679-191.29-.236-6.249-.66-12.303-2.498-18.294 9.224 3.17 6.014 18.168 6.261 25.164-.512 15.826-.841 31.542-.694 47.337.267 16.249.54 32.58 2.616 48.717.565 3.806 1.865 7.541 1.701 11.43-.153 3.637-.583 7.265-.691 10.915-.151 5.118.158 10.219.257 15.332.136 26.168 3.171 45.739 1.358 50.647Zm-6.385-.014c-6.507-38.473-5.801-77.805-5.88-116.724-.203-28.114-6.795-76.63-1.285-93.013.49-.083.989-.1 1.488-.05 2.045 7.002 2.088 14.377 2.154 21.667 1.219 67.563 1.364 151.974 5.437 188.134-.641.067-1.266.009-1.914-.014Zm-5.545.709c-.735.162-1.426.263-1.459.149-4.698-16.222-1.264-33.173-2.31-49.754-.229-3.625-.968-7.19-1.496-10.778-.538-3.659-.474-7.251-.501-10.938-.039-5.839-.128-11.679-.242-17.516.017-2.904.497-5.689.733-8.56.463-4.882.027-10.033-.027-15.078.65-36.811-7.865-92.683 1.492-97.07-2.374 7.287-2.039 15.078-2.144 22.685-.248 21.881 2.645 43.397 3.011 65.196-.534 40.482.648 80.869 4.738 121.135.006.077-.928.34-1.795.529Zm-10.878-7.738c-2.951.122-7.086.435-7.61.504-3.713.487-7.573 1.648-11.025-.427-.896-.535-2.736-1.76-2.686-2.971.039-.984 2.142-1.442 2.879-1.71 3.001-1.088 5.443-3.219 8.376-4.444 4.157-1.76 8.775-.087 12.364 2.183.057.991.132 1.982.227 2.968-2.736.154-5.567.06-8.208.906-.335.11-.201.622.147.533 1.666-.436 3.427-.409 5.139-.438 1.074-.018 2.096-.037 3.061.33.097.875.213 1.751.345 2.626-.02-.137-1.322-.13-3.009-.06Zm-23.488-4.403c-1.151-.408-2.618-.458-3.448-1.469-1.126-1.497.747-3.93 1.693-4.996 3.051-3.436 7.972-1.513 10.992 1.19-1.623.991-3.221 2.036-4.998 2.68-1.495.547-3.436 1.084-4.239 2.595Zm168.728-190.91c3.304 2.397 6.683 5.079 8.947 8.528 1.532 2.494 2.107 5.758 2.49 8.617.882 10.353 1.83 20.711 2.883 31.053-.045-.444-.884-1.232-1.161-1.58-1.9-2.402-4.267-4.432-5.907-7.037-1.703-2.705-1.8-6.38-4.211-8.625-.385-2.651-.919-5.294-1.232-7.951-.294-2.548-.178-5.106-.662-7.632-.435-2.266-1.231-4.494-1.38-6.81-.127-2.841.37-5.714.233-8.562Zm-147.945 131.91c-14.309-8.523-17.339-11.745-20.928-26.225-4.253-19.982-5.462-39.027-6.238-59.347-.203-7.147-1.666-16.089 2.215-20.498-1.879 20.206.422 39.413 3.15 59.44 2.709 18.5 6.372 40.022 26.762 44.248.087 1.773.17 3.607.271 5.489-1.484-1.341-3.419-2.046-5.232-3.107Zm-30.369-76.708c.111 2.244.246 4.558.403 6.917-2.577-.311-5.211-.231-7.811-.255-1.657.068-3.253.337-4.919.182-.205-1.026-.611-1.735-.718-2.755-.197-2.118.039-4.222-.033-6.345.192-.615.12-1.297.138-1.931.174-3.588.124-7.208.944-10.725.534-2.189 1.736-4.071 2.438-6.187 1.227-3.97 1.678-8.165 1.811-12.303.029-1.846-.418-4.118.368-5.839.698-1.53 2.322-3.024 3.713-3.934.909-.593 1.635-1.358 2.515-1.98.807-.574 1.724-.974 2.655-1.3.112 2.967-.341 5.991.025 8.94.043.293.776 2.43 1.434 1.3 1.023-1.749.251-4.493.602-6.543.623-7.898-.229-18.595 1.607-21.868 12.664-20.99 19.812-18.29 27.517-24.38 1.59 9.698-1.533 18.781 1.739 23.953.004 1.623-.288 4.454-.565 7.37-1.463 4.753-1.103 10.46-1.288 15.124-.169 22.282 1.778 39.561 2.393 63.38-2.554-1.105-4.928-2.823-7.055-3.439-1.635-.472-3.293-.862-4.955-1.223-.907-.197-1.774-.435-2.651-.404-1.188-10.536-1.594-21.068-2.877-31.921-.615-3.7-.776-7.566-2.095-11.16-1.413-4.337-7.901-7.36-11.07-3.19-5.679 9.267-4.197 20.091-4.265 30.516Zm-15.061 6.589c-12.416-1.919-23.801 5.76-36.2 4.919-6.639-.174-13.266-1.901-19.889-1.126.236-.508.497-.995.793-1.461.997-1.563 2.812-2.62 3.644-4.32.698-.98 1.201-2.06 1.347-3.478.118-1.14.069-2.307.321-3.428.276-1.221.946-2.287 1.797-3.19.801-.854 1.746-1.582 2.543-2.421-1.006 3.411-.354 7.041.226 10.498.209 1.412.314 2.832.975 4.121.066.131.285.135.349 0 1.079-2.234.112-5.091-.229-7.412-.365-2.459-.636-4.987-.046-7.433.129-.531.311-1.045.468-1.567.141-.469.981-1.016 1.293-1.404.853-1.067 1.42-2.311 1.844-3.604.543-1.659.866-3.379 1.356-5.054.19-.605-.749-1.02-1.037-.439-1.502 3.036-2.08 6.367-4.617 8.786-2.053 1.959-4.491 3.304-5.928 5.848-.43.76-.672 1.559-.817 2.379-.166.929-.511 1.856-.702 2.786-.397 1.93-1.902 3.093-3.201 4.459-1.987 2.089-3.426 4.425-4.75 6.94a153.08 153.08 0 0 1-23.79 1.092c-1.996-.062-3.898-.914-5.814-1.401-2.45-.622-5.04-.17-7.47.333-2.34.49-4.64 1.402-7.003 1.748-1.832.269-3.665.528-5.48.889 3.998-3.43 6.761-7.966 8.516-12.999.139-.4 2.929-1.44 3.43-1.77a18.47 18.47 0 0 0 3.042-2.508c3.543-3.625 3.992-8.815 6.77-12.92 1.9-2.808 4.58-5.119 7.308-7.084.96-.693 1.976-1.48 3.094-1.959.06.052 1.324.273 1.875.352-.563 1.704-.507 3.509-1.025 5.219-.52 1.717-1.306 3.309-1.922 4.986a25.892 25.892 0 0 0-1.26 4.908c-.264 1.671-.769 3.08-1.83 4.421-2.784 3.667-4.206 5.75-3.629 10.536.083 1.026.323 1.665.623 2.647.03.096.17.1.195 0 .652-1.718.14-3.48.255-5.263.107-1.811.832-3.525 2.152-4.779 2.094-1.99 4.381-4.02 4.975-6.998.317-1.594.35-3.089 1.116-4.562 1.269-2.432 3.359-4.544 3.665-7.382.073-.655-.089-1.287-.023-1.932.042-.416.091-.837.129-1.26 4.917 1.167 10.369 1.795 15.06-.682.876-.215 1.778-.22 2.67-.348 2.101-.301 4.03-1.227 6.066-1.776 4.427-1.192 9.171-1.704 13.738-2.028 4.709-.333 9.452-.416 14.163-.054 3.88.297 7.823.04 11.623-.84-.315.666-.565 1.371-.809 2.018-.59 1.556-1.165 3.117-1.832 4.641-1.186 2.705-1.987 5.696-3.622 8.169-1.513 2.282-3.975 3.244-5.826 5.151a9.073 9.073 0 0 0-1.579 2.191c-.281.549-.501 1.125-.714 1.703-.207.548-.447 1.068-.664 1.609-.431 1.092-.685 2.245-.855 3.406-.271 1.851-.329 3.727-.551 5.584-.012.103.143.134.189.049.948-1.724 1.024-3.66 1.401-5.561 1.084-7.056 8.581-9.255 12.538-14.288 1.059-1.397 1.548-2.972 2.158-4.593 1.404-3.729 3.092-7.386 3.844-11.311 1.39-.699 2.701-1.582 4.129-2.195 1.728-.74 3.39-1.796 5.238-2.121.049 3.764-.147 7.51-.934 11.199-.761 3.553-2.282 6.982-2.514 10.632-.139 2.203-.023 4.442.023 6.647.082 1.557-.054 3.238.142 4.764-.347 3.063-1.293 6.251-.521 9.321ZM34.577 145.495c-.006-.348-.01-.698-.019-1.047 14.504-.717 22.712-8.158 25.333-22.388 1.057-5.53 2.996-11.728 1.622-17.312.414.918.58 2.025.712 2.95 2.353 18.008-7.351 38.28-27.648 37.797Zm.04 40.107c.103 9.39.544 22.637 1.115 29.664-.538-2.224-1.05-4.463-1.395-6.724-.044-.272-.507-.272-.547 0-.099.665-.155 1.328-.178 1.992-2.102-33.565-1.322-67.313-2.98-100.919-.143-3.741-.395-7.363-1.494-10.947 5.52 1.895 3.599 10.87 3.746 15.057-.306 9.469-.505 18.871-.414 28.321.08 7.415.294 14.843.846 22.237.176 2.313.377 4.625.717 6.917.333 2.249.567 11.832.583 14.402Zm.986 38.446a2.81 2.81 0 0 1-.974.025 506.4 506.4 0 0 1-.714-9.023c.45 2.821 1.134 5.611 1.854 8.379a4.067 4.067 0 0 1-.166.619Zm-3.804.087c-3.911-23.049-3.485-46.619-3.534-69.936-.123-16.825-4.065-45.853-.766-55.657.29-.048.59-.06.888-.029 1.223 4.191 1.25 8.6 1.289 12.961.729 40.43.816 90.938 3.253 112.574-.376.021-.753.05-1.13.087Zm-4.98.419c-2.812-9.707-1.106-19.704-1.73-29.624-.177-2.807.334-5.728-.06-8.547a747.2 747.2 0 0 0-.157-15.075c.009-1.737.296-3.402.437-5.122.277-2.921.017-6.003-.017-9.023.39-22.026-4.704-55.458.895-58.082-1.422 4.361-1.222 9.023-1.284 13.573-.146 13.094 1.582 25.968 1.803 39.012-.331 24.297.406 48.539 2.85 72.708-.654.066-2.082.126-2.736.18ZM7.818 166.205c-2.546-11.958-3.566-23.945-4.03-36.107-.12-4.274-.998-9.626 1.325-12.264-1.124 12.09.55 24.177 2.181 36.16 1.623 11.071 3.812 23.949 16.015 26.478.05 1.061.1 2.158.161 3.283-9.417-5.762-13.324-7.004-15.652-17.55ZM5.73 117.303c.226-.116.462-.174.71-.195 3.44 15.853.437 36.496 7.08 49.694 2.352 5.124 4.53 8.438 9.597 9.497.031.821.07 1.644.108 2.463-11.573-2.506-13.1-16.04-14.746-25.666-1.768-11.85-3.423-23.796-2.749-35.793Zm4.75 6.324c1.646 10.352.578 44.141 12.308 46.659.48 1.233.11 2.771.263 4.148-4.603-1.142-6.248-4.633-8.05-8.02-7.615-15.374-4.03-34.514-8.054-49.304 3.229.033 3.256 4.115 3.533 6.517Zm12.223 44.495c-5.706-2.216-7.417-16.004-8.31-21.594 2.853.016 5.765-.108 8.608-.065.346 10.727.568 20.434-.298 21.659Zm.05-28.497c.083 1.847.18 3.453.248 5.362-.23-.06-.351-.114-.69-.118-2.714-.033-5.425-.081-8.139-.085-.072-.597-.14-1.194-.207-1.793 2.944-1.046 6.03-1.909 8.788-3.366Zm14.697 2.56c13.156-.012 18.69-15.009 20.125-26.039.368-2.199.941-4.379 1.125-6.606.174-2.087.056-4.193 1.23-5.957 2.545 4.405.027 12.242-.86 17.101-2.468 14.169-10.006 21.71-24.528 22.595-.007-.404-.05-.588-.054-.992.97-.195 1.987-.17 2.962-.102Zm13.912-12.773c3.864-7.98 1.802-17.836 7.03-25.238a11.471 11.471 0 0 0-.658 3.287c-.128 2.27-.416 4.403-.842 6.635-1.213 7.027-2.045 13.343-6.396 19.284-3.052 5.101-7.783 7.986-13.781 7.936-.754-.024-1.482-.047-2.202.154l-.013-1.194c7.486.732 13.784-4.295 16.862-10.864Zm-16.874 9.052-.008-1.31c4.83-1.049 8.626-4.937 13.458-6.05-2.92 4.589-7.92 7.725-13.45 7.36Zm65.08-43.129c.219 1.31.577 2.596 1.063 3.827-1.231.205-2.471.373-3.721.408-6.014-.04-9.073-3.3-14.707 1.265-3.576 2.524-6.962 5.534-9.145 9.381-1.783 3.142-2.449 6.708-4.022 9.918-.521 1.068-1.351 2.028-2.22 2.834-.53.489-1.106.933-1.702 1.337-.341.23-2.138.989-2.223 1.298 1.807-6.519 2.434-13.553 1.058-20.115-.62-2.45-2.483-5.253-5.398-4.04-2.56 1.061-3.741 4.401-4.557 6.818-2.314 6.782-1.668 14.524-4.973 20.943-2.885.255-5.607 1.54-8.126 2.917-2.104 1.158-4.042 2.392-6.415 2.993.068-.021.006-1.779.006-1.955.004-.663.008-1.329.014-1.992.01-1.331.027-2.657.046-3.986.04-2.659.097-5.315.163-7.974.069-2.655.15-5.313.236-7.968.038-1.092.15-2.178.168-3.273.023-1.181.004-2.39-.14-3.565-.137-1.094-.398-2.176-.825-3.192a5.595 5.595 0 0 0-.111-.253l65.53-5.626Zm34.564-3.117c-7.037.812-14.164 1.368-20.851 3.843-3.419 1.219-6.84 2.058-10.394 2.707a16.525 16.525 0 0 1-1.347-6.531c.811-21.7 31.746-21.732 32.592-.02Zm35.635-8.235c-.995 1.115-1.825 2.516-2.043 4.017-2.351.136-4.485 1.386-6.637 2.272-5.162.907-10.079 3.482-15.431 2.707-1.639-.24-3.243-.66-4.889-.859-1.467-.176-2.938-.174-4.408-.089-.01-.7-.056-1.389-.141-2.07l33.549-5.978Zm28.058 94.327c3.93 8.565 7.571 14.105 16.035 15.875.058 1.373.118 2.743.183 4.115-19.343-4.187-21.895-26.808-24.646-42.895-2.951-19.803-5.225-38.774-4.093-58.824.372-.195.77-.292 1.184-.327 5.873 26.293.339 60.171 11.337 82.056Zm15.928 12.756c-7.691-1.911-10.439-7.74-13.457-13.405-12.726-25.688-6.24-56.689-12.96-81.401 5.396.054 5.439 6.875 5.903 10.886 2.75 16.977.645 73.204 20.071 76.986.805 2.061.186 4.635.443 6.934Zm-.58-10.547c-9.309-3.606-12.215-25.597-13.616-34.636 2.885.982 5.799 2.16 8.066 4.239 1.769 1.621 3.071 2.354 6.368 3.675.292 13.927.381 24.988-.818 26.722ZM37.228 197.672c9.005-2.023 8.123-19.341 7.743-26.501-.166-3.142-.52-6.743.703-9.746.633 1.219.694 2.618.865 3.959.3 2.046.429 4.143.497 6.21-.07 8.619.445 24.776-9.812 27.682-.002-.534 0-1.071.004-1.604Zm.01-2.371c5.26-1.565 4.254-7.809 4.427-12.246.129-3.327-.333-6.727-.192-10.056.207-3.83.782-8.56 3.419-11.638-.905 2.421-.898 5.19-.799 7.719.157 4.015.478 8.017.211 12.032-.434 4.936-1.591 13.811-7.07 15.501.004-.438.004-.875.004-1.312Zm11.992-29.295c.753 3.295.873 7.004.685 10.353-.876 8.573-1.35 23.365-12.67 24.343-.005-.234-.01-.47-.013-.702 10.78-2.558 10.526-19.056 10.632-27.917-.046-2.114-.166-4.27-.455-6.365-.236-1.534-.3-3.178-.981-4.583 1.409 1.144 2.392 3.175 2.802 4.871Zm-3.796 75.545c-1.954-2.309-2.97-5.2-4.158-7.957 1.306 2.721 3.519 4.999 4.158 7.957Zm4.814 1.913c1.097-.621 2.355-.953 3.626-1.119 2.105-.273 4.3-.398 6.418-.259 1.805.118 4.023.328 5.495 1.507 1.608 1.291.027 2.912-1.145 3.814-2.835-.983-4.04-1.766-7.192-1.165-.207.031-.209.394 0 .421 1.172.159 2.343.056 3.498.369.944.255 1.856.615 2.786.92-1.486.678-3.256.632-4.88.622a26.288 26.288 0 0 1-5.595-.558c-1.181-.246-2.421-.481-3.504-1.03-1.935-.796-.32-2.51.493-3.522Zm358.017-27.18c-.433-.512-.934-.744-1.459-.796 3.721-5.761-2.035-11.164-7.093-13.341-3.026-1.391-6.259-2.835-9.614-3.103-5.428-.487-8.808 3.837-11.643 7.844.782-7.002 1.293-14.23 4.363-20.677 1.488-3.103 3.363-5.996 4.958-9.043 1.685-3.219 2.556-6.633 3.593-10.093 1.279-4.261 2.693-8.467 3.041-12.932.01-.137-.189-.151-.23-.031-1.294 3.822-2.703 7.607-4.073 11.404-1.298 3.597-2.432 7.154-4.214 10.549-1.469 2.802-3.177 5.476-4.601 8.302.472-1.947 1.803-3.568 2.312-5.51 1.045-4.751-.989-9.728.329-14.464.133-.51-.263-.73-.418-.232-.7 2.265-.832 4.61-.853 6.965-.025 2.501.276 5.41-.643 7.785-.758 1.957-2.097 3.551-2.447 5.679a18.059 18.059 0 0 0-.182 4.289c-1.506 4.622-2.405 9.506-2.595 14.371-2.386-9.977-2.179-20.301-2.678-30.479 6.327-15.135 19.109-28.886 17.72-46.277-.033-.35-.532-.359-.553 0-.693 12.099-6.902 22.768-12.273 33.324.435-2.759.743-5.522 1.029-8.303 1.349-2.946 2.912-5.871 3.75-9.003.88-3.285 1.254-6.676 2.06-9.978.07-.288-.377-.51-.505-.211-1.308 3.059-1.714 6.264-2.501 9.472-.656 2.67-1.618 5.3-2.622 7.885.482-4.912 1.457-9.69 2.271-14.545.039-.24-.303-.437-.425-.18-3.725 8.47-2.98 18.123-4.193 27.129-1.357 2.728-2.651 5.487-3.808 8.32-.149-8.78.793-17.573 3.09-26.059.691-2.765 1.234-5.597 2.239-8.267 1.975-5.223 3.91-10.465 5.944-15.664 1.19-2.987 3.746-7.188 2.703-10.428-.14-.381-.722-.236-.618.17.463 1.812-.594 3.911-1.344 5.503-2.409 4.668-3.938 9.699-5.975 14.531 1.05-7.22 1.236-14.52 1.979-21.761.023-.427-.592-.474-.714-.097-2.962 10.053-2.631 20.79-5.499 30.872.563-13.684-1.507-27.284-2.732-40.878-1.165-16.058-1.302-21.573-16.083-30.184-.091-2.446-.476-4.854-.708-7.286-.207-2.199-.072-4.409-.269-6.61-.41-4.166-1.784-8.148-2.221-12.317-.496-2.514-.556-5.196-1.589-7.567-.642-1.317-2.271-2.797-3.821-3.193-2.535-1.552-3.878-4.296-5.944-6.407-5.395-5.58-10.745-.545-15.425-4.155-4.969-3.962-4.309-10.526-11.351-14.141-1.642-.912-3.5-1.252-5.189-2.017-3.761-1.7-7.583-2.156-11.675-2.367-3.067-.158-6.147-.062-9.216.072-7.357.322-11.226 2.421-14.33 8.04-8.27 11.685-5.766 9.121-12.676 10.533-2.451.501-4.148 2.396-5.595 4.297-.652-.467-1.639-.937-1.937-1.074-2.43-1.126-3.682-1.826-6.165-2.834-1.656-.671-3.488-.663-5.216-1.028-4.834-1.202-9.474-3.18-14.094-5.014-2.775-1.177-4.514-1.478-6.693.804-4.566 4.789-7.504 10.659-11.135 16-1.978 2.68-4.94 4.287-7.926 5.757-9.074 3.521-14.688 9.516-19.873 17.519-.855 1.206-1.943 2.11-2.825 3.263-.9 1.175-1.422 2.601-1.834 4.008-1.204 4.103.445 7.991.777 12.145.076.943.128 1.888.163 2.831-1.842.357-3.636 1.182-5.16 2.285-.19.145-.389.284-.585.418l-38.924 6.936a18.53 18.53 0 0 0-2.063-4.643c.033-.015 52.974-41.987 53.001-42.004a.878.878 0 0 0-1.076-1.386l-53.693 40.996a18.684 18.684 0 0 0-5.018-4.08l12.606-33.044a.516.516 0 0 0-.957-.394l-14.338 32.216a18.297 18.297 0 0 0-6.02-1.09c.029-.194-3.45-62.282-3.448-62.496a.518.518 0 0 0-1.033.04c.033.178 1.459 62.536 1.542 62.652a18.343 18.343 0 0 0-6.513 2.282L87.001 44.881a.516.516 0 0 0-.861.568l20.023 32.334a18.617 18.617 0 0 0-2.781 2.817L52.748 47.545a.724.724 0 0 0-.805 1.202l49.775 34.317a18.42 18.42 0 0 0-1.629 3.823l-36.454-8.44a.517.517 0 0 0-.26 1L99.47 89.795a18.557 18.557 0 0 0-.161 2.572l-65.88 7.45c-1.903-3.022-5.092-3.968-7.793-2.664-4.479 2.713-3.798 8.866-3.978 13.378-.105 9.78 1.37 27.338.925 27.533-2.547 1.109-6.167 2.266-8.806 3.128-.517-5.147-.87-10.318-1.478-15.461-.368-2.216-.463-4.529-1.254-6.679-.844-2.595-4.727-4.404-6.623-1.907-3.4 5.543-2.212 12.613-2.255 18.853.324 6.527.883 13.048 1.753 19.525.401 3.01.87 6.012 1.481 8.988.69 3.358 1.559 6.724 3.183 9.767 1.553 2.908 3.95 5.006 6.65 6.828 1.753 1.177 3.579 2.239 5.338 3.408.362.238.716.495 1.068.752.041.035.7 1.153.943 2.181.257 1.082.344 3.124.441 4.228.162 1.824.257 3.653.309 5.481.105 3.704.029 7.408-.064 11.112-.141 5.526 1.438 17.619 1.724 18.083 1.194 1.808 8.816.896 11.676.239.89 2.993 2.045 5.884 3.283 8.743-2.509-1.857-5.723-2.95-8.804-3.101-.3-.015-.377.396-.147.541 1.93 1.223 4.083 1.957 6.066 2.997-1.215.232-2.44.63-3.6.95-.209.058-.163.362.05.371 1.799.103 3.541-.228 5.332-.241 3.164 2.048 4.042 6.492 7.519 8.059-.35 1.826.221 3.634 1.808 4.434.435.808 1.337 1.163 2.304 1.237 1.892.15 3.814.073 5.712.204 2.287.157 4.528.19 6.817.143 1.222-.023 2.809.379 3.73-.674.486-.585.194-1.528-.658-1.493 5.817-4.981.074-8.272-5.108-8.529-3.115-.131-6.455.176-9.43 1.113 3.815-5.478 8.623-7.825 14.689-10.099.385-.103.333-.605 0-.729-1.59-.776-3.343-.438-4.901.24-5.932 2.388-9.475 6.285-12.94 11.473-.14.037-.273.087-.397.149.41-1.563.642-3.165 1.2-4.682.785-1.352 1.702-2.639 2.6-3.885 4.671-6.761 6.62-8.484 14.314-11.415 1.324-.597 2.504-1.475 3.655-2.358.269-.208.132-.759-.257-.612-5.884 1.656-11.538 3.366-15.47 8.422 3.203-5.277 7.063-10.242 11.64-14.396.622-.566-.28-1.428-.91-.912a72.433 72.433 0 0 0-5.826 5.309c.454-1.739.684-3.557 1.592-5.131 1.42-2.452 3.481-4.446 3.792-7.387.025-.234-.315-.247-.385-.052-.985 2.707-3.473 4.681-4.642 7.319-.909 2.05-.793 4.405-1.546 6.494-3.295 3.522-6.135 7.572-8.38 11.878.523-3.852 2.305-7.417 3.441-11.102 1.217-3.941 2.683-7.753 4.148-11.602 1.525-4 3.998-7.404 6.246-11.015.43-.692-.615-1.266-1.074-.628-2.566 3.474-5.429 6.784-7.012 10.866-1.668 3.888-3.164 7.748-4.417 11.796-.902 2.91-2.158 5.725-2.943 8.667.435-5.243.549-10.547 1.468-15.737.616-3.422 1.453-6.805 1.978-10.246.075-.489-.656-.713-.757-.207-.727 3.627-1.929 7.136-2.674 10.764-.772 3.754-1.062 7.586-1.345 11.406a368.05 368.05 0 0 1-.86 9.523c-.142 1.391-.318 2.935-.123 4.378-.539-1.091-1.151-2.148-1.79-3.224-1.985-3.345-2.277-7.205-2.557-11.021.816-4.583 3.392-8.693 3.974-13.33.033-.263-.37-.346-.484-.133-1.598 3.029-2.732 6.298-3.62 9.597.008-4.342.056-8.817 1.368-12.992.163-.499-.573-.794-.836-.352-1.654 2.777-2.163 5.994-2.29 9.18-.142 5.528-.084 11.21 1.47 16.562a84.61 84.61 0 0 1-2.158-6.102c.262-.239.443-.589.418-.927-.056-.775-.54-3.037-.567-3.314a688.706 688.706 0 0 1-1.048-18.948c5.524-.218 9.506-4.315 11.323-9.41.899-2.527 1.104-5.147 1.457-7.784.298-2.234.605-4.465.793-6.712.292-3.484.57-7.12.317-10.61-.215-2.921-1.079-7.044-3.587-8.899-2.65-1.961-4.984.935-5.909 3.242-1.473 3.675-1.488 7.904-1.635 11.801-.149 3.979-.482 7.947-.525 11.931-.034 2.717.2 5.764-2.356 7.022-.095-2.141-.463-4.16-.707-6.303-.553-4.832-.2-9.705-.323-14.553-.44-8.42-1.447-16.672-1.58-25.156 2.896.218 5.818-.178 8.59-1.022a28.118 28.118 0 0 0 4.1-1.61c1.556-.759 2.922-1.511 4.63-1.878a86.396 86.396 0 0 1 4.143-.771c1.672-.276 3.243-.417 4.884-.939 2.75-.879 5.542-1.437 8.305-2.245 3.088-.995 5.54 1.55 8.442 2.118 1.64.346 3.337.446 5.007.512 7.163.284 14.373.506 21.493-.443 3.382-.452 6.565-.975 9.984-.587 11.614 1.022 23.656.96 35.086-1.526 6.971-1.6 14.123-.64 21.199-.98 1.617-.062 3.214.131 4.829.116 1.448-.01 2.866.375 4.311.361.358 4.634.792 9.267 1.312 13.885a297.789 297.789 0 0 0 1.786 13.411c.625 3.976 1.343 7.939 2.25 11.861a91.017 91.017 0 0 0 1.295 5.014c.6 2.065 1.418 4.044 2.264 6.015.95 2.22 2.103 4.451 3.66 6.298 1.25 1.511 2.667 2.871 4.178 4.116 3.069 2.529 6.486 4.583 9.868 6.658.952.585 1.908 1.173 2.852 1.777.993.623 3.566 2.064 3.93 3.266 1.799 3.99 1.194 11.484 1.581 15.787.938 11.593-.823 19.238-.476 30.841-4.478-2.943-10.459-3.932-15.137-.931-.039.029-1.461-1.194-1.577-1.285-.751-.588-1.523-1.125-2.386-1.54-3.241-1.635-7.484-1.277-9.968 1.526a6.778 6.778 0 0 0-1.332 2.149c-.214.556-.418 1.928-1.006 2.197-1.283.643-2.867 2.276-2.14 3.802.412.759 1.372.995 2.225 1.125 1.668.249 3.367.34 5.027.595.583 4.679 3.746 6.432 8.144 6.741 1.624.114 3.195.52 4.83.574 2.175.073 4.241-.367 6.385-.595 2.283-.244 4.578-.41 6.875-.358.547.012 1.213.23 1.737.033.201 1.074.538 2.152.819 3.211.338 1.252.392 2.618 1.24 3.635 3.645 4.372 9.216 6.111 14.754 6.088 2.395.004 4.794-.166 7.186.029 1.95.158 4.462.744 6.155-.576 1.161-.906 2.184-2.862 1.35-4.251-1.422-2.291-6.555-3.864-9.132-4.519.116-.479.245-.956.394-1.428l-.048.008c1.147-5.551.292-11.62-.056-17.445-.604-13.856-1.693-29.129-.915-42.233 1.085-1.293 2.871-1.772 4.421-2.235 2.355-.7 5.013-1.681 6.96-3.21 4.427-3.452 5.893-9.251 6.501-14.578 1.627-9.164 1.724-34.672 1.732-34.844 11.334-2.492 19.045-.181 28.052.203 3.862.186 7.565-.205 11.379-.896 15.441-3.656 21.18-2.806 27.102-1.343-.156 2.685.093 6.832.221 9.631l.499 10.621c.023 2.006.656 3.045 2.707 3.343 2.657.506 5.395.568 8.094.773 2.451.147 7.424.56 9.328-1.045 1.945-1.631.24-3.697-1.72-4.102-2.976-.769-6.014-.091-9.005-.398 1.468-4.578.464-8.759.505-13.365 2.73-1.509 6.101-2.195 8.121-4.734.588-.697.675-1.559 1.166-2.154 1.343-.301 2.725-.048 4.079.041 1.639.112 3.282.1 4.926.121 2.535-.013 5.101.06 7.547-.738 1.571 4.5 1.892 9.354 3.463 13.84-2.707-3.586-3.914-7.937-5.747-11.977-.197-.427-.957-.114-.772.326 2.682 6.993 3.508 10.797 9.025 16.427 1.039 1.102 2.082 2.29 3.285 3.242a26.43 26.43 0 0 1 1.827 2.234c1.557 2.114 1.54 20.689 5.652 29.946.06.135-.863 1.188-.979 1.341-.353.473-.714.943-1.084 1.405-.633.784-1.271 1.729-2.148 2.256-.534.321-1.008.553-1.3 1.133-.224.45-.302.964-.269 1.46.074 1.102.689 2.155 1.645 2.719 1.354.798 2.968.464 4.454.585 1.103.089 2.208.176 3.316.195.656.008 1.312-.021 1.966-.059.327-.016.654-.039.981-.058.288-.018.557.023.846.048 1.286.1 2.573.205 3.86.326 2.573.238 5.145.547 7.683 1.048.064.011.126.025.19.036 3.152.528 8.359.696 11.226-.751 1.753-.91 2.355-2.929 1.008-4.514Zm-106.185 4.97c.077-.228.294-.485.489-.617a.861.861 0 0 1 .705-.114.832.832 0 0 1 .592.611c.16.591-.163 1.378-.85 1.376-.008 0-.019 0-.027-.002-.584-.018-1.097-.68-.909-1.254Zm17.182 15.235c-.24-.391-.55-.905-.209-1.318.197-.332.543-.419.903-.443 1.061-.119 1.167 1.108.633 1.761-.304.481-1.033.517-1.327 0Zm2.225 3.052c.443.744-.821 1.813-1.364.947-.165-.27-.056-.709.073-.981.279-.507 1.028-.458 1.291.034Zm-11.256-.119a1.64 1.64 0 0 1-.466.251c-.536.208-1.304.176-1.422-.526-.068-.411.139-.904.513-1.163.354-.243.898-.369 1.279-.114.476.317.526 1.186.096 1.552Zm13.382-13.035c.188.184.194.439.149.677-.091.599-.961.734-1.161.139-.054-.116-.056-.246-.054-.373.002.002.004.004.006.004-.002-.578.652-.829 1.06-.447Zm-4.239 15.666c-1.347-.062-2.647-.427-3.976-.576.023-1.584-.091-3.224-.403-4.778 2.194-5.236 5.768-15.436 13.26-13.214 6.575 1.975 4.433 11.149.958 14.986-2.469 2.657-6.287 3.735-9.839 3.582Zm-15.448 16.997c-.972-.025-1.947-.015-2.883-.033-4.753-.017-10.039-1.967-14.53.168-3.486-4.76-6.348-9.969-6.594-16.005-.344-5.942 2.338-11.611 7.976-14.012 4.961-2.307 11.031-2.769 16.094-.545 2.642 1.163 5.505 2.869 7.049 5.394 1.386 2.267 1.504 5.153 1.508 7.739.096 7.052-4.157 12.344-8.62 17.294Zm4.603 3.012c3.179 1.639 3.413 5.611 1.695 8.31-.937-.075-1.844-.284-2.752-.544-2.726-.779-5.212-.87-7.966-.147-1.035.272-.596 1.833.443 1.598 1.552-.348 3.125-.522 4.704-.236 1.366.255 2.663.761 4.031 1.018-3.152 2.634-7.229 3.445-11.244 3.395-3.46-4.199-9.056-8.202-14.377-9.34 2.804-7.574 9.135-5.746 15.509-5.06 3.159.297 7.047-.495 9.957 1.006Zm-12.771 21.878c-6.667 5.547-23.228-.491-31.196-1.828-1.488-.317-3.214-.352-4.518-1.206 1.532-.597 3.212.18 4.802-.04.842-.116 1.579-.655 2.446-.609.886.045 1.602.408 2.488.23.188-.04.209-.311.051-.402-.77-.442-1.641-.89-2.539-.985-.996-.106-1.728.413-2.674.547-1.645.237-3.206-.364-4.779.133 2.473-11.767 18.817-13.66 27.849-8.785 1.552.838 4.197 2.513 6.292 4.523-1.389-.267-2.873-.279-4.133-.304-3.556-.065-6.919-.707-10.353-1.588-.817-.209-1.163 1.042-.349 1.262 3.127.85 6.269 1.602 9.518 1.746 1.562.068 3.154-.003 4.681.397a7.31 7.31 0 0 1 1.741.711c.538.303 1.128.655 1.474 1.182.707 1.084.712 2.668.124 3.799a4.91 4.91 0 0 1-.925 1.217Zm-32.39-20.318c.971-1.832 3.86-2.874 5.71-3.488 4.653-1.532 10.748-2.191 13.564 2.719-.515.881-1.014 1.878-1.31 2.936-5.447-.83-11.333-.073-16.118 2.698-2.332-.275-2.823-3.032-1.846-4.865Zm22.186-45.974c-1.583-3.124-2.982-6.781-2.102-10.313 4.828-19.264 45.13-11.589 28.445 10.491-2.236 3.24-5.837 5.066-8.364 8.03-3.94-1.194-8.084-1.213-12.132-.195-1.823-2.771-4.33-5.035-5.847-8.013Zm49.45 13.477c1.039-9.116-8.81-13.705-15.243-7.356-2.74 2.752-4.34 6.423-5.66 10.065-1.513-3.339-4.694-5.493-7.946-6.993 2.583-2.587 5.893-4.38 7.95-7.485 12.173-16.216-3.034-28.068-19.645-24.65-5.592 1.165-9.943 4.342-12.331 9.62-3.479 7.957 1.739 16.59 7.703 21.783-15.963 4.585-14.516 23.792-4.677 33.911a9.205 9.205 0 0 0-1.337 1.231c-3.198-6.498-12.085-4.999-17.486-2.404-2.616 1.27-5.042 2.755-5.294 5.947-.162 2.016.571 4.071 2.247 4.976-2.881 2.198-5.019 5.24-5.733 9.146-.223.893-.349 1.807.197 2.707.627 1.036 1.846 1.658 2.862 2.255.898.526 1.625 1.02 2.62 1.362 1.19.408 2.385.79 3.589 1.14a77.863 77.863 0 0 0 19.053 3.066c.973.035 1.989-.054 2.953.049.803.083 1.58.305 2.403.375 1.973.166 3.968.22 5.924-.128 1.154-.203 2.485-.452 3.334-1.325 1.566-1.608.3-3.888-.603-5.445-.02-.035-.463-.576-.496-.454a6.23 6.23 0 0 0 .161-2.489c.048.336 3.216-.458 3.545-.491 1.983-.202 3.982-.318 5.944-.693 1.737-.329 3.931-.671 4.821-2.375.923-1.764-.332-3.59-1.153-5.087-.073-.133-.149-.271-.168-.425-.05-.423.534-1.225.664-1.673a7.978 7.978 0 0 0 .303-1.822c.145-3.036-1.536-6.245-4.38-7.536-.231-.104-1.668-.749-1.86-.552 4.143-4.276 7.355-9.346 7.988-15.409 9.512 2.651 18.875-2.655 19.751-12.841Zm37.64 7.528c-1.446 1.731-3.578 1.621-5.598 1.458-.751-.552-1.561-1.037-2.264-1.648-1.021-.885-2.012-1.267-3.376-1.02-1.405.257-3.024.821-4.303 1.59-1.953-.908-2.386-3.476-.966-4.979.764-.607 2.096-.916 2.748-1.105 2.393-.756 4.889-.483 7.308-.008 1.327.203 2.695.193 3.941.752 1.633.736 4.102 3.064 2.51 4.96Zm-7.56 8.269c-2.653 2.021-7.921 1.849-10.487-.066 1.047-1.176 1.519-2.909.472-4.159.404-.439.853-.789 1.279-1.202.935-.903 1.906-1.248 3.071-1.807 3.682-1.77 6.774 1.76 7.536 2.989.958 1.55-.727 3.376-1.871 4.245Zm-10.201 9.054c-1.865.13-3.724.176-5.572-.174-2.194-.386-4.358-.68-6.556-.116-.733.186-.416 1.256.31 1.123 2.978-.528 5.714.935 8.655 1.138-.854.195-1.751.255-2.601.251-2.022-.01-3.926.108-5.919.429-1.565.251-3.157.386-4.74.274-1.388-.102-3.419-.282-4.495-1.265-.71-.651-1.213-1.496-1.579-2.379 2.79.41 5.772-2.177 8.514-1.06.743.301 1.269-.951.547-1.303-1.457-.718-3.086-.465-4.624-.162-1.345.29-3.597 1.225-4.897.466-.279-3.619 3.614-3.834 6.23-4.34 1.32-.305 2.626-.632 3.895-1.117.724-.249 1.513-.481 2.285-.436.149.029 4.158-.091 6.043.309 3.254.61 6.418 5.286 4.504 8.362Zm-3.562-14.023c6.325 1.926 1.633 4.206 1.753 4.486-.013.012-.023.027-.035.039.14-.163-2.618-.908-2.873-.926-2.515-.203-4.868-.411-6.919-.27 1.174-4.226 4.361-4.597 8.074-3.329Zm23.664-4.85c-.439-3.234-3.287-4.585-6.136-5.203-.098-.8-1.368-11.869-2.519-16.273-.273-2.251-.691-4.529-.712-6.805-.015-2.036.383-4.055.304-6.088-.068-1.762-.695-3.296-1.033-4.996-.819-4.338.042-9.077-1.699-13.226-.116-.261-.521-.073-.451.19 1.064 4.44-.706 9.112.143 13.594.126.738.395 1.422.569 2.149.503 2.193.134 4.451.072 6.671-2.148-4.954-4.969-9.606-7.49-14.404-1.759-3.352-3.721-6.474-6.643-8.924-.267-.226-.619.116-.385.384 2.775 3.19 4.367 7.439 6.358 11.129 2.262 4.193 4.723 8.274 6.697 12.619a49.688 49.688 0 0 1 1.855 4.753 69.669 69.669 0 0 0 1.167 6.034c-1.604-3.35-3.901-6.281-6.548-8.953-.901-1.353-1.784-2.719-2.594-4.137-1.314-2.292-2.51-4.653-3.702-7.008-1.244-2.467-2.42-5.122-4.096-7.328-.232-.304-.776-.147-.656.276.695 2.496 1.916 4.938 3.04 7.265 1.136 2.355 2.333 4.677 3.639 6.942-5.698-4.753-12.691-8.718-16.795-15.057-.135-.205-.522-.076-.419.179 3.831 9.145 13.753 13.208 20.374 19.971 2.152 3.256 4.458 6.43 6.734 9.57.12.17 1.464 2.838 1.791 4.223.105.445 1.724 4.833 2.111 7.078-3.899-.684-8.208-.949-11.88.742-.666.479-.933.904-1.414 1.472-.082.102-2.974 3.229 1.122 6.1-.575.568-1.064 1.234-1.506 1.92-.495-.353-1.07-.63-1.644-.852-.499-1.851-.538-3.814-.695-5.717a.367.367 0 0 1 .035-.259c2.308-8.007 1.38-17.008-2.256-24.476-.151-.329-.573-.068-.532.226.261 1.895.362 3.808.631 5.704.443 2.925.913 5.854 1.089 8.81-2.13-3.344-4.075-6.921-5.561-10.555-.126-.307-.577-.199-.505.139a34.978 34.978 0 0 0 6.178 13.166c.004.753-.019 1.507-.068 2.258-1.869-5.448-5.797-9.792-8.898-14.537-.159-.261-.602-.095-.505.212.747 2.356 1.658 4.614 2.867 6.778 1.248 2.234 2.661 4.382 3.773 6.691 1.763 3.445 1.84 7.321 2.705 11.015-4.075-1.221-7.54.418-8.223 4.798-2.003.504-4.032.96-6.064 1.345-2.345.49-4.963.807-6.312 3.076-2.459 4.134.709 10.004 5.006 11.301 1.151.349 2.272.402 3.45.355 1.372-.056 2.827.203 4.197.302 1.553.114 3.105.224 4.655.338 1.411.102 2.941.394 4.348.257 1.554-.147 3.192-.269 4.644-.885 1.447-.609 2.364-2.137 1.135-3.503a1.869 1.869 0 0 0-.917-.568c1.37-2.07 1.119-4.97-.089-7.122 1.742.614 3.644.624 5.468.717 2.239.112 5.184.179 7.132-1.08 2.175-1.548.65-3.254-1.493-3.331.725-.934 1.224-2.031 1.242-3.113 1.478.514 3.235.162 4.667-.33.408-.138.602-.441.648-.852.095-.847-.312-1.515-1.035-1.691 1.06-.858 1.828-2.027 1.629-3.476Zm-47.556-1.057c.031.377.079.854-.269 1.096-.464.411-1.223.044-1.215-.574-.004-.375-.045-.846.29-1.084.447-.406 1.213-.037 1.194.562Zm1.116-7.207c.037.348-.021.702-.176.961-.201.334-.553.544-.946.481-.691-.105-1.459-.404-1.594-1.167a1.396 1.396 0 0 1 .383-1.276c.433-.409 1.49-.342 1.915.049.24.222.382.583.418.952Zm-.011-.017c-.012-.18-.018-.089 0 0Zm-169.351 26.066c.308 1.09.565 2.083.513 3.231-.099 2.22-1.664 3.932-3.404 5.176-.71.506-1.532.802-2.409.616-.445-.096-.772-.351-1.178-.531-.66-.294-1.194-.133-1.869-.211-.267-.032-.422-.388-.149-.544 1.227-.688 1.933.046 3.059.396 1.662.519 3.425-2.064 4.052-3.366.423-.885.441-1.857.435-2.819-.004-.703.184-1.459.077-2.154-.377-2.412-3.376-1.741-4.794-.764-.281.194-.525-.253-.263-.452 1.373-1.035 3.575-1.729 5.03-.427.563.503.703 1.154.9 1.849Zm143.661-41.896c.089-.408.226-.945.511-1.26a1.387 1.387 0 0 1 1.016-.446c.532.002.882.45 1.226.794.171.17.327.367.393.601a.966.966 0 0 1-.184.852c-.329.431-.963.723-1.474.748-.78.042-1.687-.375-1.488-1.289ZM97.725 258.917c-.563 1.234-1.637 1.399-2.87 1.582-3.078.452-6.023 1.428-9.078 2.015-2.907.557-5.596.509-8.485-.133-2.016-.396-3.906-1.343-5.967-1.474 1.468-.296 2.97-.406 4.43-.734 1.614-.36 3.203-.313 4.832-.495.114-.01.114-.16 0-.172-1.391-.153-2.8-.071-4.197-.193-1.317-.118-2.554-.135-3.873.048-2.37.327-4.607 1.26-6.968 1.011-1.931-1.728-.91-4.321.964-6.025 1.006-.91 2.033-1.75 2.96-2.745.644-.686 1.285-1.492 2.123-1.95 2.227-.997 4.74-.425 7.08-.918 2.78-.606 5.261-1.34 8.089-.396 3.35 1.048 6.533 2.645 9.143 5.01-.523-.183-1.113-.278-1.6-.357-1.92-.298-3.7.357-5.586.568-1.848.207-3.572-.611-5.428-.58-1.606.029-3.17.425-4.533 1.291-.269.17-.03.576.25.425 1.648-.871 3.476-.943 5.28-.589 1.447.286 2.72.833 4.225.74 1.603-.101 3.172-.649 4.78-.62.86.017 1.63.257 2.442.488.675.188 1.28.281 1.871.592.729 1.101.659 2.442.116 3.611Zm2.074-1.445c-.221-5.625-9.982-10.256-14.744-11.143-1.774-.218-3.516.025-5.24.454-1.85.458-3.556.497-5.441.64a9.001 9.001 0 0 0-5.313 2.301c-1.167 1.068-2.318 2.139-3.504 3.186-3.332 2.763-4.234 7.321.118 9.591.751.655 1.716.954 2.684 1.262 1.921.61 3.778 1.364 5.75 1.804 1.852.41 3.721.427 5.607.53 2.096.119 4.184.479 6.285.255 3.843-.406 7.782-.609 11.538-1.575 1.352-.348 2.825-.964 3.421-2.322.592-1.351.259-3.322-.534-4.524a1.152 1.152 0 0 0-.627-.459Zm51.718-1.813c.47-.404 1.012-.711 1.579-.993.987-.493 1.993-.875 3.061-.319 1.476.769 1.664 2.628 1.248 4.075-.706 2.006-3.208 4.125-5.453 3.466-1.426-.419-2.031-1.891-1.933-3.28a4.31 4.31 0 0 1 1.498-2.949Zm13.544-10.717a4.668 4.668 0 0 0-.826-.238c-.404-.075-.971-.267-1.362-.073-.132.067-.23.193-.368.249-.096-.17-.18-.329-.311-.475a2.302 2.302 0 0 0-.426-.36c-.327-.218-.691-.371-1.056-.514-.372-.149-.753-.288-1.111-.477a3.1 3.1 0 0 1-.606-.406c-1.735-1.445-4.069-1.733-6.238-1.41-1.103.141-2.132.655-3.256.514-.575-.072-1.111-.336-1.676-.414-.518-.073-1.037-.168-1.559-.251a7.067 7.067 0 0 0-1.438-.106c-.118.004-1.389.239-1.362.286-.946-1.598-1.285-3.807-.6-5.555 3.272-.514 6.43-1.575 9.715-2.025 1.993.021 3.945-.334 5.884-.821 1.887-.41 3.818-.821 5.445-1.855 2.552-1.623 3.059-4.347 3.214-7.184.122-2.251-.325-4.546-1.761-6.165 2.055-.075 4.069.17 6.089.541 2.055.377 4.009 1.339 6.122.925 4.108 2.228 9.23 3.644 11.892 7.808-3.039-1.302-4.889-.821-7.977-.145-1.43.228-2.858.232-4.298.116-.665-.054-.822 1.051-.16 1.173 2.385.433 4.643.601 7.056.381 2.454-.277 4.547.867 6.858 1.402 1.627 3.884 1.406 5.723.421 9.661-.909 5.785-2.883 7.178-8.289 8.917.801-3.683-.747-7.81-2.031-11.187-.339-.893-.724-1.782-1.281-2.56-.275-.385-.668-1.026-1.15-1.171-.944-.282-.884.885-.805 1.47 1.804 7.186-.694 13.195-8.987 11.185-1.312-.301-2.51-.757-3.762-1.236Zm-.17 12.039c-1.221 5.238-7.225 6.277-10.236 10.084-.476.604-.894 1.221-1.323 1.808-1.146-2.139-2.947-.525-3.183 1.306a1.33 1.33 0 0 0-1.231-.406c-1.052.192-1.528 1.158-1.623 2.139-1.409-1.169-2.527.476-2.79 1.832-.19-.512-.621-.97-1.091-.962-.759.048-1.113.918-1.368 1.526-.85-.46-1.502.421-1.761 1.14-.17.443-.505 1.329-.379 1.932-.389.327-.906.796-1.469.765-.319-.019-.675-.26-.991-.324-2.395-.331-4.15 1.804-5.977 3.004-1.402.951-3.308 1.536-5.009 1.397-2.268-.187-2.697-2.22-2.382-4.129.596-4.175 3.94-5.305 5.778-8.49-.215 1.264-1.146 2.141-1.798 3.2-.42.707-.855 1.401-1.314 2.083-.76 1.13-1.691 2.425-1.64 3.864.083 2.39 2.685 1.7 4.082 1.045 4.114-1.781 6.579-5.464 8.725-9.239.584-1.016 1.461-2.077 1.381-3.316 2.212-3.595 4.311-6.15 3.742-10.682-.137-.997-.238-1.834-.054-2.841.134-.749.399-1.458.575-2.196.021-.08-.087-.126-.132-.056-1.457 2.32-.582 5.431-1.054 7.999-.403 2.776-2.955 4.372-3.547 7.075a.863.863 0 0 0-.749.021c-1.062.52-2.091 1.196-3.266 1.411-2.44.208-2.728 1.111-4.4 2.602.213-1.437 1.134-2.778 1.742-4.1.955-1.988 2.072-3.891 3.032-5.875.454-.937.717-1.95 1.429-2.738 1.566-1.606 3.832-2.5 4.816-4.643.08-.168-.154-.309-.251-.145-.958 1.579-2.639 2.406-4.042 3.532-1.538 1.233-2.31 2.86-3.189 4.593-1.176 2.322-2.287 4.664-3.469 6.984.71-2.125 1.06-4.343 1.834-6.455.364-.993.803-1.965 1.3-2.9.327-.616.639-1.233 1.018-1.822a6.249 6.249 0 0 1 1.968-1.919c.873-.535 1.85-.728 2.8-1.076 1.161-.494 2.387-1.578 2.964-2.699.085-.556-1.788.738-2.028.837-1.242.722-2.778.774-3.988 1.543.107-.289.242-.564.469-.796.269-.27-.13-.651-.412-.411-.364.311-.662.773-.852 1.267.101-.674.18-1.36.486-1.992.106-.222-.19-.506-.366-.284-.433.551-.809 1.239-.985 1.956-.497-3.206 1.084-4.28 3.657-5.652.234.153.492.261.776.303.238.342.879.425 1.148-.011.977-1.577 1.302-3.528 2.708-4.838 1.61-1.467 3.657-.926 5.561-.617 1.862.543 3.659-.51 5.538-.396.977.062 2.15.313 3.036.752.741.365 1.289.989 1.985 1.412.501.306 1.07.416 1.606.632 1.045.419.453 1.451.087 2.232-.607 1.298-1.461 2.616-1.552 4.082-.094 1.434.809 2.918 2.119 3.515.542.245 1.113.268 1.693.261.521.137 1.066.224 1.616.295.398.389.346 1.082.23 1.581Zm-14.158 14.41c-.023-.207-.1-.42-.187-.609.12-.549.41-1.065.805-1.455.127-.122.406-.417.57-.315.24.17.302.75.554.937-.49.547-1.043 1.042-1.742 1.442Zm-2.898 1.358a1.414 1.414 0 0 0-.139-.356c.094-.796.462-1.773 1.309-1.833.695-.052.813.67 1.111 1.157-.747.373-1.513.707-2.281 1.032Zm-2.918 1.333c-.052.025-.099.054-.151.081.159-.552.412-1.113.797-1.516.749-.787.906.019 1.297.519-.656.284-1.308.58-1.943.916Zm-2.699 1.586c.16-.742.605-1.532 1.178-2.005.201.147.281.78.509.974-.575.326-1.138.67-1.687 1.031Zm-.439.294c-.341.232-.674.477-1.005.73.08-.521.298-1.999 1.072-1.688-.05.311-.114.643-.067.958Zm-12.306-18.755c-2.562.066-5.107-.228-7.444-1.345-1.525-.755-2.922-1.847-4.599-2.257-3.721-.836-7.241 1.683-10.826-.707-.906-.593-1.192-1.285-1.159-2.044 4.92-.935 9.564-4.983 14.614-2.676.432.199.817-.419.383-.653-4.787-2.556-9.483.075-14.291 1.012 1.997-5.068 4.696-10.085 9.824-12.526 2.016-.941 4.162-1.547 6.149-2.554.087-.044 1.292.533 1.509.568 2.111.352 4.179.92 6.244 1.474.921.246 1.836.555 2.777.586.336.011 2.906.367 3.026.125-1.798 3.691-.275 7.918 2.084 11.068-1.542.769-3.106 1.572-3.833 3.159-.705 1.584-.656 3.93.346 5.433-.273.317-.53.684-.76 1.043-1.31-.587-2.736.191-4.044.294Zm-9.567-29.68c2.001-.168 3.715-1.636 5.416-2.589 1.204-.676 2.55-1.022 3.889-1.333 1.79-.419 3.595-.916 5.432-.941.259-.002.245-.22.017-.236-1.631-.123-3.276-.03-4.905.091-1.385.105-2.881.087-4.237.398-2.15.495-3.884 2.713-6.105 2.823-.101-1.729.333-3.466.824-5.054 1.717.187 3.379.06 5.035-.468.478-.162.288-.875-.207-.759-1.374.33-2.73-.375-4.102-.62 2.136-4.908 6.913-5.345 11.522-6.512a.502.502 0 0 0 .366-.288c4.073 2.213 8.848.621 13.213.926 2.767.309 5.337 1.569 8.057 2.139 1.653 2.877 5.821 2.666 8.723 2.658 2.815 1.909 2.724 5.449 2.088 8.448-.805-.646-2.061-.802-3.005-.928-1.817-.245-3.311.172-4.954.646-.888.195-1.764.427-2.645.685-1.64.476-3.299.69-4.986.909-.071.009-.108.127-.021.143 5.406.662 9.08-2.609 14.676.604-1.753 2.118-4.955 2.305-7.455 3.018-1.258.369-2.585.134-3.872.28-1.641.118-3.245.466-4.878.609.747-.319 1.502-.622 2.241-.96.72-.329 1.823-.696 2.246-1.428.641-1.113-.739-1.633-1.594-1.727-1.999-.213-3.974.581-5.814 1.269-2.663 1.003-5.482 2.181-7.442 4.305-2.127.199-4.315.015-6.366-.298-1.612-.274-3.129-.846-4.711-1.234-1.533-.364-3.259-.578-4.555-1.531-.157-.33-.312-.684-.49-1.045-.362-.726-.983-1.31-1.401-2Zm11.364-19.043c-1.608-3.864 1.714-7.852 5.371-8.899 1.521-.504 3.069-.649 4.662-.599 1.445.048 2.749.046 4.117-.4 4.265 3.887 10.876 1.667 15.82.709 1.232-.24 2.529-.522 3.765-.147 1.182.356 2.1 1.179 2.831 2.151-4.855-.414-8.881 2.504-13.635 2.774-.519.027-.527.808 0 .814 4.347.332 11.553-3.548 14.891-1.498.561 1.167.95 2.456.946 3.747a8.318 8.318 0 0 0-5.089-1.861c-1.118-.017-2.171.404-3.285.408-1.111.005-2.144-.182-3.156.386-.116.066-.06.24.066.244 1.046.046 2.049.313 3.09.365.783.038 1.526-.066 2.287-.226 2.983-.626 5.878 1.795 5.979 1.806-.395 2.265-2.344 3.683-4.4 4.386-6.842 2.508-10.906.671-17.461-1.034-5.056-1.201-11.199 2.066-15.644-1.478 1.891.358 3.884-.33 5.627-1.12 1.389-.628 2.622-1.113 4.177-1.117 1.49-.004 2.963.243 4.441.415.064.008.079-.102.014-.114-2.407-.512-4.983-1.292-7.467-1.006-2.38.278-4.313 1.791-6.919 1.474-.409-.05-.86-.247-1.028-.18Zm13.583-15.401c.103-1.298.701-2.471 1.538-3.472 1.279-1.53 3.1-2.506 5.066-2.838 4.259-.719 8.603-.761 12.946-.481 4.364.17 9.692 1.663 11.105 6.353-1.285-.613-2.32-1.639-3.676-2.12-2.005-.674-4.263-.176-6.335-.261-.122-.004-.128.163-.027.201 1.816.682 3.757.669 5.595 1.27.952.313 1.604.964 2.442 1.462.677.4 1.436.622 2.142.951-.335 2.16-3.734 2.309-5.48 2.303-2.687-.014-5.201.008-7.853.518-2.272.433-4.532.919-6.798 1.372-2.033.409-4.227.769-6.271.249-2.447-.62-4.634-2.84-4.394-5.507Zm33.979 7.333c5.064 2.836 8.349 6.884 4.263 12.197-.858-.512-2.425-.413-3.259-.442-1.906-.064-3.552-.278-5.377-.85-.439-.138-.592.51-.186.674 1.622.655 3.114 1.271 4.88 1.352 1.018.047 2.02.178 3.03.331-1.294 1.356-2.817 2.662-4.607 3.29-1.863.653-3.773-.293-5.628-.566-3.087-.452-5.989-.456-9.083-.311-1.635.077-3.966.263-5.712-.419 4.843.487 12.684-.92 14.456-6.16 1.198-3.553-.631-8.654-3.885-11.013 2.161-.066 4.516.176 6.789-.626 1.32 1.041 2.864 1.706 4.319 2.543Zm2.535 51.474c.05-.043.822.139.948.143.536.011 6.18-.657 7.513-.563 1.405.099 2.943-.038 4.323-.318 1.561-.252 3.465-1.241 2.873-3.152-.615-2.019-3.63-2.919-5.487-2.84.994-1.664 1.441-3.64 1.865-5.613 1.076-4.104 1.12-5.968-.478-9.964-2.521-7.093-6.999-8.754-13.591-11.032 4.789-2.342 9.479-7.754 7.386-13.357-.898-2.303-2.713-3.772-4.696-5.132-1.01-.692-2.078-1.343-3.21-1.812-.96-.398-1.935-.69-2.852-1.146 2.575-1.797.988-4.979-.515-6.915-5.547-7.41-23.987-5.441-28.728-2.887-2.896 1.561-4.725 7.389-1.985 10.552-1.422.044-2.863-.23-4.282-.286-1.571-.062-3.103.241-4.57.807-2.364.912-4.348 2.423-5.439 4.757-1.316 2.643-1.091 6.251 1.318 8.169-6.142.713-10.201 1.43-12.641 7.825-1.014 2.535-2.165 6.767-.509 9.259.368.557.863 1.02 1.2 1.602.452.773.634 1.689 1.176 2.409-1.894.713-3.889 1.127-5.75 1.94-5.515 2.419-8.489 7.738-10.681 13.058-.913 1.868-1.844 4.281-.25 6.053.952 2.763 5.368 3.582 7.964 3.791 1.479.098 2.934-.487 4.391-.265 2.681.408 4.792 2.427 7.459 2.898 1.584.282 3.221.259 4.816.159 1.052-.066 2.084-.027 3.074-.36-.77 1.662-1.331 3.434-1.778 5.194-.588 2.303-1.002 4.463-2.788 6.167-1.455 1.395-3.017 2.669-3.829 4.568-1.411 3.12-1.163 7.947 3.272 7.858 3.301 1.491 6.435-1.867 9.415-2.755.927-.232 1.9-.186 2.838-.377 3.866-.885 6.993-3.546 10.246-5.667 1.706-1.15 3.577-1.996 5.299-3.107 1.539-.991 2.616-2.375 3.911-3.638 3.353-3.148 8.831-5.81 8.076-11.218-.025-.155-.213-.593-.292-.659a.727.727 0 0 1-.006-.037c5.267 1.241 10.855-.742 14.994-4.109Zm-67.124-98.394c3.216-.255 4.011 2.776 1.573 4.598-1.474 1.015-4.04 1.301-5.778.982-1.12-.205-2.443-.854-2.517-2.151-.031-.57.29-.995.768-1.325 2.183-.217 3.808-1.905 5.954-2.104Zm.375-4.245c1.562-2.108 3.653.614 5.453.811.832.124 1.666-.031 2.5.025 1.627.109 2.825 2.027 2.252 3.511-1.072 2.357-4.003 1.472-6.064 1.588-.149-1.905-2.595-3.319-4.328-2.95-.376-.935-.36-2.137.187-2.985Zm-7.708 6.838c-.48 1.159.046 2.486.961 3.257a.346.346 0 0 0-.027.284c.385 1.221 1.496 1.635 2.678 1.677 1.376.047 2.837-.104 4.197-.289 1.142-.159 2.374-.346 3.392-.893.729-.39 1.631-.759 1.788-1.673.122-.642-.279-.953-.501-1.457.003-.006.003-.012.005-.018-.021.099 2.253.199 2.483.211 1.126.064 2.562.081 3.432-.734.743-.696 1.016-1.816.405-2.686.474-1.673-.349-3.816-2.034-4.399-1.434-.497-3.005.208-4.404-.46-1.186-.566-2.331-1.528-3.738-1.266-2.064.379-2.579 3.032-1.863 4.757-1.357.402-2.674 1.308-3.957 2.052-1.169.232-2.399.63-2.817 1.637Zm20.206 73.844c2.598-.479 4.181-3.803 6.604-4.786 1.223-.497 2.691-.854 4.011-.665 1.348.195 2.604.489 3.906.373a8.334 8.334 0 0 1 3.027-1.037c1.07-.153 2.153-.12 3.227-.039a9.25 9.25 0 0 0 1.697-.004c.586-.06 1.169-.143 1.759-.145a7.667 7.667 0 0 1 1.944.226c.248.064.519.081.749.197.093.045.238.109.242.23.008.149-.068.209-.211.259-.416.137-.888.079-1.318.079-.522-.003-1.046-.009-1.567.002a17.4 17.4 0 0 0-1.867.124c-1.616.205-3.21.471-4.799.835-2.861.655-5.257 2.703-8.237 2.647-.334-.006-1.971-.352-.851-.615 1.039-.245 2.148-.612 3.113-1.076.906-.435 1.765-.964 2.647-1.447-2.385.195-4.802.719-7.085 1.455-2.458.871-4.073 3.381-6.734 3.744-.65.089-.93-.232-.257-.357Zm175.813-7.425h.047-.047Zm-154.775 39.639c.039.128-.149.201-.213.089-.654-1.132-1.052-2.459-.721-3.758.061-.239.427-.137.367.101-.321 1.252.192 2.392.567 3.568Zm163.531-51.018c-.192-.585-.026-1.395.686-1.487.473-.062 1.03.328.985.856-.036.313-.046.689-.288.91-.118.378-.623.496-.942.324-.26-.133-.416-.415-.476-.678-.004-.012.006.002.035.075Zm-5.327-9.751c-.118-.292.083-.553.232-.79.449-.638 1.565-.271 1.532.521-.027.35-.021.748-.309.993-.598.673-1.444.049-1.455-.724Zm-171.667-39.255c-1.246.434-2.587.603-3.889.359-.584-.282-1.088-.674-.677-1.445.156-.288.398-.524.7-.651.466-.195.997.062 1.484.069.515.004 1.062-.036 1.529.224.485.238 1.101.841.853 1.444Zm-2.78-2.193a1.626 1.626 0 0 1-.372-.062c-1.056-.319-2.384.692-2.204 1.824.213 1.304 1.829 1.743 2.941 1.853.865.085 1.809.245 2.682.073.401-.079 1.293-.388 1.105-.952a.789.789 0 0 0-.689-.59c.079-.844-.441-1.497-1.176-1.835a3.8 3.8 0 0 0-1.2-.313c-.362-.037-.729.025-1.087.002Zm17.741 101.839c.035.156-.149.27-.267.158-1.353-1.296-1.434-3.706-.784-5.362.083-.204.395-.129.337.093-.484 1.799.333 3.391.714 5.111Zm-7.107-108.204c-.476 1.536-2.351 1.065-3.572 1.065-.702.033-1.281.164-1.979.371-.345-.056-.591-.28-.61-.914-.033-1.007.896-1.741 1.85-1.768 1 .012 1.904.682 2.927.522.236-.016.683-.203.902-.12.308-.002.805.247.482.844Zm.137-1.356c-.24-.135-.48-.128-.749-.118-.779.029-1.397.135-2.171-.083-.932-.259-1.741-.489-2.662-.05a2.365 2.365 0 0 0-1.335 2.508c.077.463.29.91.65 1.215.604.51 1.213.247 1.896.328.904.107 1.728.443 2.659.424 1.018-.022 2.548-.458 2.914-1.548.184-.545-.341-.935-.819-.871.269-.617.275-1.434-.383-1.805Z"></path></mask><path stroke="#E5742C" stroke-width="4" d="M290.513 252.751c.1.545-.149 1.15-.53 1.538-.515.528-1.148.422-1.79.201-.877-.299-1.351-1.118-.989-2.009.327-.798 1.273-1.368 2.132-1.078.614.21 1.086.691 1.177 1.348Zm-6.335-14.462c.015 0 .015.025 0 .025-.017 0-.017-.025 0-.025Zm3.566 3.882c-.201-.653-.017-2.164.871-2.226.727-.05 1.422.835 1.41 1.511-.002.754-.7 1.399-1.455 1.326-.367-.029-.708-.217-.826-.611Zm7.484-11.036c.182.498-.145 1.167-.605 1.402-.606.306-1.844-.272-1.711-1.043.054-.303.31-.527.575-.682.389-.226.948-.34 1.341-.139a.83.83 0 0 1 .4.462Zm12.138 18.43c-1.343.221-1.393-1.799-.095-1.781 1.109.015 1.124 1.623.095 1.781Zm-2.109-13.604c.408.773-.01 1.832-.741 2.255-1.051.609-1.885-.578-1.912-1.544-.021-.788.42-1.54 1.275-1.544a1.537 1.537 0 0 1 1.378.833Zm-5.41 6.971c-.25.559-1.024.991-1.593.605-.547-.367-.551-1.273-.276-1.803.698-1.223 2.478.058 1.869 1.198Zm-.567 7.885c.416.899-.188 2.499-1.331 2.415a1.187 1.187 0 0 1-1.126-1.014c-.084-.788.104-1.414.882-1.795.555-.272 1.277-.135 1.575.394Zm-1.6-41.251c.236-.205.551-.311.859-.295.443.025.809.328.861.774.015.126.017.259.004.391-.062.62-.432 1.229-1.115 1.261-1.205.06-1.372-1.466-.609-2.131Zm-2.761 11.67c-.778-.757-.765-2.85.69-2.629 1.146.222 1.401 1.569.815 2.434-.248.524-1.132.651-1.505.195Zm2.939-20.648c.369-.599 1.588-.744 2.128-.319.588.458.412 1.484.124 2.067-.112.23-.298.433-.542.503a1.157 1.157 0 0 1-.795-.055c-.799-.338-1.37-1.451-.915-2.196Zm-20.76 77.351c-1.296.235-2.755.454-4.069.367-.592-.037-1.041-.294-1.571-.524-.693-.299-1.38-.305-2.107-.471-.778-.174-.61-1.461.191-1.399.652.052 1.285-.184 1.935-.097.567.079 1.018.392 1.533.613 1.298.556 2.757.813 4.088 1.317.085.029.11.174 0 .194ZM283.371 239c-.669.182-.731-.695-.553-1.136a.626.626 0 0 1 .805-.5c.741.133.607 2.007-.252 1.636Zm8.202-33.655c-.05.77-.727 1.723-1.586 1.514-.486-.116-.763-.583-.813-1.055-.259-.863.06-1.982 1.08-2.05.346.029.644.147.876.371.323.308.47.777.443 1.22Zm-3.632 8.302c.231.319.173.786-.238.91-.371.158-.818.091-.938-.348-.341-.84.714-1.316 1.176-.562Zm50.089-99.654c.031.816.49 1.256-.038 1.76-2.392 1.33-2.125-12.972-1.479-16.693-2.879-4.558-.379-12.455.207-18.993.246-.632-.019-1.915.238-2.593.116-.305.548-.323.705-.037 1.472 2.665-.221 9.615-.498 13.977.13-.305.302-.591.529-.856 3.597-.813-1.123 16.323.336 23.435ZM204.379 260.944c-2.51 1.352-4.677 3.895-7.783 3.526-.472-.052-.499-.769 0-.754 2.208.068 3.977-1.555 5.687-2.745 1.128-.785 3.516-2.497 4.921-1.534.878.875-2.353 1.097-2.825 1.507ZM271.396 50.14c.201 10.553.104 20.726-.188 31.291.169 1-.814 1.293-1.186.58-.557-13.653-1.248-27.048-.78-40.687.018-.537.211-1.061.579-1.45 2.07-2.188 1.484 8.666 1.575 10.266ZM94.981 113.694c-.306 1.404-.062 2.971-.224 4.401-.13 1.169-.376 2.303-1.011 3.31-.534.842-.895 1.432-1.006 2.45-.085.755-.147 1.511-.232 2.268-.182 1.621-.346 3.24-.29 4.873.01.363-.513.344-.555 0-.209-1.855-.128-3.71-.076-5.572.04-1.343-.106-2.73.534-3.961.416-.802.869-1.513 1.064-2.415.32-1.876.08-4.05 1.579-5.48.087-.11.242.01.217.126Zm99.551 141.532c-.018 0-.018-.027 0-.027.015 0 .015.027 0 .027Zm113.325-133.798c-1.083 8.231.618 16.456.159 24.596-2.241 1.76-5.807-21.423.389-38.055 1.823-2.547-.677 9.821-.548 13.459Zm85.254 90.905c3.512-3.252 8.351 1.801 12.457.663-2.699 6.579-11.315 3.854-16.808 4.169-3.168.153-6.165 1.144-9.375 1.011-.84-.035-1.672-.155-2.51-.197-1.238-.016-3.531.382-3.792-1.223.079.021.517-.12.613-.143a62.809 62.809 0 0 1 5.519-1.177c2.016-.34 4.049-.477 6.066-.811.166-.029.168-.31 0-.337-3.835-.591-7.765.383-11.496 1.337 2.227-2.038 4.037-4.453 5.817-6.88 4.208-6.094 7.112-9.518 14.883-6.432 3.976 1.526 9.974 3.868 11.207 8.38-3.738 1.793-8.788-3.356-13.262.997-.743.744-.075 1.37.681.643Zm-23.377-63.208a58.787 58.787 0 0 0-3.593.584c.263-.049-.776-6.295-.875-6.873-.416-2.4-.484-4.913-.664-7.344-.363-4.9-.65-9.815-1.397-14.676-.507-3.295-1.418-6.587-1.731-9.906.667 1.748 1.673 3.058 3.008 4.498 1.84 1.984 3.669 3.974 5.157 6.242.981 1.502 1.85 3.101 2.374 4.823.602 7.446.381 14.947 1.105 22.378-1.107-.112-2.351.143-3.384.274Zm2.031 28.198c-1.849-2.336-4.202-4.28-5.648-6.908-1.838-3.344-2.24-7.193-3.065-10.86-.383-1.7-.88-3.362-1.395-5.022.14-.054.279-.11.42-.166a.485.485 0 0 0 .298.019c.952-.218 2.03-.069 3.017-.206a34.436 34.436 0 0 0 3.01-.561c1.421-.386 2.93-.809 4.395-.622-1.303 8.04-1.38 16.201-1.032 24.326Zm-136.796-71.731c.794-.956 1.798-1.634 2.707-2.467 3.679-3.416 4.288-10.35 4.681-15.146.064-1.474.122-2.954.126-4.43.002-1.301-.049-2.607.286-3.868 3.063 3.369.942 14.172-.139 18.38-1.086 5.211-5.027 8.065-9.609 10.136l.012-.599c.783-.506 1.342-1.293 1.936-2.006Zm-1.762-5.707c.011-.443.021-.885.033-1.324 4.367-4.096 3.494-16.99 7.327-19.369-1.122 3.584-.654 7.626-1.623 11.256-.966 4.137-2.874 6.444-5.737 9.437Zm.317 2.156c6.165-5.534 6.416-8.432 7.165-16.35.178-2.22.027-4.54.925-6.604.238.037.46.116.669.232-.779 2.04-.638 4.349-.739 6.494-.137 2.887-.284 5.85-1.091 8.644-.699 2.406-1.844 5.173-3.638 6.975-1.236 1.137-2.637 2.06-3.724 3.364.021-.846.038-1.692.056-2.535a.916.916 0 0 0 .377-.22Zm123.577 34.983c-.126-.259-.558-.135-.542.147.282 4.668 1.105 9.367 2.366 13.869-4.193.491-8.463-1.237-12.59.019 3.574-7.688 5.507-22.412 5.232-31.793-.635-6.036-6.654-8.816-6.676 3.111-1.056 10.555-2.933 32.458-10.899 31.258-.528-14.862 1.26-30.35-.362-45.173-.323-1.641-1.323-2.995-2.902-3.401-10.247-2.027-8.036 16.12-7.995 31.511-2.653-1.053-3.344-4.415-3.576-7.541-.151-2.887-.249-4.929-.23-7.827-.168-2.205 1.14-7.57-2.332-8.25-3.484-.665-2.157 9.823-2.414 14.369.156 7.273-.811 12.344 8.711 14.557.112 3.232.241 6.461.367 9.695-19.153-3.321-25.525 4.338-41.74 2.612 1.219-19.823 8.425-30.187 9.22-40.445-.333-12.451 1.304-17.503 4.211-26.457 2.182-5.676 4.314-21.473 1.882-20.581-.536.383-.267.537-.222 1.31.458 3.704-.012 7.1-.902 10.642-5.429 16.866-9.108 21.327-8.734 35.896-3.895 17.605-11.629 31.58-9.793 39.239-6.54-.867-20.254.425-20.535.483-.112-2.467-.112-4.932-.097-7.4-.067.089-.129.18-.197.271-1.244-24.063-13.062-18.995-15.038-12.557-1.819 6.693-1.478 13.496-1.109 20.341-.638-.175-1.468-.197-2.142-.073-1.037.015-3.951.093-4.698.048-.588-14.498-.625-29.196-.394-43.71 11.71-4.346 13.163-12.47 13.974-23.725.149-3.528.065-9.207-3.924-10.729-7.628-2.628-8.185 11.289-9.619 16.015.11-3.698.232-7.394.358-11.09l.112-.03c-.038-.602.095-1.55.091-2.246l-.124.038c1.165-16.541-11.82-23.548-18.969-14.628.801-6.074 2.316-11.898 2.623-18.544.759-7.779-.955-15.983 2.357-19.55 7.693-10.035 8.04-6.13 16.605-3.24-1.979 14.294.637 30.702 3.131 28.588.354-.3.457-.804.339-1.25-2.707-10.099-.198-17.52.224-25.88 4.894 2.234 11.114 3.531 12.028 6.512 1.174 5.802 1.66 11.39 2.509 17.266.141 8.542-2.09 16.825.441 14.164.387-.046 1.937-13.353 2.361-20.013.335-3.62-.213-7.46 1.089-10.853.66-1.333 3.8-5.848 3.862-4.608-.408 3.949-.172 13.88 1.817 14.298.848-.36.319-.972.205-1.834-1.17-4.455-.981-9.382.188-13.762 3.473-2.574 8.798-3.35 10.419-7.825 5.325 16.237 2.719 18.8 1.301 30.83-.372 3.152 1.178 4.483 1.511 7.283.193 1.826.673 4.158 1.296 1.538 1.469-12.727.401-28.184 1.088-41.07.41-6.053 3.889-4.959 5.04-7.68 4.526-1.719 9.733-.805 14.373.211.288 3.418-.057 6.93.375 10.422.267 2.258 4.017 14.415 3.798 10.095-1.436-6.544-1.563-13.092-1.484-19.818 15.661 2.056 14.413 4.332 21.406 13.86 2.552 3.479 1.666 8.974 1.888 13.325-1.344 5.515-3.273 10.758-2.554 16.555.223 1.66.25 5.522 1.91 4.913.559-.206.919-.763.933-1.36.075-2.728-.027-5.545.563-8.204 1.54-7.523 4.584-14.597 3.212-22.461 10.769.052 7.486-.417 13.623 6.515 2.005 7.89 5.319 10.362 2.796 19.428-.619 2.172-1.395 4.307-1.786 6.542a16.688 16.688 0 0 0-.234 1.932c.06 8.386.757 16.45-.567 24.693-.135 1.138 1.235 3.999 2.148 2.85.219-1.014-.037-2.355.281-3.46 1.412-1.525.112-8.734.499-10.484.857-3.87-.074-6.251.497-10.183.797-4.772 1.368-9.585 2.372-14.32.281-1.33.701-2.621.974-3.954.197-.952-.018-1.922-.138-2.867-.282-2.809-.195-5.644-.406-8.459.834 1.22.702 2.823.963 4.218.606 3.14.923 6.314 1.262 9.492.271 1.811.346 3.691.898 5.447.166 13.958-1.107 28.146 2.213 41.846.778 3.362 2.028 6.614 2.773 9.974.379 1.689.381 3.433.577 5.149.257 2.255.936 4.434 1.333 6.662a211.909 211.909 0 0 1 2.771 22.216c.063.854.207 10.269 1.124 10.269-1.053.226-2.111.452-3.175.622-1.508-4.519-1.399-9.467-3.421-13.811Zm-106.9 63.028c-1.774 7.868-9.442 6.917-14.291 10.102.008-.885.027-1.768.05-2.651 7.788-2.209 11.466-5.047 13.326-12.142 4.94-18.401.816-59.56-1.095-62.796 5.063 1.339 4.651 17.905 5.044 20.635.428 16.423.319 32.763-3.034 46.852Zm-2.699-67.323c1.047 3.076 1.474 6.595 1.65 9.964 2.881 54.606-.456 59.34-13.157 63.191.023-1.705-.006-3.422-.054-5.136 11.064-2.444 11.365-12.621 11.816-21.132 1.057-15.704-1.612-31.235-.255-46.887Zm-11.215 62.153c14.624-4.086 1.246-58.391 10.443-62.213-1.825 15.909 1.126 31.913-.186 47.898-.387 8.961-1.503 16.676-10.642 18.987.052-1.387.333-3.198.385-4.672Zm-2.237-27.299a551.886 551.886 0 0 1-.491-8.884c1.002.57 2.417.634 3.442.67 1.132.041 2.262-.007 3.396-.044.035.852.068 1.702.089 2.55-.112.141 2.999 23.565-3.551 29.392-1.124-2.34-1.271-5.031-1.538-7.599-.358-3.656-1.244-16.124-1.347-16.085Zm.681 106.401a4.708 4.708 0 0 1-1.631.042c-5.64-63.544-3.539-127.565-6.679-191.29-.236-6.249-.66-12.303-2.498-18.294 9.224 3.17 6.014 18.168 6.261 25.164-.512 15.826-.841 31.542-.694 47.337.267 16.249.54 32.58 2.616 48.717.565 3.806 1.865 7.541 1.701 11.43-.153 3.637-.583 7.265-.691 10.915-.151 5.118.158 10.219.257 15.332.136 26.168 3.171 45.739 1.358 50.647Zm-6.385-.014c-6.507-38.473-5.801-77.805-5.88-116.724-.203-28.114-6.795-76.63-1.285-93.013.49-.083.989-.1 1.488-.05 2.045 7.002 2.088 14.377 2.154 21.667 1.219 67.563 1.364 151.974 5.437 188.134-.641.067-1.266.009-1.914-.014Zm-5.545.709c-.735.162-1.426.263-1.459.149-4.698-16.222-1.264-33.173-2.31-49.754-.229-3.625-.968-7.19-1.496-10.778-.538-3.659-.474-7.251-.501-10.938-.039-5.839-.128-11.679-.242-17.516.017-2.904.497-5.689.733-8.56.463-4.882.027-10.033-.027-15.078.65-36.811-7.865-92.683 1.492-97.07-2.374 7.287-2.039 15.078-2.144 22.685-.248 21.881 2.645 43.397 3.011 65.196-.534 40.482.648 80.869 4.738 121.135.006.077-.928.34-1.795.529Zm-10.878-7.738c-2.951.122-7.086.435-7.61.504-3.713.487-7.573 1.648-11.025-.427-.896-.535-2.736-1.76-2.686-2.971.039-.984 2.142-1.442 2.879-1.71 3.001-1.088 5.443-3.219 8.376-4.444 4.157-1.76 8.775-.087 12.364 2.183.057.991.132 1.982.227 2.968-2.736.154-5.567.06-8.208.906-.335.11-.201.622.147.533 1.666-.436 3.427-.409 5.139-.438 1.074-.018 2.096-.037 3.061.33.097.875.213 1.751.345 2.626-.02-.137-1.322-.13-3.009-.06Zm-23.488-4.403c-1.151-.408-2.618-.458-3.448-1.469-1.126-1.497.747-3.93 1.693-4.996 3.051-3.436 7.972-1.513 10.992 1.19-1.623.991-3.221 2.036-4.998 2.68-1.495.547-3.436 1.084-4.239 2.595Zm168.728-190.91c3.304 2.397 6.683 5.079 8.947 8.528 1.532 2.494 2.107 5.758 2.49 8.617.882 10.353 1.83 20.711 2.883 31.053-.045-.444-.884-1.232-1.161-1.58-1.9-2.402-4.267-4.432-5.907-7.037-1.703-2.705-1.8-6.38-4.211-8.625-.385-2.651-.919-5.294-1.232-7.951-.294-2.548-.178-5.106-.662-7.632-.435-2.266-1.231-4.494-1.38-6.81-.127-2.841.37-5.714.233-8.562Zm-147.945 131.91c-14.309-8.523-17.339-11.745-20.928-26.225-4.253-19.982-5.462-39.027-6.238-59.347-.203-7.147-1.666-16.089 2.215-20.498-1.879 20.206.422 39.413 3.15 59.44 2.709 18.5 6.372 40.022 26.762 44.248.087 1.773.17 3.607.271 5.489-1.484-1.341-3.419-2.046-5.232-3.107Zm-30.369-76.708c.111 2.244.246 4.558.403 6.917-2.577-.311-5.211-.231-7.811-.255-1.657.068-3.253.337-4.919.182-.205-1.026-.611-1.735-.718-2.755-.197-2.118.039-4.222-.033-6.345.192-.615.12-1.297.138-1.931.174-3.588.124-7.208.944-10.725.534-2.189 1.736-4.071 2.438-6.187 1.227-3.97 1.678-8.165 1.811-12.303.029-1.846-.418-4.118.368-5.839.698-1.53 2.322-3.024 3.713-3.934.909-.593 1.635-1.358 2.515-1.98.807-.574 1.724-.974 2.655-1.3.112 2.967-.341 5.991.025 8.94.043.293.776 2.43 1.434 1.3 1.023-1.749.251-4.493.602-6.543.623-7.898-.229-18.595 1.607-21.868 12.664-20.99 19.812-18.29 27.517-24.38 1.59 9.698-1.533 18.781 1.739 23.953.004 1.623-.288 4.454-.565 7.37-1.463 4.753-1.103 10.46-1.288 15.124-.169 22.282 1.778 39.561 2.393 63.38-2.554-1.105-4.928-2.823-7.055-3.439-1.635-.472-3.293-.862-4.955-1.223-.907-.197-1.774-.435-2.651-.404-1.188-10.536-1.594-21.068-2.877-31.921-.615-3.7-.776-7.566-2.095-11.16-1.413-4.337-7.901-7.36-11.07-3.19-5.679 9.267-4.197 20.091-4.265 30.516Zm-15.061 6.589c-12.416-1.919-23.801 5.76-36.2 4.919-6.639-.174-13.266-1.901-19.889-1.126.236-.508.497-.995.793-1.461.997-1.563 2.812-2.62 3.644-4.32.698-.98 1.201-2.06 1.347-3.478.118-1.14.069-2.307.321-3.428.276-1.221.946-2.287 1.797-3.19.801-.854 1.746-1.582 2.543-2.421-1.006 3.411-.354 7.041.226 10.498.209 1.412.314 2.832.975 4.121.066.131.285.135.349 0 1.079-2.234.112-5.091-.229-7.412-.365-2.459-.636-4.987-.046-7.433.129-.531.311-1.045.468-1.567.141-.469.981-1.016 1.293-1.404.853-1.067 1.42-2.311 1.844-3.604.543-1.659.866-3.379 1.356-5.054.19-.605-.749-1.02-1.037-.439-1.502 3.036-2.08 6.367-4.617 8.786-2.053 1.959-4.491 3.304-5.928 5.848-.43.76-.672 1.559-.817 2.379-.166.929-.511 1.856-.702 2.786-.397 1.93-1.902 3.093-3.201 4.459-1.987 2.089-3.426 4.425-4.75 6.94a153.08 153.08 0 0 1-23.79 1.092c-1.996-.062-3.898-.914-5.814-1.401-2.45-.622-5.04-.17-7.47.333-2.34.49-4.64 1.402-7.003 1.748-1.832.269-3.665.528-5.48.889 3.998-3.43 6.761-7.966 8.516-12.999.139-.4 2.929-1.44 3.43-1.77a18.47 18.47 0 0 0 3.042-2.508c3.543-3.625 3.992-8.815 6.77-12.92 1.9-2.808 4.58-5.119 7.308-7.084.96-.693 1.976-1.48 3.094-1.959.06.052 1.324.273 1.875.352-.563 1.704-.507 3.509-1.025 5.219-.52 1.717-1.306 3.309-1.922 4.986a25.892 25.892 0 0 0-1.26 4.908c-.264 1.671-.769 3.08-1.83 4.421-2.784 3.667-4.206 5.75-3.629 10.536.083 1.026.323 1.665.623 2.647.03.096.17.1.195 0 .652-1.718.14-3.48.255-5.263.107-1.811.832-3.525 2.152-4.779 2.094-1.99 4.381-4.02 4.975-6.998.317-1.594.35-3.089 1.116-4.562 1.269-2.432 3.359-4.544 3.665-7.382.073-.655-.089-1.287-.023-1.932.042-.416.091-.837.129-1.26 4.917 1.167 10.369 1.795 15.06-.682.876-.215 1.778-.22 2.67-.348 2.101-.301 4.03-1.227 6.066-1.776 4.427-1.192 9.171-1.704 13.738-2.028 4.709-.333 9.452-.416 14.163-.054 3.88.297 7.823.04 11.623-.84-.315.666-.565 1.371-.809 2.018-.59 1.556-1.165 3.117-1.832 4.641-1.186 2.705-1.987 5.696-3.622 8.169-1.513 2.282-3.975 3.244-5.826 5.151a9.073 9.073 0 0 0-1.579 2.191c-.281.549-.501 1.125-.714 1.703-.207.548-.447 1.068-.664 1.609-.431 1.092-.685 2.245-.855 3.406-.271 1.851-.329 3.727-.551 5.584-.012.103.143.134.189.049.948-1.724 1.024-3.66 1.401-5.561 1.084-7.056 8.581-9.255 12.538-14.288 1.059-1.397 1.548-2.972 2.158-4.593 1.404-3.729 3.092-7.386 3.844-11.311 1.39-.699 2.701-1.582 4.129-2.195 1.728-.74 3.39-1.796 5.238-2.121.049 3.764-.147 7.51-.934 11.199-.761 3.553-2.282 6.982-2.514 10.632-.139 2.203-.023 4.442.023 6.647.082 1.557-.054 3.238.142 4.764-.347 3.063-1.293 6.251-.521 9.321ZM34.577 145.495c-.006-.348-.01-.698-.019-1.047 14.504-.717 22.712-8.158 25.333-22.388 1.057-5.53 2.996-11.728 1.622-17.312.414.918.58 2.025.712 2.95 2.353 18.008-7.351 38.28-27.648 37.797Zm.04 40.107c.103 9.39.544 22.637 1.115 29.664-.538-2.224-1.05-4.463-1.395-6.724-.044-.272-.507-.272-.547 0-.099.665-.155 1.328-.178 1.992-2.102-33.565-1.322-67.313-2.98-100.919-.143-3.741-.395-7.363-1.494-10.947 5.52 1.895 3.599 10.87 3.746 15.057-.306 9.469-.505 18.871-.414 28.321.08 7.415.294 14.843.846 22.237.176 2.313.377 4.625.717 6.917.333 2.249.567 11.832.583 14.402Zm.986 38.446a2.81 2.81 0 0 1-.974.025 506.4 506.4 0 0 1-.714-9.023c.45 2.821 1.134 5.611 1.854 8.379a4.067 4.067 0 0 1-.166.619Zm-3.804.087c-3.911-23.049-3.485-46.619-3.534-69.936-.123-16.825-4.065-45.853-.766-55.657.29-.048.59-.06.888-.029 1.223 4.191 1.25 8.6 1.289 12.961.729 40.43.816 90.938 3.253 112.574-.376.021-.753.05-1.13.087Zm-4.98.419c-2.812-9.707-1.106-19.704-1.73-29.624-.177-2.807.334-5.728-.06-8.547a747.2 747.2 0 0 0-.157-15.075c.009-1.737.296-3.402.437-5.122.277-2.921.017-6.003-.017-9.023.39-22.026-4.704-55.458.895-58.082-1.422 4.361-1.222 9.023-1.284 13.573-.146 13.094 1.582 25.968 1.803 39.012-.331 24.297.406 48.539 2.85 72.708-.654.066-2.082.126-2.736.18ZM7.818 166.205c-2.546-11.958-3.566-23.945-4.03-36.107-.12-4.274-.998-9.626 1.325-12.264-1.124 12.09.55 24.177 2.181 36.16 1.623 11.071 3.812 23.949 16.015 26.478.05 1.061.1 2.158.161 3.283-9.417-5.762-13.324-7.004-15.652-17.55ZM5.73 117.303c.226-.116.462-.174.71-.195 3.44 15.853.437 36.496 7.08 49.694 2.352 5.124 4.53 8.438 9.597 9.497.031.821.07 1.644.108 2.463-11.573-2.506-13.1-16.04-14.746-25.666-1.768-11.85-3.423-23.796-2.749-35.793Zm4.75 6.324c1.646 10.352.578 44.141 12.308 46.659.48 1.233.11 2.771.263 4.148-4.603-1.142-6.248-4.633-8.05-8.02-7.615-15.374-4.03-34.514-8.054-49.304 3.229.033 3.256 4.115 3.533 6.517Zm12.223 44.495c-5.706-2.216-7.417-16.004-8.31-21.594 2.853.016 5.765-.108 8.608-.065.346 10.727.568 20.434-.298 21.659Zm.05-28.497c.083 1.847.18 3.453.248 5.362-.23-.06-.351-.114-.69-.118-2.714-.033-5.425-.081-8.139-.085-.072-.597-.14-1.194-.207-1.793 2.944-1.046 6.03-1.909 8.788-3.366Zm14.697 2.56c13.156-.012 18.69-15.009 20.125-26.039.368-2.199.941-4.379 1.125-6.606.174-2.087.056-4.193 1.23-5.957 2.545 4.405.027 12.242-.86 17.101-2.468 14.169-10.006 21.71-24.528 22.595-.007-.404-.05-.588-.054-.992.97-.195 1.987-.17 2.962-.102Zm13.912-12.773c3.864-7.98 1.802-17.836 7.03-25.238a11.471 11.471 0 0 0-.658 3.287c-.128 2.27-.416 4.403-.842 6.635-1.213 7.027-2.045 13.343-6.396 19.284-3.052 5.101-7.783 7.986-13.781 7.936-.754-.024-1.482-.047-2.202.154l-.013-1.194c7.486.732 13.784-4.295 16.862-10.864Zm-16.874 9.052-.008-1.31c4.83-1.049 8.626-4.937 13.458-6.05-2.92 4.589-7.92 7.725-13.45 7.36Zm65.08-43.129c.219 1.31.577 2.596 1.063 3.827-1.231.205-2.471.373-3.721.408-6.014-.04-9.073-3.3-14.707 1.265-3.576 2.524-6.962 5.534-9.145 9.381-1.783 3.142-2.449 6.708-4.022 9.918-.521 1.068-1.351 2.028-2.22 2.834-.53.489-1.106.933-1.702 1.337-.341.23-2.138.989-2.223 1.298 1.807-6.519 2.434-13.553 1.058-20.115-.62-2.45-2.483-5.253-5.398-4.04-2.56 1.061-3.741 4.401-4.557 6.818-2.314 6.782-1.668 14.524-4.973 20.943-2.885.255-5.607 1.54-8.126 2.917-2.104 1.158-4.042 2.392-6.415 2.993.068-.021.006-1.779.006-1.955.004-.663.008-1.329.014-1.992.01-1.331.027-2.657.046-3.986.04-2.659.097-5.315.163-7.974.069-2.655.15-5.313.236-7.968.038-1.092.15-2.178.168-3.273.023-1.181.004-2.39-.14-3.565-.137-1.094-.398-2.176-.825-3.192a5.595 5.595 0 0 0-.111-.253l65.53-5.626Zm34.564-3.117c-7.037.812-14.164 1.368-20.851 3.843-3.419 1.219-6.84 2.058-10.394 2.707a16.525 16.525 0 0 1-1.347-6.531c.811-21.7 31.746-21.732 32.592-.02Zm35.635-8.235c-.995 1.115-1.825 2.516-2.043 4.017-2.351.136-4.485 1.386-6.637 2.272-5.162.907-10.079 3.482-15.431 2.707-1.639-.24-3.243-.66-4.889-.859-1.467-.176-2.938-.174-4.408-.089-.01-.7-.056-1.389-.141-2.07l33.549-5.978Zm28.058 94.327c3.93 8.565 7.571 14.105 16.035 15.875.058 1.373.118 2.743.183 4.115-19.343-4.187-21.895-26.808-24.646-42.895-2.951-19.803-5.225-38.774-4.093-58.824.372-.195.77-.292 1.184-.327 5.873 26.293.339 60.171 11.337 82.056Zm15.928 12.756c-7.691-1.911-10.439-7.74-13.457-13.405-12.726-25.688-6.24-56.689-12.96-81.401 5.396.054 5.439 6.875 5.903 10.886 2.75 16.977.645 73.204 20.071 76.986.805 2.061.186 4.635.443 6.934Zm-.58-10.547c-9.309-3.606-12.215-25.597-13.616-34.636 2.885.982 5.799 2.16 8.066 4.239 1.769 1.621 3.071 2.354 6.368 3.675.292 13.927.381 24.988-.818 26.722ZM37.228 197.672c9.005-2.023 8.123-19.341 7.743-26.501-.166-3.142-.52-6.743.703-9.746.633 1.219.694 2.618.865 3.959.3 2.046.429 4.143.497 6.21-.07 8.619.445 24.776-9.812 27.682-.002-.534 0-1.071.004-1.604Zm.01-2.371c5.26-1.565 4.254-7.809 4.427-12.246.129-3.327-.333-6.727-.192-10.056.207-3.83.782-8.56 3.419-11.638-.905 2.421-.898 5.19-.799 7.719.157 4.015.478 8.017.211 12.032-.434 4.936-1.591 13.811-7.07 15.501.004-.438.004-.875.004-1.312Zm11.992-29.295c.753 3.295.873 7.004.685 10.353-.876 8.573-1.35 23.365-12.67 24.343-.005-.234-.01-.47-.013-.702 10.78-2.558 10.526-19.056 10.632-27.917-.046-2.114-.166-4.27-.455-6.365-.236-1.534-.3-3.178-.981-4.583 1.409 1.144 2.392 3.175 2.802 4.871Zm-3.796 75.545c-1.954-2.309-2.97-5.2-4.158-7.957 1.306 2.721 3.519 4.999 4.158 7.957Zm4.814 1.913c1.097-.621 2.355-.953 3.626-1.119 2.105-.273 4.3-.398 6.418-.259 1.805.118 4.023.328 5.495 1.507 1.608 1.291.027 2.912-1.145 3.814-2.835-.983-4.04-1.766-7.192-1.165-.207.031-.209.394 0 .421 1.172.159 2.343.056 3.498.369.944.255 1.856.615 2.786.92-1.486.678-3.256.632-4.88.622a26.288 26.288 0 0 1-5.595-.558c-1.181-.246-2.421-.481-3.504-1.03-1.935-.796-.32-2.51.493-3.522Zm358.017-27.18c-.433-.512-.934-.744-1.459-.796 3.721-5.761-2.035-11.164-7.093-13.341-3.026-1.391-6.259-2.835-9.614-3.103-5.428-.487-8.808 3.837-11.643 7.844.782-7.002 1.293-14.23 4.363-20.677 1.488-3.103 3.363-5.996 4.958-9.043 1.685-3.219 2.556-6.633 3.593-10.093 1.279-4.261 2.693-8.467 3.041-12.932.01-.137-.189-.151-.23-.031-1.294 3.822-2.703 7.607-4.073 11.404-1.298 3.597-2.432 7.154-4.214 10.549-1.469 2.802-3.177 5.476-4.601 8.302.472-1.947 1.803-3.568 2.312-5.51 1.045-4.751-.989-9.728.329-14.464.133-.51-.263-.73-.418-.232-.7 2.265-.832 4.61-.853 6.965-.025 2.501.276 5.41-.643 7.785-.758 1.957-2.097 3.551-2.447 5.679a18.059 18.059 0 0 0-.182 4.289c-1.506 4.622-2.405 9.506-2.595 14.371-2.386-9.977-2.179-20.301-2.678-30.479 6.327-15.135 19.109-28.886 17.72-46.277-.033-.35-.532-.359-.553 0-.693 12.099-6.902 22.768-12.273 33.324.435-2.759.743-5.522 1.029-8.303 1.349-2.946 2.912-5.871 3.75-9.003.88-3.285 1.254-6.676 2.06-9.978.07-.288-.377-.51-.505-.211-1.308 3.059-1.714 6.264-2.501 9.472-.656 2.67-1.618 5.3-2.622 7.885.482-4.912 1.457-9.69 2.271-14.545.039-.24-.303-.437-.425-.18-3.725 8.47-2.98 18.123-4.193 27.129-1.357 2.728-2.651 5.487-3.808 8.32-.149-8.78.793-17.573 3.09-26.059.691-2.765 1.234-5.597 2.239-8.267 1.975-5.223 3.91-10.465 5.944-15.664 1.19-2.987 3.746-7.188 2.703-10.428-.14-.381-.722-.236-.618.17.463 1.812-.594 3.911-1.344 5.503-2.409 4.668-3.938 9.699-5.975 14.531 1.05-7.22 1.236-14.52 1.979-21.761.023-.427-.592-.474-.714-.097-2.962 10.053-2.631 20.79-5.499 30.872.563-13.684-1.507-27.284-2.732-40.878-1.165-16.058-1.302-21.573-16.083-30.184-.091-2.446-.476-4.854-.708-7.286-.207-2.199-.072-4.409-.269-6.61-.41-4.166-1.784-8.148-2.221-12.317-.496-2.514-.556-5.196-1.589-7.567-.642-1.317-2.271-2.797-3.821-3.193-2.535-1.552-3.878-4.296-5.944-6.407-5.395-5.58-10.745-.545-15.425-4.155-4.969-3.962-4.309-10.526-11.351-14.141-1.642-.912-3.5-1.252-5.189-2.017-3.761-1.7-7.583-2.156-11.675-2.367-3.067-.158-6.147-.062-9.216.072-7.357.322-11.226 2.421-14.33 8.04-8.27 11.685-5.766 9.121-12.676 10.533-2.451.501-4.148 2.396-5.595 4.297-.652-.467-1.639-.937-1.937-1.074-2.43-1.126-3.682-1.826-6.165-2.834-1.656-.671-3.488-.663-5.216-1.028-4.834-1.202-9.474-3.18-14.094-5.014-2.775-1.177-4.514-1.478-6.693.804-4.566 4.789-7.504 10.659-11.135 16-1.978 2.68-4.94 4.287-7.926 5.757-9.074 3.521-14.688 9.516-19.873 17.519-.855 1.206-1.943 2.11-2.825 3.263-.9 1.175-1.422 2.601-1.834 4.008-1.204 4.103.445 7.991.777 12.145.076.943.128 1.888.163 2.831-1.842.357-3.636 1.182-5.16 2.285-.19.145-.389.284-.585.418l-38.924 6.936a18.53 18.53 0 0 0-2.063-4.643c.033-.015 52.974-41.987 53.001-42.004a.878.878 0 0 0-1.076-1.386l-53.693 40.996a18.684 18.684 0 0 0-5.018-4.08l12.606-33.044a.516.516 0 0 0-.957-.394l-14.338 32.216a18.297 18.297 0 0 0-6.02-1.09c.029-.194-3.45-62.282-3.448-62.496a.518.518 0 0 0-1.033.04c.033.178 1.459 62.536 1.542 62.652a18.343 18.343 0 0 0-6.513 2.282L87.001 44.881a.516.516 0 0 0-.861.568l20.023 32.334a18.617 18.617 0 0 0-2.781 2.817L52.748 47.545a.724.724 0 0 0-.805 1.202l49.775 34.317a18.42 18.42 0 0 0-1.629 3.823l-36.454-8.44a.517.517 0 0 0-.26 1L99.47 89.795a18.557 18.557 0 0 0-.161 2.572l-65.88 7.45c-1.903-3.022-5.092-3.968-7.793-2.664-4.479 2.713-3.798 8.866-3.978 13.378-.105 9.78 1.37 27.338.925 27.533-2.547 1.109-6.167 2.266-8.806 3.128-.517-5.147-.87-10.318-1.478-15.461-.368-2.216-.463-4.529-1.254-6.679-.844-2.595-4.727-4.404-6.623-1.907-3.4 5.543-2.212 12.613-2.255 18.853.324 6.527.883 13.048 1.753 19.525.401 3.01.87 6.012 1.481 8.988.69 3.358 1.559 6.724 3.183 9.767 1.553 2.908 3.95 5.006 6.65 6.828 1.753 1.177 3.579 2.239 5.338 3.408.362.238.716.495 1.068.752.041.035.7 1.153.943 2.181.257 1.082.344 3.124.441 4.228.162 1.824.257 3.653.309 5.481.105 3.704.029 7.408-.064 11.112-.141 5.526 1.438 17.619 1.724 18.083 1.194 1.808 8.816.896 11.676.239.89 2.993 2.045 5.884 3.283 8.743-2.509-1.857-5.723-2.95-8.804-3.101-.3-.015-.377.396-.147.541 1.93 1.223 4.083 1.957 6.066 2.997-1.215.232-2.44.63-3.6.95-.209.058-.163.362.05.371 1.799.103 3.541-.228 5.332-.241 3.164 2.048 4.042 6.492 7.519 8.059-.35 1.826.221 3.634 1.808 4.434.435.808 1.337 1.163 2.304 1.237 1.892.15 3.814.073 5.712.204 2.287.157 4.528.19 6.817.143 1.222-.023 2.809.379 3.73-.674.486-.585.194-1.528-.658-1.493 5.817-4.981.074-8.272-5.108-8.529-3.115-.131-6.455.176-9.43 1.113 3.815-5.478 8.623-7.825 14.689-10.099.385-.103.333-.605 0-.729-1.59-.776-3.343-.438-4.901.24-5.932 2.388-9.475 6.285-12.94 11.473-.14.037-.273.087-.397.149.41-1.563.642-3.165 1.2-4.682.785-1.352 1.702-2.639 2.6-3.885 4.671-6.761 6.62-8.484 14.314-11.415 1.324-.597 2.504-1.475 3.655-2.358.269-.208.132-.759-.257-.612-5.884 1.656-11.538 3.366-15.47 8.422 3.203-5.277 7.063-10.242 11.64-14.396.622-.566-.28-1.428-.91-.912a72.433 72.433 0 0 0-5.826 5.309c.454-1.739.684-3.557 1.592-5.131 1.42-2.452 3.481-4.446 3.792-7.387.025-.234-.315-.247-.385-.052-.985 2.707-3.473 4.681-4.642 7.319-.909 2.05-.793 4.405-1.546 6.494-3.295 3.522-6.135 7.572-8.38 11.878.523-3.852 2.305-7.417 3.441-11.102 1.217-3.941 2.683-7.753 4.148-11.602 1.525-4 3.998-7.404 6.246-11.015.43-.692-.615-1.266-1.074-.628-2.566 3.474-5.429 6.784-7.012 10.866-1.668 3.888-3.164 7.748-4.417 11.796-.902 2.91-2.158 5.725-2.943 8.667.435-5.243.549-10.547 1.468-15.737.616-3.422 1.453-6.805 1.978-10.246.075-.489-.656-.713-.757-.207-.727 3.627-1.929 7.136-2.674 10.764-.772 3.754-1.062 7.586-1.345 11.406a368.05 368.05 0 0 1-.86 9.523c-.142 1.391-.318 2.935-.123 4.378-.539-1.091-1.151-2.148-1.79-3.224-1.985-3.345-2.277-7.205-2.557-11.021.816-4.583 3.392-8.693 3.974-13.33.033-.263-.37-.346-.484-.133-1.598 3.029-2.732 6.298-3.62 9.597.008-4.342.056-8.817 1.368-12.992.163-.499-.573-.794-.836-.352-1.654 2.777-2.163 5.994-2.29 9.18-.142 5.528-.084 11.21 1.47 16.562a84.61 84.61 0 0 1-2.158-6.102c.262-.239.443-.589.418-.927-.056-.775-.54-3.037-.567-3.314a688.706 688.706 0 0 1-1.048-18.948c5.524-.218 9.506-4.315 11.323-9.41.899-2.527 1.104-5.147 1.457-7.784.298-2.234.605-4.465.793-6.712.292-3.484.57-7.12.317-10.61-.215-2.921-1.079-7.044-3.587-8.899-2.65-1.961-4.984.935-5.909 3.242-1.473 3.675-1.488 7.904-1.635 11.801-.149 3.979-.482 7.947-.525 11.931-.034 2.717.2 5.764-2.356 7.022-.095-2.141-.463-4.16-.707-6.303-.553-4.832-.2-9.705-.323-14.553-.44-8.42-1.447-16.672-1.58-25.156 2.896.218 5.818-.178 8.59-1.022a28.118 28.118 0 0 0 4.1-1.61c1.556-.759 2.922-1.511 4.63-1.878a86.396 86.396 0 0 1 4.143-.771c1.672-.276 3.243-.417 4.884-.939 2.75-.879 5.542-1.437 8.305-2.245 3.088-.995 5.54 1.55 8.442 2.118 1.64.346 3.337.446 5.007.512 7.163.284 14.373.506 21.493-.443 3.382-.452 6.565-.975 9.984-.587 11.614 1.022 23.656.96 35.086-1.526 6.971-1.6 14.123-.64 21.199-.98 1.617-.062 3.214.131 4.829.116 1.448-.01 2.866.375 4.311.361.358 4.634.792 9.267 1.312 13.885a297.789 297.789 0 0 0 1.786 13.411c.625 3.976 1.343 7.939 2.25 11.861a91.017 91.017 0 0 0 1.295 5.014c.6 2.065 1.418 4.044 2.264 6.015.95 2.22 2.103 4.451 3.66 6.298 1.25 1.511 2.667 2.871 4.178 4.116 3.069 2.529 6.486 4.583 9.868 6.658.952.585 1.908 1.173 2.852 1.777.993.623 3.566 2.064 3.93 3.266 1.799 3.99 1.194 11.484 1.581 15.787.938 11.593-.823 19.238-.476 30.841-4.478-2.943-10.459-3.932-15.137-.931-.039.029-1.461-1.194-1.577-1.285-.751-.588-1.523-1.125-2.386-1.54-3.241-1.635-7.484-1.277-9.968 1.526a6.778 6.778 0 0 0-1.332 2.149c-.214.556-.418 1.928-1.006 2.197-1.283.643-2.867 2.276-2.14 3.802.412.759 1.372.995 2.225 1.125 1.668.249 3.367.34 5.027.595.583 4.679 3.746 6.432 8.144 6.741 1.624.114 3.195.52 4.83.574 2.175.073 4.241-.367 6.385-.595 2.283-.244 4.578-.41 6.875-.358.547.012 1.213.23 1.737.033.201 1.074.538 2.152.819 3.211.338 1.252.392 2.618 1.24 3.635 3.645 4.372 9.216 6.111 14.754 6.088 2.395.004 4.794-.166 7.186.029 1.95.158 4.462.744 6.155-.576 1.161-.906 2.184-2.862 1.35-4.251-1.422-2.291-6.555-3.864-9.132-4.519.116-.479.245-.956.394-1.428l-.048.008c1.147-5.551.292-11.62-.056-17.445-.604-13.856-1.693-29.129-.915-42.233 1.085-1.293 2.871-1.772 4.421-2.235 2.355-.7 5.013-1.681 6.96-3.21 4.427-3.452 5.893-9.251 6.501-14.578 1.627-9.164 1.724-34.672 1.732-34.844 11.334-2.492 19.045-.181 28.052.203 3.862.186 7.565-.205 11.379-.896 15.441-3.656 21.18-2.806 27.102-1.343-.156 2.685.093 6.832.221 9.631l.499 10.621c.023 2.006.656 3.045 2.707 3.343 2.657.506 5.395.568 8.094.773 2.451.147 7.424.56 9.328-1.045 1.945-1.631.24-3.697-1.72-4.102-2.976-.769-6.014-.091-9.005-.398 1.468-4.578.464-8.759.505-13.365 2.73-1.509 6.101-2.195 8.121-4.734.588-.697.675-1.559 1.166-2.154 1.343-.301 2.725-.048 4.079.041 1.639.112 3.282.1 4.926.121 2.535-.013 5.101.06 7.547-.738 1.571 4.5 1.892 9.354 3.463 13.84-2.707-3.586-3.914-7.937-5.747-11.977-.197-.427-.957-.114-.772.326 2.682 6.993 3.508 10.797 9.025 16.427 1.039 1.102 2.082 2.29 3.285 3.242a26.43 26.43 0 0 1 1.827 2.234c1.557 2.114 1.54 20.689 5.652 29.946.06.135-.863 1.188-.979 1.341-.353.473-.714.943-1.084 1.405-.633.784-1.271 1.729-2.148 2.256-.534.321-1.008.553-1.3 1.133-.224.45-.302.964-.269 1.46.074 1.102.689 2.155 1.645 2.719 1.354.798 2.968.464 4.454.585 1.103.089 2.208.176 3.316.195.656.008 1.312-.021 1.966-.059.327-.016.654-.039.981-.058.288-.018.557.023.846.048 1.286.1 2.573.205 3.86.326 2.573.238 5.145.547 7.683 1.048.064.011.126.025.19.036 3.152.528 8.359.696 11.226-.751 1.753-.91 2.355-2.929 1.008-4.514Zm-106.185 4.97c.077-.228.294-.485.489-.617a.861.861 0 0 1 .705-.114.832.832 0 0 1 .592.611c.16.591-.163 1.378-.85 1.376-.008 0-.019 0-.027-.002-.584-.018-1.097-.68-.909-1.254Zm17.182 15.235c-.24-.391-.55-.905-.209-1.318.197-.332.543-.419.903-.443 1.061-.119 1.167 1.108.633 1.761-.304.481-1.033.517-1.327 0Zm2.225 3.052c.443.744-.821 1.813-1.364.947-.165-.27-.056-.709.073-.981.279-.507 1.028-.458 1.291.034Zm-11.256-.119a1.64 1.64 0 0 1-.466.251c-.536.208-1.304.176-1.422-.526-.068-.411.139-.904.513-1.163.354-.243.898-.369 1.279-.114.476.317.526 1.186.096 1.552Zm13.382-13.035c.188.184.194.439.149.677-.091.599-.961.734-1.161.139-.054-.116-.056-.246-.054-.373.002.002.004.004.006.004-.002-.578.652-.829 1.06-.447Zm-4.239 15.666c-1.347-.062-2.647-.427-3.976-.576.023-1.584-.091-3.224-.403-4.778 2.194-5.236 5.768-15.436 13.26-13.214 6.575 1.975 4.433 11.149.958 14.986-2.469 2.657-6.287 3.735-9.839 3.582Zm-15.448 16.997c-.972-.025-1.947-.015-2.883-.033-4.753-.017-10.039-1.967-14.53.168-3.486-4.76-6.348-9.969-6.594-16.005-.344-5.942 2.338-11.611 7.976-14.012 4.961-2.307 11.031-2.769 16.094-.545 2.642 1.163 5.505 2.869 7.049 5.394 1.386 2.267 1.504 5.153 1.508 7.739.096 7.052-4.157 12.344-8.62 17.294Zm4.603 3.012c3.179 1.639 3.413 5.611 1.695 8.31-.937-.075-1.844-.284-2.752-.544-2.726-.779-5.212-.87-7.966-.147-1.035.272-.596 1.833.443 1.598 1.552-.348 3.125-.522 4.704-.236 1.366.255 2.663.761 4.031 1.018-3.152 2.634-7.229 3.445-11.244 3.395-3.46-4.199-9.056-8.202-14.377-9.34 2.804-7.574 9.135-5.746 15.509-5.06 3.159.297 7.047-.495 9.957 1.006Zm-12.771 21.878c-6.667 5.547-23.228-.491-31.196-1.828-1.488-.317-3.214-.352-4.518-1.206 1.532-.597 3.212.18 4.802-.04.842-.116 1.579-.655 2.446-.609.886.045 1.602.408 2.488.23.188-.04.209-.311.051-.402-.77-.442-1.641-.89-2.539-.985-.996-.106-1.728.413-2.674.547-1.645.237-3.206-.364-4.779.133 2.473-11.767 18.817-13.66 27.849-8.785 1.552.838 4.197 2.513 6.292 4.523-1.389-.267-2.873-.279-4.133-.304-3.556-.065-6.919-.707-10.353-1.588-.817-.209-1.163 1.042-.349 1.262 3.127.85 6.269 1.602 9.518 1.746 1.562.068 3.154-.003 4.681.397a7.31 7.31 0 0 1 1.741.711c.538.303 1.128.655 1.474 1.182.707 1.084.712 2.668.124 3.799a4.91 4.91 0 0 1-.925 1.217Zm-32.39-20.318c.971-1.832 3.86-2.874 5.71-3.488 4.653-1.532 10.748-2.191 13.564 2.719-.515.881-1.014 1.878-1.31 2.936-5.447-.83-11.333-.073-16.118 2.698-2.332-.275-2.823-3.032-1.846-4.865Zm22.186-45.974c-1.583-3.124-2.982-6.781-2.102-10.313 4.828-19.264 45.13-11.589 28.445 10.491-2.236 3.24-5.837 5.066-8.364 8.03-3.94-1.194-8.084-1.213-12.132-.195-1.823-2.771-4.33-5.035-5.847-8.013Zm49.45 13.477c1.039-9.116-8.81-13.705-15.243-7.356-2.74 2.752-4.34 6.423-5.66 10.065-1.513-3.339-4.694-5.493-7.946-6.993 2.583-2.587 5.893-4.38 7.95-7.485 12.173-16.216-3.034-28.068-19.645-24.65-5.592 1.165-9.943 4.342-12.331 9.62-3.479 7.957 1.739 16.59 7.703 21.783-15.963 4.585-14.516 23.792-4.677 33.911a9.205 9.205 0 0 0-1.337 1.231c-3.198-6.498-12.085-4.999-17.486-2.404-2.616 1.27-5.042 2.755-5.294 5.947-.162 2.016.571 4.071 2.247 4.976-2.881 2.198-5.019 5.24-5.733 9.146-.223.893-.349 1.807.197 2.707.627 1.036 1.846 1.658 2.862 2.255.898.526 1.625 1.02 2.62 1.362 1.19.408 2.385.79 3.589 1.14a77.863 77.863 0 0 0 19.053 3.066c.973.035 1.989-.054 2.953.049.803.083 1.58.305 2.403.375 1.973.166 3.968.22 5.924-.128 1.154-.203 2.485-.452 3.334-1.325 1.566-1.608.3-3.888-.603-5.445-.02-.035-.463-.576-.496-.454a6.23 6.23 0 0 0 .161-2.489c.048.336 3.216-.458 3.545-.491 1.983-.202 3.982-.318 5.944-.693 1.737-.329 3.931-.671 4.821-2.375.923-1.764-.332-3.59-1.153-5.087-.073-.133-.149-.271-.168-.425-.05-.423.534-1.225.664-1.673a7.978 7.978 0 0 0 .303-1.822c.145-3.036-1.536-6.245-4.38-7.536-.231-.104-1.668-.749-1.86-.552 4.143-4.276 7.355-9.346 7.988-15.409 9.512 2.651 18.875-2.655 19.751-12.841Zm37.64 7.528c-1.446 1.731-3.578 1.621-5.598 1.458-.751-.552-1.561-1.037-2.264-1.648-1.021-.885-2.012-1.267-3.376-1.02-1.405.257-3.024.821-4.303 1.59-1.953-.908-2.386-3.476-.966-4.979.764-.607 2.096-.916 2.748-1.105 2.393-.756 4.889-.483 7.308-.008 1.327.203 2.695.193 3.941.752 1.633.736 4.102 3.064 2.51 4.96Zm-7.56 8.269c-2.653 2.021-7.921 1.849-10.487-.066 1.047-1.176 1.519-2.909.472-4.159.404-.439.853-.789 1.279-1.202.935-.903 1.906-1.248 3.071-1.807 3.682-1.77 6.774 1.76 7.536 2.989.958 1.55-.727 3.376-1.871 4.245Zm-10.201 9.054c-1.865.13-3.724.176-5.572-.174-2.194-.386-4.358-.68-6.556-.116-.733.186-.416 1.256.31 1.123 2.978-.528 5.714.935 8.655 1.138-.854.195-1.751.255-2.601.251-2.022-.01-3.926.108-5.919.429-1.565.251-3.157.386-4.74.274-1.388-.102-3.419-.282-4.495-1.265-.71-.651-1.213-1.496-1.579-2.379 2.79.41 5.772-2.177 8.514-1.06.743.301 1.269-.951.547-1.303-1.457-.718-3.086-.465-4.624-.162-1.345.29-3.597 1.225-4.897.466-.279-3.619 3.614-3.834 6.23-4.34 1.32-.305 2.626-.632 3.895-1.117.724-.249 1.513-.481 2.285-.436.149.029 4.158-.091 6.043.309 3.254.61 6.418 5.286 4.504 8.362Zm-3.562-14.023c6.325 1.926 1.633 4.206 1.753 4.486-.013.012-.023.027-.035.039.14-.163-2.618-.908-2.873-.926-2.515-.203-4.868-.411-6.919-.27 1.174-4.226 4.361-4.597 8.074-3.329Zm23.664-4.85c-.439-3.234-3.287-4.585-6.136-5.203-.098-.8-1.368-11.869-2.519-16.273-.273-2.251-.691-4.529-.712-6.805-.015-2.036.383-4.055.304-6.088-.068-1.762-.695-3.296-1.033-4.996-.819-4.338.042-9.077-1.699-13.226-.116-.261-.521-.073-.451.19 1.064 4.44-.706 9.112.143 13.594.126.738.395 1.422.569 2.149.503 2.193.134 4.451.072 6.671-2.148-4.954-4.969-9.606-7.49-14.404-1.759-3.352-3.721-6.474-6.643-8.924-.267-.226-.619.116-.385.384 2.775 3.19 4.367 7.439 6.358 11.129 2.262 4.193 4.723 8.274 6.697 12.619a49.688 49.688 0 0 1 1.855 4.753 69.669 69.669 0 0 0 1.167 6.034c-1.604-3.35-3.901-6.281-6.548-8.953-.901-1.353-1.784-2.719-2.594-4.137-1.314-2.292-2.51-4.653-3.702-7.008-1.244-2.467-2.42-5.122-4.096-7.328-.232-.304-.776-.147-.656.276.695 2.496 1.916 4.938 3.04 7.265 1.136 2.355 2.333 4.677 3.639 6.942-5.698-4.753-12.691-8.718-16.795-15.057-.135-.205-.522-.076-.419.179 3.831 9.145 13.753 13.208 20.374 19.971 2.152 3.256 4.458 6.43 6.734 9.57.12.17 1.464 2.838 1.791 4.223.105.445 1.724 4.833 2.111 7.078-3.899-.684-8.208-.949-11.88.742-.666.479-.933.904-1.414 1.472-.082.102-2.974 3.229 1.122 6.1-.575.568-1.064 1.234-1.506 1.92-.495-.353-1.07-.63-1.644-.852-.499-1.851-.538-3.814-.695-5.717a.367.367 0 0 1 .035-.259c2.308-8.007 1.38-17.008-2.256-24.476-.151-.329-.573-.068-.532.226.261 1.895.362 3.808.631 5.704.443 2.925.913 5.854 1.089 8.81-2.13-3.344-4.075-6.921-5.561-10.555-.126-.307-.577-.199-.505.139a34.978 34.978 0 0 0 6.178 13.166c.004.753-.019 1.507-.068 2.258-1.869-5.448-5.797-9.792-8.898-14.537-.159-.261-.602-.095-.505.212.747 2.356 1.658 4.614 2.867 6.778 1.248 2.234 2.661 4.382 3.773 6.691 1.763 3.445 1.84 7.321 2.705 11.015-4.075-1.221-7.54.418-8.223 4.798-2.003.504-4.032.96-6.064 1.345-2.345.49-4.963.807-6.312 3.076-2.459 4.134.709 10.004 5.006 11.301 1.151.349 2.272.402 3.45.355 1.372-.056 2.827.203 4.197.302 1.553.114 3.105.224 4.655.338 1.411.102 2.941.394 4.348.257 1.554-.147 3.192-.269 4.644-.885 1.447-.609 2.364-2.137 1.135-3.503a1.869 1.869 0 0 0-.917-.568c1.37-2.07 1.119-4.97-.089-7.122 1.742.614 3.644.624 5.468.717 2.239.112 5.184.179 7.132-1.08 2.175-1.548.65-3.254-1.493-3.331.725-.934 1.224-2.031 1.242-3.113 1.478.514 3.235.162 4.667-.33.408-.138.602-.441.648-.852.095-.847-.312-1.515-1.035-1.691 1.06-.858 1.828-2.027 1.629-3.476Zm-47.556-1.057c.031.377.079.854-.269 1.096-.464.411-1.223.044-1.215-.574-.004-.375-.045-.846.29-1.084.447-.406 1.213-.037 1.194.562Zm1.116-7.207c.037.348-.021.702-.176.961-.201.334-.553.544-.946.481-.691-.105-1.459-.404-1.594-1.167a1.396 1.396 0 0 1 .383-1.276c.433-.409 1.49-.342 1.915.049.24.222.382.583.418.952Zm-.011-.017c-.012-.18-.018-.089 0 0Zm-169.351 26.066c.308 1.09.565 2.083.513 3.231-.099 2.22-1.664 3.932-3.404 5.176-.71.506-1.532.802-2.409.616-.445-.096-.772-.351-1.178-.531-.66-.294-1.194-.133-1.869-.211-.267-.032-.422-.388-.149-.544 1.227-.688 1.933.046 3.059.396 1.662.519 3.425-2.064 4.052-3.366.423-.885.441-1.857.435-2.819-.004-.703.184-1.459.077-2.154-.377-2.412-3.376-1.741-4.794-.764-.281.194-.525-.253-.263-.452 1.373-1.035 3.575-1.729 5.03-.427.563.503.703 1.154.9 1.849Zm143.661-41.896c.089-.408.226-.945.511-1.26a1.387 1.387 0 0 1 1.016-.446c.532.002.882.45 1.226.794.171.17.327.367.393.601a.966.966 0 0 1-.184.852c-.329.431-.963.723-1.474.748-.78.042-1.687-.375-1.488-1.289ZM97.725 258.917c-.563 1.234-1.637 1.399-2.87 1.582-3.078.452-6.023 1.428-9.078 2.015-2.907.557-5.596.509-8.485-.133-2.016-.396-3.906-1.343-5.967-1.474 1.468-.296 2.97-.406 4.43-.734 1.614-.36 3.203-.313 4.832-.495.114-.01.114-.16 0-.172-1.391-.153-2.8-.071-4.197-.193-1.317-.118-2.554-.135-3.873.048-2.37.327-4.607 1.26-6.968 1.011-1.931-1.728-.91-4.321.964-6.025 1.006-.91 2.033-1.75 2.96-2.745.644-.686 1.285-1.492 2.123-1.95 2.227-.997 4.74-.425 7.08-.918 2.78-.606 5.261-1.34 8.089-.396 3.35 1.048 6.533 2.645 9.143 5.01-.523-.183-1.113-.278-1.6-.357-1.92-.298-3.7.357-5.586.568-1.848.207-3.572-.611-5.428-.58-1.606.029-3.17.425-4.533 1.291-.269.17-.03.576.25.425 1.648-.871 3.476-.943 5.28-.589 1.447.286 2.72.833 4.225.74 1.603-.101 3.172-.649 4.78-.62.86.017 1.63.257 2.442.488.675.188 1.28.281 1.871.592.729 1.101.659 2.442.116 3.611Zm2.074-1.445c-.221-5.625-9.982-10.256-14.744-11.143-1.774-.218-3.516.025-5.24.454-1.85.458-3.556.497-5.441.64a9.001 9.001 0 0 0-5.313 2.301c-1.167 1.068-2.318 2.139-3.504 3.186-3.332 2.763-4.234 7.321.118 9.591.751.655 1.716.954 2.684 1.262 1.921.61 3.778 1.364 5.75 1.804 1.852.41 3.721.427 5.607.53 2.096.119 4.184.479 6.285.255 3.843-.406 7.782-.609 11.538-1.575 1.352-.348 2.825-.964 3.421-2.322.592-1.351.259-3.322-.534-4.524a1.152 1.152 0 0 0-.627-.459Zm51.718-1.813c.47-.404 1.012-.711 1.579-.993.987-.493 1.993-.875 3.061-.319 1.476.769 1.664 2.628 1.248 4.075-.706 2.006-3.208 4.125-5.453 3.466-1.426-.419-2.031-1.891-1.933-3.28a4.31 4.31 0 0 1 1.498-2.949Zm13.544-10.717a4.668 4.668 0 0 0-.826-.238c-.404-.075-.971-.267-1.362-.073-.132.067-.23.193-.368.249-.096-.17-.18-.329-.311-.475a2.302 2.302 0 0 0-.426-.36c-.327-.218-.691-.371-1.056-.514-.372-.149-.753-.288-1.111-.477a3.1 3.1 0 0 1-.606-.406c-1.735-1.445-4.069-1.733-6.238-1.41-1.103.141-2.132.655-3.256.514-.575-.072-1.111-.336-1.676-.414-.518-.073-1.037-.168-1.559-.251a7.067 7.067 0 0 0-1.438-.106c-.118.004-1.389.239-1.362.286-.946-1.598-1.285-3.807-.6-5.555 3.272-.514 6.43-1.575 9.715-2.025 1.993.021 3.945-.334 5.884-.821 1.887-.41 3.818-.821 5.445-1.855 2.552-1.623 3.059-4.347 3.214-7.184.122-2.251-.325-4.546-1.761-6.165 2.055-.075 4.069.17 6.089.541 2.055.377 4.009 1.339 6.122.925 4.108 2.228 9.23 3.644 11.892 7.808-3.039-1.302-4.889-.821-7.977-.145-1.43.228-2.858.232-4.298.116-.665-.054-.822 1.051-.16 1.173 2.385.433 4.643.601 7.056.381 2.454-.277 4.547.867 6.858 1.402 1.627 3.884 1.406 5.723.421 9.661-.909 5.785-2.883 7.178-8.289 8.917.801-3.683-.747-7.81-2.031-11.187-.339-.893-.724-1.782-1.281-2.56-.275-.385-.668-1.026-1.15-1.171-.944-.282-.884.885-.805 1.47 1.804 7.186-.694 13.195-8.987 11.185-1.312-.301-2.51-.757-3.762-1.236Zm-.17 12.039c-1.221 5.238-7.225 6.277-10.236 10.084-.476.604-.894 1.221-1.323 1.808-1.146-2.139-2.947-.525-3.183 1.306a1.33 1.33 0 0 0-1.231-.406c-1.052.192-1.528 1.158-1.623 2.139-1.409-1.169-2.527.476-2.79 1.832-.19-.512-.621-.97-1.091-.962-.759.048-1.113.918-1.368 1.526-.85-.46-1.502.421-1.761 1.14-.17.443-.505 1.329-.379 1.932-.389.327-.906.796-1.469.765-.319-.019-.675-.26-.991-.324-2.395-.331-4.15 1.804-5.977 3.004-1.402.951-3.308 1.536-5.009 1.397-2.268-.187-2.697-2.22-2.382-4.129.596-4.175 3.94-5.305 5.778-8.49-.215 1.264-1.146 2.141-1.798 3.2-.42.707-.855 1.401-1.314 2.083-.76 1.13-1.691 2.425-1.64 3.864.083 2.39 2.685 1.7 4.082 1.045 4.114-1.781 6.579-5.464 8.725-9.239.584-1.016 1.461-2.077 1.381-3.316 2.212-3.595 4.311-6.15 3.742-10.682-.137-.997-.238-1.834-.054-2.841.134-.749.399-1.458.575-2.196.021-.08-.087-.126-.132-.056-1.457 2.32-.582 5.431-1.054 7.999-.403 2.776-2.955 4.372-3.547 7.075a.863.863 0 0 0-.749.021c-1.062.52-2.091 1.196-3.266 1.411-2.44.208-2.728 1.111-4.4 2.602.213-1.437 1.134-2.778 1.742-4.1.955-1.988 2.072-3.891 3.032-5.875.454-.937.717-1.95 1.429-2.738 1.566-1.606 3.832-2.5 4.816-4.643.08-.168-.154-.309-.251-.145-.958 1.579-2.639 2.406-4.042 3.532-1.538 1.233-2.31 2.86-3.189 4.593-1.176 2.322-2.287 4.664-3.469 6.984.71-2.125 1.06-4.343 1.834-6.455.364-.993.803-1.965 1.3-2.9.327-.616.639-1.233 1.018-1.822a6.249 6.249 0 0 1 1.968-1.919c.873-.535 1.85-.728 2.8-1.076 1.161-.494 2.387-1.578 2.964-2.699.085-.556-1.788.738-2.028.837-1.242.722-2.778.774-3.988 1.543.107-.289.242-.564.469-.796.269-.27-.13-.651-.412-.411-.364.311-.662.773-.852 1.267.101-.674.18-1.36.486-1.992.106-.222-.19-.506-.366-.284-.433.551-.809 1.239-.985 1.956-.497-3.206 1.084-4.28 3.657-5.652.234.153.492.261.776.303.238.342.879.425 1.148-.011.977-1.577 1.302-3.528 2.708-4.838 1.61-1.467 3.657-.926 5.561-.617 1.862.543 3.659-.51 5.538-.396.977.062 2.15.313 3.036.752.741.365 1.289.989 1.985 1.412.501.306 1.07.416 1.606.632 1.045.419.453 1.451.087 2.232-.607 1.298-1.461 2.616-1.552 4.082-.094 1.434.809 2.918 2.119 3.515.542.245 1.113.268 1.693.261.521.137 1.066.224 1.616.295.398.389.346 1.082.23 1.581Zm-14.158 14.41c-.023-.207-.1-.42-.187-.609.12-.549.41-1.065.805-1.455.127-.122.406-.417.57-.315.24.17.302.75.554.937-.49.547-1.043 1.042-1.742 1.442Zm-2.898 1.358a1.414 1.414 0 0 0-.139-.356c.094-.796.462-1.773 1.309-1.833.695-.052.813.67 1.111 1.157-.747.373-1.513.707-2.281 1.032Zm-2.918 1.333c-.052.025-.099.054-.151.081.159-.552.412-1.113.797-1.516.749-.787.906.019 1.297.519-.656.284-1.308.58-1.943.916Zm-2.699 1.586c.16-.742.605-1.532 1.178-2.005.201.147.281.78.509.974-.575.326-1.138.67-1.687 1.031Zm-.439.294c-.341.232-.674.477-1.005.73.08-.521.298-1.999 1.072-1.688-.05.311-.114.643-.067.958Zm-12.306-18.755c-2.562.066-5.107-.228-7.444-1.345-1.525-.755-2.922-1.847-4.599-2.257-3.721-.836-7.241 1.683-10.826-.707-.906-.593-1.192-1.285-1.159-2.044 4.92-.935 9.564-4.983 14.614-2.676.432.199.817-.419.383-.653-4.787-2.556-9.483.075-14.291 1.012 1.997-5.068 4.696-10.085 9.824-12.526 2.016-.941 4.162-1.547 6.149-2.554.087-.044 1.292.533 1.509.568 2.111.352 4.179.92 6.244 1.474.921.246 1.836.555 2.777.586.336.011 2.906.367 3.026.125-1.798 3.691-.275 7.918 2.084 11.068-1.542.769-3.106 1.572-3.833 3.159-.705 1.584-.656 3.93.346 5.433-.273.317-.53.684-.76 1.043-1.31-.587-2.736.191-4.044.294Zm-9.567-29.68c2.001-.168 3.715-1.636 5.416-2.589 1.204-.676 2.55-1.022 3.889-1.333 1.79-.419 3.595-.916 5.432-.941.259-.002.245-.22.017-.236-1.631-.123-3.276-.03-4.905.091-1.385.105-2.881.087-4.237.398-2.15.495-3.884 2.713-6.105 2.823-.101-1.729.333-3.466.824-5.054 1.717.187 3.379.06 5.035-.468.478-.162.288-.875-.207-.759-1.374.33-2.73-.375-4.102-.62 2.136-4.908 6.913-5.345 11.522-6.512a.502.502 0 0 0 .366-.288c4.073 2.213 8.848.621 13.213.926 2.767.309 5.337 1.569 8.057 2.139 1.653 2.877 5.821 2.666 8.723 2.658 2.815 1.909 2.724 5.449 2.088 8.448-.805-.646-2.061-.802-3.005-.928-1.817-.245-3.311.172-4.954.646-.888.195-1.764.427-2.645.685-1.64.476-3.299.69-4.986.909-.071.009-.108.127-.021.143 5.406.662 9.08-2.609 14.676.604-1.753 2.118-4.955 2.305-7.455 3.018-1.258.369-2.585.134-3.872.28-1.641.118-3.245.466-4.878.609.747-.319 1.502-.622 2.241-.96.72-.329 1.823-.696 2.246-1.428.641-1.113-.739-1.633-1.594-1.727-1.999-.213-3.974.581-5.814 1.269-2.663 1.003-5.482 2.181-7.442 4.305-2.127.199-4.315.015-6.366-.298-1.612-.274-3.129-.846-4.711-1.234-1.533-.364-3.259-.578-4.555-1.531-.157-.33-.312-.684-.49-1.045-.362-.726-.983-1.31-1.401-2Zm11.364-19.043c-1.608-3.864 1.714-7.852 5.371-8.899 1.521-.504 3.069-.649 4.662-.599 1.445.048 2.749.046 4.117-.4 4.265 3.887 10.876 1.667 15.82.709 1.232-.24 2.529-.522 3.765-.147 1.182.356 2.1 1.179 2.831 2.151-4.855-.414-8.881 2.504-13.635 2.774-.519.027-.527.808 0 .814 4.347.332 11.553-3.548 14.891-1.498.561 1.167.95 2.456.946 3.747a8.318 8.318 0 0 0-5.089-1.861c-1.118-.017-2.171.404-3.285.408-1.111.005-2.144-.182-3.156.386-.116.066-.06.24.066.244 1.046.046 2.049.313 3.09.365.783.038 1.526-.066 2.287-.226 2.983-.626 5.878 1.795 5.979 1.806-.395 2.265-2.344 3.683-4.4 4.386-6.842 2.508-10.906.671-17.461-1.034-5.056-1.201-11.199 2.066-15.644-1.478 1.891.358 3.884-.33 5.627-1.12 1.389-.628 2.622-1.113 4.177-1.117 1.49-.004 2.963.243 4.441.415.064.008.079-.102.014-.114-2.407-.512-4.983-1.292-7.467-1.006-2.38.278-4.313 1.791-6.919 1.474-.409-.05-.86-.247-1.028-.18Zm13.583-15.401c.103-1.298.701-2.471 1.538-3.472 1.279-1.53 3.1-2.506 5.066-2.838 4.259-.719 8.603-.761 12.946-.481 4.364.17 9.692 1.663 11.105 6.353-1.285-.613-2.32-1.639-3.676-2.12-2.005-.674-4.263-.176-6.335-.261-.122-.004-.128.163-.027.201 1.816.682 3.757.669 5.595 1.27.952.313 1.604.964 2.442 1.462.677.4 1.436.622 2.142.951-.335 2.16-3.734 2.309-5.48 2.303-2.687-.014-5.201.008-7.853.518-2.272.433-4.532.919-6.798 1.372-2.033.409-4.227.769-6.271.249-2.447-.62-4.634-2.84-4.394-5.507Zm33.979 7.333c5.064 2.836 8.349 6.884 4.263 12.197-.858-.512-2.425-.413-3.259-.442-1.906-.064-3.552-.278-5.377-.85-.439-.138-.592.51-.186.674 1.622.655 3.114 1.271 4.88 1.352 1.018.047 2.02.178 3.03.331-1.294 1.356-2.817 2.662-4.607 3.29-1.863.653-3.773-.293-5.628-.566-3.087-.452-5.989-.456-9.083-.311-1.635.077-3.966.263-5.712-.419 4.843.487 12.684-.92 14.456-6.16 1.198-3.553-.631-8.654-3.885-11.013 2.161-.066 4.516.176 6.789-.626 1.32 1.041 2.864 1.706 4.319 2.543Zm2.535 51.474c.05-.043.822.139.948.143.536.011 6.18-.657 7.513-.563 1.405.099 2.943-.038 4.323-.318 1.561-.252 3.465-1.241 2.873-3.152-.615-2.019-3.63-2.919-5.487-2.84.994-1.664 1.441-3.64 1.865-5.613 1.076-4.104 1.12-5.968-.478-9.964-2.521-7.093-6.999-8.754-13.591-11.032 4.789-2.342 9.479-7.754 7.386-13.357-.898-2.303-2.713-3.772-4.696-5.132-1.01-.692-2.078-1.343-3.21-1.812-.96-.398-1.935-.69-2.852-1.146 2.575-1.797.988-4.979-.515-6.915-5.547-7.41-23.987-5.441-28.728-2.887-2.896 1.561-4.725 7.389-1.985 10.552-1.422.044-2.863-.23-4.282-.286-1.571-.062-3.103.241-4.57.807-2.364.912-4.348 2.423-5.439 4.757-1.316 2.643-1.091 6.251 1.318 8.169-6.142.713-10.201 1.43-12.641 7.825-1.014 2.535-2.165 6.767-.509 9.259.368.557.863 1.02 1.2 1.602.452.773.634 1.689 1.176 2.409-1.894.713-3.889 1.127-5.75 1.94-5.515 2.419-8.489 7.738-10.681 13.058-.913 1.868-1.844 4.281-.25 6.053.952 2.763 5.368 3.582 7.964 3.791 1.479.098 2.934-.487 4.391-.265 2.681.408 4.792 2.427 7.459 2.898 1.584.282 3.221.259 4.816.159 1.052-.066 2.084-.027 3.074-.36-.77 1.662-1.331 3.434-1.778 5.194-.588 2.303-1.002 4.463-2.788 6.167-1.455 1.395-3.017 2.669-3.829 4.568-1.411 3.12-1.163 7.947 3.272 7.858 3.301 1.491 6.435-1.867 9.415-2.755.927-.232 1.9-.186 2.838-.377 3.866-.885 6.993-3.546 10.246-5.667 1.706-1.15 3.577-1.996 5.299-3.107 1.539-.991 2.616-2.375 3.911-3.638 3.353-3.148 8.831-5.81 8.076-11.218-.025-.155-.213-.593-.292-.659a.727.727 0 0 1-.006-.037c5.267 1.241 10.855-.742 14.994-4.109Zm-67.124-98.394c3.216-.255 4.011 2.776 1.573 4.598-1.474 1.015-4.04 1.301-5.778.982-1.12-.205-2.443-.854-2.517-2.151-.031-.57.29-.995.768-1.325 2.183-.217 3.808-1.905 5.954-2.104Zm.375-4.245c1.562-2.108 3.653.614 5.453.811.832.124 1.666-.031 2.5.025 1.627.109 2.825 2.027 2.252 3.511-1.072 2.357-4.003 1.472-6.064 1.588-.149-1.905-2.595-3.319-4.328-2.95-.376-.935-.36-2.137.187-2.985Zm-7.708 6.838c-.48 1.159.046 2.486.961 3.257a.346.346 0 0 0-.027.284c.385 1.221 1.496 1.635 2.678 1.677 1.376.047 2.837-.104 4.197-.289 1.142-.159 2.374-.346 3.392-.893.729-.39 1.631-.759 1.788-1.673.122-.642-.279-.953-.501-1.457.003-.006.003-.012.005-.018-.021.099 2.253.199 2.483.211 1.126.064 2.562.081 3.432-.734.743-.696 1.016-1.816.405-2.686.474-1.673-.349-3.816-2.034-4.399-1.434-.497-3.005.208-4.404-.46-1.186-.566-2.331-1.528-3.738-1.266-2.064.379-2.579 3.032-1.863 4.757-1.357.402-2.674 1.308-3.957 2.052-1.169.232-2.399.63-2.817 1.637Zm20.206 73.844c2.598-.479 4.181-3.803 6.604-4.786 1.223-.497 2.691-.854 4.011-.665 1.348.195 2.604.489 3.906.373a8.334 8.334 0 0 1 3.027-1.037c1.07-.153 2.153-.12 3.227-.039a9.25 9.25 0 0 0 1.697-.004c.586-.06 1.169-.143 1.759-.145a7.667 7.667 0 0 1 1.944.226c.248.064.519.081.749.197.093.045.238.109.242.23.008.149-.068.209-.211.259-.416.137-.888.079-1.318.079-.522-.003-1.046-.009-1.567.002a17.4 17.4 0 0 0-1.867.124c-1.616.205-3.21.471-4.799.835-2.861.655-5.257 2.703-8.237 2.647-.334-.006-1.971-.352-.851-.615 1.039-.245 2.148-.612 3.113-1.076.906-.435 1.765-.964 2.647-1.447-2.385.195-4.802.719-7.085 1.455-2.458.871-4.073 3.381-6.734 3.744-.65.089-.93-.232-.257-.357Zm175.813-7.425h.047-.047Zm-154.775 39.639c.039.128-.149.201-.213.089-.654-1.132-1.052-2.459-.721-3.758.061-.239.427-.137.367.101-.321 1.252.192 2.392.567 3.568Zm163.531-51.018c-.192-.585-.026-1.395.686-1.487.473-.062 1.03.328.985.856-.036.313-.046.689-.288.91-.118.378-.623.496-.942.324-.26-.133-.416-.415-.476-.678-.004-.012.006.002.035.075Zm-5.327-9.751c-.118-.292.083-.553.232-.79.449-.638 1.565-.271 1.532.521-.027.35-.021.748-.309.993-.598.673-1.444.049-1.455-.724Zm-171.667-39.255c-1.246.434-2.587.603-3.889.359-.584-.282-1.088-.674-.677-1.445.156-.288.398-.524.7-.651.466-.195.997.062 1.484.069.515.004 1.062-.036 1.529.224.485.238 1.101.841.853 1.444Zm-2.78-2.193a1.626 1.626 0 0 1-.372-.062c-1.056-.319-2.384.692-2.204 1.824.213 1.304 1.829 1.743 2.941 1.853.865.085 1.809.245 2.682.073.401-.079 1.293-.388 1.105-.952a.789.789 0 0 0-.689-.59c.079-.844-.441-1.497-1.176-1.835a3.8 3.8 0 0 0-1.2-.313c-.362-.037-.729.025-1.087.002Zm17.741 101.839c.035.156-.149.27-.267.158-1.353-1.296-1.434-3.706-.784-5.362.083-.204.395-.129.337.093-.484 1.799.333 3.391.714 5.111Zm-7.107-108.204c-.476 1.536-2.351 1.065-3.572 1.065-.702.033-1.281.164-1.979.371-.345-.056-.591-.28-.61-.914-.033-1.007.896-1.741 1.85-1.768 1 .012 1.904.682 2.927.522.236-.016.683-.203.902-.12.308-.002.805.247.482.844Zm.137-1.356c-.24-.135-.48-.128-.749-.118-.779.029-1.397.135-2.171-.083-.932-.259-1.741-.489-2.662-.05a2.365 2.365 0 0 0-1.335 2.508c.077.463.29.91.65 1.215.604.51 1.213.247 1.896.328.904.107 1.728.443 2.659.424 1.018-.022 2.548-.458 2.914-1.548.184-.545-.341-.935-.819-.871.269-.617.275-1.434-.383-1.805Z" mask="url(#a)"></path></svg>`);
      if (unref(store).ready) {
        _push(`<h3 class="order-1 pb-20 text-3xl lg:text-4xl 2xl:text-6xl font-black lg:pb-46 font-heading md:order-2 px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto animate subtle-slide-in">${ssrInterpolate(((_b = __props.error) == null ? void 0 : _b.statusMessage) || "Sorry, there's nothing here!")}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<svg width="131" height="128" viewBox="0 0 131 128" fill="none" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "overflow": "visible" })}" class="absolute bottom-0 z-20 overflow-visible -translate-x-120" id="tumbleweed"><path class="origin-center rotate-forever" d="M125.824 100.107C120.476 99.0268 118.018 98.3893 113.121 97.6096C109.267 96.9958 105.162 96.2562 101.278 96.3043C106.021 93.7403 113.013 89.2965 118.702 89.8031C120.444 89.9578 122.171 90.3927 123.873 90.8769C125.937 91.4631 127.981 92.1244 130 92.858C126.676 91.0605 123.522 89.7091 119.795 89.3584C117.616 89.1531 116.093 88.8912 113.307 89.6558C113.113 89.7084 112.575 89.9926 112.575 89.9926C112.861 89.2439 117.525 86.4496 122.194 87.0181C123.364 87.1602 126.636 87.5576 129.124 89.2301C127.479 87.4569 124.826 86.8628 122.37 86.4312C116.991 85.4844 113.409 88.1688 110.591 90.6019L110.63 90.5867C107.961 91.6776 105.725 93.1119 103.464 94.4193C102.723 92.5461 102.362 89.2617 105.873 87.3549C106.383 87.0786 107.107 86.8937 107.721 86.8325C109.008 86.7055 110.295 86.5786 111.582 86.4516C110.283 86.4371 109.001 86.216 107.727 86.3456C105.89 86.5325 103.92 87.5142 102.914 88.9794C101.944 90.394 102.103 93.0586 102.788 94.8048C101.772 95.3766 100.742 95.9134 99.6561 96.3733C99.1606 96.4108 98.6698 96.4628 98.1848 96.5332C95.4641 96.9273 92.7893 97.1293 90.0476 97.4464C86.7993 97.8221 83.2747 98.7452 79.9555 98.7538C73.7889 98.7702 67.2785 97.4089 61.5129 94.8528C56.4606 92.6125 44.9832 82.9908 40.2787 70.0557C43.6117 74.7514 45.711 76.6226 47.3095 78.857C51.6341 84.9015 57.8886 90.6591 65.5802 91.9941C66.5357 92.1599 67.3546 92.223 67.3546 92.223L67.461 92.2763C68.6205 93.1553 72.7364 94.0745 74.5377 93.935C75.9637 93.8245 79.378 97.3103 85.8025 95.4647C79.9037 96.5273 76.4093 93.3468 74.7615 93.2475C73.932 93.1975 72.9319 93.1132 72.1018 93.0514C70.5117 92.933 69.7197 92.3099 69.7197 92.3099L69.6993 92.3092C76.0024 92.2527 82.1545 90.0578 88.5665 90.8315C84.4493 89.7696 80.3059 90.5966 76.1907 90.8973C72.6353 91.1572 69.4034 91.9592 65.825 91.1493C61.7446 90.2255 57.273 87.8714 54.2334 85.1271C53.3632 84.3416 52.5475 83.4981 51.7555 82.6112L51.7561 82.6118C52.7503 81.9276 55.3208 81.4966 57.7796 81.3071C58.0277 82.1927 58.8841 83.3757 59.7404 83.9277C60.5968 84.4797 61.6048 84.8008 62.6114 84.9673C63.9633 85.1903 65.3715 85.2745 66.7155 85.5587C67.9485 85.82 72.2127 87.0931 72.2127 87.0931C72.2127 87.0931 71.8918 86.2549 67.9039 85.2002C66.8283 84.9159 63.7224 84.6751 62.1731 84.1244C61.5549 83.9047 60.6736 83.654 60.0259 83.1145C59.6289 82.7836 59.012 81.7637 58.8394 81.2394C60.2956 81.1663 61.6192 81.1821 62.4284 81.2841C68.4302 82.0427 74.203 84.5304 80.1917 85.4943C87.428 86.6595 94.1825 83.8915 101.495 84.2021C95.7207 83.0079 90.4794 85.0436 84.8844 85.0298C80.1248 85.0179 75.5096 83.5718 70.8438 82.2079C71.5834 80.8071 74.224 79.9551 76.0214 79.938C76.8292 79.9301 77.4468 79.8057 78.2592 79.9208C80.2265 80.1998 81.8087 80.4235 83.3994 80.4301C85.1128 80.4373 86.5631 79.6511 86.7553 79.2353C85.4527 80.0215 83.7019 80.1024 82.0416 79.9189C80.3807 79.736 78.731 79.3149 77.0701 79.1826C74.2752 78.9603 71.4134 80.386 69.2413 81.7624C64.2054 80.488 55.8536 79.5754 51.1813 81.9565C49.0453 79.48 47.0247 76.7035 44.4727 73.9105C42.6917 71.9617 40.1331 68.1753 38.9702 65.4461L38.8436 64.9935C38.356 62.5867 38.1322 59.6674 38.2372 57.0732C40.4986 57.1449 42.4121 57.0514 43.7968 56.7462C45.688 56.3297 47.553 55.8211 49.4206 55.3244C49.6549 55.875 49.9358 56.4455 50.2521 57.0232L50.237 56.9968C48.7158 57.868 47.9435 59.9023 47.469 61.2129C47.2557 61.8005 47.1455 62.8012 47.5163 63.9546L47.5143 63.9506C47.7394 67.6318 48.1771 72.0927 52.6466 75.1863C54.6862 76.5982 56.9823 78.0339 59.4209 77.9365C56.4619 77.3746 53.8718 75.3672 52.9465 74.6501C49.25 71.7867 48.2886 67.1219 48.4212 65.685L48.4192 65.6817C48.5748 65.8922 48.7487 66.1028 48.9442 66.3126C53.547 71.2564 57.529 73.0539 64.1208 74.5053C55.9317 72.2012 50.3827 67.2088 49.1293 65.2211C48.4225 64.102 47.8509 62.4518 48.7198 60.8596C49.0571 60.2412 50.0257 58.1417 50.7049 57.8153L50.697 57.8015C52.2477 60.4023 54.4414 63.0407 56.4383 64.6171C58.7108 66.4107 66.3086 69.8787 67.98 70.386C75.8377 72.7703 82.2182 74.5461 89.352 75.991C92.7972 79.3616 96.2916 81.1275 101.173 81.7743C109.116 82.827 114.815 83.477 121.341 81.9434C113.782 82.6862 106.43 82.3256 98.5339 80.4222C94.7219 79.5031 93.6227 78.6997 90.6474 76.2482L90.6454 76.2476C90.8876 76.2949 91.1304 76.3416 91.3738 76.3877C93.4154 76.7752 95.474 77.1529 97.5201 77.1825C99.5485 77.2114 101.526 76.8969 103.55 76.8851C106.781 76.8673 110.105 77.6384 113.075 79.08C109.584 77.0384 105.768 75.7495 101.788 75.7002C100.094 75.6798 99.3988 75.9067 97.7196 75.9923C95.7469 76.0929 93.6588 75.6561 91.6685 75.3106C87.8151 74.6415 83.0109 73.4921 79.2652 72.2894C76.1684 71.2952 72.9929 70.5787 69.9001 69.5734C66.8283 68.576 66.4392 68.3654 64.5827 67.7989C62.4789 67.1568 60.4085 66.0488 58.5186 64.6507C62.536 64.9092 64.7724 64.7777 66.3585 64.7704C68.6822 64.7606 70.8799 64.7257 73.2042 65.1626C75.5286 65.5994 78.0203 66.1672 80.2856 66.8883C83.6606 67.9614 86.7041 69.6991 90.3508 69.4859C83.7787 68.7845 81.2529 64.7217 68.8325 63.9875C67.8435 63.9296 66.5849 63.9565 65.2337 63.9875C65.7121 62.5018 67.2601 61.4202 68.7721 60.6958C70.309 59.9589 71.9351 59.7036 73.7233 59.651C71.7566 59.3437 69.7492 59.5944 68.0752 60.3563C66.4451 61.0984 65.071 62.5117 64.3143 64.0079C61.7111 64.0612 58.9136 64.0638 57.0834 63.4703C55.0248 61.6478 51.369 58.0397 50.802 54.9612C54.0221 54.1262 57.2711 53.3999 60.6953 53.3084C65.6865 53.1755 70.7421 53.8552 75.7058 55.071C76.1481 55.1789 76.5904 55.2901 77.0327 55.404C77.0707 57.4238 76.6245 59.803 80.0257 60.8122C84.3962 62.1077 85.5735 61.3695 90.8961 65.2191C93.2552 66.9258 96.8888 67.9371 97.8921 68.0818C100.341 68.4338 103.248 69.3615 103.248 69.3615C100.476 68.2601 97.2976 67.4357 94.4949 66.3422C91.6501 65.233 87.5704 61.1596 84.5681 60.8563C79.9831 60.3938 78.5197 58.5443 78.5098 55.7961C83.8948 57.258 89.27 59.1411 94.2875 61.5011C100.465 64.4079 107.663 68.1878 114.293 69.7668C119.667 71.0465 123.861 71.7913 129.15 71.138C106.586 70.1511 86.4206 51.4471 63.9035 51.049C57.2061 50.9306 50.8322 52.4768 44.3513 53.4867C44.1767 51.7833 44.1111 49.4627 45.2654 48.2706C47.0812 46.3954 49.5991 45.9053 51.5435 46.4185C57.609 48.0192 59.707 46.7744 60.9433 46.2987C58.7666 46.1132 57.9936 47.5968 52.8494 45.7191C47.7669 43.8643 42.3052 46.3592 42.6333 53.74C40.0287 54.0999 37.3999 54.3427 34.7205 54.3263C34.2355 54.323 33.6778 54.2934 33.0596 54.2387C33.641 52.3432 34.4363 50.4694 35.3203 48.8574C36.8709 46.4119 41.0045 44.4802 43.8375 43.2143C47.1527 41.7333 49.9646 40.0338 52.7858 38.6699C56.6234 43.1419 65.5054 46.127 70.4107 46.9297C75.3731 47.7416 80.3289 48.3818 84.91 50.526C90.087 52.9485 94.2514 57.112 99.9881 58.5213C93.1247 55.6257 87.8059 50.1273 80.7279 48.0541C74.8697 46.3388 68.7019 46.125 62.9002 44.2143C62.1206 43.9578 60.8967 43.3985 59.579 42.6998C59.8927 42.2951 60.8035 41.6122 61.2911 41.4767C62.0701 41.2602 62.9684 41.4115 63.6135 41.4773C65.2298 41.6431 68.1808 42.7721 69.2702 42.9774C73.3099 43.7387 73.8861 43.1037 73.8861 43.1037C73.8861 43.1037 69.5189 42.4241 68.2917 42.1287C66.9543 41.8069 65.6242 41.2714 64.3006 40.8891C63.3143 40.6049 62.2754 40.4634 61.299 40.6003C60.3232 40.7378 59.1361 41.4582 58.6104 42.1695C56.5157 40.9891 54.2872 39.4127 53.4722 38.3449C54.5031 37.8685 55.5399 37.4428 56.6089 37.0948C60.3363 35.8809 65.2567 35.6512 69.3378 36.5737C72.9155 37.3823 75.6349 39.5305 78.8353 41.3181C82.5384 43.388 86.0925 45.9553 90.253 46.7658C84.0674 44.6907 79.1142 39.9831 73.306 37.1869L73.325 37.1954C73.325 37.1954 74.266 36.9645 75.7753 37.5468C76.5635 37.8514 77.5157 38.2087 78.2998 38.5232C79.8558 39.1489 84.1494 37.7297 89.247 41.2799C83.925 36.7776 79.6031 38.5133 78.3228 37.7909C76.7039 36.877 72.592 35.9361 71.2264 36.2434C71.2264 36.2434 70.3319 35.948 69.3929 35.6855C61.8371 33.5715 54.131 36.1723 48.1128 39.8772C45.8718 41.2569 41.5216 42.2511 37.0744 46.0665C45.2811 34.5558 60.6999 31.1338 66.5895 31.2726C72.7731 31.4194 79.2468 32.9951 84.9415 35.694C88.0067 37.1467 90.9565 39.5344 93.8334 41.2957C96.2621 42.782 98.6671 44.1334 101.05 45.6816C101.377 45.8941 101.711 46.0974 102.051 46.2948C103.276 47.5929 104.664 49.3114 105.658 50.6135C104.223 51.7504 103.064 53.8348 103.287 55.6382C103.511 57.441 104.797 59.3187 106.323 60.4313C107.382 61.2031 108.604 61.6709 109.75 62.3295C108.679 61.5531 107.608 60.7774 106.537 60.0017C106.025 59.6312 105.474 59.095 105.151 58.5891C102.925 55.0993 104.594 52.4235 106.08 51.1681C107.432 52.9492 108.801 54.7737 110.567 56.5955L110.536 56.5652C112.327 60.0405 114.741 64.0809 120.031 65.5475C122.445 66.2172 125.095 66.8225 127.209 65.8995C124.351 66.3626 121.192 65.306 120.064 64.9283C115.99 63.5657 113.164 59.9793 112.286 58.2456C112.356 58.3075 112.425 58.37 112.496 58.4318C114.126 59.8582 116.546 60.9616 118.628 61.7209C122.192 63.019 125.558 63.142 129.232 62.9269C127.12 62.7269 125.009 62.4479 122.906 62.0919C121.17 61.7985 119.428 61.4485 117.767 60.8333C112.303 58.8121 107.413 51.6899 103.885 47.2659C107.447 48.9857 111.468 50.0832 115.217 51.1879C120.004 52.5985 122.489 53.0788 127.794 54.4085C124.175 52.9946 122.665 52.8156 119.666 51.8846C115.432 50.5707 111.171 49.1884 107.099 47.4501C108.488 46.5994 112.766 45.3203 117.112 46.8356C118.45 47.3021 125.078 49.6805 127.017 51.7491C125.851 49.724 119.853 47.0093 117.444 46.3171C112.557 44.9124 109.751 45.5631 106.196 47.0567C103.746 45.9697 101.369 44.7453 99.1173 43.3163C96.06 41.3773 93.2808 39.0949 90.2786 37.0842C83.0319 32.2313 73.5973 27.9342 62.8155 29.8745C58.2646 30.6936 54.5392 31.6931 51.2134 33.0866C51.8119 28.8198 65.2974 24.4195 69.7906 26.4605C77.6771 30.0423 80.8795 29.1679 85.5144 30.9752C82.3691 29.2238 79.0256 28.9652 74.9649 27.7145C72.9831 27.1039 72.3859 26.4664 69.7039 25.4788C66.1984 24.1886 61.3239 25.311 58.4411 26.4315C54.5602 27.9395 50.9516 30.0429 49.8354 33.6972C45.2129 35.8605 41.2893 38.8955 36.808 43.4334C34.038 46.2388 32.7131 50.8247 31.3744 54.0512C28.6891 53.6973 25.2735 53.0235 21.7259 52.157C22.852 49.191 27.7934 34.9755 32.9119 33.1497C35.5552 32.2069 39.9907 31.774 42.3616 30.9805C48.2919 28.9962 50.6241 23.8122 55.5157 23.8353C50.2343 22.501 46.3488 29.0014 41.2401 30.4798C38.1585 31.3707 34.2703 30.9831 31.8219 32.2602C30.1236 33.1465 29.2889 34.359 28.2711 35.8355C29.3703 33.1853 30.4019 30.7318 31.2202 28.8185C32.5333 25.7479 34.1765 22.7543 36.2725 20.1001C38.606 19.8416 41.2394 19.4731 43.0933 18.8C49.7717 16.3768 58.1104 16.0439 62.8693 17.6736C68.6185 19.6415 77.9304 26.6098 81.3992 25.1044C74.1118 24.5182 68.4486 17.9006 61.2373 16.2959C59.9163 16.0018 58.5763 15.8873 57.2461 15.8801L57.2533 15.8794C58.4903 15.0333 64.2999 12.4766 67.6847 15.2761C68.7544 16.161 75.6776 18.4796 77.3024 20.8883C76.591 18.5921 69.9769 15.7834 67.8448 14.4912C63.2473 11.7048 58.5868 14.3991 54.9625 15.961C42.4942 16.7966 44.4097 18.7132 37.2732 18.8968C39.0372 16.894 41.0938 15.1274 43.5061 13.728C48.6994 10.7139 54.635 9.52964 60.9046 9.10592C68.6218 9.38423 73.2587 12.4266 77.8956 16.1176C84.2223 22.8865 84.116 25.9532 86.334 28.429C88.4556 30.7963 92.5826 33.4971 95.9543 35.4973C98.5221 37.0204 107.023 44.1025 110.386 44.0387C106.222 42.8932 99.0353 36.1368 95.3519 34.3123C92.3766 32.8392 89.1781 30.6154 86.695 27.8342C84.3496 25.2077 84.8811 23.0451 80.1169 17.9171C81.3887 18.954 82.6959 20.0139 84.0989 21.0555C87.4332 23.53 90.629 25.7275 93.922 27.2651L93.9213 27.2645C97.5863 30.5522 101.101 33.0747 104.303 34.9959L104.292 34.99C103.136 37.8902 116.02 43.7735 117.797 43.94C115.948 42.7827 104.244 37.6816 105.616 35.7598C113.262 40.0766 118.885 40.8931 120.067 40.6049C115.734 39.8279 112.951 38.7778 109.606 37.0382C109.95 34.6387 119.026 38.5889 121.169 39.112C120.256 38.5633 110.54 33.8965 108.438 36.4158C106.978 35.6223 105.379 34.6999 103.486 33.6189C101.709 32.6037 97.4984 29.7409 96.2411 28.2277L96.226 28.2211C97.9466 28.8435 99.7073 29.2685 101.54 29.4436C106.566 29.9239 111.366 30.368 116.157 32.1569C110.82 29.1231 104.239 29.2995 98.3174 27.5974C93.8196 26.3039 89.2989 24.2642 85.9475 21.1667C85.8012 21.0311 85.6483 20.8916 85.4901 20.7482C89.1604 21.6871 92.4041 21.0963 96.1938 21.8351C98.0595 22.1983 99.1022 22.6543 100.807 23.2819C103.036 24.1024 106.073 26.1065 107.9 26.6486C103.636 23.9609 98.2957 20.8127 92.5203 20.8778C89.8914 20.9068 87.2961 20.7094 84.7072 20.0468C79.8334 15.7413 72.7889 9.54608 64.6877 8.84867C64.6877 8.84867 68.9027 8.88485 71.1811 8.91446C73.7962 8.94736 76.6042 9.56385 79.2035 10.1389C81.306 10.6041 85.4481 11.9028 87.4936 12.6016C95.1524 15.2182 101.308 18.1131 107.518 22.495C98.2596 15.0517 81.6643 7.88478 68.6054 7.5387C64.443 7.42817 59.999 7.57752 55.9475 8.08414C52.8632 8.46969 49.2592 9.04276 46.5575 10.2646C43.7561 11.5324 40.7315 12.7075 38.6493 14.7642C36.1288 17.2539 34.1069 19.8705 32.343 22.7279L32.3515 22.7141C33.345 17.8894 36.6176 10.3896 40.2669 6.90971C43.9162 3.42986 49.2671 2.87982 54.824 2.42386C56.4167 2.29293 63.3234 2.40544 64.899 2.2074C72.0178 1.30997 75.7137 2.76336 83.6507 4.54309C80.6091 2.90943 70.5347 0.453329 64.5611 1.10864C55.515 2.10213 47.9828 -0.477 41.2841 4.56152C34.5853 9.60069 32.0785 17.6605 30.6834 25.6196L30.6913 25.6058C29.4858 27.8573 28.3807 30.262 27.2782 32.8688C25.8739 36.1881 24.3574 41.8958 22.4195 46.4388C16.8304 41.7944 20.3734 32.6346 23.3304 29.7238C29.3801 23.7675 29.4805 17.4769 31.5759 14.2273C28.7921 15.7044 27.5624 24.9386 23.3337 28.6705C19.2559 32.2694 14.6505 39.7509 21.8873 47.633C21.1871 49.1265 20.3918 50.6122 19.5682 51.6103C13.2383 49.9477 6.87155 47.7593 3.78073 45.7447C3.78073 45.7447 3.72232 45.7052 3.66851 45.6941C2.95388 45.5473 1.40387 48.1054 1.19716 48.5568C0.997014 48.9956 0.891362 49.4766 1.16632 49.6779C1.2326 49.7259 1.45637 49.8286 1.45637 49.8286C6.00599 51.6175 15.6112 54.0012 24.7603 55.5428C25.1921 56.8258 25.5117 58.5877 25.6587 60.2721C16.335 64.4086 18.0911 73.3289 20.6576 78.4306C23.3192 83.7211 21.3696 92.7928 23.4491 95.37C22.598 91.4539 24.608 85.5943 21.0067 77.4555C19.2493 73.4842 19.0656 63.5078 25.7525 61.6248C26.0235 66.664 25.5189 72.5914 25.7072 76.2666C25.8549 79.1563 26.0734 81.8605 26.4343 84.4659L26.4317 84.4501C25.0615 92.4152 24.6842 100.956 29.1924 108.529C33.7001 116.104 41.5256 116.998 49.5552 121.853C54.8588 125.06 64.9922 127.174 68.3495 126.989C60.4183 125.179 56.5157 124.914 50.235 120.986C48.8451 120.116 42.4226 117.214 40.994 116.4C36.0093 113.559 31.2471 110.722 29.0369 105.917C26.8267 101.111 26.309 92.754 27.0026 87.8622L27 87.8451C27.6752 91.2546 28.6694 94.5535 30.1676 97.9524C31.4046 100.76 33.8077 103.163 35.9739 105.554C38.0627 107.859 41.2027 109.957 43.9247 111.656C47.5005 113.888 51.5593 115.961 55.4435 117.67C67.6309 123.034 85.3667 123.633 96.4137 120.782C89.2076 122.129 82.5502 122.126 74.5954 121.211C72.4719 120.967 68.2084 120.365 66.1091 119.88C63.5144 119.28 60.7819 118.46 58.2836 117.52C54.5582 116.118 52.0304 114.545 52.0304 114.545C60.3179 117.703 70.1718 114.581 75.7557 112.713C78.9016 113.273 82.0646 114.44 84.9514 115.838C90.9735 118.753 97.7556 118.089 103.238 117.378C101.12 117.045 97.1808 117.645 94.5369 117.406C92.515 117.222 91.2505 117.185 89.1597 116.647C84.7971 115.521 81.1794 113.153 76.7912 112.382C80.7528 111.229 85.3024 111.345 89.6138 112.061C95.6564 113.065 101.681 116.093 107.629 115.611C102.603 115.179 98.0168 113.501 93.21 111.757C91.4572 111.121 89.688 110.747 87.8893 110.574L87.905 110.574C89.5732 109.723 94.422 108.909 96.4051 108.745C98.5156 108.569 100.302 108.412 101.917 108.314C103.018 111.558 113.56 111.474 114.586 111.363C112.43 110.914 102.721 110.615 103.205 108.248C106.878 108.095 109.802 108.336 114.067 109.503C113.069 108.722 107.583 107.025 99.0491 107.695C98.5274 105.352 110.995 105.696 113.083 105.433C111.385 104.813 97.5089 104.643 97.608 107.828L97.6165 107.827C94.0152 108.21 89.9242 109.012 85.4389 110.455H85.4396C81.8815 110.443 78.1929 111.084 74.2837 111.919C72.6379 112.271 71.0754 112.682 69.553 113.087C75.6717 110.421 75.9033 108.19 78.9489 106.783C82.1742 105.293 85.874 104.63 89.1171 104.563C93.1319 104.48 102.034 101.362 106.266 102.116C103.177 100.593 92.9527 103.439 90.0699 103.729C86.2848 104.111 81.5665 104.811 78.8143 106.076C75.9368 107.4 75.0102 110.281 66.8992 113.783C61.3784 115.177 56.7664 115.548 49.5401 112.447C43.886 109.326 38.1033 106.071 34.3104 101.024C32.5484 98.6801 31.2372 96.1523 30.2765 93.533C36.8145 96.8096 34.3989 97.7478 45.6585 103.952C48.4789 106.975 51.9104 111.484 57.0644 110.913C59.4668 110.646 66.5199 110.928 67.9452 109.116C65.638 110.635 58.4634 109.764 57.1785 110.117C53.3035 111.18 48.8254 106.564 47.6698 104.986C48.9206 105.572 50.2186 106.06 51.5593 106.368C58.762 108.024 66.2089 104.371 73.1412 107.001C70.4376 104.1 59.5009 106.488 53.5286 105.805C48.5846 105.24 40.9875 101.303 35.6248 96.1556C34.1358 94.7265 31.8246 93.2396 29.7535 91.9849C28.7036 88.6195 28.1851 85.137 27.9975 81.7269C27.8806 79.6017 27.7474 76.8851 27.6168 73.9566C28.0644 75.764 28.4306 77.2483 29.7043 78.807C31.5404 81.0532 35.2645 82.3875 37.8153 84.5528C42.044 88.1425 43.4627 95.843 48.7907 96.9082C44.2607 94.8002 43.8381 88.9932 39.0194 84.5771C37.0928 82.8125 33.1377 80.4814 31.0095 78.4589C26.8865 74.5422 27.0538 59.149 27.0013 55.904C30.3481 56.4205 33.5695 56.8047 36.3873 56.9837C36.5435 60.6142 36.4437 66.8936 38.0482 70.6485C40.6771 76.8029 43.2934 81.3209 46.8515 85.337C46.6861 89.186 49.2933 92.8928 52.3631 95.9628C54.6534 98.2537 58.7843 101.413 62.4566 101.746C65.2659 102 66.0304 101.671 68.066 101.969C72.2383 102.58 75.4157 103.797 78.9082 103.547C74.0199 103.2 71.3517 100.998 62.8647 100.876C58.0566 100.808 47.1954 90.7571 47.9257 86.5049C50.531 89.2327 53.6343 91.7724 57.5572 94.5028C66.8749 100.989 77.0327 101.124 85.3536 99.792C88.8014 99.2407 92.1331 98.3406 95.6072 97.8787C98.2084 97.5326 100.857 97.4366 103.529 97.505C106.303 100.421 108.577 102.255 113.552 103.082C116.01 103.49 122.463 103.592 124.217 102.227C121.733 103.296 114.81 102.609 113.418 102.458C108.965 101.974 105.393 98.9544 104.324 97.53C108.684 97.6932 113.099 98.2715 117.467 98.9018C120.55 99.3472 122.005 99.8387 125.824 100.107ZM38.9092 65.3001C38.8875 65.1981 38.8646 65.0974 38.8442 64.9954C38.8685 65.1119 38.8974 65.2297 38.9289 65.3474C38.9223 65.3316 38.9158 65.3159 38.9092 65.3001Z" fill="#08000E" stroke="#E2556C" stroke-width="2"></path></svg></div></div>`);
      _push(ssrRenderComponent(Contact, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    var _a;
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      (_a = nuxt.payload).error || (_a.error = createError(error));
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { Contact as C, InnerSecondaryNav as I, Splitting as S, _export_sfc as _, useNuxtApp as a, useHead as b, InnerNav as c, _sfc_main$2 as d, entry$1 as default, __nuxt_component_0$1 as e, SecondaryNav as f, _sfc_main$5 as g, _sfc_main$c as h, useSeoMeta as i, navigateTo as n, useMainStore as u };
//# sourceMappingURL=server.mjs.map
