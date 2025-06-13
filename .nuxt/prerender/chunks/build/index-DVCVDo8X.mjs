import { defineComponent, createElementBlock, openBlock, renderSlot, onUpdated, inject, ref, onMounted, onBeforeUnmount, watch, provide, computed, resolveComponent, createBlock, resolveDynamicComponent, withCtx, createElementVNode, mergeProps, unref, defineAsyncComponent, nextTick as nextTick$1, createVNode, createCommentVNode, withModifiers, toDisplayString, Fragment, renderList, useSSRContext } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BvcfoKbn.mjs';
import { u as useMainStore, a as useNuxtApp, n as navigateTo } from './server.mjs';
import gsap from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/gsap/dist/gsap.js';
import { C as Contact, _ as _sfc_main$b, a as SecondaryNav, S as Splitting } from './Footer-D1OIHc6g.mjs';
import { u as useHead, _ as _export_sfc$1 } from './_plugin-vue_export-helper-CxiIwPb2.mjs';
import { H as Heart } from './Heart-DTlqWAAj.mjs';
import { M as MainButton } from './MainButton-BKS2LnZK.mjs';
import { u as useModalStore, w as work } from './work-Dx-p7MSX.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ufo/dist/index.mjs';
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
import '../_/renderer.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/devalue/index.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED,
  MOUNTED,
  IDLE,
  MOVING,
  SCROLLING,
  DRAGGING,
  DESTROYED
};
function empty(array) {
  array.length = 0;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
var nextTick = setTimeout;
var noop = function noop2() {
};
function raf(func) {
  return requestAnimationFrame(func);
}
function typeOf(type, subject) {
  return typeof subject === type;
}
function isObject$1(subject) {
  return !isNull(subject) && typeOf("object", subject);
}
var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");
function isNull(subject) {
  return subject === null;
}
function isHTMLElement(subject) {
  try {
    return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
  } catch (e) {
    return false;
  }
}
function toArray(value) {
  return isArray(value) ? value : [value];
}
function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}
function includes(array, value) {
  return array.indexOf(value) > -1;
}
function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}
function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function(name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}
function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children2) {
  forEach(children2, parent.appendChild.bind(parent));
}
function before(nodes, ref2) {
  forEach(nodes, function(node) {
    var parent = (ref2 || node).parentNode;
    if (parent) {
      parent.insertBefore(node, ref2);
    }
  });
}
function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function(child2) {
    return matches(child2, selector);
  }) : children2;
}
function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
var ownKeys = Object.keys;
function forOwn$1(object, iteratee, right) {
  if (object) {
    (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function(key) {
      key !== "__proto__" && iteratee(object[key], key);
    });
  }
  return object;
}
function assign(object) {
  slice(arguments, 1).forEach(function(source) {
    forOwn$1(source, function(value, key) {
      object[key] = source[key];
    });
  });
  return object;
}
function merge$1(object) {
  slice(arguments, 1).forEach(function(source) {
    forOwn$1(source, function(value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject$1(value)) {
        object[key] = merge$1({}, isObject$1(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}
function omit(object, keys) {
  forEach(keys || ownKeys(object), function(key) {
    delete object[key];
  });
}
function removeAttribute(elms, attrs) {
  forEach(elms, function(elm) {
    forEach(attrs, function(attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}
function setAttribute(elms, attrs, value) {
  if (isObject$1(attrs)) {
    forOwn$1(attrs, function(value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function(elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}
function create(tag, attrs, parent) {
  var elm = document.createElement(tag);
  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }
  parent && append(parent, elm);
  return elm;
}
function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }
  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}
function display(elm, display2) {
  style(elm, "display", display2);
}
function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}
function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}
function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}
function rect(target) {
  return target.getBoundingClientRect();
}
function remove(nodes) {
  forEach(nodes, function(node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}
function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}
function prevent(e, stopPropagation) {
  e.preventDefault();
  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}
function query(parent, selector) {
  return parent && parent.querySelector(selector);
}
function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}
function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}
function timeOf(e) {
  return e.timeStamp;
}
function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}
var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}
var min = Math.min, max = Math.max, floor = Math.floor, ceil = Math.ceil, abs = Math.abs;
function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}
function between(number, x, y, exclusive) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}
function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}
function sign(x) {
  return +(x > 0) - +(x < 0);
}
function format(string, replacements) {
  forEach(replacements, function(replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}
function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}
var ids = {};
function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}
function EventBinder() {
  var listeners = [];
  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function(target, event, namespace) {
      var isEventTarget = "addEventListener" in target;
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }
  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function(target, event, namespace) {
      listeners = listeners.filter(function(listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }
        return true;
      });
    });
  }
  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;
    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles,
        detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }
    target.dispatchEvent(e);
    return e;
  }
  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function(target) {
      target && forEach(events, function(events2) {
        events2.split(" ").forEach(function(eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }
  function destroy() {
    listeners.forEach(function(data) {
      data[4]();
    });
    empty(listeners);
  }
  return {
    bind,
    unbind,
    dispatch,
    destroy
  };
}
var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";
function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();
  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function(e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }
  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }
  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }
  return assign(binder, {
    bus,
    on,
    off: apply(binder.unbind, bus),
    emit
  });
}
function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;
  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);
      if (rate >= 1) {
        onInterval();
        startTime = now();
        if (limit && ++count >= limit) {
          return pause();
        }
      }
      id = raf(update);
    }
  }
  function start(resume) {
    resume || cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    id = raf(update);
  }
  function pause() {
    paused = true;
  }
  function rewind() {
    startTime = now();
    rate = 0;
    if (onUpdate) {
      onUpdate(rate);
    }
  }
  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }
  function set(time) {
    interval = time;
  }
  function isPaused() {
    return paused;
  }
  return {
    start,
    rewind,
    pause,
    cancel,
    set,
    isPaused
  };
}
function State(initialState) {
  var state = initialState;
  function set(value) {
    state = value;
  }
  function is(states) {
    return includes(toArray(states), state);
  }
  return {
    set,
    is
  };
}
function Throttle(func, duration) {
  var interval = RequestInterval(0, func, null, 1);
  return function() {
    interval.isPaused() && interval.start();
  };
}
function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];
  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function(n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function(key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }
  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }
  function register(options2, query2) {
    var queryList = matchMedia(query2);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }
  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function(merged2, entry) {
      return merge$1(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);
    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }
  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge$1(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }
  function set(opts, base, notify) {
    merge$1(options, opts);
    base && merge$1(Object.getPrototypeOf(options), opts);
    if (notify || !state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }
  return {
    setup,
    destroy,
    reduce,
    set
  };
}
var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};
function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }
  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }
  return {
    resolve,
    orient
  };
}
var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};
function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }
  var elm = from;
  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }
    elm = elm.parentElement;
  }
  return elm;
}
var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;
  function setup() {
    collect();
    init();
    update();
  }
  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function(e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function() {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }
  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }
  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }
  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn$1({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function(className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root,
      track,
      list,
      slides
    });
  }
  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";
    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }
    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }
  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }
  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }
  return assign(elements, {
    setup,
    mount,
    destroy
  });
}
var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";
function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on, emit = event.emit, bind = event.bind;
  var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
  var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var destroyed;
  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }
    listen();
  }
  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);
    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }
  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }
  function initNavigation() {
    var controls = Splide2.splides.map(function(target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }
  function onMove() {
    if (!destroyed) {
      update();
    }
  }
  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }
  function updateActivity() {
    var active = isActive();
    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }
  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);
    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }
    setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }
    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }
    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }
  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }
  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }
  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }
    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }
  function isWithin(from, distance) {
    var diff = abs(from - index);
    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }
    return diff <= distance;
  }
  var self = {
    index,
    slideIndex,
    slide,
    container,
    isClone,
    mount,
    destroy,
    update,
    style: style$1,
    isWithin
  };
  return self;
}
function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
  var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
  var Slides2 = [];
  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
  }
  function init() {
    slides.forEach(function(slide, index) {
      register(slide, index, -1);
    });
  }
  function destroy() {
    forEach$1(function(Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }
  function update() {
    forEach$1(function(Slide2) {
      Slide2.update();
    });
  }
  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
    Slides2.sort(function(Slide1, Slide2) {
      return Slide1.index - Slide2.index;
    });
  }
  function get(excludeClones) {
    return excludeClones ? filter(function(Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }
  function getIn(page) {
    var Controller2 = Components2.Controller;
    var index = Controller2.toIndex(page);
    var max2 = Controller2.hasFocus() ? 1 : options.perPage;
    return filter(function(Slide2) {
      return between(Slide2.index, index, index + max2 - 1);
    });
  }
  function getAt(index) {
    return filter(index)[0];
  }
  function add(items, index) {
    forEach(items, function(slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }
      if (isHTMLElement(slide)) {
        var ref2 = slides[index];
        ref2 ? before(slide, ref2) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }
  function remove$1(matcher) {
    remove(filter(matcher).map(function(Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }
  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }
  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }
  function style2(prop, value, useContainer) {
    forEach$1(function(Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }
  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;
    if (length) {
      images.forEach(function(img) {
        bind(img, "load error", function() {
          if (!--length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }
  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }
  function isEnough() {
    return Slides2.length > options.perPage;
  }
  return {
    mount,
    destroy,
    update,
    register,
    get,
    getIn,
    getAt,
    add,
    remove: remove$1,
    forEach: forEach$1,
    filter,
    style: style2,
    getLength,
    isEnough
  };
}
function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
  var Slides2 = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
  var getAt = Slides2.getAt, styleSlides = Slides2.style;
  var vertical;
  var rootRect;
  var overflow;
  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }
  function init() {
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize(true);
  }
  function resize(force) {
    var newRect = rect(root);
    if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);
      if (overflow !== (overflow = isOverflow())) {
        toggleClass(root, CLASS_OVERFLOW, overflow);
        emit(EVENT_OVERFLOW, overflow);
      }
    }
  }
  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject$1(padding) ? 0 : padding)) || "0px";
  }
  function cssTrackHeight() {
    var height = "";
    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }
    return height;
  }
  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }
  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }
  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }
  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }
  function listSize() {
    return rect(list)[resolve("width")];
  }
  function slideSize(index, withoutGap) {
    var Slide2 = getAt(index || 0);
    return Slide2 ? rect(Slide2.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }
  function totalSize(index, withoutGap) {
    var Slide2 = getAt(index);
    if (Slide2) {
      var right = rect(Slide2.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }
    return 0;
  }
  function sliderSize(withoutGap) {
    return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
  }
  function getGap() {
    var Slide2 = getAt(0);
    return Slide2 && parseFloat(style(Slide2.slide, resolve("marginRight"))) || 0;
  }
  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }
  function isOverflow() {
    return Splide2.is(FADE) || sliderSize(true) > listSize();
  }
  return {
    mount,
    resize,
    listSize,
    slideSize,
    sliderSize,
    totalSize,
    getPadding,
    isOverflow
  };
}
var MULTIPLIER = 2;
function Clones(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on;
  var Elements2 = Components2.Elements, Slides2 = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;
  function mount() {
    on(EVENT_REFRESH, remount);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);
    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      Components2.Layout.resize(true);
    }
  }
  function remount() {
    destroy();
    mount();
  }
  function destroy() {
    remove(clones);
    empty(clones);
    event.destroy();
  }
  function observe() {
    var count = computeCloneCount();
    if (cloneCount !== count) {
      if (cloneCount < count || !count) {
        event.emit(EVENT_REFRESH);
      }
    }
  }
  function generate(count) {
    var slides = Slides2.get().slice();
    var length = slides.length;
    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }
      push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide2, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide2.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements2.list, clone);
        push(clones, clone);
        Slides2.register(clone, index - count + (isHead ? 0 : length), Slide2.index);
      });
    }
  }
  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }
  function computeCloneCount() {
    var clones2 = options.clones;
    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (isUndefined(clones2)) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements2.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }
    return clones2;
  }
  return {
    mount,
    destroy
  };
}
function Move(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
  var Transition;
  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }
  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }
  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }
    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function() {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }
  function jump(index) {
    translate(toPosition(index, true));
  }
  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }
  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;
      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }
    return position;
  }
  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }
  function cancel() {
    translate(getPosition(), true);
    Transition.cancel();
  }
  function toIndex(position) {
    var Slides2 = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;
    for (var i = 0; i < Slides2.length; i++) {
      var slideIndex = Slides2[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);
      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }
    return index;
  }
  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }
  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }
  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize(true) - listSize()));
    }
    return position;
  }
  function offset(index) {
    var focus2 = options.focus;
    return focus2 === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus2 * slideSize(index) || 0;
  }
  function getLimit(max2) {
    return toPosition(max2 ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }
  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }
  function exceededLimit(max2, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max2 !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max2 !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }
  return {
    mount,
    move,
    jump,
    translate,
    shift,
    cancel,
    toIndex,
    toPosition,
    getPosition,
    getLimit,
    exceededLimit,
    reposition
  };
}
function Controller(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
  var Move2 = Components2.Move;
  var getPosition = Move2.getPosition, getLimit = Move2.getLimit, toPosition = Move2.toPosition;
  var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
  var omitEnd = options.omitEnd;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var endIndex;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;
  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
    on(EVENT_RESIZED, onResized);
  }
  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    endIndex = getEnd();
    var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
    if (index !== currIndex) {
      currIndex = index;
      Move2.reposition();
    }
  }
  function onResized() {
    if (endIndex !== getEnd()) {
      emit(EVENT_END_INDEX_CHANGED);
    }
  }
  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);
      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move2.move(dest, index, prevIndex, callback);
      }
    }
  }
  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function() {
      var index = loop(Move2.toIndex(getPosition()));
      setIndex(omitEnd ? min(index, endIndex) : index);
      callback && callback();
    });
  }
  function parse(control) {
    var index = currIndex;
    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, endIndex);
    }
    return index;
  }
  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : endIndex;
      }
    }
    return destination ? dest : loop(dest);
  }
  function computeDestIndex(dest, from, snapPage) {
    if (isEnough() || hasFocus()) {
      var index = computeMovableDestIndex(dest);
      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }
      if (dest < 0 || dest > endIndex) {
        if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? endIndex : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }
    return dest;
  }
  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();
      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }
    return dest;
  }
  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }
  function getEnd() {
    var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
    while (omitEnd && end-- > 0) {
      if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
        end++;
        break;
      }
    }
    return clamp(end, 0, slideCount - 1);
  }
  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
  }
  function toPage(index) {
    return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
  }
  function toDest(destination) {
    var closest2 = Move2.toIndex(destination);
    return isSlide ? clamp(closest2, 0, endIndex) : closest2;
  }
  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }
  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }
  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }
  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }
  return {
    mount,
    go,
    scroll,
    getNext,
    getPrev,
    getAdjacent,
    getEnd,
    setIndex,
    getIndex,
    toIndex,
    toPage,
    toDest,
    hasFocus,
    isBusy
  };
}
var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;
function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on, bind = event.bind, emit = event.emit;
  var classes = options.classes, i18n = options.i18n;
  var Elements2 = Components2.Elements, Controller2 = Components2.Controller;
  var placeholder = Elements2.arrows, track = Elements2.track;
  var wrapper = placeholder;
  var prev = Elements2.prev;
  var next = Elements2.next;
  var created;
  var wrapperClasses;
  var arrows = {};
  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }
  function remount() {
    destroy();
    mount();
  }
  function init() {
    var enabled = options.arrows;
    if (enabled && !(prev && next)) {
      createArrows();
    }
    if (prev && next) {
      assign(arrows, {
        prev,
        next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }
  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);
    if (created) {
      remove(placeholder ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }
  function listen() {
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }
  function go(control) {
    Controller2.go(control, true);
  }
  function createArrows() {
    wrapper = placeholder || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !placeholder && before(wrapper, track);
  }
  function createArrow(prev2) {
    var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '" focusable="false"><path d="' + (options.arrowPath || PATH) + '" />';
    return parseHtml(arrow);
  }
  function update() {
    if (prev && next) {
      var index = Splide2.index;
      var prevIndex = Controller2.getPrev();
      var nextIndex = Controller2.getNext();
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      prev.disabled = prevIndex < 0;
      next.disabled = nextIndex < 0;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
      emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
  }
  return {
    arrows,
    mount,
    destroy,
    update
  };
}
var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
function Autoplay(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements2 = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";
  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements2.track.id);
      stopped || play();
      update();
    }
  }
  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function(e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }
    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function(e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }
    if (toggle) {
      bind(toggle, "click", function() {
        stopped ? play() : pause(true);
      });
    }
    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }
  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }
  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }
    stopped = !!stop;
    update();
    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }
  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }
  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }
  function onAnimationFrame(rate) {
    var bar = Elements2.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }
  function onMove(index) {
    var Slide2 = Components2.Slides.getAt(index);
    interval.set(Slide2 && +getAttribute(Slide2.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }
  return {
    mount,
    destroy: interval.cancel,
    play,
    pause,
    isPaused
  };
}
function Cover(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2), on = _EventInterface7.on;
  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }
  function cover(cover2) {
    Components2.Slides.forEach(function(Slide2) {
      var img = child(Slide2.container || Slide2.slide, "img");
      if (img && img.src) {
        toggle(cover2, img, Slide2);
      }
    });
  }
  function toggle(cover2, img, Slide2) {
    Slide2.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
    display(img, cover2 ? "none" : "");
  }
  return {
    mount,
    destroy: apply(cover, false)
  };
}
var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;
function Scroll(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
  var set = Splide2.state.set;
  var Move2 = Components2.Move;
  var getPosition = Move2.getPosition, getLimit = Move2.getLimit, exceededLimit = Move2.exceededLimit, translate = Move2.translate;
  var isSlide = Splide2.is(SLIDE);
  var interval;
  var callback;
  var friction = 1;
  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }
  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();
    if (snap && (!isSlide || !exceededLimit())) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move2.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }
    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }
  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }
  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);
    if (isSlide && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;
      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }
  function clear() {
    if (interval) {
      interval.cancel();
    }
  }
  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }
  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }
  return {
    mount,
    destroy: clear,
    scroll,
    cancel
  };
}
var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};
function Drag(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
  var state = Splide2.state;
  var Move2 = Components2.Move, Scroll2 = Components2.Scroll, Controller2 = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
  var getPosition = Move2.getPosition, exceededLimit = Move2.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;
  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }
  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }
  function onPointerDown(e) {
    clickPrevented = false;
    if (!disabled) {
      var isTouch = isTouchEvent(e);
      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller2.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move2.cancel();
          Scroll2.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }
  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }
    if (e.cancelable) {
      if (dragging) {
        Move2.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());
        if (expired || hasExceeded) {
          save(e);
        }
        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }
  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }
    if (dragging) {
      move(e);
      prevent(e);
    }
    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }
  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }
  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }
  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);
    if (isFree) {
      Controller2.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller2.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller2.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller2.go(Controller2.toDest(destination), true);
    }
    reduce(true);
  }
  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject$1(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }
  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }
  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);
      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }
    return 0;
  }
  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }
  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }
  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }
  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }
  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }
  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }
  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }
  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }
  function isDragging() {
    return dragging;
  }
  function disable(value) {
    disabled = value;
  }
  return {
    mount,
    disable,
    isDragging
  };
}
var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};
function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}
var KEYBOARD_EVENT = "keydown";
function Keyboard(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;
  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }
  function init() {
    var keyboard = options.keyboard;
    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }
  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }
  function disable(value) {
    disabled = value;
  }
  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function() {
      disabled = _disabled;
    });
  }
  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);
      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }
  return {
    mount,
    destroy,
    disable
  };
}
var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
function LazyLoad(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];
  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
    }
  }
  function init() {
    empty(entries);
    register();
    if (isSequential) {
      loadNext();
    } else {
      off(events);
      on(events, check);
      check();
    }
  }
  function register() {
    Components2.Slides.forEach(function(Slide2) {
      queryAll(Slide2.slide, IMAGE_SELECTOR).forEach(function(img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide2, spinner]);
          img.src || display(img, "none");
        }
      });
    });
  }
  function check() {
    entries = entries.filter(function(data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }
  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }
  function onLoad(data, e) {
    var img = data[0], Slide2 = data[1];
    removeClass(Slide2.slide, CLASS_LOADING);
    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide2);
      emit(EVENT_RESIZE);
    }
    isSequential && loadNext();
  }
  function loadNext() {
    entries.length && load(entries.shift());
  }
  return {
    mount,
    destroy: apply(empty, entries),
    check
  };
}
function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on, emit = event.emit, bind = event.bind;
  var Slides2 = Components2.Slides, Elements2 = Components2.Elements, Controller2 = Components2.Controller;
  var hasFocus = Controller2.hasFocus, getIndex = Controller2.getIndex, go = Controller2.go;
  var resolve = Components2.Direction.resolve;
  var placeholder = Elements2.pagination;
  var items = [];
  var list;
  var paginationClasses;
  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
    var enabled = options.pagination;
    placeholder && display(placeholder, enabled ? "" : "none");
    if (enabled) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list,
        items
      }, getAt(Splide2.index));
    }
  }
  function destroy() {
    if (list) {
      remove(placeholder ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }
    event.destroy();
  }
  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
    var max2 = hasFocus() ? Controller2.getEnd() + 1 : ceil(length / perPage);
    list = placeholder || create("ul", classes.pagination, Elements2.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
    for (var i = 0; i < max2; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides2.getIn(i).map(function(Slide2) {
        return Slide2.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));
      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }
      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li,
        button,
        page: i
      });
    }
  }
  function onClick(page) {
    go(">" + page, true);
  }
  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;
    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }
    var item = items[nextPage];
    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }
  function getDirection() {
    return options.paginationDirection || options.direction;
  }
  function getAt(index) {
    return items[Controller2.toPage(index)];
  }
  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());
    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }
    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }
    emit(EVENT_PAGINATION_UPDATED, {
      list,
      items
    }, prev, curr);
  }
  return {
    items,
    mount,
    destroy,
    getAt,
    update
  };
}
var TRIGGER_KEYS = [" ", "Enter"];
function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
  var events = [];
  function mount() {
    Splide2.splides.forEach(function(target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });
    if (isNavigation) {
      navigate();
    }
  }
  function destroy() {
    events.forEach(function(event) {
      event.destroy();
    });
    empty(events);
  }
  function remount() {
    destroy();
    mount();
  }
  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function(index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }
  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }
  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }
  function onClick(Slide2) {
    Splide2.go(Slide2.index);
  }
  function onKeydown(Slide2, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide2);
      prevent(e);
    }
  }
  return {
    setup: apply(Components2.Media.set, {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    }, true),
    mount,
    destroy,
    remount
  };
}
function Wheel(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2), bind = _EventInterface12.bind;
  var lastTime = 0;
  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }
  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);
      var _min = options.wheelMinThreshold || 0;
      var sleep = options.wheelSleep || 0;
      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }
      shouldPrevent(backwards) && prevent(e);
    }
  }
  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }
  return {
    mount
  };
}
var SR_REMOVAL_DELAY = 90;
function Live(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2), on = _EventInterface13.on;
  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }
  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);
    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
      interval.cancel();
    }
  }
  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }
  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }
  return {
    mount,
    disable,
    destroy
  };
}
var ComponentConstructors = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Media,
  Direction,
  Elements,
  Slides,
  Layout,
  Clones,
  Move,
  Controller,
  Arrows,
  Autoplay,
  Cover,
  Scroll,
  Drag,
  Keyboard,
  LazyLoad,
  Pagination,
  Sync,
  Wheel,
  Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};
function Fade(Splide2, Components2, options) {
  var Slides2 = Components2.Slides;
  function mount() {
    EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
  }
  function init() {
    Slides2.forEach(function(Slide2) {
      Slide2.style("transform", "translateX(-" + 100 * Slide2.index + "%)");
    });
  }
  function start(index, done) {
    Slides2.style("transition", "opacity " + options.speed + "ms " + options.easing);
    nextTick(done);
  }
  return {
    mount,
    start,
    cancel: noop
  };
}
function Slide(Splide2, Components2, options) {
  var Move2 = Components2.Move, Controller2 = Components2.Controller, Scroll2 = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;
  function mount() {
    EventInterface(Splide2).bind(list, "transitionend", function(e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }
  function start(index, done) {
    var destination = Move2.toPosition(index, true);
    var position = Move2.getPosition();
    var speed = getSpeed(index);
    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll2.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move2.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move2.jump(index);
      done();
    }
  }
  function cancel() {
    transition("");
    Scroll2.cancel();
  }
  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;
    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller2.getIndex(true);
      var end = Controller2.getEnd();
      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }
    return options.speed;
  }
  return {
    mount,
    start,
    cancel
  };
}
var _Splide = /* @__PURE__ */ function() {
  function _Splide2(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge$1({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide2.defaults, options || {});
    try {
      merge$1(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }
    this._o = Object.create(merge$1({}, options));
  }
  var _proto = _Splide2.prototype;
  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;
    var state = this.state, Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn$1(Constructors, function(Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn$1(Components2, function(component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };
  _proto.sync = function sync(splide) {
    this.splides.push({
      splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });
    if (this.state.is(IDLE)) {
      this._C.Sync.remount();
      splide.Components.Sync.remount();
    }
    return this;
  };
  _proto.go = function go(control) {
    this._C.Controller.go(control);
    return this;
  };
  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };
  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };
  _proto.emit = function emit(event) {
    var _this$event;
    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));
    return this;
  };
  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);
    return this;
  };
  _proto.remove = function remove2(matcher) {
    this._C.Slides.remove(matcher);
    return this;
  };
  _proto.is = function is(type) {
    return this._o.type === type;
  };
  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };
  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }
    var event = this.event, state = this.state;
    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn$1(this._C, function(component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }
    return this;
  };
  _createClass(_Splide2, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);
  return _Splide2;
}();
var Splide$1 = _Splide;
Splide$1.defaults = {};
Splide$1.STATES = STATES;
const EVENTS = [
  EVENT_ACTIVE,
  EVENT_ARROWS_MOUNTED,
  EVENT_ARROWS_UPDATED,
  EVENT_AUTOPLAY_PAUSE,
  EVENT_AUTOPLAY_PLAY,
  EVENT_AUTOPLAY_PLAYING,
  EVENT_CLICK,
  EVENT_DESTROY,
  EVENT_DRAG,
  EVENT_DRAGGED,
  EVENT_DRAGGING,
  EVENT_HIDDEN,
  EVENT_INACTIVE,
  EVENT_LAZYLOAD_LOADED,
  EVENT_MOUNTED,
  EVENT_MOVE,
  EVENT_MOVED,
  EVENT_NAVIGATION_MOUNTED,
  EVENT_PAGINATION_MOUNTED,
  EVENT_PAGINATION_UPDATED,
  EVENT_REFRESH,
  EVENT_RESIZE,
  EVENT_RESIZED,
  EVENT_SCROLL,
  EVENT_SCROLLED,
  EVENT_UPDATED,
  EVENT_VISIBLE
];
const SPLIDE_INJECTION_KEY = "splide";
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
const _sfc_main$2$1 = defineComponent({
  name: "SplideTrack",
  setup() {
    onUpdated(() => {
      var _a;
      const splide = inject(SPLIDE_INJECTION_KEY);
      (_a = splide == null ? void 0 : splide.value) == null ? void 0 : _a.refresh();
    });
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = { class: "splide__track" };
const _hoisted_2 = { class: "splide__list" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("ul", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
const SplideTrack = /* @__PURE__ */ _export_sfc(_sfc_main$2$1, [["render", _sfc_render$2]]);
const _sfc_main$1$1 = defineComponent({
  name: "Splide",
  emits: EVENTS.map((event) => `splide:${event}`),
  components: { SplideTrack },
  props: {
    tag: {
      default: "div",
      type: String
    },
    options: {
      default: {},
      type: Object
    },
    extensions: Object,
    transition: Function,
    hasTrack: {
      default: true,
      type: Boolean
    }
  },
  setup(props, context) {
    const splide = ref();
    const root = ref();
    onMounted(() => {
      if (root.value) {
        splide.value = new Splide$1(root.value, props.options);
        bind(splide.value);
        splide.value.mount(props.extensions, props.transition);
      }
    });
    onBeforeUnmount(() => {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.destroy();
    });
    watch(() => merge({}, props.options), (options) => {
      if (splide.value) {
        splide.value.options = options;
      }
    }, { deep: true });
    provide(SPLIDE_INJECTION_KEY, splide);
    const index = computed(() => {
      var _a;
      return ((_a = splide.value) == null ? void 0 : _a.index) || 0;
    });
    const length = computed(() => {
      var _a;
      return ((_a = splide.value) == null ? void 0 : _a.length) || 0;
    });
    function go(control) {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.go(control);
    }
    function sync(target) {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.sync(target);
    }
    function bind(splide2) {
      EVENTS.forEach((event) => {
        splide2.on(event, (...args) => {
          context.emit(`splide:${event}`, splide2, ...args);
        });
      });
    }
    return {
      splide,
      root,
      index,
      length,
      go,
      sync
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SplideTrack = resolveComponent("SplideTrack");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: "splide",
    ref: "root"
  }, {
    default: withCtx(() => [
      _ctx.hasTrack ? (openBlock(), createBlock(_component_SplideTrack, { key: 0 }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      })) : renderSlot(_ctx.$slots, "default", { key: 1 })
    ]),
    _: 3
  }, 512);
}
const Splide = /* @__PURE__ */ _export_sfc(_sfc_main$1$1, [["render", _sfc_render$1]]);
const _sfc_main$a = defineComponent({
  name: "SplideSlide"
});
const _hoisted_1 = { class: "splide__slide" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const SplideSlide = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render]]);

const _sfc_main$9 = {
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    const navBrand = ref(null);
    const mainStore = useMainStore();
    const navContainer = ref(null);
    const isSticky = ref(false);
    const nav = ref(null);
    ref(null);
    const isDesktop = ref(false);
    ref(null);
    let tl;
    const onNavHoverIn = (event) => {
      const targetEl = event.target;
      const chars = targetEl.querySelectorAll(".char");
      if (!chars.length) return;
      const tl2 = gsap.timeline();
      tl2.fromTo(
        chars,
        {
          x: () => gsap.utils.random(-50, 50),
          y: () => gsap.utils.random(-40, 0),
          className: "char text-current"
        },
        {
          x: 0,
          y: 0,
          className: "char text-electric-purple dark:text-accent",
          ease: "power3.out",
          duration: 0.5,
          stagger: {
            amount: 0.3,
            from: "random"
          }
        }
      );
      tl2.fromTo(
        chars,
        {
          x: () => gsap.utils.random(-50, 50),
          y: () => gsap.utils.random(-40, 0),
          className: "char text-electric-purple dark:text-accent"
        },
        {
          x: 0,
          y: 0,
          className: "char text-current",
          ease: "power3.out",
          duration: 0.5,
          stagger: {
            amount: 0.3,
            from: "random"
          }
        },
        0.4
      );
      return tl2;
    };
    const effectTimeline = (targetEl, interval = 0) => {
      const tl2 = gsap.timeline({ paused: true });
      const split = Splitting()[0];
      const chars = (split == null ? void 0 : split.chars) || [];
      if (chars.length === 0) return;
      tl2.fromTo(
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
        },
        interval
      );
      return tl2;
    };
    function updateStickyTimeline() {
      tl.clear();
      const intCom = computed(() => isDesktop.value ? 0.2 : 0);
      if (!nav.value) return;
      const int = intCom.value;
      tl.fromTo(nav.value, { alpha: 0 }, { alpha: 1 }, 0);
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
          await nextTick$1();
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div data-v-3ed8b787></div><header id="nav" class="${ssrRenderClass([isSticky.value ? "fixed left-0 w-full bg-background/70 dark:bg-primary/70 inverted:bg-primary/70 inverted:dark:bg-background/70 backdrop-blur transition duration-700" : " absolute ", "py-4 mx-auto z-20 w-full will-change-transform transform-gpu"])}" data-v-3ed8b787><div class="nav-wrapper max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto flex items-center justify-between" data-v-3ed8b787><h2 class="${ssrRenderClass([isSticky.value ? ["text-lg", "lg:text-lg", "hover:text-electric-purple", "dark:hover:text-accent"] : ["text-2xl", "lg:text-4xl"], "text-primary dark:text-background inverted:text-background inverted:dark:text-primary nav-brand transition-all duration-700"])}" data-v-3ed8b787><a aria-label="Return Home" href="/" class="${ssrRenderClass([{ "animate": unref(mainStore).loaded }, "text-nowrap subtle-slide-in font-black block opacity-0"])}" data-v-3ed8b787> hi, i\u2019m Emm.</a></h2><nav class="${ssrRenderClass([isSticky.value ? [""] : ["opacity-0"], "flex space-x-8 text-sm font-heading font-semibold group/nav ml-auto text-primary dark:text-background inverted:text-background inverted:dark:text-primary"])}" data-v-3ed8b787>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "group-hover/nav:opacity-60 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700",
        to: "/about",
        "aria-label": "Find out more about me!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-item" data-v-3ed8b787${_scopeId}>about</span>`);
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
        class: "group-hover/nav:opacity-60 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700",
        to: "/work/",
        "aria-label": "View my featured work!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-item" data-v-3ed8b787${_scopeId}>work</span>`);
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
      _push(`<a href="#sayHello" class="group-hover/nav:opacity-60 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700" aria-label="Send me a message!" data-v-3ed8b787><span class="nav-item" data-v-3ed8b787>say hello</span></a></nav></div></header><!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/Nav.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Nav = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__scopeId", "data-v-3ed8b787"]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "490",
    zoomAndPan: "magnify",
    viewBox: "0 0 367.5 258.749997",
    height: "345",
    preserveAspectRatio: "xMidYMid meet",
    version: "1.0"
  }, _attrs))}><defs><clipPath id="b4c190e658"><path d="M 6 11 L 360.949219 11 L 360.949219 243 L 6 243 Z M 6 11 " clip-rule="nonzero"></path></clipPath><clipPath id="e942bdabb9"><path d="M 6 10 L 360.949219 10 L 360.949219 244 L 6 244 Z M 6 10 " clip-rule="nonzero"></path></clipPath><clipPath id="f6ce14b0be"><path d="M 7 11 L 360.949219 11 L 360.949219 243 L 7 243 Z M 7 11 " clip-rule="nonzero"></path></clipPath><clipPath id="3b54effc26"><path d="M 6 11 L 360.949219 11 L 360.949219 243 L 6 243 Z M 6 11 " clip-rule="nonzero"></path></clipPath><clipPath id="6f3aa7f871"><path d="M 7 12 L 360.949219 12 L 360.949219 243 L 7 243 Z M 7 12 " clip-rule="nonzero"></path></clipPath><clipPath id="5743173042"><path d="M 7 11 L 360.949219 11 L 360.949219 243 L 7 243 Z M 7 11 " clip-rule="nonzero"></path></clipPath><clipPath id="5e4e4dbf12"><path d="M 7 12 L 360.949219 12 L 360.949219 243 L 7 243 Z M 7 12 " clip-rule="nonzero"></path></clipPath><clipPath id="93da707b25"><path d="M 54 224 L 94 224 L 94 253.84375 L 54 253.84375 Z M 54 224 " clip-rule="nonzero"></path></clipPath></defs><g clip-path="url(#b4c190e658)"><path fill="#c97ccd" d="M 8.433594 76.765625 L 9.824219 81.792969 L 11.199219 86.738281 L 12.582031 91.703125 L 13.976562 96.6875 L 15.378906 101.6875 L 16.792969 106.710938 L 18.210938 111.746094 L 19.636719 116.796875 L 21.066406 121.863281 L 22.503906 126.9375 L 23.945312 132.019531 L 25.390625 137.113281 L 26.839844 142.210938 L 28.289062 147.3125 L 29.742188 152.417969 L 31.195312 157.527344 L 32.644531 162.632812 L 34.097656 167.738281 L 35.546875 172.84375 L 36.996094 177.941406 L 38.441406 183.03125 L 39.882812 188.113281 L 41.320312 193.1875 L 42.75 198.25 L 44.175781 203.296875 L 45.59375 208.335938 L 47.003906 213.351562 L 48.40625 218.355469 L 49.800781 223.335938 L 51.183594 228.296875 L 52.554688 233.238281 L 53.933594 238.210938 L 54.097656 238.675781 L 54.347656 239.167969 L 54.65625 239.609375 L 55.007812 240.015625 L 55.402344 240.382812 L 55.828125 240.714844 L 56.285156 241.011719 L 56.773438 241.285156 L 57.285156 241.527344 L 57.824219 241.753906 L 58.394531 241.953125 L 58.988281 242.128906 L 59.605469 242.289062 L 60.25 242.425781 L 60.917969 242.546875 L 61.609375 242.644531 L 62.324219 242.722656 L 63.0625 242.78125 L 63.820312 242.824219 L 64.601562 242.84375 L 65.398438 242.84375 L 66.21875 242.828125 L 67.050781 242.785156 L 67.902344 242.722656 L 68.773438 242.640625 L 69.652344 242.535156 L 70.546875 242.414062 L 71.457031 242.261719 L 72.375 242.089844 L 73.304688 241.894531 L 74.242188 241.675781 L 75.101562 241.457031 L 83.703125 240.050781 L 92.359375 238.605469 L 100.992188 237.136719 L 109.601562 235.640625 L 118.191406 234.125 L 126.765625 232.589844 L 135.324219 231.039062 L 143.867188 229.46875 L 152.394531 227.886719 L 160.914062 226.292969 L 169.421875 224.6875 L 177.921875 223.070312 L 186.417969 221.449219 L 194.90625 219.820312 L 203.390625 218.1875 L 211.875 216.558594 L 220.355469 214.921875 L 228.839844 213.292969 L 245.816406 210.042969 L 254.3125 208.429688 L 262.820312 206.824219 L 271.332031 205.230469 L 279.855469 203.648438 L 288.390625 202.078125 L 296.945312 200.527344 L 305.507812 198.992188 L 314.09375 197.480469 L 322.691406 195.988281 L 331.3125 194.523438 L 339.957031 193.078125 L 348.761719 191.636719 L 349.449219 191.40625 L 350.0625 191.148438 L 350.671875 190.847656 L 351.277344 190.5 L 351.882812 190.109375 L 352.480469 189.671875 L 353.070312 189.191406 L 353.65625 188.664062 L 354.230469 188.097656 L 354.789062 187.480469 L 355.339844 186.816406 L 355.871094 186.113281 L 356.390625 185.359375 L 356.894531 184.566406 L 357.371094 183.722656 L 357.832031 182.835938 L 358.269531 181.898438 L 358.679688 180.917969 L 359.0625 179.894531 L 359.417969 178.820312 L 359.742188 177.699219 L 360.035156 176.53125 L 360.292969 175.320312 L 360.519531 174.058594 L 360.703125 172.75 L 360.851562 171.390625 L 360.953125 169.988281 L 361.019531 168.535156 L 361.035156 167.035156 L 361.011719 165.484375 L 360.933594 163.886719 L 360.789062 161.929688 L 283 11.269531 L 17.5 52.257812 L 16.359375 52.484375 L 15.296875 52.75 L 14.300781 53.054688 L 13.371094 53.398438 L 12.503906 53.78125 L 11.703125 54.210938 L 10.964844 54.6875 L 10.285156 55.210938 L 9.675781 55.78125 L 9.128906 56.394531 L 8.652344 57.050781 L 8.242188 57.742188 L 7.902344 58.464844 L 7.621094 59.210938 L 7.398438 59.984375 L 7.230469 60.777344 L 7.109375 61.59375 L 7.035156 62.425781 L 6.996094 63.28125 L 6.992188 64.15625 L 7.019531 65.054688 L 7.070312 65.980469 L 7.148438 66.925781 L 7.246094 67.894531 L 7.363281 68.894531 L 7.492188 69.917969 L 7.632812 70.96875 L 7.78125 72.046875 L 7.9375 73.15625 L 8.097656 74.289062 L 8.257812 75.457031 L 8.433594 76.769531 Z M 8.433594 76.765625 " fill-opacity="1" fill-rule="nonzero"></path></g><g clip-path="url(#e942bdabb9)"><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill="none" stroke-linejoin="miter" d="M 35.304382 211.13552 L 38.654188 223.245632 L 41.966355 235.158143 L 45.297342 247.117701 L 48.656557 259.124308 L 52.034591 271.168553 L 55.440854 283.269255 L 58.856527 295.398186 L 62.291019 307.564756 L 65.73492 319.768963 L 69.19764 331.99199 L 72.66977 344.233836 L 76.15131 356.50391 L 79.642259 368.783394 L 83.133208 381.072288 L 86.633567 393.370591 L 90.133925 405.678304 L 93.624874 417.976607 L 97.125233 430.27491 L 100.616182 442.573214 L 104.107131 454.852698 L 107.588671 467.113363 L 111.060801 479.355209 L 114.523521 491.578235 L 117.967423 503.773033 L 121.401914 515.930193 L 124.817587 528.068534 L 128.21444 540.150417 L 131.592475 552.204071 L 134.95169 564.201268 L 138.282676 576.151418 L 141.585434 588.054519 L 144.907011 600.032897 L 145.302213 601.152636 L 145.904425 602.338241 L 146.647781 603.401522 L 147.494642 604.380117 L 148.445008 605.264616 L 149.470651 606.064429 L 150.57157 606.779556 L 151.747766 607.438226 L 152.980419 608.021619 L 154.278939 608.567374 L 155.652736 609.047262 L 157.08299 609.470692 L 158.569701 609.856484 L 160.12228 610.185819 L 161.731316 610.477516 L 163.396809 610.712755 L 165.11876 610.900946 L 166.897168 611.04209 L 168.722624 611.145595 L 170.604537 611.192643 L 172.524088 611.192643 L 174.500097 611.155005 L 176.504335 611.051499 L 178.55562 610.900946 L 180.653954 610.703345 L 182.771106 610.449287 L 184.925897 610.157591 L 187.118326 609.790617 L 189.329574 609.376597 L 191.569051 608.906118 L 193.827347 608.379182 L 195.897451 607.852247 L 216.617316 604.464803 L 237.468915 600.983263 L 258.264057 597.445266 L 279.002741 593.841402 L 299.694378 590.190491 L 320.348376 586.492531 L 340.964736 582.756933 L 361.543457 578.974288 L 382.084541 575.163413 L 402.606805 571.32431 L 423.10084 567.456978 L 443.576057 563.561418 L 464.041864 559.656448 L 484.488851 555.732659 L 504.926429 551.79946 L 525.364008 547.875671 L 545.792176 543.933063 L 566.229754 540.009273 L 607.12373 532.180514 L 627.589536 528.294363 L 648.083572 524.427031 L 668.587017 520.587928 L 689.118691 516.777054 L 709.678593 512.994408 L 730.285544 509.25881 L 750.911313 505.560851 L 771.59354 501.919349 L 792.303996 498.324894 L 813.070908 494.796307 L 833.894279 491.314767 L 855.103441 487.842637 L 856.759525 487.287473 L 858.236827 486.666442 L 859.704719 485.941905 L 861.163202 485.104454 L 862.621685 484.163497 L 864.061349 483.109626 L 865.482193 481.952249 L 866.893628 480.681957 L 868.276834 479.31757 L 869.622402 477.830859 L 870.949151 476.231233 L 872.228852 474.537511 L 873.480325 472.721464 L 874.694159 470.811322 L 875.842126 468.778856 L 876.952454 466.642884 L 878.006326 464.384589 L 878.99433 462.022787 L 879.916468 459.557481 L 880.772738 456.96985 L 881.553732 454.269305 L 882.25945 451.455844 L 882.880481 448.538879 L 883.426236 445.499589 L 883.868486 442.347384 L 884.226049 439.072855 L 884.470698 435.694821 L 884.630661 432.194462 L 884.668299 428.581189 L 884.611841 424.845591 L 884.42365 420.997078 L 884.075496 416.282885 L 696.693392 53.365321 L 57.143986 152.0999 L 54.396392 152.645655 L 51.83699 153.285506 L 49.437551 154.019452 L 47.198074 154.847494 L 45.10915 155.769631 L 43.180189 156.804683 L 41.401781 157.952651 L 39.764517 159.213532 L 38.296624 160.587329 L 36.979285 162.064631 L 35.831318 163.645438 L 34.843313 165.310931 L 34.024681 167.051701 L 33.347192 168.848928 L 32.810847 170.712023 L 32.406236 172.622165 L 32.114539 174.588764 L 31.935757 176.593002 L 31.841662 178.653697 L 31.832252 180.761439 L 31.898119 182.92564 L 32.020444 185.155707 L 32.208635 187.432822 L 32.443874 189.766394 L 32.726161 192.175243 L 33.036677 194.64055 L 33.375421 197.171723 L 33.732985 199.768763 L 34.109367 202.44108 L 34.495159 205.169855 L 34.880952 207.983315 L 35.304382 211.144929 Z M 35.304382 211.13552 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path></g><g clip-path="url(#f6ce14b0be)"><path fill="#c97ccd" d="M 8.835938 76.683594 L 10.222656 81.683594 L 11.59375 86.625 L 12.980469 91.589844 L 14.371094 96.574219 L 15.777344 101.578125 L 17.1875 106.597656 L 18.605469 111.636719 L 20.03125 116.6875 L 21.460938 121.75 L 22.898438 126.824219 L 24.339844 131.90625 L 25.785156 137 L 27.234375 142.097656 L 28.683594 147.199219 L 30.136719 152.304688 L 31.589844 157.414062 L 33.039062 162.519531 L 34.492188 167.625 L 35.941406 172.730469 L 37.390625 177.828125 L 38.835938 182.917969 L 40.277344 188 L 41.710938 193.074219 L 43.144531 198.136719 L 44.570312 203.183594 L 45.988281 208.222656 L 47.398438 213.238281 L 48.800781 218.242188 L 50.195312 223.226562 L 51.578125 228.1875 L 52.949219 233.128906 L 54.324219 238.085938 L 54.476562 238.511719 L 54.699219 238.953125 L 54.980469 239.355469 L 55.304688 239.730469 L 55.667969 240.070312 L 56.066406 240.378906 L 56.496094 240.660156 L 56.960938 240.917969 L 57.453125 241.152344 L 57.972656 241.367188 L 58.519531 241.5625 L 59.097656 241.730469 L 59.699219 241.890625 L 60.328125 242.023438 L 60.984375 242.136719 L 61.660156 242.238281 L 62.363281 242.316406 L 63.089844 242.375 L 63.835938 242.410156 L 64.605469 242.433594 L 65.394531 242.4375 L 66.203125 242.414062 L 67.027344 242.375 L 67.871094 242.316406 L 68.726562 242.234375 L 69.601562 242.128906 L 70.488281 242.003906 L 71.386719 241.859375 L 72.296875 241.6875 L 73.214844 241.496094 L 74.144531 241.277344 L 75.015625 241.054688 L 83.636719 239.648438 L 92.289062 238.199219 L 100.921875 236.730469 L 109.53125 235.238281 L 118.121094 233.722656 L 126.691406 232.1875 L 135.25 230.632812 L 143.792969 229.066406 L 152.320312 227.484375 L 160.839844 225.890625 L 169.347656 224.28125 L 177.847656 222.667969 L 186.339844 221.042969 L 194.828125 219.417969 L 203.3125 217.785156 L 211.796875 216.15625 L 220.277344 214.519531 L 228.761719 212.886719 L 237.25 211.265625 L 245.742188 209.640625 L 254.238281 208.027344 L 262.742188 206.417969 L 271.253906 204.824219 L 279.78125 203.242188 L 288.316406 201.675781 L 296.867188 200.125 L 305.4375 198.589844 L 314.023438 197.074219 L 322.625 195.585938 L 331.246094 194.113281 L 339.890625 192.671875 L 348.660156 191.238281 L 349.304688 191.019531 L 349.890625 190.773438 L 350.480469 190.484375 L 351.066406 190.148438 L 351.648438 189.769531 L 352.226562 189.347656 L 352.804688 188.878906 L 353.375 188.371094 L 353.929688 187.8125 L 354.480469 187.210938 L 355.015625 186.5625 L 355.539062 185.875 L 356.050781 185.136719 L 356.539062 184.355469 L 357.015625 183.523438 L 357.460938 182.652344 L 357.894531 181.734375 L 358.296875 180.769531 L 358.675781 179.753906 L 359.027344 178.695312 L 359.347656 177.589844 L 359.632812 176.4375 L 359.890625 175.238281 L 360.109375 173.992188 L 360.296875 172.695312 L 360.441406 171.355469 L 360.546875 169.964844 L 360.609375 168.523438 L 360.625 167.035156 L 360.601562 165.5 L 360.527344 163.914062 L 360.386719 162.042969 L 282.769531 11.71875 L 17.570312 52.660156 L 16.449219 52.886719 L 15.402344 53.144531 L 14.429688 53.441406 L 13.523438 53.777344 L 12.683594 54.148438 L 11.910156 54.566406 L 11.199219 55.023438 L 10.550781 55.523438 L 9.96875 56.066406 L 9.449219 56.652344 L 8.992188 57.273438 L 8.605469 57.933594 L 8.277344 58.625 L 8.007812 59.339844 L 7.796875 60.082031 L 7.632812 60.851562 L 7.515625 61.640625 L 7.441406 62.457031 L 7.40625 63.292969 L 7.402344 64.152344 L 7.425781 65.039062 L 7.480469 65.949219 L 7.554688 66.886719 L 7.652344 67.851562 L 7.765625 68.84375 L 7.894531 69.863281 L 8.035156 70.914062 L 8.1875 71.988281 L 8.34375 73.097656 L 8.503906 74.234375 L 8.664062 75.402344 L 8.835938 76.6875 Z M 8.835938 76.683594 " fill-opacity="1" fill-rule="nonzero"></path></g><g clip-path="url(#3b54effc26)"><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill="none" stroke-linejoin="miter" d="M 36.273568 210.937919 L 39.613964 222.982164 L 42.916721 234.885265 L 46.257117 246.844824 L 49.606923 258.851431 L 52.994367 270.905085 L 56.39122 282.996378 L 59.806893 295.134718 L 63.241385 307.301288 L 66.685286 319.496086 L 70.148006 331.719112 L 73.620136 343.960958 L 77.101676 356.231033 L 80.592625 368.510517 L 84.083574 380.799411 L 87.583933 393.097714 L 91.084292 405.405427 L 94.575241 417.70373 L 98.075599 430.002033 L 101.566548 442.300336 L 105.057498 454.57982 L 108.539037 466.840485 L 112.011167 479.082331 L 115.464478 491.305358 L 118.917789 503.500156 L 122.352281 515.657316 L 125.767953 527.795656 L 129.164807 539.877539 L 132.542841 551.931194 L 135.902056 563.937801 L 139.233043 575.88795 L 142.5358 587.791051 L 145.847968 599.731791 L 146.214941 600.757434 L 146.751286 601.820715 L 147.428775 602.7899 L 148.209769 603.693218 L 149.084859 604.511851 L 150.044634 605.255206 L 151.079687 605.932695 L 152.199425 606.553727 L 153.38503 607.118301 L 154.636503 607.635827 L 155.953842 608.106305 L 157.346458 608.510916 L 158.795531 608.896709 L 160.310471 609.216634 L 161.891278 609.489511 L 163.519133 609.73416 L 165.212855 609.922351 L 166.963035 610.063495 L 168.760262 610.148181 L 170.613946 610.204638 L 172.514679 610.214048 L 174.462459 610.157591 L 176.447878 610.063495 L 178.480344 609.922351 L 180.541039 609.72475 L 182.648782 609.470692 L 184.784753 609.169586 L 186.948954 608.821432 L 189.141383 608.407411 L 191.352631 607.946342 L 193.592107 607.419407 L 195.690441 606.883061 L 216.457354 603.495618 L 237.299543 600.004668 L 258.094685 596.466671 L 278.833369 592.872217 L 299.525005 589.221305 L 320.169594 585.523346 L 340.785954 581.778338 L 361.364676 578.005102 L 381.905759 574.194228 L 402.428023 570.355125 L 422.922059 566.478384 L 443.397275 562.592233 L 463.853672 558.677853 L 484.30066 554.763473 L 504.738238 550.830275 L 525.175816 546.906485 L 545.603985 542.963877 L 566.041563 539.030678 L 586.488551 535.125708 L 606.944948 531.211329 L 627.410755 527.325178 L 647.895381 523.448437 L 668.398826 519.609333 L 688.939909 515.798459 L 709.499812 512.025223 L 730.097352 508.289625 L 750.741941 504.591666 L 771.424168 500.940754 L 792.144033 497.355709 L 812.910946 493.808303 L 833.734316 490.336173 L 854.858793 486.882862 L 856.411371 486.355926 L 857.822806 485.763123 L 859.243651 485.066815 L 860.655086 484.257593 L 862.057111 483.344865 L 863.449727 482.328632 L 864.842343 481.199484 L 866.216139 479.97624 L 867.552298 478.630672 L 868.879047 477.181599 L 870.168157 475.619611 L 871.429039 473.963527 L 872.661692 472.185119 L 873.837888 470.303206 L 874.985855 468.298968 L 876.058546 466.200635 L 877.103008 463.989387 L 878.072193 461.665224 L 878.984921 459.218737 L 879.831782 456.668744 L 880.603366 454.005837 L 881.290265 451.230015 L 881.911296 448.341278 L 882.438232 445.339626 L 882.889891 442.21565 L 883.238045 438.988169 L 883.492103 435.638363 L 883.642656 432.166233 L 883.680294 428.581189 L 883.623837 424.883229 L 883.445055 421.062945 L 883.106311 416.555763 L 696.138227 54.447421 L 57.313358 153.069086 L 54.612812 153.61484 L 52.091049 154.235872 L 49.748067 154.950999 L 47.565047 155.760222 L 45.54199 156.65413 L 43.678896 157.660954 L 41.966355 158.761873 L 40.404367 159.966298 L 39.002342 161.274228 L 37.750869 162.685662 L 36.64995 164.181784 L 35.718403 165.772 L 34.928 167.437493 L 34.278739 169.159444 L 33.770623 170.947262 L 33.375421 172.800946 L 33.093134 174.701679 L 32.914352 176.668278 L 32.829666 178.681925 L 32.820257 180.75203 L 32.876714 182.888001 L 33.008448 185.08043 L 33.18723 187.338726 L 33.422469 189.662889 L 33.695346 192.052919 L 34.005862 194.508816 L 34.344606 197.039989 L 34.71158 199.62762 L 35.087962 202.299937 L 35.473754 205.038121 L 35.859547 207.851581 L 36.273568 210.947328 Z M 36.273568 210.937919 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path></g><g clip-path="url(#6f3aa7f871)"><path fill="#c97ccd" d="M 9.238281 76.601562 L 10.617188 81.574219 L 11.988281 86.515625 L 13.375 91.480469 L 14.765625 96.460938 L 16.171875 101.464844 L 17.582031 106.488281 L 19 111.523438 L 20.425781 116.574219 L 21.855469 121.636719 L 23.292969 126.710938 L 24.734375 131.796875 L 26.179688 136.886719 L 27.628906 141.984375 L 29.078125 147.085938 L 30.53125 152.191406 L 31.984375 157.300781 L 33.433594 162.40625 L 34.886719 167.515625 L 36.335938 172.617188 L 37.785156 177.714844 L 39.230469 182.804688 L 40.671875 187.886719 L 42.109375 192.964844 L 43.539062 198.023438 L 44.964844 203.078125 L 46.382812 208.113281 L 47.792969 213.132812 L 49.195312 218.132812 L 50.589844 223.117188 L 51.972656 228.078125 L 53.347656 233.015625 L 54.714844 237.960938 L 54.851562 238.351562 L 55.054688 238.742188 L 55.304688 239.105469 L 55.597656 239.441406 L 55.933594 239.753906 L 56.304688 240.042969 L 56.710938 240.308594 L 57.148438 240.550781 L 57.617188 240.773438 L 58.117188 240.984375 L 58.648438 241.167969 L 59.207031 241.335938 L 59.792969 241.484375 L 60.40625 241.617188 L 61.046875 241.734375 L 61.714844 241.828125 L 62.402344 241.90625 L 63.117188 241.960938 L 63.855469 242.003906 L 64.613281 242.023438 L 65.390625 242.023438 L 66.1875 242.003906 L 67.003906 241.964844 L 67.835938 241.90625 L 68.683594 241.824219 L 69.546875 241.722656 L 70.425781 241.597656 L 71.316406 241.453125 L 72.214844 241.285156 L 73.128906 241.09375 L 74.046875 240.878906 L 74.933594 240.652344 L 83.570312 239.238281 L 92.222656 237.792969 L 100.851562 236.324219 L 109.460938 234.832031 L 118.046875 233.316406 L 126.621094 231.785156 L 135.175781 230.230469 L 143.71875 228.660156 L 152.246094 227.078125 L 160.761719 225.480469 L 169.269531 223.878906 L 177.769531 222.265625 L 186.261719 220.640625 L 194.75 219.015625 L 211.71875 215.75 L 220.199219 214.117188 L 228.683594 212.484375 L 237.171875 210.859375 L 245.660156 209.238281 L 254.160156 207.621094 L 262.664062 206.015625 L 271.179688 204.421875 L 279.707031 202.839844 L 288.246094 201.269531 L 296.796875 199.71875 L 305.367188 198.1875 L 313.949219 196.671875 L 322.554688 195.179688 L 331.175781 193.710938 L 339.824219 192.265625 L 348.5625 190.839844 L 349.160156 190.636719 L 349.71875 190.398438 L 350.285156 190.121094 L 350.851562 189.796875 L 351.417969 189.429688 L 351.976562 189.019531 L 352.539062 188.566406 L 353.089844 188.070312 L 353.632812 187.527344 L 354.171875 186.941406 L 354.699219 186.308594 L 355.207031 185.632812 L 355.707031 184.910156 L 356.1875 184.140625 L 356.652344 183.328125 L 357.097656 182.46875 L 357.515625 181.570312 L 357.914062 180.613281 L 358.289062 179.617188 L 358.632812 178.574219 L 358.949219 177.484375 L 359.234375 176.347656 L 359.488281 175.160156 L 359.707031 173.925781 L 359.890625 172.644531 L 360.03125 171.316406 L 360.136719 169.9375 L 360.199219 168.511719 L 360.21875 167.035156 L 360.191406 165.511719 L 360.113281 163.9375 L 359.980469 162.160156 L 282.542969 12.167969 L 17.644531 53.066406 L 16.539062 53.285156 L 15.515625 53.542969 L 14.5625 53.832031 L 13.679688 54.15625 L 12.867188 54.519531 L 12.121094 54.917969 L 11.4375 55.355469 L 10.820312 55.835938 L 10.265625 56.351562 L 9.769531 56.90625 L 9.339844 57.5 L 8.96875 58.125 L 8.65625 58.78125 L 8.402344 59.46875 L 8.195312 60.183594 L 8.039062 60.921875 L 7.925781 61.691406 L 7.855469 62.484375 L 7.816406 63.300781 L 7.8125 64.148438 L 7.839844 65.019531 L 7.890625 65.921875 L 7.96875 66.851562 L 8.0625 67.808594 L 8.175781 68.792969 L 8.304688 69.808594 L 8.445312 70.855469 L 8.597656 71.933594 L 8.753906 73.039062 L 8.914062 74.175781 L 9.074219 75.34375 L 9.242188 76.601562 Z M 9.238281 76.601562 " fill-opacity="1" fill-rule="nonzero"></path></g><g clip-path="url(#5743173042)"><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill="none" stroke-linejoin="miter" d="M 37.242753 210.740318 L 40.56433 222.718696 L 43.867088 234.621797 L 47.207484 246.581356 L 50.557289 258.578553 L 53.944733 270.632208 L 57.341587 282.73291 L 60.757259 294.861841 L 64.191751 307.02841 L 67.635652 319.223208 L 71.098373 331.446235 L 74.570503 343.69749 L 78.052042 355.958155 L 81.542991 368.23764 L 85.03394 380.526533 L 88.534299 392.824836 L 92.034658 405.132549 L 95.525607 417.430852 L 99.025966 429.738565 L 102.516915 442.027459 L 106.007864 454.306943 L 109.489403 466.567608 L 112.961533 478.809454 L 116.424254 491.04189 L 119.868155 503.227278 L 123.302647 515.403257 L 126.718319 527.532188 L 130.115173 539.623481 L 133.493207 551.667726 L 136.852422 563.674333 L 140.183409 575.624482 L 143.495576 587.518174 L 146.788924 599.430685 L 147.118259 600.371642 L 147.607557 601.312598 L 148.209769 602.187688 L 148.915486 602.996911 L 149.724709 603.749676 L 150.618618 604.445984 L 151.597213 605.085834 L 152.651084 605.669227 L 153.780232 606.205573 L 154.984657 606.713689 L 156.264358 607.155939 L 157.609926 607.56055 L 159.021361 607.918114 L 160.498663 608.238039 L 162.041831 608.520326 L 163.650867 608.746156 L 165.306951 608.934347 L 167.028902 609.066081 L 168.80731 609.169586 L 170.632766 609.216634 L 172.505269 609.216634 L 174.424821 609.169586 L 176.39142 609.07549 L 178.395658 608.934347 L 180.437534 608.736746 L 182.517048 608.492097 L 184.6342 608.190991 L 186.779581 607.842837 L 188.943782 607.438226 L 191.14562 606.977157 L 193.356868 606.459631 L 195.49284 605.913876 L 216.297391 602.507613 L 237.139581 599.026074 L 257.925313 595.488077 L 278.663997 591.893622 L 299.346224 588.24271 L 320.000222 584.55416 L 340.607172 580.809153 L 361.185894 577.026507 L 381.726977 573.215633 L 402.239832 569.36712 L 422.733867 565.509198 L 443.209084 561.623047 L 463.665481 557.708668 L 484.112469 553.794288 L 524.987625 545.927891 L 545.415793 541.994692 L 565.853372 538.061493 L 586.300359 534.147114 L 606.747347 530.242143 L 627.222563 526.346583 L 647.707189 522.479251 L 668.220044 518.640148 L 688.761127 514.829274 L 709.330439 511.046628 L 729.92798 507.31103 L 750.572569 503.62248 L 771.245386 499.971568 L 791.974661 496.377114 L 812.741574 492.839117 L 833.574354 489.357578 L 854.623554 485.923086 L 856.063217 485.433788 L 857.408785 484.859805 L 858.773172 484.191726 L 860.137559 483.410732 L 861.501947 482.526232 L 862.847515 481.538228 L 864.202492 480.446718 L 865.529241 479.251703 L 866.837171 477.943774 L 868.135691 476.532339 L 869.405982 475.007989 L 870.629226 473.380134 L 871.83365 471.639364 L 872.991027 469.78568 L 874.110765 467.82849 L 875.183456 465.758385 L 876.19028 463.594185 L 877.150055 461.288841 L 878.053374 458.889402 L 878.881416 456.377048 L 879.64359 453.751779 L 880.330489 451.013595 L 880.942111 448.153087 L 881.469046 445.179664 L 881.911296 442.093326 L 882.25004 438.894073 L 882.504099 435.572496 L 882.654652 432.138005 L 882.7017 428.581189 L 882.635833 424.911458 L 882.447641 421.119402 L 882.127716 416.83805 L 695.592473 55.529521 L 57.49214 154.047681 L 54.829232 154.574616 L 52.363926 155.195648 L 50.067992 155.891956 L 47.94143 156.67295 L 45.98424 157.548039 L 44.187013 158.507815 L 42.540339 159.561686 L 41.053627 160.719063 L 39.717469 161.961126 L 38.522454 163.297284 L 37.487402 164.727538 L 36.593493 166.233069 L 35.840727 167.813876 L 35.229106 169.46996 L 34.730399 171.19191 L 34.354016 172.970318 L 34.081139 174.824003 L 33.911766 176.734145 L 33.817671 178.700744 L 33.808261 180.74262 L 33.874128 182.840954 L 33.996452 185.014563 L 34.184644 187.25404 L 34.410473 189.559384 L 34.683351 191.930595 L 34.993867 194.377082 L 35.332611 196.898846 L 35.699584 199.495886 L 36.075967 202.158793 L 36.461759 204.896977 L 36.847551 207.710437 L 37.252162 210.740318 Z M 37.242753 210.740318 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path></g><path fill="#c97ccd" d="M 9.640625 76.519531 L 11.011719 81.464844 L 12.382812 86.40625 L 13.769531 91.367188 L 15.164062 96.351562 L 16.566406 101.355469 L 17.976562 106.375 L 19.394531 111.410156 L 20.820312 116.460938 L 22.25 121.523438 L 23.6875 126.597656 L 25.128906 131.683594 L 26.574219 136.773438 L 28.023438 141.871094 L 29.472656 146.972656 L 30.925781 152.082031 L 32.375 157.1875 L 33.828125 162.296875 L 35.28125 167.402344 L 36.730469 172.503906 L 38.179688 177.601562 L 39.625 182.691406 L 41.066406 187.777344 L 42.503906 192.851562 L 43.933594 197.910156 L 45.359375 202.964844 L 46.777344 208 L 48.1875 213.019531 L 49.589844 218.019531 L 50.984375 223.003906 L 52.367188 227.96875 L 53.742188 232.90625 L 55.105469 237.839844 L 55.230469 238.183594 L 55.40625 238.527344 L 55.628906 238.851562 L 55.894531 239.15625 L 56.199219 239.441406 L 56.542969 239.707031 L 56.921875 239.957031 L 57.335938 240.1875 L 57.785156 240.402344 L 58.265625 240.601562 L 58.773438 240.777344 L 59.316406 240.941406 L 59.886719 241.085938 L 60.488281 241.214844 L 61.113281 241.328125 L 61.765625 241.421875 L 62.445312 241.496094 L 63.144531 241.554688 L 63.871094 241.59375 L 64.617188 241.613281 L 65.386719 241.613281 L 66.171875 241.59375 L 66.976562 241.554688 L 67.800781 241.496094 L 68.640625 241.417969 L 69.496094 241.3125 L 70.363281 241.195312 L 71.242188 241.046875 L 72.136719 240.882812 L 73.039062 240.691406 L 73.949219 240.480469 L 74.847656 240.246094 L 83.503906 238.835938 L 92.152344 237.390625 L 100.78125 235.921875 L 109.390625 234.425781 L 117.976562 232.910156 L 126.546875 231.378906 L 135.101562 229.828125 L 143.644531 228.257812 L 152.171875 226.675781 L 160.6875 225.078125 L 169.195312 223.476562 L 177.691406 221.859375 L 186.1875 220.238281 L 203.15625 216.980469 L 211.640625 215.347656 L 220.125 213.710938 L 237.09375 210.453125 L 245.585938 208.832031 L 254.085938 207.21875 L 262.589844 205.613281 L 271.105469 204.019531 L 279.632812 202.4375 L 288.171875 200.867188 L 296.722656 199.316406 L 305.292969 197.78125 L 313.878906 196.269531 L 322.484375 194.773438 L 331.109375 193.304688 L 339.757812 191.859375 L 348.460938 190.4375 L 349.015625 190.25 L 349.550781 190.023438 L 350.09375 189.757812 L 350.636719 189.445312 L 351.1875 189.09375 L 351.730469 188.695312 L 352.269531 188.253906 L 352.808594 187.769531 L 353.339844 187.242188 L 353.863281 186.667969 L 354.375 186.050781 L 354.875 185.390625 L 355.367188 184.679688 L 355.835938 183.929688 L 356.292969 183.132812 L 356.726562 182.289062 L 357.144531 181.402344 L 357.53125 180.464844 L 357.902344 179.480469 L 358.242188 178.453125 L 358.554688 177.375 L 358.835938 176.253906 L 359.085938 175.082031 L 359.300781 173.859375 L 359.484375 172.59375 L 359.625 171.277344 L 359.730469 169.914062 L 359.789062 168.5 L 359.808594 167.035156 L 359.777344 165.523438 L 359.707031 163.960938 L 359.578125 162.273438 L 282.308594 12.617188 L 17.714844 53.46875 L 16.628906 53.6875 L 15.625 53.9375 L 14.691406 54.21875 L 13.835938 54.535156 L 13.046875 54.886719 L 12.328125 55.269531 L 11.675781 55.691406 L 11.085938 56.148438 L 10.558594 56.636719 L 10.089844 57.164062 L 9.683594 57.722656 L 9.332031 58.316406 L 9.035156 58.941406 L 8.789062 59.597656 L 8.59375 60.28125 L 8.441406 60.996094 L 8.332031 61.738281 L 8.261719 62.507812 L 8.226562 63.3125 L 8.222656 64.140625 L 8.25 65 L 8.300781 65.890625 L 8.375 66.8125 L 8.46875 67.761719 L 8.582031 68.742188 L 8.710938 69.757812 L 8.851562 70.800781 L 9 71.875 L 9.15625 72.980469 L 9.316406 74.121094 L 9.480469 75.289062 L 9.644531 76.519531 Z M 9.640625 76.519531 " fill-opacity="1" fill-rule="nonzero"></path><g clip-path="url(#5e4e4dbf12)"><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill="none" stroke-linejoin="miter" d="M 38.211938 210.542717 L 41.514696 222.455228 L 44.817454 234.358329 L 48.15785 246.308479 L 51.517065 258.315085 L 54.895099 270.36874 L 58.291953 282.460033 L 61.707625 294.588964 L 65.142117 306.755533 L 68.586018 318.950331 L 72.048739 331.173358 L 75.520869 343.424613 L 79.002408 355.685278 L 82.493357 367.964762 L 85.984307 380.253656 L 89.484665 392.561369 L 92.975614 404.859672 L 96.475973 417.167385 L 99.976332 429.465688 L 103.467281 441.754581 L 106.95823 454.034066 L 110.43977 466.294731 L 113.9119 478.545986 L 117.37462 490.769013 L 120.818521 502.954401 L 124.253013 515.13038 L 127.668686 527.259311 L 131.065539 539.350604 L 134.443573 551.394849 L 137.802789 563.401455 L 141.133775 575.361014 L 144.445942 587.254706 L 147.729881 599.138988 L 148.030987 599.96703 L 148.454418 600.795072 L 148.990763 601.576066 L 149.630613 602.310012 L 150.36456 602.996911 L 151.192601 603.636761 L 152.105329 604.238973 L 153.102743 604.794138 L 154.184844 605.311664 L 155.34222 605.791552 L 156.565464 606.214982 L 157.873394 606.610184 L 159.24719 606.958338 L 160.696263 607.268854 L 162.201794 607.541731 L 163.773192 607.767561 L 165.410456 607.946342 L 167.094769 608.087486 L 168.844948 608.181582 L 170.642175 608.228629 L 172.49586 608.228629 L 174.387183 608.181582 L 176.325553 608.087486 L 178.310972 607.946342 L 180.334028 607.758151 L 182.394723 607.504093 L 184.483647 607.221806 L 186.6008 606.864242 L 188.75559 606.469041 L 190.9292 606.007972 L 193.121629 605.499855 L 195.285829 604.935281 L 216.137428 601.538428 L 236.970208 598.056888 L 257.75594 594.518891 L 278.494625 590.915027 L 299.176852 587.264116 L 319.82144 583.575566 L 340.42839 579.839968 L 361.007112 576.057322 L 381.548195 572.246448 L 402.06105 568.397935 L 422.555086 564.540013 L 443.020892 560.644452 L 463.486699 556.739482 L 504.361855 548.891904 L 524.799434 544.958705 L 545.237012 541.016097 L 586.112168 533.168519 L 606.568565 529.263549 L 627.043782 525.377398 L 647.528408 521.510066 L 668.041262 517.670963 L 688.582346 513.860088 L 709.151658 510.077443 L 729.749198 506.341845 L 750.393787 502.643885 L 771.076014 499.002383 L 791.805289 495.398519 L 812.581611 491.860522 L 833.414391 488.378983 L 854.378905 484.953901 L 855.715063 484.502241 L 857.004174 483.956487 L 858.312104 483.316636 L 859.620033 482.563871 L 860.946782 481.71701 L 862.254712 480.757234 L 863.553232 479.693953 L 864.851752 478.527167 L 866.131453 477.256875 L 867.392335 475.873669 L 868.624988 474.386958 L 869.829413 472.796741 L 871.015018 471.0842 L 872.144166 469.277563 L 873.245085 467.358012 L 874.289547 465.325545 L 875.296371 463.189574 L 876.227918 460.931278 L 877.121827 458.560067 L 877.940459 456.085351 L 878.693224 453.488311 L 879.370713 450.787765 L 879.972925 447.964895 L 880.490451 445.019701 L 880.932701 441.971001 L 881.271445 438.799978 L 881.525504 435.516039 L 881.666647 432.109776 L 881.713695 428.581189 L 881.638419 424.939686 L 881.469046 421.17586 L 881.158531 417.110927 L 695.027899 56.611621 L 57.661512 155.016866 L 55.045652 155.543802 L 52.627394 156.146014 L 50.378507 156.823503 L 48.317812 157.585677 L 46.41708 158.432538 L 44.68572 159.354676 L 43.114322 160.370909 L 41.693478 161.471828 L 40.423186 162.648024 L 39.294038 163.918316 L 38.315443 165.263884 L 37.468582 166.694138 L 36.753455 168.199668 L 36.160653 169.780475 L 35.690174 171.42715 L 35.323201 173.1491 L 35.059733 174.936918 L 34.890361 176.790602 L 34.805675 178.728973 L 34.796266 180.723801 L 34.862133 182.793906 L 34.984457 184.939287 L 35.163239 187.159945 L 35.389068 189.446469 L 35.661946 191.80827 L 35.972461 194.254758 L 36.311206 196.767112 L 36.668769 199.354743 L 37.045152 202.01765 L 37.430944 204.765243 L 37.826146 207.578704 L 38.221348 210.542717 Z M 38.211938 210.542717 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path></g><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 39.181124 210.354526 C 74.024748 336.367438 113.836623 472.834379 148.670838 598.847292 C 150.891495 606.883061 171.573722 610.289324 195.088228 603.994325 C 418.236095 567.927457 630.9958 520.070402 854.143666 484.012944 C 867.015952 480.089155 882.362955 459.181098 878.599129 417.393214 L 694.482144 57.71254 L 57.840294 155.995461 C 29.348127 161.095446 35.106781 179.001851 39.190533 210.354526 Z M 39.181124 210.354526 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 45.645496 202.111745 L 145.424537 539.849311 C 147.522871 546.953533 165.76802 550.021052 186.647847 544.42236 C 384.813315 512.392196 653.955141 462.540314 852.139428 430.519559 C 866.743075 428.788199 878.241565 421.288775 871.777193 401.491047 L 694.755021 57.703131 L 59.534016 155.026275 C 34.231692 159.552277 36.085376 175.75555 45.645496 202.111745 Z M 45.645496 202.111745 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 699.403347 232.59874 L 750.487883 225.146364 L 825.472717 369.846675 L 772.807374 380.564171 Z M 699.403347 232.59874 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 749.951537 265.81451 L 752.802636 265.673366 L 790.205662 339.274994 L 787.232239 339.952483 Z M 749.951537 265.81451 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 643.011816 121.28357 C 661.002907 123.25017 674.16689 132.066934 672.42612 140.977793 C 670.68535 149.888652 654.698497 155.524982 636.707406 153.558383 C 618.725725 151.591784 605.552332 142.76561 607.293102 133.854751 C 609.033872 124.943892 625.030134 119.316971 643.011816 121.28357 Z M 643.011816 121.28357 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 644.583213 102.887868 C 694.068123 110.406112 730.332592 144.120588 725.543122 178.173809 C 720.753653 212.227029 676.735702 233.746708 627.250792 226.237874 C 577.756473 218.71963 541.501414 185.005154 546.290883 150.951933 C 551.070943 116.898713 595.088894 95.379034 644.583213 102.887868 Z M 644.583213 102.887868 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 644.150373 100.093227 C 693.418863 107.291545 729.523369 139.575767 724.752719 172.198734 C 719.991478 204.821701 676.161718 225.43806 626.893229 218.239742 C 577.61533 211.041424 541.520233 178.747792 546.281474 146.124826 C 551.052124 113.511269 594.872474 92.894909 644.150373 100.093227 Z M 644.150373 100.093227 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 661.209917 151.149534 C 654.547944 154.000633 645.185426 155.252105 635.211285 154.160595 C 617.220194 152.193996 604.046801 143.367823 605.787571 134.456963 C 606.634432 130.137972 610.831099 126.581156 616.994365 124.294632 C 611.659141 126.581156 608.074096 129.893324 607.293102 133.854751 C 605.561742 142.76561 618.725725 151.591784 636.707406 153.558383 C 645.95701 154.565207 654.679678 153.567793 661.209917 151.149534 Z M 661.209917 151.149534 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 642.315508 111.723451 C 680.659491 117.246867 708.737637 142.012845 705.030268 167.042292 C 703.01662 180.629706 692.063885 191.497755 676.321681 197.717478 C 666.244035 201.697725 654.190381 203.777239 641.289865 203.429085 C 637.234342 203.31617 633.094133 202.968016 628.897466 202.365804 C 590.562893 196.842388 562.475337 172.067 566.182706 147.037554 C 569.890076 122.017517 603.990344 106.200036 642.315508 111.723451 Z M 642.315508 111.723451 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 642.833034 109.427517 C 679.219827 114.301672 705.877129 136.131866 702.357951 158.18789 C 698.848182 180.243913 666.479274 194.179481 630.083072 189.314735 C 593.686869 184.449989 567.029567 162.610386 570.548745 140.554362 C 574.067923 118.498339 606.436831 104.562771 642.833034 109.427517 Z M 642.833034 109.427517 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 642.023811 121.06715 C 662.273198 124.012345 677.102675 137.195147 675.136075 150.519093 C 673.178885 163.843039 655.178385 172.264601 634.928998 169.319407 C 614.679611 166.383622 599.840725 153.19141 601.797915 139.876874 C 603.764514 126.552928 621.774424 118.131366 642.023811 121.06715 Z M 642.023811 121.06715 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 688.667032 92.791404 C 683.350627 105.080297 668.906942 110.490798 656.411038 104.882696 C 643.924544 99.284004 636.218109 83.767629 643.416427 72.47615 L 657.831883 49.836733 C 664.239797 39.787316 675.700649 37.067952 686.813347 42.055022 C 697.926045 47.042092 703.110716 59.961427 698.368295 70.895343 C 694.886755 78.931112 692.223848 84.595671 688.667032 92.791404 Z M 688.667032 92.791404 " stroke="#ffffff" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 672.096785 67.554947 C 683.021292 71.939805 688.102458 83.306561 683.454132 92.932547 C 678.796397 102.558533 666.178168 106.802248 655.272481 102.40798 C 644.347974 98.013713 639.266808 86.656366 643.924544 77.03038 C 648.56346 67.404394 661.181688 63.160679 672.096785 67.554947 Z M 672.096785 67.554947 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 641.506285 121.876373 C 659.487966 123.842973 672.661359 132.669146 670.92059 141.580005 C 669.189229 150.490864 653.192967 156.117785 635.211285 154.160595 C 617.220194 152.193996 604.046801 143.367823 605.787571 134.456963 C 607.528341 125.546104 623.524604 119.909774 641.506285 121.876373 Z M 641.506285 121.876373 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 651.630979 87.108025 C 655.884103 68.956972 679.822039 80.229632 670.864132 94.503945 C 665.26544 90.250821 658.659925 88.152487 651.630979 87.108025 Z M 651.630979 87.108025 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 370.774242 116.654064 C 521.007378 116.654064 642.851853 201.603629 642.851853 306.350922 C 642.851853 411.098214 521.007378 496.047779 370.774242 496.047779 C 220.531696 496.047779 98.687221 411.107624 98.687221 306.350922 C 98.687221 201.603629 220.531696 116.654064 370.774242 116.654064 Z M 370.774242 116.654064 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 372.929033 116.654064 C 521.967154 116.654064 642.842444 200.135737 642.842444 303.085802 C 642.842444 406.045277 521.967154 489.52695 372.929033 489.52695 C 223.890911 489.52695 103.015622 406.045277 103.015622 303.085802 C 103.015622 200.135737 223.890911 116.654064 372.929033 116.654064 Z M 372.929033 116.654064 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 371.075348 120.991874 C 506.695428 120.991874 616.683849 196.475415 616.683849 289.573665 C 616.683849 382.653095 506.695428 458.146046 371.075348 458.146046 C 235.464678 458.146046 125.466847 382.662505 125.466847 289.573665 C 125.466847 196.484825 235.445859 120.991874 371.075348 120.991874 Z M 371.075348 120.991874 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 522.597595 156.729407 C 582.235427 187.489279 620.824058 236.447253 620.824058 291.577902 C 620.824058 384.666742 510.845047 460.150284 375.215557 460.150284 C 318.193585 460.150284 265.716434 446.807519 224.022645 424.42216 C 265.001307 445.452541 315.869422 457.920216 370.962433 457.920216 C 506.582513 457.920216 616.561525 382.427266 616.561525 289.338426 C 616.561525 235.525116 579.807759 187.592785 522.588186 156.729407 Z M 522.597595 156.729407 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 677.535515 132.462135 C 677.535515 143.584243 663.74109 152.608017 646.719185 152.608017 C 629.697279 152.608017 609.739589 141.053069 611.263939 130.034467 L 614.604335 105.870701 C 616.128685 94.852099 630.205396 87.079797 647.227301 87.079797 C 664.239797 87.079797 678.053041 96.103571 678.053041 107.225678 C 678.053041 118.112547 677.535515 121.274161 677.535515 132.462135 Z M 677.535515 132.462135 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 677.930716 106.708152 C 677.968355 107.140992 677.996583 107.564423 677.996583 108.006672 C 677.996583 119.589849 663.854005 128.990005 646.408669 128.990005 C 628.972743 128.990005 614.820755 119.589849 614.820755 108.006672 C 614.820755 107.564423 614.839574 107.140992 614.877212 106.708152 C 615.893446 117.698526 629.622003 126.402375 646.408669 126.402375 C 663.195336 126.402375 676.933302 117.698526 677.930716 106.708152 Z M 677.930716 106.708152 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 626.42275 137.486844 C 634.863131 133.045528 642.654252 141.448271 638.890426 149.154706 C 639.125665 148.401941 639.276218 147.611537 639.323266 146.783495 C 639.586734 141.551776 635.587668 137.091642 630.402997 136.828174 C 628.991562 136.752898 627.645994 136.997546 626.42275 137.486844 Z M 626.42275 137.486844 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill="none" stroke-linejoin="miter" d="M 515.596878 93.196015 C 532.759927 95.04029 545.754538 105.099116 544.62539 115.65665 C 543.486832 126.214183 528.647946 133.280768 511.494307 131.436493 C 494.331258 129.592218 481.336647 119.533391 482.465795 108.975858 C 483.604352 98.418324 498.443238 91.35174 515.596878 93.196015 Z M 515.596878 93.196015 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 370.059115 117.284505 C 504.408903 117.284505 613.362272 192.768046 613.362272 285.856886 C 613.362272 378.945726 504.408903 454.438677 370.059115 454.438677 C 235.709326 454.438677 126.746548 378.945726 126.746548 285.856886 C 126.746548 192.777456 235.709326 117.284505 370.059115 117.284505 Z M 370.059115 117.284505 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 372.740841 219.519443 C 416.034256 219.519443 451.141348 244.341879 451.141348 274.951199 C 451.141348 305.560518 416.034256 330.392364 372.740841 330.392364 C 329.447426 330.392364 294.340334 305.560518 294.340334 274.951199 C 294.340334 244.341879 329.447426 219.519443 372.740841 219.519443 Z M 372.740841 219.519443 " stroke="#ffff00" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 372.740841 263.20806 C 381.905759 263.20806 389.348726 268.468007 389.348726 274.951199 C 389.348726 281.43439 381.905759 286.694337 372.740841 286.694337 C 363.566514 286.694337 356.132957 281.43439 356.132957 274.951199 C 356.132957 268.468007 363.566514 263.20806 372.740841 263.20806 Z M 372.740841 263.20806 " stroke="#ffffff" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 366.210602 274.838284 C 366.6999 268.8538 365.476656 259.717111 371.122396 256.564906 C 372.458554 255.661588 373.841761 256.132066 374.773308 256.800145 C 378.424219 259.425414 379.562777 266.934248 378.62182 275.506363 C 374.152276 278.969083 370.002657 278.809121 366.210602 274.838284 Z M 366.210602 274.838284 " stroke="#000000" stroke-width="2" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill="none" stroke-linejoin="miter" d="M 515.596878 93.196015 C 532.759927 95.04029 545.754538 105.099116 544.62539 115.65665 C 543.486832 126.214183 528.647946 133.280768 511.494307 131.436493 C 494.331258 129.592218 481.336647 119.533391 482.465795 108.975858 C 483.604352 98.418324 498.443238 91.35174 515.596878 93.196015 Z M 515.596878 93.196015 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 699.403347 232.59874 L 750.487883 225.146364 L 825.472717 369.846675 L 821.370146 370.684127 L 748.295454 229.644137 L 701.332308 236.494301 Z M 699.403347 232.59874 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 749.913899 291.860189 L 760.52789 312.645921 L 787.100505 308.797409 L 787.570984 305.786348 L 784.879848 299.848911 L 785.670251 287.588246 L 782.508637 282.046012 L 756.557053 284.89711 L 755.841926 289.630122 L 751.033638 289.921819 L 750.826627 289.940638 L 750.525521 289.959457 L 749.913899 289.997095 Z M 749.913899 291.860189 " stroke="#000000" stroke-width="1" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 515.596878 93.196015 C 532.759927 95.04029 545.754538 105.099116 544.62539 115.65665 C 544.371332 117.971403 543.468013 120.116784 542.01894 122.036336 C 542.414142 118.103137 539.553634 114.960342 539.553634 114.960342 L 487.650466 121.311799 C 483.961916 117.651478 481.995316 113.360716 482.465795 108.975858 C 483.604352 98.418324 498.443238 91.35174 515.596878 93.196015 Z M 515.596878 93.196015 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 487.55637 121.28357 C 502.235293 119.251104 518.673806 117.689116 533.352729 115.65665 C 520.000555 108.232502 502.856325 106.294131 484.545309 117.38801 C 485.213388 118.639482 486.304898 119.928593 487.55637 121.28357 Z M 487.55637 121.28357 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 624.90781 141.438862 C 631.833251 140.140341 637.742459 141.542367 636.895598 150.923705 C 627.213154 161.471828 622.536599 174.44762 622.273131 186.115483 C 622.856525 208.924272 625.190097 243.062178 617.803587 254.560668 C 607.565979 276.532006 584.267893 284.483089 569.419597 297.524748 C 570.200591 300.883964 568.967938 304.271407 567.951705 305.52288 C 562.84231 309.409031 559.200808 312.617693 554.100823 316.503844 C 554.147871 317.585944 554.185509 318.668044 554.232557 319.750144 C 549.038477 323.551609 543.844396 327.343664 538.650315 331.135719 C 544.145502 334.033866 547.994015 337.157842 551.390868 340.357094 C 552.021309 341.721482 551.748432 342.493066 550.572236 342.662438 C 546.497894 338.164665 541.002707 334.231467 532.411773 331.54974 L 511.268477 346.727371 C 511.136743 349.888985 510.9956 353.050599 510.863866 356.212214 L 498.123313 363.66459 C 497.718702 363.626952 497.304681 363.579904 496.900069 363.532856 C 494.05838 365.339493 491.207282 367.14613 488.365593 368.952767 C 487.499913 368.642251 486.643642 367.908305 485.787371 367.588379 C 486.229621 360.992273 481.647162 355.600592 480.39569 363.476399 C 479.266542 362.79891 478.137394 362.121421 477.008246 361.443933 C 477.234076 357.331952 477.704554 352.326063 477.930384 348.214082 C 479.370047 346.633275 481.647162 345.682909 483.096236 344.102102 L 473.87486 336.151018 L 473.856041 333.582207 C 481.449561 327.748275 489.043081 321.923754 496.627192 316.099232 C 499.252461 317.435391 501.86832 317.783545 504.493589 315.958089 C 515.060532 309.230249 525.636885 302.492999 536.203828 295.765159 C 537.746997 296.574382 539.280756 297.393014 540.814516 298.202237 C 545.829814 294.494868 550.845113 290.796908 555.860412 287.089539 C 557.714097 286.167402 559.567781 286.534375 561.421466 288.171639 C 574.114971 278.771483 586.808476 269.380735 599.501981 259.980579 C 606.003991 255.680407 610.906375 245.311065 609.259701 209.968733 C 609.636084 193.389077 608.431659 177.035251 614.961898 159.956888 C 617.850635 154.264101 622.009664 147.131649 624.90781 141.438862 Z M 624.90781 141.438862 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 723.661209 262.154188 C 724.856224 262.154188 725.825409 262.878725 725.825409 263.772634 C 725.825409 264.675952 724.856224 265.400489 723.661209 265.400489 C 722.456784 265.400489 721.487599 264.675952 721.487599 263.772634 C 721.487599 262.878725 722.456784 262.154188 723.661209 262.154188 Z M 723.661209 262.154188 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 541.934254 297.797626 C 543.223365 297.600025 544.456018 297.138956 545.754538 297.807035 C 550.807475 294.363134 555.484029 290.919233 560.546376 287.484741 C 558.382176 287.023672 557.290666 287.033082 554.787722 288.463336 C 550.732198 291.389711 545.980367 294.871251 541.934254 297.797626 Z M 541.934254 297.797626 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 554.364291 315.29001 C 554.947684 314.123223 554.81595 311.893156 554.59953 310.462902 C 559.454866 306.736714 564.187878 303.377499 569.052624 299.66072 C 568.807975 301.853149 568.224582 304.00794 566.069792 305.936901 C 562.023678 308.863276 558.410405 312.363634 554.364291 315.29001 Z M 554.364291 315.29001 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 622.169626 216.480153 C 623.882167 250.674517 612.797698 266.115616 597.177818 275.722783 C 622.075531 263.161012 623.844529 241.641334 622.169626 216.480153 Z M 622.169626 216.480153 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 634.185642 143.358413 C 617.191966 168.510184 619.083288 190.763808 619.252661 207.842171 C 619.431442 224.920534 620.250075 237.501125 618.029417 243.730257 C 609.993647 266.294398 589.057362 279.04436 568.441002 292.772917 C 568.337497 292.838784 568.243401 293.026976 568.130487 292.979928 C 567.603551 292.763508 567.311854 292.829375 567.133073 293.036385 C 566.991929 293.215167 566.926062 293.497454 566.888424 293.80797 C 566.869605 293.939704 566.662594 293.958523 566.54968 294.033799 C 561.788439 297.223642 557.074246 300.479352 552.557654 303.942073 C 550.929799 301.928425 549.085524 300.027693 546.761361 298.3622 C 551.522602 295.050032 556.274433 291.747275 561.026264 288.444517 C 561.092131 288.406879 561.157998 288.350421 561.214455 288.303373 C 561.487333 288.086953 561.750801 287.785847 562.070726 287.832895 C 563.218693 288.002267 563.679762 287.72939 563.425703 287.033082 C 563.397475 286.948396 563.585666 286.938986 563.670352 286.891938 C 591.870823 270.180549 610.106562 252.79167 609.541988 222.897478 C 608.892728 188.674885 603.021159 173.770132 624.26796 141.90934 C 629.010381 140.422628 632.322548 140.902516 634.185642 143.358413 Z M 634.185642 143.358413 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 94.829299 172.556298 C 105.415061 172.556298 114.005995 178.540782 114.005995 185.908472 C 114.005995 193.285572 105.415061 199.260647 94.829299 199.260647 C 84.234127 199.260647 75.643193 193.285572 75.643193 185.908472 C 75.643193 178.540782 84.234127 172.556298 94.829299 172.556298 Z M 94.829299 172.556298 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 94.876347 181.918816 C 103.994217 181.918816 111.390136 185.795557 111.390136 190.585027 C 111.390136 195.365086 103.994217 199.251237 94.876347 199.251237 C 85.758477 199.251237 78.362558 195.365086 78.362558 190.585027 C 78.362558 185.795557 85.758477 181.918816 94.876347 181.918816 Z M 94.876347 181.918816 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 94.556422 182.746858 C 100.305667 182.746858 104.963402 185.193345 104.963402 188.204406 L 104.963402 193.624317 C 104.963402 196.635378 100.305667 199.081865 94.556422 199.081865 C 88.816586 199.081865 84.158851 196.635378 84.158851 193.624317 L 84.158851 188.204406 C 84.158851 185.193345 88.816586 182.746858 94.556422 182.746858 Z M 94.556422 182.746858 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 189.63068 433.351839 C 202.86053 433.351839 213.587436 440.70071 213.587436 449.771532 C 213.587436 459.877406 214.942414 462.022787 214.942414 471.281801 C 214.942414 480.352623 203.914402 487.701494 190.308169 487.701494 C 176.701936 487.701494 165.673924 480.352623 165.673924 471.281801 L 165.673924 449.771532 C 165.673924 440.70071 176.40083 433.351839 189.63068 433.351839 Z M 189.63068 433.351839 " stroke="#ffffff" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill="none" stroke-linejoin="miter" d="M 189.809462 433.417706 C 202.888759 433.417706 213.50275 440.531338 213.50275 449.301054 C 213.50275 458.080179 202.888759 465.184402 189.809462 465.184402 C 176.730165 465.184402 166.125583 458.080179 166.125583 449.301054 C 166.125583 440.531338 176.730165 433.417706 189.809462 433.417706 Z M 189.809462 433.417706 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 213.50275 449.686846 C 213.50275 449.827989 213.512159 449.959723 213.512159 450.091457 C 213.512159 459.303423 202.898169 466.774618 189.818871 466.774618 C 176.739574 466.774618 166.125583 459.303423 166.125583 450.091457 C 166.125583 449.959723 166.134993 449.827989 166.134993 449.686846 C 166.445509 458.28719 177.012452 464.459865 189.903557 464.459865 C 202.785254 464.459865 213.192234 458.28719 213.50275 449.686846 Z M 213.50275 449.686846 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 474.044233 333.73276 L 498.82903 351.262782 L 520.894464 334.137371 L 521.797782 328.595136 L 552.65175 307.24483 L 536.062685 295.793388 C 525.458103 302.558866 514.853522 309.314935 504.248941 316.071004 C 502.009464 317.397752 499.450062 317.378933 496.740107 316.287424 Z M 474.044233 333.73276 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 759.314056 303.189307 L 784.748114 299.848911 L 785.623203 287.71998 L 760.876044 291.19211 L 756.764063 285.038254 L 760.057412 291.305025 Z M 759.314056 303.189307 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 104.398828 187.282269 C 104.436466 187.423412 104.455285 187.564556 104.455285 187.705699 C 104.455285 189.8699 100.02338 191.620079 94.565831 191.620079 C 89.108283 191.620079 84.676377 189.8699 84.676377 187.705699 C 84.676377 187.564556 84.695196 187.423412 84.732834 187.282269 C 85.26918 189.248868 89.465846 190.782628 94.565831 190.782628 C 99.665816 190.782628 103.871892 189.248868 104.398828 187.282269 Z M 104.398828 187.282269 " stroke="#ffffff" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 760.810177 308.449255 L 760.866634 312.655331 L 787.251058 308.919733 L 787.204011 305.09004 L 761.60999 308.34575 L 759.342285 303.029345 Z M 760.810177 308.449255 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 666.413407 78.931112 C 665.679461 77.943108 664.079835 77.773736 663.035373 77.89606 C 661.454566 81.15177 659.770253 84.746224 658.180037 87.992525 C 657.89775 89.328683 659.779663 88.989939 660.824125 89.300454 C 662.423751 86.044744 664.813781 82.186822 666.413407 78.931112 Z M 666.413407 78.931112 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 160.018775 509.606964 L 159.924679 505.58908 L 225.236479 498.833011 L 233.01819 520.700843 L 232.914685 524.709318 L 167.433513 535.74674 Z M 160.018775 509.606964 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 514.335996 317.924688 C 517.130637 317.924688 519.398343 319.458448 519.398343 321.34977 C 519.398343 323.250503 517.130637 324.784262 514.335996 324.784262 C 511.550764 324.784262 509.283059 323.250503 509.283059 321.34977 C 509.283059 319.458448 511.550764 317.924688 514.335996 317.924688 Z M 514.335996 317.924688 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 536.015637 303.481004 C 539.506586 303.481004 542.338865 305.146497 542.338865 307.197783 C 542.338865 309.249068 539.506586 310.905152 536.015637 310.905152 C 532.534097 310.905152 529.701818 309.249068 529.701818 307.197783 C 529.701818 305.146497 532.534097 303.481004 536.015637 303.481004 Z M 536.015637 303.481004 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 535.197004 304.563104 C 537.841093 304.563104 539.986474 306.012177 539.986474 307.809404 C 539.986474 309.597222 537.841093 311.055705 535.197004 311.055705 C 532.562326 311.055705 530.416945 309.597222 530.416945 307.809404 C 530.416945 306.012177 532.562326 304.563104 535.197004 304.563104 Z M 535.197004 304.563104 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 478.024479 348.308178 L 488.525555 357.228447 L 488.365593 368.689299 L 490.294554 357.576601 L 496.956527 353.46462 L 489.72998 355.572363 Z M 478.024479 348.308178 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 160.018775 505.551441 L 225.236479 494.768078 L 232.914685 520.644386 L 167.433513 531.691217 Z M 160.018775 505.551441 " stroke="#000000" stroke-width="1" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 245.928116 510.839618 L 245.899887 509.447002 L 268.464027 507.113429 L 271.145753 514.669311 L 271.117525 516.052517 L 248.487518 519.872801 Z M 245.928116 510.839618 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 245.928116 509.428183 L 268.464027 505.711404 L 271.117525 514.650492 L 248.487518 518.461366 Z M 245.928116 509.428183 " stroke="#000000" stroke-width="1" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 281.816202 504.864543 L 281.787973 503.471927 L 304.352113 501.128945 L 307.033839 508.675417 L 307.005611 510.068033 L 284.375604 513.888317 Z M 281.816202 504.864543 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#ff8e72" fill-rule="nonzero" stroke-linejoin="miter" d="M 281.816202 503.453108 L 304.352113 499.72692 L 307.005611 508.666008 L 284.375604 512.476882 Z M 281.816202 503.453108 " stroke="#000000" stroke-width="1" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 628.417578 138.775954 C 607.509522 165.875505 612.148438 189.00422 610.755822 205.800296 C 607.453064 181.994093 612.694193 158.488996 628.417578 138.775954 Z M 628.417578 138.775954 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><g clip-path="url(#93da707b25)"><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 193.507421 567.344064 C 219.016756 567.344064 239.708392 583.199183 239.708392 602.752262 C 239.708392 622.295931 219.016756 638.16046 193.507421 638.16046 C 167.998087 638.16046 147.31586 622.295931 147.31586 602.752262 C 147.31586 583.199183 167.998087 567.344064 193.507421 567.344064 Z M 193.507421 567.344064 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path></g><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 804.818719 453.93056 C 830.328053 453.93056 851.01028 469.78568 851.01028 489.338759 C 851.01028 508.882428 830.328053 524.746957 804.818719 524.746957 C 779.309384 524.746957 758.617748 508.882428 758.617748 489.338759 C 758.617748 469.78568 779.309384 453.93056 804.818719 453.93056 Z M 804.818719 453.93056 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 369.052291 276.183852 C 369.052291 276.183852 368.045468 259.679472 372.204496 256.960108 C 376.363524 254.231334 368.619451 268.430369 371.197672 276.898979 C 370.416678 280.154689 367.923143 274.443082 369.052291 276.183852 Z M 369.052291 276.183852 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path><path stroke-linecap="butt" transform="matrix(0.415136, 0, 0, 0.415136, -6.222527, -10.884336)" fill-opacity="1" fill="#c97ccd" fill-rule="nonzero" stroke-linejoin="miter" d="M 756.020708 289.441931 L 755.004475 294.833612 L 750.271463 289.959457 Z M 756.020708 289.441931 " stroke="#000000" stroke-width="0.216" stroke-opacity="1" stroke-miterlimit="4"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Mixer.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Mixer = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "500",
    zoomAndPan: "magnify",
    viewBox: "0 0 375 374.999991",
    height: "500",
    preserveAspectRatio: "xMidYMid meet",
    version: "1.0"
  }, _attrs))}><path fill="#ff8995" d="M 204.375 196.890625 C 410.472656 312.238281 256.933594 433.238281 192.765625 206.058594 C 256.933594 433.390625 62.753906 410.472656 178.097656 204.375 C 62.753906 410.472656 -58.246094 256.933594 168.933594 192.765625 C -58.398438 256.933594 -35.484375 62.753906 170.613281 178.097656 C -35.484375 62.753906 118.058594 -58.246094 182.222656 168.933594 C 118.058594 -58.398438 312.238281 -35.484375 196.890625 170.613281 C 312.238281 -35.484375 433.238281 118.058594 206.058594 182.222656 C 433.390625 118.058594 410.472656 312.238281 204.375 196.890625 Z M 204.375 196.890625 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#2f2f34" d="M 216.292969 187.570312 C 216.292969 188.511719 216.246094 189.449219 216.15625 190.386719 C 216.0625 191.324219 215.925781 192.25 215.742188 193.175781 C 215.558594 194.097656 215.328125 195.007812 215.054688 195.910156 C 214.785156 196.808594 214.464844 197.695312 214.105469 198.5625 C 213.746094 199.429688 213.34375 200.28125 212.902344 201.109375 C 212.457031 201.941406 211.976562 202.746094 211.453125 203.527344 C 210.929688 204.308594 210.371094 205.066406 209.773438 205.792969 C 209.175781 206.519531 208.546875 207.214844 207.878906 207.878906 C 207.214844 208.546875 206.519531 209.175781 205.792969 209.773438 C 205.066406 210.371094 204.308594 210.929688 203.527344 211.453125 C 202.746094 211.976562 201.941406 212.457031 201.109375 212.902344 C 200.28125 213.34375 199.429688 213.746094 198.5625 214.105469 C 197.695312 214.464844 196.808594 214.785156 195.910156 215.054688 C 195.007812 215.328125 194.097656 215.558594 193.175781 215.742188 C 192.25 215.925781 191.324219 216.0625 190.386719 216.15625 C 189.449219 216.246094 188.511719 216.292969 187.570312 216.292969 C 186.628906 216.292969 185.691406 216.246094 184.753906 216.15625 C 183.820312 216.0625 182.890625 215.925781 181.96875 215.742188 C 181.046875 215.558594 180.132812 215.328125 179.234375 215.054688 C 178.332031 214.785156 177.449219 214.464844 176.578125 214.105469 C 175.710938 213.746094 174.859375 213.34375 174.03125 212.902344 C 173.203125 212.457031 172.394531 211.976562 171.613281 211.453125 C 170.832031 210.929688 170.078125 210.371094 169.351562 209.773438 C 168.621094 209.175781 167.925781 208.546875 167.261719 207.878906 C 166.597656 207.214844 165.964844 206.519531 165.367188 205.792969 C 164.773438 205.066406 164.210938 204.308594 163.691406 203.527344 C 163.167969 202.746094 162.683594 201.941406 162.242188 201.109375 C 161.796875 200.28125 161.394531 199.429688 161.035156 198.5625 C 160.675781 197.695312 160.359375 196.808594 160.085938 195.910156 C 159.8125 195.007812 159.585938 194.097656 159.402344 193.175781 C 159.21875 192.25 159.078125 191.324219 158.988281 190.386719 C 158.894531 189.449219 158.847656 188.511719 158.847656 187.570312 C 158.847656 186.628906 158.894531 185.691406 158.988281 184.753906 C 159.078125 183.820312 159.21875 182.890625 159.402344 181.96875 C 159.585938 181.046875 159.8125 180.132812 160.085938 179.234375 C 160.359375 178.332031 160.675781 177.449219 161.035156 176.578125 C 161.394531 175.710938 161.796875 174.859375 162.242188 174.03125 C 162.683594 173.203125 163.167969 172.394531 163.691406 171.613281 C 164.210938 170.832031 164.773438 170.078125 165.367188 169.351562 C 165.964844 168.621094 166.597656 167.925781 167.261719 167.261719 C 167.925781 166.597656 168.621094 165.964844 169.351562 165.367188 C 170.078125 164.773438 170.832031 164.210938 171.613281 163.691406 C 172.394531 163.167969 173.203125 162.683594 174.03125 162.242188 C 174.859375 161.796875 175.710938 161.394531 176.578125 161.035156 C 177.449219 160.675781 178.332031 160.359375 179.234375 160.085938 C 180.132812 159.8125 181.046875 159.585938 181.96875 159.402344 C 182.890625 159.21875 183.820312 159.078125 184.753906 158.988281 C 185.691406 158.894531 186.628906 158.847656 187.570312 158.847656 C 188.511719 158.847656 189.449219 158.894531 190.386719 158.988281 C 191.324219 159.078125 192.25 159.21875 193.175781 159.402344 C 194.097656 159.585938 195.007812 159.8125 195.910156 160.085938 C 196.808594 160.359375 197.695312 160.675781 198.5625 161.035156 C 199.429688 161.394531 200.28125 161.796875 201.109375 162.242188 C 201.941406 162.683594 202.746094 163.167969 203.527344 163.691406 C 204.308594 164.210938 205.066406 164.773438 205.792969 165.367188 C 206.519531 165.964844 207.214844 166.597656 207.878906 167.261719 C 208.546875 167.925781 209.175781 168.621094 209.773438 169.351562 C 210.371094 170.078125 210.929688 170.832031 211.453125 171.613281 C 211.976562 172.394531 212.457031 173.203125 212.902344 174.03125 C 213.34375 174.859375 213.746094 175.710938 214.105469 176.578125 C 214.464844 177.449219 214.785156 178.332031 215.054688 179.234375 C 215.328125 180.132812 215.558594 181.046875 215.742188 181.96875 C 215.925781 182.890625 216.0625 183.820312 216.15625 184.753906 C 216.246094 185.691406 216.292969 186.628906 216.292969 187.570312 Z M 216.292969 187.570312 " fill-opacity="1" fill-rule="nonzero"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Flower2.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Flower2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$6 = {
  __name: "SceneLoader",
  __ssrInlineRender: true,
  props: {
    sceneLoaded: Boolean
  },
  setup(__props) {
    const store = useMainStore();
    const { $gsap: gsap2 } = useNuxtApp();
    ref(null);
    const container = ref(null);
    const ready = ref(false);
    const loading = ref(false);
    const props = __props;
    const Flower4 = defineAsyncComponent(() => import('./Flower4-Du4mWY6D.mjs'));
    const Headphones = defineAsyncComponent(() => import('./Headphones-CsIugY3B.mjs'));
    const Flower5 = defineAsyncComponent(() => import('./Flower5-BXyF-nKO.mjs'));
    const Code = defineAsyncComponent(() => import('./Code-DkwC8OXK.mjs'));
    const BMX = defineAsyncComponent(() => import('./BMX-CwKbdGIY.mjs'));
    const Syntax = defineAsyncComponent(() => import('./Syntax-TJOP89Sl.mjs'));
    watch(
      () => props.sceneLoaded,
      async (loaded) => {
        if (!loaded) return;
        await nextTick$1();
        gsap2.timeline().call(async () => {
          await nextTick$1();
          await new Promise((r) => requestAnimationFrame(r));
          const sec = container.value.querySelectorAll(".secondary");
          gsap2.timeline().to(sec, {
            autoAlpha: 1,
            duration: 0.6,
            ease: "power1.inOut"
          }, "+=0.6").to(
            container.value.querySelectorAll(".decor"),
            {
              x: (i) => {
                const t = i / 9;
                const turns = 3;
                const \u03B8 = 2 * Math.PI * turns * t;
                const b = 40;
                const r = b * \u03B8;
                return Math.cos(\u03B8) * r;
              },
              y: (i) => {
                const t = i / 9;
                const turns = 2;
                const \u03B8 = 2 * Math.PI * turns * t;
                const b = 20;
                const r = b * \u03B8;
                return Math.sin(\u03B8) * r;
              },
              duration: 2,
              ease: "power1.out"
            },
            "-=0.9"
          );
        }, null).to(container.value, {
          autoAlpha: 0,
          duration: 0.8,
          ease: "power1.out"
        }, "+=1.8");
        store.toggleFold(true);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: "absolute w-full h-dvh flex items-center md:justify-center z-40"
      }, _attrs))} data-v-25676fa3><div class="hero-icon-wrap absolute flex flex-wrap justify-center lg:bottom-70 max-md:w-full right-0" data-v-25676fa3><div class="flex justify-between mx-auto relative gap-5 md:gap-12" data-v-25676fa3><div class="decor main-icon origin-center" data-v-25676fa3>`);
      _push(ssrRenderComponent(Mixer, {
        class: ["h-auto transition-all", loading.value ? "jello-horizontal" : "animate subtle-slide-in-attention"],
        width: "120",
        height: "120",
        style: { "--theme-main-animation-delay": "100ms" }
      }, null, _parent));
      _push(`</div><div class="decor main-icon origin-center" data-v-25676fa3>`);
      _push(ssrRenderComponent(Flower2, {
        width: "120",
        height: "120",
        class: ["h-auto transition-all", loading.value ? "rotate-ccw90-forever" : "animate subtle-slide-in-attention"],
        style: { "--theme-main-animation-delay": "200ms" }
      }, null, _parent));
      _push(`</div><div class="decor main-icon origin-center" data-v-25676fa3>`);
      _push(ssrRenderComponent(Heart, {
        class: ["transition-all h-auto", loading.value ? " jello-horizontal" : "animate subtle-slide-in-attention"],
        width: "120",
        height: "120"
      }, null, _parent));
      _push(`</div>`);
      if (ready.value) {
        _push(`<div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20" data-v-25676fa3>`);
        if (ready.value) {
          _push(ssrRenderComponent(unref(Code), {
            class: "h-auto transition-all w-full",
            width: "50",
            height: "50"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (ready.value) {
        _push(`<div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16" data-v-25676fa3>`);
        if (ready.value) {
          _push(ssrRenderComponent(unref(Flower5), {
            class: "rotate-ccw90-forever h-auto w-full",
            width: "50",
            height: "50"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (ready.value) {
        _push(`<div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16" data-v-25676fa3>`);
        if (ready.value) {
          _push(ssrRenderComponent(unref(Syntax), {
            class: "heartbeat h-auto w-full",
            width: "50",
            height: "50"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (ready.value) {
        _push(`<div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-22" data-v-25676fa3>`);
        if (ready.value) {
          _push(ssrRenderComponent(unref(BMX), {
            class: "rotate-forever h-auto w-full",
            width: "50",
            height: "50"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (ready.value) {
        _push(`<div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16" data-v-25676fa3>`);
        if (ready.value) {
          _push(ssrRenderComponent(unref(Headphones), {
            class: "shake-top h-auto w-full",
            width: "50",
            height: "50"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (ready.value) {
        _push(`<div class="decor secondary absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16" data-v-25676fa3>`);
        if (ready.value) {
          _push(ssrRenderComponent(unref(Flower4), {
            class: "heartbeat h-auto w-full",
            width: "50",
            height: "50"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/hero/SceneLoader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SceneLoader = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-25676fa3"]]);
const _sfc_main$5 = {
  __name: "HomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    const { $gsap: gsap2 } = useNuxtApp();
    const SceneTetris = defineAsyncComponent(() => import('./SceneTetris-BZPFSrf5.mjs'));
    const SceneUX = defineAsyncComponent(() => import('./SceneUX-B_nUJyaV.mjs'));
    const SceneVideo = defineAsyncComponent(() => import('./SceneVideo-Bsmt02cn.mjs'));
    ref(0);
    ref(false);
    ref(null);
    ref(null);
    const screens = ref(false);
    const delay = ref("0.5s");
    computed(() => ({ "--theme-main-animation-delay": delay.value }));
    const loadedScenes = ref([true, false, false]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref: "container",
        class: "max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto min-h-[85dvh] py-24 hero-container flex flex-col md:justify-center relative"
      }, _attrs))}><div class="hero-wrapper animate relative w-full"><div class="utilties absolute right-0 -top-15">`);
      _push(ssrRenderComponent(SecondaryNav, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "loaded": unref(store).loaded }, "hero-wrapper-scenes group relative justify-center w-full gap-8 lg:gap-14 items-center flex flex-col self-end h-[70dvh] -mb-24"])}">`);
      _push(ssrRenderComponent(SceneLoader, { sceneLoaded: screens.value }, null, _parent));
      if (loadedScenes.value[0]) {
        _push(ssrRenderComponent(unref(SceneTetris), null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (loadedScenes.value[1]) {
        _push(ssrRenderComponent(unref(SceneUX), null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (loadedScenes.value[2]) {
        _push(ssrRenderComponent(unref(SceneVideo), null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/HomeHero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Artisan",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap2 } = useNuxtApp();
    const isArtisan = ref(false);
    const artisan = ref(null);
    useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "md:min-h-[60vh]",
        ref_key: "artisan",
        ref: artisan
      }, _attrs))}><div class="code-artisan lg:my-34 my-18 md:w-3/4 mx-auto relative md:sticky top-[20%]"><div class="${ssrRenderClass([isArtisan.value ? ["animate"] : ["opacity-0"], "swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mb-4 delay-700"])}"></div><h3 class="font-heading font-semibold text-2xl lg:text-3xl leading-snug placeholder-line" data-splitting="words"> Code artisan forging WordPress &amp; Vue.js experiences by day, crafting dirt jumps &amp; trails for bikes by night\u2014 UX zeal meets mud-and-grit creativity. </h3><div class="${ssrRenderClass([isArtisan.value ? ["animate"] : ["opacity-0"], "swing-in-left-fwd h-[4px] bg-border dark:bg-background inverted:bg-background inverted:dark:bg-border transition duriation-900 mt-4 delay-700"])}"></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/Artisan.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap2 } = useNuxtApp();
    const store = useMainStore();
    ref(false);
    const section = ref(null);
    const openAbout = () => {
      navigateTo("/about");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "section",
        ref: section,
        class: "pt-16",
        id: "about"
      }, _attrs))}><div class="${ssrRenderClass([{ "opacity-0": !unref(store).loaded }, "max-w-full lg:max-w-[1024px] xl:max-w-[1440px] px-8 lg:px-12 mx-auto"])}"><div class="min-h-[80vh]"><div class="introduction-wrapper sticky md:max-w-2/3 mt-4 md:mt-8 top-[15%] md:top-[12%]"><h2 class="italic subtitle mb-4 text-3xl placeholder-line" data-splitting="words">So here&#39;s the thing: </h2><ul class="list-disc mb-12 pl-6 hidden md:block"><li class="placeholder-line text-xl" data-splitting="words">A Developer with <strong>PASSION</strong></li><li class="placeholder-line text-xl" data-splitting="words">An eye for design</li><li class="placeholder-line text-xl" data-splitting="words">API nerd</li><li class="placeholder-line text-xl" data-splitting="words">Bootstrap &amp; Tailwind Queen\u{1F478}</li></ul><div class="placeholder-line introduction" data-splitting="words"><p class="text-secondary text-xl leading-[1.8] mb-6 lg:mb-14" data-splitting="words">I&#39;m a full-stack developer with a passion for clean code, bold design, and building things that actually work\u2014both on screen and in the dirt.\u{1F6B4}\u200D\u2640\uFE0F With deep experience in WordPress, Vue.js, and the occasional Tailwind bender, I specialize in crafting digital systems that are fast, accessible, and built to last.</p></div>`);
      _push(ssrRenderComponent(MainButton, {
        href: "/about",
        class: "btn text-primary dark:text-background inverted:text-background inverted:dark:text-primary hover:text-accent subtle-slide-in",
        label: "What drives me",
        onClick: () => openAbout(),
        delay: "0.7s"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/Intro.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "LogoGarden",
  __ssrInlineRender: true,
  setup(__props) {
    const shuffledLogos = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo-garden max-w-full px-0 mx-auto mb-6 md:mb-32" }, _attrs))}><div class="flex **:max-w-1/2 xl:**:max-w-1/4 opacity-80 flex-wrap justify-center items-center"><!--[-->`);
      ssrRenderList(shuffledLogos.value, (logo, i) => {
        _push(`<img class="dark:invert inverted:invert transition-all mb-8 delay-700 w-70 md:w-100 md:delay-0 h-auto"${ssrRenderAttr("src", logo.src.replace("q_auto,f_auto", "w_100,e_pixelate,f_auto,e_grayscale"))}${ssrRenderAttr("data-src", logo.src)}${ssrRenderAttr("alt", logo.alt)} width="400" height="133">`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LogoGarden.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "FeaturedWork",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    const modalStore = useModalStore();
    const splide = ref(null);
    ref(null);
    ref([]);
    const isHovered = ref([false]);
    const activeSlideIndex = ref(0);
    const progressOffset = ref(283);
    const strokeLength = 2 * Math.PI * 45;
    ref(null);
    const loaded = ref(false);
    ref([]);
    const truncateHtmlText = (html, maxChars = 140) => {
      let text;
      {
        text = html.replace(/<[^>]+>/g, "");
      }
      return text.length > maxChars ? text.slice(0, maxChars) + "\u2026" : text;
    };
    computed(
      () => {
        var _a;
        return ((_a = work[activeSlideIndex.value]) == null ? void 0 : _a.textColor.replace("text-", "#")) || "#00ffd5";
      }
    );
    const activeTextColor = computed(() => {
      var _a;
      return ((_a = work[activeSlideIndex.value]) == null ? void 0 : _a.textColor) || "text-primary";
    });
    const splideOptions = {
      type: "loop",
      focus: "center",
      //autoplay: true,
      pagination: false,
      pauseOnHover: true,
      arrows: false,
      padding: "15%",
      breakpoints: {
        940: {
          padding: { gap: "12px", left: "12px", right: "2rem" }
        }
      }
    };
    const openWork = (item) => {
      if (item.caseStudy) {
        const slug = "/work/" + item.slug;
        navigateTo(slug);
        return;
      }
      modalStore.queueModalBySlug(item);
      navigateTo("/work");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="pt-20" id="work" data-v-80f8d8c3><div class="relative group h-[70vh] min-h-[550px] md:h-[570px] lg:h-[700px] xl:h-[900px] overflow-y-visible overflow-x-clip pb-8" data-v-80f8d8c3><h2 class="mb-6 lg:mb-18 max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto text-2xl lg:text-5xl placeholder-line" data-splitting="words" data-v-80f8d8c3> Featured Work</h2><div class="splideSlider relative" data-v-80f8d8c3>`);
      _push(ssrRenderComponent(unref(Splide), {
        ref_key: "splide",
        ref: splide,
        options: splideOptions,
        class: "overflow-visible peer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(work), (slide, index) => {
              _push2(ssrRenderComponent(unref(SplideSlide), {
                key: index,
                class: ["transition-all duration-500 group", slide.textColor]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative rounded-xl overflow-hidden flex flex-col justify-center items-center" data-v-80f8d8c3${_scopeId2}>`);
                    if (loaded.value && unref(store).loaded) {
                      _push3(`<div class="flex flex-col md:flex-row justify-center items-start gap-8" data-v-80f8d8c3${_scopeId2}><img crossorigin="anonymous"${ssrRenderAttr("src", slide.image.replace("/q_auto,f_auto", "/q_auto,f_auto,w_1260"))} class="w-full object-cover rounded-xl group-[.is-active]:w-[90%] md:group-[.is-active]:w-[var(--width-slide)] transition-all cursor-pointer duriation-900" data-v-80f8d8c3${_scopeId2}><div class="opacity-0 rounded-xl w-0 group-[.is-active]:opacity-100 group-[.is-active]:w-[20%] transition-all duriation-900 hidden md:block overflow-clip" data-v-80f8d8c3${_scopeId2}><video crossorigin="anonymous" class="aspect-mobile"${ssrRenderAttr("data-src", slide.video.replace("q_auto", "q_auto,w_480"))} playsinline muted="" loop${ssrRenderAttr("poster", slide.video.replace(".m3u8", ".webp").replace("q_auto", "q_auto,so_0.2"))} data-v-80f8d8c3${_scopeId2}></video></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="h-0 opacity-0 flex flex-col justify-end items-start py-6 md:p-6 group-[.is-active]:opacity-100 group-[.is-active]:h-full transition-all duriation-700 w-[85%] lg:w-[65%] lg:mr-26" data-v-80f8d8c3${_scopeId2}><h3 class="${ssrRenderClass([slide.textColor, "text-2xl font-bold mb-2 subtle-slide-in"])}" data-v-80f8d8c3${_scopeId2}>${ssrInterpolate(slide.title)}</h3><div class="flex flex-col gap-6 mb-4" data-v-80f8d8c3${_scopeId2}><div class="flex flex-col justify-between pr-8 lg:pr-18" data-v-80f8d8c3${_scopeId2}><p class="${ssrRenderClass([slide.textColor, "text-base subtle-slide-in"])}" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0.2s" })}" data-v-80f8d8c3${_scopeId2}>${ssrInterpolate(truncateHtmlText(slide.text, 100))}</p></div><div class="flex gap-2 group/ctas flex-wrap max-w-75 flex-col mt-6 md:mt-0" data-v-80f8d8c3${_scopeId2}>`);
                    _push3(ssrRenderComponent(MainButton, {
                      href: "/work/",
                      label: slide.projectTitle,
                      onClick: () => openWork(slide.slug),
                      delay: "0.7s"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative rounded-xl overflow-hidden flex flex-col justify-center items-center" }, [
                        loaded.value && unref(store).loaded ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-col md:flex-row justify-center items-start gap-8"
                        }, [
                          createVNode("img", {
                            crossorigin: "anonymous",
                            src: slide.image.replace("/q_auto,f_auto", "/q_auto,f_auto,w_1260"),
                            class: "w-full object-cover rounded-xl group-[.is-active]:w-[90%] md:group-[.is-active]:w-[var(--width-slide)] transition-all cursor-pointer duriation-900",
                            onClick: withModifiers(($event) => openWork(slide.slug), ["prevent"])
                          }, null, 8, ["src", "onClick"]),
                          createVNode("div", { class: "opacity-0 rounded-xl w-0 group-[.is-active]:opacity-100 group-[.is-active]:w-[20%] transition-all duriation-900 hidden md:block overflow-clip" }, [
                            createVNode("video", {
                              crossorigin: "anonymous",
                              class: "aspect-mobile",
                              "data-src": slide.video.replace("q_auto", "q_auto,w_480"),
                              playsinline: "",
                              muted: "",
                              loop: "",
                              poster: slide.video.replace(".m3u8", ".webp").replace("q_auto", "q_auto,so_0.2")
                            }, null, 8, ["data-src", "poster"])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", {
                          class: "h-0 opacity-0 flex flex-col justify-end items-start py-6 md:p-6 group-[.is-active]:opacity-100 group-[.is-active]:h-full transition-all duriation-700 w-[85%] lg:w-[65%] lg:mr-26",
                          onMouseover: ($event) => isHovered.value = true,
                          onMouseleave: ($event) => isHovered.value = false
                        }, [
                          createVNode("h3", {
                            class: [slide.textColor, "text-2xl font-bold mb-2 subtle-slide-in"]
                          }, toDisplayString(slide.title), 3),
                          createVNode("div", { class: "flex flex-col gap-6 mb-4" }, [
                            createVNode("div", { class: "flex flex-col justify-between pr-8 lg:pr-18" }, [
                              createVNode("p", {
                                class: [slide.textColor, "text-base subtle-slide-in"],
                                style: { "--theme-main-animation-delay": "0.2s" }
                              }, toDisplayString(truncateHtmlText(slide.text, 100)), 3)
                            ]),
                            createVNode("div", { class: "flex gap-2 group/ctas flex-wrap max-w-75 flex-col mt-6 md:mt-0" }, [
                              createVNode(MainButton, {
                                href: "/work/",
                                label: slide.projectTitle,
                                onClick: () => openWork(slide.slug),
                                delay: "0.7s"
                              }, null, 8, ["label", "onClick"])
                            ])
                          ])
                        ], 40, ["onMouseover", "onMouseleave"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(work), (slide, index) => {
                return openBlock(), createBlock(unref(SplideSlide), {
                  key: index,
                  class: ["transition-all duration-500 group", slide.textColor]
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "relative rounded-xl overflow-hidden flex flex-col justify-center items-center" }, [
                      loaded.value && unref(store).loaded ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex flex-col md:flex-row justify-center items-start gap-8"
                      }, [
                        createVNode("img", {
                          crossorigin: "anonymous",
                          src: slide.image.replace("/q_auto,f_auto", "/q_auto,f_auto,w_1260"),
                          class: "w-full object-cover rounded-xl group-[.is-active]:w-[90%] md:group-[.is-active]:w-[var(--width-slide)] transition-all cursor-pointer duriation-900",
                          onClick: withModifiers(($event) => openWork(slide.slug), ["prevent"])
                        }, null, 8, ["src", "onClick"]),
                        createVNode("div", { class: "opacity-0 rounded-xl w-0 group-[.is-active]:opacity-100 group-[.is-active]:w-[20%] transition-all duriation-900 hidden md:block overflow-clip" }, [
                          createVNode("video", {
                            crossorigin: "anonymous",
                            class: "aspect-mobile",
                            "data-src": slide.video.replace("q_auto", "q_auto,w_480"),
                            playsinline: "",
                            muted: "",
                            loop: "",
                            poster: slide.video.replace(".m3u8", ".webp").replace("q_auto", "q_auto,so_0.2")
                          }, null, 8, ["data-src", "poster"])
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", {
                        class: "h-0 opacity-0 flex flex-col justify-end items-start py-6 md:p-6 group-[.is-active]:opacity-100 group-[.is-active]:h-full transition-all duriation-700 w-[85%] lg:w-[65%] lg:mr-26",
                        onMouseover: ($event) => isHovered.value = true,
                        onMouseleave: ($event) => isHovered.value = false
                      }, [
                        createVNode("h3", {
                          class: [slide.textColor, "text-2xl font-bold mb-2 subtle-slide-in"]
                        }, toDisplayString(slide.title), 3),
                        createVNode("div", { class: "flex flex-col gap-6 mb-4" }, [
                          createVNode("div", { class: "flex flex-col justify-between pr-8 lg:pr-18" }, [
                            createVNode("p", {
                              class: [slide.textColor, "text-base subtle-slide-in"],
                              style: { "--theme-main-animation-delay": "0.2s" }
                            }, toDisplayString(truncateHtmlText(slide.text, 100)), 3)
                          ]),
                          createVNode("div", { class: "flex gap-2 group/ctas flex-wrap max-w-75 flex-col mt-6 md:mt-0" }, [
                            createVNode(MainButton, {
                              href: "/work/",
                              label: slide.projectTitle,
                              onClick: () => openWork(slide.slug),
                              delay: "0.7s"
                            }, null, 8, ["label", "onClick"])
                          ])
                        ])
                      ], 40, ["onMouseover", "onMouseleave"])
                    ])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button title="Next Slide" aria-label="Next Slide" class="${ssrRenderClass([[isHovered.value ? "md:opacity-80" : ""], "mt-8 block -right-2 md:-right-8 lg:right-65 xl:right-95 mx-auto text-white px-6 py-2 rounded-full transition duriation-900 cursor-pointer w-24 md:w-50 flex flex-col justify-center items-center group/slider h-26 md:h-50 hover:opacity-80 dark:hover:bg-primary/20 inverted:bg-background/0 absolute bottom-90 md:bottom-0 xl:bottom-25"])}" data-v-80f8d8c3><svg fill="none" stroke-width="1.5" viewBox="0 0 24 24" class="${ssrRenderClass([activeTextColor.value, "w-24 md:w-50"])}" xmlns="http://www.w3.org/2000/svg" data-v-80f8d8c3><path d="M9 6L15 12L9 18" class="stroke-current" stroke-linecap="round" stroke-linejoin="round" data-v-80f8d8c3></path></svg><svg class="${ssrRenderClass([activeTextColor.value, "absolute inset-0 rounded-[9rem] w-full h-full pointer-events-none opacity-0 group-hover/slider:opacity-100 animate-spin-slow z-0"])}" viewBox="0 0 100 100" data-v-80f8d8c3><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="6"${ssrRenderAttr("stroke-dasharray", strokeLength)}${ssrRenderAttr("stroke-dashoffset", progressOffset.value)} class="transition-all duration-100 ease-linear" data-v-80f8d8c3></circle></svg></button></div></section><div class="hidden stroke-sunburn-orange stroke-" data-v-80f8d8c3></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carousels/FeaturedWork.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FeaturedWork = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-80f8d8c3"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home",
      link: [
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }
      ],
      meta: [
        { name: "description", content: "Code artisan forging WordPress & Vue.js experiences by day, crafting dirt jumps & trails for bikes by night UX zeal meets mud and grit creativity." },
        { property: "og:title", content: "Building digital bridges between ideas & impact" },
        { property: "og:image", content: "https://res.cloudinary.com/dp1qyhhlo/image/upload/f_auto,w_960/v1745552050/Title_bjlnl8.png" }
      ]
    });
    const store = useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-main bg-background text-primary dark:text-background dark:bg-deep-purple inverted:text-background inverted:bg-deep-purple inverted:dark:bg-background inverted:dark:text-primary transition duration-700 relative overflow-x-clip" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(Nav, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      if (unref(store).loaded) {
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(store).loaded) {
        _push(ssrRenderComponent(FeaturedWork, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(store).loaded) {
        _push(ssrRenderComponent(Contact, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(store).loaded) {
        _push(ssrRenderComponent(_sfc_main$b, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DVCVDo8X.mjs.map
