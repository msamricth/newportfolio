import { defineComponent, createElementBlock, openBlock, renderSlot, onUpdated, inject, ref, onMounted, onBeforeUnmount, watch, provide, computed, resolveComponent, createBlock, resolveDynamicComponent, withCtx, createElementVNode, mergeProps, unref, nextTick as nextTick$1, createVNode, createCommentVNode, withModifiers, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-BvcfoKbn.mjs';
import { u as useMainStore, a as useNuxtApp, n as navigateTo } from './server.mjs';
import gsap from 'gsap';
import { u as useHead, _ as _export_sfc$1 } from './_plugin-vue_export-helper-CxiIwPb2.mjs';
import { C as Contact, _ as _sfc_main$g, S as SecondaryNav } from './Footer-D9OvthiA.mjs';
import { M as MainButton } from './MainButton-BKS2LnZK.mjs';
import { u as useModalStore, w as work } from './work-Dx-p7MSX.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';

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
const _sfc_main$f = defineComponent({
  name: "SplideSlide"
});
const _hoisted_1 = { class: "splide__slide" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const SplideSlide = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render]]);

const _sfc_main$e = {
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
      const chars = [];
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
      _push(`<!--[--><div data-v-4af30548></div><header id="nav" class="${ssrRenderClass([isSticky.value ? "fixed left-0 w-full bg-background/70 dark:bg-primary/70 inverted:bg-primary/70 inverted:dark:bg-background/70 backdrop-blur transition duration-700" : " absolute ", "py-4 mx-auto z-20 w-full will-change-transform transform-gpu"])}" data-v-4af30548><div class="nav-wrapper max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto flex items-center justify-between" data-v-4af30548><h1 class="${ssrRenderClass([isSticky.value ? ["text-lg", "lg:text-lg", "hover:text-electric-purple", "dark:hover:text-accent"] : ["text-2xl", "lg:text-4xl"], "text-primary dark:text-background inverted:text-background inverted:dark:text-primary nav-brand transition-all duration-700"])}" data-v-4af30548><a aria-label="Return Home" href="/" class="${ssrRenderClass([{ "animate": unref(mainStore).loaded }, "text-nowrap subtle-slide-in font-black block opacity-0"])}" data-v-4af30548> hi, i\u2019m Emm.</a></h1><nav class="${ssrRenderClass([isSticky.value ? [""] : ["opacity-0"], "flex space-x-8 text-sm font-heading font-semibold group/nav ml-auto text-primary dark:text-background inverted:text-background inverted:dark:text-primary"])}" data-v-4af30548>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "group-hover/nav:opacity-60 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700",
        to: "/about",
        "aria-label": "Find out more about me!"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-item" data-v-4af30548${_scopeId}>about</span>`);
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
            _push2(`<span class="nav-item" data-v-4af30548${_scopeId}>work</span>`);
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
      _push(`<a href="#sayHello" class="group-hover/nav:opacity-60 group-hover/nav:hover:opacity-100 transition relative overflow-clip duration-700" aria-label="Send me a message!" data-v-4af30548><span class="nav-item" data-v-4af30548>say hello</span></a></nav></div></header><!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/Nav.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Nav = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__scopeId", "data-v-4af30548"]]);
const _sfc_main$d = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Mixer.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Mixer = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$c = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "490",
    zoomAndPan: "magnify",
    viewBox: "0 0 367.5 258.749997",
    height: "345",
    preserveAspectRatio: "xMidYMid meet",
    version: "1.0"
  }, _attrs))}><defs><clipPath id="e55de84e28"><path d="M 33 2 L 335 2 L 335 254.890625 L 33 254.890625 Z M 33 2 " clip-rule="nonzero"></path></clipPath></defs><g clip-path="url(#e55de84e28)"><path fill="#ff8995" d="M 283.683594 6.363281 C 208.519531 -13.863281 184.054688 62.480469 184.054688 62.480469 C 184.054688 62.480469 159.585938 -13.863281 84.425781 6.363281 C 12.796875 25.640625 -4.296875 175.210938 174.222656 252.246094 C 180.492188 254.953125 187.617188 254.953125 193.886719 252.246094 C 372.40625 175.210938 355.3125 25.640625 283.683594 6.363281 Z M 283.683594 6.363281 " fill-opacity="1" fill-rule="nonzero"></path></g><path fill="#c97ccd" d="M 112.304688 164.820312 C 115.59375 167.992188 115.6875 173.230469 112.515625 176.519531 C 110.890625 178.203125 108.726562 179.046875 106.558594 179.046875 C 104.492188 179.046875 102.421875 178.277344 100.816406 176.726562 C 68.453125 145.503906 60.511719 114 59.546875 93.070312 C 58.488281 70.070312 65.367188 54.460938 65.660156 53.808594 C 67.53125 49.640625 72.429688 47.777344 76.597656 49.652344 C 80.757812 51.519531 82.621094 56.394531 80.769531 60.558594 C 80.675781 60.777344 75.054688 73.914062 76.121094 93.140625 C 77.550781 118.914062 89.726562 143.03125 112.304688 164.820312 Z M 124.769531 177.476562 C 119.992188 177.476562 116.121094 181.347656 116.121094 186.125 C 116.121094 190.902344 119.992188 194.773438 124.769531 194.773438 C 129.546875 194.773438 133.417969 190.898438 133.417969 186.125 C 133.417969 181.347656 129.542969 177.476562 124.769531 177.476562 Z M 124.769531 177.476562 " fill-opacity="1" fill-rule="nonzero"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Heart.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Heart = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$b = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "490",
    zoomAndPan: "magnify",
    viewBox: "0 0 367.5 258.749997",
    height: "345",
    preserveAspectRatio: "xMidYMid meet",
    version: "1.0"
  }, _attrs))}><defs><clipPath id="9895e21985"><path d="M 59.070312 9.796875 L 307.730469 9.796875 L 307.730469 248.722656 L 59.070312 248.722656 Z M 59.070312 9.796875 " clip-rule="nonzero"></path></clipPath><clipPath id="119e99c127"><path d="M 59.070312 9.796875 L 307.730469 9.796875 L 307.730469 248.722656 L 59.070312 248.722656 Z M 59.070312 9.796875 " clip-rule="nonzero"></path></clipPath></defs><g clip-path="url(#9895e21985)"><path fill="#000000" d="M 295.539062 143.171875 C 286.476562 129.996094 273.320312 122.441406 259.449219 122.441406 C 257.613281 122.441406 255.796875 122.570312 254 122.828125 C 253.171875 120.25 250.390625 117.1875 245.601562 117.074219 L 243.414062 104.40625 L 239.730469 83.050781 L 241.765625 82.808594 C 242.316406 82.746094 242.832031 82.511719 243.242188 82.140625 L 250.59375 75.507812 C 251.230469 74.933594 251.546875 74.089844 251.460938 73.246094 C 254.472656 71.207031 256.820312 67.398438 257.820312 62.535156 L 265.15625 26.820312 C 265.71875 24.089844 266.828125 21.699219 268.28125 20.085938 L 270.398438 17.734375 C 271.28125 16.75 272.25 16.101562 273.246094 15.800781 C 273.910156 16.570312 274.890625 17.058594 275.988281 17.058594 L 293.03125 17.058594 C 295.035156 17.058594 296.660156 15.433594 296.660156 13.429688 C 296.660156 11.421875 295.035156 9.796875 293.03125 9.796875 L 275.988281 9.796875 C 274.738281 9.796875 273.636719 10.429688 272.984375 11.386719 C 270.863281 11.773438 268.835938 12.957031 267.160156 14.820312 L 265.042969 17.171875 C 263.050781 19.382812 261.617188 22.417969 260.890625 25.945312 L 260.125 29.667969 L 220.066406 29.667969 L 218.808594 25.722656 C 217.679688 22.175781 215.390625 19.027344 212.363281 16.859375 L 209.085938 14.507812 C 206.277344 12.496094 202.996094 11.390625 199.558594 11.273438 C 198.898438 10.378906 197.839844 9.796875 196.644531 9.796875 L 170.226562 9.796875 C 168.222656 9.796875 166.597656 11.421875 166.597656 13.425781 C 166.597656 15.433594 168.222656 17.058594 170.226562 17.058594 L 196.644531 17.058594 C 197.820312 17.058594 198.863281 16.496094 199.527344 15.628906 C 202.058594 15.738281 204.476562 16.5625 206.546875 18.046875 L 209.828125 20.398438 C 212.097656 22.023438 213.8125 24.386719 214.660156 27.042969 L 226.035156 62.757812 C 227.671875 67.894531 231.632812 71.945312 236.578125 73.789062 C 236.496094 73.828125 236.414062 73.871094 236.324219 73.902344 L 231.355469 75.601562 C 229.96875 76.078125 229.222656 77.582031 229.6875 78.972656 L 230.6875 81.972656 C 230.96875 82.824219 231.652344 83.445312 232.472656 83.683594 L 233.949219 92.246094 L 156.261719 125.386719 L 154.15625 114.386719 L 152.925781 107.957031 C 156.597656 104.609375 159.957031 100.34375 162.902344 98.316406 C 167.164062 95.378906 170.191406 91.5 166.34375 88.753906 C 162.496094 86.007812 156.085938 91.023438 151.917969 93.203125 C 147.753906 95.378906 130.332031 100.492188 130.332031 105.984375 C 130.332031 111.476562 138.1875 113.558594 145.007812 112.519531 C 145.457031 112.449219 145.902344 112.339844 146.347656 112.199219 L 147.191406 116.613281 L 149.808594 130.300781 L 141.464844 140.230469 C 132.539062 128.882812 120.347656 122.441406 107.542969 122.441406 C 93.667969 122.441406 80.515625 129.996094 71.453125 143.171875 C 63.515625 154.714844 59.144531 169.769531 59.144531 185.5625 C 59.144531 201.355469 63.515625 216.410156 71.457031 227.953125 C 80.515625 241.128906 93.671875 248.683594 107.542969 248.683594 C 121.417969 248.683594 134.574219 241.128906 143.632812 227.953125 C 151.050781 217.167969 155.355469 203.3125 155.886719 188.652344 C 157.539062 189.910156 159.535156 190.648438 161.683594 190.648438 C 164.035156 190.648438 166.199219 189.769531 167.933594 188.289062 L 176.042969 194.5625 L 164.816406 194.5625 C 162.917969 194.5625 161.375 196.101562 161.375 198.003906 C 161.375 199.90625 162.917969 201.449219 164.816406 201.449219 L 184.832031 201.449219 C 186.734375 201.449219 188.277344 199.90625 188.277344 198.003906 C 188.277344 196.101562 186.734375 194.5625 184.832031 194.5625 L 184.171875 194.5625 L 170.910156 184.300781 C 171.625 182.71875 172.035156 180.929688 172.035156 179.03125 C 172.035156 177.003906 171.570312 175.09375 170.753906 173.433594 L 237.378906 112.132812 L 238.542969 118.855469 C 233.203125 121.910156 231.832031 128.144531 231.984375 133.359375 C 228.832031 136.144531 225.929688 139.429688 223.359375 143.171875 C 215.417969 154.714844 211.046875 169.769531 211.046875 185.558594 C 211.046875 201.355469 215.417969 216.410156 223.359375 227.953125 C 232.417969 241.128906 245.570312 248.683594 259.445312 248.683594 C 273.320312 248.683594 286.472656 241.128906 295.539062 227.953125 C 303.476562 216.410156 307.84375 201.355469 307.84375 185.558594 C 307.84375 169.769531 303.476562 154.714844 295.539062 143.171875 Z M 246.671875 124.625 C 244.429688 125.402344 242.25 126.386719 240.132812 127.558594 C 240.773438 126.175781 241.835938 125.054688 243.554688 124.59375 C 244.976562 124.207031 246.0625 124.226562 246.671875 124.625 Z M 230.183594 61.433594 L 221.453125 34.023438 L 259.230469 34.023438 L 253.550781 61.65625 C 253 64.335938 251.949219 66.59375 250.625 68.164062 C 250.113281 67.1875 249.023438 66.59375 247.867188 66.769531 L 240.335938 67.914062 C 239.296875 68.070312 238.492188 68.808594 238.195312 69.746094 C 234.4375 68.382812 231.421875 65.324219 230.183594 61.433594 Z M 235.21875 99.597656 L 235.914062 103.617188 L 165.625 168.292969 C 165.21875 168.105469 164.800781 167.945312 164.371094 167.816406 L 157.652344 132.679688 Z M 154.59375 170.574219 C 152.992188 161.785156 149.976562 153.5625 145.71875 146.449219 L 151.566406 139.492188 L 157.132812 168.601562 C 156.199219 169.117188 155.34375 169.785156 154.59375 170.574219 Z M 154.59375 170.574219 " fill-opacity="1" fill-rule="nonzero"></path></g><path fill="#ff8995" d="M 248.929688 181.707031 L 241.628906 146.164062 C 246.746094 141.265625 252.867188 138.410156 259.449219 138.410156 C 277.359375 138.410156 291.878906 159.519531 291.878906 185.5625 C 291.878906 211.605469 277.359375 232.714844 259.449219 232.714844 C 241.539062 232.714844 227.019531 211.605469 227.019531 185.5625 C 227.019531 173.148438 230.320312 161.855469 235.714844 153.4375 L 242.210938 185.066406 C 242.453125 186.253906 243.273438 187.238281 244.390625 187.695312 L 253.355469 191.359375 C 253.804688 191.542969 254.269531 191.628906 254.730469 191.628906 C 256.15625 191.628906 257.511719 190.777344 258.085938 189.367188 C 258.847656 187.515625 257.957031 185.394531 256.101562 184.636719 Z M 114.089844 184.074219 L 139.558594 178.027344 C 138.820312 171.316406 137.105469 165.082031 134.632812 159.636719 Z M 107.542969 138.410156 C 89.632812 138.410156 75.113281 159.519531 75.113281 185.5625 C 75.113281 211.605469 89.632812 232.714844 107.542969 232.714844 C 125.453125 232.714844 139.976562 211.605469 139.976562 185.5625 C 139.976562 185.503906 139.972656 185.445312 139.972656 185.386719 L 105.085938 193.675781 C 104.804688 193.738281 104.523438 193.773438 104.246094 193.773438 C 103.007812 193.773438 101.828125 193.136719 101.15625 192.046875 C 100.335938 190.714844 100.460938 189.003906 101.46875 187.808594 L 130.878906 152.820312 C 124.980469 143.9375 116.707031 138.410156 107.542969 138.410156 Z M 107.542969 138.410156 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#c97ccd" d="M 235.714844 153.4375 L 242.210938 185.066406 C 242.453125 186.253906 243.273438 187.238281 244.390625 187.695312 L 253.355469 191.359375 C 253.804688 191.542969 254.269531 191.628906 254.730469 191.628906 C 256.15625 191.628906 257.511719 190.777344 258.085938 189.367188 C 258.847656 187.515625 257.957031 185.394531 256.101562 184.636719 L 248.929688 181.707031 L 241.628906 146.164062 L 239.726562 136.894531 C 239.71875 136.863281 239.707031 136.820312 239.703125 136.785156 C 239.683594 136.707031 238.433594 131.214844 240.132812 127.5625 C 240.773438 126.175781 241.835938 125.054688 243.554688 124.59375 C 244.976562 124.207031 246.0625 124.226562 246.671875 124.625 C 249.0625 123.792969 251.511719 123.191406 254 122.828125 C 253.171875 120.25 250.390625 117.1875 245.601562 117.074219 L 243.414062 104.40625 L 239.730469 83.050781 L 233.53125 83.78125 C 233.167969 83.824219 232.808594 83.78125 232.472656 83.683594 L 233.953125 92.246094 L 156.261719 125.386719 L 154.15625 114.386719 C 149.785156 113.246094 147.195312 116.613281 147.195312 116.613281 L 149.8125 130.304688 L 141.464844 140.230469 L 130.878906 152.820312 L 101.46875 187.808594 C 100.460938 189.007812 100.335938 190.714844 101.15625 192.046875 C 101.828125 193.136719 103.007812 193.773438 104.246094 193.773438 C 104.523438 193.773438 104.804688 193.742188 105.085938 193.675781 L 139.972656 185.390625 L 151.828125 182.574219 C 151.507812 181.457031 151.335938 180.269531 151.335938 179.035156 C 151.335938 177.648438 151.550781 176.316406 151.949219 175.085938 L 139.5625 178.027344 L 114.089844 184.074219 L 134.632812 159.636719 L 145.71875 146.449219 L 151.566406 139.492188 L 157.132812 168.601562 C 158.507812 167.847656 160.050781 167.417969 161.6875 167.417969 C 162.613281 167.417969 163.515625 167.558594 164.371094 167.816406 L 157.65625 132.683594 L 235.21875 99.597656 L 235.914062 103.617188 L 165.625 168.292969 C 167.8125 169.300781 169.621094 171.128906 170.753906 173.433594 L 237.382812 112.132812 L 238.542969 118.855469 C 233.203125 121.910156 231.832031 128.144531 231.984375 133.359375 C 232.035156 135.238281 232.289062 136.992188 232.628906 138.410156 Z M 149.117188 176.601562 C 149.34375 176.546875 149.574219 176.683594 149.628906 176.910156 C 149.6875 177.136719 149.550781 177.367188 149.324219 177.421875 L 112.300781 186.765625 C 112.269531 186.773438 112.234375 186.777344 112.199219 186.777344 C 112.007812 186.777344 111.835938 186.648438 111.789062 186.457031 C 111.730469 186.230469 111.867188 186.003906 112.09375 185.945312 Z M 149.546875 134.105469 L 108.988281 183.214844 C 108.90625 183.316406 108.785156 183.371094 108.664062 183.371094 C 108.570312 183.371094 108.472656 183.335938 108.394531 183.273438 C 108.214844 183.125 108.191406 182.855469 108.339844 182.675781 L 148.894531 133.570312 C 149.042969 133.386719 149.3125 133.363281 149.488281 133.511719 C 149.671875 133.660156 149.695312 133.925781 149.546875 134.105469 Z M 162.523438 164.046875 C 162.496094 164.050781 162.46875 164.054688 162.445312 164.054688 C 162.246094 164.054688 162.066406 163.914062 162.027344 163.710938 L 152.9375 116.695312 C 152.894531 116.464844 153.046875 116.242188 153.273438 116.199219 C 153.503906 116.15625 153.726562 116.304688 153.769531 116.535156 L 162.859375 163.550781 C 162.902344 163.78125 162.753906 164 162.523438 164.046875 Z M 233.78125 95.398438 L 159.25 126.652344 C 159.199219 126.675781 159.144531 126.6875 159.089844 126.6875 C 158.921875 126.6875 158.765625 126.589844 158.699219 126.425781 C 158.609375 126.210938 158.710938 125.964844 158.925781 125.875 L 233.453125 94.617188 C 233.667969 94.527344 233.914062 94.628906 234.007812 94.84375 C 234.097656 95.058594 233.996094 95.308594 233.78125 95.398438 Z M 236.203125 106.753906 L 169.925781 167.730469 C 169.84375 167.804688 169.742188 167.84375 169.640625 167.84375 C 169.527344 167.84375 169.414062 167.796875 169.328125 167.703125 C 169.171875 167.535156 169.183594 167.265625 169.355469 167.109375 L 235.632812 106.132812 C 235.804688 105.972656 236.070312 105.984375 236.230469 106.15625 C 236.386719 106.328125 236.375 106.597656 236.203125 106.753906 Z M 237.648438 85.246094 C 237.609375 85.015625 237.761719 84.796875 237.992188 84.753906 C 238.21875 84.714844 238.441406 84.867188 238.480469 85.097656 L 243.871094 115.394531 C 243.910156 115.625 243.757812 115.84375 243.527344 115.886719 C 243.503906 115.890625 243.480469 115.890625 243.453125 115.890625 C 243.253906 115.890625 243.074219 115.75 243.039062 115.542969 Z M 238.179688 121.007812 C 238.324219 120.828125 238.589844 120.800781 238.773438 120.949219 C 238.953125 121.09375 238.980469 121.359375 238.835938 121.542969 C 238.785156 121.601562 234.027344 127.558594 234.636719 134.367188 C 235.234375 141.082031 243.796875 180.703125 244.492188 183.914062 L 255.414062 189.066406 C 255.625 189.164062 255.714844 189.417969 255.617188 189.628906 C 255.542969 189.78125 255.390625 189.871094 255.234375 189.871094 C 255.171875 189.871094 255.113281 189.859375 255.054688 189.832031 L 243.945312 184.589844 C 243.824219 184.535156 243.738281 184.425781 243.710938 184.300781 C 243.332031 182.554688 234.417969 141.457031 233.792969 134.445312 C 233.152344 127.285156 237.972656 121.261719 238.179688 121.007812 Z M 238.179688 121.007812 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#ff8995" d="M 147.195312 116.613281 L 146.347656 112.199219 L 145.5 107.757812 C 145.121094 105.789062 146.410156 103.886719 148.378906 103.507812 C 150.347656 103.132812 152.25 104.421875 152.628906 106.394531 L 152.925781 107.957031 L 154.15625 114.386719 C 149.78125 113.246094 147.195312 116.613281 147.195312 116.613281 Z M 165.625 168.292969 C 165.21875 168.105469 164.800781 167.945312 164.371094 167.816406 C 163.515625 167.558594 162.613281 167.417969 161.683594 167.417969 C 160.050781 167.417969 158.503906 167.84375 157.132812 168.601562 C 156.199219 169.117188 155.34375 169.785156 154.59375 170.574219 C 153.421875 171.8125 152.507812 173.351562 151.949219 175.082031 C 151.550781 176.316406 151.335938 177.644531 151.335938 179.03125 C 151.335938 180.269531 151.507812 181.457031 151.824219 182.574219 C 152.539062 185.078125 153.988281 187.210938 155.886719 188.65625 C 157.539062 189.914062 159.535156 190.648438 161.683594 190.648438 C 164.03125 190.648438 166.199219 189.769531 167.933594 188.289062 L 159.875 182.054688 C 158.789062 181.214844 158.589844 179.652344 159.429688 178.566406 C 160.273438 177.476562 161.832031 177.277344 162.921875 178.121094 L 170.910156 184.300781 C 171.625 182.71875 172.035156 180.929688 172.035156 179.035156 C 172.035156 177.003906 171.570312 175.097656 170.753906 173.4375 C 169.621094 171.128906 167.8125 169.300781 165.625 168.292969 Z M 240.515625 74.730469 C 241.585938 74.730469 242.519531 73.945312 242.667969 72.855469 C 242.835938 71.664062 242.003906 70.5625 240.8125 70.398438 C 239.910156 70.273438 239.035156 70.050781 238.195312 69.746094 C 234.4375 68.382812 231.421875 65.324219 230.183594 61.433594 L 221.453125 34.027344 L 259.230469 34.027344 L 253.550781 61.65625 C 253.003906 64.335938 251.949219 66.59375 250.628906 68.164062 C 250.773438 68.4375 250.875 68.738281 250.917969 69.0625 L 251.453125 73.175781 C 251.457031 73.199219 251.457031 73.222656 251.460938 73.242188 C 254.472656 71.207031 256.820312 67.398438 257.820312 62.535156 L 265.15625 26.820312 C 265.71875 24.089844 266.828125 21.699219 268.28125 20.085938 L 270.398438 17.734375 C 271.28125 16.75 272.25 16.101562 273.246094 15.800781 C 272.695312 15.164062 272.359375 14.335938 272.359375 13.429688 C 272.359375 12.671875 272.589844 11.96875 272.984375 11.386719 C 270.863281 11.773438 268.835938 12.957031 267.160156 14.820312 L 265.042969 17.171875 C 263.054688 19.382812 261.617188 22.417969 260.890625 25.945312 L 260.125 29.671875 L 220.066406 29.671875 L 218.808594 25.722656 C 217.679688 22.175781 215.390625 19.027344 212.367188 16.859375 L 209.085938 14.507812 C 206.277344 12.496094 202.996094 11.394531 199.5625 11.273438 C 200.007812 11.875 200.273438 12.621094 200.273438 13.429688 C 200.273438 14.257812 199.992188 15.015625 199.527344 15.628906 C 202.058594 15.738281 204.476562 16.5625 206.546875 18.046875 L 209.828125 20.398438 C 212.097656 22.027344 213.8125 24.386719 214.660156 27.042969 L 226.035156 62.757812 C 227.671875 67.894531 231.632812 71.945312 236.578125 73.789062 C 237.742188 74.222656 238.957031 74.539062 240.214844 74.710938 C 240.3125 74.726562 240.414062 74.730469 240.515625 74.730469 Z M 158.863281 91.691406 C 158.710938 91.515625 158.441406 91.5 158.269531 91.652344 C 158.117188 91.785156 143.070312 104.898438 137.003906 104.898438 C 136.773438 104.898438 136.582031 105.089844 136.582031 105.320312 C 136.582031 105.554688 136.773438 105.746094 137.003906 105.746094 C 143.386719 105.746094 158.199219 92.839844 158.824219 92.289062 C 159 92.136719 159.019531 91.867188 158.863281 91.691406 Z M 249.570312 73.878906 C 249.488281 73.660156 249.246094 73.550781 249.027344 73.632812 C 246.902344 74.421875 243.984375 73.628906 243.957031 73.621094 C 243.730469 73.558594 243.5 73.6875 243.433594 73.914062 C 243.371094 74.140625 243.503906 74.371094 243.730469 74.433594 C 243.816406 74.457031 245.171875 74.828125 246.769531 74.828125 C 247.605469 74.828125 248.503906 74.726562 249.320312 74.421875 C 249.539062 74.339844 249.652344 74.097656 249.570312 73.878906 Z M 233.441406 82.640625 C 233.457031 82.640625 233.476562 82.640625 233.496094 82.640625 C 233.78125 82.601562 240.539062 81.722656 242.835938 80.863281 C 243.054688 80.78125 243.167969 80.539062 243.085938 80.320312 C 243.003906 80.101562 242.761719 79.988281 242.542969 80.070312 C 240.332031 80.894531 233.457031 81.792969 233.386719 81.800781 C 233.15625 81.832031 232.992188 82.042969 233.019531 82.273438 C 233.050781 82.488281 233.230469 82.640625 233.441406 82.640625 Z M 233.441406 82.640625 " fill-opacity="1" fill-rule="nonzero"></path><g clip-path="url(#119e99c127)"><path fill="#000000" d="M 148.378906 103.507812 C 150.347656 103.132812 152.25 104.421875 152.628906 106.394531 L 152.925781 107.957031 C 156.597656 104.609375 159.957031 100.34375 162.902344 98.316406 C 167.164062 95.378906 170.191406 91.5 166.34375 88.753906 C 162.496094 86.007812 156.085938 91.023438 151.917969 93.203125 C 147.753906 95.378906 130.332031 100.492188 130.332031 105.984375 C 130.332031 111.476562 138.1875 113.558594 145.007812 112.519531 C 145.457031 112.449219 145.902344 112.339844 146.347656 112.199219 L 145.5 107.757812 C 145.121094 105.789062 146.410156 103.886719 148.378906 103.507812 Z M 137.003906 105.746094 C 136.773438 105.746094 136.582031 105.554688 136.582031 105.320312 C 136.582031 105.089844 136.773438 104.898438 137.003906 104.898438 C 143.070312 104.898438 158.117188 91.785156 158.269531 91.652344 C 158.445312 91.5 158.710938 91.519531 158.863281 91.695312 C 159.019531 91.871094 159 92.136719 158.824219 92.289062 C 158.199219 92.839844 143.386719 105.746094 137.003906 105.746094 Z M 272.355469 13.425781 C 272.355469 12.671875 272.589844 11.96875 272.984375 11.386719 C 273.636719 10.429688 274.738281 9.796875 275.988281 9.796875 L 293.03125 9.796875 C 295.035156 9.796875 296.660156 11.421875 296.660156 13.425781 C 296.660156 15.433594 295.035156 17.058594 293.03125 17.058594 L 275.988281 17.058594 C 274.890625 17.058594 273.910156 16.570312 273.246094 15.800781 C 272.695312 15.164062 272.355469 14.335938 272.355469 13.425781 Z M 233.53125 83.78125 L 239.730469 83.046875 L 241.765625 82.808594 C 242.3125 82.742188 242.828125 82.507812 243.238281 82.140625 L 250.59375 75.503906 C 251.230469 74.933594 251.546875 74.089844 251.457031 73.242188 C 251.457031 73.222656 251.457031 73.199219 251.453125 73.175781 L 250.914062 69.0625 C 250.875 68.738281 250.769531 68.4375 250.625 68.164062 C 250.109375 67.1875 249.023438 66.59375 247.867188 66.769531 L 240.335938 67.914062 C 239.296875 68.074219 238.492188 68.808594 238.195312 69.746094 C 239.035156 70.050781 239.910156 70.273438 240.8125 70.398438 C 242.003906 70.5625 242.835938 71.664062 242.667969 72.855469 C 242.515625 73.945312 241.582031 74.730469 240.515625 74.730469 C 240.414062 74.730469 240.3125 74.726562 240.210938 74.710938 C 238.957031 74.535156 237.738281 74.222656 236.578125 73.789062 C 236.492188 73.828125 236.414062 73.871094 236.324219 73.902344 L 231.355469 75.601562 C 229.96875 76.078125 229.222656 77.582031 229.683594 78.972656 L 230.683594 81.972656 C 230.96875 82.824219 231.652344 83.445312 232.472656 83.683594 C 232.808594 83.78125 233.167969 83.824219 233.53125 83.78125 Z M 249.320312 74.421875 C 248.503906 74.726562 247.605469 74.828125 246.769531 74.828125 C 245.171875 74.828125 243.816406 74.457031 243.730469 74.433594 C 243.503906 74.371094 243.371094 74.136719 243.433594 73.914062 C 243.5 73.6875 243.730469 73.558594 243.957031 73.621094 C 243.984375 73.628906 246.90625 74.421875 249.027344 73.628906 C 249.242188 73.546875 249.488281 73.660156 249.570312 73.878906 C 249.652344 74.097656 249.539062 74.339844 249.320312 74.421875 Z M 233.386719 81.800781 C 233.457031 81.792969 240.335938 80.894531 242.542969 80.070312 C 242.761719 79.988281 243.003906 80.101562 243.085938 80.320312 C 243.167969 80.539062 243.058594 80.78125 242.839844 80.863281 C 240.539062 81.722656 233.78125 82.601562 233.496094 82.640625 C 233.476562 82.640625 233.457031 82.640625 233.441406 82.640625 C 233.230469 82.640625 233.050781 82.488281 233.023438 82.273438 C 232.992188 82.042969 233.15625 81.832031 233.386719 81.800781 Z M 307.84375 185.558594 C 307.84375 201.355469 303.476562 216.410156 295.539062 227.953125 C 286.476562 241.128906 273.320312 248.683594 259.449219 248.683594 C 245.574219 248.683594 232.417969 241.128906 223.359375 227.953125 C 215.417969 216.410156 211.050781 201.355469 211.050781 185.558594 C 211.050781 169.769531 215.417969 154.714844 223.359375 143.171875 C 225.929688 139.429688 228.832031 136.144531 231.984375 133.359375 C 232.039062 135.242188 232.289062 136.992188 232.628906 138.410156 L 235.714844 153.4375 C 230.320312 161.855469 227.019531 173.148438 227.019531 185.5625 C 227.019531 211.605469 241.539062 232.714844 259.449219 232.714844 C 277.359375 232.714844 291.878906 211.605469 291.878906 185.5625 C 291.878906 159.519531 277.359375 138.410156 259.449219 138.410156 C 252.867188 138.410156 246.746094 141.265625 241.632812 146.164062 L 239.726562 136.894531 C 239.71875 136.863281 239.707031 136.820312 239.703125 136.785156 C 239.683594 136.707031 238.433594 131.214844 240.132812 127.5625 C 242.25 126.386719 244.429688 125.402344 246.671875 124.625 C 249.0625 123.792969 251.511719 123.191406 254 122.828125 C 255.800781 122.570312 257.613281 122.441406 259.449219 122.441406 C 273.320312 122.441406 286.476562 129.996094 295.539062 143.171875 C 303.476562 154.714844 307.84375 169.769531 307.84375 185.558594 Z M 155.886719 188.652344 C 155.355469 203.3125 151.050781 217.167969 143.632812 227.953125 C 134.574219 241.128906 121.417969 248.683594 107.542969 248.683594 C 93.671875 248.683594 80.515625 241.128906 71.457031 227.953125 C 63.515625 216.410156 59.144531 201.355469 59.144531 185.5625 C 59.144531 169.769531 63.515625 154.714844 71.457031 143.171875 C 80.515625 129.996094 93.671875 122.441406 107.542969 122.441406 C 120.347656 122.441406 132.539062 128.878906 141.464844 140.230469 L 130.878906 152.820312 C 124.980469 143.9375 116.707031 138.410156 107.542969 138.410156 C 89.632812 138.410156 75.113281 159.519531 75.113281 185.5625 C 75.113281 211.601562 89.632812 232.714844 107.542969 232.714844 C 125.453125 232.714844 139.976562 211.601562 139.976562 185.5625 C 139.976562 185.503906 139.972656 185.445312 139.972656 185.386719 L 151.828125 182.574219 C 152.539062 185.078125 153.988281 187.210938 155.886719 188.652344 Z M 154.59375 170.574219 C 153.421875 171.8125 152.507812 173.351562 151.949219 175.082031 L 139.558594 178.027344 C 138.820312 171.316406 137.105469 165.082031 134.632812 159.636719 L 145.71875 146.445312 C 149.976562 153.5625 152.992188 161.785156 154.59375 170.574219 Z M 200.273438 13.425781 C 200.273438 14.253906 199.992188 15.015625 199.523438 15.628906 C 198.863281 16.496094 197.820312 17.058594 196.644531 17.058594 L 170.226562 17.058594 C 168.222656 17.058594 166.597656 15.433594 166.597656 13.425781 C 166.597656 11.421875 168.222656 9.796875 170.226562 9.796875 L 196.644531 9.796875 C 197.839844 9.796875 198.898438 10.378906 199.558594 11.273438 C 200.007812 11.875 200.273438 12.621094 200.273438 13.425781 Z M 170.910156 184.300781 L 184.171875 194.5625 L 184.832031 194.5625 C 186.734375 194.5625 188.277344 196.101562 188.277344 198.003906 C 188.277344 199.90625 186.734375 201.449219 184.832031 201.449219 L 164.820312 201.449219 C 162.917969 201.449219 161.375 199.90625 161.375 198.003906 C 161.375 196.101562 162.917969 194.5625 164.820312 194.5625 L 176.042969 194.5625 L 167.9375 188.289062 L 159.878906 182.054688 C 158.792969 181.214844 158.59375 179.652344 159.433594 178.566406 C 160.273438 177.476562 161.835938 177.277344 162.921875 178.121094 Z M 243.039062 115.542969 L 237.648438 85.246094 C 237.609375 85.015625 237.761719 84.796875 237.992188 84.753906 C 238.21875 84.714844 238.441406 84.867188 238.480469 85.097656 L 243.871094 115.394531 C 243.910156 115.625 243.757812 115.84375 243.527344 115.886719 C 243.503906 115.890625 243.480469 115.890625 243.453125 115.890625 C 243.253906 115.890625 243.074219 115.75 243.039062 115.542969 Z M 238.179688 121.007812 C 238.324219 120.828125 238.589844 120.800781 238.773438 120.949219 C 238.953125 121.09375 238.980469 121.359375 238.835938 121.542969 C 238.785156 121.601562 234.027344 127.558594 234.636719 134.367188 C 235.234375 141.082031 243.796875 180.703125 244.492188 183.914062 L 255.414062 189.066406 C 255.625 189.164062 255.714844 189.417969 255.617188 189.628906 C 255.542969 189.78125 255.390625 189.871094 255.234375 189.871094 C 255.171875 189.871094 255.113281 189.859375 255.054688 189.832031 L 243.945312 184.589844 C 243.824219 184.535156 243.738281 184.425781 243.710938 184.300781 C 243.332031 182.554688 234.417969 141.457031 233.792969 134.445312 C 233.152344 127.285156 237.972656 121.261719 238.179688 121.007812 Z M 234.007812 94.84375 C 234.097656 95.058594 233.996094 95.308594 233.78125 95.398438 L 159.25 126.652344 C 159.199219 126.675781 159.144531 126.6875 159.089844 126.6875 C 158.921875 126.6875 158.765625 126.589844 158.699219 126.425781 C 158.609375 126.210938 158.710938 125.964844 158.925781 125.875 L 233.453125 94.617188 C 233.667969 94.527344 233.914062 94.628906 234.007812 94.84375 Z M 236.230469 106.15625 C 236.386719 106.328125 236.375 106.597656 236.203125 106.753906 L 169.925781 167.730469 C 169.84375 167.804688 169.742188 167.84375 169.640625 167.84375 C 169.527344 167.84375 169.414062 167.796875 169.328125 167.703125 C 169.171875 167.535156 169.183594 167.265625 169.355469 167.109375 L 235.632812 106.132812 C 235.804688 105.972656 236.070312 105.984375 236.230469 106.15625 Z M 162.859375 163.550781 C 162.902344 163.78125 162.753906 164 162.523438 164.046875 C 162.496094 164.050781 162.46875 164.054688 162.445312 164.054688 C 162.246094 164.054688 162.066406 163.914062 162.027344 163.710938 L 152.9375 116.695312 C 152.894531 116.464844 153.046875 116.242188 153.273438 116.199219 C 153.503906 116.15625 153.726562 116.304688 153.769531 116.535156 Z M 149.488281 133.511719 C 149.671875 133.660156 149.695312 133.925781 149.546875 134.105469 L 108.988281 183.214844 C 108.90625 183.316406 108.785156 183.371094 108.664062 183.371094 C 108.570312 183.371094 108.472656 183.335938 108.394531 183.273438 C 108.214844 183.125 108.191406 182.855469 108.339844 182.675781 L 148.894531 133.570312 C 149.042969 133.386719 149.3125 133.363281 149.488281 133.511719 Z M 112.09375 185.945312 L 149.117188 176.601562 C 149.34375 176.546875 149.574219 176.683594 149.628906 176.910156 C 149.6875 177.136719 149.550781 177.367188 149.324219 177.421875 L 112.300781 186.765625 C 112.269531 186.773438 112.234375 186.777344 112.199219 186.777344 C 112.007812 186.777344 111.835938 186.648438 111.789062 186.457031 C 111.730469 186.230469 111.867188 186.003906 112.09375 185.945312 Z M 112.09375 185.945312 " fill-opacity="1" fill-rule="nonzero"></path></g></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BMX.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const BMX = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$a = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "490",
    zoomAndPan: "magnify",
    viewBox: "0 0 367.5 258.749997",
    height: "345",
    preserveAspectRatio: "xMidYMid meet",
    version: "1.0"
  }, _attrs))}><defs><clipPath id="bce1867784"><path d="M 140 40.898438 L 226 40.898438 L 226 240 L 140 240 Z M 140 40.898438 " clip-rule="nonzero"></path></clipPath><clipPath id="c093163d1d"><path d="M 136 33 L 222 33 L 222 232.636719 L 136 232.636719 Z M 136 33 " clip-rule="nonzero"></path></clipPath><clipPath id="1398fcbbbf"><path d="M 137 37.351562 L 223 37.351562 L 223 237 L 137 237 Z M 137 37.351562 " clip-rule="nonzero"></path></clipPath></defs><path fill="#ff8995" d="M 254.164062 69.164062 C 258.402344 69.164062 261.230469 70.578125 264.058594 73.40625 L 320.589844 129.9375 C 326.242188 135.589844 326.242188 144.070312 320.589844 149.722656 L 264.058594 206.257812 C 258.402344 211.910156 249.925781 211.910156 244.269531 206.257812 C 238.617188 200.605469 238.617188 192.125 244.269531 186.472656 L 290.910156 139.832031 L 244.269531 93.191406 C 238.617188 87.539062 238.617188 79.058594 244.269531 73.40625 C 247.097656 70.578125 249.925781 69.164062 254.164062 69.164062 Z M 254.164062 69.164062 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#ff8995" d="M 112.832031 69.164062 C 117.070312 69.164062 119.898438 70.578125 122.726562 73.40625 C 128.378906 79.058594 128.378906 87.539062 122.726562 93.191406 L 76.085938 139.832031 L 122.726562 186.472656 C 128.378906 192.125 128.378906 200.605469 122.726562 206.257812 C 117.070312 211.910156 108.59375 211.910156 102.9375 206.257812 L 46.40625 149.722656 C 40.753906 144.070312 40.753906 135.589844 46.40625 129.9375 L 102.9375 73.40625 C 105.765625 70.578125 108.59375 69.164062 112.832031 69.164062 Z M 112.832031 69.164062 " fill-opacity="1" fill-rule="nonzero"></path><g clip-path="url(#bce1867784)"><path fill="#ff8995" d="M 211.765625 40.898438 C 213.175781 40.898438 214.589844 40.898438 216.003906 42.3125 C 223.070312 45.136719 227.3125 52.207031 224.484375 60.683594 L 167.953125 230.285156 C 165.125 237.351562 158.058594 241.589844 149.578125 238.765625 C 142.511719 235.9375 138.273438 228.871094 141.097656 220.390625 L 197.632812 50.792969 C 200.457031 45.136719 206.109375 40.898438 211.765625 40.898438 Z M 211.765625 40.898438 " fill-opacity="1" fill-rule="nonzero"></path></g><path fill="#c97ccd" d="M 107.328125 204.335938 C 103.089844 204.335938 100.261719 202.921875 97.4375 200.097656 L 40.902344 143.5625 C 35.25 137.910156 35.25 129.429688 40.902344 123.777344 L 97.4375 67.242188 C 103.089844 61.589844 111.570312 61.589844 117.222656 67.242188 C 122.875 72.898438 122.875 81.378906 117.222656 87.03125 L 70.582031 133.671875 L 117.222656 180.308594 C 122.875 185.964844 122.875 194.441406 117.222656 200.097656 C 114.394531 202.921875 111.570312 204.335938 107.328125 204.335938 Z M 107.328125 204.335938 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#c97ccd" d="M 248.660156 204.335938 C 244.421875 204.335938 241.59375 202.921875 238.769531 200.097656 C 233.117188 194.441406 233.117188 185.964844 238.769531 180.308594 L 285.410156 133.671875 L 238.769531 87.03125 C 233.117188 81.378906 233.117188 72.898438 238.769531 67.242188 C 244.421875 61.589844 252.902344 61.589844 258.554688 67.242188 L 315.089844 123.777344 C 320.742188 129.429688 320.742188 137.910156 315.089844 143.5625 L 258.554688 200.097656 C 255.730469 202.921875 252.902344 204.335938 248.660156 204.335938 Z M 248.660156 204.335938 " fill-opacity="1" fill-rule="nonzero"></path><g clip-path="url(#c093163d1d)"><path fill="#c97ccd" d="M 149.730469 232.601562 C 148.316406 232.601562 146.902344 232.601562 145.488281 231.1875 C 138.421875 228.363281 134.183594 221.296875 137.007812 212.816406 L 193.542969 43.21875 C 196.367188 36.152344 203.4375 31.910156 211.914062 34.738281 C 218.980469 37.5625 223.222656 44.628906 220.394531 53.109375 L 163.863281 222.710938 C 161.035156 228.363281 155.382812 232.601562 149.730469 232.601562 Z M 149.730469 232.601562 " fill-opacity="1" fill-rule="nonzero"></path></g><path fill="#c97ccd" d="M 251.382812 65.617188 C 255.621094 65.617188 258.449219 67.03125 261.273438 69.855469 L 317.808594 126.390625 C 323.460938 132.042969 323.460938 140.523438 317.808594 146.175781 L 261.273438 202.710938 C 255.621094 208.363281 247.140625 208.363281 241.488281 202.710938 C 235.835938 197.054688 235.835938 188.578125 241.488281 182.921875 L 288.128906 136.285156 L 241.488281 89.644531 C 235.835938 83.992188 235.835938 75.511719 241.488281 69.855469 C 244.316406 67.03125 247.140625 65.617188 251.382812 65.617188 Z M 251.382812 65.617188 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#c97ccd" d="M 110.050781 65.617188 C 114.289062 65.617188 117.117188 67.03125 119.941406 69.855469 C 125.597656 75.511719 125.597656 83.992188 119.941406 89.644531 L 73.304688 136.285156 L 119.941406 182.921875 C 125.597656 188.578125 125.597656 197.054688 119.941406 202.710938 C 114.289062 208.363281 105.808594 208.363281 100.15625 202.710938 L 43.625 146.175781 C 37.96875 140.523438 37.96875 132.042969 43.625 126.390625 L 100.15625 69.855469 C 102.984375 67.03125 105.808594 65.617188 110.050781 65.617188 Z M 110.050781 65.617188 " fill-opacity="1" fill-rule="nonzero"></path><g clip-path="url(#1398fcbbbf)"><path fill="#c97ccd" d="M 208.980469 37.351562 C 210.394531 37.351562 211.808594 37.351562 213.222656 38.765625 C 220.289062 41.589844 224.527344 48.65625 221.703125 57.136719 L 165.167969 226.734375 C 162.34375 233.800781 155.277344 238.042969 146.796875 235.214844 C 139.730469 232.390625 135.488281 225.324219 138.316406 216.84375 L 194.847656 47.242188 C 197.675781 41.589844 203.328125 37.351562 208.980469 37.351562 Z M 208.980469 37.351562 " fill-opacity="1" fill-rule="nonzero"></path></g></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Code.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Code = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Flower2.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Flower2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "500",
    zoomAndPan: "magnify",
    viewBox: "0 0 375 374.999991",
    height: "500",
    preserveAspectRatio: "xMidYMid meet",
    version: "1.0"
  }, _attrs))}><defs><clipPath id="6df950aca0"><path d="M 6 31 L 225 31 L 225 222 L 6 222 Z M 6 31 " clip-rule="nonzero"></path></clipPath><clipPath id="850475454f"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="605b99a5ec"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="d46fce40c6"><path d="M 2 25 L 230 25 L 230 226 L 2 226 Z M 2 25 " clip-rule="nonzero"></path></clipPath><clipPath id="34d0022149"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="4590a641b5"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="7b3f74a003"><path d="M 193 212 L 368 212 L 368 347 L 193 347 Z M 193 212 " clip-rule="nonzero"></path></clipPath><clipPath id="609c7b50e2"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="187e48a966"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="ee7b56a8c5"><path d="M 189 207 L 373 207 L 373 352 L 189 352 Z M 189 207 " clip-rule="nonzero"></path></clipPath><clipPath id="653946475b"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="9c546092ae"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="1e1f1b51f6"><path d="M 92 108 L 126 108 L 126 144 L 92 144 Z M 92 108 " clip-rule="nonzero"></path></clipPath><clipPath id="e8a1225d17"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="56e73cbd54"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="8057cb44e4"><path d="M 88 103 L 131 103 L 131 149 L 88 149 Z M 88 103 " clip-rule="nonzero"></path></clipPath><clipPath id="43b1492224"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="c9850c3522"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="9f674eee21"><path d="M 262 266 L 289 266 L 289 293 L 262 293 Z M 262 266 " clip-rule="nonzero"></path></clipPath><clipPath id="6953d75909"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="816ebb61d0"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="ef8fcfa9c4"><path d="M 258 261 L 294 261 L 294 297 L 258 297 Z M 258 261 " clip-rule="nonzero"></path></clipPath><clipPath id="41b5bfcbc0"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath><clipPath id="f54fa9243d"><path d="M 28.964844 -2.601562 L 414.8125 75.898438 L 353.957031 375.019531 L -31.890625 296.519531 Z M 28.964844 -2.601562 " clip-rule="nonzero"></path></clipPath></defs><g clip-path="url(#6df950aca0)"><g clip-path="url(#850475454f)"><g clip-path="url(#605b99a5ec)"><path fill="#ff8995" d="M 107.8125 131.417969 C 106.730469 132.554688 102.53125 129.425781 101.597656 128.828125 C 95.117188 124.695312 88.628906 120.15625 82.710938 115.261719 C 77.660156 111.089844 71.222656 107.699219 66.710938 102.910156 C 53.089844 88.445312 37.683594 45.867188 62.835938 35.605469 C 83.964844 26.988281 97.121094 65.433594 101.460938 78.605469 C 103.175781 83.796875 104.347656 88.585938 104.90625 94.050781 C 105.695312 101.734375 106.785156 109.480469 107.726562 117.214844 C 108.019531 119.632812 109.167969 122.265625 109.027344 124.695312 C 108.949219 125.988281 108.695312 129.574219 109.496094 128.554688 C 110.140625 127.730469 109.472656 122.09375 109.460938 121.019531 C 109.394531 114.683594 110.152344 108.179688 110.851562 101.847656 C 111.480469 96.144531 112.835938 90.539062 113.980469 84.917969 C 117.636719 66.957031 134.644531 21.328125 162.207031 32.921875 C 172.789062 37.371094 171.070312 50.507812 168.753906 59.351562 C 163.363281 79.929688 143.820312 96.207031 130.777344 111.863281 C 127.222656 116.128906 123.472656 120.074219 120.0625 124.429688 C 118.394531 126.558594 116.363281 128.480469 114.734375 130.5625 C 114.332031 131.078125 113.222656 131.824219 113.222656 131.824219 C 113.222656 131.824219 113.980469 130.65625 114.496094 130.199219 C 116.910156 128.050781 119.074219 125.03125 122.113281 123.59375 C 129.148438 120.257812 136.46875 116.300781 143.734375 112.929688 C 148.785156 110.589844 153.882812 109.058594 159.25 107.617188 C 178.140625 102.53125 223.503906 95.613281 224.847656 125.984375 C 225.269531 135.488281 217.140625 140.53125 210.011719 144.925781 C 188.710938 158.058594 162.195312 149.226562 140.136719 142.945312 C 133.152344 140.957031 124.957031 140.074219 118.453125 136.964844 C 115.75 135.675781 112.328125 135.699219 109.535156 134.523438 C 109.238281 134.398438 108.695312 134.039062 108.695312 134.039062 L 110.199219 134.34375 C 112.660156 134.847656 115.472656 136.628906 117.667969 137.746094 C 122.199219 140.058594 127.140625 142.789062 131.023438 146.109375 C 145.957031 158.890625 181.042969 175.160156 172.085938 200.269531 C 164.675781 221.039062 140.609375 218.3125 127.75 205.371094 C 115.992188 193.53125 102.410156 152.597656 106.039062 134.753906 C 106.222656 133.847656 105.519531 136.542969 105.488281 137.464844 C 105.410156 139.597656 105.382812 141.898438 105.40625 144.035156 C 105.476562 150.839844 105.425781 157.496094 104.734375 164.292969 C 102.941406 181.976562 97.785156 204.347656 81.898438 214.863281 C 76.332031 218.546875 68.585938 223.644531 61.679688 220.164062 C 54.792969 216.691406 53.84375 206.585938 54.8125 199.941406 C 57.84375 179.21875 72.085938 167.601562 85.71875 152.894531 C 89.972656 148.308594 94.734375 144.476562 99.027344 139.914062 C 99.523438 139.390625 103.378906 134.210938 104.832031 134.507812 C 106.261719 134.800781 102.664062 136.46875 101.449219 137.269531 C 99.460938 138.585938 97.34375 139.726562 95.347656 141.050781 C 89.648438 144.820312 83.746094 147.203125 77.53125 149.972656 C 61.804688 156.988281 38.726562 160.9375 22.589844 153.226562 C 16.152344 150.152344 8.761719 145.472656 7.207031 137.863281 C 3.839844 121.371094 16.195312 113.617188 29.671875 109.175781 C 51.152344 102.09375 86.558594 127.09375 107.8125 131.417969 Z M 107.8125 131.417969 " fill-opacity="1" fill-rule="evenodd"></path></g></g></g><g clip-path="url(#d46fce40c6)"><g clip-path="url(#34d0022149)"><g clip-path="url(#4590a641b5)"><path fill="#ff8995" d="M 108.710938 85.203125 L 108.683594 85.074219 C 108.074219 82.386719 107.3125 79.734375 106.402344 76.976562 C 103.277344 67.449219 95.585938 45.597656 84.0625 35.433594 C 77.425781 29.578125 69.640625 27.144531 60.84375 30.722656 C 48.109375 35.902344 43.503906 47.679688 44.15625 61.195312 C 44.96875 78.027344 54.234375 97.457031 62.8125 106.582031 C 64.367188 108.238281 66.117188 109.753906 67.972656 111.183594 C 68.257812 111.40625 68.546875 111.625 68.839844 111.839844 C 64.222656 109.933594 59.613281 108.195312 55.128906 106.859375 C 45.332031 103.941406 36.078125 102.925781 28.4375 105.433594 C 19.320312 108.425781 10.785156 112.976562 6.25 120.066406 C 3.132812 124.9375 1.746094 130.996094 3.300781 138.660156 C 4.070312 142.457031 5.976562 145.6875 8.539062 148.421875 C 11.957031 152.066406 16.585938 154.796875 20.863281 156.847656 C 27.917969 160.226562 36.199219 161.59375 44.695312 161.464844 C 56.8125 161.28125 69.367188 158.058594 79.1875 153.691406 L 79.339844 153.625 C 72.078125 161.222656 64.925781 168.25 59.546875 176.433594 C 55.195312 183.058594 51.972656 190.417969 50.660156 199.335938 C 49.984375 203.917969 50.148438 209.921875 52.039062 214.878906 C 53.527344 218.78125 56.042969 222.046875 59.777344 223.9375 C 63.519531 225.828125 67.4375 225.925781 71.28125 224.953125 C 75.976562 223.761719 80.558594 220.839844 84.242188 218.40625 C 91.289062 213.753906 96.460938 207.015625 100.207031 199.316406 C 103.824219 191.878906 106.097656 183.539062 107.535156 175.472656 C 112.15625 189.507812 118.667969 202.492188 124.613281 208.488281 C 131.902344 215.84375 142.402344 220.238281 152.109375 219.914062 C 162.367188 219.574219 171.851562 214.230469 176.308594 201.777344 C 179.609375 192.554688 177.9375 184.328125 173.457031 176.925781 C 166.445312 165.335938 151.769531 155.941406 140.839844 147.964844 C 153.867188 151.714844 168.296875 156.03125 182.28125 156.382812 C 192.816406 156.648438 203.101562 154.703125 212.484375 148.933594 C 217.265625 145.992188 222.375 142.695312 225.65625 138.308594 C 228.234375 134.859375 229.796875 130.785156 229.578125 125.773438 C 228.929688 110.710938 219.425781 103.121094 206.683594 100.027344 C 190.851562 96.183594 169.636719 99.839844 157.996094 102.960938 C 154.652344 103.855469 151.40625 104.789062 148.210938 105.914062 C 146.023438 106.683594 143.855469 107.542969 141.699219 108.542969 L 139.03125 109.855469 C 146.015625 102.085938 154.015625 94.066406 160.628906 85.378906 C 166.460938 77.714844 171.226562 69.527344 173.570312 60.613281 C 175.167969 54.542969 176.351562 46.699219 174.574219 40.292969 C 173.148438 35.132812 170 30.769531 164.152344 28.300781 C 150.625 22.59375 139.09375 28.007812 130.03125 38.332031 C 118.539062 51.421875 111.269531 72.722656 108.984375 83.898438 Z M 101.078125 143.664062 L 101.074219 144.082031 C 101.117188 148.097656 101.121094 152.0625 100.972656 156.035156 C 100.875 158.632812 100.710938 161.234375 100.445312 163.859375 C 99.433594 173.953125 97.320312 185.65625 92.515625 195.585938 C 89.460938 201.902344 85.316406 207.5 79.550781 211.324219 C 76.589844 213.289062 72.96875 215.777344 69.191406 216.746094 C 67.320312 217.226562 65.402344 217.308594 63.582031 216.390625 C 61.222656 215.207031 60.042969 212.765625 59.371094 210.167969 C 58.542969 206.941406 58.558594 203.378906 58.96875 200.550781 C 60.074219 192.941406 62.832031 186.667969 66.53125 181.011719 C 72.464844 171.929688 80.734375 164.378906 88.753906 155.707031 Z M 109.800781 139.882812 L 109.789062 140.238281 L 109.765625 142.082031 C 109.824219 150.125 112.011719 160.515625 115.164062 170.546875 C 119.351562 183.871094 125.273438 196.605469 130.890625 202.25 C 136.453125 207.835938 144.414062 211.273438 151.800781 211.007812 C 158.652344 210.765625 164.902344 207.085938 167.859375 198.765625 C 170.929688 190.125 167.503906 182.816406 161.851562 176.375 C 152.320312 165.515625 136.726562 156.984375 128.054688 149.578125 C 126.652344 148.382812 125.089844 147.273438 123.464844 146.234375 C 120.898438 144.597656 118.171875 143.144531 115.582031 141.828125 C 114.527344 141.292969 113.324219 140.59375 112.089844 139.972656 C 111.421875 139.851562 110.757812 139.722656 110.117188 139.550781 L 109.824219 139.46875 Z M 96.621094 132.050781 C 83.453125 127.140625 67.5 118.679688 52.898438 114.363281 C 44.816406 111.972656 37.203125 110.835938 30.90625 112.917969 C 24.804688 114.9375 18.910156 117.617188 14.976562 121.75 C 11.457031 125.449219 9.738281 130.386719 11.113281 137.066406 C 11.714844 140 13.515625 142.320312 15.714844 144.25 C 18.285156 146.503906 21.417969 148.226562 24.320312 149.609375 C 31.789062 153.167969 40.878906 153.941406 49.902344 153.09375 C 59.175781 152.21875 68.394531 149.597656 75.871094 146.253906 C 79.546875 144.609375 83.117188 143.105469 86.59375 141.359375 C 88.792969 140.253906 90.957031 139.046875 93.085938 137.632812 L 98.367188 134.355469 C 98.589844 134.109375 98.816406 133.859375 99.046875 133.617188 L 98.6875 133.386719 C 98 132.945312 97.308594 132.5 96.621094 132.050781 Z M 119.566406 132.433594 L 122.132812 129.488281 C 122.769531 128.902344 123.429688 128.355469 124.199219 127.988281 L 145.769531 117.320312 C 148.125 116.226562 150.492188 115.320312 152.894531 114.519531 C 155.382812 113.691406 157.910156 112.972656 160.5 112.273438 C 171.007812 109.429688 190.140625 105.863281 204.445312 109.300781 C 212.96875 111.351562 219.660156 116.121094 220.117188 126.191406 C 220.269531 129.523438 218.832031 132.039062 216.816406 134.140625 C 214.222656 136.84375 210.753906 138.933594 207.542969 140.917969 C 199.78125 145.714844 191.234375 147.230469 182.503906 147.03125 C 168.59375 146.714844 154.230469 142.132812 141.40625 138.496094 C 136.546875 137.117188 131.105469 136.273438 126.054688 134.847656 C 124.09375 134.292969 122.195312 133.648438 120.4375 132.8125 C 120.152344 132.675781 119.863281 132.550781 119.566406 132.433594 Z M 103.765625 123.800781 C 100.847656 121.929688 97.933594 119.976562 95.078125 117.941406 C 92.007812 115.753906 89.003906 113.476562 86.136719 111.113281 C 82.570312 108.171875 78.324219 105.609375 74.523438 102.6875 C 73.125 101.609375 71.789062 100.480469 70.613281 99.234375 C 63.308594 91.496094 55.480469 74.96875 54.761719 60.671875 C 54.316406 51.898438 56.570312 43.871094 64.828125 40.492188 C 71.285156 37.847656 76.480469 41.816406 80.875 47.316406 C 88.878906 57.320312 94.09375 72.90625 96.519531 80.234375 C 97.324219 82.671875 98.007812 85.011719 98.550781 87.386719 C 99.085938 89.710938 99.488281 92.070312 99.746094 94.578125 L 102.601562 117.835938 Z M 114.832031 123.007812 L 114.730469 123.105469 C 114.664062 122.125 114.605469 121.320312 114.601562 120.964844 C 114.574219 118.558594 114.671875 116.128906 114.839844 113.691406 C 115.101562 109.917969 115.53125 106.132812 115.9375 102.410156 C 116.175781 100.253906 116.519531 98.117188 116.921875 95.984375 C 117.546875 92.625 118.300781 89.28125 118.980469 85.933594 C 121.007812 75.910156 127.347656 56.742188 137.625 44.984375 C 143.683594 38.054688 151.195312 33.738281 160.265625 37.542969 C 163.699219 38.980469 164.980469 41.941406 165.367188 45.15625 C 165.882812 49.464844 164.941406 54.238281 163.9375 58.089844 C 161.933594 65.769531 157.753906 72.777344 152.742188 79.390625 C 144.773438 89.90625 134.734375 99.421875 127.003906 108.722656 L 116.210938 121.414062 Z M 114.832031 123.007812 " fill-opacity="1" fill-rule="evenodd"></path></g></g></g><g clip-path="url(#7b3f74a003)"><g clip-path="url(#609c7b50e2)"><g clip-path="url(#187e48a966)"><path fill="#ff8995" d="M 274.332031 283.378906 C 273.492188 284.171875 270.09375 281.863281 269.339844 281.421875 C 264.109375 278.355469 258.867188 274.996094 254.070312 271.394531 C 249.980469 268.324219 244.796875 265.789062 241.125 262.285156 C 230.03125 251.703125 217.039062 220.988281 236.882812 214.082031 C 253.554688 208.28125 264.6875 236.003906 268.371094 245.496094 C 269.824219 249.242188 270.839844 252.6875 271.378906 256.605469 C 272.136719 262.113281 273.136719 267.671875 274.019531 273.21875 C 274.292969 274.953125 275.253906 276.855469 275.183594 278.59375 C 275.144531 279.515625 275.003906 282.078125 275.625 281.359375 C 276.125 280.78125 275.492188 276.738281 275.464844 275.96875 C 275.304688 271.4375 275.796875 266.796875 276.242188 262.285156 C 276.648438 258.214844 277.632812 254.230469 278.445312 250.226562 C 281.046875 237.445312 293.800781 205.101562 315.945312 213.867188 C 324.441406 217.230469 323.300781 226.59375 321.609375 232.882812 C 317.671875 247.507812 302.394531 258.8125 292.277344 269.789062 C 289.519531 272.777344 286.605469 275.535156 283.964844 278.589844 C 282.671875 280.085938 281.089844 281.425781 279.828125 282.886719 C 279.515625 283.25 278.648438 283.761719 278.648438 283.761719 C 278.648438 283.761719 279.230469 282.941406 279.632812 282.621094 C 281.519531 281.128906 283.1875 279.007812 285.582031 278.027344 C 291.125 275.761719 296.886719 273.058594 302.613281 270.773438 C 306.589844 269.1875 310.625 268.179688 314.871094 267.238281 C 329.824219 263.925781 365.816406 259.757812 367.40625 281.5 C 367.90625 288.304688 361.523438 291.773438 355.921875 294.792969 C 339.191406 303.820312 317.929688 297.050781 300.265625 292.179688 C 294.667969 290.636719 288.128906 289.863281 282.898438 287.53125 C 280.722656 286.558594 278 286.519531 275.757812 285.628906 C 275.519531 285.535156 275.078125 285.269531 275.078125 285.269531 L 276.285156 285.515625 C 278.25 285.914062 280.519531 287.238281 282.285156 288.074219 C 285.933594 289.808594 289.914062 291.84375 293.0625 294.285156 C 305.171875 303.683594 333.378906 315.921875 326.679688 333.726562 C 321.136719 348.453125 301.929688 346.089844 291.472656 336.613281 C 281.910156 327.945312 270.394531 298.433594 272.976562 285.734375 C 273.109375 285.089844 272.59375 287.007812 272.585938 287.664062 C 272.5625 289.1875 272.578125 290.832031 272.632812 292.363281 C 272.804688 297.230469 272.878906 301.992188 272.445312 306.839844 C 271.324219 319.457031 267.601562 335.371094 255.132812 342.617188 C 250.769531 345.15625 244.691406 348.671875 239.132812 346.0625 C 233.589844 343.460938 232.660156 336.21875 233.316406 331.480469 C 235.375 316.710938 246.515625 308.648438 257.113281 298.363281 C 260.417969 295.152344 264.148438 292.496094 267.484375 289.308594 C 267.871094 288.9375 270.851562 285.300781 272.015625 285.539062 C 273.15625 285.769531 270.320312 286.902344 269.367188 287.457031 C 267.808594 288.363281 266.140625 289.144531 264.574219 290.054688 C 260.105469 292.652344 255.445312 294.253906 250.542969 296.132812 C 238.148438 300.878906 219.839844 303.308594 206.863281 297.515625 C 201.6875 295.207031 195.722656 291.730469 194.355469 286.261719 C 191.390625 274.410156 201.09375 269.078125 211.746094 266.132812 C 228.726562 261.433594 257.339844 279.921875 274.332031 283.378906 Z M 274.332031 283.378906 " fill-opacity="1" fill-rule="evenodd"></path></g></g></g><g clip-path="url(#ee7b56a8c5)"><g clip-path="url(#653946475b)"><g clip-path="url(#9c546092ae)"><path fill="#ff8995" d="M 274.160156 246.183594 C 273.871094 245.335938 273.558594 244.484375 273.222656 243.617188 C 270.46875 236.484375 263.625 220.015625 253.8125 212.550781 C 248.367188 208.410156 242.101562 206.695312 235.148438 209.101562 C 224.175781 212.902344 220.5 222.058594 221.402344 232.652344 C 222.398438 244.402344 229.546875 257.949219 236.386719 265.113281 C 235 264.644531 233.617188 264.210938 232.25 263.816406 C 224.300781 261.523438 216.8125 260.644531 210.691406 262.328125 C 203.449219 264.320312 196.703125 267.488281 193.035156 272.40625 C 190.203125 276.203125 188.9375 281.011719 190.484375 287.230469 C 191.230469 290.230469 192.960938 292.8125 195.28125 294.992188 C 198.089844 297.621094 201.800781 299.648438 205.226562 301.183594 C 212.226562 304.316406 220.644531 305.308594 229.007812 304.824219 C 235.601562 304.445312 242.152344 303.152344 247.882812 301.363281 C 243.582031 305.386719 239.503906 309.335938 236.269531 313.78125 C 232.695312 318.691406 230.097656 324.179688 229.152344 330.902344 C 228.648438 334.488281 228.9375 339.230469 230.757812 343.121094 C 232.097656 345.996094 234.234375 348.429688 237.335938 349.890625 C 240.382812 351.324219 243.542969 351.492188 246.628906 350.886719 C 250.503906 350.125 254.261719 348.039062 257.269531 346.296875 C 262.925781 343.019531 267.042969 338.210938 269.996094 332.667969 C 272.40625 328.148438 274.027344 323.132812 275.109375 318.140625 C 278.980469 327.433594 283.992188 335.792969 288.503906 339.890625 C 295.667969 346.40625 306.414062 349.925781 315.324219 348.296875 C 322.125 347.058594 327.964844 343.015625 330.875 335.308594 C 333.65625 327.949219 331.890625 321.308594 327.5 315.320312 C 323.058594 309.265625 315.558594 303.949219 308.449219 299.25 C 316.613281 301.441406 325.195312 303.425781 333.546875 303.835938 C 342.183594 304.257812 350.578125 303.019531 358.160156 298.945312 C 361.980469 296.890625 366.039062 294.558594 368.675781 291.460938 C 371.046875 288.671875 372.4375 285.328125 372.136719 281.15625 C 371.3125 269.6875 363.183594 263.617188 352.25 261.148438 C 339.566406 258.285156 322.972656 260.507812 313.824219 262.523438 C 311.167969 263.105469 308.59375 263.71875 306.058594 264.46875 C 305.292969 264.695312 304.53125 264.933594 303.769531 265.191406 C 309.171875 259.941406 314.847656 254.472656 319.210938 248.503906 C 322.480469 244.027344 325.046875 239.273438 326.425781 234.179688 C 327.714844 229.410156 328.523438 223.195312 326.683594 218.160156 C 325.308594 214.382812 322.621094 211.121094 317.792969 209.199219 C 306.976562 204.902344 297.914062 208.335938 290.742188 215.246094 C 282.121094 223.550781 276.507812 237.316406 274.160156 246.183594 Z M 268.351562 294.023438 C 268.414062 295.882812 268.449219 297.734375 268.441406 299.582031 C 268.433594 301.867188 268.351562 304.152344 268.152344 306.457031 C 267.53125 313.546875 266.085938 321.773438 262.441406 328.65625 C 260.242188 332.8125 257.226562 336.472656 252.996094 338.941406 C 251.035156 340.085938 248.699219 341.484375 246.210938 342.253906 C 244.484375 342.789062 242.667969 343.046875 240.929688 342.234375 C 239.339844 341.488281 238.480469 340.023438 237.972656 338.46875 C 237.273438 336.320312 237.222656 333.9375 237.480469 332.0625 C 238.207031 326.8125 240.253906 322.53125 243.035156 318.691406 C 247.554688 312.445312 253.886719 307.285156 260 301.335938 Z M 276.949219 290.71875 L 280.320312 292.214844 C 282.378906 293.191406 284.554688 294.265625 286.605469 295.464844 C 287.898438 296.21875 289.140625 297.027344 290.261719 297.894531 C 297.117188 303.195312 309.226562 309.371094 317.023438 317.023438 C 321.53125 321.449219 324.660156 326.328125 322.480469 332.148438 C 320.398438 337.710938 315.59375 339.855469 310.4375 339.792969 C 304.808594 339.722656 298.757812 337.230469 294.445312 333.335938 C 290.03125 329.347656 285.289062 320.496094 281.808594 311.238281 C 279.175781 304.234375 277.21875 296.980469 276.957031 291.347656 Z M 263.054688 283.949219 L 264.597656 284.886719 L 265.023438 285.140625 L 262.511719 286.507812 C 260.859375 287.472656 259.179688 288.285156 257.472656 289.027344 C 254.753906 290.207031 251.960938 291.214844 249.085938 292.320312 C 243.195312 294.585938 235.890625 296.296875 228.527344 296.746094 C 221.496094 297.171875 214.394531 296.46875 208.5 293.851562 C 206.253906 292.851562 203.828125 291.625 201.804688 290.046875 C 200.140625 288.75 198.714844 287.242188 198.222656 285.296875 C 197.132812 280.953125 198.347656 277.816406 200.902344 275.527344 C 203.875 272.867188 208.257812 271.199219 212.796875 269.933594 C 217.707031 268.570312 223.703125 269.527344 230.09375 271.347656 C 241.007812 274.460938 252.921875 280.167969 263.054688 283.949219 Z M 285.789062 283.742188 L 286.175781 283.34375 C 286.558594 283.03125 286.960938 282.734375 287.429688 282.542969 L 304.410156 275.277344 C 306.242188 274.542969 308.089844 273.945312 309.964844 273.417969 C 311.910156 272.875 313.886719 272.40625 315.914062 271.957031 C 324.066406 270.136719 338.84375 267.953125 350.15625 270.472656 C 356.71875 271.933594 362.164062 274.972656 362.675781 281.847656 C 362.816406 283.734375 361.84375 285.089844 360.582031 286.242188 C 358.644531 288.007812 356.070312 289.351562 353.683594 290.644531 C 347.632812 293.921875 340.894531 294.800781 333.992188 294.480469 C 323.027344 293.976562 311.652344 290.5 301.496094 287.714844 C 297.605469 286.648438 293.261719 285.953125 289.21875 284.847656 C 288.039062 284.527344 286.886719 284.167969 285.789062 283.742188 Z M 269.175781 275.03125 C 267.609375 274.082031 266.050781 273.105469 264.511719 272.105469 C 262.039062 270.496094 259.617188 268.824219 257.300781 267.089844 C 254.410156 264.925781 250.984375 263.019531 247.910156 260.867188 C 246.804688 260.097656 245.753906 259.292969 244.820312 258.40625 C 239.117188 252.984375 232.839844 241.578125 231.976562 231.742188 C 231.488281 226.183594 232.863281 221.074219 238.617188 219.0625 C 243.238281 217.445312 247.082031 220.042969 250.386719 223.597656 C 257.011719 230.722656 261.460938 242.097656 263.519531 247.378906 C 264.179688 249.074219 264.746094 250.703125 265.203125 252.347656 C 265.652344 253.957031 266 255.582031 266.242188 257.3125 L 268.921875 274.027344 Z M 280.585938 275.039062 C 280.554688 273.621094 280.59375 272.191406 280.667969 270.765625 C 280.808594 268.09375 281.082031 265.421875 281.339844 262.789062 C 281.488281 261.304688 281.71875 259.835938 281.988281 258.367188 C 282.429688 255.984375 282.96875 253.617188 283.449219 251.246094 C 284.882812 244.144531 289.636719 230.390625 297.765625 222.515625 C 302.101562 218.308594 307.53125 215.945312 314.097656 218.53125 C 316.3125 219.40625 317.296875 221.050781 317.628906 222.886719 C 318.152344 225.785156 317.484375 229.003906 316.792969 231.585938 C 315.378906 236.875 312.222656 241.636719 308.457031 246.132812 C 302.332031 253.433594 294.59375 260 288.660156 266.457031 Z M 280.585938 275.039062 " fill-opacity="1" fill-rule="evenodd"></path></g></g></g><g clip-path="url(#1e1f1b51f6)"><g clip-path="url(#e8a1225d17)"><g clip-path="url(#56e73cbd54)"><path fill="#2f2f34" d="M 125.285156 129.199219 C 125.167969 129.769531 125.027344 130.335938 124.859375 130.890625 C 124.695312 131.449219 124.5 131.996094 124.285156 132.535156 C 124.070312 133.074219 123.828125 133.597656 123.566406 134.113281 C 123.304688 134.628906 123.015625 135.128906 122.710938 135.613281 C 122.402344 136.101562 122.074219 136.570312 121.722656 137.023438 C 121.375 137.476562 121.003906 137.910156 120.617188 138.324219 C 120.226562 138.738281 119.824219 139.132812 119.398438 139.503906 C 118.976562 139.878906 118.539062 140.226562 118.085938 140.554688 C 117.632812 140.882812 117.167969 141.1875 116.6875 141.464844 C 116.207031 141.746094 115.71875 142 115.21875 142.226562 C 114.714844 142.453125 114.207031 142.65625 113.691406 142.832031 C 113.171875 143.003906 112.648438 143.152344 112.121094 143.273438 C 111.589844 143.390625 111.058594 143.484375 110.523438 143.546875 C 109.984375 143.609375 109.449219 143.644531 108.910156 143.652344 C 108.375 143.65625 107.839844 143.636719 107.304688 143.585938 C 106.773438 143.535156 106.242188 143.457031 105.71875 143.351562 C 105.191406 143.242188 104.675781 143.109375 104.164062 142.945312 C 103.652344 142.785156 103.152344 142.59375 102.660156 142.378906 C 102.167969 142.164062 101.6875 141.921875 101.21875 141.652344 C 100.75 141.386719 100.292969 141.09375 99.855469 140.777344 C 99.414062 140.460938 98.988281 140.121094 98.582031 139.757812 C 98.171875 139.394531 97.78125 139.007812 97.410156 138.605469 C 97.039062 138.199219 96.6875 137.773438 96.355469 137.328125 C 96.023438 136.886719 95.710938 136.421875 95.421875 135.945312 C 95.132812 135.464844 94.867188 134.972656 94.625 134.464844 C 94.382812 133.957031 94.160156 133.433594 93.96875 132.902344 C 93.773438 132.367188 93.601562 131.824219 93.457031 131.273438 C 93.3125 130.71875 93.191406 130.15625 93.097656 129.589844 C 93.003906 129.023438 92.9375 128.449219 92.894531 127.875 C 92.855469 127.296875 92.839844 126.71875 92.851562 126.140625 C 92.863281 125.558594 92.898438 124.980469 92.964844 124.402344 C 93.027344 123.824219 93.117188 123.25 93.234375 122.679688 C 93.351562 122.109375 93.492188 121.546875 93.660156 120.988281 C 93.824219 120.433594 94.015625 119.882812 94.234375 119.347656 C 94.449219 118.808594 94.6875 118.28125 94.953125 117.765625 C 95.214844 117.25 95.5 116.75 95.808594 116.265625 C 96.117188 115.78125 96.445312 115.308594 96.796875 114.859375 C 97.144531 114.40625 97.515625 113.972656 97.902344 113.558594 C 98.289062 113.140625 98.695312 112.75 99.117188 112.375 C 99.542969 112.003906 99.980469 111.652344 100.433594 111.324219 C 100.886719 110.996094 101.351562 110.691406 101.832031 110.414062 C 102.308594 110.136719 102.800781 109.882812 103.300781 109.652344 C 103.800781 109.425781 104.3125 109.222656 104.828125 109.050781 C 105.347656 108.875 105.871094 108.726562 106.398438 108.609375 C 106.929688 108.488281 107.460938 108.398438 107.996094 108.332031 C 108.53125 108.269531 109.070312 108.234375 109.605469 108.230469 C 110.144531 108.222656 110.679688 108.246094 111.214844 108.296875 C 111.746094 108.34375 112.277344 108.425781 112.800781 108.53125 C 113.324219 108.636719 113.84375 108.773438 114.355469 108.933594 C 114.867188 109.097656 115.367188 109.285156 115.859375 109.5 C 116.351562 109.71875 116.832031 109.960938 117.300781 110.226562 C 117.769531 110.496094 118.222656 110.785156 118.664062 111.105469 C 119.105469 111.421875 119.527344 111.761719 119.9375 112.125 C 120.34375 112.484375 120.734375 112.871094 121.109375 113.277344 C 121.480469 113.683594 121.832031 114.105469 122.164062 114.550781 C 122.496094 114.996094 122.804688 115.457031 123.09375 115.933594 C 123.382812 116.414062 123.652344 116.90625 123.894531 117.417969 C 124.136719 117.925781 124.355469 118.445312 124.550781 118.980469 C 124.746094 119.511719 124.917969 120.054688 125.0625 120.609375 C 125.207031 121.160156 125.328125 121.722656 125.421875 122.289062 C 125.515625 122.859375 125.582031 123.429688 125.621094 124.007812 C 125.664062 124.582031 125.679688 125.160156 125.667969 125.742188 C 125.65625 126.320312 125.617188 126.902344 125.554688 127.476562 C 125.492188 128.054688 125.402344 128.628906 125.285156 129.199219 Z M 125.285156 129.199219 " fill-opacity="1" fill-rule="nonzero"></path></g></g></g><g clip-path="url(#8057cb44e4)"><g clip-path="url(#43b1492224)"><g clip-path="url(#c9850c3522)"><path fill="#2f2f34" d="M 113.570312 104.757812 C 107.910156 103.519531 102.246094 104.988281 97.710938 108.308594 C 93.503906 111.386719 90.324219 116.128906 89.078125 121.835938 C 87.820312 127.589844 88.84375 133.261719 91.402344 137.855469 C 94.21875 142.910156 98.96875 146.617188 104.792969 147.890625 C 110.675781 149.175781 116.5625 147.648438 121.277344 144.195312 C 125.628906 141.011719 128.917969 136.101562 130.207031 130.203125 C 131.507812 124.253906 130.441406 118.386719 127.792969 113.636719 C 124.867188 108.386719 119.929688 104.550781 113.878906 103.226562 Z M 111.722656 113.835938 C 114.746094 114.40625 117.222656 116.285156 118.75 118.847656 C 120.328125 121.496094 121 124.808594 120.363281 128.199219 C 119.714844 131.644531 117.929688 134.570312 115.460938 136.492188 C 112.972656 138.425781 109.835938 139.410156 106.640625 138.808594 C 103.390625 138.199219 100.734375 136.179688 99.089844 133.421875 C 97.417969 130.621094 96.714844 127.117188 97.390625 123.527344 C 98.078125 119.882812 99.976562 116.796875 102.585938 114.765625 C 105.25 112.695312 108.613281 111.660156 112.035156 112.304688 Z M 111.722656 113.835938 " fill-opacity="1" fill-rule="evenodd"></path></g></g></g><g clip-path="url(#9f674eee21)"><g clip-path="url(#6953d75909)"><g clip-path="url(#816ebb61d0)"><path fill="#2f2f34" d="M 288.203125 282.09375 C 288.039062 282.90625 287.792969 283.695312 287.464844 284.460938 C 287.140625 285.226562 286.738281 285.949219 286.265625 286.636719 C 285.789062 287.324219 285.25 287.957031 284.644531 288.539062 C 284.039062 289.121094 283.378906 289.636719 282.667969 290.089844 C 281.957031 290.546875 281.203125 290.929688 280.414062 291.238281 C 279.621094 291.546875 278.804688 291.777344 277.964844 291.933594 C 277.125 292.085938 276.273438 292.15625 275.417969 292.148438 C 274.558594 292.140625 273.710938 292.046875 272.871094 291.878906 C 272.027344 291.707031 271.210938 291.457031 270.417969 291.128906 C 269.625 290.804688 268.871094 290.40625 268.15625 289.9375 C 267.445312 289.46875 266.785156 288.933594 266.175781 288.339844 C 265.566406 287.746094 265.027344 287.101562 264.546875 286.40625 C 264.070312 285.707031 263.667969 284.972656 263.335938 284.203125 C 263.007812 283.429688 262.757812 282.636719 262.589844 281.820312 C 262.417969 281.003906 262.332031 280.179688 262.332031 279.347656 C 262.328125 278.515625 262.410156 277.691406 262.578125 276.878906 C 262.742188 276.066406 262.988281 275.277344 263.316406 274.511719 C 263.640625 273.746094 264.042969 273.023438 264.515625 272.335938 C 264.992188 271.648438 265.53125 271.015625 266.136719 270.433594 C 266.742188 269.855469 267.402344 269.335938 268.113281 268.882812 C 268.824219 268.425781 269.578125 268.046875 270.367188 267.734375 C 271.160156 267.425781 271.976562 267.195312 272.816406 267.042969 C 273.65625 266.886719 274.507812 266.816406 275.363281 266.824219 C 276.222656 266.835938 277.070312 266.925781 277.910156 267.097656 C 278.753906 267.265625 279.570312 267.515625 280.363281 267.84375 C 281.15625 268.167969 281.910156 268.566406 282.621094 269.035156 C 283.335938 269.507812 283.996094 270.039062 284.605469 270.632812 C 285.210938 271.226562 285.753906 271.871094 286.234375 272.566406 C 286.710938 273.265625 287.113281 274 287.445312 274.769531 C 287.773438 275.542969 288.023438 276.335938 288.191406 277.152344 C 288.363281 277.96875 288.449219 278.792969 288.449219 279.625 C 288.449219 280.457031 288.371094 281.28125 288.203125 282.09375 Z M 288.203125 282.09375 " fill-opacity="1" fill-rule="nonzero"></path></g></g></g><g clip-path="url(#ef8fcfa9c4)"><g clip-path="url(#41b5bfcbc0)"><g clip-path="url(#f54fa9243d)"><path fill="#2f2f34" d="M 278.679688 263.324219 C 274.160156 262.3125 269.683594 263.222656 266.058594 265.398438 C 262.25 267.679688 259.445312 271.445312 258.421875 276.035156 C 257.382812 280.675781 258.472656 285.304688 260.972656 289.03125 C 263.40625 292.664062 267.273438 295.371094 271.945312 296.417969 C 276.671875 297.472656 281.347656 296.511719 285.140625 294.238281 C 289.125 291.847656 292.050781 287.898438 293.125 283.09375 C 294.210938 278.238281 293.0625 273.394531 290.449219 269.492188 C 287.90625 265.703125 283.867188 262.882812 278.992188 261.789062 Z M 276.832031 272.402344 C 278.9375 272.789062 280.742188 273.886719 281.890625 275.46875 C 283.046875 277.058594 283.65625 279.046875 283.28125 281.09375 C 282.894531 283.191406 281.699219 284.953125 280.011719 286.054688 C 278.257812 287.203125 276.054688 287.753906 273.792969 287.339844 C 271.480469 286.914062 269.511719 285.6875 268.25 283.953125 C 266.972656 282.195312 266.320312 279.988281 266.734375 277.726562 C 267.160156 275.410156 268.492188 273.472656 270.351562 272.253906 C 272.269531 271.003906 274.675781 270.417969 277.144531 270.871094 Z M 276.832031 272.402344 " fill-opacity="1" fill-rule="evenodd"></path></g></g></g></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Flower4.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Flower4 = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "500",
    zoomAndPan: "magnify",
    viewBox: "0 0 375 374.999991",
    height: "500",
    preserveAspectRatio: "xMidYMid meet",
    version: "1.0"
  }, _attrs))}><path fill="#2f2f34" d="M 312.484375 237.84375 L 315.265625 223.527344 L 317.175781 223.621094 C 317.179688 223.621094 317.179688 223.621094 317.179688 223.621094 C 317.238281 223.621094 317.285156 223.578125 317.296875 223.523438 C 320.449219 207.800781 318.855469 184.132812 318.828125 183.785156 C 318.828125 183.660156 318.808594 175.511719 313.847656 149.96875 L 316.128906 149.527344 C 316.191406 149.515625 316.234375 149.453125 316.222656 149.390625 C 316.164062 149.066406 310.453125 116.535156 294.089844 82.753906 C 284.476562 62.90625 273.121094 46.519531 260.347656 34.039062 C 244.417969 18.484375 226.21875 9.003906 206.253906 5.847656 C 206.222656 5.773438 206.171875 5.710938 206.089844 5.699219 C 205.765625 5.640625 173.285156 -0.015625 137.082031 12.367188 C 115.816406 19.636719 97.445312 31.617188 82.476562 47.972656 C 63.773438 68.40625 50.367188 95.765625 42.628906 129.289062 C 42.628906 129.292969 42.632812 129.300781 42.632812 129.308594 C 42.628906 129.316406 42.625 129.320312 42.625 129.328125 C 42.625 129.339844 42.632812 129.347656 42.632812 129.359375 C 42.636719 129.386719 42.640625 129.414062 42.652344 129.4375 C 42.660156 129.453125 42.667969 129.46875 42.679688 129.484375 C 42.6875 129.492188 42.691406 129.503906 42.699219 129.515625 C 42.707031 129.519531 42.722656 129.519531 42.730469 129.523438 C 42.742188 129.535156 42.75 129.550781 42.765625 129.558594 L 46.429688 131.171875 C 43.660156 146.011719 43.039062 165.792969 42.902344 174.398438 C 41.917969 175.265625 41.25 176.449219 41.046875 177.761719 C 37.574219 200.261719 48.632812 212.296875 49.546875 213.246094 L 49.453125 213.285156 L 49.261719 213.359375 L 49.3125 213.558594 C 49.332031 213.640625 50.039062 216.597656 50.75 221.585938 C 46.125 233.917969 45.972656 250.035156 50.132812 267.46875 C 48.71875 283.203125 53.628906 301.410156 63.902344 318.066406 C 73.21875 333.167969 85.765625 345.035156 99.238281 351.472656 C 102.453125 353.011719 105.621094 354.179688 108.726562 355.007812 C 122.964844 365.148438 137.585938 370.785156 150.425781 370.785156 C 157.59375 370.785156 164.210938 369.03125 169.894531 365.332031 C 171.039062 364.589844 172.105469 363.753906 173.136719 362.882812 C 173.625 362.597656 174.109375 362.308594 174.585938 362 C 179.613281 358.726562 183.523438 354.160156 186.367188 348.617188 C 187.851562 347.964844 189.292969 347.199219 190.675781 346.316406 C 190.839844 346.234375 191.007812 346.15625 191.167969 346.070312 C 192.277344 347.386719 193.496094 348.605469 194.84375 349.703125 C 199.28125 353.304688 204.667969 355.367188 210.679688 356.015625 C 214.628906 357.820312 219.097656 358.75 223.992188 358.75 C 227.335938 358.75 230.875 358.3125 234.566406 357.46875 C 235.164062 357.5 235.761719 357.527344 236.371094 357.527344 C 254.128906 357.527344 277.109375 344.132812 294.890625 321.609375 C 306.550781 306.839844 314.269531 290.390625 316.628906 275.292969 C 317.867188 267.371094 317.539062 260.328125 315.757812 254.457031 C 315.6875 248.175781 314.585938 242.578125 312.484375 237.84375 Z M 94.613281 118.898438 C 94.703125 118.875 94.761719 118.796875 94.777344 118.707031 C 96.988281 119.007812 114.796875 120.34375 124.457031 87.109375 C 130.480469 66.378906 142.378906 46.5625 158.515625 33.875 C 165.011719 33.675781 181.21875 34.421875 200.015625 44.496094 C 214.304688 52.160156 227.265625 63.636719 238.539062 78.609375 C 252.636719 97.332031 264.117188 121.605469 272.667969 150.753906 C 273.703125 154.277344 276.859375 156.574219 280.371094 156.574219 C 280.648438 156.574219 280.925781 156.5625 281.207031 156.53125 C 284.335938 169.34375 285 183.9375 285.070312 185.742188 C 283.363281 186.191406 282.136719 187.726562 282.082031 189.527344 C 281.914062 195.054688 281.074219 200.722656 280.546875 203.832031 C 260.25 192.84375 225.226562 208.527344 199.585938 241.007812 C 198.152344 242.824219 196.789062 244.664062 195.46875 246.507812 C 193.125 242.078125 190.554688 237.6875 187.746094 233.367188 C 158.726562 188.753906 114.300781 166 88.71875 182.640625 C 88.660156 182.679688 88.605469 182.726562 88.546875 182.765625 C 88.113281 179.328125 87.757812 175.523438 87.535156 171.363281 C 87.417969 169.078125 86.550781 166.960938 85.160156 165.273438 C 84.816406 145.230469 87.90625 123.953125 88.410156 120.625 Z M 310.164062 138.6875 C 310.929688 141.738281 311.507812 144.277344 311.917969 146.171875 Z M 310.164062 138.6875 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#ff8995" d="M 84.671875 118.746094 L 46.632812 130.105469 C 46.59375 130.300781 46.558594 130.5 46.519531 130.695312 L 43.535156 129.378906 L 87.058594 115.8125 L 93.824219 118.625 L 88.476562 120.113281 C 88.472656 120.027344 88.429688 119.941406 88.34375 119.90625 L 85.019531 118.453125 C 84.953125 118.421875 84.875 118.425781 84.8125 118.460938 C 84.746094 118.496094 84.703125 118.558594 84.691406 118.628906 C 84.683594 118.671875 84.679688 118.707031 84.671875 118.746094 Z M 310.609375 234.28125 C 311.234375 235.296875 311.796875 236.367188 312.3125 237.484375 L 315.027344 223.511719 L 312.964844 223.410156 C 312.964844 223.410156 312.960938 223.410156 312.960938 223.410156 C 312.902344 223.40625 308.816406 223.101562 303.75 221.835938 C 306.90625 225.261719 309.183594 229.46875 310.609375 234.28125 Z M 315.769531 256.28125 C 315.707031 259.203125 315.433594 262.265625 314.9375 265.453125 C 312.261719 282.570312 303.507812 301.222656 290.285156 317.972656 C 273.988281 338.617188 253.84375 352.492188 236.089844 357.054688 C 253.722656 357.21875 276.71875 343.863281 294.519531 321.3125 C 306.128906 306.605469 313.816406 290.238281 316.160156 275.21875 C 317.269531 268.117188 317.109375 261.734375 315.769531 256.28125 Z M 50.890625 222.59375 C 46.703125 234.410156 46.546875 249.597656 50.28125 266.046875 C 50.371094 265.28125 50.457031 264.519531 50.578125 263.765625 C 53.226562 246.914062 52.121094 231.742188 50.890625 222.59375 Z M 112.699219 206.3125 C 105.363281 202.550781 98.277344 200.148438 91.628906 199.101562 C 92.589844 202.757812 93.339844 204.714844 93.359375 204.761719 C 93.398438 204.867188 93.359375 204.988281 93.265625 205.050781 L 91.804688 205.964844 C 93.535156 211.953125 96.335938 220.277344 100.292969 228.066406 C 115.996094 233.503906 133.046875 247.558594 145.988281 267.453125 C 156.808594 284.089844 162.738281 301.699219 163.578125 316.699219 L 163.609375 316.699219 C 164.429688 331.242188 160.5 342.570312 152.515625 348.9375 C 152.453125 348.988281 152.398438 349.042969 152.332031 349.09375 C 151.78125 349.523438 151.207031 349.9375 150.617188 350.320312 C 146.375 353.082031 141.433594 354.390625 136.082031 354.390625 C 134.609375 354.390625 133.105469 354.28125 131.574219 354.085938 C 127.816406 355.691406 123.707031 356.496094 119.347656 356.496094 C 116.328125 356.496094 113.1875 356.097656 109.96875 355.328125 C 131.691406 370.476562 154.160156 375.003906 169.636719 364.933594 C 195 348.433594 192.144531 298.894531 163.265625 254.5 C 149.261719 232.976562 131.304688 215.863281 112.699219 206.3125 Z M 99.441406 351.046875 C 86.054688 344.644531 73.574219 332.84375 64.304688 317.816406 C 53.277344 299.933594 48.441406 280.261719 51.050781 263.804688 C 55.117188 237.9375 50.351562 215.96875 49.816406 213.648438 L 50.273438 213.46875 C 66.3125 217.21875 84.710938 209.675781 86.859375 208.757812 C 86.882812 208.820312 86.933594 208.871094 86.996094 208.890625 C 87.019531 208.898438 87.046875 208.902344 87.070312 208.902344 C 87.113281 208.902344 87.160156 208.890625 87.195312 208.867188 L 91.390625 206.230469 C 94.226562 216.011719 99.875 231.90625 108.734375 241.640625 C 111.769531 244.972656 115.027344 248.488281 118.566406 251.640625 C 125.398438 257.714844 131.449219 264.992188 136.550781 273.257812 C 155.664062 304.246094 155.007812 339.453125 135.089844 351.738281 C 125.457031 357.675781 112.800781 357.429688 99.441406 351.046875 Z M 122.648438 259.132812 C 122.753906 259.246094 133.191406 270.308594 140.628906 286.140625 C 144.996094 295.429688 147.492188 304.523438 148.046875 313.160156 C 148.738281 323.953125 146.382812 334.066406 141.046875 343.21875 C 141.011719 343.273438 141.03125 343.347656 141.089844 343.378906 C 141.109375 343.390625 141.128906 343.394531 141.148438 343.394531 C 141.1875 343.394531 141.230469 343.375 141.25 343.335938 C 146.613281 334.144531 148.976562 323.984375 148.28125 313.144531 C 147.726562 304.476562 145.222656 295.355469 140.839844 286.035156 C 133.386719 270.171875 122.925781 259.085938 122.820312 258.972656 C 122.777344 258.925781 122.699219 258.925781 122.652344 258.96875 C 122.605469 259.011719 122.605469 259.089844 122.648438 259.132812 Z M 89.925781 208.699219 C 89.945312 208.761719 91.886719 214.871094 94.90625 222.003906 C 97.699219 228.59375 102.011719 237.429688 106.699219 242.105469 C 106.722656 242.128906 106.753906 242.140625 106.785156 242.140625 C 106.8125 242.140625 106.84375 242.128906 106.867188 242.105469 C 106.914062 242.058594 106.914062 241.984375 106.867188 241.9375 C 102.203125 237.289062 97.90625 228.484375 95.125 221.914062 C 92.105469 214.789062 90.167969 208.6875 90.148438 208.628906 C 90.128906 208.566406 90.066406 208.53125 90 208.550781 C 89.9375 208.570312 89.90625 208.636719 89.925781 208.699219 Z M 114.894531 342.484375 C 118.238281 340.699219 120.949219 337.898438 122.945312 334.167969 L 122.84375 334.105469 C 125.941406 328.308594 127.109375 320.601562 126.21875 311.820312 C 125.3125 302.832031 122.292969 293.328125 117.484375 284.332031 C 111.203125 272.574219 102.578125 262.96875 93.199219 257.285156 C 83.800781 251.59375 74.769531 250.515625 67.765625 254.261719 C 65.382812 255.53125 63.300781 257.355469 61.5625 259.6875 L 61.460938 259.621094 C 53.027344 270.972656 54.488281 292.660156 65.011719 312.363281 C 71.304688 324.140625 79.945312 333.761719 89.339844 339.457031 C 95.078125 342.929688 100.679688 344.691406 105.777344 344.691406 C 109.0625 344.691406 112.132812 343.957031 114.894531 342.484375 Z M 300.011719 133.269531 L 302.542969 143.699219 C 303.519531 147.730469 307.207031 150.410156 311.230469 150.246094 C 311.285156 150.246094 311.34375 150.242188 311.398438 150.238281 L 312.691406 149.96875 C 312.628906 149.628906 312.378906 148.304688 311.914062 146.164062 L 310.167969 138.703125 C 307.339844 127.402344 301.953125 109.011719 293.066406 89.738281 C 284.628906 71.441406 274.730469 55.949219 263.652344 43.695312 C 249.8125 28.378906 234.070312 18.105469 216.875 13.152344 C 192.082031 6.015625 169.90625 8.433594 150.96875 20.347656 C 140.847656 26.710938 131.589844 35.84375 123.449219 47.480469 C 116.9375 56.796875 111.125 67.730469 106.175781 79.980469 C 97.742188 100.839844 94.695312 118.511719 94.664062 118.691406 C 94.695312 118.695312 94.734375 118.703125 94.777344 118.707031 C 96.988281 119.007812 114.796875 120.34375 124.453125 87.109375 C 130.480469 66.378906 142.378906 46.5625 158.515625 33.875 C 158.621094 33.792969 158.730469 33.710938 158.835938 33.628906 C 170.949219 24.207031 185.417969 18.789062 201.585938 20.015625 C 247.792969 23.523438 286.347656 79.019531 300.011719 133.269531 Z M 300.011719 133.269531 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#74d6eb" d="M 317.085938 223.378906 L 313.113281 223.179688 C 315.214844 213.578125 315.988281 202.414062 315.550781 188.0625 C 315.5 186.484375 316.019531 185.304688 317.085938 184.558594 C 317.710938 184.125 318.34375 183.972656 318.601562 183.925781 C 318.722656 185.796875 320.09375 208.238281 317.085938 223.378906 Z M 315.3125 188.070312 C 315.234375 185.535156 316.609375 184.453125 317.628906 183.992188 L 314.984375 184.207031 C 314.980469 184.207031 314.976562 184.207031 314.972656 184.207031 C 314.945312 184.207031 314.917969 184.199219 314.898438 184.179688 C 314.886719 184.171875 314.886719 184.160156 314.882812 184.148438 L 285.085938 186.050781 C 285.082031 186.050781 285.082031 186.050781 285.078125 186.050781 C 285.046875 186.050781 285.019531 186.035156 284.996094 186.015625 C 283.460938 186.484375 282.371094 187.886719 282.320312 189.535156 C 282.148438 195.132812 281.292969 200.863281 280.765625 203.960938 C 281.984375 204.640625 283.160156 205.398438 284.265625 206.273438 L 300.921875 219.144531 C 301.824219 219.878906 302.652344 220.683594 303.449219 221.515625 C 308.222656 222.742188 312.199219 223.109375 312.875 223.167969 C 314.976562 213.574219 315.75 202.417969 315.3125 188.070312 Z M 260.855469 227.515625 C 258.5 225.832031 255.648438 225.035156 252.476562 225.035156 C 240.859375 225.035156 224.878906 235.742188 212.621094 252.902344 C 209.351562 257.484375 206.605469 262.167969 204.402344 266.78125 C 209.777344 281.894531 212.101562 296.515625 211.3125 309.191406 C 212.15625 309.253906 213.027344 309.261719 213.933594 309.199219 C 213.941406 308.867188 213.96875 308.519531 213.988281 308.179688 C 214.003906 307.847656 214.015625 307.515625 214.039062 307.179688 C 214.070312 306.800781 214.117188 306.410156 214.15625 306.023438 C 214.195312 305.679688 214.222656 305.335938 214.269531 304.984375 C 214.320312 304.597656 214.386719 304.199219 214.445312 303.808594 C 214.503906 303.449219 214.550781 303.097656 214.613281 302.734375 C 214.683594 302.339844 214.773438 301.9375 214.851562 301.539062 C 214.925781 301.171875 214.992188 300.804688 215.078125 300.433594 C 215.164062 300.035156 215.273438 299.628906 215.371094 299.226562 C 215.464844 298.847656 215.550781 298.46875 215.652344 298.089844 C 215.757812 297.691406 215.878906 297.285156 215.996094 296.882812 C 216.109375 296.492188 216.214844 296.101562 216.335938 295.707031 C 216.460938 295.304688 216.601562 294.902344 216.730469 294.496094 C 216.863281 294.097656 216.988281 293.699219 217.128906 293.296875 C 217.269531 292.898438 217.421875 292.492188 217.570312 292.089844 C 217.722656 291.679688 217.867188 291.273438 218.027344 290.863281 C 218.175781 290.472656 218.34375 290.082031 218.503906 289.691406 C 218.679688 289.265625 218.84375 288.839844 219.027344 288.410156 C 219.191406 288.03125 219.367188 287.648438 219.539062 287.269531 C 219.734375 286.828125 219.921875 286.390625 220.128906 285.949219 C 220.304688 285.574219 220.496094 285.195312 220.675781 284.820312 C 220.894531 284.375 221.101562 283.929688 221.324219 283.488281 C 221.511719 283.121094 221.710938 282.753906 221.90625 282.382812 C 222.140625 281.933594 222.371094 281.480469 222.617188 281.027344 C 222.8125 280.675781 223.015625 280.324219 223.214844 279.972656 C 223.476562 279.507812 223.730469 279.042969 224.003906 278.578125 C 224.210938 278.222656 224.433594 277.871094 224.648438 277.515625 C 224.921875 277.058594 225.191406 276.601562 225.476562 276.152344 C 225.71875 275.757812 225.980469 275.371094 226.234375 274.980469 C 226.5 274.566406 226.761719 274.152344 227.035156 273.742188 C 227.566406 272.945312 228.113281 272.15625 228.675781 271.371094 C 229.035156 270.867188 229.394531 270.371094 229.761719 269.878906 C 229.90625 269.6875 230.054688 269.496094 230.199219 269.300781 C 230.421875 269.007812 230.644531 268.710938 230.867188 268.417969 C 231.039062 268.195312 231.21875 267.976562 231.390625 267.753906 C 231.589844 267.5 231.789062 267.246094 231.992188 266.992188 C 232.203125 266.730469 232.417969 266.472656 232.628906 266.214844 C 232.796875 266.007812 232.964844 265.800781 233.132812 265.601562 C 233.339844 265.351562 233.554688 265.105469 233.765625 264.859375 C 233.941406 264.648438 234.117188 264.441406 234.292969 264.234375 C 234.488281 264.007812 234.6875 263.789062 234.886719 263.566406 C 235.082031 263.34375 235.273438 263.125 235.46875 262.90625 C 235.671875 262.683594 235.871094 262.46875 236.074219 262.246094 C 236.269531 262.039062 236.460938 261.824219 236.65625 261.617188 C 236.859375 261.398438 237.066406 261.1875 237.269531 260.972656 C 237.46875 260.765625 237.660156 260.558594 237.859375 260.355469 C 238.058594 260.152344 238.257812 259.953125 238.457031 259.753906 C 238.660156 259.546875 238.867188 259.339844 239.070312 259.136719 C 239.269531 258.941406 239.46875 258.75 239.667969 258.558594 C 239.875 258.359375 240.085938 258.152344 240.292969 257.953125 C 240.492188 257.765625 240.6875 257.585938 240.886719 257.402344 C 241.097656 257.207031 241.3125 257.007812 241.527344 256.8125 C 241.722656 256.632812 241.921875 256.460938 242.117188 256.28125 C 242.335938 256.089844 242.550781 255.894531 242.765625 255.707031 C 242.960938 255.535156 243.15625 255.371094 243.355469 255.203125 C 243.574219 255.015625 243.792969 254.828125 244.011719 254.644531 C 244.207031 254.480469 244.40625 254.324219 244.601562 254.160156 C 244.824219 253.980469 245.042969 253.796875 245.261719 253.621094 C 245.460938 253.464844 245.660156 253.3125 245.855469 253.160156 C 246.078125 252.984375 246.296875 252.8125 246.519531 252.644531 C 246.714844 252.496094 246.914062 252.351562 247.109375 252.203125 C 247.332031 252.039062 247.554688 251.871094 247.777344 251.707031 C 247.972656 251.566406 248.167969 251.429688 248.363281 251.292969 C 248.585938 251.132812 248.8125 250.972656 249.039062 250.816406 C 249.230469 250.683594 249.425781 250.554688 249.617188 250.425781 C 249.84375 250.273438 250.070312 250.117188 250.296875 249.96875 C 250.488281 249.84375 250.679688 249.726562 250.871094 249.601562 C 251.101562 249.457031 251.328125 249.308594 251.558594 249.167969 C 251.746094 249.050781 251.933594 248.941406 252.121094 248.828125 C 252.351562 248.691406 252.585938 248.546875 252.816406 248.414062 C 253 248.308594 253.183594 248.207031 253.367188 248.101562 C 253.601562 247.96875 253.835938 247.835938 254.070312 247.707031 C 254.253906 247.609375 254.4375 247.515625 254.621094 247.417969 C 254.855469 247.292969 255.089844 247.167969 255.320312 247.050781 C 255.5 246.960938 255.679688 246.875 255.859375 246.785156 C 256.09375 246.671875 256.328125 246.554688 256.5625 246.441406 C 256.742188 246.359375 256.917969 246.28125 257.09375 246.203125 C 257.332031 246.097656 257.566406 245.988281 257.800781 245.886719 C 257.976562 245.8125 258.148438 245.742188 258.324219 245.671875 C 258.558594 245.574219 258.792969 245.472656 259.027344 245.382812 C 259.203125 245.316406 259.375 245.253906 259.546875 245.1875 C 259.78125 245.101562 260.011719 245.011719 260.246094 244.929688 C 260.417969 244.871094 260.585938 244.816406 260.757812 244.757812 C 260.988281 244.679688 261.222656 244.601562 261.453125 244.53125 C 261.621094 244.480469 261.789062 244.433594 261.957031 244.382812 C 262.1875 244.316406 262.417969 244.25 262.644531 244.1875 C 262.8125 244.140625 262.976562 244.101562 263.144531 244.0625 C 263.371094 244.003906 263.601562 243.945312 263.828125 243.898438 C 263.992188 243.859375 264.152344 243.828125 264.316406 243.796875 C 264.542969 243.75 264.769531 243.703125 264.992188 243.664062 C 265.152344 243.632812 265.3125 243.613281 265.472656 243.585938 C 265.695312 243.550781 265.921875 243.515625 266.144531 243.488281 C 266.300781 243.464844 266.457031 243.453125 266.613281 243.433594 C 266.792969 243.414062 266.972656 243.390625 267.152344 243.375 C 267.25 236.015625 265.078125 230.53125 260.855469 227.515625 Z M 100.59375 228.65625 C 103.003906 233.304688 105.824219 237.738281 109.085938 241.320312 C 112.109375 244.640625 115.355469 248.148438 118.882812 251.285156 C 125.746094 257.390625 131.828125 264.699219 136.953125 273.007812 C 153.777344 300.289062 155.339844 330.84375 142.019531 346.402344 C 145.03125 345.761719 147.832031 344.644531 150.355469 343 C 158 338.03125 162.410156 328.992188 163.121094 316.859375 C 162.3125 301.917969 156.402344 284.332031 145.589844 267.714844 C 132.824219 248.089844 116.0625 234.167969 100.59375 228.65625 Z M 79.65625 162.128906 C 60.347656 164.207031 48.171875 170.894531 43.5625 173.886719 C 43.328125 174.042969 43.109375 174.214844 42.902344 174.398438 C 41.917969 175.265625 41.25 176.449219 41.046875 177.761719 C 37.574219 200.261719 48.632812 212.296875 49.546875 213.246094 C 49.585938 213.289062 49.613281 213.316406 49.613281 213.316406 C 49.832031 213.371094 50.054688 213.414062 50.273438 213.464844 C 66.3125 217.21875 84.710938 209.675781 86.859375 208.757812 C 86.855469 208.753906 86.851562 208.753906 86.847656 208.75 C 79.183594 188.71875 79.640625 162.949219 79.65625 162.128906 Z M 80.128906 162.417969 C 80.089844 165.414062 80.03125 189.378906 87.1875 208.308594 L 92.847656 204.75 C 92.261719 203.148438 88.113281 191.195312 87.066406 171.390625 C 86.847656 167.238281 84.070312 163.664062 80.128906 162.417969 Z M 311.230469 150.246094 C 307.210938 150.410156 303.523438 147.730469 302.542969 143.699219 L 300.011719 133.269531 C 286.347656 79.019531 247.792969 23.523438 201.589844 20.015625 C 185.417969 18.789062 170.949219 24.207031 158.835938 33.628906 C 159.253906 33.621094 159.699219 33.613281 160.183594 33.613281 C 167.550781 33.613281 182.734375 34.96875 200.113281 44.28125 C 214.433594 51.957031 227.425781 63.457031 238.722656 78.457031 C 252.839844 97.203125 264.335938 121.503906 272.898438 150.6875 C 274.054688 154.628906 277.945312 156.996094 281.949219 156.179688 Z M 132.21875 26.550781 C 134.011719 24.964844 135.839844 23.460938 137.695312 22.050781 C 150.765625 12.117188 165.425781 6.394531 181.46875 4.917969 C 169.261719 5.3125 153.625 7.207031 137.214844 12.820312 C 116.03125 20.070312 97.726562 32.007812 82.816406 48.300781 C 64.25 68.589844 50.917969 95.738281 43.1875 128.992188 L 86.859375 115.382812 C 86.921875 114.960938 87.128906 113.660156 87.511719 111.675781 C 89.03125 102.625 92.664062 88.949219 98.886719 74.582031 C 101.457031 68.519531 104.519531 62.222656 108.171875 56.011719 C 115.105469 44.214844 123.164062 34.359375 132.21875 26.550781 Z M 132.21875 26.550781 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#c97ccd" d="M 311.117188 236.109375 C 316.164062 256.746094 306.578125 287.363281 284.679688 314.320312 C 262.300781 341.863281 233.550781 357.589844 212.160156 356.125 C 211.675781 356.089844 211.1875 356.070312 210.714844 356.019531 C 204.6875 355.378906 199.292969 353.3125 194.847656 349.703125 C 193.496094 348.609375 192.277344 347.390625 191.171875 346.074219 C 192.128906 345.578125 193.074219 345.050781 193.980469 344.460938 C 196.980469 342.507812 199.574219 340.085938 201.796875 337.285156 C 222.109375 338.480469 249.238281 323.179688 270.140625 296.703125 C 297.425781 262.140625 303.75 221.65625 284.269531 206.273438 L 300.921875 219.144531 C 301.824219 219.878906 302.65625 220.683594 303.449219 221.519531 C 303.550781 221.625 303.652344 221.730469 303.75 221.839844 C 306.90625 225.261719 309.183594 229.46875 310.609375 234.28125 C 310.789062 234.882812 310.964844 235.488281 311.117188 236.109375 Z M 184.648438 235.382812 C 156.953125 192.804688 115.390625 170.207031 89.488281 182.738281 C 89.191406 182.882812 88.894531 183.03125 88.601562 183.183594 C 89.207031 187.921875 89.957031 191.941406 90.675781 195.179688 C 115.40625 196.117188 146.234375 217.34375 168.28125 251.238281 C 191.566406 287.027344 197.953125 326.035156 186.367188 348.617188 C 187.855469 347.960938 189.296875 347.195312 190.679688 346.316406 C 190.769531 346.257812 190.863281 346.203125 190.953125 346.144531 C 192.023438 345.449219 193.023438 344.675781 193.996094 343.867188 C 216.167969 325.378906 212.429688 278.089844 184.648438 235.382812 Z M 150.617188 343.398438 C 147.863281 345.191406 144.789062 346.378906 141.472656 347 C 139.679688 348.984375 137.640625 350.71875 135.339844 352.140625 C 134.382812 352.726562 133.390625 353.242188 132.378906 353.710938 C 139.0625 354.425781 145.230469 353.257812 150.359375 349.921875 C 158.671875 344.515625 163.175781 334.226562 163.242188 320.710938 C 161.882812 331.085938 157.5625 338.882812 150.617188 343.398438 Z M 46.519531 130.695312 C 46.488281 130.851562 46.460938 131.011719 46.429688 131.171875 C 43.660156 146.015625 43.039062 165.796875 42.902344 174.402344 C 43.109375 174.21875 43.328125 174.042969 43.5625 173.890625 C 48.171875 170.894531 60.347656 164.207031 79.65625 162.132812 C 79.65625 162.121094 79.65625 162.097656 79.65625 162.097656 C 79.660156 162.023438 79.695312 161.957031 79.753906 161.910156 C 79.8125 161.867188 79.890625 161.855469 79.960938 161.875 L 80.015625 161.890625 C 80.210938 161.945312 80.402344 162.011719 80.589844 162.082031 C 80.609375 157.972656 80.933594 141.175781 84.671875 118.746094 L 46.632812 130.105469 C 46.59375 130.300781 46.558594 130.5 46.519531 130.695312 Z M 285.074219 185.742188 C 285.074219 185.773438 285.074219 185.789062 285.074219 185.8125 L 314.84375 183.914062 C 313.492188 165.296875 310.601562 150.675781 310.570312 150.53125 C 310.570312 150.523438 310.574219 150.515625 310.574219 150.507812 L 281.1875 156.453125 C 281.195312 156.480469 281.199219 156.507812 281.207031 156.53125 C 284.335938 169.34375 285 183.941406 285.074219 185.742188 Z M 285.074219 185.742188 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#ffbc6c" d="M 311.117188 236.109375 C 315.105469 243.625 316.300781 253.652344 314.46875 265.382812 C 311.804688 282.421875 303.085938 300.992188 289.914062 317.679688 C 265.570312 348.519531 232.65625 364.199219 212.160156 356.125 C 233.550781 357.59375 262.300781 341.863281 284.679688 314.320312 C 306.578125 287.363281 316.164062 256.746094 311.117188 236.109375 Z M 201.796875 337.285156 C 207.386719 330.242188 210.535156 320.714844 211.289062 309.667969 C 211.726562 309.699219 212.171875 309.71875 212.625 309.71875 C 213.046875 309.71875 213.484375 309.695312 213.925781 309.667969 L 213.925781 309.679688 L 214.183594 309.65625 L 214.398438 309.640625 L 214.398438 309.636719 C 226.367188 308.617188 241.441406 297.664062 252.875 281.652344 C 261.839844 269.101562 267.335938 254.980469 267.613281 243.816406 L 267.621094 243.816406 L 267.625 243.601562 L 267.628906 243.339844 L 267.625 243.339844 C 267.714844 235.835938 265.476562 230.234375 261.132812 227.132812 C 249.933594 219.128906 227.996094 230.566406 212.238281 252.625 C 209.046875 257.09375 206.359375 261.660156 204.179688 266.167969 C 202.199219 260.679688 199.824219 255.128906 197.046875 249.585938 C 198.363281 247.71875 199.734375 245.878906 201.160156 244.070312 C 203.230469 241.449219 205.410156 238.898438 207.648438 236.484375 C 207.691406 236.4375 207.6875 236.359375 207.640625 236.316406 C 207.617188 236.296875 207.589844 236.285156 207.558594 236.285156 C 207.527344 236.285156 207.496094 236.296875 207.472656 236.324219 C 206.761719 237.09375 206.054688 237.875 205.351562 238.671875 C 205.300781 238.730469 205.25 238.789062 205.199219 238.847656 C 205.191406 238.855469 205.183594 238.867188 205.171875 238.875 C 205.171875 238.878906 205.171875 238.875 205.171875 238.878906 C 205.164062 238.886719 205.15625 238.894531 205.148438 238.90625 L 205.144531 238.90625 C 205.136719 238.917969 205.128906 238.925781 205.121094 238.933594 C 205.121094 238.9375 205.121094 238.933594 205.121094 238.9375 C 205.113281 238.945312 205.105469 238.953125 205.097656 238.964844 L 205.09375 238.96875 C 205.070312 238.996094 205.046875 239.023438 205.019531 239.050781 C 205.019531 239.050781 205.019531 239.050781 205.019531 239.054688 C 205.011719 239.0625 205.003906 239.070312 204.996094 239.078125 C 204.996094 239.078125 204.992188 239.082031 204.992188 239.085938 C 204.984375 239.09375 204.976562 239.101562 204.972656 239.109375 C 204.96875 239.109375 204.96875 239.113281 204.96875 239.113281 C 204.960938 239.121094 204.953125 239.128906 204.945312 239.136719 C 204.945312 239.136719 204.941406 239.140625 204.941406 239.140625 C 204.933594 239.152344 204.925781 239.160156 204.917969 239.167969 C 204.917969 239.167969 204.914062 239.167969 204.914062 239.171875 C 204.90625 239.179688 204.898438 239.1875 204.894531 239.195312 C 204.890625 239.199219 204.890625 239.199219 204.890625 239.199219 C 204.882812 239.210938 204.875 239.21875 204.867188 239.226562 L 204.867188 239.230469 C 204.859375 239.238281 204.847656 239.246094 204.839844 239.257812 C 204.832031 239.265625 204.824219 239.273438 204.816406 239.285156 C 204.816406 239.285156 204.816406 239.289062 204.8125 239.289062 C 204.808594 239.296875 204.800781 239.304688 204.792969 239.3125 C 204.792969 239.3125 204.789062 239.316406 204.785156 239.320312 C 204.78125 239.328125 204.773438 239.335938 204.765625 239.34375 C 204.765625 239.34375 204.761719 239.34375 204.761719 239.347656 C 204.753906 239.355469 204.746094 239.363281 204.742188 239.371094 C 204.738281 239.375 204.738281 239.375 204.738281 239.378906 C 204.730469 239.386719 204.722656 239.394531 204.714844 239.402344 C 204.710938 239.40625 204.710938 239.40625 204.710938 239.40625 C 204.703125 239.414062 204.695312 239.421875 204.6875 239.429688 C 204.6875 239.433594 204.683594 239.433594 204.683594 239.433594 C 204.679688 239.441406 204.671875 239.453125 204.664062 239.457031 C 204.664062 239.460938 204.660156 239.460938 204.660156 239.460938 C 204.652344 239.472656 204.644531 239.480469 204.640625 239.488281 C 204.636719 239.492188 204.636719 239.488281 204.636719 239.492188 C 204.628906 239.5 204.621094 239.507812 204.613281 239.515625 C 204.613281 239.519531 204.609375 239.523438 204.609375 239.523438 C 204.601562 239.53125 204.59375 239.539062 204.589844 239.546875 C 204.585938 239.550781 204.582031 239.550781 204.582031 239.554688 C 204.574219 239.5625 204.570312 239.570312 204.5625 239.578125 C 204.5625 239.582031 204.558594 239.582031 204.554688 239.585938 C 204.550781 239.59375 204.542969 239.601562 204.539062 239.609375 C 204.535156 239.613281 204.535156 239.613281 204.53125 239.617188 C 204.523438 239.625 204.519531 239.632812 204.511719 239.640625 C 204.511719 239.640625 204.507812 239.644531 204.507812 239.644531 C 204.5 239.652344 204.496094 239.660156 204.488281 239.664062 C 204.488281 239.667969 204.484375 239.671875 204.480469 239.675781 C 204.476562 239.679688 204.46875 239.6875 204.464844 239.695312 C 204.460938 239.699219 204.460938 239.699219 204.457031 239.703125 C 204.449219 239.710938 204.445312 239.71875 204.4375 239.722656 C 204.4375 239.726562 204.433594 239.730469 204.429688 239.730469 C 204.425781 239.738281 204.417969 239.746094 204.410156 239.753906 C 204.410156 239.757812 204.40625 239.757812 204.40625 239.761719 C 204.398438 239.769531 204.390625 239.777344 204.386719 239.78125 C 204.386719 239.785156 204.378906 239.789062 204.378906 239.792969 C 204.371094 239.800781 204.367188 239.808594 204.359375 239.8125 C 204.355469 239.816406 204.355469 239.820312 204.351562 239.824219 C 204.347656 239.832031 204.339844 239.835938 204.335938 239.84375 C 204.332031 239.847656 204.328125 239.851562 204.324219 239.855469 C 204.320312 239.859375 204.316406 239.867188 204.3125 239.871094 C 204.308594 239.875 204.304688 239.878906 204.300781 239.882812 C 204.296875 239.890625 204.292969 239.894531 204.289062 239.902344 C 204.285156 239.902344 204.277344 239.910156 204.277344 239.914062 C 204.269531 239.917969 204.265625 239.925781 204.261719 239.929688 C 204.257812 239.933594 204.257812 239.9375 204.253906 239.941406 C 204.246094 239.945312 204.242188 239.953125 204.234375 239.960938 C 204.230469 239.964844 204.230469 239.96875 204.226562 239.972656 C 204.222656 239.976562 204.214844 239.984375 204.210938 239.992188 C 204.207031 239.992188 204.203125 240 204.199219 240 C 204.195312 240.007812 204.191406 240.015625 204.183594 240.019531 C 204.179688 240.023438 204.175781 240.03125 204.175781 240.03125 C 204.171875 240.039062 204.167969 240.042969 204.164062 240.046875 C 204.160156 240.050781 204.152344 240.058594 204.148438 240.0625 C 204.144531 240.066406 204.140625 240.070312 204.136719 240.074219 C 204.132812 240.082031 204.128906 240.085938 204.125 240.09375 C 204.121094 240.097656 204.117188 240.101562 204.113281 240.105469 C 204.109375 240.113281 204.101562 240.121094 204.097656 240.125 C 204.09375 240.128906 204.089844 240.132812 204.085938 240.136719 C 204.082031 240.140625 204.078125 240.148438 204.070312 240.15625 C 204.070312 240.160156 204.066406 240.164062 204.0625 240.167969 C 204.058594 240.171875 204.050781 240.175781 204.050781 240.183594 C 204.042969 240.1875 204.039062 240.191406 204.035156 240.199219 C 204.03125 240.203125 204.03125 240.207031 204.023438 240.210938 C 204.019531 240.21875 204.015625 240.222656 204.011719 240.226562 C 204.007812 240.230469 204.003906 240.238281 204 240.242188 C 203.996094 240.246094 203.992188 240.25 203.988281 240.257812 C 203.980469 240.261719 203.976562 240.265625 203.972656 240.273438 C 203.96875 240.277344 203.96875 240.28125 203.964844 240.285156 C 203.957031 240.292969 203.953125 240.296875 203.945312 240.304688 C 203.945312 240.308594 203.941406 240.3125 203.9375 240.316406 C 203.933594 240.320312 203.929688 240.328125 203.921875 240.335938 C 203.917969 240.339844 203.914062 240.34375 203.910156 240.347656 C 203.90625 240.351562 203.902344 240.359375 203.894531 240.367188 C 203.890625 240.371094 203.886719 240.375 203.886719 240.378906 C 203.878906 240.382812 203.875 240.390625 203.871094 240.394531 C 203.867188 240.398438 203.863281 240.40625 203.859375 240.410156 C 203.855469 240.414062 203.851562 240.417969 203.847656 240.421875 C 203.84375 240.429688 203.835938 240.433594 203.832031 240.4375 C 203.828125 240.445312 203.824219 240.449219 203.820312 240.453125 C 203.816406 240.457031 203.816406 240.457031 203.8125 240.460938 C 203.808594 240.46875 203.800781 240.476562 203.792969 240.484375 C 203.792969 240.488281 203.789062 240.488281 203.789062 240.488281 C 203.78125 240.496094 203.773438 240.507812 203.769531 240.515625 C 203.765625 240.519531 203.761719 240.519531 203.761719 240.523438 C 203.753906 240.53125 203.75 240.539062 203.742188 240.546875 C 203.738281 240.546875 203.738281 240.550781 203.734375 240.554688 C 203.726562 240.5625 203.71875 240.570312 203.714844 240.578125 C 203.710938 240.582031 203.710938 240.582031 203.707031 240.585938 C 203.699219 240.59375 203.691406 240.605469 203.683594 240.613281 C 203.683594 240.613281 203.683594 240.613281 203.683594 240.617188 C 203.675781 240.625 203.667969 240.632812 203.660156 240.640625 C 203.65625 240.644531 203.65625 240.644531 203.652344 240.648438 C 203.648438 240.652344 203.648438 240.65625 203.640625 240.664062 C 203.640625 240.664062 203.636719 240.667969 203.636719 240.671875 C 203.628906 240.675781 203.621094 240.6875 203.617188 240.695312 C 203.613281 240.695312 203.613281 240.699219 203.609375 240.703125 C 203.601562 240.707031 203.59375 240.71875 203.589844 240.726562 C 203.585938 240.726562 203.585938 240.730469 203.582031 240.734375 C 203.578125 240.738281 203.570312 240.75 203.5625 240.757812 C 203.558594 240.761719 203.558594 240.761719 203.554688 240.765625 C 203.550781 240.773438 203.542969 240.78125 203.535156 240.785156 C 203.535156 240.789062 203.53125 240.792969 203.527344 240.796875 C 203.523438 240.804688 203.515625 240.8125 203.507812 240.820312 C 203.507812 240.820312 203.503906 240.824219 203.503906 240.824219 C 203.492188 240.835938 203.488281 240.84375 203.480469 240.855469 C 203.480469 240.855469 203.476562 240.855469 203.476562 240.855469 C 203.464844 240.871094 203.453125 240.886719 203.4375 240.902344 C 203.4375 240.90625 203.433594 240.90625 203.433594 240.910156 C 203.425781 240.917969 203.417969 240.925781 203.410156 240.933594 C 203.410156 240.9375 203.410156 240.9375 203.410156 240.9375 C 203.402344 240.949219 203.394531 240.957031 203.386719 240.964844 C 203.382812 240.96875 203.382812 240.96875 203.382812 240.972656 C 203.375 240.980469 203.367188 240.992188 203.359375 241 C 203.355469 241 203.355469 241 203.355469 241.003906 C 203.347656 241.011719 203.339844 241.019531 203.332031 241.027344 C 203.332031 241.03125 203.328125 241.03125 203.328125 241.035156 C 203.320312 241.046875 203.3125 241.054688 203.304688 241.0625 C 203.304688 241.0625 203.304688 241.0625 203.300781 241.066406 C 203.28125 241.089844 203.257812 241.117188 203.234375 241.144531 C 203.234375 241.144531 203.234375 241.144531 203.234375 241.148438 C 203.226562 241.15625 203.21875 241.164062 203.210938 241.175781 C 203.207031 241.179688 203.207031 241.179688 203.207031 241.179688 C 203.199219 241.191406 203.191406 241.199219 203.183594 241.210938 C 203.179688 241.210938 203.179688 241.210938 203.179688 241.210938 C 203.171875 241.222656 203.164062 241.230469 203.15625 241.242188 C 203.15625 241.242188 203.152344 241.242188 203.152344 241.246094 C 203.144531 241.253906 203.136719 241.261719 203.128906 241.273438 C 203.128906 241.273438 203.128906 241.273438 203.125 241.277344 C 203.105469 241.304688 203.082031 241.328125 203.058594 241.355469 C 203.058594 241.355469 203.058594 241.355469 203.058594 241.359375 C 203.050781 241.367188 203.042969 241.378906 203.035156 241.386719 C 203.035156 241.390625 203.03125 241.390625 203.03125 241.390625 C 203.023438 241.402344 203.015625 241.414062 203.007812 241.421875 C 203.007812 241.421875 203.003906 241.421875 203.003906 241.425781 C 202.996094 241.433594 202.988281 241.445312 202.980469 241.453125 C 202.980469 241.453125 202.980469 241.453125 202.980469 241.457031 C 202.96875 241.464844 202.964844 241.476562 202.953125 241.484375 C 202.953125 241.488281 202.953125 241.488281 202.953125 241.488281 C 202.933594 241.507812 202.917969 241.53125 202.902344 241.550781 C 202.902344 241.550781 202.898438 241.550781 202.898438 241.550781 C 202.894531 241.558594 202.890625 241.5625 202.886719 241.570312 C 202.878906 241.578125 202.867188 241.589844 202.859375 241.601562 C 202.851562 241.609375 202.84375 241.621094 202.835938 241.632812 C 202.832031 241.632812 202.832031 241.636719 202.832031 241.636719 C 202.824219 241.644531 202.816406 241.65625 202.808594 241.664062 C 202.808594 241.667969 202.804688 241.667969 202.804688 241.667969 C 202.796875 241.679688 202.789062 241.6875 202.78125 241.699219 C 202.78125 241.699219 202.78125 241.699219 202.777344 241.699219 C 202.746094 241.738281 202.71875 241.773438 202.6875 241.8125 C 202.683594 241.8125 202.683594 241.816406 202.679688 241.816406 C 202.671875 241.828125 202.667969 241.832031 202.660156 241.84375 C 202.660156 241.84375 202.65625 241.847656 202.65625 241.847656 C 202.648438 241.855469 202.640625 241.867188 202.632812 241.875 C 202.632812 241.875 202.632812 241.878906 202.628906 241.878906 C 202.625 241.890625 202.613281 241.898438 202.605469 241.90625 C 202.605469 241.910156 202.605469 241.910156 202.601562 241.914062 C 202.59375 241.921875 202.589844 241.929688 202.578125 241.941406 C 202.578125 241.941406 202.578125 241.941406 202.578125 241.945312 C 202.546875 241.980469 202.515625 242.019531 202.484375 242.054688 C 202.484375 242.058594 202.484375 242.058594 202.480469 242.058594 C 202.472656 242.070312 202.464844 242.078125 202.457031 242.085938 C 202.457031 242.089844 202.457031 242.089844 202.453125 242.09375 C 202.449219 242.101562 202.4375 242.113281 202.433594 242.121094 C 202.429688 242.121094 202.429688 242.125 202.429688 242.125 C 202.421875 242.136719 202.414062 242.144531 202.40625 242.152344 C 202.402344 242.15625 202.402344 242.15625 202.402344 242.15625 C 202.378906 242.183594 202.359375 242.210938 202.335938 242.238281 C 202.328125 242.25 202.320312 242.257812 202.3125 242.269531 C 202.308594 242.273438 202.308594 242.273438 202.304688 242.277344 C 202.300781 242.285156 202.292969 242.292969 202.285156 242.300781 C 202.285156 242.304688 202.28125 242.304688 202.28125 242.308594 C 202.273438 242.316406 202.265625 242.324219 202.261719 242.332031 C 202.257812 242.335938 202.253906 242.339844 202.253906 242.339844 C 202.246094 242.347656 202.242188 242.355469 202.234375 242.363281 C 202.230469 242.367188 202.230469 242.371094 202.226562 242.371094 C 202.222656 242.378906 202.214844 242.386719 202.207031 242.398438 C 202.207031 242.398438 202.203125 242.402344 202.203125 242.402344 C 202.179688 242.429688 202.160156 242.457031 202.136719 242.484375 C 202.136719 242.484375 202.136719 242.484375 202.132812 242.484375 C 202.125 242.496094 202.117188 242.503906 202.109375 242.515625 C 202.109375 242.515625 202.109375 242.519531 202.105469 242.519531 C 202.097656 242.53125 202.089844 242.539062 202.085938 242.546875 C 202.082031 242.550781 202.082031 242.550781 202.078125 242.554688 C 202.074219 242.5625 202.066406 242.570312 202.058594 242.578125 C 202.058594 242.582031 202.054688 242.585938 202.050781 242.585938 C 202.046875 242.59375 202.039062 242.601562 202.035156 242.609375 C 202.03125 242.613281 202.03125 242.617188 202.027344 242.617188 C 202.019531 242.628906 202.015625 242.632812 202.007812 242.640625 C 202.003906 242.644531 202.003906 242.648438 202 242.652344 C 201.996094 242.65625 201.992188 242.660156 201.988281 242.664062 C 201.984375 242.667969 201.984375 242.671875 201.980469 242.675781 C 201.976562 242.683594 201.96875 242.691406 201.960938 242.695312 C 201.960938 242.699219 201.957031 242.703125 201.953125 242.707031 C 201.949219 242.714844 201.945312 242.722656 201.9375 242.726562 C 201.933594 242.730469 201.929688 242.734375 201.925781 242.738281 C 201.921875 242.746094 201.917969 242.753906 201.914062 242.757812 C 201.910156 242.761719 201.90625 242.765625 201.902344 242.769531 C 201.898438 242.777344 201.890625 242.785156 201.886719 242.789062 C 201.882812 242.792969 201.882812 242.796875 201.878906 242.800781 C 201.871094 242.808594 201.867188 242.8125 201.863281 242.820312 C 201.859375 242.824219 201.855469 242.828125 201.851562 242.832031 C 201.847656 242.835938 201.84375 242.84375 201.839844 242.847656 C 201.835938 242.855469 201.832031 242.859375 201.824219 242.867188 C 201.824219 242.871094 201.820312 242.875 201.816406 242.878906 C 201.8125 242.886719 201.804688 242.890625 201.800781 242.898438 C 201.796875 242.902344 201.796875 242.90625 201.792969 242.910156 C 201.785156 242.917969 201.78125 242.921875 201.777344 242.929688 C 201.773438 242.933594 201.769531 242.9375 201.765625 242.945312 C 201.761719 242.949219 201.757812 242.953125 201.753906 242.957031 C 201.75 242.964844 201.746094 242.96875 201.738281 242.972656 C 201.734375 242.980469 201.730469 242.984375 201.726562 242.988281 C 201.722656 242.996094 201.71875 243 201.714844 243.003906 C 201.710938 243.011719 201.707031 243.015625 201.703125 243.019531 C 201.699219 243.023438 201.695312 243.03125 201.6875 243.035156 C 201.683594 243.042969 201.679688 243.046875 201.679688 243.050781 C 201.671875 243.054688 201.671875 243.058594 201.664062 243.066406 C 201.660156 243.070312 201.65625 243.078125 201.652344 243.082031 C 201.648438 243.085938 201.644531 243.089844 201.644531 243.09375 C 201.636719 243.097656 201.632812 243.105469 201.625 243.113281 C 201.625 243.117188 201.621094 243.121094 201.617188 243.125 C 201.613281 243.128906 201.605469 243.136719 201.601562 243.144531 C 201.597656 243.148438 201.59375 243.152344 201.59375 243.15625 C 201.585938 243.160156 201.582031 243.167969 201.578125 243.175781 C 201.570312 243.179688 201.570312 243.179688 201.566406 243.1875 C 201.5625 243.191406 201.558594 243.199219 201.550781 243.207031 C 201.550781 243.210938 201.542969 243.214844 201.542969 243.21875 C 201.535156 243.222656 201.535156 243.230469 201.527344 243.234375 C 201.523438 243.242188 201.523438 243.242188 201.515625 243.25 C 201.511719 243.253906 201.507812 243.261719 201.503906 243.265625 C 201.5 243.269531 201.496094 243.277344 201.492188 243.28125 C 201.488281 243.285156 201.484375 243.292969 201.480469 243.296875 C 201.476562 243.300781 201.472656 243.304688 201.46875 243.308594 C 201.464844 243.316406 201.457031 243.324219 201.453125 243.328125 C 201.449219 243.332031 201.445312 243.335938 201.445312 243.339844 C 201.441406 243.347656 201.433594 243.355469 201.429688 243.363281 C 201.425781 243.363281 201.421875 243.371094 201.421875 243.371094 C 201.414062 243.378906 201.40625 243.386719 201.402344 243.394531 C 201.402344 243.394531 201.398438 243.402344 201.394531 243.402344 C 201.390625 243.410156 201.382812 243.417969 201.378906 243.425781 C 201.375 243.425781 201.371094 243.433594 201.371094 243.433594 C 201.367188 243.441406 201.359375 243.449219 201.355469 243.457031 C 201.351562 243.457031 201.347656 243.460938 201.347656 243.464844 C 201.34375 243.472656 201.335938 243.476562 201.332031 243.484375 C 201.328125 243.488281 201.328125 243.492188 201.324219 243.496094 C 201.316406 243.5 201.3125 243.507812 201.308594 243.515625 C 201.304688 243.519531 201.304688 243.519531 201.300781 243.523438 C 201.292969 243.53125 201.289062 243.539062 201.28125 243.546875 C 201.28125 243.550781 201.277344 243.554688 201.273438 243.554688 C 201.269531 243.5625 201.261719 243.570312 201.253906 243.578125 C 201.253906 243.582031 201.25 243.585938 201.25 243.585938 C 201.242188 243.59375 201.238281 243.601562 201.230469 243.609375 C 201.230469 243.613281 201.226562 243.617188 201.222656 243.621094 C 201.21875 243.625 201.210938 243.632812 201.207031 243.644531 C 201.203125 243.644531 201.203125 243.648438 201.199219 243.652344 C 201.191406 243.65625 201.1875 243.664062 201.183594 243.671875 C 201.179688 243.675781 201.175781 243.679688 201.175781 243.683594 C 201.167969 243.691406 201.164062 243.695312 201.15625 243.707031 C 201.15625 243.707031 201.152344 243.710938 201.152344 243.710938 C 201.148438 243.71875 201.140625 243.726562 201.132812 243.734375 C 201.132812 243.738281 201.128906 243.738281 201.128906 243.742188 C 201.121094 243.75 201.117188 243.757812 201.109375 243.765625 C 201.109375 243.769531 201.105469 243.773438 201.105469 243.773438 C 201.097656 243.78125 201.089844 243.789062 201.085938 243.800781 C 201.082031 243.800781 201.082031 243.804688 201.078125 243.804688 C 201.074219 243.816406 201.066406 243.824219 201.058594 243.832031 C 201.058594 243.832031 201.054688 243.835938 201.054688 243.835938 C 201.046875 243.847656 201.039062 243.855469 201.035156 243.863281 C 201.03125 243.863281 201.03125 243.867188 201.03125 243.867188 C 201.023438 243.878906 201.015625 243.886719 201.007812 243.894531 C 201.007812 243.898438 201.007812 243.898438 201.007812 243.898438 C 201 243.910156 200.992188 243.917969 200.984375 243.929688 C 200.976562 243.9375 200.96875 243.945312 200.960938 243.957031 C 200.960938 243.957031 200.957031 243.960938 200.957031 243.964844 C 200.949219 243.972656 200.945312 243.980469 200.9375 243.984375 C 200.9375 243.984375 200.933594 243.992188 200.933594 243.992188 C 200.925781 244.003906 200.917969 244.011719 200.910156 244.019531 C 200.910156 244.023438 200.910156 244.019531 200.910156 244.023438 C 200.902344 244.03125 200.894531 244.039062 200.890625 244.046875 C 200.886719 244.050781 200.886719 244.050781 200.882812 244.054688 C 200.878906 244.0625 200.871094 244.070312 200.863281 244.078125 L 200.863281 244.082031 C 200.855469 244.09375 200.847656 244.101562 200.839844 244.109375 L 200.835938 244.113281 C 200.828125 244.121094 200.824219 244.132812 200.816406 244.140625 C 200.816406 244.140625 200.8125 244.144531 200.8125 244.144531 C 200.804688 244.15625 200.796875 244.164062 200.792969 244.171875 C 200.789062 244.171875 200.792969 244.171875 200.789062 244.175781 C 200.78125 244.183594 200.773438 244.195312 200.765625 244.203125 C 200.765625 244.207031 200.765625 244.207031 200.765625 244.207031 C 200.757812 244.21875 200.75 244.226562 200.746094 244.234375 C 200.742188 244.234375 200.742188 244.234375 200.742188 244.238281 C 200.726562 244.257812 200.710938 244.277344 200.695312 244.296875 C 200.695312 244.296875 200.695312 244.300781 200.691406 244.300781 C 200.683594 244.3125 200.679688 244.320312 200.671875 244.328125 L 200.667969 244.332031 C 200.660156 244.339844 200.652344 244.351562 200.644531 244.363281 C 200.636719 244.371094 200.628906 244.378906 200.621094 244.390625 L 200.621094 244.394531 C 200.613281 244.402344 200.605469 244.410156 200.597656 244.421875 C 200.589844 244.433594 200.582031 244.441406 200.574219 244.453125 C 200.566406 244.464844 200.558594 244.472656 200.550781 244.480469 C 200.546875 244.484375 200.546875 244.484375 200.546875 244.488281 C 200.53125 244.503906 200.515625 244.523438 200.5 244.546875 C 200.5 244.546875 200.5 244.546875 200.5 244.550781 C 200.492188 244.558594 200.484375 244.566406 200.476562 244.578125 C 200.460938 244.597656 200.445312 244.617188 200.429688 244.640625 L 200.425781 244.640625 C 200.417969 244.652344 200.410156 244.660156 200.402344 244.671875 C 200.386719 244.691406 200.371094 244.710938 200.355469 244.730469 L 200.351562 244.734375 C 200.328125 244.765625 200.304688 244.792969 200.28125 244.824219 C 200.265625 244.847656 200.25 244.867188 200.234375 244.886719 C 200.226562 244.898438 200.21875 244.90625 200.210938 244.917969 C 200.207031 244.917969 200.210938 244.917969 200.207031 244.917969 C 200.191406 244.941406 200.175781 244.960938 200.160156 244.980469 C 199.042969 246.425781 197.96875 247.882812 196.933594 249.347656 C 196.457031 248.402344 195.976562 247.460938 195.476562 246.515625 C 196.796875 244.667969 198.160156 242.828125 199.597656 241.011719 C 225.238281 208.53125 260.257812 192.84375 280.554688 203.835938 C 280.628906 203.875 280.699219 203.921875 280.773438 203.964844 C 281.996094 204.640625 283.167969 205.402344 284.277344 206.277344 C 303.757812 221.65625 297.433594 262.140625 270.148438 296.703125 C 249.238281 323.179688 222.109375 338.480469 201.796875 337.285156 Z M 260.277344 207.632812 C 260.277344 207.570312 260.222656 207.515625 260.160156 207.515625 C 260.152344 207.515625 260.148438 207.515625 260.144531 207.515625 C 260.140625 207.515625 260.140625 207.515625 260.136719 207.515625 C 260.132812 207.515625 260.128906 207.515625 260.125 207.515625 C 260.125 207.515625 260.121094 207.515625 260.121094 207.515625 C 260.113281 207.515625 260.109375 207.515625 260.105469 207.515625 C 260.101562 207.515625 260.101562 207.515625 260.101562 207.515625 C 260.097656 207.515625 260.09375 207.515625 260.089844 207.515625 C 260.085938 207.515625 260.085938 207.515625 260.082031 207.515625 C 260.078125 207.515625 260.074219 207.515625 260.066406 207.515625 C 260.066406 207.515625 260.066406 207.515625 260.0625 207.515625 C 260.058594 207.515625 260.054688 207.515625 260.050781 207.515625 C 260.050781 207.515625 260.046875 207.515625 260.046875 207.515625 C 260.042969 207.515625 260.035156 207.515625 260.03125 207.515625 C 260.023438 207.515625 260.019531 207.515625 260.015625 207.515625 C 260.011719 207.515625 260.011719 207.515625 260.007812 207.515625 C 260.003906 207.515625 260 207.515625 259.996094 207.515625 C 259.996094 207.515625 259.992188 207.515625 259.992188 207.515625 C 259.984375 207.515625 259.980469 207.515625 259.976562 207.515625 C 259.972656 207.515625 259.972656 207.515625 259.96875 207.515625 C 259.964844 207.515625 259.960938 207.515625 259.957031 207.515625 C 259.957031 207.515625 259.953125 207.515625 259.953125 207.515625 C 259.949219 207.515625 259.941406 207.515625 259.9375 207.515625 C 259.9375 207.515625 259.933594 207.515625 259.933594 207.515625 C 259.929688 207.515625 259.925781 207.515625 259.921875 207.515625 C 259.917969 207.515625 259.917969 207.515625 259.914062 207.515625 C 259.910156 207.515625 259.90625 207.515625 259.902344 207.515625 C 259.902344 207.515625 259.898438 207.515625 259.898438 207.515625 C 259.894531 207.515625 259.886719 207.515625 259.882812 207.515625 C 259.878906 207.515625 259.878906 207.515625 259.875 207.515625 C 259.871094 207.515625 259.867188 207.515625 259.867188 207.515625 C 259.863281 207.515625 259.863281 207.515625 259.859375 207.515625 C 259.855469 207.515625 259.847656 207.515625 259.84375 207.515625 C 259.84375 207.515625 259.839844 207.515625 259.839844 207.515625 C 259.835938 207.515625 259.832031 207.515625 259.828125 207.515625 C 259.828125 207.515625 259.824219 207.515625 259.820312 207.515625 C 259.820312 207.515625 259.816406 207.515625 259.8125 207.515625 C 259.808594 207.515625 259.804688 207.515625 259.800781 207.515625 C 259.796875 207.515625 259.796875 207.515625 259.792969 207.515625 C 259.789062 207.515625 259.785156 207.515625 259.78125 207.515625 C 259.78125 207.515625 259.777344 207.515625 259.773438 207.515625 C 259.773438 207.515625 259.769531 207.515625 259.765625 207.515625 C 259.761719 207.515625 259.757812 207.515625 259.753906 207.515625 C 259.75 207.515625 259.746094 207.515625 259.746094 207.515625 C 259.742188 207.515625 259.738281 207.515625 259.738281 207.515625 C 259.734375 207.515625 259.730469 207.515625 259.730469 207.515625 C 259.726562 207.515625 259.722656 207.515625 259.71875 207.515625 C 259.714844 207.515625 259.710938 207.515625 259.707031 207.515625 C 259.703125 207.515625 259.699219 207.515625 259.699219 207.515625 C 259.695312 207.515625 259.691406 207.515625 259.691406 207.515625 C 259.6875 207.515625 259.683594 207.515625 259.683594 207.515625 C 259.675781 207.515625 259.671875 207.515625 259.667969 207.515625 C 259.664062 207.515625 259.664062 207.515625 259.660156 207.515625 C 259.65625 207.515625 259.65625 207.515625 259.652344 207.515625 C 259.648438 207.515625 259.648438 207.515625 259.644531 207.515625 C 259.640625 207.515625 259.640625 207.515625 259.636719 207.515625 C 259.632812 207.515625 259.628906 207.515625 259.628906 207.515625 C 259.621094 207.515625 259.617188 207.515625 259.613281 207.515625 C 259.609375 207.515625 259.609375 207.515625 259.605469 207.515625 C 259.605469 207.515625 259.597656 207.515625 259.597656 207.515625 C 259.59375 207.515625 259.59375 207.515625 259.59375 207.515625 C 259.585938 207.515625 259.578125 207.515625 259.570312 207.515625 C 259.5625 207.515625 259.5625 207.515625 259.558594 207.515625 C 259.554688 207.515625 259.554688 207.515625 259.554688 207.515625 C 259.542969 207.515625 259.53125 207.515625 259.519531 207.515625 C 259.519531 207.515625 259.515625 207.515625 259.515625 207.515625 C 259.503906 207.515625 259.488281 207.515625 259.480469 207.519531 C 259.476562 207.519531 259.476562 207.519531 259.476562 207.519531 C 259.472656 207.519531 259.46875 207.519531 259.464844 207.519531 C 259.460938 207.519531 259.460938 207.519531 259.460938 207.519531 C 259.453125 207.519531 259.445312 207.519531 259.4375 207.519531 C 259.433594 207.519531 259.429688 207.519531 259.425781 207.519531 C 259.421875 207.519531 259.421875 207.519531 259.421875 207.519531 C 259.410156 207.519531 259.394531 207.519531 259.386719 207.519531 C 259.382812 207.519531 259.382812 207.519531 259.382812 207.519531 C 259.378906 207.519531 259.375 207.519531 259.371094 207.519531 C 259.359375 207.519531 259.355469 207.519531 259.34375 207.519531 C 259.339844 207.519531 259.335938 207.519531 259.332031 207.519531 C 259.328125 207.519531 259.328125 207.519531 259.328125 207.519531 C 259.316406 207.519531 259.304688 207.519531 259.292969 207.519531 L 259.289062 207.519531 C 259.277344 207.519531 259.265625 207.523438 259.25 207.523438 C 259.230469 207.523438 259.214844 207.523438 259.199219 207.523438 C 246.65625 207.855469 231.675781 214.652344 217.726562 226.484375 C 217.675781 226.527344 217.671875 226.601562 217.714844 226.648438 C 217.738281 226.675781 217.769531 226.691406 217.804688 226.691406 C 217.832031 226.691406 217.855469 226.683594 217.878906 226.664062 C 232.054688 214.640625 247.464844 207.746094 260.160156 207.746094 C 260.222656 207.753906 260.277344 207.699219 260.277344 207.632812 Z M 276.636719 213.011719 C 283.933594 218.773438 287.441406 228.941406 286.523438 241.644531 C 286.519531 241.710938 286.570312 241.765625 286.632812 241.773438 C 286.636719 241.773438 286.640625 241.773438 286.644531 241.773438 C 286.703125 241.773438 286.757812 241.726562 286.761719 241.664062 C 286.789062 241.28125 286.8125 240.902344 286.832031 240.527344 L 286.832031 240.523438 C 286.832031 240.519531 286.832031 240.511719 286.832031 240.507812 C 286.835938 240.46875 286.835938 240.433594 286.839844 240.398438 C 286.839844 240.394531 286.839844 240.386719 286.839844 240.382812 L 286.839844 240.378906 C 286.839844 240.375 286.839844 240.371094 286.839844 240.363281 L 286.839844 240.359375 C 286.84375 240.320312 286.84375 240.28125 286.847656 240.238281 C 286.847656 240.234375 286.847656 240.238281 286.847656 240.238281 C 286.847656 240.230469 286.847656 240.226562 286.847656 240.222656 L 286.847656 240.21875 C 286.847656 240.214844 286.847656 240.207031 286.847656 240.203125 C 286.847656 240.199219 286.847656 240.203125 286.847656 240.199219 C 286.851562 240.164062 286.851562 240.128906 286.855469 240.09375 C 286.855469 240.089844 286.855469 240.085938 286.855469 240.078125 L 286.855469 240.074219 C 286.855469 240.070312 286.855469 240.066406 286.855469 240.058594 C 286.855469 240.050781 286.855469 240.046875 286.855469 240.039062 C 286.859375 240.011719 286.859375 239.980469 286.859375 239.953125 C 286.859375 239.953125 286.859375 239.953125 286.859375 239.949219 C 286.859375 239.945312 286.859375 239.941406 286.863281 239.9375 C 286.863281 239.933594 286.863281 239.933594 286.863281 239.933594 C 286.863281 239.925781 286.863281 239.921875 286.863281 239.917969 L 286.863281 239.914062 C 286.863281 239.910156 286.863281 239.902344 286.863281 239.898438 C 286.863281 239.867188 286.863281 239.839844 286.867188 239.808594 C 286.867188 239.804688 286.867188 239.800781 286.867188 239.792969 C 286.867188 239.792969 286.867188 239.789062 286.867188 239.789062 C 286.867188 239.785156 286.867188 239.777344 286.867188 239.773438 C 286.867188 239.765625 286.867188 239.761719 286.871094 239.757812 C 286.871094 239.753906 286.871094 239.753906 286.871094 239.753906 C 286.871094 239.75 286.871094 239.742188 286.871094 239.738281 C 286.871094 239.714844 286.871094 239.691406 286.875 239.667969 L 286.875 239.664062 C 286.875 239.660156 286.875 239.65625 286.875 239.652344 C 286.875 239.648438 286.875 239.648438 286.875 239.644531 C 286.875 239.640625 286.875 239.636719 286.875 239.632812 C 286.875 239.628906 286.875 239.628906 286.875 239.628906 C 286.875 239.621094 286.875 239.617188 286.875 239.613281 C 286.875 239.613281 286.875 239.609375 286.875 239.609375 C 286.875 239.605469 286.875 239.601562 286.875 239.59375 C 286.875 239.59375 286.875 239.59375 286.875 239.589844 C 286.875 239.585938 286.875 239.582031 286.875 239.574219 C 286.878906 239.550781 286.878906 239.53125 286.878906 239.507812 C 286.878906 239.507812 286.878906 239.503906 286.878906 239.503906 C 286.878906 239.496094 286.878906 239.492188 286.878906 239.488281 C 286.878906 239.488281 286.878906 239.484375 286.878906 239.484375 C 286.878906 239.480469 286.878906 239.476562 286.878906 239.472656 C 286.878906 239.46875 286.878906 239.46875 286.878906 239.464844 C 286.878906 239.460938 286.878906 239.457031 286.878906 239.453125 C 286.878906 239.449219 286.878906 239.449219 286.878906 239.449219 C 286.878906 239.441406 286.878906 239.4375 286.878906 239.433594 C 286.878906 239.433594 286.878906 239.429688 286.878906 239.429688 C 286.878906 239.414062 286.878906 239.398438 286.878906 239.386719 C 286.878906 239.382812 286.878906 239.382812 286.878906 239.378906 C 286.878906 239.375 286.878906 239.371094 286.878906 239.367188 C 286.878906 239.367188 286.878906 239.359375 286.878906 239.359375 C 286.878906 239.355469 286.878906 239.351562 286.878906 239.347656 C 286.878906 239.34375 286.878906 239.34375 286.878906 239.339844 C 286.878906 239.335938 286.878906 239.332031 286.878906 239.328125 C 286.878906 239.324219 286.878906 239.324219 286.878906 239.324219 C 286.878906 239.320312 286.878906 239.316406 286.878906 239.3125 C 286.878906 239.308594 286.878906 239.304688 286.878906 239.304688 C 286.878906 239.300781 286.878906 239.296875 286.878906 239.292969 C 286.878906 239.289062 286.878906 239.289062 286.878906 239.285156 C 286.878906 239.269531 286.882812 239.253906 286.882812 239.238281 C 286.882812 239.234375 286.882812 239.230469 286.882812 239.226562 C 286.882812 239.222656 286.882812 239.21875 286.882812 239.21875 C 286.882812 239.214844 286.882812 239.210938 286.882812 239.207031 C 286.882812 239.203125 286.882812 239.203125 286.882812 239.199219 C 286.882812 239.195312 286.882812 239.191406 286.882812 239.1875 C 286.882812 239.183594 286.882812 239.183594 286.882812 239.179688 C 286.882812 239.175781 286.882812 239.171875 286.882812 239.167969 C 286.882812 239.167969 286.882812 239.164062 286.882812 239.164062 C 286.882812 239.160156 286.882812 239.15625 286.882812 239.152344 C 286.882812 239.148438 286.882812 239.144531 286.882812 239.144531 C 286.882812 239.136719 286.882812 239.136719 286.882812 239.132812 L 286.882812 239.128906 C 286.882812 239.113281 286.882812 239.097656 286.882812 239.082031 C 286.882812 239.082031 286.882812 239.078125 286.882812 239.074219 C 286.882812 239.070312 286.882812 239.066406 286.882812 239.066406 C 286.882812 239.0625 286.882812 239.058594 286.882812 239.054688 C 286.882812 239.050781 286.882812 239.050781 286.882812 239.046875 C 286.882812 239.042969 286.882812 239.039062 286.882812 239.039062 C 286.882812 239.035156 286.882812 239.03125 286.882812 239.027344 C 286.882812 239.023438 286.882812 239.023438 286.882812 239.019531 C 286.882812 239.015625 286.882812 239.011719 286.882812 239.007812 C 286.882812 239.007812 286.882812 239.003906 286.882812 239 C 286.882812 238.996094 286.882812 238.992188 286.882812 238.988281 C 286.882812 238.988281 286.882812 238.984375 286.882812 238.984375 C 286.882812 238.96875 286.882812 238.957031 286.882812 238.941406 C 286.882812 238.941406 286.882812 238.9375 286.882812 238.933594 C 286.882812 238.929688 286.882812 238.929688 286.882812 238.925781 C 286.882812 238.921875 286.882812 238.917969 286.882812 238.914062 C 286.882812 238.910156 286.882812 238.910156 286.882812 238.90625 C 286.882812 238.902344 286.882812 238.902344 286.882812 238.898438 C 286.882812 238.894531 286.882812 238.890625 286.882812 238.886719 C 286.882812 238.882812 286.882812 238.882812 286.882812 238.878906 C 286.882812 238.875 286.882812 238.871094 286.882812 238.867188 C 286.882812 238.863281 286.882812 238.859375 286.882812 238.859375 C 286.882812 238.855469 286.882812 238.851562 286.882812 238.847656 C 286.882812 238.84375 286.882812 238.84375 286.882812 238.839844 C 286.882812 238.835938 286.882812 238.832031 286.882812 238.828125 C 286.882812 238.824219 286.882812 238.828125 286.882812 238.824219 C 286.882812 238.816406 286.882812 238.8125 286.882812 238.804688 C 286.882812 238.800781 286.882812 238.796875 286.882812 238.792969 C 286.882812 238.792969 286.882812 238.789062 286.882812 238.785156 C 286.882812 238.78125 286.882812 238.777344 286.882812 238.773438 C 286.882812 238.773438 286.882812 238.769531 286.882812 238.765625 C 286.882812 238.761719 286.882812 238.757812 286.882812 238.753906 C 286.882812 238.753906 286.882812 238.75 286.882812 238.746094 C 286.882812 238.742188 286.882812 238.742188 286.882812 238.738281 C 286.882812 238.734375 286.882812 238.730469 286.882812 238.726562 C 286.882812 238.722656 286.882812 238.71875 286.882812 238.71875 C 286.882812 238.714844 286.882812 238.710938 286.882812 238.707031 C 286.882812 238.703125 286.882812 238.703125 286.882812 238.699219 C 286.882812 238.695312 286.882812 238.691406 286.882812 238.691406 C 286.882812 238.683594 286.882812 238.683594 286.882812 238.679688 C 286.882812 238.675781 286.882812 238.671875 286.882812 238.667969 C 286.882812 238.664062 286.882812 238.65625 286.882812 238.652344 C 286.882812 238.652344 286.882812 238.648438 286.882812 238.648438 C 286.882812 238.644531 286.882812 238.640625 286.882812 238.636719 C 286.882812 238.632812 286.882812 238.628906 286.882812 238.625 C 286.882812 238.621094 286.882812 238.621094 286.882812 238.617188 C 286.882812 238.613281 286.882812 238.609375 286.882812 238.609375 C 286.882812 238.605469 286.882812 238.601562 286.882812 238.597656 C 286.882812 238.59375 286.882812 238.589844 286.882812 238.589844 C 286.882812 238.585938 286.882812 238.582031 286.882812 238.578125 C 286.882812 238.574219 286.882812 238.570312 286.882812 238.570312 C 286.882812 238.566406 286.882812 238.5625 286.882812 238.558594 C 286.882812 238.558594 286.882812 238.554688 286.882812 238.550781 C 286.882812 238.546875 286.882812 238.542969 286.882812 238.539062 C 286.882812 238.535156 286.882812 238.535156 286.882812 238.53125 C 286.882812 238.527344 286.882812 238.519531 286.882812 238.511719 C 286.882812 238.511719 286.882812 238.511719 286.882812 238.507812 C 286.882812 238.503906 286.882812 238.5 286.882812 238.492188 C 286.882812 238.492188 286.882812 238.488281 286.882812 238.488281 C 286.882812 238.484375 286.882812 238.480469 286.882812 238.476562 C 286.882812 238.472656 286.882812 238.46875 286.882812 238.46875 C 286.882812 238.464844 286.882812 238.460938 286.882812 238.457031 C 286.882812 238.453125 286.882812 238.453125 286.882812 238.449219 C 286.882812 238.445312 286.882812 238.4375 286.882812 238.4375 C 286.882812 238.433594 286.882812 238.429688 286.882812 238.429688 C 286.882812 238.425781 286.882812 238.421875 286.882812 238.417969 C 286.882812 238.414062 286.882812 238.410156 286.882812 238.410156 C 286.882812 238.40625 286.882812 238.402344 286.882812 238.398438 C 286.882812 238.394531 286.882812 238.394531 286.882812 238.390625 C 286.882812 238.378906 286.882812 238.367188 286.882812 238.351562 C 286.882812 238.351562 286.882812 238.347656 286.882812 238.347656 C 286.882812 238.34375 286.882812 238.339844 286.882812 238.332031 C 286.882812 238.332031 286.882812 238.332031 286.882812 238.328125 C 286.882812 238.324219 286.882812 238.320312 286.882812 238.316406 C 286.882812 238.3125 286.882812 238.308594 286.882812 238.308594 C 286.882812 238.304688 286.882812 238.296875 286.882812 238.296875 C 286.882812 238.292969 286.882812 238.292969 286.882812 238.289062 C 286.882812 238.285156 286.882812 238.277344 286.882812 238.277344 C 286.882812 238.273438 286.882812 238.269531 286.882812 238.269531 C 286.882812 238.265625 286.882812 238.261719 286.882812 238.253906 C 286.882812 238.253906 286.882812 238.25 286.882812 238.25 C 286.882812 238.238281 286.882812 238.226562 286.882812 238.210938 C 286.882812 238.210938 286.882812 238.210938 286.882812 238.207031 C 286.882812 238.203125 286.882812 238.199219 286.882812 238.195312 C 286.882812 238.191406 286.882812 238.1875 286.882812 238.1875 C 286.882812 238.183594 286.882812 238.175781 286.882812 238.171875 C 286.882812 238.171875 286.882812 238.167969 286.882812 238.167969 C 286.882812 238.164062 286.882812 238.15625 286.882812 238.15625 C 286.882812 238.152344 286.882812 238.148438 286.882812 238.148438 C 286.882812 238.144531 286.882812 238.140625 286.882812 238.136719 C 286.882812 238.132812 286.882812 238.132812 286.882812 238.128906 C 286.882812 238.125 286.882812 238.121094 286.882812 238.117188 C 286.882812 238.113281 286.882812 238.113281 286.882812 238.109375 C 286.882812 238.097656 286.882812 238.085938 286.882812 238.074219 C 286.882812 238.070312 286.882812 238.070312 286.882812 238.066406 C 286.882812 238.0625 286.882812 238.058594 286.882812 238.054688 C 286.882812 238.050781 286.882812 238.050781 286.882812 238.046875 C 286.882812 238.042969 286.882812 238.039062 286.882812 238.035156 C 286.882812 238.035156 286.882812 238.03125 286.882812 238.027344 C 286.882812 238.023438 286.882812 238.019531 286.882812 238.015625 C 286.882812 238.011719 286.882812 238.011719 286.882812 238.007812 C 286.882812 238.007812 286.882812 238 286.882812 237.996094 C 286.882812 237.996094 286.882812 237.992188 286.882812 237.988281 C 286.882812 237.984375 286.882812 237.980469 286.882812 237.976562 C 286.882812 237.972656 286.882812 237.972656 286.882812 237.972656 C 286.882812 237.964844 286.882812 237.960938 286.882812 237.953125 C 286.882812 237.945312 286.882812 237.941406 286.882812 237.933594 C 286.882812 237.933594 286.882812 237.933594 286.882812 237.929688 C 286.882812 237.925781 286.882812 237.921875 286.882812 237.914062 C 286.882812 237.914062 286.882812 237.910156 286.882812 237.90625 C 286.882812 237.90625 286.882812 237.898438 286.882812 237.894531 C 286.882812 237.894531 286.882812 237.890625 286.882812 237.886719 C 286.882812 237.882812 286.882812 237.878906 286.882812 237.878906 C 286.882812 237.875 286.882812 237.871094 286.882812 237.871094 C 286.882812 237.867188 286.882812 237.859375 286.882812 237.859375 C 286.882812 237.855469 286.882812 237.851562 286.882812 237.851562 C 286.882812 237.847656 286.882812 237.84375 286.882812 237.839844 C 286.882812 237.835938 286.882812 237.835938 286.882812 237.832031 C 286.882812 237.824219 286.882812 237.820312 286.882812 237.816406 C 286.882812 237.800781 286.882812 237.789062 286.882812 237.777344 C 286.882812 237.773438 286.882812 237.773438 286.882812 237.769531 C 286.882812 237.765625 286.882812 237.761719 286.882812 237.757812 C 286.882812 237.753906 286.882812 237.753906 286.882812 237.75 C 286.882812 237.746094 286.882812 237.742188 286.882812 237.738281 C 286.882812 237.734375 286.882812 237.734375 286.882812 237.730469 C 286.882812 237.730469 286.882812 237.722656 286.882812 237.71875 C 286.882812 237.71875 286.882812 237.714844 286.882812 237.714844 C 286.882812 237.710938 286.882812 237.703125 286.882812 237.699219 C 286.882812 237.695312 286.882812 237.695312 286.882812 237.695312 C 286.882812 237.6875 286.882812 237.683594 286.882812 237.679688 C 286.882812 237.675781 286.882812 237.675781 286.882812 237.675781 C 286.882812 237.664062 286.882812 237.652344 286.882812 237.636719 C 286.882812 237.628906 286.882812 237.625 286.882812 237.617188 C 286.882812 237.617188 286.882812 237.617188 286.882812 237.613281 C 286.882812 237.609375 286.882812 237.605469 286.882812 237.601562 C 286.882812 237.597656 286.882812 237.59375 286.882812 237.59375 C 286.882812 237.589844 286.882812 237.585938 286.882812 237.582031 C 286.882812 237.578125 286.882812 237.574219 286.882812 237.574219 C 286.882812 237.570312 286.882812 237.5625 286.882812 237.5625 C 286.882812 237.558594 286.882812 237.554688 286.882812 237.554688 C 286.882812 237.546875 286.882812 237.546875 286.882812 237.539062 C 286.882812 237.539062 286.882812 237.539062 286.882812 237.535156 C 286.882812 237.53125 286.882812 237.523438 286.882812 237.519531 C 286.882812 237.515625 286.882812 237.519531 286.882812 237.515625 C 286.882812 237.503906 286.882812 237.492188 286.882812 237.476562 C 286.882812 237.476562 286.882812 237.476562 286.882812 237.472656 C 286.882812 237.46875 286.882812 237.464844 286.882812 237.460938 C 286.882812 237.457031 286.882812 237.457031 286.882812 237.453125 C 286.882812 237.453125 286.882812 237.445312 286.882812 237.441406 C 286.882812 237.4375 286.882812 237.433594 286.882812 237.433594 C 286.882812 237.429688 286.882812 237.425781 286.882812 237.421875 C 286.882812 237.417969 286.882812 237.417969 286.882812 237.417969 C 286.882812 237.410156 286.882812 237.40625 286.882812 237.398438 C 286.882812 237.378906 286.882812 237.359375 286.882812 237.339844 C 286.882812 237.335938 286.882812 237.339844 286.882812 237.335938 C 286.882812 237.332031 286.882812 237.328125 286.882812 237.320312 C 286.882812 237.316406 286.882812 237.316406 286.882812 237.316406 C 286.882812 237.308594 286.882812 237.308594 286.882812 237.300781 C 286.882812 237.300781 286.882812 237.300781 286.882812 237.296875 C 286.882812 237.292969 286.882812 237.285156 286.882812 237.28125 C 286.882812 237.28125 286.882812 237.277344 286.882812 237.277344 C 286.882812 237.269531 286.882812 237.265625 286.882812 237.261719 L 286.882812 237.257812 C 286.882812 237.234375 286.882812 237.207031 286.882812 237.179688 C 286.882812 237.175781 286.882812 237.167969 286.882812 237.164062 C 286.882812 237.160156 286.882812 237.160156 286.882812 237.160156 C 286.882812 237.152344 286.882812 237.148438 286.882812 237.144531 C 286.882812 237.140625 286.882812 237.140625 286.882812 237.140625 C 286.882812 237.132812 286.882812 237.128906 286.882812 237.121094 C 286.882812 237.09375 286.882812 237.070312 286.882812 237.042969 C 286.882812 237.035156 286.882812 237.03125 286.882812 237.023438 C 286.882812 237.015625 286.882812 237.011719 286.882812 237.003906 C 286.882812 236.996094 286.882812 236.992188 286.882812 236.984375 C 286.882812 236.976562 286.882812 236.972656 286.882812 236.964844 C 286.882812 236.945312 286.882812 236.925781 286.882812 236.90625 C 286.882812 236.898438 286.882812 236.890625 286.882812 236.886719 C 286.882812 236.886719 286.882812 236.882812 286.882812 236.882812 C 286.882812 236.875 286.882812 236.871094 286.882812 236.867188 C 286.882812 236.863281 286.882812 236.863281 286.882812 236.863281 C 286.882812 236.855469 286.882812 236.855469 286.882812 236.847656 C 286.882812 236.847656 286.882812 236.847656 286.882812 236.84375 C 286.882812 236.839844 286.882812 236.832031 286.882812 236.828125 L 286.882812 236.824219 C 286.882812 236.800781 286.878906 236.773438 286.878906 236.75 C 286.878906 236.746094 286.878906 236.746094 286.878906 236.746094 C 286.878906 236.738281 286.878906 236.734375 286.878906 236.730469 C 286.878906 236.726562 286.878906 236.726562 286.878906 236.726562 C 286.878906 236.71875 286.878906 236.714844 286.878906 236.710938 C 286.878906 236.707031 286.878906 236.710938 286.878906 236.707031 C 286.878906 236.703125 286.878906 236.695312 286.878906 236.691406 C 286.878906 236.6875 286.878906 236.691406 286.878906 236.6875 C 286.878906 236.660156 286.878906 236.636719 286.878906 236.609375 C 286.878906 236.601562 286.878906 236.597656 286.878906 236.59375 C 286.878906 236.589844 286.878906 236.589844 286.878906 236.589844 C 286.878906 236.585938 286.878906 236.578125 286.878906 236.574219 C 286.878906 236.570312 286.878906 236.570312 286.878906 236.570312 C 286.878906 236.5625 286.878906 236.558594 286.878906 236.554688 L 286.878906 236.550781 C 286.875 236.527344 286.875 236.5 286.875 236.472656 C 286.875 236.464844 286.875 236.460938 286.875 236.457031 C 286.875 236.453125 286.875 236.453125 286.875 236.453125 C 286.875 236.445312 286.875 236.441406 286.875 236.433594 C 286.875 236.425781 286.875 236.421875 286.875 236.417969 C 286.875 236.414062 286.875 236.414062 286.875 236.414062 C 286.875 236.40625 286.875 236.402344 286.875 236.394531 C 286.875 236.375 286.875 236.355469 286.875 236.335938 C 286.875 236.335938 286.875 236.335938 286.875 236.332031 C 286.875 236.328125 286.875 236.324219 286.875 236.316406 C 286.875 236.316406 286.875 236.3125 286.875 236.3125 C 286.875 236.304688 286.875 236.304688 286.875 236.296875 C 286.875 236.296875 286.875 236.296875 286.875 236.292969 C 286.875 236.289062 286.875 236.285156 286.875 236.277344 C 286.875 236.277344 286.875 236.273438 286.875 236.273438 C 286.875 236.269531 286.875 236.265625 286.871094 236.257812 C 286.871094 236.257812 286.871094 236.253906 286.871094 236.253906 C 286.871094 236.230469 286.871094 236.203125 286.871094 236.175781 C 286.871094 236.167969 286.871094 236.164062 286.871094 236.15625 C 286.871094 236.148438 286.871094 236.144531 286.867188 236.140625 C 286.867188 236.136719 286.867188 236.136719 286.867188 236.136719 C 286.867188 236.128906 286.867188 236.125 286.867188 236.117188 C 286.867188 236.085938 286.867188 236.054688 286.863281 236.019531 C 286.863281 236.011719 286.863281 236.007812 286.863281 236 C 286.863281 235.992188 286.863281 235.988281 286.863281 235.984375 L 286.863281 235.980469 C 286.863281 235.941406 286.859375 235.90625 286.859375 235.867188 C 286.859375 235.863281 286.859375 235.863281 286.859375 235.863281 C 286.859375 235.855469 286.859375 235.851562 286.859375 235.847656 C 286.855469 235.800781 286.855469 235.757812 286.855469 235.710938 C 286.851562 235.664062 286.851562 235.621094 286.847656 235.574219 C 286.847656 235.566406 286.847656 235.5625 286.847656 235.554688 C 286.671875 231.46875 285.980469 227.675781 284.765625 224.28125 C 284.75 224.238281 284.734375 224.195312 284.71875 224.152344 C 284.707031 224.113281 284.691406 224.078125 284.679688 224.039062 C 284.675781 224.035156 284.675781 224.03125 284.671875 224.027344 L 284.671875 224.023438 C 284.660156 223.992188 284.648438 223.960938 284.636719 223.929688 C 284.636719 223.921875 284.632812 223.917969 284.632812 223.914062 C 284.628906 223.90625 284.628906 223.902344 284.625 223.898438 C 284.617188 223.871094 284.605469 223.84375 284.597656 223.816406 C 284.59375 223.808594 284.59375 223.804688 284.589844 223.800781 C 284.589844 223.792969 284.585938 223.789062 284.585938 223.785156 C 284.574219 223.757812 284.566406 223.734375 284.554688 223.707031 C 284.550781 223.699219 284.550781 223.695312 284.550781 223.691406 L 284.550781 223.6875 C 284.546875 223.683594 284.546875 223.679688 284.542969 223.675781 C 284.53125 223.640625 284.519531 223.609375 284.507812 223.578125 C 284.488281 223.535156 284.472656 223.496094 284.457031 223.453125 C 284.445312 223.421875 284.433594 223.390625 284.421875 223.359375 L 284.421875 223.355469 C 284.417969 223.351562 284.417969 223.347656 284.414062 223.34375 L 284.414062 223.339844 C 284.414062 223.335938 284.410156 223.332031 284.410156 223.324219 C 284.398438 223.304688 284.390625 223.285156 284.382812 223.261719 C 284.382812 223.257812 284.378906 223.253906 284.378906 223.246094 C 284.375 223.242188 284.375 223.238281 284.371094 223.230469 C 284.367188 223.226562 284.367188 223.222656 284.363281 223.21875 C 284.363281 223.214844 284.363281 223.214844 284.363281 223.214844 C 284.355469 223.191406 284.34375 223.164062 284.332031 223.136719 C 284.332031 223.132812 284.328125 223.128906 284.328125 223.121094 C 284.324219 223.117188 284.324219 223.113281 284.324219 223.105469 C 284.308594 223.074219 284.296875 223.042969 284.285156 223.011719 C 284.28125 223.003906 284.28125 223 284.277344 222.996094 C 284.273438 222.988281 284.273438 222.984375 284.269531 222.980469 C 284.261719 222.953125 284.25 222.929688 284.238281 222.902344 C 284.234375 222.894531 284.234375 222.890625 284.230469 222.886719 C 284.230469 222.886719 284.230469 222.886719 284.230469 222.882812 C 284.230469 222.878906 284.226562 222.875 284.226562 222.871094 C 284.226562 222.871094 284.226562 222.871094 284.226562 222.867188 C 284.214844 222.84375 284.203125 222.816406 284.191406 222.792969 C 284.191406 222.792969 284.191406 222.792969 284.191406 222.789062 C 284.191406 222.785156 284.1875 222.78125 284.1875 222.777344 C 284.183594 222.777344 284.183594 222.773438 284.183594 222.773438 C 284.183594 222.769531 284.179688 222.765625 284.179688 222.761719 C 284.179688 222.761719 284.179688 222.757812 284.179688 222.757812 C 284.175781 222.753906 284.175781 222.75 284.171875 222.746094 C 284.171875 222.746094 284.171875 222.746094 284.171875 222.742188 C 284.164062 222.722656 284.15625 222.703125 284.144531 222.683594 C 284.144531 222.679688 284.144531 222.679688 284.144531 222.679688 C 284.144531 222.675781 284.140625 222.671875 284.140625 222.667969 C 284.140625 222.667969 284.136719 222.667969 284.136719 222.664062 C 284.136719 222.660156 284.136719 222.65625 284.132812 222.652344 C 284.132812 222.652344 284.132812 222.652344 284.132812 222.648438 C 284.128906 222.644531 284.128906 222.644531 284.125 222.636719 C 284.117188 222.613281 284.109375 222.59375 284.097656 222.574219 C 284.09375 222.566406 284.09375 222.566406 284.089844 222.558594 C 284.089844 222.558594 284.089844 222.558594 284.089844 222.554688 C 284.089844 222.550781 284.089844 222.550781 284.085938 222.542969 C 284.082031 222.535156 284.082031 222.535156 284.078125 222.527344 C 284.078125 222.523438 284.074219 222.519531 284.074219 222.515625 C 284.074219 222.511719 284.074219 222.511719 284.070312 222.511719 C 284.066406 222.496094 284.058594 222.480469 284.050781 222.464844 C 284.050781 222.460938 284.046875 222.457031 284.046875 222.449219 C 284.042969 222.445312 284.042969 222.441406 284.039062 222.4375 C 284.039062 222.433594 284.039062 222.433594 284.039062 222.433594 C 284.039062 222.429688 284.035156 222.425781 284.035156 222.421875 C 284.035156 222.417969 284.03125 222.417969 284.03125 222.417969 C 284.03125 222.414062 284.027344 222.410156 284.027344 222.40625 C 284.027344 222.402344 284.027344 222.402344 284.027344 222.402344 C 284.023438 222.398438 284.023438 222.394531 284.019531 222.386719 C 284.015625 222.378906 284.011719 222.367188 284.007812 222.355469 C 284.003906 222.351562 284.003906 222.347656 284 222.34375 C 284 222.34375 284 222.339844 284 222.339844 C 283.996094 222.335938 283.996094 222.332031 283.992188 222.328125 C 283.992188 222.328125 283.992188 222.324219 283.992188 222.324219 C 283.992188 222.320312 283.988281 222.320312 283.988281 222.3125 C 283.988281 222.3125 283.984375 222.3125 283.984375 222.3125 C 283.984375 222.308594 283.980469 222.304688 283.980469 222.296875 C 283.96875 222.277344 283.960938 222.257812 283.953125 222.238281 C 283.953125 222.234375 283.953125 222.234375 283.953125 222.234375 C 283.949219 222.230469 283.949219 222.226562 283.945312 222.222656 C 283.945312 222.222656 283.945312 222.222656 283.945312 222.21875 C 283.941406 222.214844 283.941406 222.210938 283.9375 222.207031 C 283.9375 222.207031 283.9375 222.203125 283.9375 222.203125 C 283.9375 222.199219 283.933594 222.195312 283.933594 222.191406 C 283.933594 222.191406 283.933594 222.191406 283.929688 222.191406 C 283.929688 222.1875 283.925781 222.179688 283.925781 222.175781 C 283.917969 222.160156 283.910156 222.144531 283.902344 222.128906 C 283.902344 222.125 283.898438 222.121094 283.898438 222.117188 C 283.898438 222.113281 283.894531 222.113281 283.894531 222.113281 C 283.894531 222.109375 283.890625 222.105469 283.890625 222.101562 C 283.890625 222.097656 283.890625 222.097656 283.890625 222.097656 C 283.886719 222.09375 283.886719 222.089844 283.882812 222.085938 C 283.882812 222.085938 283.882812 222.085938 283.882812 222.082031 C 283.882812 222.078125 283.878906 222.074219 283.878906 222.070312 C 283.871094 222.054688 283.863281 222.039062 283.855469 222.023438 C 283.855469 222.019531 283.851562 222.015625 283.851562 222.007812 C 283.851562 222.007812 283.847656 222.007812 283.847656 222.007812 C 283.847656 222 283.84375 222 283.84375 221.996094 C 283.84375 221.992188 283.84375 221.992188 283.84375 221.992188 C 283.839844 221.988281 283.839844 221.984375 283.835938 221.976562 C 283.832031 221.972656 283.832031 221.96875 283.828125 221.964844 C 283.828125 221.960938 283.828125 221.960938 283.828125 221.960938 C 283.820312 221.941406 283.8125 221.921875 283.800781 221.902344 C 283.800781 221.898438 283.800781 221.898438 283.800781 221.898438 C 283.796875 221.894531 283.796875 221.890625 283.792969 221.886719 C 283.792969 221.886719 283.792969 221.882812 283.792969 221.882812 C 283.789062 221.878906 283.789062 221.875 283.789062 221.871094 C 283.785156 221.867188 283.785156 221.863281 283.78125 221.855469 C 283.777344 221.851562 283.777344 221.847656 283.773438 221.839844 C 283.765625 221.824219 283.757812 221.808594 283.753906 221.796875 L 283.753906 221.792969 C 283.75 221.789062 283.75 221.785156 283.746094 221.78125 C 283.746094 221.78125 283.746094 221.777344 283.746094 221.777344 C 283.742188 221.773438 283.742188 221.769531 283.738281 221.765625 C 283.738281 221.765625 283.738281 221.765625 283.738281 221.761719 C 283.734375 221.757812 283.734375 221.753906 283.734375 221.75 C 283.730469 221.75 283.734375 221.75 283.730469 221.75 C 283.722656 221.730469 283.714844 221.707031 283.703125 221.6875 C 283.703125 221.683594 283.699219 221.679688 283.699219 221.671875 C 283.699219 221.671875 283.695312 221.671875 283.695312 221.671875 C 283.695312 221.667969 283.691406 221.664062 283.691406 221.660156 C 283.691406 221.660156 283.691406 221.65625 283.691406 221.65625 C 283.6875 221.652344 283.6875 221.648438 283.683594 221.644531 C 283.683594 221.644531 283.683594 221.640625 283.683594 221.640625 C 283.679688 221.636719 283.679688 221.632812 283.675781 221.628906 C 283.667969 221.609375 283.660156 221.589844 283.648438 221.570312 C 283.648438 221.566406 283.648438 221.566406 283.648438 221.566406 C 283.644531 221.5625 283.644531 221.558594 283.640625 221.554688 C 283.640625 221.554688 283.640625 221.554688 283.640625 221.550781 C 283.636719 221.546875 283.636719 221.542969 283.632812 221.539062 C 283.628906 221.53125 283.628906 221.53125 283.625 221.527344 C 283.625 221.523438 283.625 221.523438 283.625 221.523438 C 283.617188 221.503906 283.605469 221.484375 283.597656 221.464844 C 283.59375 221.457031 283.59375 221.453125 283.589844 221.449219 C 283.585938 221.445312 283.585938 221.441406 283.585938 221.4375 C 283.582031 221.433594 283.582031 221.433594 283.582031 221.433594 C 283.582031 221.429688 283.578125 221.425781 283.578125 221.421875 C 283.578125 221.417969 283.578125 221.417969 283.574219 221.417969 C 283.566406 221.398438 283.558594 221.378906 283.546875 221.359375 C 283.542969 221.355469 283.542969 221.351562 283.539062 221.34375 C 283.539062 221.339844 283.535156 221.335938 283.535156 221.332031 C 283.535156 221.328125 283.53125 221.328125 283.53125 221.328125 C 283.53125 221.324219 283.527344 221.320312 283.527344 221.316406 C 283.527344 221.316406 283.527344 221.316406 283.527344 221.3125 C 283.523438 221.308594 283.523438 221.304688 283.519531 221.300781 C 283.507812 221.28125 283.5 221.261719 283.492188 221.242188 C 283.492188 221.238281 283.488281 221.238281 283.488281 221.238281 C 283.488281 221.234375 283.484375 221.230469 283.484375 221.226562 C 283.484375 221.226562 283.484375 221.222656 283.484375 221.222656 C 283.480469 221.21875 283.480469 221.214844 283.476562 221.210938 C 283.476562 221.210938 283.476562 221.210938 283.476562 221.207031 C 283.472656 221.203125 283.472656 221.199219 283.46875 221.195312 C 283.464844 221.191406 283.464844 221.1875 283.460938 221.179688 C 283.453125 221.164062 283.445312 221.148438 283.4375 221.136719 C 283.4375 221.132812 283.4375 221.132812 283.4375 221.132812 C 283.433594 221.128906 283.433594 221.125 283.433594 221.121094 C 283.429688 221.121094 283.429688 221.121094 283.429688 221.117188 C 283.429688 221.113281 283.425781 221.109375 283.425781 221.105469 C 283.425781 221.105469 283.425781 221.105469 283.421875 221.101562 C 283.421875 221.097656 283.417969 221.09375 283.417969 221.09375 C 283.417969 221.089844 283.417969 221.089844 283.414062 221.089844 C 283.414062 221.085938 283.410156 221.082031 283.410156 221.078125 C 283.410156 221.074219 283.410156 221.074219 283.410156 221.074219 C 283.402344 221.058594 283.394531 221.046875 283.386719 221.03125 C 283.382812 221.023438 283.382812 221.023438 283.378906 221.015625 C 283.375 221.011719 283.375 221.007812 283.371094 221.003906 C 283.371094 221 283.371094 221 283.371094 221 C 283.371094 220.996094 283.367188 220.992188 283.363281 220.988281 C 283.363281 220.988281 283.363281 220.984375 283.363281 220.984375 C 283.359375 220.980469 283.359375 220.976562 283.359375 220.972656 C 283.355469 220.972656 283.355469 220.96875 283.355469 220.96875 C 283.347656 220.953125 283.34375 220.941406 283.335938 220.925781 C 283.332031 220.921875 283.332031 220.917969 283.328125 220.910156 C 283.328125 220.910156 283.328125 220.910156 283.328125 220.90625 C 283.324219 220.902344 283.324219 220.902344 283.320312 220.898438 C 283.320312 220.894531 283.320312 220.894531 283.320312 220.894531 C 283.316406 220.890625 283.316406 220.886719 283.3125 220.882812 C 283.3125 220.878906 283.3125 220.878906 283.3125 220.878906 C 283.308594 220.875 283.308594 220.871094 283.304688 220.867188 C 283.300781 220.859375 283.300781 220.859375 283.296875 220.851562 C 283.292969 220.839844 283.285156 220.832031 283.28125 220.824219 C 283.28125 220.820312 283.28125 220.820312 283.28125 220.820312 C 283.277344 220.816406 283.277344 220.8125 283.273438 220.808594 C 283.273438 220.808594 283.273438 220.804688 283.273438 220.804688 C 283.269531 220.800781 283.269531 220.796875 283.265625 220.796875 C 283.265625 220.792969 283.265625 220.792969 283.265625 220.789062 C 283.261719 220.789062 283.261719 220.78125 283.257812 220.78125 C 283.257812 220.777344 283.257812 220.777344 283.257812 220.777344 C 283.257812 220.773438 283.253906 220.769531 283.253906 220.765625 C 283.253906 220.765625 283.25 220.765625 283.25 220.761719 C 283.25 220.757812 283.246094 220.753906 283.246094 220.75 C 283.246094 220.75 283.246094 220.75 283.246094 220.746094 C 283.238281 220.734375 283.230469 220.71875 283.222656 220.707031 C 283.222656 220.703125 283.222656 220.703125 283.222656 220.703125 C 283.21875 220.699219 283.21875 220.695312 283.214844 220.691406 C 283.214844 220.691406 283.214844 220.6875 283.214844 220.6875 C 283.210938 220.683594 283.207031 220.679688 283.207031 220.675781 C 283.203125 220.671875 283.203125 220.667969 283.199219 220.664062 C 283.199219 220.660156 283.199219 220.660156 283.199219 220.660156 C 283.195312 220.65625 283.195312 220.652344 283.191406 220.648438 C 283.191406 220.648438 283.191406 220.644531 283.191406 220.644531 C 283.183594 220.632812 283.175781 220.617188 283.167969 220.601562 C 283.164062 220.597656 283.164062 220.59375 283.160156 220.589844 C 283.160156 220.585938 283.160156 220.585938 283.160156 220.582031 C 283.160156 220.582031 283.15625 220.578125 283.15625 220.574219 C 283.152344 220.574219 283.152344 220.570312 283.152344 220.570312 C 283.152344 220.566406 283.148438 220.5625 283.148438 220.558594 C 283.144531 220.558594 283.144531 220.554688 283.144531 220.554688 C 283.140625 220.550781 283.140625 220.546875 283.136719 220.542969 C 283.128906 220.527344 283.121094 220.511719 283.113281 220.5 C 283.113281 220.496094 283.113281 220.496094 283.113281 220.496094 C 283.113281 220.492188 283.109375 220.488281 283.109375 220.484375 C 283.105469 220.484375 283.105469 220.480469 283.105469 220.480469 C 283.105469 220.476562 283.101562 220.472656 283.101562 220.46875 C 283.097656 220.46875 283.097656 220.46875 283.097656 220.464844 C 283.097656 220.464844 283.09375 220.457031 283.09375 220.457031 C 283.089844 220.453125 283.089844 220.453125 283.089844 220.453125 C 283.089844 220.449219 283.085938 220.445312 283.085938 220.441406 C 283.085938 220.441406 283.085938 220.4375 283.082031 220.4375 C 283.082031 220.433594 283.078125 220.429688 283.078125 220.425781 C 283.078125 220.425781 283.078125 220.425781 283.074219 220.425781 C 283.070312 220.414062 283.066406 220.40625 283.058594 220.394531 C 283.054688 220.390625 283.054688 220.386719 283.054688 220.382812 C 283.050781 220.382812 283.050781 220.378906 283.050781 220.378906 C 283.050781 220.375 283.046875 220.371094 283.046875 220.367188 C 283.046875 220.367188 283.042969 220.367188 283.042969 220.363281 C 283.042969 220.359375 283.039062 220.355469 283.039062 220.355469 C 283.039062 220.351562 283.035156 220.351562 283.035156 220.351562 C 283.035156 220.347656 283.03125 220.34375 283.03125 220.339844 C 283.03125 220.339844 283.027344 220.335938 283.027344 220.335938 C 283.027344 220.332031 283.023438 220.328125 283.023438 220.324219 C 283.015625 220.3125 283.011719 220.304688 283.007812 220.292969 C 283.007812 220.292969 283.003906 220.292969 283.003906 220.292969 C 283.003906 220.289062 283 220.285156 283 220.28125 C 283 220.277344 282.996094 220.277344 282.996094 220.277344 C 282.996094 220.273438 282.992188 220.269531 282.992188 220.265625 C 282.992188 220.261719 282.992188 220.261719 282.988281 220.261719 C 282.988281 220.257812 282.988281 220.253906 282.984375 220.25 C 282.984375 220.25 282.984375 220.25 282.984375 220.246094 C 282.980469 220.246094 282.980469 220.242188 282.976562 220.238281 C 282.976562 220.234375 282.976562 220.234375 282.976562 220.234375 C 282.972656 220.230469 282.972656 220.226562 282.96875 220.222656 C 282.96875 220.222656 282.96875 220.222656 282.96875 220.21875 C 282.960938 220.207031 282.953125 220.191406 282.945312 220.179688 C 282.945312 220.175781 282.945312 220.175781 282.941406 220.175781 C 282.941406 220.171875 282.9375 220.167969 282.9375 220.164062 C 282.9375 220.164062 282.9375 220.164062 282.933594 220.160156 C 282.933594 220.15625 282.929688 220.15625 282.929688 220.152344 C 282.929688 220.148438 282.925781 220.148438 282.925781 220.148438 C 282.925781 220.144531 282.921875 220.140625 282.921875 220.136719 C 282.921875 220.136719 282.921875 220.132812 282.921875 220.132812 C 282.917969 220.128906 282.917969 220.125 282.914062 220.121094 C 282.90625 220.105469 282.898438 220.09375 282.890625 220.078125 C 282.890625 220.078125 282.886719 220.078125 282.886719 220.074219 C 282.886719 220.070312 282.882812 220.066406 282.882812 220.0625 C 282.878906 220.0625 282.878906 220.0625 282.878906 220.058594 C 282.878906 220.054688 282.875 220.054688 282.875 220.050781 C 282.871094 220.046875 282.871094 220.046875 282.871094 220.046875 C 282.871094 220.042969 282.867188 220.039062 282.867188 220.035156 C 282.863281 220.035156 282.863281 220.035156 282.863281 220.03125 C 282.863281 220.027344 282.859375 220.023438 282.859375 220.019531 C 282.859375 220.019531 282.859375 220.019531 282.855469 220.019531 C 282.855469 220.015625 282.851562 220.011719 282.851562 220.007812 C 282.851562 220.003906 282.847656 220.003906 282.847656 220.003906 C 282.84375 219.996094 282.839844 219.984375 282.832031 219.976562 C 282.832031 219.972656 282.832031 219.972656 282.832031 219.972656 C 282.828125 219.96875 282.828125 219.96875 282.824219 219.960938 C 282.820312 219.957031 282.820312 219.953125 282.816406 219.949219 C 282.816406 219.945312 282.816406 219.945312 282.816406 219.945312 C 282.8125 219.941406 282.8125 219.9375 282.808594 219.933594 C 282.808594 219.933594 282.808594 219.933594 282.804688 219.929688 C 282.804688 219.929688 282.800781 219.921875 282.800781 219.921875 C 282.800781 219.921875 282.796875 219.917969 282.796875 219.917969 C 282.796875 219.914062 282.796875 219.910156 282.792969 219.90625 C 282.789062 219.898438 282.789062 219.898438 282.785156 219.890625 C 282.78125 219.886719 282.777344 219.878906 282.777344 219.875 C 282.773438 219.871094 282.769531 219.867188 282.769531 219.863281 C 282.765625 219.859375 282.765625 219.859375 282.765625 219.859375 C 282.765625 219.855469 282.761719 219.851562 282.761719 219.847656 C 282.761719 219.847656 282.757812 219.84375 282.757812 219.84375 C 282.757812 219.839844 282.753906 219.835938 282.753906 219.835938 C 282.753906 219.832031 282.75 219.832031 282.75 219.828125 C 282.75 219.828125 282.746094 219.820312 282.746094 219.820312 C 282.742188 219.816406 282.742188 219.816406 282.742188 219.816406 C 282.742188 219.8125 282.738281 219.808594 282.738281 219.804688 C 282.734375 219.804688 282.734375 219.804688 282.734375 219.804688 C 282.734375 219.796875 282.730469 219.796875 282.730469 219.789062 C 282.730469 219.789062 282.726562 219.789062 282.726562 219.789062 C 282.726562 219.785156 282.722656 219.777344 282.71875 219.773438 C 282.71875 219.769531 282.714844 219.765625 282.710938 219.761719 C 282.710938 219.757812 282.710938 219.757812 282.710938 219.757812 C 282.707031 219.753906 282.707031 219.75 282.703125 219.746094 C 282.703125 219.746094 282.703125 219.746094 282.703125 219.742188 C 282.703125 219.738281 282.699219 219.738281 282.699219 219.734375 C 282.695312 219.730469 282.695312 219.730469 282.695312 219.730469 C 282.695312 219.726562 282.691406 219.722656 282.691406 219.71875 C 282.6875 219.714844 282.6875 219.714844 282.6875 219.714844 C 282.683594 219.710938 282.683594 219.707031 282.679688 219.703125 C 282.675781 219.695312 282.675781 219.695312 282.671875 219.6875 C 282.667969 219.679688 282.660156 219.667969 282.65625 219.660156 C 282.65625 219.660156 282.65625 219.65625 282.652344 219.65625 C 282.652344 219.652344 282.648438 219.648438 282.648438 219.648438 C 282.644531 219.644531 282.644531 219.644531 282.644531 219.644531 C 282.644531 219.640625 282.640625 219.636719 282.640625 219.632812 C 282.636719 219.632812 282.636719 219.628906 282.636719 219.628906 C 282.636719 219.625 282.632812 219.621094 282.632812 219.617188 C 282.628906 219.617188 282.628906 219.617188 282.628906 219.617188 C 282.628906 219.613281 282.625 219.609375 282.625 219.605469 C 282.621094 219.605469 282.621094 219.601562 282.621094 219.601562 C 282.617188 219.597656 282.617188 219.59375 282.613281 219.589844 C 282.609375 219.578125 282.605469 219.570312 282.597656 219.5625 C 282.597656 219.558594 282.597656 219.558594 282.597656 219.558594 C 282.59375 219.554688 282.59375 219.554688 282.589844 219.546875 C 282.589844 219.546875 282.589844 219.546875 282.585938 219.542969 C 282.585938 219.539062 282.582031 219.539062 282.582031 219.535156 C 282.582031 219.53125 282.578125 219.53125 282.578125 219.53125 C 282.578125 219.527344 282.574219 219.523438 282.574219 219.519531 C 282.574219 219.519531 282.570312 219.519531 282.570312 219.515625 C 282.570312 219.511719 282.566406 219.507812 282.566406 219.507812 C 282.5625 219.503906 282.5625 219.503906 282.5625 219.503906 C 282.5625 219.5 282.558594 219.496094 282.558594 219.492188 C 282.554688 219.492188 282.554688 219.488281 282.554688 219.488281 C 282.550781 219.484375 282.550781 219.480469 282.546875 219.476562 C 282.542969 219.46875 282.542969 219.464844 282.539062 219.460938 C 282.539062 219.460938 282.539062 219.460938 282.539062 219.457031 C 282.535156 219.457031 282.535156 219.453125 282.53125 219.449219 C 282.53125 219.445312 282.53125 219.445312 282.527344 219.441406 C 282.527344 219.441406 282.523438 219.4375 282.523438 219.433594 C 282.523438 219.433594 282.523438 219.429688 282.519531 219.429688 C 282.519531 219.425781 282.515625 219.421875 282.515625 219.421875 C 282.515625 219.417969 282.511719 219.417969 282.511719 219.414062 C 282.511719 219.414062 282.507812 219.410156 282.507812 219.40625 C 282.507812 219.40625 282.507812 219.402344 282.503906 219.402344 C 282.503906 219.398438 282.5 219.394531 282.5 219.394531 C 282.5 219.390625 282.496094 219.390625 282.496094 219.390625 C 282.496094 219.386719 282.492188 219.382812 282.492188 219.378906 C 282.488281 219.378906 282.488281 219.375 282.488281 219.375 C 282.484375 219.367188 282.476562 219.359375 282.472656 219.347656 C 282.472656 219.347656 282.472656 219.347656 282.472656 219.34375 C 282.46875 219.339844 282.46875 219.339844 282.464844 219.335938 C 282.464844 219.332031 282.464844 219.332031 282.460938 219.332031 C 282.460938 219.328125 282.457031 219.324219 282.457031 219.324219 C 282.457031 219.320312 282.457031 219.320312 282.453125 219.316406 C 282.453125 219.316406 282.449219 219.308594 282.449219 219.308594 C 282.449219 219.304688 282.449219 219.304688 282.445312 219.304688 C 282.445312 219.300781 282.441406 219.296875 282.441406 219.296875 C 282.441406 219.292969 282.441406 219.292969 282.4375 219.292969 C 282.4375 219.289062 282.433594 219.285156 282.433594 219.28125 C 282.433594 219.28125 282.433594 219.277344 282.429688 219.277344 C 282.429688 219.273438 282.425781 219.269531 282.421875 219.265625 C 282.417969 219.261719 282.417969 219.257812 282.414062 219.25 C 282.414062 219.25 282.414062 219.25 282.410156 219.25 C 282.410156 219.246094 282.410156 219.242188 282.40625 219.238281 C 282.40625 219.234375 282.402344 219.234375 282.402344 219.234375 C 282.402344 219.230469 282.398438 219.226562 282.398438 219.226562 C 282.398438 219.222656 282.394531 219.222656 282.394531 219.21875 C 282.394531 219.21875 282.390625 219.214844 282.390625 219.210938 C 282.390625 219.210938 282.386719 219.207031 282.386719 219.207031 C 282.386719 219.203125 282.382812 219.199219 282.382812 219.199219 C 282.382812 219.195312 282.378906 219.195312 282.378906 219.191406 C 282.378906 219.1875 282.378906 219.1875 282.375 219.183594 C 282.375 219.183594 282.371094 219.179688 282.371094 219.179688 C 282.367188 219.175781 282.367188 219.171875 282.363281 219.167969 C 282.359375 219.160156 282.359375 219.15625 282.355469 219.152344 C 282.355469 219.152344 282.355469 219.152344 282.351562 219.148438 C 282.351562 219.144531 282.347656 219.144531 282.347656 219.140625 C 282.347656 219.136719 282.34375 219.136719 282.34375 219.136719 C 282.34375 219.132812 282.339844 219.128906 282.339844 219.128906 C 282.339844 219.125 282.339844 219.125 282.335938 219.121094 C 282.335938 219.121094 282.332031 219.117188 282.332031 219.113281 C 282.332031 219.113281 282.328125 219.109375 282.328125 219.109375 C 282.328125 219.105469 282.324219 219.105469 282.324219 219.101562 C 282.324219 219.101562 282.320312 219.097656 282.320312 219.097656 C 282.316406 219.09375 282.316406 219.089844 282.316406 219.089844 C 282.3125 219.085938 282.3125 219.085938 282.3125 219.082031 C 282.3125 219.078125 282.308594 219.078125 282.308594 219.074219 C 282.308594 219.074219 282.304688 219.070312 282.304688 219.070312 C 282.300781 219.066406 282.300781 219.0625 282.296875 219.054688 C 282.292969 219.050781 282.292969 219.046875 282.289062 219.042969 C 282.289062 219.042969 282.285156 219.039062 282.285156 219.039062 C 282.285156 219.035156 282.28125 219.03125 282.28125 219.03125 C 282.28125 219.027344 282.277344 219.027344 282.277344 219.023438 C 282.277344 219.023438 282.273438 219.019531 282.273438 219.015625 C 282.273438 219.015625 282.269531 219.011719 282.269531 219.011719 C 282.265625 219.011719 282.265625 219.007812 282.265625 219.003906 C 282.261719 219.003906 282.261719 219 282.261719 219 C 282.257812 218.996094 282.257812 218.992188 282.253906 218.992188 C 282.253906 218.988281 282.253906 218.988281 282.25 218.984375 C 282.25 218.984375 282.246094 218.980469 282.246094 218.976562 C 282.246094 218.976562 282.246094 218.976562 282.246094 218.972656 C 282.238281 218.964844 282.234375 218.957031 282.226562 218.945312 C 282.226562 218.945312 282.226562 218.945312 282.226562 218.941406 C 282.222656 218.9375 282.222656 218.9375 282.21875 218.933594 C 282.21875 218.929688 282.21875 218.929688 282.214844 218.929688 C 282.214844 218.925781 282.214844 218.921875 282.210938 218.917969 C 282.210938 218.917969 282.210938 218.917969 282.207031 218.914062 C 282.207031 218.914062 282.203125 218.910156 282.203125 218.90625 C 282.203125 218.902344 282.199219 218.902344 282.199219 218.902344 C 282.199219 218.898438 282.195312 218.894531 282.195312 218.890625 C 282.191406 218.890625 282.191406 218.890625 282.191406 218.886719 C 282.1875 218.882812 282.1875 218.882812 282.183594 218.878906 C 282.183594 218.878906 282.183594 218.875 282.183594 218.875 C 282.179688 218.871094 282.179688 218.867188 282.175781 218.863281 C 282.175781 218.863281 282.175781 218.863281 282.175781 218.859375 C 282.171875 218.855469 282.167969 218.851562 282.167969 218.847656 C 282.164062 218.847656 282.164062 218.84375 282.164062 218.84375 C 282.160156 218.839844 282.160156 218.839844 282.15625 218.835938 C 282.15625 218.832031 282.15625 218.832031 282.15625 218.828125 C 282.152344 218.828125 282.152344 218.824219 282.148438 218.820312 C 282.148438 218.820312 282.148438 218.816406 282.148438 218.816406 C 282.144531 218.816406 282.144531 218.808594 282.140625 218.808594 C 282.140625 218.804688 282.140625 218.804688 282.140625 218.804688 C 282.136719 218.800781 282.136719 218.796875 282.132812 218.792969 C 282.132812 218.792969 282.132812 218.792969 282.128906 218.789062 C 282.128906 218.789062 282.125 218.785156 282.125 218.78125 C 282.125 218.78125 282.121094 218.777344 282.121094 218.777344 C 282.121094 218.773438 282.117188 218.769531 282.117188 218.769531 C 282.117188 218.765625 282.113281 218.765625 282.113281 218.765625 C 282.109375 218.757812 282.109375 218.753906 282.105469 218.75 C 282.105469 218.75 282.105469 218.75 282.101562 218.75 C 282.101562 218.746094 282.097656 218.742188 282.097656 218.738281 C 282.097656 218.738281 282.09375 218.734375 282.09375 218.734375 C 282.09375 218.730469 282.089844 218.730469 282.089844 218.726562 C 282.085938 218.722656 282.085938 218.722656 282.085938 218.71875 C 282.085938 218.71875 282.082031 218.714844 282.082031 218.710938 C 282.078125 218.710938 282.078125 218.710938 282.078125 218.707031 C 282.074219 218.703125 282.074219 218.699219 282.070312 218.699219 C 282.070312 218.695312 282.070312 218.695312 282.066406 218.691406 C 282.066406 218.691406 282.0625 218.6875 282.0625 218.6875 C 282.0625 218.683594 282.0625 218.683594 282.058594 218.679688 C 282.058594 218.675781 282.054688 218.675781 282.054688 218.671875 C 282.050781 218.671875 282.050781 218.667969 282.050781 218.667969 C 282.050781 218.664062 282.046875 218.660156 282.042969 218.65625 C 282.042969 218.65625 282.042969 218.652344 282.039062 218.652344 C 282.039062 218.648438 282.035156 218.644531 282.035156 218.640625 C 282.03125 218.640625 282.03125 218.636719 282.03125 218.636719 C 282.027344 218.632812 282.027344 218.632812 282.023438 218.628906 C 282.023438 218.625 282.023438 218.625 282.023438 218.625 C 282.019531 218.621094 282.019531 218.617188 282.015625 218.613281 C 282.015625 218.613281 282.015625 218.613281 282.015625 218.609375 C 282.011719 218.609375 282.011719 218.605469 282.007812 218.601562 C 282.007812 218.601562 282.007812 218.597656 282.003906 218.597656 C 282.003906 218.59375 282 218.589844 282 218.589844 C 282 218.585938 281.996094 218.585938 281.996094 218.582031 C 281.996094 218.578125 281.992188 218.578125 281.992188 218.574219 C 281.988281 218.574219 281.988281 218.570312 281.988281 218.570312 C 281.988281 218.566406 281.984375 218.5625 281.980469 218.558594 C 281.976562 218.550781 281.972656 218.546875 281.972656 218.542969 C 281.96875 218.542969 281.96875 218.542969 281.96875 218.539062 C 281.964844 218.535156 281.964844 218.535156 281.960938 218.53125 C 281.960938 218.527344 281.960938 218.527344 281.960938 218.527344 C 281.957031 218.527344 281.957031 218.519531 281.953125 218.519531 C 281.953125 218.515625 281.953125 218.515625 281.953125 218.511719 C 281.949219 218.511719 281.949219 218.507812 281.945312 218.503906 C 281.945312 218.503906 281.945312 218.5 281.941406 218.5 C 281.941406 218.496094 281.9375 218.492188 281.9375 218.492188 C 281.9375 218.488281 281.933594 218.488281 281.933594 218.488281 C 281.933594 218.484375 281.929688 218.480469 281.929688 218.476562 C 281.925781 218.476562 281.925781 218.472656 281.925781 218.472656 C 281.925781 218.46875 281.921875 218.464844 281.921875 218.464844 C 281.917969 218.460938 281.917969 218.460938 281.917969 218.460938 C 281.914062 218.457031 281.914062 218.453125 281.910156 218.445312 C 281.910156 218.445312 281.910156 218.445312 281.90625 218.445312 C 281.90625 218.441406 281.902344 218.4375 281.902344 218.433594 C 281.898438 218.429688 281.898438 218.429688 281.898438 218.429688 C 281.894531 218.425781 281.894531 218.421875 281.890625 218.417969 C 281.890625 218.417969 281.890625 218.417969 281.890625 218.414062 C 281.886719 218.414062 281.886719 218.410156 281.882812 218.40625 C 281.882812 218.40625 281.882812 218.402344 281.882812 218.402344 C 281.878906 218.398438 281.878906 218.394531 281.875 218.394531 C 281.875 218.390625 281.875 218.390625 281.871094 218.390625 C 281.871094 218.386719 281.867188 218.382812 281.867188 218.378906 C 281.867188 218.378906 281.863281 218.378906 281.863281 218.375 C 281.863281 218.371094 281.859375 218.371094 281.859375 218.367188 C 281.855469 218.367188 281.855469 218.363281 281.855469 218.363281 C 281.851562 218.359375 281.851562 218.355469 281.847656 218.351562 C 281.847656 218.351562 281.847656 218.347656 281.847656 218.347656 C 281.84375 218.34375 281.839844 218.339844 281.839844 218.335938 C 281.835938 218.335938 281.835938 218.335938 281.835938 218.335938 C 281.835938 218.332031 281.832031 218.328125 281.828125 218.324219 C 281.828125 218.324219 281.828125 218.320312 281.828125 218.320312 C 281.824219 218.316406 281.824219 218.3125 281.820312 218.3125 C 281.820312 218.308594 281.820312 218.308594 281.820312 218.304688 C 281.816406 218.304688 281.816406 218.300781 281.8125 218.296875 C 281.8125 218.296875 281.8125 218.292969 281.808594 218.292969 C 281.808594 218.292969 281.804688 218.289062 281.804688 218.285156 C 281.804688 218.28125 281.800781 218.28125 281.800781 218.28125 C 281.800781 218.277344 281.796875 218.273438 281.792969 218.269531 C 281.785156 218.257812 281.78125 218.25 281.773438 218.242188 C 281.773438 218.242188 281.773438 218.238281 281.773438 218.238281 C 281.769531 218.234375 281.769531 218.234375 281.765625 218.230469 C 281.765625 218.226562 281.765625 218.226562 281.761719 218.226562 C 281.761719 218.222656 281.761719 218.21875 281.757812 218.214844 C 281.757812 218.214844 281.753906 218.210938 281.753906 218.210938 C 281.753906 218.210938 281.75 218.207031 281.75 218.203125 C 281.746094 218.203125 281.746094 218.203125 281.746094 218.199219 C 281.742188 218.199219 281.742188 218.195312 281.738281 218.191406 C 281.738281 218.191406 281.738281 218.1875 281.738281 218.1875 C 281.734375 218.183594 281.734375 218.179688 281.730469 218.175781 C 281.730469 218.175781 281.726562 218.175781 281.726562 218.175781 C 281.726562 218.171875 281.722656 218.167969 281.71875 218.164062 C 281.71875 218.15625 281.714844 218.152344 281.710938 218.148438 C 281.707031 218.144531 281.707031 218.140625 281.703125 218.136719 C 281.703125 218.132812 281.703125 218.132812 281.699219 218.132812 C 281.699219 218.128906 281.695312 218.125 281.695312 218.121094 C 281.695312 218.121094 281.691406 218.121094 281.691406 218.117188 C 281.691406 218.117188 281.6875 218.113281 281.6875 218.109375 C 281.683594 218.109375 281.683594 218.109375 281.683594 218.105469 C 281.679688 218.105469 281.679688 218.101562 281.675781 218.097656 C 281.675781 218.097656 281.675781 218.09375 281.671875 218.09375 C 281.671875 218.089844 281.667969 218.089844 281.667969 218.085938 C 281.667969 218.082031 281.664062 218.082031 281.664062 218.078125 C 281.664062 218.078125 281.660156 218.074219 281.660156 218.070312 C 281.65625 218.070312 281.65625 218.070312 281.65625 218.066406 C 281.652344 218.0625 281.652344 218.058594 281.648438 218.054688 C 281.648438 218.054688 281.644531 218.054688 281.644531 218.050781 C 281.644531 218.046875 281.640625 218.046875 281.640625 218.042969 C 281.636719 218.042969 281.636719 218.039062 281.636719 218.039062 C 281.632812 218.039062 281.632812 218.03125 281.632812 218.03125 C 281.628906 218.027344 281.628906 218.027344 281.628906 218.027344 C 281.625 218.023438 281.625 218.019531 281.621094 218.019531 C 281.621094 218.015625 281.621094 218.015625 281.617188 218.011719 C 281.617188 218.011719 281.613281 218.007812 281.613281 218.007812 C 281.613281 218.003906 281.609375 218.003906 281.609375 218 C 281.605469 218 281.605469 217.996094 281.601562 217.992188 C 281.601562 217.992188 281.601562 217.988281 281.601562 217.988281 C 281.597656 217.984375 281.597656 217.980469 281.59375 217.980469 C 281.59375 217.980469 281.59375 217.976562 281.59375 217.976562 C 281.589844 217.972656 281.585938 217.96875 281.582031 217.964844 C 281.582031 217.957031 281.578125 217.953125 281.574219 217.949219 C 281.570312 217.945312 281.570312 217.941406 281.566406 217.9375 C 281.566406 217.9375 281.566406 217.933594 281.5625 217.933594 C 281.5625 217.929688 281.558594 217.925781 281.558594 217.925781 C 281.558594 217.921875 281.554688 217.921875 281.554688 217.917969 C 281.550781 217.917969 281.550781 217.914062 281.546875 217.914062 C 281.546875 217.910156 281.546875 217.910156 281.542969 217.90625 C 281.542969 217.90625 281.539062 217.902344 281.539062 217.898438 C 281.539062 217.898438 281.535156 217.894531 281.535156 217.894531 C 281.535156 217.890625 281.53125 217.886719 281.53125 217.886719 C 281.527344 217.882812 281.527344 217.882812 281.527344 217.882812 C 281.523438 217.878906 281.523438 217.875 281.519531 217.871094 C 281.519531 217.871094 281.519531 217.871094 281.515625 217.871094 C 281.515625 217.863281 281.511719 217.859375 281.507812 217.855469 C 281.503906 217.851562 281.503906 217.847656 281.5 217.84375 C 281.5 217.84375 281.5 217.84375 281.496094 217.839844 C 281.496094 217.839844 281.492188 217.835938 281.492188 217.832031 C 281.492188 217.828125 281.488281 217.828125 281.488281 217.828125 C 281.488281 217.824219 281.484375 217.820312 281.484375 217.820312 C 281.480469 217.816406 281.480469 217.816406 281.480469 217.816406 C 281.476562 217.8125 281.476562 217.808594 281.472656 217.804688 C 281.472656 217.804688 281.472656 217.804688 281.472656 217.800781 C 281.46875 217.796875 281.46875 217.796875 281.464844 217.792969 C 281.464844 217.789062 281.464844 217.789062 281.460938 217.789062 C 281.460938 217.785156 281.457031 217.78125 281.453125 217.777344 C 281.449219 217.769531 281.445312 217.765625 281.441406 217.761719 C 281.4375 217.753906 281.4375 217.753906 281.433594 217.75 C 281.433594 217.75 281.433594 217.746094 281.433594 217.746094 C 281.429688 217.742188 281.429688 217.738281 281.425781 217.738281 C 281.425781 217.734375 281.421875 217.734375 281.421875 217.730469 C 281.421875 217.730469 281.417969 217.726562 281.417969 217.722656 C 281.414062 217.722656 281.414062 217.722656 281.414062 217.71875 C 281.410156 217.71875 281.410156 217.714844 281.40625 217.710938 C 281.40625 217.710938 281.40625 217.707031 281.402344 217.707031 C 281.402344 217.703125 281.398438 217.703125 281.398438 217.699219 C 281.398438 217.695312 281.394531 217.695312 281.394531 217.695312 C 281.390625 217.691406 281.390625 217.691406 281.386719 217.6875 C 281.386719 217.683594 281.386719 217.683594 281.382812 217.683594 C 281.382812 217.675781 281.378906 217.675781 281.375 217.667969 C 281.371094 217.664062 281.371094 217.660156 281.367188 217.65625 C 281.367188 217.65625 281.363281 217.652344 281.363281 217.652344 C 281.363281 217.648438 281.359375 217.648438 281.359375 217.644531 C 281.359375 217.640625 281.355469 217.640625 281.355469 217.636719 C 281.351562 217.636719 281.351562 217.632812 281.351562 217.632812 C 281.347656 217.628906 281.347656 217.628906 281.347656 217.625 C 281.34375 217.625 281.34375 217.621094 281.339844 217.617188 C 281.339844 217.617188 281.339844 217.613281 281.335938 217.613281 C 281.335938 217.613281 281.332031 217.609375 281.332031 217.605469 C 281.332031 217.605469 281.332031 217.601562 281.328125 217.601562 C 281.324219 217.597656 281.324219 217.597656 281.324219 217.59375 C 281.320312 217.59375 281.320312 217.589844 281.320312 217.589844 C 281.3125 217.582031 281.308594 217.574219 281.300781 217.5625 C 281.296875 217.558594 281.296875 217.554688 281.292969 217.550781 C 281.292969 217.550781 281.292969 217.550781 281.289062 217.546875 C 281.289062 217.546875 281.285156 217.542969 281.285156 217.539062 C 281.28125 217.539062 281.28125 217.535156 281.28125 217.535156 C 281.277344 217.53125 281.277344 217.53125 281.273438 217.527344 C 281.273438 217.527344 281.273438 217.523438 281.269531 217.523438 C 281.269531 217.519531 281.265625 217.515625 281.265625 217.515625 C 281.265625 217.511719 281.261719 217.511719 281.261719 217.511719 C 281.257812 217.507812 281.257812 217.503906 281.253906 217.503906 C 281.253906 217.5 281.253906 217.5 281.25 217.496094 C 281.25 217.496094 281.246094 217.492188 281.246094 217.488281 C 281.246094 217.488281 281.246094 217.488281 281.242188 217.484375 C 281.242188 217.480469 281.238281 217.476562 281.234375 217.472656 C 281.234375 217.472656 281.234375 217.46875 281.230469 217.46875 C 281.226562 217.464844 281.226562 217.464844 281.226562 217.460938 C 281.222656 217.460938 281.222656 217.457031 281.222656 217.457031 C 281.21875 217.453125 281.21875 217.453125 281.214844 217.449219 C 281.214844 217.449219 281.214844 217.445312 281.210938 217.445312 C 281.210938 217.441406 281.207031 217.4375 281.207031 217.4375 C 281.207031 217.433594 281.203125 217.433594 281.203125 217.433594 C 281.199219 217.429688 281.199219 217.425781 281.195312 217.425781 C 281.195312 217.421875 281.195312 217.421875 281.191406 217.417969 C 281.191406 217.417969 281.1875 217.414062 281.1875 217.410156 C 281.1875 217.410156 281.183594 217.410156 281.183594 217.40625 C 281.183594 217.402344 281.179688 217.402344 281.175781 217.398438 C 281.175781 217.394531 281.175781 217.394531 281.175781 217.394531 C 281.171875 217.390625 281.171875 217.386719 281.167969 217.382812 C 281.164062 217.378906 281.164062 217.378906 281.164062 217.378906 C 281.160156 217.375 281.160156 217.371094 281.15625 217.371094 C 281.15625 217.367188 281.152344 217.367188 281.152344 217.363281 C 281.152344 217.363281 281.152344 217.359375 281.148438 217.359375 C 281.148438 217.355469 281.144531 217.355469 281.144531 217.351562 C 281.144531 217.351562 281.140625 217.347656 281.140625 217.34375 C 281.136719 217.34375 281.136719 217.339844 281.136719 217.339844 C 281.132812 217.335938 281.132812 217.335938 281.132812 217.332031 C 281.128906 217.332031 281.128906 217.328125 281.128906 217.328125 C 281.125 217.324219 281.125 217.320312 281.121094 217.320312 C 281.121094 217.316406 281.121094 217.316406 281.121094 217.3125 C 281.117188 217.3125 281.117188 217.308594 281.113281 217.304688 C 281.113281 217.304688 281.113281 217.304688 281.109375 217.304688 C 281.109375 217.300781 281.105469 217.296875 281.101562 217.292969 C 281.101562 217.289062 281.097656 217.289062 281.097656 217.285156 C 281.09375 217.28125 281.09375 217.28125 281.09375 217.277344 C 281.089844 217.273438 281.089844 217.273438 281.085938 217.273438 C 281.085938 217.269531 281.085938 217.265625 281.085938 217.265625 C 281.082031 217.265625 281.082031 217.261719 281.078125 217.257812 C 281.078125 217.257812 281.078125 217.253906 281.074219 217.253906 C 281.074219 217.25 281.070312 217.25 281.070312 217.246094 C 281.066406 217.246094 281.066406 217.242188 281.066406 217.242188 C 281.0625 217.238281 281.0625 217.238281 281.058594 217.234375 C 281.058594 217.234375 281.054688 217.230469 281.054688 217.226562 C 281.054688 217.226562 281.054688 217.226562 281.050781 217.222656 C 281.046875 217.21875 281.046875 217.21875 281.046875 217.214844 C 281.042969 217.214844 281.042969 217.210938 281.042969 217.210938 C 281.039062 217.207031 281.039062 217.203125 281.035156 217.199219 C 281.03125 217.195312 281.027344 217.191406 281.023438 217.1875 C 281.023438 217.183594 281.023438 217.183594 281.023438 217.183594 C 281.019531 217.179688 281.019531 217.175781 281.015625 217.175781 C 281.015625 217.171875 281.015625 217.171875 281.011719 217.167969 C 281.011719 217.167969 281.007812 217.164062 281.007812 217.160156 C 281.003906 217.160156 281.003906 217.15625 281 217.15625 C 281 217.152344 281 217.152344 280.996094 217.148438 C 280.996094 217.148438 280.992188 217.144531 280.992188 217.144531 C 280.992188 217.140625 280.988281 217.140625 280.988281 217.136719 C 280.984375 217.132812 280.984375 217.132812 280.984375 217.132812 C 280.980469 217.128906 280.980469 217.125 280.976562 217.125 C 280.976562 217.121094 280.976562 217.121094 280.976562 217.121094 C 280.972656 217.117188 280.972656 217.113281 280.96875 217.113281 C 280.96875 217.109375 280.964844 217.109375 280.964844 217.109375 C 280.960938 217.101562 280.960938 217.101562 280.957031 217.09375 C 280.957031 217.09375 280.957031 217.09375 280.953125 217.09375 C 280.953125 217.089844 280.949219 217.085938 280.949219 217.082031 C 280.945312 217.082031 280.945312 217.078125 280.945312 217.078125 C 280.941406 217.078125 280.941406 217.074219 280.9375 217.070312 C 280.9375 217.070312 280.933594 217.066406 280.933594 217.066406 C 280.933594 217.0625 280.929688 217.0625 280.929688 217.058594 C 280.925781 217.058594 280.925781 217.054688 280.925781 217.054688 C 280.921875 217.050781 280.921875 217.050781 280.921875 217.046875 C 280.917969 217.046875 280.917969 217.042969 280.917969 217.042969 C 280.914062 217.039062 280.910156 217.035156 280.910156 217.035156 C 280.910156 217.03125 280.910156 217.03125 280.90625 217.03125 C 280.90625 217.027344 280.902344 217.023438 280.898438 217.019531 C 280.894531 217.015625 280.894531 217.011719 280.890625 217.007812 C 280.886719 217.003906 280.886719 217.003906 280.886719 217.003906 C 280.882812 217 280.882812 216.996094 280.878906 216.992188 C 280.878906 216.992188 280.878906 216.992188 280.875 216.988281 C 280.875 216.988281 280.871094 216.984375 280.871094 216.980469 C 280.867188 216.980469 280.867188 216.980469 280.867188 216.976562 C 280.863281 216.976562 280.863281 216.972656 280.859375 216.96875 C 280.859375 216.96875 280.859375 216.964844 280.855469 216.964844 C 280.855469 216.960938 280.851562 216.960938 280.851562 216.957031 C 280.851562 216.957031 280.847656 216.953125 280.847656 216.953125 C 280.84375 216.949219 280.84375 216.945312 280.839844 216.945312 C 280.839844 216.941406 280.839844 216.941406 280.839844 216.941406 C 280.835938 216.9375 280.832031 216.933594 280.832031 216.933594 C 280.832031 216.929688 280.832031 216.929688 280.828125 216.929688 C 280.824219 216.921875 280.816406 216.914062 280.8125 216.90625 C 280.808594 216.902344 280.808594 216.902344 280.808594 216.898438 C 280.804688 216.898438 280.804688 216.894531 280.800781 216.890625 C 280.800781 216.890625 280.800781 216.890625 280.796875 216.886719 C 280.796875 216.886719 280.792969 216.882812 280.792969 216.878906 C 280.792969 216.878906 280.789062 216.875 280.789062 216.875 C 280.785156 216.875 280.785156 216.871094 280.78125 216.867188 C 280.78125 216.867188 280.78125 216.863281 280.777344 216.863281 C 280.777344 216.859375 280.773438 216.859375 280.773438 216.855469 C 280.769531 216.855469 280.769531 216.851562 280.769531 216.851562 C 280.765625 216.851562 280.765625 216.847656 280.765625 216.84375 C 280.761719 216.84375 280.761719 216.839844 280.761719 216.839844 C 280.757812 216.835938 280.757812 216.832031 280.753906 216.832031 C 280.753906 216.828125 280.753906 216.828125 280.75 216.828125 C 280.75 216.824219 280.746094 216.820312 280.742188 216.816406 C 280.742188 216.816406 280.738281 216.8125 280.738281 216.8125 C 280.734375 216.808594 280.734375 216.808594 280.734375 216.804688 C 280.730469 216.804688 280.730469 216.800781 280.730469 216.800781 C 280.726562 216.796875 280.726562 216.792969 280.722656 216.792969 C 280.722656 216.792969 280.71875 216.789062 280.71875 216.789062 C 280.71875 216.785156 280.714844 216.78125 280.714844 216.78125 C 280.710938 216.777344 280.710938 216.777344 280.710938 216.773438 C 280.707031 216.773438 280.707031 216.769531 280.703125 216.765625 C 280.703125 216.765625 280.703125 216.765625 280.699219 216.761719 C 280.699219 216.761719 280.695312 216.757812 280.695312 216.753906 C 280.695312 216.753906 280.691406 216.75 280.691406 216.75 C 280.6875 216.746094 280.6875 216.746094 280.683594 216.742188 C 280.683594 216.742188 280.683594 216.738281 280.679688 216.738281 C 280.675781 216.734375 280.675781 216.730469 280.671875 216.726562 C 280.671875 216.726562 280.671875 216.726562 280.671875 216.722656 C 280.667969 216.722656 280.664062 216.71875 280.664062 216.714844 C 280.660156 216.714844 280.660156 216.710938 280.660156 216.710938 C 280.65625 216.707031 280.65625 216.703125 280.652344 216.703125 C 280.652344 216.699219 280.648438 216.699219 280.648438 216.699219 C 280.648438 216.695312 280.644531 216.691406 280.644531 216.691406 C 280.640625 216.691406 280.640625 216.6875 280.640625 216.6875 C 280.636719 216.683594 280.636719 216.679688 280.632812 216.679688 C 280.632812 216.675781 280.632812 216.675781 280.628906 216.671875 C 280.628906 216.671875 280.625 216.667969 280.621094 216.664062 C 280.621094 216.664062 280.621094 216.664062 280.621094 216.660156 C 280.617188 216.660156 280.617188 216.65625 280.613281 216.652344 C 280.613281 216.652344 280.609375 216.648438 280.609375 216.648438 C 280.605469 216.644531 280.605469 216.640625 280.601562 216.636719 C 280.597656 216.632812 280.59375 216.628906 280.589844 216.625 C 280.589844 216.625 280.589844 216.621094 280.589844 216.621094 C 280.585938 216.617188 280.585938 216.617188 280.582031 216.613281 C 280.578125 216.613281 280.578125 216.609375 280.578125 216.609375 C 280.574219 216.605469 280.574219 216.605469 280.574219 216.601562 C 280.570312 216.601562 280.570312 216.597656 280.570312 216.597656 C 280.566406 216.59375 280.566406 216.59375 280.5625 216.589844 C 280.5625 216.589844 280.558594 216.585938 280.558594 216.585938 C 280.558594 216.582031 280.554688 216.578125 280.554688 216.578125 C 280.550781 216.574219 280.550781 216.574219 280.550781 216.570312 C 280.546875 216.570312 280.542969 216.566406 280.542969 216.566406 C 280.542969 216.5625 280.542969 216.5625 280.539062 216.558594 C 280.539062 216.558594 280.535156 216.554688 280.535156 216.550781 C 280.53125 216.550781 280.53125 216.546875 280.527344 216.546875 C 280.527344 216.542969 280.523438 216.539062 280.519531 216.535156 C 280.519531 216.535156 280.519531 216.535156 280.519531 216.53125 C 280.515625 216.53125 280.515625 216.527344 280.511719 216.523438 C 280.511719 216.523438 280.507812 216.519531 280.507812 216.519531 C 280.507812 216.515625 280.503906 216.515625 280.503906 216.511719 C 280.5 216.511719 280.5 216.507812 280.5 216.507812 C 280.496094 216.503906 280.496094 216.503906 280.492188 216.5 C 280.492188 216.5 280.488281 216.496094 280.488281 216.496094 C 280.488281 216.492188 280.484375 216.492188 280.484375 216.488281 C 280.480469 216.484375 280.480469 216.484375 280.480469 216.484375 C 280.476562 216.480469 280.476562 216.476562 280.472656 216.476562 C 280.472656 216.476562 280.472656 216.472656 280.46875 216.472656 C 280.46875 216.46875 280.464844 216.46875 280.464844 216.464844 C 280.464844 216.464844 280.460938 216.460938 280.460938 216.460938 C 280.457031 216.457031 280.453125 216.453125 280.449219 216.449219 C 280.449219 216.445312 280.449219 216.445312 280.445312 216.441406 C 280.445312 216.441406 280.445312 216.441406 280.441406 216.4375 C 280.4375 216.433594 280.4375 216.433594 280.4375 216.429688 C 280.433594 216.429688 280.433594 216.425781 280.429688 216.425781 C 280.429688 216.421875 280.425781 216.421875 280.425781 216.417969 C 280.421875 216.417969 280.421875 216.414062 280.417969 216.410156 C 280.417969 216.410156 280.417969 216.410156 280.414062 216.40625 C 280.414062 216.40625 280.414062 216.402344 280.410156 216.398438 C 280.410156 216.398438 280.40625 216.398438 280.40625 216.394531 C 280.40625 216.394531 280.402344 216.390625 280.402344 216.386719 C 280.398438 216.386719 280.398438 216.386719 280.398438 216.382812 C 280.394531 216.378906 280.394531 216.378906 280.390625 216.375 C 280.390625 216.375 280.386719 216.375 280.386719 216.371094 C 280.382812 216.367188 280.382812 216.363281 280.378906 216.359375 C 280.378906 216.359375 280.378906 216.359375 280.375 216.359375 C 280.375 216.355469 280.371094 216.351562 280.367188 216.347656 C 280.367188 216.347656 280.367188 216.34375 280.363281 216.34375 C 280.363281 216.34375 280.359375 216.339844 280.359375 216.339844 C 280.355469 216.335938 280.355469 216.335938 280.355469 216.332031 C 280.351562 216.332031 280.351562 216.328125 280.351562 216.324219 C 280.347656 216.324219 280.347656 216.324219 280.347656 216.320312 C 280.34375 216.320312 280.339844 216.316406 280.339844 216.3125 C 280.339844 216.3125 280.335938 216.3125 280.335938 216.308594 C 280.335938 216.308594 280.332031 216.304688 280.332031 216.300781 C 280.328125 216.300781 280.328125 216.296875 280.328125 216.296875 C 280.324219 216.292969 280.324219 216.292969 280.320312 216.289062 C 280.320312 216.289062 280.320312 216.285156 280.316406 216.285156 C 280.3125 216.28125 280.3125 216.277344 280.308594 216.273438 C 280.304688 216.269531 280.300781 216.265625 280.296875 216.261719 C 280.296875 216.257812 280.296875 216.257812 280.292969 216.253906 C 280.292969 216.253906 280.289062 216.25 280.289062 216.25 C 280.285156 216.246094 280.285156 216.246094 280.285156 216.242188 C 280.28125 216.242188 280.28125 216.238281 280.277344 216.238281 C 280.277344 216.234375 280.277344 216.234375 280.273438 216.230469 C 280.273438 216.230469 280.269531 216.226562 280.269531 216.226562 C 280.265625 216.222656 280.265625 216.222656 280.265625 216.21875 C 280.261719 216.21875 280.261719 216.214844 280.257812 216.214844 C 280.257812 216.210938 280.257812 216.210938 280.257812 216.210938 C 280.253906 216.207031 280.253906 216.203125 280.25 216.203125 C 280.25 216.203125 280.246094 216.199219 280.246094 216.199219 C 280.242188 216.195312 280.242188 216.191406 280.238281 216.1875 C 280.234375 216.183594 280.230469 216.179688 280.226562 216.175781 C 280.226562 216.175781 280.226562 216.171875 280.226562 216.171875 C 280.222656 216.167969 280.21875 216.167969 280.21875 216.164062 C 280.214844 216.164062 280.214844 216.160156 280.214844 216.160156 C 280.210938 216.15625 280.207031 216.152344 280.207031 216.152344 C 280.207031 216.152344 280.203125 216.148438 280.203125 216.148438 C 280.199219 216.144531 280.199219 216.144531 280.195312 216.140625 C 280.195312 216.136719 280.195312 216.136719 280.195312 216.136719 C 280.191406 216.132812 280.1875 216.128906 280.1875 216.128906 C 280.1875 216.125 280.183594 216.125 280.183594 216.121094 C 280.183594 216.121094 280.179688 216.117188 280.175781 216.117188 C 280.175781 216.113281 280.175781 216.113281 280.171875 216.109375 C 280.171875 216.109375 280.167969 216.105469 280.167969 216.101562 C 280.164062 216.101562 280.164062 216.101562 280.164062 216.097656 C 280.160156 216.09375 280.15625 216.089844 280.15625 216.085938 C 280.152344 216.085938 280.152344 216.085938 280.152344 216.085938 C 280.148438 216.082031 280.148438 216.078125 280.144531 216.078125 C 280.144531 216.074219 280.140625 216.074219 280.140625 216.070312 C 280.136719 216.070312 280.136719 216.066406 280.132812 216.0625 C 280.132812 216.0625 280.132812 216.0625 280.128906 216.058594 C 280.128906 216.058594 280.128906 216.054688 280.125 216.054688 C 280.125 216.050781 280.121094 216.050781 280.121094 216.046875 C 280.117188 216.046875 280.117188 216.042969 280.117188 216.042969 C 280.113281 216.039062 280.113281 216.039062 280.109375 216.035156 C 280.109375 216.035156 280.105469 216.03125 280.105469 216.03125 C 280.101562 216.027344 280.101562 216.027344 280.101562 216.023438 C 280.097656 216.023438 280.097656 216.019531 280.09375 216.019531 C 280.09375 216.015625 280.09375 216.015625 280.09375 216.015625 C 280.089844 216.011719 280.085938 216.007812 280.082031 216.003906 C 280.082031 216.003906 280.082031 216 280.078125 216 C 280.078125 215.996094 280.074219 215.992188 280.070312 215.988281 C 280.066406 215.984375 280.066406 215.980469 280.0625 215.980469 C 280.0625 215.976562 280.058594 215.976562 280.058594 215.976562 C 280.058594 215.972656 280.054688 215.96875 280.050781 215.96875 C 280.050781 215.964844 280.050781 215.964844 280.046875 215.960938 C 280.046875 215.960938 280.042969 215.957031 280.042969 215.957031 C 280.039062 215.953125 280.039062 215.953125 280.039062 215.953125 C 280.035156 215.949219 280.035156 215.945312 280.03125 215.945312 C 280.03125 215.941406 280.03125 215.941406 280.027344 215.941406 C 280.027344 215.9375 280.023438 215.933594 280.023438 215.933594 C 280.023438 215.929688 280.019531 215.929688 280.019531 215.925781 C 280.015625 215.925781 280.015625 215.921875 280.011719 215.917969 C 280.011719 215.917969 280.007812 215.914062 280.007812 215.914062 C 280.003906 215.910156 280.003906 215.90625 280 215.90625 C 280 215.902344 279.996094 215.902344 279.996094 215.898438 C 279.992188 215.898438 279.992188 215.894531 279.988281 215.894531 C 279.988281 215.890625 279.988281 215.890625 279.984375 215.890625 C 279.984375 215.886719 279.980469 215.882812 279.980469 215.882812 C 279.980469 215.882812 279.976562 215.878906 279.976562 215.878906 C 279.972656 215.875 279.972656 215.875 279.96875 215.871094 C 279.96875 215.867188 279.96875 215.867188 279.964844 215.863281 C 279.964844 215.863281 279.960938 215.859375 279.960938 215.859375 C 279.957031 215.859375 279.957031 215.855469 279.957031 215.855469 C 279.953125 215.851562 279.953125 215.851562 279.949219 215.847656 C 279.949219 215.847656 279.949219 215.84375 279.945312 215.84375 C 279.941406 215.839844 279.941406 215.839844 279.941406 215.835938 C 279.9375 215.832031 279.9375 215.832031 279.9375 215.832031 C 279.933594 215.828125 279.929688 215.824219 279.925781 215.820312 C 279.925781 215.816406 279.925781 215.816406 279.921875 215.816406 C 279.921875 215.8125 279.917969 215.8125 279.917969 215.808594 C 279.917969 215.808594 279.914062 215.804688 279.914062 215.804688 C 279.910156 215.800781 279.910156 215.796875 279.90625 215.796875 C 279.90625 215.796875 279.90625 215.792969 279.902344 215.792969 C 279.902344 215.789062 279.898438 215.789062 279.898438 215.785156 C 279.894531 215.785156 279.894531 215.78125 279.894531 215.78125 C 279.890625 215.777344 279.890625 215.777344 279.886719 215.773438 C 279.886719 215.773438 279.886719 215.769531 279.882812 215.769531 C 279.882812 215.765625 279.878906 215.765625 279.878906 215.761719 C 279.875 215.761719 279.875 215.757812 279.871094 215.757812 C 279.871094 215.757812 279.871094 215.753906 279.867188 215.75 C 279.867188 215.75 279.863281 215.746094 279.863281 215.746094 C 279.859375 215.742188 279.859375 215.742188 279.859375 215.742188 C 279.855469 215.738281 279.851562 215.734375 279.847656 215.730469 C 279.84375 215.726562 279.84375 215.726562 279.84375 215.722656 C 279.839844 215.722656 279.839844 215.71875 279.839844 215.71875 C 279.835938 215.714844 279.835938 215.714844 279.832031 215.710938 C 279.832031 215.710938 279.828125 215.707031 279.828125 215.707031 C 279.828125 215.703125 279.824219 215.703125 279.824219 215.699219 C 279.820312 215.699219 279.820312 215.699219 279.820312 215.695312 C 279.816406 215.695312 279.816406 215.691406 279.8125 215.691406 C 279.8125 215.6875 279.808594 215.6875 279.808594 215.683594 C 279.808594 215.683594 279.804688 215.679688 279.804688 215.679688 C 279.800781 215.675781 279.800781 215.675781 279.796875 215.671875 C 279.796875 215.671875 279.792969 215.667969 279.792969 215.667969 C 279.792969 215.667969 279.789062 215.664062 279.789062 215.660156 C 279.785156 215.660156 279.785156 215.660156 279.785156 215.65625 C 279.78125 215.652344 279.777344 215.648438 279.773438 215.644531 C 279.773438 215.644531 279.773438 215.640625 279.769531 215.640625 C 279.765625 215.636719 279.765625 215.636719 279.765625 215.636719 C 279.761719 215.632812 279.761719 215.632812 279.757812 215.628906 C 279.757812 215.625 279.753906 215.625 279.753906 215.625 C 279.75 215.621094 279.75 215.621094 279.75 215.617188 C 279.746094 215.617188 279.746094 215.613281 279.742188 215.613281 C 279.742188 215.609375 279.742188 215.609375 279.738281 215.605469 C 279.738281 215.605469 279.734375 215.601562 279.734375 215.601562 C 279.734375 215.597656 279.730469 215.597656 279.730469 215.59375 C 279.726562 215.59375 279.726562 215.589844 279.726562 215.589844 C 279.722656 215.585938 279.722656 215.585938 279.71875 215.582031 C 279.71875 215.582031 279.714844 215.578125 279.714844 215.578125 C 279.710938 215.574219 279.710938 215.574219 279.710938 215.570312 C 279.707031 215.570312 279.703125 215.566406 279.703125 215.5625 C 279.699219 215.5625 279.695312 215.558594 279.695312 215.554688 C 279.691406 215.554688 279.691406 215.554688 279.691406 215.550781 C 279.6875 215.546875 279.6875 215.546875 279.683594 215.542969 C 279.683594 215.542969 279.679688 215.542969 279.679688 215.539062 C 279.679688 215.539062 279.675781 215.535156 279.675781 215.535156 C 279.671875 215.53125 279.671875 215.53125 279.667969 215.527344 C 279.667969 215.527344 279.664062 215.523438 279.664062 215.523438 C 279.660156 215.519531 279.660156 215.519531 279.660156 215.515625 C 279.65625 215.515625 279.65625 215.511719 279.652344 215.511719 C 279.652344 215.507812 279.652344 215.507812 279.648438 215.507812 C 279.648438 215.503906 279.644531 215.5 279.644531 215.5 C 279.640625 215.496094 279.640625 215.496094 279.640625 215.496094 C 279.636719 215.492188 279.636719 215.492188 279.632812 215.488281 C 279.632812 215.488281 279.628906 215.484375 279.628906 215.484375 C 279.625 215.480469 279.621094 215.476562 279.617188 215.472656 C 279.617188 215.472656 279.617188 215.46875 279.613281 215.46875 C 279.613281 215.464844 279.613281 215.464844 279.609375 215.460938 C 279.609375 215.460938 279.605469 215.457031 279.605469 215.457031 C 279.601562 215.453125 279.601562 215.453125 279.597656 215.449219 C 279.597656 215.445312 279.59375 215.445312 279.59375 215.445312 C 279.59375 215.441406 279.589844 215.441406 279.589844 215.4375 C 279.585938 215.4375 279.585938 215.433594 279.582031 215.433594 C 279.582031 215.429688 279.582031 215.429688 279.578125 215.425781 C 279.578125 215.425781 279.574219 215.421875 279.574219 215.421875 C 279.570312 215.417969 279.570312 215.417969 279.566406 215.414062 C 279.566406 215.414062 279.566406 215.410156 279.5625 215.410156 C 279.558594 215.40625 279.558594 215.40625 279.554688 215.402344 C 279.554688 215.402344 279.554688 215.402344 279.550781 215.398438 C 279.550781 215.394531 279.546875 215.394531 279.542969 215.390625 C 279.542969 215.386719 279.542969 215.386719 279.539062 215.386719 C 279.539062 215.382812 279.535156 215.378906 279.53125 215.378906 C 279.53125 215.375 279.53125 215.375 279.527344 215.375 C 279.527344 215.371094 279.523438 215.371094 279.523438 215.367188 C 279.519531 215.363281 279.519531 215.363281 279.519531 215.359375 C 279.515625 215.359375 279.515625 215.355469 279.511719 215.355469 C 279.511719 215.351562 279.507812 215.351562 279.507812 215.347656 C 279.507812 215.347656 279.503906 215.34375 279.503906 215.34375 C 279.5 215.34375 279.5 215.339844 279.5 215.339844 C 279.496094 215.335938 279.492188 215.332031 279.492188 215.332031 C 279.488281 215.328125 279.488281 215.328125 279.488281 215.328125 C 279.484375 215.324219 279.484375 215.320312 279.480469 215.320312 C 279.480469 215.320312 279.476562 215.316406 279.476562 215.316406 C 279.472656 215.3125 279.472656 215.308594 279.46875 215.308594 C 279.46875 215.304688 279.46875 215.304688 279.464844 215.304688 C 279.460938 215.300781 279.460938 215.296875 279.457031 215.292969 C 279.453125 215.292969 279.453125 215.289062 279.453125 215.289062 C 279.449219 215.285156 279.449219 215.285156 279.445312 215.28125 C 279.445312 215.28125 279.441406 215.277344 279.441406 215.277344 C 279.4375 215.273438 279.4375 215.273438 279.433594 215.269531 C 279.433594 215.269531 279.433594 215.265625 279.429688 215.265625 C 279.429688 215.265625 279.425781 215.261719 279.425781 215.261719 C 279.421875 215.257812 279.421875 215.257812 279.421875 215.253906 C 279.417969 215.253906 279.417969 215.25 279.414062 215.25 C 279.414062 215.246094 279.410156 215.246094 279.410156 215.246094 C 279.40625 215.242188 279.40625 215.238281 279.402344 215.238281 C 279.402344 215.234375 279.402344 215.234375 279.398438 215.234375 C 279.394531 215.230469 279.394531 215.230469 279.390625 215.226562 C 279.390625 215.226562 279.390625 215.222656 279.386719 215.222656 C 279.386719 215.21875 279.382812 215.214844 279.378906 215.210938 C 279.375 215.210938 279.375 215.210938 279.375 215.207031 C 279.371094 215.203125 279.371094 215.203125 279.367188 215.199219 C 279.367188 215.199219 279.363281 215.195312 279.363281 215.195312 C 279.363281 215.191406 279.359375 215.191406 279.359375 215.1875 C 279.355469 215.1875 279.355469 215.183594 279.355469 215.183594 C 279.351562 215.183594 279.351562 215.179688 279.347656 215.179688 C 279.347656 215.175781 279.347656 215.175781 279.34375 215.171875 C 279.34375 215.171875 279.339844 215.167969 279.339844 215.167969 C 279.335938 215.164062 279.335938 215.164062 279.332031 215.160156 C 279.332031 215.160156 279.328125 215.15625 279.328125 215.15625 C 279.324219 215.152344 279.324219 215.152344 279.324219 215.152344 C 279.320312 215.148438 279.320312 215.148438 279.316406 215.144531 C 279.316406 215.140625 279.316406 215.140625 279.3125 215.140625 C 279.308594 215.136719 279.304688 215.132812 279.300781 215.128906 C 279.300781 215.128906 279.300781 215.125 279.300781 215.125 C 279.296875 215.121094 279.292969 215.121094 279.292969 215.117188 C 279.292969 215.117188 279.289062 215.113281 279.289062 215.113281 C 279.285156 215.113281 279.285156 215.109375 279.28125 215.105469 C 279.28125 215.105469 279.277344 215.101562 279.277344 215.101562 C 279.273438 215.097656 279.273438 215.097656 279.273438 215.09375 C 279.269531 215.09375 279.269531 215.089844 279.265625 215.089844 C 279.265625 215.085938 279.261719 215.085938 279.261719 215.085938 C 279.257812 215.082031 279.257812 215.082031 279.257812 215.078125 C 279.253906 215.078125 279.253906 215.074219 279.25 215.074219 C 279.25 215.070312 279.246094 215.070312 279.246094 215.066406 C 279.242188 215.066406 279.242188 215.0625 279.238281 215.0625 C 279.238281 215.058594 279.238281 215.058594 279.234375 215.058594 C 279.230469 215.054688 279.230469 215.054688 279.226562 215.050781 C 279.226562 215.046875 279.222656 215.046875 279.222656 215.042969 C 279.21875 215.039062 279.214844 215.039062 279.214844 215.035156 C 279.210938 215.035156 279.210938 215.03125 279.210938 215.03125 C 279.207031 215.027344 279.207031 215.027344 279.203125 215.023438 C 279.203125 215.023438 279.199219 215.023438 279.199219 215.019531 C 279.195312 215.019531 279.195312 215.015625 279.195312 215.015625 C 279.191406 215.011719 279.191406 215.011719 279.1875 215.007812 C 279.1875 215.007812 279.1875 215.003906 279.183594 215.003906 C 279.183594 215 279.179688 215 279.179688 214.996094 C 279.175781 214.996094 279.175781 214.992188 279.171875 214.992188 C 279.171875 214.988281 279.167969 214.988281 279.167969 214.984375 C 279.167969 214.984375 279.164062 214.980469 279.164062 214.980469 C 279.164062 214.976562 279.160156 214.976562 279.160156 214.972656 C 279.15625 214.972656 279.152344 214.96875 279.152344 214.964844 C 279.148438 214.964844 279.148438 214.964844 279.148438 214.960938 C 279.144531 214.960938 279.140625 214.957031 279.136719 214.953125 C 279.136719 214.949219 279.132812 214.949219 279.132812 214.949219 C 279.128906 214.945312 279.128906 214.945312 279.128906 214.941406 C 279.125 214.941406 279.125 214.9375 279.121094 214.9375 C 279.121094 214.933594 279.117188 214.933594 279.117188 214.929688 C 279.113281 214.929688 279.113281 214.929688 279.113281 214.925781 C 279.109375 214.925781 279.109375 214.921875 279.105469 214.921875 C 279.105469 214.917969 279.101562 214.917969 279.101562 214.914062 C 279.097656 214.914062 279.097656 214.910156 279.097656 214.910156 C 279.09375 214.90625 279.09375 214.90625 279.089844 214.902344 C 279.089844 214.902344 279.085938 214.898438 279.085938 214.898438 C 279.082031 214.894531 279.082031 214.894531 279.078125 214.894531 C 279.078125 214.890625 279.074219 214.886719 279.074219 214.886719 C 279.070312 214.886719 279.070312 214.882812 279.070312 214.882812 C 279.066406 214.878906 279.0625 214.875 279.058594 214.871094 C 279.058594 214.871094 279.054688 214.867188 279.054688 214.867188 C 279.050781 214.863281 279.050781 214.863281 279.046875 214.863281 C 279.046875 214.859375 279.042969 214.859375 279.042969 214.855469 C 279.039062 214.855469 279.039062 214.851562 279.035156 214.851562 C 279.035156 214.847656 279.035156 214.847656 279.03125 214.84375 C 279.03125 214.84375 279.027344 214.839844 279.027344 214.839844 C 279.023438 214.835938 279.023438 214.835938 279.023438 214.835938 C 279.019531 214.832031 279.019531 214.832031 279.015625 214.828125 C 279.015625 214.828125 279.011719 214.824219 279.011719 214.824219 C 279.007812 214.824219 279.007812 214.820312 279.003906 214.820312 C 279.003906 214.816406 279.003906 214.816406 279 214.8125 C 279 214.8125 278.996094 214.808594 278.996094 214.808594 C 278.992188 214.804688 278.992188 214.804688 278.992188 214.804688 C 278.988281 214.800781 278.984375 214.796875 278.980469 214.792969 C 278.980469 214.792969 278.976562 214.789062 278.976562 214.789062 C 278.972656 214.785156 278.972656 214.785156 278.96875 214.78125 C 278.96875 214.78125 278.964844 214.777344 278.964844 214.777344 C 278.960938 214.773438 278.960938 214.773438 278.957031 214.769531 C 278.957031 214.769531 278.953125 214.765625 278.953125 214.765625 C 278.953125 214.765625 278.949219 214.761719 278.949219 214.761719 C 278.945312 214.757812 278.945312 214.757812 278.941406 214.757812 C 278.941406 214.753906 278.9375 214.753906 278.9375 214.75 C 278.9375 214.75 278.933594 214.746094 278.933594 214.746094 C 278.929688 214.742188 278.929688 214.742188 278.925781 214.738281 C 278.925781 214.738281 278.925781 214.738281 278.921875 214.734375 C 278.921875 214.734375 278.917969 214.730469 278.917969 214.730469 C 278.914062 214.726562 278.914062 214.726562 278.910156 214.726562 C 278.910156 214.722656 278.90625 214.71875 278.90625 214.71875 C 278.902344 214.714844 278.902344 214.714844 278.902344 214.714844 C 278.898438 214.710938 278.894531 214.707031 278.890625 214.703125 C 278.890625 214.703125 278.886719 214.703125 278.886719 214.699219 C 278.882812 214.695312 278.882812 214.695312 278.878906 214.691406 C 278.878906 214.691406 278.875 214.691406 278.875 214.6875 C 278.875 214.6875 278.871094 214.683594 278.867188 214.679688 C 278.867188 214.679688 278.863281 214.675781 278.863281 214.675781 C 278.863281 214.675781 278.859375 214.671875 278.859375 214.671875 C 278.855469 214.667969 278.855469 214.667969 278.851562 214.667969 C 278.851562 214.664062 278.847656 214.660156 278.847656 214.660156 C 278.84375 214.65625 278.84375 214.65625 278.839844 214.65625 C 278.839844 214.652344 278.835938 214.648438 278.835938 214.648438 C 278.832031 214.644531 278.832031 214.644531 278.832031 214.644531 C 278.828125 214.640625 278.824219 214.636719 278.824219 214.636719 C 278.820312 214.636719 278.820312 214.632812 278.820312 214.632812 C 278.816406 214.628906 278.8125 214.625 278.808594 214.621094 C 278.804688 214.617188 278.800781 214.613281 278.800781 214.613281 C 278.796875 214.609375 278.796875 214.609375 278.792969 214.605469 C 278.792969 214.605469 278.789062 214.601562 278.789062 214.601562 C 278.785156 214.601562 278.785156 214.597656 278.78125 214.597656 C 278.78125 214.59375 278.777344 214.59375 278.777344 214.589844 C 278.777344 214.589844 278.773438 214.585938 278.773438 214.585938 C 278.769531 214.582031 278.769531 214.582031 278.765625 214.578125 C 278.765625 214.578125 278.765625 214.578125 278.761719 214.574219 C 278.761719 214.574219 278.757812 214.570312 278.753906 214.570312 C 278.753906 214.566406 278.753906 214.566406 278.75 214.566406 C 278.746094 214.5625 278.746094 214.5625 278.742188 214.558594 C 278.742188 214.558594 278.742188 214.554688 278.742188 214.554688 C 278.738281 214.550781 278.734375 214.550781 278.734375 214.546875 C 278.730469 214.542969 278.726562 214.542969 278.726562 214.539062 C 278.722656 214.539062 278.722656 214.535156 278.71875 214.535156 C 278.71875 214.53125 278.714844 214.53125 278.714844 214.527344 C 278.710938 214.527344 278.710938 214.523438 278.707031 214.523438 C 278.707031 214.519531 278.707031 214.519531 278.703125 214.515625 C 278.703125 214.515625 278.699219 214.511719 278.699219 214.511719 C 278.695312 214.507812 278.695312 214.507812 278.691406 214.507812 C 278.691406 214.503906 278.6875 214.503906 278.6875 214.5 C 278.683594 214.5 278.683594 214.5 278.683594 214.496094 C 278.679688 214.496094 278.679688 214.492188 278.675781 214.488281 C 278.675781 214.488281 278.671875 214.488281 278.671875 214.484375 C 278.667969 214.484375 278.667969 214.480469 278.664062 214.476562 C 278.664062 214.476562 278.660156 214.476562 278.660156 214.476562 C 278.652344 214.46875 278.648438 214.460938 278.640625 214.453125 C 278.636719 214.453125 278.636719 214.449219 278.632812 214.449219 C 278.632812 214.445312 278.628906 214.445312 278.628906 214.441406 C 278.625 214.441406 278.625 214.441406 278.621094 214.4375 C 278.621094 214.4375 278.617188 214.433594 278.617188 214.433594 C 278.613281 214.429688 278.613281 214.429688 278.613281 214.425781 C 278.609375 214.425781 278.605469 214.421875 278.605469 214.421875 C 278.601562 214.417969 278.601562 214.417969 278.601562 214.417969 C 278.597656 214.414062 278.59375 214.414062 278.59375 214.410156 C 278.589844 214.410156 278.589844 214.410156 278.589844 214.40625 C 278.585938 214.40625 278.582031 214.402344 278.582031 214.398438 C 278.582031 214.398438 278.578125 214.398438 278.578125 214.394531 C 278.574219 214.394531 278.574219 214.390625 278.570312 214.386719 C 278.570312 214.386719 278.566406 214.386719 278.566406 214.386719 C 278.5625 214.382812 278.558594 214.378906 278.554688 214.375 C 278.554688 214.375 278.554688 214.371094 278.550781 214.371094 C 278.550781 214.367188 278.550781 214.367188 278.546875 214.363281 C 278.542969 214.363281 278.542969 214.363281 278.542969 214.359375 C 278.539062 214.359375 278.535156 214.355469 278.535156 214.355469 C 278.535156 214.351562 278.53125 214.351562 278.53125 214.347656 C 278.527344 214.347656 278.523438 214.34375 278.523438 214.34375 C 278.519531 214.339844 278.519531 214.339844 278.519531 214.339844 C 278.515625 214.335938 278.515625 214.332031 278.511719 214.332031 C 278.511719 214.332031 278.507812 214.328125 278.507812 214.328125 C 278.503906 214.324219 278.503906 214.324219 278.5 214.320312 C 278.5 214.320312 278.496094 214.316406 278.496094 214.316406 C 278.492188 214.316406 278.492188 214.3125 278.488281 214.3125 C 278.488281 214.308594 278.488281 214.308594 278.484375 214.308594 C 278.484375 214.304688 278.480469 214.300781 278.476562 214.296875 C 278.472656 214.292969 278.472656 214.292969 278.472656 214.292969 C 278.46875 214.289062 278.46875 214.289062 278.464844 214.285156 C 278.460938 214.28125 278.460938 214.28125 278.460938 214.28125 C 278.457031 214.277344 278.457031 214.277344 278.453125 214.273438 C 278.453125 214.273438 278.449219 214.269531 278.449219 214.269531 C 278.445312 214.265625 278.445312 214.265625 278.441406 214.261719 C 278.441406 214.261719 278.4375 214.257812 278.4375 214.257812 C 278.4375 214.257812 278.433594 214.253906 278.433594 214.253906 C 278.429688 214.25 278.429688 214.25 278.425781 214.25 C 278.425781 214.246094 278.421875 214.246094 278.421875 214.242188 C 278.417969 214.242188 278.417969 214.238281 278.417969 214.238281 C 278.414062 214.234375 278.414062 214.234375 278.410156 214.230469 C 278.410156 214.230469 278.40625 214.230469 278.40625 214.226562 C 278.402344 214.222656 278.398438 214.222656 278.394531 214.21875 C 278.394531 214.21875 278.394531 214.214844 278.390625 214.214844 C 278.386719 214.210938 278.386719 214.210938 278.382812 214.207031 C 278.382812 214.207031 278.378906 214.203125 278.378906 214.203125 C 278.378906 214.199219 278.375 214.199219 278.371094 214.195312 C 278.371094 214.195312 278.367188 214.191406 278.367188 214.191406 C 278.363281 214.191406 278.363281 214.1875 278.359375 214.1875 C 278.359375 214.1875 278.355469 214.183594 278.355469 214.183594 C 278.355469 214.179688 278.351562 214.179688 278.351562 214.175781 C 278.347656 214.175781 278.347656 214.175781 278.34375 214.171875 C 278.34375 214.171875 278.339844 214.167969 278.339844 214.167969 C 278.335938 214.164062 278.335938 214.164062 278.332031 214.160156 C 278.332031 214.160156 278.328125 214.15625 278.328125 214.15625 C 278.324219 214.15625 278.324219 214.152344 278.324219 214.152344 C 278.320312 214.148438 278.320312 214.148438 278.316406 214.144531 C 278.3125 214.144531 278.3125 214.140625 278.308594 214.140625 C 278.304688 214.136719 278.304688 214.132812 278.300781 214.132812 C 278.296875 214.128906 278.296875 214.128906 278.296875 214.128906 C 278.292969 214.125 278.292969 214.121094 278.289062 214.121094 C 278.289062 214.121094 278.289062 214.117188 278.285156 214.117188 C 278.285156 214.113281 278.28125 214.113281 278.277344 214.109375 C 278.277344 214.109375 278.273438 214.105469 278.273438 214.105469 C 278.273438 214.105469 278.269531 214.101562 278.269531 214.101562 C 278.265625 214.097656 278.265625 214.097656 278.261719 214.09375 C 278.261719 214.09375 278.257812 214.089844 278.257812 214.089844 C 278.253906 214.085938 278.253906 214.085938 278.253906 214.085938 C 278.25 214.082031 278.246094 214.082031 278.246094 214.078125 C 278.242188 214.078125 278.242188 214.074219 278.242188 214.074219 C 278.238281 214.070312 278.234375 214.070312 278.230469 214.066406 C 278.230469 214.066406 278.230469 214.0625 278.230469 214.0625 C 278.226562 214.058594 278.222656 214.058594 278.21875 214.054688 C 278.21875 214.054688 278.214844 214.050781 278.214844 214.050781 C 278.210938 214.046875 278.210938 214.046875 278.207031 214.042969 C 278.207031 214.042969 278.203125 214.039062 278.203125 214.039062 C 278.199219 214.039062 278.195312 214.035156 278.195312 214.03125 C 278.195312 214.03125 278.191406 214.03125 278.191406 214.027344 C 278.1875 214.027344 278.1875 214.023438 278.183594 214.023438 C 278.183594 214.019531 278.179688 214.019531 278.179688 214.019531 C 278.175781 214.015625 278.175781 214.015625 278.171875 214.011719 C 278.171875 214.011719 278.167969 214.007812 278.167969 214.007812 C 278.164062 214.003906 278.164062 214.003906 278.160156 214 C 278.160156 214 278.160156 213.996094 278.15625 213.996094 C 278.152344 213.992188 278.152344 213.992188 278.148438 213.988281 C 278.148438 213.988281 278.148438 213.988281 278.144531 213.988281 C 278.140625 213.984375 278.136719 213.980469 278.132812 213.976562 C 278.132812 213.976562 278.132812 213.976562 278.132812 213.972656 C 278.128906 213.972656 278.125 213.96875 278.121094 213.964844 C 278.121094 213.964844 278.121094 213.960938 278.117188 213.960938 C 278.113281 213.960938 278.113281 213.957031 278.109375 213.957031 C 278.109375 213.953125 278.109375 213.953125 278.105469 213.953125 C 278.105469 213.949219 278.101562 213.945312 278.097656 213.945312 C 278.097656 213.945312 278.097656 213.941406 278.09375 213.941406 C 278.09375 213.9375 278.089844 213.9375 278.085938 213.933594 C 278.085938 213.933594 278.085938 213.929688 278.082031 213.929688 C 278.082031 213.929688 278.078125 213.925781 278.074219 213.925781 C 278.074219 213.921875 278.070312 213.921875 278.070312 213.921875 C 278.070312 213.917969 278.066406 213.914062 278.066406 213.914062 C 278.0625 213.914062 278.0625 213.910156 278.0625 213.910156 C 278.054688 213.902344 278.046875 213.894531 278.039062 213.890625 C 278.035156 213.886719 278.035156 213.886719 278.035156 213.886719 C 278.03125 213.882812 278.03125 213.882812 278.027344 213.878906 C 278.027344 213.875 278.023438 213.875 278.023438 213.875 C 278.019531 213.871094 278.019531 213.867188 278.015625 213.867188 C 278.015625 213.867188 278.011719 213.863281 278.011719 213.863281 C 278.007812 213.863281 278.007812 213.859375 278.003906 213.855469 C 278.003906 213.855469 278 213.855469 278 213.851562 C 277.996094 213.851562 277.996094 213.847656 277.992188 213.847656 C 277.992188 213.84375 277.988281 213.84375 277.988281 213.84375 C 277.984375 213.839844 277.984375 213.839844 277.980469 213.835938 C 277.980469 213.835938 277.976562 213.832031 277.976562 213.832031 C 277.972656 213.828125 277.96875 213.828125 277.96875 213.824219 C 277.96875 213.824219 277.96875 213.824219 277.964844 213.824219 C 277.960938 213.820312 277.957031 213.816406 277.953125 213.8125 C 277.953125 213.8125 277.953125 213.808594 277.949219 213.808594 C 277.949219 213.804688 277.945312 213.804688 277.941406 213.800781 C 277.941406 213.800781 277.941406 213.800781 277.9375 213.800781 C 277.9375 213.796875 277.933594 213.796875 277.933594 213.792969 C 277.929688 213.792969 277.929688 213.789062 277.925781 213.789062 C 277.925781 213.785156 277.921875 213.785156 277.921875 213.78125 C 277.917969 213.78125 277.917969 213.777344 277.914062 213.777344 C 277.914062 213.777344 277.910156 213.773438 277.910156 213.769531 C 277.90625 213.769531 277.90625 213.769531 277.902344 213.765625 C 277.902344 213.765625 277.898438 213.761719 277.898438 213.761719 C 277.898438 213.761719 277.894531 213.757812 277.894531 213.757812 C 277.890625 213.753906 277.886719 213.753906 277.886719 213.75 C 277.882812 213.75 277.882812 213.75 277.882812 213.746094 C 277.878906 213.742188 277.875 213.742188 277.871094 213.738281 C 277.871094 213.734375 277.867188 213.734375 277.867188 213.734375 C 277.863281 213.730469 277.863281 213.730469 277.859375 213.726562 C 277.859375 213.726562 277.855469 213.726562 277.855469 213.722656 C 277.851562 213.71875 277.851562 213.71875 277.847656 213.714844 C 277.847656 213.714844 277.84375 213.714844 277.84375 213.710938 C 277.839844 213.710938 277.839844 213.707031 277.835938 213.707031 C 277.835938 213.703125 277.832031 213.703125 277.832031 213.703125 C 277.828125 213.699219 277.828125 213.699219 277.824219 213.695312 C 277.824219 213.695312 277.820312 213.691406 277.820312 213.691406 C 277.816406 213.691406 277.8125 213.6875 277.8125 213.683594 C 277.808594 213.683594 277.808594 213.683594 277.808594 213.679688 C 277.804688 213.679688 277.804688 213.675781 277.800781 213.675781 C 277.800781 213.671875 277.796875 213.671875 277.796875 213.671875 C 277.792969 213.667969 277.789062 213.664062 277.785156 213.664062 C 277.785156 213.660156 277.785156 213.660156 277.78125 213.65625 C 277.777344 213.65625 277.777344 213.652344 277.773438 213.648438 C 277.773438 213.648438 277.773438 213.648438 277.769531 213.644531 C 277.765625 213.644531 277.765625 213.640625 277.761719 213.640625 C 277.761719 213.636719 277.757812 213.636719 277.757812 213.636719 C 277.753906 213.632812 277.753906 213.632812 277.75 213.628906 C 277.75 213.628906 277.746094 213.625 277.746094 213.625 C 277.742188 213.625 277.742188 213.621094 277.738281 213.621094 C 277.738281 213.617188 277.734375 213.617188 277.734375 213.613281 C 277.730469 213.613281 277.730469 213.609375 277.726562 213.609375 C 277.726562 213.605469 277.722656 213.605469 277.722656 213.605469 C 277.71875 213.601562 277.71875 213.601562 277.714844 213.597656 C 277.714844 213.597656 277.710938 213.597656 277.710938 213.59375 C 277.707031 213.59375 277.707031 213.589844 277.703125 213.585938 C 277.703125 213.585938 277.699219 213.585938 277.699219 213.585938 C 277.695312 213.582031 277.691406 213.578125 277.6875 213.574219 C 277.6875 213.574219 277.683594 213.574219 277.683594 213.574219 C 277.679688 213.570312 277.679688 213.570312 277.675781 213.566406 C 277.675781 213.566406 277.671875 213.5625 277.671875 213.5625 C 277.667969 213.558594 277.664062 213.558594 277.664062 213.554688 C 277.664062 213.554688 277.660156 213.550781 277.660156 213.550781 C 277.65625 213.550781 277.652344 213.546875 277.652344 213.546875 C 277.648438 213.542969 277.648438 213.542969 277.648438 213.542969 C 277.644531 213.539062 277.644531 213.539062 277.640625 213.535156 C 277.640625 213.535156 277.636719 213.535156 277.636719 213.53125 C 277.632812 213.53125 277.632812 213.527344 277.628906 213.527344 C 277.628906 213.527344 277.625 213.523438 277.625 213.523438 C 277.621094 213.519531 277.621094 213.519531 277.617188 213.515625 C 277.617188 213.515625 277.613281 213.511719 277.613281 213.511719 C 277.609375 213.507812 277.605469 213.507812 277.601562 213.503906 C 277.597656 213.5 277.597656 213.5 277.597656 213.5 C 277.59375 213.496094 277.59375 213.496094 277.589844 213.492188 C 277.589844 213.492188 277.585938 213.488281 277.585938 213.488281 C 277.582031 213.484375 277.582031 213.484375 277.578125 213.480469 C 277.578125 213.480469 277.574219 213.480469 277.574219 213.476562 C 277.570312 213.476562 277.570312 213.472656 277.566406 213.472656 C 277.566406 213.46875 277.5625 213.46875 277.5625 213.46875 C 277.558594 213.464844 277.554688 213.464844 277.554688 213.460938 C 277.554688 213.460938 277.550781 213.457031 277.550781 213.457031 C 277.546875 213.457031 277.546875 213.453125 277.542969 213.453125 C 277.542969 213.449219 277.539062 213.449219 277.539062 213.449219 C 277.535156 213.445312 277.535156 213.445312 277.53125 213.441406 C 277.53125 213.441406 277.527344 213.441406 277.527344 213.4375 C 277.523438 213.433594 277.519531 213.433594 277.515625 213.429688 C 277.515625 213.429688 277.515625 213.429688 277.515625 213.425781 C 277.511719 213.421875 277.507812 213.421875 277.503906 213.417969 C 277.503906 213.417969 277.5 213.417969 277.5 213.414062 C 277.496094 213.414062 277.496094 213.414062 277.492188 213.410156 C 277.492188 213.40625 277.488281 213.40625 277.488281 213.40625 C 277.484375 213.402344 277.484375 213.402344 277.480469 213.398438 C 277.480469 213.398438 277.476562 213.398438 277.476562 213.394531 C 277.472656 213.394531 277.472656 213.390625 277.46875 213.390625 C 277.46875 213.390625 277.464844 213.386719 277.464844 213.386719 C 277.460938 213.382812 277.460938 213.382812 277.457031 213.382812 C 277.453125 213.378906 277.453125 213.378906 277.453125 213.378906 C 277.449219 213.375 277.449219 213.375 277.445312 213.371094 C 277.441406 213.367188 277.441406 213.367188 277.441406 213.367188 C 277.429688 213.359375 277.425781 213.355469 277.417969 213.347656 C 277.417969 213.347656 277.414062 213.34375 277.414062 213.34375 C 277.410156 213.339844 277.410156 213.339844 277.40625 213.335938 C 277.402344 213.335938 277.402344 213.335938 277.398438 213.332031 C 277.398438 213.332031 277.394531 213.328125 277.394531 213.328125 C 277.390625 213.324219 277.390625 213.324219 277.386719 213.324219 C 277.386719 213.320312 277.382812 213.320312 277.382812 213.316406 C 277.378906 213.316406 277.378906 213.316406 277.375 213.3125 C 277.375 213.3125 277.371094 213.308594 277.367188 213.308594 C 277.367188 213.304688 277.367188 213.304688 277.363281 213.304688 C 277.359375 213.300781 277.359375 213.300781 277.355469 213.296875 C 277.355469 213.296875 277.355469 213.292969 277.351562 213.292969 C 277.351562 213.289062 277.347656 213.289062 277.34375 213.285156 C 277.34375 213.285156 277.34375 213.285156 277.339844 213.28125 C 277.335938 213.277344 277.332031 213.277344 277.328125 213.273438 C 277.328125 213.273438 277.328125 213.269531 277.328125 213.269531 C 277.324219 213.269531 277.320312 213.265625 277.316406 213.261719 C 277.316406 213.261719 277.316406 213.261719 277.3125 213.257812 C 277.3125 213.257812 277.308594 213.253906 277.304688 213.253906 C 277.304688 213.253906 277.300781 213.25 277.300781 213.25 C 277.300781 213.246094 277.296875 213.246094 277.292969 213.242188 C 277.292969 213.242188 277.292969 213.242188 277.289062 213.238281 C 277.289062 213.238281 277.285156 213.234375 277.28125 213.234375 C 277.28125 213.230469 277.277344 213.230469 277.277344 213.230469 C 277.277344 213.226562 277.273438 213.222656 277.269531 213.222656 C 277.269531 213.222656 277.265625 213.222656 277.265625 213.21875 C 277.261719 213.21875 277.261719 213.214844 277.257812 213.214844 C 277.257812 213.210938 277.253906 213.210938 277.253906 213.210938 C 277.25 213.207031 277.246094 213.203125 277.242188 213.199219 C 277.242188 213.199219 277.238281 213.199219 277.238281 213.199219 C 277.234375 213.195312 277.234375 213.191406 277.230469 213.191406 C 277.230469 213.191406 277.226562 213.1875 277.226562 213.1875 C 277.226562 213.183594 277.222656 213.183594 277.21875 213.179688 C 277.21875 213.179688 277.214844 213.175781 277.214844 213.175781 C 277.210938 213.175781 277.210938 213.171875 277.207031 213.171875 C 277.207031 213.167969 277.203125 213.167969 277.203125 213.164062 C 277.199219 213.164062 277.199219 213.160156 277.195312 213.160156 C 277.195312 213.160156 277.191406 213.15625 277.191406 213.15625 C 277.1875 213.152344 277.183594 213.152344 277.183594 213.148438 C 277.183594 213.148438 277.179688 213.148438 277.179688 213.144531 C 277.175781 213.144531 277.171875 213.140625 277.167969 213.140625 C 277.167969 213.136719 277.167969 213.136719 277.164062 213.136719 C 277.164062 213.132812 277.160156 213.128906 277.152344 213.125 C 277.148438 213.125 277.144531 213.121094 277.140625 213.117188 C 277.140625 213.117188 277.140625 213.117188 277.140625 213.113281 C 277.136719 213.113281 277.132812 213.109375 277.132812 213.109375 C 277.128906 213.105469 277.128906 213.105469 277.125 213.105469 C 277.125 213.101562 277.121094 213.097656 277.117188 213.097656 C 277.117188 213.097656 277.113281 213.09375 277.113281 213.09375 C 277.113281 213.09375 277.109375 213.089844 277.105469 213.089844 C 277.105469 213.085938 277.101562 213.085938 277.101562 213.085938 C 277.097656 213.082031 277.097656 213.082031 277.09375 213.078125 C 277.09375 213.078125 277.089844 213.074219 277.089844 213.074219 C 277.085938 213.074219 277.082031 213.070312 277.082031 213.070312 C 277.082031 213.066406 277.078125 213.066406 277.078125 213.066406 C 277.074219 213.0625 277.070312 213.0625 277.066406 213.058594 C 277.066406 213.058594 277.066406 213.054688 277.066406 213.054688 C 277.0625 213.050781 277.058594 213.050781 277.054688 213.046875 C 277.050781 213.042969 277.050781 213.042969 277.050781 213.042969 C 277.046875 213.039062 277.046875 213.039062 277.042969 213.035156 C 277.039062 213.035156 277.039062 213.03125 277.035156 213.03125 C 277.035156 213.03125 277.03125 213.027344 277.03125 213.027344 C 277.03125 213.027344 277.027344 213.023438 277.027344 213.023438 C 277.023438 213.019531 277.019531 213.019531 277.019531 213.015625 C 277.015625 213.015625 277.015625 213.015625 277.015625 213.011719 C 277.011719 213.011719 277.007812 213.007812 277.007812 213.007812 C 277.003906 213.003906 277.003906 213.003906 277.003906 213.003906 C 277 213 277 213 276.996094 213 C 276.996094 212.996094 276.992188 212.996094 276.992188 212.996094 C 276.988281 212.992188 276.984375 212.988281 276.984375 212.988281 C 276.980469 212.984375 276.980469 212.984375 276.980469 212.984375 C 276.976562 212.980469 276.972656 212.976562 276.96875 212.976562 C 276.96875 212.972656 276.96875 212.972656 276.964844 212.972656 C 276.964844 212.96875 276.960938 212.96875 276.957031 212.964844 C 276.957031 212.964844 276.953125 212.964844 276.953125 212.964844 C 276.949219 212.960938 276.945312 212.957031 276.945312 212.957031 C 276.945312 212.957031 276.941406 212.953125 276.941406 212.953125 C 276.9375 212.949219 276.9375 212.949219 276.933594 212.945312 C 276.929688 212.945312 276.929688 212.945312 276.929688 212.941406 C 276.925781 212.941406 276.921875 212.9375 276.921875 212.9375 C 276.917969 212.933594 276.917969 212.933594 276.914062 212.933594 C 276.914062 212.929688 276.910156 212.929688 276.90625 212.925781 C 276.90625 212.925781 276.90625 212.925781 276.90625 212.921875 C 276.902344 212.921875 276.898438 212.917969 276.894531 212.917969 C 276.894531 212.914062 276.894531 212.914062 276.890625 212.914062 C 276.886719 212.910156 276.882812 212.90625 276.878906 212.902344 C 276.875 212.898438 276.871094 212.898438 276.867188 212.894531 C 276.867188 212.894531 276.863281 212.894531 276.863281 212.890625 C 276.859375 212.890625 276.859375 212.886719 276.855469 212.886719 C 276.851562 212.882812 276.851562 212.882812 276.851562 212.882812 C 276.847656 212.878906 276.84375 212.878906 276.84375 212.875 C 276.839844 212.875 276.839844 212.871094 276.839844 212.871094 C 276.835938 212.871094 276.832031 212.867188 276.832031 212.867188 C 276.828125 212.867188 276.828125 212.863281 276.824219 212.863281 C 276.824219 212.859375 276.820312 212.859375 276.816406 212.855469 C 276.816406 212.855469 276.816406 212.855469 276.8125 212.851562 C 276.808594 212.851562 276.808594 212.847656 276.804688 212.847656 C 276.804688 212.84375 276.804688 212.84375 276.800781 212.84375 C 276.796875 212.839844 276.792969 212.835938 276.789062 212.832031 C 276.785156 212.832031 276.78125 212.828125 276.777344 212.824219 C 276.777344 212.820312 276.773438 212.820312 276.773438 212.820312 C 276.769531 212.816406 276.769531 212.816406 276.765625 212.8125 C 276.761719 212.8125 276.761719 212.808594 276.761719 212.808594 C 276.757812 212.808594 276.753906 212.804688 276.753906 212.804688 C 276.75 212.800781 276.75 212.800781 276.746094 212.800781 C 276.746094 212.796875 276.742188 212.796875 276.742188 212.792969 C 276.738281 212.792969 276.738281 212.789062 276.734375 212.789062 C 276.734375 212.785156 276.730469 212.785156 276.726562 212.78125 C 276.726562 212.78125 276.722656 212.78125 276.722656 212.777344 C 276.71875 212.777344 276.714844 212.773438 276.714844 212.773438 C 276.710938 212.769531 276.710938 212.769531 276.710938 212.769531 C 276.707031 212.765625 276.703125 212.761719 276.699219 212.757812 C 276.699219 212.757812 276.699219 212.757812 276.695312 212.757812 C 276.691406 212.753906 276.6875 212.75 276.683594 212.746094 C 276.683594 212.746094 276.679688 212.746094 276.679688 212.742188 C 276.675781 212.742188 276.675781 212.738281 276.671875 212.738281 C 276.667969 212.734375 276.667969 212.734375 276.667969 212.734375 C 276.664062 212.730469 276.660156 212.730469 276.65625 212.726562 C 276.65625 212.726562 276.652344 212.722656 276.652344 212.722656 C 276.648438 212.71875 276.648438 212.71875 276.644531 212.714844 C 276.644531 212.714844 276.640625 212.710938 276.640625 212.710938 C 276.636719 212.710938 276.636719 212.707031 276.632812 212.707031 C 276.628906 212.703125 276.628906 212.703125 276.628906 212.703125 C 276.625 212.699219 276.621094 212.695312 276.617188 212.695312 C 276.617188 212.695312 276.617188 212.691406 276.617188 212.691406 C 276.613281 212.6875 276.609375 212.6875 276.605469 212.683594 C 276.605469 212.683594 276.601562 212.683594 276.601562 212.683594 C 276.59375 212.675781 276.585938 212.667969 276.574219 212.664062 C 276.574219 212.660156 276.574219 212.660156 276.574219 212.660156 C 276.570312 212.65625 276.566406 212.65625 276.5625 212.652344 C 276.5625 212.652344 276.558594 212.652344 276.558594 212.648438 C 276.554688 212.648438 276.550781 212.644531 276.550781 212.644531 C 276.546875 212.640625 276.546875 212.640625 276.546875 212.640625 C 276.542969 212.636719 276.539062 212.636719 276.535156 212.632812 C 276.535156 212.632812 276.535156 212.632812 276.53125 212.628906 C 276.53125 212.628906 276.527344 212.625 276.523438 212.625 C 276.523438 212.621094 276.519531 212.621094 276.519531 212.621094 C 276.515625 212.617188 276.511719 212.617188 276.507812 212.613281 C 276.503906 212.609375 276.5 212.605469 276.496094 212.601562 C 276.496094 212.601562 276.492188 212.601562 276.492188 212.601562 C 276.484375 212.59375 276.476562 212.585938 276.46875 212.582031 C 276.464844 212.582031 276.464844 212.582031 276.464844 212.582031 C 276.460938 212.578125 276.457031 212.574219 276.453125 212.570312 C 276.449219 212.566406 276.445312 212.5625 276.441406 212.5625 C 276.441406 212.558594 276.4375 212.558594 276.4375 212.558594 C 276.433594 212.554688 276.429688 212.554688 276.425781 212.550781 C 276.421875 212.546875 276.417969 212.542969 276.414062 212.539062 C 276.414062 212.539062 276.414062 212.539062 276.410156 212.539062 C 276.390625 212.523438 276.367188 212.503906 276.34375 212.488281 C 276.339844 212.484375 276.335938 212.484375 276.332031 212.480469 C 276.328125 212.480469 276.328125 212.480469 276.328125 212.480469 C 276.328125 212.476562 276.320312 212.472656 276.316406 212.46875 C 272.367188 209.511719 267.613281 207.925781 262.339844 207.589844 C 262.335938 207.589844 262.335938 207.589844 262.332031 207.589844 C 262.269531 207.589844 262.21875 207.636719 262.214844 207.699219 C 262.210938 207.765625 262.257812 207.820312 262.324219 207.824219 C 267.910156 208.179688 272.726562 209.925781 276.636719 213.011719 Z M 261.453125 296.890625 C 261.472656 296.90625 261.503906 296.917969 261.527344 296.917969 C 261.5625 296.917969 261.597656 296.902344 261.617188 296.875 C 261.742188 296.730469 261.863281 296.582031 261.984375 296.4375 C 261.984375 296.4375 261.988281 296.4375 261.988281 296.433594 C 262 296.417969 262.011719 296.40625 262.023438 296.386719 C 262.023438 296.386719 262.027344 296.386719 262.027344 296.386719 C 262.039062 296.371094 262.050781 296.355469 262.066406 296.339844 C 262.082031 296.324219 262.09375 296.308594 262.105469 296.289062 C 262.753906 295.511719 263.394531 294.722656 264.027344 293.921875 C 264.027344 293.921875 264.03125 293.917969 264.03125 293.917969 C 264.042969 293.902344 264.054688 293.886719 264.066406 293.875 C 264.066406 293.871094 264.070312 293.871094 264.070312 293.867188 C 264.074219 293.863281 264.078125 293.859375 264.078125 293.855469 C 264.082031 293.851562 264.089844 293.84375 264.09375 293.839844 C 264.09375 293.839844 264.097656 293.835938 264.101562 293.832031 C 264.101562 293.824219 264.109375 293.820312 264.113281 293.816406 C 264.113281 293.8125 264.113281 293.8125 264.117188 293.808594 C 264.125 293.800781 264.128906 293.792969 264.136719 293.785156 C 264.140625 293.78125 264.144531 293.773438 264.152344 293.765625 C 264.152344 293.765625 264.15625 293.761719 264.15625 293.761719 C 264.160156 293.757812 264.167969 293.75 264.167969 293.746094 C 264.171875 293.742188 264.171875 293.742188 264.175781 293.738281 C 264.175781 293.734375 264.183594 293.726562 264.1875 293.722656 C 264.1875 293.71875 264.1875 293.71875 264.191406 293.71875 C 264.195312 293.710938 264.199219 293.707031 264.203125 293.699219 C 264.207031 293.699219 264.207031 293.695312 264.207031 293.695312 C 264.214844 293.6875 264.21875 293.683594 264.222656 293.675781 C 264.226562 293.671875 264.226562 293.671875 264.230469 293.667969 C 264.230469 293.664062 264.238281 293.660156 264.238281 293.65625 C 264.242188 293.652344 264.242188 293.648438 264.246094 293.648438 C 264.25 293.644531 264.253906 293.636719 264.257812 293.632812 C 264.257812 293.632812 264.261719 293.628906 264.261719 293.625 C 264.265625 293.621094 264.269531 293.617188 264.273438 293.613281 C 264.277344 293.609375 264.277344 293.609375 264.28125 293.605469 C 264.285156 293.597656 264.289062 293.59375 264.296875 293.585938 C 264.296875 293.582031 264.296875 293.582031 264.300781 293.578125 C 264.304688 293.574219 264.308594 293.570312 264.3125 293.566406 C 264.3125 293.5625 264.316406 293.558594 264.320312 293.554688 C 264.320312 293.550781 264.324219 293.546875 264.328125 293.542969 C 264.332031 293.542969 264.332031 293.539062 264.335938 293.535156 C 264.335938 293.53125 264.339844 293.527344 264.34375 293.523438 C 264.347656 293.519531 264.347656 293.519531 264.351562 293.515625 C 264.355469 293.507812 264.359375 293.503906 264.367188 293.496094 C 264.367188 293.492188 264.367188 293.492188 264.371094 293.492188 C 264.375 293.488281 264.378906 293.480469 264.382812 293.476562 C 264.386719 293.472656 264.386719 293.46875 264.390625 293.464844 C 264.394531 293.460938 264.394531 293.460938 264.398438 293.457031 C 264.402344 293.453125 264.40625 293.449219 264.40625 293.445312 C 264.410156 293.441406 264.414062 293.4375 264.414062 293.4375 C 264.417969 293.433594 264.421875 293.425781 264.421875 293.425781 C 264.425781 293.421875 264.421875 293.425781 264.421875 293.421875 C 264.429688 293.414062 264.4375 293.402344 264.445312 293.394531 C 264.449219 293.390625 264.453125 293.386719 264.453125 293.382812 C 264.457031 293.382812 264.457031 293.378906 264.460938 293.375 C 264.464844 293.371094 264.46875 293.367188 264.472656 293.363281 C 264.472656 293.359375 264.476562 293.359375 264.476562 293.355469 C 264.480469 293.351562 264.484375 293.347656 264.488281 293.34375 C 264.488281 293.339844 264.492188 293.335938 264.496094 293.332031 C 264.496094 293.332031 264.5 293.328125 264.5 293.324219 C 264.507812 293.320312 264.511719 293.308594 264.515625 293.304688 C 264.519531 293.300781 264.523438 293.296875 264.523438 293.292969 C 264.527344 293.289062 264.53125 293.289062 264.53125 293.285156 C 264.535156 293.28125 264.539062 293.277344 264.539062 293.273438 C 264.542969 293.269531 264.546875 293.265625 264.550781 293.261719 C 264.550781 293.261719 264.554688 293.257812 264.554688 293.253906 C 264.558594 293.25 264.5625 293.246094 264.566406 293.242188 C 264.566406 293.238281 264.570312 293.238281 264.570312 293.234375 C 264.574219 293.230469 264.582031 293.222656 264.585938 293.214844 C 264.589844 293.210938 264.59375 293.207031 264.59375 293.203125 C 264.597656 293.199219 264.601562 293.195312 264.601562 293.191406 C 264.605469 293.1875 264.609375 293.1875 264.609375 293.183594 C 264.613281 293.179688 264.617188 293.175781 264.617188 293.171875 C 264.621094 293.171875 264.625 293.164062 264.625 293.164062 C 264.628906 293.160156 264.632812 293.15625 264.636719 293.152344 C 264.636719 293.148438 264.636719 293.148438 264.640625 293.144531 C 264.648438 293.136719 264.652344 293.128906 264.660156 293.117188 L 264.664062 293.113281 C 264.667969 293.109375 264.671875 293.105469 264.675781 293.097656 C 264.679688 293.097656 264.679688 293.09375 264.679688 293.09375 C 264.683594 293.089844 264.6875 293.082031 264.691406 293.078125 C 264.695312 293.078125 264.695312 293.074219 264.695312 293.074219 C 264.699219 293.070312 264.703125 293.066406 264.707031 293.058594 L 264.710938 293.054688 C 264.722656 293.039062 264.734375 293.023438 264.75 293.007812 C 264.75 293.007812 264.75 293.003906 264.753906 293.003906 C 264.757812 293 264.761719 292.992188 264.765625 292.988281 C 264.765625 292.988281 264.769531 292.984375 264.769531 292.980469 C 264.773438 292.976562 264.777344 292.972656 264.78125 292.96875 C 264.78125 292.964844 264.78125 292.964844 264.785156 292.964844 C 264.792969 292.953125 264.800781 292.941406 264.808594 292.929688 C 264.8125 292.925781 264.816406 292.921875 264.820312 292.917969 C 264.820312 292.917969 264.824219 292.910156 264.828125 292.910156 C 264.828125 292.90625 264.832031 292.902344 264.835938 292.898438 C 264.839844 292.894531 264.839844 292.894531 264.839844 292.890625 C 264.84375 292.886719 264.847656 292.882812 264.851562 292.878906 C 264.851562 292.875 264.855469 292.871094 264.855469 292.871094 C 264.863281 292.859375 264.871094 292.851562 264.875 292.84375 C 264.878906 292.84375 264.878906 292.839844 264.878906 292.839844 C 264.882812 292.835938 264.886719 292.832031 264.890625 292.828125 C 264.890625 292.824219 264.894531 292.820312 264.898438 292.816406 C 264.898438 292.8125 264.902344 292.808594 264.90625 292.804688 C 264.910156 292.800781 264.910156 292.800781 264.914062 292.796875 C 264.914062 292.792969 264.917969 292.789062 264.921875 292.785156 C 264.925781 292.785156 264.925781 292.78125 264.929688 292.777344 C 264.933594 292.773438 264.933594 292.769531 264.9375 292.765625 C 264.941406 292.761719 264.941406 292.757812 264.949219 292.753906 C 264.953125 292.746094 264.957031 292.742188 264.960938 292.734375 C 264.964844 292.734375 264.96875 292.730469 264.96875 292.726562 C 264.972656 292.722656 264.972656 292.71875 264.976562 292.714844 C 264.980469 292.710938 264.980469 292.710938 264.980469 292.707031 C 264.984375 292.703125 264.988281 292.699219 264.992188 292.695312 C 264.996094 292.691406 264.996094 292.691406 265 292.6875 C 265 292.683594 265.003906 292.679688 265.007812 292.675781 C 265.015625 292.664062 265.023438 292.65625 265.03125 292.644531 C 265.035156 292.640625 265.035156 292.636719 265.039062 292.636719 C 265.039062 292.632812 265.042969 292.628906 265.046875 292.625 C 265.050781 292.621094 265.050781 292.621094 265.054688 292.617188 C 265.058594 292.613281 265.058594 292.609375 265.0625 292.605469 C 265.0625 292.601562 265.066406 292.597656 265.070312 292.59375 C 265.074219 292.589844 265.074219 292.589844 265.078125 292.582031 L 265.082031 292.578125 C 265.089844 292.570312 265.097656 292.558594 265.105469 292.550781 L 265.109375 292.546875 C 265.113281 292.539062 265.117188 292.535156 265.121094 292.53125 C 265.121094 292.527344 265.121094 292.527344 265.125 292.527344 C 265.128906 292.523438 265.132812 292.515625 265.136719 292.511719 C 265.136719 292.507812 265.136719 292.511719 265.136719 292.507812 C 265.140625 292.503906 265.148438 292.496094 265.152344 292.492188 C 265.164062 292.472656 265.179688 292.457031 265.191406 292.4375 C 265.191406 292.4375 265.191406 292.4375 265.195312 292.4375 C 265.199219 292.429688 265.203125 292.425781 265.207031 292.421875 C 265.207031 292.417969 265.207031 292.417969 265.210938 292.417969 C 265.214844 292.410156 265.21875 292.40625 265.222656 292.402344 C 265.238281 292.382812 265.25 292.363281 265.265625 292.347656 C 265.269531 292.339844 265.273438 292.335938 265.277344 292.328125 L 265.28125 292.328125 C 265.296875 292.304688 265.316406 292.277344 265.332031 292.253906 L 265.335938 292.253906 C 265.339844 292.25 265.34375 292.242188 265.347656 292.238281 L 265.347656 292.234375 C 265.371094 292.207031 265.394531 292.175781 265.417969 292.144531 C 265.425781 292.136719 265.429688 292.132812 265.433594 292.125 C 265.449219 292.101562 265.46875 292.078125 265.488281 292.054688 L 265.488281 292.050781 C 265.492188 292.046875 265.5 292.039062 265.503906 292.035156 C 265.503906 292.035156 265.503906 292.035156 265.503906 292.03125 C 265.523438 292.007812 265.542969 291.984375 265.558594 291.960938 C 265.566406 291.953125 265.570312 291.949219 265.574219 291.941406 C 265.597656 291.914062 265.621094 291.882812 265.644531 291.851562 C 265.664062 291.824219 265.679688 291.800781 265.699219 291.777344 C 265.703125 291.773438 265.707031 291.765625 265.710938 291.757812 C 265.734375 291.730469 265.757812 291.699219 265.78125 291.667969 C 274.738281 279.824219 280.96875 267.304688 284.242188 255.636719 C 284.257812 255.570312 284.222656 255.507812 284.160156 255.488281 C 284.148438 255.484375 284.136719 255.484375 284.125 255.484375 C 284.074219 255.484375 284.027344 255.519531 284.011719 255.570312 C 280.414062 268.417969 273.476562 281.585938 263.953125 293.648438 C 263.132812 294.683594 262.289062 295.722656 261.441406 296.730469 C 261.394531 296.773438 261.402344 296.847656 261.453125 296.890625 Z M 251.875 307.042969 C 251.851562 307.019531 251.820312 307.003906 251.789062 307.003906 C 251.761719 307.003906 251.730469 307.015625 251.707031 307.039062 C 238.652344 319.347656 223.78125 327.53125 210.90625 329.492188 C 210.84375 329.5 210.800781 329.5625 210.808594 329.625 C 210.816406 329.683594 210.867188 329.726562 210.925781 329.726562 C 210.929688 329.726562 210.9375 329.726562 210.941406 329.726562 C 223.765625 327.773438 238.488281 319.824219 251.871094 307.210938 C 251.917969 307.164062 251.921875 307.089844 251.875 307.042969 Z M 187.351562 233.628906 C 173.347656 212.101562 155.390625 194.992188 136.785156 185.441406 C 126.644531 180.234375 116.972656 177.621094 108.285156 177.621094 C 101.289062 177.621094 94.941406 179.332031 89.488281 182.738281 C 115.390625 170.210938 156.953125 192.804688 184.648438 235.382812 C 212.429688 278.089844 216.164062 325.378906 193.996094 343.867188 C 219.058594 327.183594 216.121094 277.855469 187.351562 233.628906 Z M 90.675781 195.179688 C 90.960938 196.445312 91.238281 197.59375 91.5 198.617188 C 98.257812 199.652344 105.457031 202.066406 112.917969 205.894531 C 131.59375 215.480469 149.617188 232.648438 163.660156 254.242188 C 191.382812 296.859375 195.15625 344.21875 173.136719 362.882812 C 173.625 362.597656 174.109375 362.308594 174.585938 362 C 179.613281 358.726562 183.523438 354.160156 186.367188 348.617188 C 197.953125 326.035156 191.566406 287.027344 168.28125 251.238281 C 146.234375 217.34375 115.40625 196.117188 90.675781 195.179688 Z M 117.277344 284.441406 C 111.015625 272.722656 102.421875 263.148438 93.078125 257.488281 C 83.753906 251.839844 74.804688 250.769531 67.878906 254.46875 C 65.515625 255.726562 63.453125 257.53125 61.746094 259.832031 C 58.675781 265.574219 57.515625 273.238281 58.398438 281.976562 C 59.304688 290.933594 62.316406 300.40625 67.109375 309.375 C 73.371094 321.097656 81.964844 330.671875 91.308594 336.332031 C 100.632812 341.980469 109.582031 343.050781 116.507812 339.351562 C 118.867188 338.089844 120.929688 336.285156 122.640625 333.984375 C 125.707031 328.242188 126.867188 320.582031 125.984375 311.84375 C 125.078125 302.886719 122.066406 293.410156 117.277344 284.441406 Z M 87.988281 120.269531 L 85.105469 119.007812 C 81.347656 141.667969 81.074219 158.523438 81.0625 162.261719 C 82.449219 162.828125 83.675781 163.675781 84.675781 164.730469 C 84.390625 144.160156 87.648438 122.46875 87.988281 120.269531 Z M 105.953125 79.894531 C 110.910156 67.628906 116.730469 56.679688 123.253906 47.347656 C 131.410156 35.679688 140.691406 26.53125 150.84375 20.144531 C 162.738281 12.664062 175.90625 8.914062 190.191406 8.914062 C 198.71875 8.914062 207.644531 10.25 216.941406 12.925781 C 234.179688 17.886719 249.957031 28.1875 263.832031 43.535156 C 274.925781 55.8125 284.835938 71.324219 293.28125 89.644531 C 307.195312 119.8125 312.535156 147.847656 312.917969 149.90625 L 315.96875 149.316406 C 315.582031 147.164062 309.734375 115.597656 293.871094 82.851562 C 284.269531 63.03125 272.933594 46.664062 260.175781 34.207031 C 244.234375 18.640625 226.019531 9.167969 206.027344 6.050781 C 180.210938 2.019531 157.269531 7.46875 137.835938 22.242188 C 122.910156 33.589844 109.941406 50.757812 100.335938 71.894531 C 92.367188 89.425781 88.285156 106.308594 87.199219 115.488281 L 94.457031 118.503906 C 94.769531 116.757812 97.917969 99.769531 105.953125 79.894531 Z M 310.824219 150.597656 C 311.101562 152.011719 313.789062 166.140625 315.078125 183.898438 L 318.589844 183.675781 C 318.574219 182.632812 318.277344 174.011719 313.617188 150.023438 Z M 310.824219 150.597656 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#2f2f34" d="M 312.484375 237.84375 L 315.265625 223.527344 L 317.175781 223.621094 C 317.179688 223.621094 317.179688 223.621094 317.179688 223.621094 C 317.238281 223.621094 317.285156 223.578125 317.296875 223.523438 C 320.457031 207.765625 318.847656 184.015625 318.828125 183.777344 C 318.828125 183.550781 318.777344 175.347656 313.847656 149.96875 L 316.128906 149.527344 C 316.191406 149.515625 316.234375 149.453125 316.222656 149.390625 C 316.167969 149.066406 310.453125 116.535156 294.089844 82.753906 C 284.476562 62.90625 273.125 46.519531 260.347656 34.039062 C 244.417969 18.484375 226.21875 9.003906 206.253906 5.847656 C 206.226562 5.773438 206.175781 5.710938 206.089844 5.699219 C 205.765625 5.640625 173.28125 -0.015625 137.085938 12.367188 C 115.816406 19.640625 97.445312 31.617188 82.480469 47.972656 C 63.773438 68.40625 50.367188 95.765625 42.628906 129.289062 C 42.628906 129.292969 42.632812 129.300781 42.632812 129.308594 C 42.628906 129.316406 42.625 129.320312 42.625 129.328125 C 42.625 129.339844 42.632812 129.347656 42.632812 129.359375 C 42.636719 129.386719 42.640625 129.414062 42.652344 129.4375 C 42.660156 129.453125 42.671875 129.46875 42.679688 129.484375 C 42.6875 129.492188 42.691406 129.503906 42.699219 129.515625 C 42.707031 129.519531 42.722656 129.519531 42.730469 129.523438 C 42.742188 129.535156 42.75 129.550781 42.765625 129.558594 L 46.429688 131.171875 C 46.460938 131.011719 46.492188 130.851562 46.519531 130.695312 L 43.535156 129.378906 L 87.058594 115.8125 L 93.824219 118.625 L 88.476562 120.113281 C 88.472656 120.027344 88.429688 119.941406 88.347656 119.90625 L 85.019531 118.453125 C 84.953125 118.421875 84.878906 118.425781 84.8125 118.460938 C 84.75 118.496094 84.703125 118.558594 84.691406 118.628906 C 84.6875 118.667969 84.679688 118.707031 84.675781 118.746094 C 80.9375 141.171875 80.613281 157.972656 80.59375 162.078125 C 80.402344 162.011719 80.214844 161.945312 80.019531 161.886719 L 79.960938 161.871094 C 79.890625 161.851562 79.816406 161.863281 79.757812 161.910156 C 79.699219 161.953125 79.660156 162.019531 79.660156 162.09375 C 79.660156 162.097656 79.660156 162.121094 79.660156 162.128906 C 79.640625 162.949219 79.1875 188.71875 86.851562 208.746094 C 86.851562 208.75 86.859375 208.75 86.859375 208.753906 C 86.886719 208.816406 86.933594 208.867188 86.996094 208.886719 C 87.023438 208.894531 87.046875 208.898438 87.074219 208.898438 C 87.117188 208.898438 87.160156 208.886719 87.199219 208.863281 L 91.390625 206.226562 C 94.230469 216.007812 99.878906 231.90625 108.738281 241.636719 C 111.769531 244.96875 115.027344 248.488281 118.570312 251.636719 C 125.402344 257.714844 131.449219 264.988281 136.550781 273.253906 C 155.664062 304.242188 155.007812 339.449219 135.09375 351.734375 C 125.460938 357.675781 112.800781 357.429688 99.445312 351.042969 C 86.054688 344.644531 73.574219 332.839844 64.308594 317.816406 C 53.277344 299.933594 48.445312 280.257812 51.050781 263.800781 C 55.117188 237.9375 50.351562 215.96875 49.820312 213.648438 L 50.273438 213.464844 C 50.054688 213.414062 49.832031 213.371094 49.613281 213.3125 C 49.613281 213.3125 49.585938 213.285156 49.546875 213.246094 L 49.457031 213.28125 L 49.261719 213.359375 L 49.3125 213.558594 C 49.332031 213.640625 50.039062 216.597656 50.75 221.585938 C 46.128906 233.917969 45.976562 250.035156 50.132812 267.464844 C 48.71875 283.199219 53.632812 301.410156 63.90625 318.0625 C 73.21875 333.167969 85.769531 345.03125 99.242188 351.472656 C 102.453125 353.011719 105.625 354.175781 108.730469 355.007812 C 122.96875 365.148438 137.589844 370.78125 150.429688 370.78125 C 157.597656 370.78125 164.214844 369.03125 169.898438 365.332031 C 171.042969 364.589844 172.109375 363.753906 173.140625 362.882812 C 195.160156 344.21875 191.386719 296.859375 163.664062 254.242188 C 149.617188 232.648438 131.597656 215.480469 112.917969 205.894531 C 105.460938 202.066406 98.261719 199.652344 91.503906 198.617188 C 91.238281 197.59375 90.960938 196.445312 90.679688 195.179688 C 89.957031 191.941406 89.210938 187.921875 88.601562 183.183594 C 88.894531 183.03125 89.191406 182.882812 89.488281 182.738281 C 94.941406 179.332031 101.289062 177.621094 108.285156 177.621094 C 116.972656 177.621094 126.644531 180.238281 136.789062 185.441406 C 155.394531 194.992188 173.351562 212.101562 187.351562 233.628906 C 216.125 277.855469 219.058594 327.183594 193.996094 343.867188 C 193.027344 344.675781 192.023438 345.449219 190.953125 346.148438 C 190.863281 346.207031 190.769531 346.257812 190.679688 346.316406 C 190.84375 346.234375 191.011719 346.15625 191.171875 346.074219 C 192.132812 345.578125 193.074219 345.050781 193.984375 344.460938 C 196.980469 342.507812 199.574219 340.085938 201.796875 337.285156 C 207.386719 330.242188 210.535156 320.714844 211.289062 309.667969 C 211.726562 309.699219 212.171875 309.71875 212.625 309.71875 C 213.050781 309.71875 213.488281 309.699219 213.925781 309.667969 L 213.925781 309.679688 L 214.183594 309.660156 L 214.398438 309.644531 L 214.398438 309.636719 C 226.367188 308.617188 241.441406 297.664062 252.878906 281.652344 C 261.839844 269.101562 267.335938 254.980469 267.617188 243.816406 L 267.621094 243.816406 L 267.625 243.601562 L 267.628906 243.34375 L 267.625 243.34375 C 267.714844 235.839844 265.476562 230.234375 261.132812 227.132812 C 249.933594 219.132812 227.996094 230.566406 212.238281 252.628906 C 209.046875 257.097656 206.359375 261.664062 204.179688 266.171875 C 202.203125 260.679688 199.824219 255.128906 197.050781 249.585938 C 198.363281 247.722656 199.734375 245.878906 201.160156 244.070312 C 203.230469 241.453125 205.410156 238.898438 207.648438 236.484375 C 207.691406 236.4375 207.691406 236.363281 207.640625 236.316406 C 207.617188 236.296875 207.589844 236.285156 207.5625 236.285156 C 207.527344 236.285156 207.496094 236.296875 207.472656 236.324219 C 206.761719 237.09375 206.054688 237.875 205.351562 238.671875 C 205.300781 238.730469 205.25 238.789062 205.199219 238.847656 C 205.191406 238.859375 205.183594 238.867188 205.175781 238.878906 C 205.171875 238.878906 205.175781 238.878906 205.171875 238.878906 C 205.164062 238.886719 205.15625 238.894531 205.148438 238.90625 L 205.148438 238.910156 C 205.140625 238.917969 205.128906 238.925781 205.125 238.9375 C 205.121094 238.9375 205.125 238.9375 205.121094 238.9375 C 205.113281 238.945312 205.105469 238.957031 205.097656 238.964844 L 205.09375 238.96875 C 205.070312 238.996094 205.046875 239.023438 205.023438 239.050781 C 205.019531 239.054688 205.019531 239.054688 205.019531 239.054688 C 205.011719 239.0625 205.003906 239.074219 205 239.078125 C 204.996094 239.082031 204.996094 239.085938 204.992188 239.085938 C 204.988281 239.09375 204.980469 239.101562 204.972656 239.109375 C 204.972656 239.109375 204.96875 239.113281 204.96875 239.113281 C 204.960938 239.121094 204.953125 239.128906 204.945312 239.136719 C 204.945312 239.140625 204.941406 239.140625 204.941406 239.144531 C 204.933594 239.152344 204.925781 239.160156 204.917969 239.167969 C 204.917969 239.167969 204.917969 239.171875 204.914062 239.171875 C 204.90625 239.179688 204.902344 239.1875 204.894531 239.199219 C 204.894531 239.199219 204.890625 239.199219 204.890625 239.203125 C 204.882812 239.210938 204.875 239.21875 204.867188 239.230469 C 204.859375 239.238281 204.851562 239.246094 204.84375 239.257812 C 204.839844 239.257812 204.839844 239.257812 204.839844 239.257812 C 204.832031 239.265625 204.824219 239.277344 204.820312 239.285156 C 204.816406 239.285156 204.816406 239.289062 204.8125 239.289062 C 204.808594 239.296875 204.800781 239.304688 204.792969 239.3125 C 204.792969 239.316406 204.789062 239.320312 204.789062 239.320312 C 204.78125 239.328125 204.773438 239.335938 204.765625 239.34375 C 204.765625 239.347656 204.765625 239.347656 204.761719 239.347656 C 204.753906 239.359375 204.746094 239.363281 204.742188 239.375 C 204.742188 239.375 204.738281 239.378906 204.738281 239.378906 C 204.730469 239.386719 204.722656 239.394531 204.714844 239.402344 C 204.714844 239.40625 204.714844 239.40625 204.710938 239.40625 C 204.703125 239.417969 204.695312 239.425781 204.6875 239.433594 C 204.6875 239.433594 204.6875 239.433594 204.683594 239.4375 C 204.679688 239.445312 204.671875 239.453125 204.664062 239.460938 C 204.664062 239.460938 204.664062 239.460938 204.660156 239.464844 C 204.652344 239.472656 204.644531 239.480469 204.640625 239.488281 C 204.636719 239.492188 204.636719 239.492188 204.636719 239.492188 C 204.628906 239.5 204.621094 239.511719 204.613281 239.519531 C 204.613281 239.519531 204.609375 239.523438 204.609375 239.523438 C 204.601562 239.53125 204.597656 239.539062 204.589844 239.546875 C 204.585938 239.550781 204.582031 239.554688 204.582031 239.554688 C 204.574219 239.5625 204.570312 239.570312 204.5625 239.578125 C 204.5625 239.582031 204.558594 239.585938 204.558594 239.585938 C 204.550781 239.59375 204.546875 239.601562 204.539062 239.609375 C 204.535156 239.613281 204.535156 239.613281 204.53125 239.617188 C 204.527344 239.625 204.519531 239.632812 204.511719 239.640625 C 204.511719 239.644531 204.507812 239.644531 204.507812 239.648438 C 204.5 239.652344 204.496094 239.660156 204.488281 239.667969 C 204.488281 239.667969 204.484375 239.671875 204.480469 239.675781 C 204.476562 239.683594 204.46875 239.6875 204.464844 239.695312 C 204.460938 239.699219 204.460938 239.699219 204.457031 239.703125 C 204.453125 239.710938 204.445312 239.71875 204.4375 239.726562 C 204.4375 239.726562 204.433594 239.730469 204.433594 239.734375 C 204.425781 239.742188 204.417969 239.746094 204.414062 239.753906 C 204.410156 239.757812 204.410156 239.761719 204.40625 239.761719 C 204.398438 239.769531 204.394531 239.777344 204.386719 239.785156 C 204.386719 239.785156 204.382812 239.792969 204.378906 239.792969 C 204.375 239.800781 204.367188 239.808594 204.359375 239.816406 C 204.359375 239.820312 204.355469 239.820312 204.355469 239.824219 C 204.347656 239.832031 204.34375 239.839844 204.335938 239.84375 C 204.335938 239.847656 204.328125 239.851562 204.328125 239.855469 C 204.324219 239.859375 204.316406 239.867188 204.3125 239.871094 C 204.308594 239.875 204.304688 239.878906 204.300781 239.882812 C 204.296875 239.890625 204.292969 239.894531 204.289062 239.902344 C 204.285156 239.90625 204.28125 239.910156 204.277344 239.914062 C 204.273438 239.921875 204.265625 239.925781 204.261719 239.929688 C 204.257812 239.933594 204.257812 239.9375 204.253906 239.941406 C 204.25 239.949219 204.242188 239.953125 204.238281 239.960938 C 204.234375 239.964844 204.230469 239.96875 204.226562 239.972656 C 204.222656 239.980469 204.214844 239.984375 204.210938 239.992188 C 204.210938 239.996094 204.203125 240 204.203125 240.003906 C 204.195312 240.007812 204.191406 240.015625 204.1875 240.023438 C 204.183594 240.027344 204.179688 240.03125 204.175781 240.035156 C 204.171875 240.039062 204.167969 240.042969 204.164062 240.046875 C 204.160156 240.054688 204.152344 240.058594 204.148438 240.066406 C 204.144531 240.066406 204.144531 240.074219 204.140625 240.078125 C 204.132812 240.082031 204.128906 240.089844 204.125 240.09375 C 204.121094 240.097656 204.117188 240.101562 204.113281 240.105469 C 204.109375 240.113281 204.101562 240.121094 204.097656 240.125 C 204.097656 240.128906 204.09375 240.132812 204.089844 240.136719 C 204.082031 240.144531 204.078125 240.148438 204.070312 240.15625 C 204.070312 240.160156 204.066406 240.164062 204.0625 240.167969 C 204.058594 240.171875 204.054688 240.179688 204.050781 240.183594 C 204.046875 240.1875 204.039062 240.191406 204.035156 240.199219 C 204.03125 240.203125 204.03125 240.207031 204.027344 240.210938 C 204.019531 240.21875 204.015625 240.222656 204.011719 240.230469 C 204.007812 240.234375 204.003906 240.238281 204 240.242188 C 203.996094 240.246094 203.992188 240.253906 203.988281 240.257812 C 203.984375 240.261719 203.976562 240.269531 203.972656 240.273438 C 203.972656 240.277344 203.96875 240.28125 203.964844 240.285156 C 203.957031 240.292969 203.953125 240.296875 203.949219 240.304688 C 203.945312 240.308594 203.941406 240.3125 203.941406 240.316406 C 203.933594 240.324219 203.929688 240.328125 203.921875 240.335938 C 203.917969 240.339844 203.914062 240.34375 203.914062 240.347656 C 203.90625 240.355469 203.902344 240.359375 203.894531 240.367188 C 203.894531 240.371094 203.890625 240.375 203.886719 240.378906 C 203.882812 240.382812 203.875 240.390625 203.871094 240.398438 C 203.867188 240.402344 203.863281 240.40625 203.859375 240.410156 C 203.855469 240.414062 203.851562 240.417969 203.847656 240.421875 C 203.84375 240.429688 203.839844 240.433594 203.832031 240.441406 C 203.828125 240.445312 203.824219 240.449219 203.820312 240.453125 C 203.820312 240.457031 203.816406 240.460938 203.816406 240.460938 C 203.808594 240.46875 203.800781 240.480469 203.792969 240.484375 C 203.792969 240.488281 203.792969 240.488281 203.789062 240.492188 C 203.785156 240.5 203.777344 240.507812 203.769531 240.515625 C 203.765625 240.519531 203.765625 240.523438 203.761719 240.523438 C 203.753906 240.53125 203.75 240.539062 203.742188 240.546875 C 203.738281 240.550781 203.738281 240.550781 203.734375 240.554688 C 203.726562 240.5625 203.722656 240.570312 203.714844 240.578125 C 203.714844 240.582031 203.710938 240.582031 203.707031 240.585938 C 203.703125 240.59375 203.691406 240.605469 203.6875 240.613281 C 203.683594 240.613281 203.683594 240.617188 203.683594 240.617188 C 203.675781 240.625 203.667969 240.632812 203.660156 240.644531 C 203.660156 240.644531 203.65625 240.648438 203.65625 240.648438 C 203.652344 240.65625 203.648438 240.660156 203.644531 240.664062 C 203.640625 240.667969 203.640625 240.667969 203.636719 240.671875 C 203.628906 240.679688 203.621094 240.6875 203.617188 240.695312 C 203.613281 240.699219 203.613281 240.699219 203.609375 240.703125 C 203.605469 240.710938 203.597656 240.71875 203.589844 240.726562 C 203.589844 240.730469 203.585938 240.730469 203.585938 240.734375 C 203.578125 240.742188 203.570312 240.75 203.5625 240.757812 C 203.558594 240.761719 203.558594 240.765625 203.554688 240.765625 C 203.550781 240.773438 203.542969 240.78125 203.539062 240.789062 C 203.535156 240.789062 203.53125 240.792969 203.527344 240.796875 C 203.523438 240.804688 203.515625 240.8125 203.507812 240.820312 C 203.507812 240.824219 203.503906 240.824219 203.503906 240.828125 C 203.496094 240.835938 203.488281 240.84375 203.480469 240.855469 C 203.464844 240.871094 203.453125 240.886719 203.4375 240.902344 C 203.4375 240.90625 203.4375 240.90625 203.433594 240.910156 C 203.425781 240.917969 203.421875 240.925781 203.414062 240.9375 C 203.410156 240.9375 203.410156 240.9375 203.410156 240.941406 C 203.402344 240.949219 203.394531 240.960938 203.386719 240.96875 C 203.386719 240.96875 203.382812 240.96875 203.382812 240.972656 C 203.375 240.980469 203.367188 240.992188 203.359375 241 C 203.359375 241 203.355469 241.003906 203.355469 241.003906 C 203.347656 241.011719 203.339844 241.019531 203.332031 241.03125 C 203.332031 241.03125 203.332031 241.035156 203.328125 241.035156 C 203.320312 241.046875 203.3125 241.054688 203.304688 241.0625 C 203.304688 241.066406 203.304688 241.066406 203.304688 241.066406 C 203.28125 241.09375 203.257812 241.121094 203.238281 241.144531 C 203.238281 241.148438 203.234375 241.148438 203.234375 241.148438 C 203.226562 241.15625 203.21875 241.167969 203.210938 241.179688 C 203.210938 241.179688 203.207031 241.179688 203.207031 241.179688 C 203.199219 241.191406 203.191406 241.199219 203.183594 241.210938 C 203.183594 241.210938 203.179688 241.210938 203.179688 241.214844 C 203.171875 241.222656 203.167969 241.230469 203.15625 241.242188 C 203.15625 241.242188 203.15625 241.246094 203.152344 241.246094 C 203.144531 241.253906 203.136719 241.265625 203.128906 241.273438 C 203.128906 241.273438 203.128906 241.277344 203.128906 241.277344 C 203.105469 241.304688 203.082031 241.332031 203.0625 241.355469 C 203.058594 241.359375 203.058594 241.359375 203.058594 241.359375 C 203.050781 241.371094 203.042969 241.378906 203.035156 241.390625 C 203.035156 241.390625 203.035156 241.390625 203.03125 241.394531 C 203.027344 241.402344 203.015625 241.414062 203.007812 241.421875 C 203.007812 241.421875 203.007812 241.425781 203.003906 241.425781 C 202.996094 241.4375 202.988281 241.445312 202.980469 241.453125 C 202.980469 241.453125 202.980469 241.457031 202.980469 241.457031 C 202.972656 241.46875 202.964844 241.476562 202.953125 241.488281 C 202.9375 241.511719 202.917969 241.53125 202.902344 241.550781 C 202.902344 241.550781 202.902344 241.554688 202.902344 241.554688 C 202.894531 241.558594 202.890625 241.5625 202.886719 241.570312 C 202.878906 241.578125 202.871094 241.589844 202.859375 241.601562 C 202.851562 241.613281 202.84375 241.621094 202.835938 241.632812 C 202.835938 241.632812 202.832031 241.636719 202.832031 241.636719 C 202.824219 241.644531 202.816406 241.65625 202.808594 241.664062 C 202.808594 241.667969 202.808594 241.667969 202.804688 241.671875 C 202.796875 241.679688 202.789062 241.6875 202.78125 241.699219 C 202.75 241.738281 202.71875 241.773438 202.6875 241.8125 C 202.6875 241.8125 202.683594 241.816406 202.683594 241.820312 C 202.675781 241.828125 202.667969 241.835938 202.660156 241.84375 C 202.660156 241.847656 202.660156 241.847656 202.65625 241.847656 C 202.652344 241.859375 202.640625 241.867188 202.636719 241.875 C 202.632812 241.878906 202.632812 241.878906 202.628906 241.882812 C 202.625 241.890625 202.613281 241.898438 202.609375 241.910156 C 202.605469 241.910156 202.605469 241.910156 202.605469 241.914062 C 202.597656 241.921875 202.589844 241.933594 202.582031 241.941406 C 202.578125 241.941406 202.578125 241.945312 202.578125 241.945312 C 202.546875 241.984375 202.515625 242.019531 202.484375 242.058594 C 202.472656 242.070312 202.46875 242.078125 202.460938 242.089844 C 202.457031 242.089844 202.457031 242.089844 202.457031 242.09375 C 202.449219 242.101562 202.4375 242.113281 202.433594 242.121094 C 202.433594 242.121094 202.429688 242.125 202.429688 242.125 C 202.421875 242.136719 202.414062 242.144531 202.40625 242.15625 C 202.40625 242.15625 202.40625 242.15625 202.402344 242.15625 C 202.382812 242.183594 202.359375 242.210938 202.339844 242.238281 C 202.339844 242.238281 202.335938 242.242188 202.335938 242.242188 C 202.328125 242.25 202.320312 242.257812 202.3125 242.269531 C 202.308594 242.273438 202.308594 242.273438 202.308594 242.277344 C 202.300781 242.285156 202.292969 242.292969 202.285156 242.300781 C 202.285156 242.304688 202.28125 242.308594 202.28125 242.308594 C 202.273438 242.316406 202.269531 242.324219 202.261719 242.332031 C 202.257812 242.335938 202.257812 242.339844 202.253906 242.34375 C 202.246094 242.351562 202.242188 242.359375 202.234375 242.367188 C 202.234375 242.367188 202.230469 242.371094 202.230469 242.371094 C 202.222656 242.378906 202.214844 242.390625 202.207031 242.398438 C 202.207031 242.398438 202.203125 242.402344 202.203125 242.40625 C 202.179688 242.433594 202.160156 242.457031 202.136719 242.484375 C 202.136719 242.484375 202.136719 242.484375 202.136719 242.488281 C 202.125 242.5 202.121094 242.503906 202.113281 242.515625 C 202.109375 242.519531 202.109375 242.519531 202.105469 242.523438 C 202.101562 242.53125 202.09375 242.539062 202.085938 242.546875 C 202.082031 242.550781 202.082031 242.550781 202.082031 242.554688 C 202.074219 242.5625 202.066406 242.570312 202.058594 242.578125 C 202.058594 242.582031 202.054688 242.585938 202.054688 242.589844 C 202.046875 242.59375 202.042969 242.605469 202.035156 242.609375 C 202.035156 242.613281 202.03125 242.617188 202.027344 242.621094 C 202.019531 242.628906 202.015625 242.632812 202.007812 242.644531 C 202.007812 242.644531 202.003906 242.648438 202 242.652344 C 201.996094 242.65625 201.992188 242.660156 201.988281 242.664062 C 201.988281 242.667969 201.984375 242.671875 201.984375 242.675781 C 201.976562 242.683594 201.96875 242.691406 201.964844 242.699219 C 201.960938 242.699219 201.957031 242.703125 201.957031 242.707031 C 201.949219 242.714844 201.945312 242.722656 201.9375 242.730469 C 201.933594 242.730469 201.933594 242.738281 201.929688 242.742188 C 201.921875 242.746094 201.917969 242.753906 201.914062 242.761719 C 201.910156 242.761719 201.90625 242.765625 201.902344 242.769531 C 201.898438 242.777344 201.890625 242.785156 201.890625 242.789062 C 201.886719 242.792969 201.882812 242.796875 201.878906 242.800781 C 201.871094 242.808594 201.867188 242.8125 201.863281 242.820312 C 201.859375 242.824219 201.855469 242.828125 201.851562 242.835938 C 201.847656 242.839844 201.84375 242.84375 201.839844 242.847656 C 201.835938 242.855469 201.832031 242.859375 201.828125 242.867188 C 201.824219 242.871094 201.820312 242.875 201.816406 242.878906 C 201.8125 242.886719 201.808594 242.890625 201.800781 242.898438 C 201.796875 242.902344 201.796875 242.90625 201.792969 242.910156 C 201.789062 242.917969 201.78125 242.921875 201.777344 242.929688 C 201.773438 242.933594 201.769531 242.941406 201.765625 242.945312 C 201.761719 242.949219 201.757812 242.953125 201.753906 242.957031 C 201.75 242.964844 201.746094 242.96875 201.742188 242.976562 C 201.738281 242.980469 201.734375 242.984375 201.730469 242.988281 C 201.722656 242.996094 201.71875 243 201.714844 243.007812 C 201.710938 243.011719 201.707031 243.015625 201.703125 243.019531 C 201.699219 243.023438 201.695312 243.03125 201.691406 243.039062 C 201.6875 243.042969 201.683594 243.046875 201.679688 243.050781 C 201.675781 243.054688 201.671875 243.058594 201.667969 243.066406 C 201.664062 243.070312 201.65625 243.078125 201.652344 243.082031 C 201.648438 243.085938 201.648438 243.089844 201.644531 243.09375 C 201.636719 243.101562 201.632812 243.109375 201.628906 243.113281 C 201.625 243.117188 201.621094 243.121094 201.617188 243.125 C 201.613281 243.132812 201.605469 243.140625 201.601562 243.144531 C 201.597656 243.148438 201.597656 243.152344 201.59375 243.15625 C 201.589844 243.164062 201.582031 243.167969 201.578125 243.175781 C 201.574219 243.179688 201.570312 243.183594 201.566406 243.1875 C 201.5625 243.195312 201.558594 243.199219 201.554688 243.207031 C 201.550781 243.210938 201.546875 243.214844 201.542969 243.21875 C 201.539062 243.226562 201.535156 243.230469 201.53125 243.238281 C 201.523438 243.242188 201.523438 243.246094 201.519531 243.25 C 201.511719 243.257812 201.507812 243.261719 201.503906 243.269531 C 201.5 243.273438 201.496094 243.277344 201.492188 243.28125 C 201.488281 243.285156 201.484375 243.292969 201.480469 243.296875 C 201.476562 243.300781 201.472656 243.304688 201.472656 243.308594 C 201.464844 243.316406 201.460938 243.324219 201.453125 243.332031 C 201.453125 243.332031 201.449219 243.339844 201.445312 243.339844 C 201.441406 243.347656 201.433594 243.355469 201.429688 243.363281 C 201.425781 243.367188 201.421875 243.371094 201.421875 243.371094 C 201.414062 243.378906 201.410156 243.386719 201.402344 243.394531 C 201.402344 243.398438 201.398438 243.402344 201.398438 243.402344 C 201.390625 243.410156 201.386719 243.417969 201.378906 243.425781 C 201.378906 243.429688 201.375 243.433594 201.371094 243.4375 C 201.367188 243.441406 201.359375 243.449219 201.355469 243.457031 C 201.355469 243.460938 201.351562 243.464844 201.347656 243.464844 C 201.34375 243.472656 201.339844 243.480469 201.332031 243.484375 C 201.328125 243.488281 201.328125 243.492188 201.324219 243.496094 C 201.320312 243.503906 201.3125 243.507812 201.308594 243.515625 C 201.304688 243.519531 201.304688 243.523438 201.300781 243.523438 C 201.296875 243.53125 201.289062 243.539062 201.28125 243.546875 C 201.28125 243.550781 201.277344 243.554688 201.277344 243.558594 C 201.269531 243.5625 201.261719 243.574219 201.257812 243.582031 C 201.253906 243.582031 201.253906 243.585938 201.25 243.589844 C 201.246094 243.597656 201.238281 243.605469 201.230469 243.613281 C 201.230469 243.613281 201.226562 243.617188 201.226562 243.621094 C 201.21875 243.628906 201.214844 243.636719 201.207031 243.644531 C 201.203125 243.648438 201.203125 243.648438 201.199219 243.652344 C 201.195312 243.660156 201.1875 243.667969 201.183594 243.675781 C 201.183594 243.675781 201.175781 243.679688 201.175781 243.683594 C 201.167969 243.691406 201.164062 243.699219 201.15625 243.707031 C 201.15625 243.707031 201.15625 243.710938 201.152344 243.710938 C 201.148438 243.71875 201.140625 243.726562 201.132812 243.738281 C 201.132812 243.738281 201.132812 243.738281 201.128906 243.742188 C 201.121094 243.75 201.117188 243.757812 201.109375 243.769531 C 201.109375 243.769531 201.105469 243.773438 201.105469 243.773438 C 201.097656 243.785156 201.089844 243.792969 201.085938 243.800781 C 201.082031 243.804688 201.082031 243.804688 201.082031 243.808594 C 201.074219 243.816406 201.066406 243.824219 201.058594 243.832031 C 201.058594 243.832031 201.054688 243.835938 201.054688 243.839844 C 201.050781 243.847656 201.042969 243.855469 201.035156 243.863281 C 201.035156 243.867188 201.03125 243.867188 201.03125 243.871094 C 201.023438 243.878906 201.015625 243.886719 201.007812 243.898438 C 201 243.910156 200.992188 243.917969 200.984375 243.929688 C 200.976562 243.9375 200.96875 243.949219 200.960938 243.957031 C 200.960938 243.957031 200.957031 243.964844 200.957031 243.964844 C 200.953125 243.972656 200.945312 243.980469 200.941406 243.984375 C 200.9375 243.988281 200.933594 243.992188 200.933594 243.992188 C 200.925781 244.003906 200.917969 244.011719 200.910156 244.019531 C 200.910156 244.023438 200.910156 244.019531 200.910156 244.023438 C 200.902344 244.03125 200.894531 244.042969 200.890625 244.046875 C 200.886719 244.050781 200.886719 244.050781 200.882812 244.054688 C 200.878906 244.0625 200.871094 244.074219 200.863281 244.078125 L 200.863281 244.082031 C 200.855469 244.09375 200.847656 244.105469 200.839844 244.113281 L 200.835938 244.117188 C 200.832031 244.125 200.824219 244.132812 200.816406 244.140625 C 200.816406 244.140625 200.8125 244.144531 200.8125 244.148438 C 200.804688 244.15625 200.800781 244.164062 200.792969 244.171875 C 200.792969 244.175781 200.792969 244.171875 200.792969 244.175781 C 200.785156 244.183594 200.777344 244.195312 200.769531 244.203125 C 200.765625 244.207031 200.765625 244.207031 200.765625 244.207031 C 200.757812 244.21875 200.753906 244.226562 200.746094 244.234375 C 200.742188 244.234375 200.742188 244.238281 200.742188 244.238281 C 200.726562 244.257812 200.710938 244.277344 200.695312 244.296875 C 200.695312 244.300781 200.695312 244.300781 200.691406 244.300781 C 200.683594 244.3125 200.679688 244.320312 200.671875 244.328125 L 200.667969 244.332031 C 200.660156 244.34375 200.65625 244.351562 200.644531 244.363281 C 200.636719 244.371094 200.632812 244.382812 200.625 244.390625 L 200.621094 244.394531 C 200.613281 244.402344 200.605469 244.414062 200.601562 244.421875 L 200.597656 244.425781 C 200.589844 244.433594 200.582031 244.445312 200.574219 244.453125 L 200.574219 244.457031 C 200.566406 244.464844 200.558594 244.472656 200.550781 244.484375 C 200.550781 244.484375 200.550781 244.484375 200.546875 244.488281 C 200.53125 244.507812 200.515625 244.527344 200.503906 244.546875 C 200.5 244.546875 200.5 244.546875 200.5 244.550781 C 200.492188 244.558594 200.484375 244.566406 200.476562 244.578125 C 200.460938 244.601562 200.445312 244.621094 200.429688 244.640625 C 200.417969 244.652344 200.414062 244.660156 200.40625 244.671875 L 200.402344 244.671875 C 200.386719 244.691406 200.371094 244.714844 200.355469 244.734375 C 200.332031 244.765625 200.308594 244.796875 200.285156 244.824219 L 200.28125 244.828125 C 200.265625 244.847656 200.25 244.867188 200.234375 244.886719 L 200.234375 244.890625 C 200.226562 244.898438 200.21875 244.910156 200.210938 244.917969 C 200.210938 244.921875 200.210938 244.917969 200.210938 244.921875 C 200.191406 244.941406 200.179688 244.960938 200.160156 244.980469 C 199.042969 246.429688 197.96875 247.886719 196.933594 249.347656 C 196.457031 248.402344 195.976562 247.460938 195.476562 246.515625 C 193.152344 242.109375 190.582031 237.714844 187.757812 233.371094 C 173.710938 211.78125 155.691406 194.609375 137.011719 185.023438 C 118.292969 175.417969 101.144531 174.570312 88.730469 182.648438 C 88.671875 182.6875 88.617188 182.730469 88.558594 182.769531 C 88.125 179.332031 87.769531 175.527344 87.546875 171.367188 C 87.429688 169.082031 86.5625 166.964844 85.171875 165.277344 C 84.828125 145.234375 87.917969 123.957031 88.421875 120.628906 L 94.621094 118.902344 C 94.710938 118.878906 94.769531 118.800781 94.785156 118.710938 C 94.742188 118.703125 94.707031 118.699219 94.675781 118.695312 C 94.707031 118.515625 97.75 100.839844 106.183594 79.980469 C 111.136719 67.734375 116.949219 56.800781 123.460938 47.484375 C 131.597656 35.84375 140.855469 26.714844 150.980469 20.347656 C 169.90625 8.433594 192.082031 6.015625 216.875 13.152344 C 234.070312 18.105469 249.8125 28.378906 263.652344 43.695312 C 274.730469 55.949219 284.628906 71.441406 293.066406 89.738281 C 301.953125 109.011719 307.335938 127.402344 310.167969 138.703125 C 310.929688 141.742188 311.503906 144.273438 311.914062 146.164062 C 312.375 148.304688 312.628906 149.628906 312.691406 149.96875 L 311.398438 150.238281 C 311.34375 150.242188 311.285156 150.246094 311.230469 150.246094 L 281.949219 156.179688 C 277.945312 156.996094 274.054688 154.628906 272.898438 150.6875 C 264.335938 121.503906 252.839844 97.203125 238.722656 78.457031 C 227.425781 63.457031 214.433594 51.957031 200.113281 44.28125 C 182.734375 34.96875 167.554688 33.613281 160.183594 33.613281 C 159.699219 33.613281 159.253906 33.617188 158.835938 33.628906 C 158.730469 33.710938 158.621094 33.789062 158.515625 33.875 C 165.011719 33.675781 181.21875 34.421875 200.015625 44.496094 C 214.304688 52.160156 227.265625 63.636719 238.539062 78.609375 C 252.636719 97.332031 264.117188 121.605469 272.671875 150.753906 C 273.703125 154.277344 276.859375 156.574219 280.375 156.574219 C 280.648438 156.574219 280.929688 156.5625 281.207031 156.53125 C 281.199219 156.507812 281.195312 156.480469 281.1875 156.453125 L 310.578125 150.507812 C 310.578125 150.515625 310.570312 150.523438 310.570312 150.53125 C 310.601562 150.675781 313.492188 165.292969 314.84375 183.914062 L 285.078125 185.8125 C 285.074219 185.789062 285.074219 185.773438 285.074219 185.742188 C 283.363281 186.195312 282.140625 187.726562 282.085938 189.527344 C 281.914062 195.058594 281.078125 200.722656 280.546875 203.832031 C 280.621094 203.875 280.691406 203.921875 280.765625 203.960938 C 281.296875 200.867188 282.148438 195.136719 282.320312 189.535156 C 282.371094 187.890625 283.460938 186.484375 285 186.015625 C 285.019531 186.035156 285.050781 186.050781 285.082031 186.050781 C 285.082031 186.050781 285.085938 186.050781 285.089844 186.050781 L 314.882812 184.148438 C 314.890625 184.160156 314.890625 184.171875 314.898438 184.179688 C 314.921875 184.199219 314.949219 184.207031 314.976562 184.207031 C 314.980469 184.207031 314.984375 184.207031 314.984375 184.207031 L 317.632812 183.992188 C 316.609375 184.453125 315.238281 185.535156 315.316406 188.070312 C 315.753906 202.417969 314.976562 213.574219 312.878906 223.167969 C 312.199219 223.109375 308.222656 222.742188 303.453125 221.519531 C 303.554688 221.625 303.652344 221.730469 303.75 221.839844 C 308.820312 223.101562 312.90625 223.40625 312.964844 223.414062 C 312.964844 223.414062 312.964844 223.414062 312.96875 223.414062 L 315.03125 223.515625 L 312.3125 237.484375 C 311.800781 236.371094 311.238281 235.296875 310.613281 234.28125 C 310.789062 234.886719 310.96875 235.488281 311.121094 236.109375 C 315.109375 243.625 316.304688 253.652344 314.472656 265.382812 C 311.808594 282.421875 303.085938 300.996094 289.917969 317.679688 C 265.570312 348.519531 232.660156 364.199219 212.164062 356.125 C 211.679688 356.09375 211.191406 356.074219 210.71875 356.023438 C 214.683594 357.816406 219.136719 358.707031 223.941406 358.707031 C 227.28125 358.707031 230.785156 358.277344 234.398438 357.464844 C 235.050781 357.5 235.707031 357.53125 236.375 357.53125 C 254.128906 357.53125 277.109375 344.136719 294.894531 321.609375 C 306.554688 306.839844 314.273438 290.394531 316.632812 275.292969 C 317.867188 267.375 317.539062 260.335938 315.761719 254.460938 C 315.6875 248.179688 314.589844 242.582031 312.484375 237.84375 Z M 50.890625 222.59375 C 52.121094 231.742188 53.226562 246.914062 50.578125 263.765625 C 50.457031 264.519531 50.371094 265.28125 50.28125 266.046875 C 46.542969 249.597656 46.703125 234.410156 50.890625 222.59375 Z M 212.625 252.902344 C 224.882812 235.742188 240.859375 225.035156 252.476562 225.035156 C 255.652344 225.035156 258.5 225.832031 260.859375 227.515625 C 265.078125 230.53125 267.253906 236.015625 267.15625 243.378906 C 266.976562 243.394531 266.796875 243.417969 266.617188 243.4375 C 266.460938 243.453125 266.304688 243.46875 266.148438 243.488281 C 265.925781 243.519531 265.699219 243.554688 265.472656 243.589844 C 265.316406 243.613281 265.15625 243.636719 264.996094 243.664062 C 264.773438 243.707031 264.542969 243.753906 264.316406 243.800781 C 264.15625 243.832031 263.992188 243.863281 263.828125 243.898438 C 263.601562 243.949219 263.375 244.007812 263.148438 244.066406 C 262.980469 244.105469 262.816406 244.144531 262.648438 244.191406 C 262.417969 244.25 262.1875 244.320312 261.957031 244.386719 C 261.792969 244.4375 261.625 244.484375 261.453125 244.535156 C 261.222656 244.605469 260.992188 244.683594 260.761719 244.761719 C 260.589844 244.820312 260.417969 244.871094 260.246094 244.933594 C 260.015625 245.015625 259.78125 245.101562 259.550781 245.191406 C 259.378906 245.257812 259.203125 245.316406 259.03125 245.386719 C 258.796875 245.476562 258.558594 245.578125 258.328125 245.671875 C 258.152344 245.746094 257.976562 245.8125 257.804688 245.890625 C 257.570312 245.992188 257.332031 246.097656 257.097656 246.207031 C 256.921875 246.285156 256.746094 246.363281 256.566406 246.445312 C 256.332031 246.554688 256.097656 246.671875 255.863281 246.789062 C 255.683594 246.878906 255.503906 246.960938 255.324219 247.054688 C 255.089844 247.171875 254.855469 247.296875 254.625 247.421875 C 254.441406 247.515625 254.257812 247.609375 254.074219 247.710938 C 253.839844 247.839844 253.605469 247.972656 253.371094 248.105469 C 253.1875 248.207031 253.003906 248.308594 252.820312 248.417969 C 252.589844 248.550781 252.355469 248.691406 252.125 248.832031 C 251.9375 248.945312 251.746094 249.054688 251.558594 249.171875 C 251.332031 249.3125 251.101562 249.460938 250.875 249.605469 C 250.683594 249.726562 250.492188 249.847656 250.300781 249.972656 C 250.074219 250.121094 249.847656 250.273438 249.621094 250.425781 C 249.425781 250.558594 249.234375 250.683594 249.039062 250.820312 C 248.816406 250.972656 248.589844 251.136719 248.363281 251.296875 C 248.171875 251.433594 247.976562 251.570312 247.78125 251.710938 C 247.558594 251.871094 247.335938 252.039062 247.113281 252.207031 C 246.914062 252.351562 246.71875 252.496094 246.519531 252.648438 C 246.300781 252.816406 246.082031 252.988281 245.859375 253.160156 C 245.660156 253.316406 245.464844 253.46875 245.265625 253.625 C 245.046875 253.800781 244.824219 253.984375 244.605469 254.164062 C 244.410156 254.324219 244.210938 254.484375 244.015625 254.644531 C 243.796875 254.832031 243.578125 255.019531 243.355469 255.207031 C 243.160156 255.375 242.964844 255.539062 242.769531 255.710938 C 242.550781 255.898438 242.335938 256.09375 242.121094 256.285156 C 241.921875 256.460938 241.726562 256.632812 241.527344 256.8125 C 241.3125 257.007812 241.101562 257.210938 240.890625 257.40625 C 240.691406 257.589844 240.492188 257.769531 240.296875 257.957031 C 240.085938 258.15625 239.878906 258.359375 239.667969 258.5625 C 239.46875 258.753906 239.269531 258.945312 239.074219 259.140625 C 238.867188 259.339844 238.664062 259.550781 238.460938 259.753906 C 238.261719 259.957031 238.058594 260.15625 237.859375 260.359375 C 237.664062 260.5625 237.46875 260.769531 237.273438 260.972656 C 237.070312 261.1875 236.863281 261.402344 236.660156 261.617188 C 236.464844 261.824219 236.269531 262.039062 236.078125 262.25 C 235.875 262.46875 235.671875 262.6875 235.472656 262.910156 C 235.277344 263.128906 235.082031 263.347656 234.890625 263.566406 C 234.691406 263.792969 234.492188 264.011719 234.296875 264.238281 C 234.121094 264.445312 233.945312 264.652344 233.765625 264.859375 C 233.554688 265.109375 233.34375 265.351562 233.136719 265.601562 C 232.96875 265.804688 232.800781 266.011719 232.632812 266.21875 C 232.417969 266.476562 232.207031 266.734375 231.992188 266.996094 C 231.792969 267.246094 231.59375 267.503906 231.394531 267.757812 C 231.21875 267.980469 231.042969 268.199219 230.871094 268.421875 C 230.644531 268.714844 230.425781 269.011719 230.203125 269.304688 C 230.054688 269.5 229.910156 269.6875 229.765625 269.882812 C 229.398438 270.375 229.035156 270.871094 228.679688 271.371094 C 228.117188 272.15625 227.570312 272.949219 227.035156 273.746094 C 226.761719 274.15625 226.503906 274.570312 226.234375 274.980469 C 225.984375 275.371094 225.722656 275.761719 225.476562 276.152344 C 225.191406 276.605469 224.925781 277.0625 224.648438 277.519531 C 224.433594 277.875 224.214844 278.226562 224.003906 278.582031 C 223.734375 279.046875 223.476562 279.511719 223.214844 279.976562 C 223.019531 280.328125 222.8125 280.679688 222.621094 281.03125 C 222.375 281.480469 222.144531 281.933594 221.90625 282.386719 C 221.714844 282.753906 221.515625 283.121094 221.328125 283.492188 C 221.105469 283.933594 220.894531 284.378906 220.679688 284.820312 C 220.496094 285.199219 220.308594 285.578125 220.132812 285.953125 C 219.925781 286.390625 219.738281 286.832031 219.539062 287.273438 C 219.371094 287.652344 219.195312 288.03125 219.03125 288.414062 C 218.847656 288.839844 218.679688 289.265625 218.507812 289.695312 C 218.347656 290.085938 218.179688 290.476562 218.03125 290.863281 C 217.871094 291.277344 217.726562 291.683594 217.574219 292.09375 C 217.425781 292.496094 217.273438 292.898438 217.132812 293.300781 C 216.992188 293.703125 216.867188 294.101562 216.734375 294.5 C 216.601562 294.902344 216.464844 295.308594 216.339844 295.710938 C 216.21875 296.105469 216.113281 296.496094 216 296.886719 C 215.882812 297.289062 215.761719 297.691406 215.652344 298.089844 C 215.550781 298.472656 215.464844 298.847656 215.375 299.230469 C 215.273438 299.632812 215.167969 300.035156 215.078125 300.4375 C 214.996094 300.808594 214.929688 301.175781 214.855469 301.542969 C 214.773438 301.941406 214.6875 302.34375 214.617188 302.738281 C 214.550781 303.097656 214.503906 303.453125 214.449219 303.8125 C 214.390625 304.203125 214.320312 304.601562 214.269531 304.988281 C 214.226562 305.339844 214.195312 305.679688 214.160156 306.027344 C 214.121094 306.414062 214.070312 306.800781 214.042969 307.183594 C 214.015625 307.519531 214.007812 307.851562 213.988281 308.183594 C 213.972656 308.523438 213.941406 308.867188 213.9375 309.203125 C 213.03125 309.261719 212.160156 309.257812 211.316406 309.195312 C 212.105469 296.519531 209.78125 281.898438 204.40625 266.78125 C 206.605469 262.167969 209.351562 257.484375 212.625 252.902344 Z M 136.953125 273.007812 C 131.828125 264.699219 125.75 257.390625 118.882812 251.285156 C 115.359375 248.148438 112.109375 244.640625 109.085938 241.320312 C 105.824219 237.738281 103.003906 233.304688 100.597656 228.65625 C 116.0625 234.164062 132.828125 248.085938 145.59375 267.714844 C 156.40625 284.332031 162.316406 301.917969 163.125 316.859375 C 162.414062 328.992188 158.003906 338.03125 150.359375 343 C 147.835938 344.644531 145.035156 345.761719 142.023438 346.402344 C 155.34375 330.84375 153.78125 300.289062 136.953125 273.007812 Z M 135.339844 352.140625 C 137.640625 350.71875 139.679688 348.984375 141.472656 347 C 144.789062 346.382812 147.863281 345.191406 150.617188 343.398438 C 157.5625 338.882812 161.882812 331.085938 163.242188 320.710938 C 163.175781 334.230469 158.671875 344.515625 150.359375 349.921875 C 145.226562 353.257812 139.0625 354.425781 132.378906 353.710938 C 133.390625 353.242188 134.382812 352.726562 135.339844 352.140625 Z M 112.699219 206.3125 C 131.304688 215.863281 149.261719 232.976562 163.265625 254.5 C 192.144531 298.894531 195 348.433594 169.636719 364.933594 C 154.160156 375.003906 131.691406 370.476562 109.96875 355.328125 C 113.1875 356.097656 116.328125 356.496094 119.347656 356.496094 C 123.707031 356.496094 127.816406 355.691406 131.574219 354.085938 C 133.101562 354.28125 134.609375 354.390625 136.082031 354.390625 C 141.433594 354.390625 146.375 353.082031 150.617188 350.320312 C 151.207031 349.9375 151.78125 349.527344 152.332031 349.09375 C 152.398438 349.042969 152.453125 348.988281 152.515625 348.9375 C 160.5 342.570312 164.429688 331.242188 163.609375 316.699219 L 163.578125 316.699219 C 162.738281 301.699219 156.808594 284.089844 145.988281 267.453125 C 133.046875 247.558594 115.992188 233.503906 100.292969 228.066406 C 96.335938 220.277344 93.535156 211.953125 91.804688 205.964844 L 93.265625 205.050781 C 93.359375 204.988281 93.398438 204.867188 93.359375 204.761719 C 93.339844 204.714844 92.59375 202.757812 91.628906 199.101562 C 98.277344 200.148438 105.363281 202.550781 112.699219 206.3125 Z M 87.066406 171.390625 C 88.113281 191.195312 92.261719 203.148438 92.847656 204.75 L 87.1875 208.308594 C 80.03125 189.378906 80.089844 165.414062 80.128906 162.417969 C 84.070312 163.664062 86.847656 167.238281 87.066406 171.390625 Z M 84.679688 164.726562 C 83.675781 163.671875 82.449219 162.828125 81.0625 162.261719 C 81.074219 158.523438 81.347656 141.667969 85.109375 119.007812 L 87.988281 120.265625 C 87.648438 122.46875 84.390625 144.160156 84.679688 164.726562 Z M 86.859375 115.378906 L 43.1875 128.992188 C 50.917969 95.738281 64.25 68.59375 82.816406 48.300781 C 97.726562 32.007812 116.03125 20.070312 137.214844 12.820312 C 153.621094 7.207031 169.257812 5.3125 181.46875 4.917969 C 165.425781 6.394531 150.765625 12.117188 137.695312 22.050781 C 135.839844 23.464844 134.011719 24.964844 132.21875 26.554688 C 123.164062 34.359375 115.105469 44.214844 108.171875 56.011719 C 104.519531 62.222656 101.457031 68.519531 98.886719 74.582031 C 92.660156 88.949219 89.03125 102.625 87.511719 111.675781 C 87.128906 113.660156 86.921875 114.960938 86.859375 115.378906 Z M 293.285156 89.644531 C 284.835938 71.324219 274.925781 55.8125 263.832031 43.535156 C 249.957031 28.1875 234.183594 17.890625 216.941406 12.925781 C 207.648438 10.25 198.722656 8.914062 190.191406 8.914062 C 175.90625 8.914062 162.738281 12.664062 150.84375 20.144531 C 140.695312 26.527344 131.410156 35.679688 123.257812 47.347656 C 116.734375 56.679688 110.910156 67.628906 105.953125 79.894531 C 97.917969 99.769531 94.769531 116.757812 94.457031 118.503906 L 87.199219 115.488281 C 88.285156 106.308594 92.367188 89.425781 100.335938 71.894531 C 109.941406 50.761719 122.910156 33.589844 137.839844 22.242188 C 157.273438 7.46875 180.214844 2.019531 206.03125 6.050781 C 226.019531 9.167969 244.238281 18.640625 260.179688 34.207031 C 272.9375 46.667969 284.273438 63.03125 293.875 82.851562 C 309.738281 115.597656 315.582031 147.164062 315.96875 149.316406 L 312.917969 149.90625 C 312.539062 147.851562 307.195312 119.816406 293.285156 89.644531 Z M 315.078125 183.898438 C 313.789062 166.140625 311.101562 152.011719 310.824219 150.597656 L 313.617188 150.023438 C 318.277344 174.011719 318.574219 182.632812 318.589844 183.675781 Z M 313.113281 223.179688 C 315.214844 213.578125 315.988281 202.414062 315.550781 188.0625 C 315.5 186.484375 316.019531 185.304688 317.085938 184.558594 C 317.710938 184.125 318.34375 183.972656 318.601562 183.925781 C 318.722656 185.796875 320.09375 208.238281 317.085938 223.378906 Z M 316.160156 275.21875 C 313.816406 290.238281 306.128906 306.609375 294.519531 321.3125 C 276.71875 343.863281 253.722656 357.21875 236.089844 357.058594 C 253.84375 352.492188 273.988281 338.617188 290.285156 317.972656 C 303.507812 301.222656 312.261719 282.574219 314.9375 265.453125 C 315.433594 262.265625 315.707031 259.207031 315.769531 256.28125 C 317.109375 261.734375 317.269531 268.117188 316.160156 275.21875 Z M 260.160156 207.515625 C 260.222656 207.515625 260.277344 207.570312 260.277344 207.632812 C 260.277344 207.699219 260.222656 207.753906 260.160156 207.753906 C 247.464844 207.753906 232.050781 214.648438 217.878906 226.671875 C 217.855469 226.691406 217.828125 226.699219 217.800781 226.699219 C 217.765625 226.699219 217.734375 226.683594 217.710938 226.65625 C 217.667969 226.609375 217.675781 226.535156 217.722656 226.492188 C 231.671875 214.660156 246.65625 207.863281 259.195312 207.53125 C 259.214844 207.53125 259.230469 207.53125 259.246094 207.53125 L 259.25 207.53125 C 259.261719 207.53125 259.273438 207.527344 259.285156 207.527344 L 259.289062 207.527344 C 259.300781 207.527344 259.3125 207.527344 259.324219 207.527344 C 259.328125 207.527344 259.328125 207.527344 259.328125 207.527344 C 259.332031 207.527344 259.335938 207.527344 259.339844 207.527344 C 259.339844 207.527344 259.339844 207.527344 259.34375 207.527344 C 259.351562 207.527344 259.359375 207.527344 259.367188 207.527344 C 259.371094 207.527344 259.375 207.527344 259.378906 207.527344 C 259.378906 207.527344 259.382812 207.527344 259.382812 207.527344 C 259.394531 207.527344 259.40625 207.527344 259.417969 207.527344 C 259.421875 207.527344 259.421875 207.527344 259.421875 207.527344 C 259.425781 207.527344 259.429688 207.527344 259.433594 207.527344 C 259.433594 207.527344 259.433594 207.527344 259.4375 207.527344 C 259.445312 207.527344 259.449219 207.527344 259.457031 207.527344 C 259.460938 207.527344 259.460938 207.527344 259.460938 207.527344 C 259.464844 207.527344 259.46875 207.527344 259.472656 207.527344 C 259.476562 207.527344 259.476562 207.527344 259.476562 207.527344 C 259.488281 207.527344 259.5 207.527344 259.511719 207.523438 C 259.515625 207.523438 259.515625 207.523438 259.515625 207.523438 C 259.527344 207.523438 259.542969 207.523438 259.550781 207.523438 C 259.550781 207.523438 259.554688 207.523438 259.554688 207.523438 C 259.558594 207.523438 259.5625 207.523438 259.566406 207.523438 C 259.566406 207.523438 259.566406 207.523438 259.570312 207.523438 C 259.574219 207.523438 259.585938 207.523438 259.589844 207.523438 C 259.589844 207.523438 259.59375 207.523438 259.59375 207.523438 C 259.597656 207.523438 259.601562 207.523438 259.605469 207.523438 C 259.605469 207.523438 259.605469 207.523438 259.609375 207.523438 C 259.617188 207.523438 259.617188 207.523438 259.625 207.523438 C 259.628906 207.523438 259.628906 207.523438 259.632812 207.523438 C 259.636719 207.523438 259.636719 207.523438 259.640625 207.523438 C 259.644531 207.523438 259.648438 207.523438 259.648438 207.523438 C 259.652344 207.523438 259.65625 207.523438 259.65625 207.523438 C 259.660156 207.523438 259.664062 207.523438 259.664062 207.523438 C 259.671875 207.523438 259.675781 207.523438 259.679688 207.523438 C 259.679688 207.523438 259.683594 207.523438 259.6875 207.523438 C 259.6875 207.523438 259.695312 207.523438 259.695312 207.523438 C 259.699219 207.523438 259.703125 207.523438 259.703125 207.523438 C 259.707031 207.523438 259.710938 207.523438 259.714844 207.523438 C 259.71875 207.523438 259.722656 207.523438 259.726562 207.523438 C 259.730469 207.523438 259.730469 207.523438 259.734375 207.523438 C 259.738281 207.523438 259.738281 207.523438 259.742188 207.523438 C 259.742188 207.523438 259.746094 207.523438 259.75 207.523438 C 259.753906 207.523438 259.757812 207.523438 259.765625 207.523438 C 259.765625 207.523438 259.769531 207.523438 259.773438 207.523438 C 259.773438 207.523438 259.777344 207.523438 259.78125 207.523438 C 259.78125 207.523438 259.785156 207.523438 259.789062 207.523438 C 259.792969 207.523438 259.792969 207.523438 259.796875 207.523438 C 259.804688 207.523438 259.804688 207.523438 259.808594 207.523438 C 259.8125 207.523438 259.816406 207.523438 259.820312 207.523438 C 259.820312 207.523438 259.824219 207.523438 259.828125 207.523438 C 259.828125 207.523438 259.832031 207.523438 259.835938 207.523438 C 259.839844 207.523438 259.839844 207.523438 259.839844 207.523438 C 259.847656 207.523438 259.851562 207.523438 259.855469 207.523438 C 259.859375 207.523438 259.859375 207.523438 259.863281 207.523438 C 259.867188 207.523438 259.871094 207.523438 259.871094 207.523438 C 259.875 207.523438 259.875 207.523438 259.878906 207.523438 C 259.882812 207.523438 259.890625 207.523438 259.894531 207.523438 C 259.898438 207.523438 259.898438 207.523438 259.902344 207.523438 C 259.902344 207.523438 259.90625 207.523438 259.910156 207.523438 C 259.914062 207.523438 259.914062 207.523438 259.917969 207.523438 C 259.921875 207.523438 259.925781 207.523438 259.929688 207.523438 C 259.933594 207.523438 259.933594 207.523438 259.933594 207.523438 C 259.941406 207.523438 259.945312 207.523438 259.949219 207.523438 C 259.953125 207.523438 259.953125 207.523438 259.957031 207.523438 C 259.960938 207.523438 259.964844 207.523438 259.96875 207.523438 C 259.96875 207.523438 259.96875 207.523438 259.972656 207.523438 C 259.976562 207.523438 259.984375 207.523438 259.988281 207.523438 C 259.988281 207.523438 259.992188 207.523438 259.996094 207.523438 C 259.996094 207.523438 260 207.523438 260.003906 207.523438 C 260.007812 207.523438 260.007812 207.523438 260.011719 207.523438 C 260.015625 207.523438 260.023438 207.523438 260.027344 207.523438 C 260.027344 207.523438 260.027344 207.523438 260.03125 207.523438 C 260.035156 207.523438 260.039062 207.523438 260.042969 207.523438 C 260.046875 207.523438 260.046875 207.523438 260.046875 207.523438 C 260.054688 207.523438 260.058594 207.523438 260.0625 207.523438 C 260.0625 207.523438 260.0625 207.523438 260.066406 207.523438 C 260.070312 207.523438 260.074219 207.523438 260.082031 207.523438 C 260.082031 207.523438 260.085938 207.523438 260.085938 207.523438 C 260.089844 207.523438 260.09375 207.523438 260.097656 207.523438 C 260.097656 207.523438 260.101562 207.523438 260.101562 207.523438 C 260.109375 207.523438 260.113281 207.523438 260.117188 207.523438 C 260.121094 207.523438 260.121094 207.523438 260.121094 207.523438 C 260.125 207.523438 260.128906 207.523438 260.136719 207.523438 C 260.136719 207.523438 260.140625 207.523438 260.140625 207.523438 C 260.148438 207.515625 260.15625 207.515625 260.160156 207.515625 Z M 263.949219 293.640625 C 273.472656 281.578125 280.410156 268.410156 284.007812 255.5625 C 284.023438 255.511719 284.070312 255.476562 284.125 255.476562 C 284.132812 255.476562 284.144531 255.480469 284.15625 255.480469 C 284.21875 255.5 284.253906 255.566406 284.238281 255.628906 C 280.96875 267.296875 274.734375 279.816406 265.777344 291.660156 C 265.757812 291.691406 265.734375 291.722656 265.710938 291.753906 C 265.707031 291.757812 265.699219 291.765625 265.695312 291.769531 C 265.675781 291.796875 265.660156 291.820312 265.640625 291.84375 C 265.617188 291.875 265.59375 291.90625 265.570312 291.933594 C 265.566406 291.941406 265.5625 291.945312 265.558594 291.953125 L 265.554688 291.953125 C 265.539062 291.976562 265.519531 292 265.503906 292.023438 C 265.5 292.027344 265.5 292.027344 265.5 292.027344 C 265.496094 292.03125 265.492188 292.039062 265.488281 292.042969 L 265.484375 292.046875 C 265.46875 292.070312 265.449219 292.09375 265.429688 292.117188 C 265.425781 292.125 265.421875 292.128906 265.417969 292.136719 L 265.414062 292.136719 C 265.390625 292.167969 265.371094 292.199219 265.347656 292.226562 L 265.34375 292.230469 C 265.339844 292.234375 265.335938 292.242188 265.332031 292.246094 C 265.3125 292.273438 265.292969 292.296875 265.277344 292.320312 L 265.273438 292.320312 C 265.269531 292.328125 265.265625 292.332031 265.261719 292.339844 C 265.246094 292.355469 265.234375 292.375 265.21875 292.394531 C 265.214844 292.398438 265.210938 292.40625 265.207031 292.410156 C 265.203125 292.410156 265.207031 292.410156 265.203125 292.414062 C 265.199219 292.417969 265.195312 292.421875 265.191406 292.429688 C 265.1875 292.429688 265.191406 292.429688 265.1875 292.433594 C 265.175781 292.449219 265.160156 292.464844 265.148438 292.484375 C 265.144531 292.492188 265.140625 292.496094 265.136719 292.5 C 265.132812 292.503906 265.132812 292.5 265.132812 292.503906 C 265.128906 292.507812 265.125 292.515625 265.121094 292.519531 C 265.117188 292.523438 265.121094 292.523438 265.117188 292.523438 C 265.113281 292.53125 265.109375 292.535156 265.105469 292.539062 L 265.101562 292.542969 C 265.09375 292.550781 265.085938 292.5625 265.078125 292.570312 L 265.074219 292.574219 C 265.070312 292.582031 265.070312 292.582031 265.066406 292.589844 C 265.0625 292.589844 265.0625 292.59375 265.058594 292.597656 C 265.058594 292.601562 265.054688 292.605469 265.050781 292.609375 C 265.046875 292.613281 265.046875 292.613281 265.042969 292.617188 C 265.039062 292.621094 265.039062 292.625 265.035156 292.628906 C 265.03125 292.628906 265.03125 292.632812 265.027344 292.636719 C 265.019531 292.648438 265.015625 292.65625 265.003906 292.667969 C 265 292.671875 264.996094 292.675781 264.996094 292.679688 C 264.992188 292.683594 264.992188 292.683594 264.992188 292.6875 C 264.988281 292.691406 264.984375 292.695312 264.980469 292.699219 C 264.976562 292.703125 264.976562 292.703125 264.976562 292.707031 C 264.972656 292.710938 264.96875 292.714844 264.964844 292.71875 C 264.964844 292.722656 264.960938 292.726562 264.960938 292.726562 C 264.953125 292.734375 264.949219 292.738281 264.945312 292.746094 C 264.941406 292.75 264.9375 292.753906 264.933594 292.757812 C 264.933594 292.761719 264.929688 292.765625 264.925781 292.769531 C 264.925781 292.773438 264.921875 292.777344 264.917969 292.777344 C 264.917969 292.78125 264.914062 292.789062 264.910156 292.789062 C 264.90625 292.792969 264.90625 292.792969 264.902344 292.796875 C 264.898438 292.800781 264.898438 292.804688 264.894531 292.808594 C 264.890625 292.8125 264.886719 292.816406 264.886719 292.820312 C 264.882812 292.824219 264.878906 292.828125 264.878906 292.832031 C 264.875 292.832031 264.875 292.835938 264.875 292.835938 C 264.867188 292.847656 264.859375 292.855469 264.851562 292.863281 C 264.851562 292.863281 264.851562 292.867188 264.847656 292.871094 C 264.84375 292.875 264.839844 292.878906 264.835938 292.882812 C 264.835938 292.886719 264.835938 292.886719 264.832031 292.890625 C 264.828125 292.894531 264.828125 292.898438 264.824219 292.902344 C 264.820312 292.902344 264.816406 292.910156 264.816406 292.910156 C 264.8125 292.914062 264.808594 292.917969 264.804688 292.921875 C 264.796875 292.933594 264.789062 292.945312 264.78125 292.957031 C 264.777344 292.957031 264.777344 292.957031 264.777344 292.960938 C 264.773438 292.964844 264.769531 292.96875 264.765625 292.976562 C 264.765625 292.976562 264.761719 292.980469 264.761719 292.980469 C 264.757812 292.984375 264.753906 292.992188 264.75 292.996094 C 264.746094 292.996094 264.746094 293 264.746094 293 C 264.734375 293.015625 264.722656 293.03125 264.707031 293.046875 L 264.707031 293.050781 C 264.703125 293.058594 264.699219 293.0625 264.695312 293.066406 C 264.691406 293.070312 264.691406 293.070312 264.6875 293.074219 C 264.683594 293.078125 264.679688 293.082031 264.679688 293.085938 C 264.675781 293.085938 264.675781 293.089844 264.675781 293.089844 C 264.671875 293.097656 264.667969 293.101562 264.664062 293.105469 L 264.660156 293.109375 C 264.652344 293.121094 264.644531 293.128906 264.636719 293.136719 C 264.636719 293.140625 264.632812 293.140625 264.632812 293.144531 C 264.628906 293.148438 264.625 293.152344 264.621094 293.15625 C 264.621094 293.15625 264.617188 293.164062 264.617188 293.164062 C 264.613281 293.167969 264.609375 293.171875 264.609375 293.175781 C 264.605469 293.179688 264.601562 293.179688 264.601562 293.183594 C 264.597656 293.1875 264.59375 293.191406 264.59375 293.195312 C 264.589844 293.199219 264.585938 293.203125 264.582031 293.207031 C 264.578125 293.214844 264.574219 293.21875 264.566406 293.226562 C 264.566406 293.230469 264.5625 293.234375 264.5625 293.234375 C 264.558594 293.238281 264.554688 293.242188 264.550781 293.246094 C 264.550781 293.25 264.546875 293.253906 264.546875 293.253906 C 264.542969 293.257812 264.539062 293.261719 264.539062 293.265625 C 264.535156 293.269531 264.53125 293.273438 264.53125 293.277344 C 264.527344 293.28125 264.523438 293.28125 264.519531 293.285156 C 264.519531 293.289062 264.515625 293.296875 264.515625 293.296875 C 264.507812 293.304688 264.503906 293.3125 264.5 293.316406 C 264.496094 293.320312 264.492188 293.324219 264.492188 293.324219 C 264.488281 293.328125 264.484375 293.332031 264.484375 293.335938 C 264.480469 293.339844 264.476562 293.34375 264.476562 293.347656 C 264.472656 293.351562 264.46875 293.351562 264.46875 293.355469 C 264.464844 293.359375 264.460938 293.363281 264.457031 293.367188 C 264.457031 293.371094 264.453125 293.375 264.453125 293.375 C 264.449219 293.378906 264.445312 293.382812 264.441406 293.386719 C 264.433594 293.398438 264.429688 293.40625 264.421875 293.414062 C 264.417969 293.417969 264.421875 293.414062 264.421875 293.417969 C 264.417969 293.421875 264.414062 293.425781 264.410156 293.429688 C 264.410156 293.429688 264.40625 293.433594 264.40625 293.4375 C 264.402344 293.441406 264.398438 293.445312 264.394531 293.449219 C 264.394531 293.453125 264.390625 293.453125 264.386719 293.457031 C 264.386719 293.460938 264.382812 293.464844 264.378906 293.46875 C 264.378906 293.472656 264.371094 293.480469 264.367188 293.484375 C 264.367188 293.484375 264.367188 293.484375 264.363281 293.488281 C 264.359375 293.496094 264.355469 293.5 264.347656 293.507812 C 264.34375 293.511719 264.34375 293.511719 264.339844 293.515625 C 264.339844 293.519531 264.335938 293.523438 264.332031 293.527344 C 264.328125 293.53125 264.328125 293.535156 264.324219 293.535156 C 264.324219 293.539062 264.320312 293.542969 264.316406 293.546875 C 264.3125 293.550781 264.3125 293.554688 264.308594 293.558594 C 264.304688 293.5625 264.300781 293.566406 264.296875 293.570312 C 264.296875 293.574219 264.292969 293.574219 264.292969 293.578125 C 264.285156 293.585938 264.28125 293.589844 264.277344 293.597656 C 264.273438 293.597656 264.273438 293.601562 264.269531 293.605469 C 264.265625 293.609375 264.265625 293.613281 264.261719 293.621094 C 264.257812 293.621094 264.257812 293.625 264.253906 293.625 C 264.25 293.628906 264.246094 293.636719 264.242188 293.640625 C 264.242188 293.640625 264.238281 293.644531 264.238281 293.648438 C 264.234375 293.652344 264.230469 293.65625 264.226562 293.660156 C 264.222656 293.664062 264.222656 293.664062 264.222656 293.667969 C 264.214844 293.675781 264.210938 293.679688 264.203125 293.6875 C 264.203125 293.691406 264.203125 293.691406 264.203125 293.691406 C 264.195312 293.699219 264.195312 293.703125 264.1875 293.710938 C 264.1875 293.710938 264.1875 293.714844 264.183594 293.714844 C 264.179688 293.71875 264.175781 293.726562 264.171875 293.730469 C 264.167969 293.734375 264.167969 293.734375 264.164062 293.738281 C 264.164062 293.742188 264.15625 293.75 264.152344 293.753906 C 264.152344 293.753906 264.152344 293.757812 264.148438 293.757812 C 264.144531 293.765625 264.136719 293.773438 264.132812 293.78125 C 264.125 293.785156 264.121094 293.792969 264.113281 293.800781 C 264.113281 293.804688 264.113281 293.804688 264.109375 293.808594 C 264.105469 293.8125 264.101562 293.816406 264.097656 293.824219 C 264.09375 293.828125 264.089844 293.832031 264.089844 293.832031 C 264.085938 293.839844 264.082031 293.84375 264.078125 293.847656 C 264.074219 293.851562 264.070312 293.855469 264.066406 293.859375 C 264.066406 293.863281 264.066406 293.867188 264.0625 293.867188 C 264.050781 293.882812 264.039062 293.898438 264.027344 293.910156 C 264.027344 293.914062 264.023438 293.914062 264.023438 293.914062 C 263.390625 294.714844 262.75 295.503906 262.105469 296.285156 C 262.089844 296.300781 262.078125 296.316406 262.0625 296.332031 C 262.050781 296.347656 262.039062 296.363281 262.023438 296.378906 C 262.023438 296.378906 262.023438 296.378906 262.023438 296.382812 C 262.007812 296.398438 261.996094 296.410156 261.984375 296.425781 C 261.984375 296.429688 261.984375 296.429688 261.984375 296.429688 C 261.859375 296.574219 261.738281 296.71875 261.617188 296.867188 C 261.59375 296.894531 261.558594 296.910156 261.527344 296.910156 C 261.5 296.910156 261.472656 296.898438 261.449219 296.882812 C 261.398438 296.839844 261.394531 296.765625 261.4375 296.714844 C 262.285156 295.714844 263.132812 294.679688 263.949219 293.640625 Z M 210.925781 329.726562 C 210.867188 329.726562 210.816406 329.683594 210.808594 329.625 C 210.800781 329.5625 210.84375 329.5 210.910156 329.492188 C 223.78125 327.53125 238.652344 319.347656 251.707031 307.039062 C 251.730469 307.015625 251.761719 307.003906 251.789062 307.003906 C 251.820312 307.003906 251.851562 307.019531 251.875 307.042969 C 251.921875 307.089844 251.917969 307.164062 251.871094 307.210938 C 238.492188 319.824219 223.769531 327.773438 210.945312 329.726562 C 210.9375 329.726562 210.929688 329.726562 210.925781 329.726562 Z M 281.585938 217.96875 C 281.585938 217.972656 281.589844 217.976562 281.59375 217.980469 C 281.59375 217.980469 281.59375 217.984375 281.597656 217.984375 C 281.597656 217.988281 281.601562 217.988281 281.601562 217.992188 C 281.601562 217.996094 281.601562 217.996094 281.605469 217.996094 C 281.605469 218 281.609375 218.003906 281.609375 218.007812 C 281.609375 218.007812 281.613281 218.011719 281.613281 218.011719 C 281.617188 218.011719 281.617188 218.015625 281.617188 218.019531 C 281.621094 218.019531 281.621094 218.019531 281.621094 218.023438 C 281.625 218.023438 281.625 218.027344 281.628906 218.03125 C 281.628906 218.03125 281.628906 218.035156 281.632812 218.035156 C 281.632812 218.039062 281.636719 218.042969 281.636719 218.042969 C 281.636719 218.046875 281.640625 218.046875 281.640625 218.046875 C 281.640625 218.050781 281.644531 218.054688 281.648438 218.058594 C 281.652344 218.066406 281.65625 218.070312 281.65625 218.074219 C 281.660156 218.074219 281.660156 218.074219 281.660156 218.074219 C 281.660156 218.078125 281.664062 218.082031 281.667969 218.085938 C 281.667969 218.085938 281.667969 218.085938 281.667969 218.089844 C 281.671875 218.09375 281.671875 218.09375 281.675781 218.097656 C 281.675781 218.101562 281.675781 218.101562 281.675781 218.101562 C 281.679688 218.105469 281.679688 218.109375 281.683594 218.109375 C 281.683594 218.113281 281.683594 218.113281 281.6875 218.113281 C 281.6875 218.117188 281.691406 218.121094 281.691406 218.121094 C 281.695312 218.125 281.695312 218.125 281.695312 218.128906 C 281.699219 218.128906 281.699219 218.132812 281.703125 218.136719 C 281.703125 218.140625 281.703125 218.140625 281.703125 218.140625 C 281.707031 218.144531 281.707031 218.148438 281.710938 218.152344 C 281.714844 218.160156 281.71875 218.164062 281.722656 218.167969 C 281.722656 218.171875 281.726562 218.175781 281.730469 218.179688 C 281.730469 218.179688 281.730469 218.179688 281.730469 218.183594 C 281.734375 218.1875 281.734375 218.1875 281.738281 218.191406 C 281.738281 218.195312 281.738281 218.195312 281.742188 218.195312 C 281.742188 218.199219 281.746094 218.203125 281.746094 218.203125 C 281.746094 218.207031 281.75 218.207031 281.75 218.207031 C 281.75 218.210938 281.753906 218.214844 281.753906 218.214844 C 281.757812 218.21875 281.757812 218.21875 281.757812 218.222656 C 281.761719 218.222656 281.761719 218.226562 281.765625 218.230469 C 281.765625 218.230469 281.765625 218.234375 281.765625 218.234375 C 281.769531 218.238281 281.773438 218.238281 281.773438 218.242188 C 281.773438 218.246094 281.773438 218.246094 281.777344 218.246094 C 281.78125 218.257812 281.789062 218.265625 281.792969 218.273438 C 281.792969 218.273438 281.796875 218.273438 281.796875 218.277344 C 281.796875 218.28125 281.800781 218.28125 281.800781 218.285156 C 281.804688 218.289062 281.804688 218.289062 281.804688 218.289062 C 281.808594 218.292969 281.808594 218.296875 281.8125 218.296875 C 281.8125 218.300781 281.8125 218.300781 281.8125 218.300781 C 281.816406 218.304688 281.816406 218.308594 281.820312 218.3125 C 281.820312 218.3125 281.820312 218.3125 281.824219 218.316406 C 281.824219 218.316406 281.828125 218.320312 281.828125 218.324219 C 281.828125 218.328125 281.828125 218.328125 281.832031 218.328125 C 281.832031 218.332031 281.835938 218.335938 281.835938 218.339844 C 281.839844 218.339844 281.839844 218.339844 281.839844 218.34375 C 281.84375 218.347656 281.84375 218.351562 281.847656 218.355469 C 281.851562 218.359375 281.855469 218.363281 281.855469 218.367188 C 281.859375 218.367188 281.859375 218.371094 281.859375 218.371094 C 281.859375 218.375 281.863281 218.378906 281.863281 218.382812 C 281.867188 218.382812 281.867188 218.382812 281.867188 218.386719 C 281.871094 218.390625 281.871094 218.390625 281.875 218.394531 C 281.875 218.398438 281.875 218.398438 281.875 218.398438 C 281.878906 218.398438 281.882812 218.40625 281.882812 218.40625 C 281.882812 218.410156 281.882812 218.410156 281.886719 218.410156 C 281.886719 218.414062 281.890625 218.417969 281.890625 218.421875 C 281.890625 218.421875 281.894531 218.421875 281.894531 218.425781 C 281.894531 218.429688 281.898438 218.429688 281.898438 218.433594 C 281.898438 218.433594 281.902344 218.4375 281.902344 218.4375 C 281.902344 218.441406 281.90625 218.445312 281.910156 218.449219 C 281.910156 218.449219 281.910156 218.449219 281.910156 218.453125 C 281.914062 218.457031 281.917969 218.460938 281.917969 218.464844 C 281.921875 218.464844 281.921875 218.464844 281.921875 218.46875 C 281.921875 218.472656 281.925781 218.472656 281.925781 218.476562 C 281.929688 218.480469 281.929688 218.480469 281.929688 218.480469 C 281.929688 218.484375 281.933594 218.488281 281.933594 218.492188 C 281.9375 218.492188 281.9375 218.496094 281.9375 218.496094 C 281.941406 218.496094 281.941406 218.503906 281.945312 218.503906 C 281.945312 218.507812 281.945312 218.507812 281.945312 218.507812 C 281.949219 218.511719 281.949219 218.515625 281.953125 218.519531 C 281.953125 218.519531 281.953125 218.519531 281.957031 218.523438 C 281.957031 218.523438 281.960938 218.527344 281.960938 218.53125 C 281.960938 218.535156 281.960938 218.535156 281.964844 218.535156 C 281.964844 218.539062 281.96875 218.542969 281.96875 218.542969 C 281.96875 218.546875 281.972656 218.546875 281.972656 218.550781 C 281.976562 218.554688 281.976562 218.558594 281.980469 218.5625 C 281.984375 218.566406 281.988281 218.570312 281.988281 218.574219 C 281.992188 218.574219 281.992188 218.578125 281.992188 218.578125 C 281.992188 218.582031 281.996094 218.585938 281.996094 218.589844 C 282 218.589844 282 218.589844 282 218.59375 C 282.003906 218.59375 282.003906 218.597656 282.007812 218.601562 C 282.007812 218.601562 282.007812 218.605469 282.011719 218.605469 C 282.011719 218.609375 282.015625 218.613281 282.015625 218.613281 C 282.015625 218.617188 282.015625 218.617188 282.019531 218.621094 C 282.019531 218.621094 282.023438 218.625 282.023438 218.628906 C 282.023438 218.628906 282.023438 218.628906 282.027344 218.632812 C 282.027344 218.636719 282.027344 218.636719 282.03125 218.640625 C 282.03125 218.644531 282.035156 218.644531 282.035156 218.644531 C 282.035156 218.648438 282.039062 218.652344 282.039062 218.65625 C 282.042969 218.65625 282.042969 218.660156 282.042969 218.660156 C 282.046875 218.664062 282.050781 218.667969 282.050781 218.671875 C 282.054688 218.671875 282.054688 218.675781 282.054688 218.675781 C 282.054688 218.679688 282.058594 218.683594 282.058594 218.683594 C 282.0625 218.6875 282.0625 218.6875 282.0625 218.691406 C 282.066406 218.691406 282.066406 218.695312 282.070312 218.699219 C 282.070312 218.699219 282.070312 218.703125 282.074219 218.703125 C 282.074219 218.707031 282.078125 218.710938 282.078125 218.710938 C 282.078125 218.714844 282.078125 218.714844 282.082031 218.71875 C 282.082031 218.71875 282.085938 218.722656 282.085938 218.726562 C 282.089844 218.726562 282.089844 218.726562 282.089844 218.730469 C 282.089844 218.734375 282.09375 218.734375 282.09375 218.738281 C 282.097656 218.742188 282.097656 218.742188 282.097656 218.742188 C 282.101562 218.746094 282.101562 218.75 282.105469 218.753906 C 282.105469 218.753906 282.105469 218.753906 282.105469 218.757812 C 282.109375 218.761719 282.109375 218.765625 282.113281 218.769531 C 282.117188 218.769531 282.117188 218.773438 282.117188 218.773438 C 282.121094 218.777344 282.121094 218.777344 282.121094 218.78125 C 282.125 218.785156 282.125 218.785156 282.125 218.785156 C 282.128906 218.789062 282.128906 218.792969 282.132812 218.792969 C 282.132812 218.796875 282.132812 218.796875 282.132812 218.800781 C 282.136719 218.800781 282.136719 218.804688 282.140625 218.808594 C 282.140625 218.808594 282.140625 218.8125 282.144531 218.8125 C 282.144531 218.816406 282.148438 218.820312 282.148438 218.820312 C 282.148438 218.824219 282.152344 218.824219 282.152344 218.824219 C 282.152344 218.828125 282.15625 218.832031 282.15625 218.835938 C 282.15625 218.835938 282.15625 218.835938 282.160156 218.839844 C 282.160156 218.84375 282.164062 218.84375 282.164062 218.847656 C 282.164062 218.851562 282.167969 218.851562 282.167969 218.851562 C 282.171875 218.855469 282.171875 218.859375 282.175781 218.867188 C 282.179688 218.871094 282.179688 218.875 282.183594 218.878906 C 282.183594 218.882812 282.183594 218.882812 282.1875 218.882812 C 282.1875 218.886719 282.1875 218.890625 282.191406 218.890625 C 282.191406 218.894531 282.195312 218.894531 282.195312 218.898438 C 282.195312 218.898438 282.199219 218.902344 282.199219 218.90625 C 282.203125 218.90625 282.203125 218.910156 282.203125 218.910156 C 282.203125 218.914062 282.207031 218.917969 282.210938 218.917969 C 282.210938 218.921875 282.210938 218.921875 282.210938 218.925781 C 282.214844 218.925781 282.214844 218.929688 282.21875 218.933594 C 282.21875 218.933594 282.21875 218.9375 282.21875 218.9375 C 282.222656 218.941406 282.222656 218.945312 282.226562 218.945312 C 282.226562 218.949219 282.226562 218.949219 282.230469 218.949219 C 282.234375 218.960938 282.238281 218.96875 282.246094 218.976562 C 282.246094 218.980469 282.246094 218.980469 282.25 218.980469 C 282.25 218.984375 282.25 218.988281 282.253906 218.988281 C 282.253906 218.992188 282.253906 218.996094 282.257812 218.996094 C 282.257812 219 282.257812 219 282.261719 219.003906 C 282.261719 219.003906 282.265625 219.007812 282.265625 219.007812 C 282.265625 219.011719 282.269531 219.015625 282.269531 219.015625 C 282.269531 219.019531 282.273438 219.019531 282.273438 219.023438 C 282.277344 219.023438 282.277344 219.027344 282.277344 219.03125 C 282.28125 219.03125 282.28125 219.035156 282.28125 219.035156 C 282.285156 219.039062 282.285156 219.042969 282.285156 219.042969 C 282.289062 219.042969 282.289062 219.046875 282.289062 219.046875 C 282.292969 219.054688 282.292969 219.054688 282.296875 219.058594 C 282.296875 219.0625 282.296875 219.0625 282.296875 219.0625 C 282.300781 219.066406 282.304688 219.070312 282.304688 219.074219 C 282.308594 219.074219 282.308594 219.078125 282.308594 219.078125 C 282.3125 219.082031 282.3125 219.082031 282.3125 219.085938 C 282.316406 219.089844 282.316406 219.089844 282.316406 219.09375 C 282.316406 219.09375 282.320312 219.097656 282.320312 219.101562 C 282.320312 219.101562 282.324219 219.105469 282.324219 219.105469 C 282.324219 219.109375 282.328125 219.113281 282.328125 219.113281 C 282.332031 219.117188 282.332031 219.117188 282.332031 219.117188 C 282.335938 219.121094 282.335938 219.125 282.335938 219.125 C 282.339844 219.128906 282.339844 219.128906 282.339844 219.132812 C 282.34375 219.132812 282.34375 219.136719 282.347656 219.140625 C 282.347656 219.140625 282.347656 219.144531 282.347656 219.144531 C 282.351562 219.148438 282.351562 219.148438 282.355469 219.152344 C 282.355469 219.15625 282.355469 219.15625 282.355469 219.15625 C 282.359375 219.164062 282.363281 219.167969 282.363281 219.171875 C 282.367188 219.171875 282.367188 219.171875 282.367188 219.171875 C 282.367188 219.175781 282.371094 219.179688 282.371094 219.183594 C 282.375 219.1875 282.375 219.1875 282.375 219.1875 C 282.378906 219.191406 282.378906 219.195312 282.378906 219.199219 C 282.382812 219.199219 282.382812 219.199219 282.382812 219.203125 C 282.382812 219.203125 282.386719 219.207031 282.386719 219.210938 C 282.390625 219.210938 282.390625 219.214844 282.390625 219.214844 C 282.394531 219.21875 282.394531 219.222656 282.394531 219.222656 C 282.398438 219.226562 282.398438 219.226562 282.398438 219.230469 C 282.398438 219.230469 282.402344 219.234375 282.402344 219.238281 C 282.40625 219.238281 282.40625 219.242188 282.40625 219.242188 C 282.410156 219.246094 282.410156 219.25 282.414062 219.253906 C 282.414062 219.253906 282.414062 219.253906 282.414062 219.257812 C 282.417969 219.261719 282.421875 219.265625 282.421875 219.269531 C 282.421875 219.269531 282.425781 219.269531 282.425781 219.269531 C 282.425781 219.277344 282.429688 219.277344 282.433594 219.28125 C 282.433594 219.285156 282.433594 219.285156 282.433594 219.285156 C 282.4375 219.289062 282.4375 219.292969 282.441406 219.296875 C 282.441406 219.296875 282.441406 219.300781 282.441406 219.300781 C 282.445312 219.304688 282.445312 219.304688 282.449219 219.308594 C 282.449219 219.3125 282.449219 219.3125 282.449219 219.3125 C 282.453125 219.316406 282.453125 219.320312 282.457031 219.320312 C 282.457031 219.324219 282.457031 219.324219 282.457031 219.328125 C 282.460938 219.332031 282.460938 219.332031 282.464844 219.335938 C 282.464844 219.335938 282.464844 219.339844 282.464844 219.339844 C 282.46875 219.34375 282.46875 219.347656 282.472656 219.351562 C 282.472656 219.351562 282.472656 219.351562 282.472656 219.355469 C 282.480469 219.363281 282.484375 219.371094 282.488281 219.378906 C 282.492188 219.382812 282.492188 219.382812 282.492188 219.382812 C 282.492188 219.386719 282.496094 219.390625 282.496094 219.394531 C 282.5 219.394531 282.5 219.394531 282.5 219.398438 C 282.5 219.398438 282.503906 219.40625 282.507812 219.40625 C 282.507812 219.410156 282.507812 219.410156 282.507812 219.410156 C 282.511719 219.414062 282.511719 219.417969 282.511719 219.421875 C 282.515625 219.421875 282.515625 219.425781 282.515625 219.425781 C 282.515625 219.425781 282.519531 219.429688 282.519531 219.433594 C 282.523438 219.433594 282.523438 219.4375 282.523438 219.4375 C 282.527344 219.441406 282.527344 219.445312 282.53125 219.449219 C 282.53125 219.449219 282.53125 219.449219 282.53125 219.453125 C 282.535156 219.457031 282.539062 219.460938 282.539062 219.464844 C 282.542969 219.46875 282.546875 219.476562 282.546875 219.480469 C 282.550781 219.484375 282.554688 219.488281 282.554688 219.492188 C 282.558594 219.492188 282.558594 219.496094 282.558594 219.496094 C 282.558594 219.5 282.5625 219.503906 282.5625 219.507812 C 282.566406 219.507812 282.566406 219.511719 282.566406 219.511719 C 282.566406 219.515625 282.570312 219.519531 282.570312 219.519531 C 282.574219 219.523438 282.574219 219.523438 282.574219 219.523438 C 282.574219 219.527344 282.578125 219.53125 282.578125 219.535156 C 282.582031 219.535156 282.582031 219.539062 282.582031 219.539062 C 282.585938 219.542969 282.585938 219.542969 282.589844 219.546875 C 282.589844 219.550781 282.589844 219.550781 282.589844 219.554688 C 282.59375 219.558594 282.59375 219.558594 282.597656 219.5625 C 282.597656 219.566406 282.597656 219.566406 282.597656 219.566406 C 282.605469 219.574219 282.609375 219.585938 282.613281 219.59375 C 282.617188 219.59375 282.617188 219.59375 282.617188 219.59375 C 282.617188 219.601562 282.621094 219.601562 282.621094 219.605469 C 282.625 219.609375 282.625 219.609375 282.625 219.609375 C 282.625 219.613281 282.628906 219.617188 282.628906 219.621094 C 282.632812 219.621094 282.632812 219.621094 282.632812 219.625 C 282.632812 219.625 282.636719 219.632812 282.636719 219.632812 C 282.640625 219.636719 282.640625 219.636719 282.640625 219.636719 C 282.640625 219.640625 282.644531 219.644531 282.644531 219.648438 C 282.648438 219.648438 282.648438 219.648438 282.648438 219.652344 C 282.648438 219.65625 282.652344 219.660156 282.65625 219.660156 C 282.65625 219.664062 282.65625 219.664062 282.65625 219.664062 C 282.664062 219.675781 282.667969 219.683594 282.671875 219.691406 C 282.671875 219.691406 282.671875 219.691406 282.671875 219.695312 C 282.675781 219.699219 282.679688 219.703125 282.679688 219.707031 C 282.679688 219.707031 282.683594 219.707031 282.683594 219.707031 C 282.683594 219.714844 282.6875 219.714844 282.6875 219.71875 C 282.691406 219.722656 282.691406 219.722656 282.691406 219.722656 C 282.691406 219.726562 282.695312 219.730469 282.695312 219.734375 C 282.699219 219.734375 282.699219 219.738281 282.699219 219.738281 C 282.699219 219.742188 282.703125 219.746094 282.703125 219.746094 C 282.707031 219.75 282.707031 219.75 282.707031 219.75 C 282.707031 219.753906 282.710938 219.757812 282.710938 219.761719 C 282.710938 219.761719 282.710938 219.765625 282.714844 219.765625 C 282.714844 219.769531 282.71875 219.773438 282.722656 219.777344 C 282.722656 219.785156 282.726562 219.789062 282.730469 219.792969 C 282.730469 219.792969 282.730469 219.792969 282.730469 219.796875 C 282.734375 219.800781 282.734375 219.804688 282.738281 219.808594 C 282.738281 219.8125 282.742188 219.816406 282.742188 219.820312 C 282.746094 219.824219 282.746094 219.824219 282.746094 219.824219 C 282.746094 219.828125 282.75 219.832031 282.75 219.835938 C 282.753906 219.835938 282.753906 219.839844 282.753906 219.839844 C 282.753906 219.84375 282.757812 219.847656 282.761719 219.847656 C 282.761719 219.847656 282.761719 219.851562 282.761719 219.851562 C 282.765625 219.855469 282.765625 219.859375 282.769531 219.863281 C 282.769531 219.863281 282.769531 219.863281 282.769531 219.867188 C 282.773438 219.871094 282.773438 219.875 282.777344 219.878906 C 282.78125 219.886719 282.78125 219.890625 282.785156 219.894531 C 282.785156 219.894531 282.785156 219.894531 282.785156 219.898438 C 282.789062 219.902344 282.789062 219.90625 282.792969 219.910156 C 282.796875 219.914062 282.796875 219.917969 282.800781 219.921875 C 282.800781 219.921875 282.800781 219.925781 282.800781 219.925781 C 282.800781 219.929688 282.804688 219.933594 282.808594 219.9375 C 282.8125 219.941406 282.8125 219.945312 282.816406 219.949219 C 282.816406 219.949219 282.816406 219.953125 282.820312 219.953125 C 282.820312 219.957031 282.824219 219.960938 282.824219 219.964844 C 282.824219 219.964844 282.824219 219.96875 282.828125 219.96875 C 282.828125 219.972656 282.832031 219.972656 282.832031 219.980469 C 282.839844 219.988281 282.84375 220 282.851562 220.007812 C 282.851562 220.007812 282.851562 220.011719 282.851562 220.011719 C 282.851562 220.015625 282.855469 220.019531 282.859375 220.023438 C 282.859375 220.023438 282.859375 220.023438 282.859375 220.027344 C 282.863281 220.03125 282.863281 220.035156 282.867188 220.035156 C 282.867188 220.039062 282.867188 220.039062 282.867188 220.039062 C 282.867188 220.042969 282.871094 220.046875 282.871094 220.050781 C 282.875 220.050781 282.875 220.054688 282.875 220.054688 C 282.875 220.058594 282.878906 220.0625 282.878906 220.066406 C 282.882812 220.066406 282.882812 220.066406 282.882812 220.066406 C 282.886719 220.074219 282.886719 220.074219 282.890625 220.082031 C 282.898438 220.097656 282.90625 220.109375 282.914062 220.125 C 282.914062 220.125 282.914062 220.125 282.914062 220.128906 C 282.917969 220.132812 282.917969 220.132812 282.921875 220.136719 C 282.921875 220.136719 282.921875 220.140625 282.921875 220.140625 C 282.925781 220.144531 282.929688 220.148438 282.929688 220.152344 C 282.929688 220.152344 282.929688 220.15625 282.929688 220.15625 C 282.933594 220.160156 282.933594 220.164062 282.9375 220.164062 C 282.9375 220.167969 282.9375 220.167969 282.9375 220.167969 C 282.941406 220.171875 282.941406 220.175781 282.945312 220.179688 C 282.945312 220.179688 282.945312 220.183594 282.945312 220.183594 C 282.953125 220.195312 282.960938 220.210938 282.96875 220.226562 C 282.972656 220.230469 282.972656 220.234375 282.976562 220.238281 C 282.976562 220.238281 282.976562 220.242188 282.980469 220.242188 C 282.980469 220.246094 282.984375 220.25 282.984375 220.253906 C 282.984375 220.253906 282.984375 220.253906 282.984375 220.257812 C 282.988281 220.257812 282.988281 220.261719 282.992188 220.265625 C 282.992188 220.269531 282.992188 220.269531 282.992188 220.269531 C 282.996094 220.273438 282.996094 220.277344 283 220.28125 C 283 220.28125 283 220.285156 283 220.285156 C 283.003906 220.289062 283.003906 220.292969 283.007812 220.296875 C 283.011719 220.308594 283.015625 220.316406 283.023438 220.328125 C 283.027344 220.332031 283.027344 220.335938 283.03125 220.339844 C 283.03125 220.34375 283.03125 220.34375 283.03125 220.34375 C 283.03125 220.347656 283.035156 220.351562 283.035156 220.355469 C 283.039062 220.355469 283.039062 220.359375 283.039062 220.359375 C 283.039062 220.363281 283.042969 220.367188 283.042969 220.367188 C 283.046875 220.371094 283.046875 220.371094 283.046875 220.375 C 283.046875 220.375 283.050781 220.378906 283.050781 220.382812 C 283.054688 220.386719 283.054688 220.386719 283.054688 220.386719 C 283.058594 220.390625 283.058594 220.394531 283.058594 220.398438 C 283.058594 220.398438 283.0625 220.402344 283.0625 220.402344 C 283.066406 220.410156 283.070312 220.421875 283.078125 220.429688 C 283.082031 220.433594 283.082031 220.4375 283.085938 220.441406 C 283.085938 220.445312 283.085938 220.445312 283.085938 220.445312 C 283.089844 220.449219 283.089844 220.453125 283.09375 220.457031 C 283.09375 220.457031 283.09375 220.457031 283.09375 220.460938 C 283.09375 220.464844 283.097656 220.46875 283.097656 220.472656 C 283.101562 220.472656 283.101562 220.472656 283.101562 220.476562 C 283.101562 220.476562 283.105469 220.484375 283.105469 220.484375 C 283.109375 220.484375 283.109375 220.488281 283.109375 220.488281 C 283.109375 220.492188 283.113281 220.496094 283.113281 220.5 C 283.117188 220.5 283.117188 220.503906 283.117188 220.503906 C 283.125 220.515625 283.128906 220.53125 283.136719 220.546875 C 283.136719 220.546875 283.140625 220.546875 283.140625 220.546875 C 283.140625 220.550781 283.144531 220.554688 283.144531 220.558594 C 283.148438 220.5625 283.148438 220.5625 283.148438 220.5625 C 283.148438 220.566406 283.152344 220.570312 283.152344 220.574219 C 283.15625 220.574219 283.15625 220.578125 283.15625 220.578125 C 283.15625 220.582031 283.160156 220.585938 283.160156 220.589844 C 283.160156 220.589844 283.164062 220.589844 283.164062 220.59375 C 283.164062 220.597656 283.167969 220.601562 283.167969 220.605469 C 283.167969 220.605469 283.167969 220.605469 283.167969 220.609375 C 283.175781 220.621094 283.183594 220.636719 283.191406 220.648438 C 283.191406 220.652344 283.191406 220.652344 283.191406 220.652344 C 283.195312 220.65625 283.195312 220.660156 283.199219 220.664062 C 283.199219 220.664062 283.199219 220.667969 283.199219 220.667969 C 283.203125 220.671875 283.203125 220.675781 283.207031 220.679688 C 283.207031 220.679688 283.207031 220.679688 283.207031 220.683594 C 283.210938 220.683594 283.214844 220.691406 283.214844 220.691406 C 283.214844 220.695312 283.214844 220.695312 283.214844 220.695312 C 283.21875 220.699219 283.21875 220.703125 283.222656 220.707031 C 283.222656 220.707031 283.222656 220.707031 283.222656 220.710938 C 283.230469 220.726562 283.238281 220.738281 283.246094 220.753906 C 283.25 220.757812 283.25 220.761719 283.253906 220.765625 C 283.253906 220.769531 283.253906 220.769531 283.253906 220.773438 C 283.257812 220.773438 283.257812 220.777344 283.257812 220.78125 C 283.261719 220.785156 283.261719 220.785156 283.261719 220.785156 C 283.261719 220.789062 283.265625 220.792969 283.265625 220.796875 C 283.265625 220.796875 283.265625 220.796875 283.269531 220.800781 C 283.269531 220.804688 283.273438 220.808594 283.273438 220.808594 C 283.273438 220.808594 283.273438 220.8125 283.273438 220.8125 C 283.277344 220.816406 283.277344 220.820312 283.28125 220.824219 C 283.28125 220.824219 283.28125 220.828125 283.28125 220.828125 C 283.289062 220.835938 283.292969 220.847656 283.296875 220.855469 C 283.296875 220.855469 283.296875 220.855469 283.296875 220.859375 C 283.300781 220.863281 283.300781 220.867188 283.304688 220.871094 C 283.308594 220.875 283.308594 220.878906 283.3125 220.882812 C 283.3125 220.886719 283.3125 220.886719 283.3125 220.886719 C 283.316406 220.890625 283.316406 220.894531 283.320312 220.898438 C 283.320312 220.898438 283.320312 220.902344 283.320312 220.902344 C 283.324219 220.90625 283.324219 220.910156 283.328125 220.914062 C 283.328125 220.914062 283.328125 220.914062 283.328125 220.917969 C 283.332031 220.921875 283.332031 220.925781 283.335938 220.929688 C 283.34375 220.945312 283.351562 220.960938 283.359375 220.972656 C 283.359375 220.976562 283.359375 220.976562 283.359375 220.976562 C 283.363281 220.980469 283.363281 220.984375 283.363281 220.988281 C 283.363281 220.992188 283.363281 220.992188 283.367188 220.992188 C 283.367188 220.996094 283.371094 221 283.371094 221.003906 C 283.371094 221.003906 283.371094 221.007812 283.375 221.007812 C 283.375 221.011719 283.378906 221.015625 283.378906 221.019531 C 283.378906 221.019531 283.378906 221.019531 283.378906 221.023438 C 283.382812 221.027344 283.382812 221.03125 283.386719 221.035156 C 283.394531 221.050781 283.402344 221.0625 283.410156 221.078125 C 283.410156 221.082031 283.410156 221.082031 283.410156 221.082031 C 283.414062 221.085938 283.414062 221.089844 283.417969 221.09375 C 283.417969 221.09375 283.417969 221.09375 283.417969 221.097656 C 283.421875 221.101562 283.421875 221.105469 283.425781 221.109375 C 283.429688 221.113281 283.429688 221.117188 283.433594 221.121094 C 283.433594 221.125 283.433594 221.125 283.433594 221.125 C 283.4375 221.128906 283.4375 221.132812 283.4375 221.136719 C 283.4375 221.140625 283.441406 221.140625 283.441406 221.140625 C 283.449219 221.15625 283.453125 221.167969 283.460938 221.183594 C 283.460938 221.183594 283.464844 221.183594 283.464844 221.1875 C 283.464844 221.191406 283.464844 221.195312 283.46875 221.199219 C 283.472656 221.207031 283.472656 221.207031 283.476562 221.214844 C 283.480469 221.222656 283.480469 221.222656 283.484375 221.226562 C 283.484375 221.230469 283.484375 221.230469 283.484375 221.230469 C 283.488281 221.234375 283.488281 221.238281 283.492188 221.242188 C 283.492188 221.246094 283.492188 221.246094 283.492188 221.246094 C 283.5 221.265625 283.511719 221.285156 283.519531 221.304688 C 283.523438 221.3125 283.523438 221.3125 283.527344 221.320312 C 283.53125 221.324219 283.53125 221.328125 283.535156 221.332031 C 283.535156 221.335938 283.535156 221.335938 283.535156 221.335938 C 283.539062 221.339844 283.539062 221.34375 283.542969 221.351562 C 283.542969 221.355469 283.546875 221.359375 283.546875 221.363281 C 283.558594 221.382812 283.566406 221.402344 283.578125 221.421875 C 283.578125 221.421875 283.578125 221.425781 283.578125 221.425781 C 283.582031 221.429688 283.582031 221.433594 283.585938 221.4375 C 283.585938 221.4375 283.585938 221.441406 283.585938 221.441406 C 283.589844 221.445312 283.589844 221.449219 283.589844 221.453125 C 283.589844 221.453125 283.59375 221.453125 283.59375 221.453125 C 283.59375 221.460938 283.597656 221.464844 283.597656 221.46875 C 283.609375 221.488281 283.617188 221.507812 283.628906 221.527344 C 283.628906 221.527344 283.628906 221.53125 283.628906 221.53125 C 283.628906 221.535156 283.628906 221.539062 283.632812 221.542969 C 283.632812 221.542969 283.632812 221.542969 283.636719 221.542969 C 283.636719 221.550781 283.640625 221.550781 283.640625 221.558594 C 283.644531 221.5625 283.644531 221.566406 283.648438 221.574219 C 283.660156 221.59375 283.667969 221.613281 283.679688 221.632812 C 283.679688 221.640625 283.683594 221.640625 283.683594 221.648438 C 283.683594 221.648438 283.6875 221.648438 283.6875 221.648438 C 283.6875 221.652344 283.691406 221.65625 283.691406 221.660156 C 283.691406 221.664062 283.691406 221.664062 283.691406 221.664062 C 283.695312 221.667969 283.695312 221.671875 283.699219 221.675781 C 283.699219 221.675781 283.699219 221.675781 283.699219 221.679688 C 283.699219 221.683594 283.703125 221.6875 283.707031 221.691406 C 283.707031 221.695312 283.707031 221.691406 283.707031 221.695312 C 283.714844 221.714844 283.722656 221.734375 283.734375 221.753906 C 283.738281 221.761719 283.738281 221.761719 283.738281 221.769531 C 283.742188 221.769531 283.742188 221.769531 283.742188 221.769531 C 283.742188 221.773438 283.742188 221.777344 283.746094 221.78125 C 283.746094 221.785156 283.746094 221.785156 283.746094 221.785156 C 283.75 221.789062 283.75 221.792969 283.753906 221.800781 C 283.761719 221.816406 283.769531 221.832031 283.773438 221.84375 C 283.773438 221.847656 283.773438 221.84375 283.773438 221.847656 C 283.777344 221.851562 283.78125 221.855469 283.78125 221.859375 C 283.78125 221.863281 283.78125 221.863281 283.78125 221.863281 C 283.785156 221.867188 283.785156 221.871094 283.789062 221.875 C 283.792969 221.882812 283.792969 221.882812 283.792969 221.890625 C 283.792969 221.890625 283.796875 221.890625 283.796875 221.890625 C 283.796875 221.894531 283.800781 221.898438 283.800781 221.902344 C 283.800781 221.902344 283.800781 221.90625 283.800781 221.90625 C 283.8125 221.925781 283.820312 221.945312 283.828125 221.964844 C 283.828125 221.964844 283.832031 221.964844 283.832031 221.96875 C 283.832031 221.972656 283.835938 221.976562 283.835938 221.980469 C 283.835938 221.980469 283.835938 221.980469 283.835938 221.984375 C 283.839844 221.988281 283.839844 221.992188 283.84375 221.996094 C 283.84375 221.996094 283.84375 221.996094 283.84375 222 C 283.847656 222.003906 283.847656 222.007812 283.851562 222.011719 C 283.851562 222.011719 283.851562 222.011719 283.851562 222.015625 C 283.851562 222.019531 283.855469 222.023438 283.855469 222.027344 C 283.855469 222.027344 283.855469 222.027344 283.859375 222.027344 C 283.863281 222.042969 283.871094 222.058594 283.878906 222.074219 C 283.878906 222.078125 283.882812 222.082031 283.882812 222.089844 C 283.886719 222.089844 283.886719 222.089844 283.886719 222.089844 C 283.886719 222.09375 283.890625 222.097656 283.890625 222.101562 C 283.890625 222.101562 283.890625 222.101562 283.890625 222.105469 C 283.894531 222.109375 283.894531 222.113281 283.898438 222.117188 C 283.898438 222.117188 283.898438 222.117188 283.898438 222.121094 C 283.898438 222.125 283.902344 222.128906 283.902344 222.132812 L 283.90625 222.132812 C 283.910156 222.148438 283.917969 222.164062 283.925781 222.179688 C 283.925781 222.183594 283.929688 222.191406 283.933594 222.195312 C 283.933594 222.199219 283.9375 222.203125 283.9375 222.210938 C 283.9375 222.210938 283.941406 222.210938 283.941406 222.210938 C 283.941406 222.214844 283.945312 222.21875 283.945312 222.222656 C 283.945312 222.226562 283.945312 222.226562 283.945312 222.226562 C 283.949219 222.230469 283.949219 222.234375 283.953125 222.238281 C 283.953125 222.242188 283.953125 222.242188 283.953125 222.242188 C 283.960938 222.261719 283.96875 222.28125 283.980469 222.300781 C 283.980469 222.300781 283.980469 222.304688 283.980469 222.304688 C 283.984375 222.308594 283.984375 222.3125 283.988281 222.316406 C 283.988281 222.316406 283.988281 222.320312 283.988281 222.320312 C 283.988281 222.324219 283.992188 222.324219 283.992188 222.332031 C 283.992188 222.332031 283.996094 222.332031 283.996094 222.332031 C 283.996094 222.339844 283.996094 222.339844 284 222.347656 C 284.003906 222.351562 284.003906 222.355469 284.007812 222.363281 C 284.011719 222.371094 284.015625 222.382812 284.019531 222.390625 C 284.023438 222.398438 284.023438 222.402344 284.027344 222.40625 C 284.027344 222.410156 284.027344 222.410156 284.027344 222.410156 C 284.03125 222.414062 284.03125 222.417969 284.035156 222.421875 C 284.035156 222.421875 284.035156 222.425781 284.035156 222.425781 C 284.035156 222.429688 284.039062 222.433594 284.039062 222.4375 C 284.042969 222.4375 284.042969 222.441406 284.042969 222.441406 C 284.042969 222.445312 284.046875 222.449219 284.046875 222.453125 C 284.046875 222.453125 284.046875 222.453125 284.046875 222.457031 C 284.050781 222.460938 284.050781 222.464844 284.054688 222.46875 L 284.054688 222.472656 C 284.058594 222.484375 284.066406 222.5 284.074219 222.515625 C 284.074219 222.515625 284.074219 222.515625 284.074219 222.519531 C 284.074219 222.523438 284.078125 222.527344 284.078125 222.53125 C 284.078125 222.53125 284.078125 222.53125 284.082031 222.535156 C 284.082031 222.539062 284.082031 222.542969 284.085938 222.546875 C 284.089844 222.554688 284.089844 222.554688 284.09375 222.5625 C 284.09375 222.570312 284.097656 222.570312 284.097656 222.578125 C 284.109375 222.601562 284.117188 222.617188 284.125 222.640625 C 284.125 222.640625 284.125 222.640625 284.128906 222.640625 C 284.128906 222.644531 284.128906 222.648438 284.132812 222.65625 C 284.136719 222.664062 284.136719 222.664062 284.140625 222.671875 C 284.140625 222.675781 284.144531 222.679688 284.144531 222.6875 C 284.144531 222.6875 284.144531 222.6875 284.148438 222.6875 C 284.15625 222.707031 284.164062 222.726562 284.171875 222.75 C 284.175781 222.753906 284.175781 222.757812 284.179688 222.761719 C 284.179688 222.765625 284.179688 222.765625 284.179688 222.765625 C 284.183594 222.769531 284.183594 222.773438 284.1875 222.777344 C 284.1875 222.78125 284.1875 222.78125 284.1875 222.78125 C 284.1875 222.785156 284.191406 222.789062 284.191406 222.796875 C 284.191406 222.796875 284.195312 222.796875 284.195312 222.796875 C 284.203125 222.824219 284.214844 222.847656 284.226562 222.875 C 284.226562 222.878906 284.230469 222.882812 284.230469 222.890625 C 284.234375 222.890625 284.230469 222.890625 284.234375 222.890625 C 284.234375 222.894531 284.238281 222.898438 284.238281 222.90625 C 284.25 222.933594 284.261719 222.957031 284.273438 222.984375 C 284.273438 222.988281 284.277344 222.992188 284.277344 223 C 284.28125 223.007812 284.28125 223.007812 284.285156 223.015625 C 284.296875 223.046875 284.3125 223.078125 284.324219 223.109375 C 284.324219 223.117188 284.328125 223.121094 284.328125 223.125 C 284.328125 223.128906 284.328125 223.125 284.328125 223.128906 C 284.332031 223.132812 284.332031 223.136719 284.335938 223.140625 C 284.335938 223.144531 284.335938 223.140625 284.335938 223.144531 C 284.34375 223.167969 284.355469 223.195312 284.367188 223.222656 C 284.367188 223.226562 284.371094 223.230469 284.371094 223.234375 C 284.371094 223.238281 284.371094 223.238281 284.371094 223.238281 C 284.375 223.242188 284.375 223.246094 284.378906 223.25 L 284.378906 223.253906 C 284.378906 223.257812 284.382812 223.261719 284.386719 223.265625 C 284.394531 223.289062 284.402344 223.308594 284.410156 223.328125 L 284.410156 223.332031 C 284.410156 223.335938 284.414062 223.339844 284.414062 223.347656 C 284.417969 223.351562 284.417969 223.355469 284.421875 223.363281 C 284.433594 223.394531 284.445312 223.425781 284.457031 223.457031 C 284.472656 223.5 284.492188 223.542969 284.507812 223.582031 C 284.519531 223.613281 284.53125 223.648438 284.542969 223.679688 C 284.546875 223.683594 284.546875 223.6875 284.550781 223.695312 C 284.550781 223.699219 284.554688 223.703125 284.554688 223.710938 C 284.566406 223.738281 284.574219 223.761719 284.585938 223.789062 C 284.585938 223.796875 284.589844 223.800781 284.589844 223.804688 C 284.59375 223.8125 284.59375 223.816406 284.597656 223.820312 C 284.609375 223.847656 284.617188 223.875 284.625 223.902344 C 284.628906 223.90625 284.628906 223.910156 284.632812 223.917969 C 284.632812 223.921875 284.636719 223.929688 284.636719 223.933594 C 284.652344 223.964844 284.660156 223.996094 284.671875 224.027344 L 284.671875 224.03125 C 284.675781 224.035156 284.675781 224.039062 284.679688 224.046875 C 284.691406 224.082031 284.707031 224.121094 284.71875 224.15625 C 284.734375 224.199219 284.75 224.242188 284.765625 224.285156 C 285.984375 227.683594 286.671875 231.472656 286.847656 235.558594 C 286.847656 235.5625 286.847656 235.558594 286.847656 235.5625 C 286.847656 235.566406 286.847656 235.574219 286.847656 235.578125 C 286.851562 235.625 286.851562 235.667969 286.855469 235.714844 C 286.855469 235.761719 286.859375 235.804688 286.859375 235.851562 C 286.859375 235.855469 286.859375 235.863281 286.859375 235.867188 C 286.859375 235.871094 286.859375 235.871094 286.859375 235.871094 C 286.863281 235.910156 286.863281 235.949219 286.863281 235.984375 L 286.863281 235.988281 C 286.863281 235.992188 286.863281 236 286.863281 236.003906 L 286.863281 236.007812 C 286.863281 236.011719 286.863281 236.015625 286.867188 236.023438 L 286.867188 236.027344 C 286.867188 236.058594 286.867188 236.089844 286.867188 236.121094 C 286.867188 236.125 286.867188 236.121094 286.867188 236.121094 C 286.867188 236.128906 286.867188 236.132812 286.871094 236.140625 C 286.871094 236.140625 286.871094 236.144531 286.871094 236.144531 C 286.871094 236.148438 286.871094 236.152344 286.871094 236.160156 C 286.871094 236.160156 286.871094 236.160156 286.871094 236.164062 C 286.871094 236.167969 286.871094 236.171875 286.871094 236.179688 C 286.871094 236.179688 286.871094 236.179688 286.871094 236.183594 C 286.871094 236.207031 286.875 236.234375 286.875 236.257812 C 286.875 236.261719 286.875 236.261719 286.875 236.261719 C 286.875 236.269531 286.875 236.273438 286.875 236.277344 C 286.875 236.28125 286.875 236.28125 286.875 236.28125 C 286.875 236.289062 286.875 236.292969 286.875 236.300781 C 286.875 236.308594 286.875 236.3125 286.875 236.316406 C 286.875 236.320312 286.875 236.320312 286.875 236.320312 C 286.875 236.328125 286.875 236.332031 286.875 236.339844 C 286.875 236.359375 286.875 236.378906 286.875 236.398438 L 286.875 236.402344 C 286.875 236.40625 286.875 236.410156 286.875 236.417969 C 286.875 236.417969 286.875 236.417969 286.875 236.421875 C 286.875 236.429688 286.875 236.429688 286.875 236.4375 C 286.875 236.4375 286.875 236.4375 286.875 236.441406 C 286.875 236.445312 286.875 236.449219 286.875 236.457031 C 286.875 236.460938 286.875 236.457031 286.875 236.460938 C 286.875 236.46875 286.875 236.472656 286.875 236.476562 L 286.875 236.480469 C 286.878906 236.503906 286.878906 236.53125 286.878906 236.558594 C 286.878906 236.5625 286.878906 236.570312 286.878906 236.574219 C 286.878906 236.578125 286.878906 236.578125 286.878906 236.578125 C 286.878906 236.585938 286.878906 236.589844 286.878906 236.59375 C 286.878906 236.597656 286.878906 236.597656 286.878906 236.597656 C 286.878906 236.601562 286.878906 236.609375 286.878906 236.613281 L 286.878906 236.617188 C 286.878906 236.640625 286.878906 236.667969 286.878906 236.691406 C 286.878906 236.695312 286.878906 236.691406 286.878906 236.695312 C 286.878906 236.699219 286.878906 236.707031 286.878906 236.714844 C 286.878906 236.722656 286.878906 236.726562 286.878906 236.730469 C 286.878906 236.730469 286.878906 236.734375 286.878906 236.734375 C 286.878906 236.742188 286.878906 236.746094 286.878906 236.75 C 286.878906 236.753906 286.878906 236.753906 286.878906 236.753906 C 286.882812 236.78125 286.882812 236.804688 286.882812 236.832031 C 286.882812 236.839844 286.882812 236.84375 286.882812 236.851562 C 286.882812 236.859375 286.882812 236.863281 286.882812 236.867188 C 286.882812 236.871094 286.882812 236.871094 286.882812 236.871094 C 286.882812 236.878906 286.882812 236.882812 286.882812 236.886719 C 286.882812 236.886719 286.882812 236.890625 286.882812 236.890625 C 286.882812 236.898438 286.882812 236.902344 286.882812 236.910156 C 286.882812 236.929688 286.882812 236.949219 286.882812 236.96875 C 286.882812 236.96875 286.882812 236.96875 286.882812 236.972656 C 286.882812 236.976562 286.882812 236.980469 286.882812 236.988281 C 286.882812 236.996094 286.882812 237 286.882812 237.007812 C 286.882812 237.007812 286.882812 237.007812 286.882812 237.011719 C 286.882812 237.015625 286.882812 237.019531 286.882812 237.027344 C 286.882812 237.035156 286.882812 237.039062 286.882812 237.046875 C 286.882812 237.074219 286.882812 237.101562 286.882812 237.125 C 286.882812 237.128906 286.882812 237.128906 286.882812 237.128906 C 286.882812 237.132812 286.882812 237.140625 286.882812 237.144531 C 286.882812 237.144531 286.882812 237.148438 286.882812 237.148438 C 286.882812 237.152344 286.882812 237.15625 286.882812 237.164062 C 286.882812 237.164062 286.882812 237.167969 286.882812 237.167969 C 286.882812 237.175781 286.882812 237.179688 286.882812 237.183594 C 286.882812 237.210938 286.886719 237.238281 286.886719 237.265625 C 286.886719 237.273438 286.886719 237.273438 286.886719 237.28125 C 286.886719 237.285156 286.886719 237.285156 286.886719 237.285156 C 286.886719 237.292969 286.886719 237.296875 286.886719 237.300781 C 286.886719 237.304688 286.886719 237.304688 286.886719 237.304688 C 286.886719 237.3125 286.886719 237.316406 286.886719 237.320312 C 286.886719 237.324219 286.886719 237.324219 286.886719 237.324219 C 286.886719 237.332031 286.886719 237.335938 286.886719 237.34375 C 286.886719 237.363281 286.886719 237.382812 286.886719 237.402344 C 286.886719 237.410156 286.886719 237.414062 286.886719 237.421875 C 286.886719 237.421875 286.886719 237.421875 286.886719 237.425781 C 286.886719 237.429688 286.886719 237.433594 286.886719 237.4375 C 286.886719 237.441406 286.886719 237.445312 286.886719 237.445312 C 286.886719 237.449219 286.886719 237.457031 286.886719 237.460938 C 286.886719 237.460938 286.886719 237.460938 286.886719 237.464844 C 286.886719 237.46875 286.886719 237.472656 286.886719 237.480469 C 286.886719 237.480469 286.886719 237.480469 286.886719 237.484375 C 286.886719 237.496094 286.886719 237.507812 286.886719 237.523438 C 286.886719 237.53125 286.886719 237.535156 286.886719 237.542969 C 286.886719 237.550781 286.886719 237.554688 286.886719 237.558594 C 286.886719 237.5625 286.886719 237.5625 286.886719 237.566406 C 286.886719 237.566406 286.886719 237.574219 286.886719 237.578125 C 286.886719 237.582031 286.886719 237.582031 286.886719 237.585938 C 286.886719 237.589844 286.886719 237.59375 286.886719 237.597656 C 286.886719 237.597656 286.886719 237.601562 286.886719 237.605469 C 286.886719 237.609375 286.886719 237.613281 286.886719 237.617188 C 286.886719 237.621094 286.886719 237.621094 286.886719 237.625 C 286.886719 237.628906 286.886719 237.632812 286.886719 237.640625 C 286.886719 237.65625 286.886719 237.667969 286.886719 237.679688 C 286.886719 237.683594 286.886719 237.683594 286.886719 237.683594 C 286.886719 237.691406 286.886719 237.691406 286.886719 237.699219 C 286.886719 237.703125 286.886719 237.703125 286.886719 237.703125 C 286.886719 237.707031 286.886719 237.714844 286.886719 237.71875 C 286.886719 237.71875 286.886719 237.722656 286.886719 237.722656 C 286.886719 237.726562 286.886719 237.734375 286.886719 237.738281 C 286.886719 237.738281 286.886719 237.742188 286.886719 237.742188 C 286.886719 237.746094 286.886719 237.75 286.886719 237.753906 C 286.886719 237.757812 286.886719 237.761719 286.886719 237.761719 C 286.886719 237.765625 286.886719 237.769531 286.886719 237.777344 C 286.886719 237.777344 286.886719 237.78125 286.886719 237.78125 C 286.886719 237.792969 286.886719 237.804688 286.886719 237.820312 C 286.886719 237.828125 286.886719 237.832031 286.886719 237.835938 C 286.886719 237.839844 286.886719 237.84375 286.886719 237.84375 C 286.886719 237.847656 286.886719 237.851562 286.886719 237.855469 C 286.886719 237.859375 286.886719 237.859375 286.886719 237.863281 C 286.886719 237.867188 286.886719 237.871094 286.886719 237.875 C 286.886719 237.878906 286.886719 237.878906 286.886719 237.882812 C 286.886719 237.882812 286.886719 237.890625 286.886719 237.894531 C 286.886719 237.894531 286.886719 237.898438 286.886719 237.902344 C 286.886719 237.902344 286.886719 237.910156 286.886719 237.914062 C 286.886719 237.914062 286.886719 237.917969 286.886719 237.917969 C 286.886719 237.925781 286.886719 237.929688 286.886719 237.9375 C 286.886719 237.945312 286.886719 237.949219 286.886719 237.957031 C 286.886719 237.964844 286.886719 237.96875 286.886719 237.976562 C 286.886719 237.976562 286.886719 237.980469 286.886719 237.980469 C 286.886719 237.984375 286.886719 237.988281 286.886719 237.996094 C 286.886719 237.996094 286.886719 238 286.886719 238 C 286.886719 238.003906 286.886719 238.011719 286.886719 238.011719 C 286.886719 238.015625 286.886719 238.019531 286.886719 238.019531 C 286.886719 238.023438 286.886719 238.03125 286.886719 238.03125 C 286.886719 238.035156 286.886719 238.039062 286.886719 238.039062 C 286.886719 238.042969 286.886719 238.046875 286.886719 238.050781 C 286.886719 238.054688 286.886719 238.054688 286.886719 238.058594 C 286.886719 238.0625 286.886719 238.066406 286.886719 238.070312 C 286.886719 238.074219 286.886719 238.074219 286.886719 238.078125 C 286.886719 238.089844 286.886719 238.101562 286.886719 238.113281 C 286.886719 238.117188 286.886719 238.121094 286.886719 238.121094 C 286.886719 238.125 286.886719 238.128906 286.886719 238.132812 C 286.886719 238.136719 286.886719 238.140625 286.886719 238.140625 C 286.886719 238.144531 286.886719 238.148438 286.886719 238.152344 C 286.886719 238.15625 286.886719 238.15625 286.886719 238.160156 C 286.886719 238.164062 286.886719 238.167969 286.886719 238.171875 C 286.886719 238.171875 286.886719 238.175781 286.886719 238.179688 C 286.886719 238.183594 286.886719 238.1875 286.886719 238.191406 C 286.886719 238.195312 286.886719 238.195312 286.886719 238.199219 C 286.886719 238.203125 286.886719 238.207031 286.886719 238.210938 C 286.886719 238.214844 286.886719 238.214844 286.886719 238.21875 C 286.886719 238.230469 286.886719 238.242188 286.886719 238.253906 C 286.886719 238.257812 286.886719 238.257812 286.886719 238.261719 C 286.886719 238.265625 286.886719 238.269531 286.886719 238.273438 C 286.886719 238.277344 286.886719 238.277344 286.886719 238.28125 C 286.886719 238.285156 286.886719 238.289062 286.886719 238.292969 C 286.886719 238.296875 286.886719 238.296875 286.886719 238.300781 C 286.886719 238.300781 286.886719 238.308594 286.886719 238.3125 C 286.886719 238.3125 286.886719 238.316406 286.886719 238.320312 C 286.886719 238.324219 286.886719 238.328125 286.886719 238.332031 C 286.886719 238.335938 286.886719 238.335938 286.886719 238.339844 C 286.886719 238.34375 286.886719 238.347656 286.886719 238.351562 C 286.886719 238.355469 286.886719 238.355469 286.886719 238.359375 C 286.886719 238.371094 286.886719 238.382812 286.882812 238.394531 C 286.882812 238.398438 286.882812 238.398438 286.882812 238.402344 C 286.882812 238.40625 286.882812 238.410156 286.882812 238.414062 C 286.882812 238.417969 286.882812 238.417969 286.882812 238.421875 C 286.882812 238.425781 286.882812 238.429688 286.882812 238.433594 C 286.882812 238.433594 286.882812 238.4375 286.882812 238.441406 C 286.882812 238.445312 286.882812 238.449219 286.882812 238.453125 C 286.882812 238.457031 286.882812 238.457031 286.882812 238.460938 C 286.882812 238.464844 286.882812 238.46875 286.882812 238.472656 C 286.882812 238.472656 286.882812 238.476562 286.882812 238.480469 C 286.882812 238.484375 286.882812 238.488281 286.882812 238.492188 C 286.882812 238.492188 286.882812 238.496094 286.882812 238.5 C 286.882812 238.503906 286.882812 238.507812 286.882812 238.511719 C 286.882812 238.515625 286.882812 238.515625 286.882812 238.519531 C 286.882812 238.523438 286.882812 238.53125 286.882812 238.535156 C 286.882812 238.539062 286.882812 238.542969 286.882812 238.542969 C 286.882812 238.546875 286.882812 238.550781 286.882812 238.554688 C 286.882812 238.558594 286.882812 238.5625 286.882812 238.5625 C 286.882812 238.566406 286.882812 238.570312 286.882812 238.574219 C 286.882812 238.578125 286.882812 238.578125 286.882812 238.582031 C 286.882812 238.585938 286.882812 238.589844 286.882812 238.59375 C 286.882812 238.59375 286.882812 238.597656 286.882812 238.601562 C 286.882812 238.605469 286.882812 238.609375 286.882812 238.613281 C 286.882812 238.613281 286.882812 238.617188 286.882812 238.621094 C 286.882812 238.621094 286.882812 238.628906 286.882812 238.632812 C 286.882812 238.632812 286.882812 238.636719 286.882812 238.640625 C 286.882812 238.644531 286.882812 238.648438 286.882812 238.652344 C 286.882812 238.652344 286.882812 238.65625 286.882812 238.65625 C 286.882812 238.664062 286.882812 238.667969 286.882812 238.675781 C 286.882812 238.675781 286.882812 238.679688 286.882812 238.683594 C 286.882812 238.6875 286.882812 238.691406 286.882812 238.695312 C 286.882812 238.699219 286.882812 238.699219 286.882812 238.703125 C 286.882812 238.707031 286.882812 238.710938 286.882812 238.714844 C 286.882812 238.714844 286.882812 238.71875 286.882812 238.722656 C 286.882812 238.726562 286.882812 238.730469 286.882812 238.730469 C 286.882812 238.734375 286.882812 238.738281 286.882812 238.742188 C 286.882812 238.746094 286.882812 238.746094 286.882812 238.75 C 286.882812 238.753906 286.882812 238.757812 286.882812 238.761719 C 286.882812 238.765625 286.882812 238.769531 286.882812 238.769531 C 286.882812 238.773438 286.882812 238.777344 286.882812 238.78125 C 286.882812 238.78125 286.882812 238.785156 286.882812 238.789062 C 286.882812 238.792969 286.882812 238.796875 286.882812 238.796875 C 286.882812 238.804688 286.882812 238.804688 286.882812 238.808594 C 286.882812 238.816406 286.882812 238.824219 286.882812 238.828125 C 286.882812 238.832031 286.882812 238.832031 286.882812 238.835938 C 286.882812 238.839844 286.882812 238.84375 286.882812 238.84375 C 286.882812 238.847656 286.882812 238.851562 286.882812 238.851562 C 286.882812 238.855469 286.882812 238.859375 286.882812 238.863281 C 286.882812 238.867188 286.882812 238.871094 286.882812 238.871094 C 286.882812 238.875 286.882812 238.878906 286.882812 238.882812 C 286.882812 238.886719 286.882812 238.886719 286.882812 238.890625 C 286.882812 238.894531 286.882812 238.898438 286.882812 238.902344 C 286.882812 238.90625 286.882812 238.90625 286.882812 238.910156 C 286.882812 238.914062 286.882812 238.917969 286.882812 238.921875 C 286.882812 238.925781 286.882812 238.925781 286.882812 238.929688 C 286.882812 238.933594 286.882812 238.9375 286.882812 238.9375 C 286.882812 238.941406 286.882812 238.945312 286.882812 238.949219 C 286.882812 238.960938 286.882812 238.972656 286.882812 238.988281 C 286.882812 238.988281 286.882812 238.992188 286.882812 238.996094 C 286.882812 239 286.882812 239.003906 286.882812 239.003906 C 286.882812 239.007812 286.882812 239.011719 286.882812 239.011719 C 286.882812 239.015625 286.882812 239.019531 286.882812 239.023438 C 286.882812 239.027344 286.882812 239.027344 286.882812 239.03125 C 286.882812 239.035156 286.882812 239.039062 286.882812 239.042969 C 286.882812 239.046875 286.882812 239.046875 286.882812 239.050781 C 286.882812 239.054688 286.882812 239.058594 286.882812 239.0625 C 286.882812 239.0625 286.882812 239.066406 286.882812 239.070312 C 286.882812 239.070312 286.882812 239.078125 286.882812 239.078125 C 286.882812 239.082031 286.882812 239.085938 286.882812 239.089844 C 286.882812 239.101562 286.882812 239.117188 286.882812 239.132812 L 286.882812 239.136719 C 286.882812 239.140625 286.882812 239.144531 286.882812 239.148438 C 286.882812 239.148438 286.882812 239.152344 286.882812 239.15625 C 286.882812 239.160156 286.882812 239.164062 286.882812 239.167969 C 286.882812 239.167969 286.882812 239.171875 286.882812 239.175781 C 286.882812 239.179688 286.882812 239.183594 286.882812 239.1875 C 286.882812 239.191406 286.882812 239.191406 286.882812 239.191406 C 286.882812 239.195312 286.882812 239.199219 286.882812 239.203125 C 286.882812 239.207031 286.882812 239.210938 286.882812 239.210938 C 286.882812 239.214844 286.882812 239.21875 286.882812 239.222656 C 286.882812 239.226562 286.882812 239.226562 286.882812 239.230469 C 286.882812 239.234375 286.882812 239.238281 286.882812 239.242188 C 286.882812 239.257812 286.882812 239.273438 286.882812 239.289062 C 286.882812 239.292969 286.882812 239.292969 286.882812 239.296875 C 286.882812 239.300781 286.882812 239.304688 286.882812 239.308594 C 286.882812 239.308594 286.882812 239.3125 286.882812 239.316406 C 286.882812 239.320312 286.882812 239.324219 286.882812 239.328125 C 286.882812 239.332031 286.882812 239.332031 286.882812 239.335938 C 286.882812 239.339844 286.882812 239.34375 286.882812 239.347656 C 286.882812 239.351562 286.882812 239.351562 286.882812 239.355469 C 286.882812 239.355469 286.882812 239.359375 286.882812 239.363281 C 286.882812 239.367188 286.882812 239.371094 286.882812 239.371094 C 286.882812 239.375 286.882812 239.378906 286.882812 239.382812 C 286.882812 239.386719 286.882812 239.386719 286.882812 239.390625 C 286.878906 239.40625 286.878906 239.417969 286.878906 239.433594 C 286.878906 239.433594 286.878906 239.4375 286.878906 239.4375 C 286.878906 239.445312 286.878906 239.449219 286.878906 239.453125 C 286.878906 239.453125 286.878906 239.457031 286.878906 239.457031 C 286.878906 239.460938 286.878906 239.464844 286.878906 239.46875 C 286.878906 239.472656 286.878906 239.472656 286.878906 239.476562 C 286.878906 239.480469 286.878906 239.484375 286.878906 239.488281 C 286.878906 239.492188 286.878906 239.492188 286.878906 239.496094 C 286.878906 239.5 286.878906 239.503906 286.878906 239.507812 C 286.878906 239.507812 286.878906 239.511719 286.878906 239.511719 C 286.878906 239.535156 286.878906 239.558594 286.878906 239.578125 C 286.878906 239.585938 286.878906 239.589844 286.875 239.59375 C 286.875 239.597656 286.875 239.597656 286.875 239.597656 C 286.875 239.605469 286.875 239.609375 286.875 239.613281 C 286.875 239.613281 286.875 239.617188 286.875 239.617188 C 286.875 239.625 286.875 239.628906 286.875 239.632812 C 286.875 239.632812 286.875 239.636719 286.875 239.636719 C 286.875 239.640625 286.875 239.644531 286.875 239.648438 C 286.875 239.652344 286.875 239.652344 286.875 239.65625 C 286.875 239.660156 286.875 239.664062 286.875 239.671875 C 286.875 239.695312 286.871094 239.71875 286.871094 239.742188 C 286.871094 239.746094 286.871094 239.753906 286.871094 239.757812 C 286.871094 239.761719 286.871094 239.757812 286.871094 239.761719 C 286.871094 239.765625 286.871094 239.773438 286.871094 239.777344 C 286.871094 239.785156 286.871094 239.789062 286.867188 239.792969 C 286.867188 239.796875 286.867188 239.796875 286.867188 239.796875 C 286.867188 239.804688 286.867188 239.808594 286.867188 239.8125 C 286.867188 239.84375 286.867188 239.871094 286.863281 239.902344 C 286.863281 239.910156 286.863281 239.914062 286.863281 239.917969 L 286.863281 239.921875 C 286.863281 239.925781 286.863281 239.933594 286.863281 239.9375 C 286.863281 239.9375 286.863281 239.9375 286.863281 239.941406 C 286.863281 239.945312 286.863281 239.949219 286.863281 239.957031 C 286.859375 239.988281 286.859375 240.015625 286.859375 240.042969 L 286.859375 240.046875 C 286.859375 240.050781 286.859375 240.054688 286.855469 240.0625 C 286.855469 240.070312 286.855469 240.074219 286.855469 240.082031 C 286.855469 240.089844 286.855469 240.09375 286.855469 240.097656 C 286.851562 240.136719 286.851562 240.167969 286.851562 240.207031 C 286.851562 240.207031 286.851562 240.203125 286.851562 240.207031 C 286.851562 240.210938 286.851562 240.21875 286.847656 240.222656 L 286.847656 240.226562 C 286.847656 240.230469 286.847656 240.238281 286.847656 240.242188 C 286.847656 240.285156 286.84375 240.324219 286.84375 240.367188 C 286.84375 240.375 286.839844 240.378906 286.839844 240.382812 L 286.839844 240.386719 C 286.839844 240.390625 286.839844 240.398438 286.839844 240.402344 C 286.839844 240.441406 286.835938 240.476562 286.835938 240.511719 C 286.835938 240.519531 286.832031 240.523438 286.832031 240.53125 C 286.8125 240.90625 286.789062 241.285156 286.761719 241.667969 C 286.757812 241.730469 286.707031 241.777344 286.644531 241.777344 C 286.640625 241.777344 286.636719 241.777344 286.636719 241.777344 C 286.570312 241.773438 286.519531 241.714844 286.527344 241.648438 C 287.445312 228.945312 283.933594 218.777344 276.640625 213.019531 C 272.726562 209.929688 267.910156 208.183594 262.324219 207.824219 C 262.257812 207.820312 262.207031 207.765625 262.210938 207.699219 C 262.214844 207.636719 262.269531 207.589844 262.332031 207.589844 C 262.332031 207.589844 262.335938 207.589844 262.335938 207.589844 C 267.609375 207.925781 272.367188 209.515625 276.316406 212.46875 C 276.316406 212.472656 276.324219 212.476562 276.328125 212.480469 C 276.332031 212.484375 276.335938 212.488281 276.34375 212.488281 C 276.363281 212.507812 276.386719 212.523438 276.410156 212.539062 C 276.414062 212.542969 276.417969 212.546875 276.421875 212.550781 C 276.421875 212.550781 276.421875 212.550781 276.425781 212.550781 C 276.429688 212.554688 276.433594 212.558594 276.4375 212.558594 C 276.4375 212.5625 276.4375 212.5625 276.4375 212.5625 C 276.441406 212.5625 276.445312 212.566406 276.449219 212.570312 C 276.453125 212.574219 276.457031 212.578125 276.464844 212.582031 C 276.476562 212.589844 276.484375 212.59375 276.492188 212.601562 C 276.496094 212.605469 276.5 212.609375 276.503906 212.613281 C 276.507812 212.613281 276.507812 212.613281 276.507812 212.613281 C 276.511719 212.617188 276.511719 212.621094 276.515625 212.621094 C 276.519531 212.621094 276.519531 212.625 276.519531 212.625 C 276.523438 212.628906 276.527344 212.628906 276.53125 212.628906 C 276.53125 212.632812 276.535156 212.632812 276.535156 212.632812 C 276.539062 212.636719 276.539062 212.636719 276.542969 212.640625 C 276.542969 212.640625 276.546875 212.640625 276.546875 212.644531 C 276.550781 212.644531 276.554688 212.648438 276.554688 212.652344 C 276.558594 212.652344 276.558594 212.652344 276.558594 212.652344 C 276.5625 212.65625 276.566406 212.660156 276.570312 212.660156 C 276.570312 212.660156 276.574219 212.660156 276.574219 212.664062 C 276.582031 212.667969 276.589844 212.675781 276.601562 212.683594 C 276.605469 212.6875 276.609375 212.691406 276.613281 212.691406 C 276.613281 212.691406 276.617188 212.695312 276.617188 212.695312 C 276.621094 212.699219 276.621094 212.699219 276.625 212.703125 C 276.628906 212.703125 276.628906 212.703125 276.628906 212.707031 C 276.632812 212.707031 276.636719 212.710938 276.636719 212.710938 C 276.640625 212.714844 276.640625 212.714844 276.640625 212.714844 C 276.644531 212.71875 276.648438 212.722656 276.652344 212.722656 C 276.652344 212.722656 276.65625 212.726562 276.65625 212.726562 C 276.660156 212.726562 276.660156 212.730469 276.664062 212.734375 C 276.667969 212.734375 276.667969 212.734375 276.667969 212.738281 C 276.671875 212.738281 276.675781 212.742188 276.679688 212.746094 C 276.6875 212.75 276.691406 212.753906 276.695312 212.757812 C 276.699219 212.761719 276.703125 212.765625 276.707031 212.769531 C 276.707031 212.769531 276.710938 212.769531 276.710938 212.773438 C 276.714844 212.773438 276.71875 212.777344 276.71875 212.777344 C 276.722656 212.78125 276.722656 212.78125 276.726562 212.78125 C 276.726562 212.785156 276.730469 212.785156 276.734375 212.789062 C 276.734375 212.789062 276.734375 212.792969 276.738281 212.792969 C 276.742188 212.792969 276.742188 212.796875 276.746094 212.800781 C 276.746094 212.800781 276.75 212.800781 276.75 212.804688 C 276.753906 212.804688 276.753906 212.808594 276.757812 212.808594 C 276.761719 212.8125 276.761719 212.8125 276.761719 212.8125 C 276.765625 212.816406 276.769531 212.820312 276.769531 212.820312 C 276.773438 212.820312 276.773438 212.820312 276.773438 212.824219 C 276.777344 212.824219 276.785156 212.828125 276.789062 212.832031 C 276.792969 212.835938 276.796875 212.839844 276.800781 212.84375 C 276.800781 212.84375 276.800781 212.84375 276.804688 212.847656 C 276.804688 212.851562 276.808594 212.851562 276.8125 212.851562 C 276.8125 212.855469 276.8125 212.855469 276.816406 212.855469 C 276.816406 212.859375 276.820312 212.859375 276.824219 212.863281 C 276.824219 212.863281 276.828125 212.867188 276.828125 212.867188 C 276.832031 212.867188 276.832031 212.871094 276.835938 212.871094 C 276.835938 212.875 276.839844 212.875 276.839844 212.875 C 276.84375 212.878906 276.84375 212.878906 276.847656 212.882812 C 276.851562 212.882812 276.851562 212.882812 276.851562 212.886719 C 276.855469 212.886719 276.859375 212.890625 276.863281 212.890625 C 276.863281 212.894531 276.863281 212.894531 276.863281 212.894531 C 276.867188 212.898438 276.871094 212.902344 276.875 212.902344 C 276.875 212.902344 276.875 212.902344 276.878906 212.90625 C 276.882812 212.910156 276.886719 212.910156 276.890625 212.914062 C 276.890625 212.914062 276.890625 212.917969 276.894531 212.917969 C 276.894531 212.917969 276.898438 212.921875 276.902344 212.921875 C 276.902344 212.925781 276.90625 212.925781 276.90625 212.925781 C 276.90625 212.929688 276.910156 212.929688 276.914062 212.933594 C 276.914062 212.933594 276.917969 212.9375 276.917969 212.9375 C 276.921875 212.9375 276.925781 212.941406 276.925781 212.945312 C 276.929688 212.945312 276.929688 212.945312 276.929688 212.949219 C 276.933594 212.949219 276.933594 212.949219 276.9375 212.953125 C 276.9375 212.953125 276.941406 212.957031 276.941406 212.957031 C 276.945312 212.957031 276.949219 212.960938 276.949219 212.964844 C 276.953125 212.964844 276.953125 212.964844 276.953125 212.964844 C 276.957031 212.96875 276.960938 212.972656 276.964844 212.972656 C 276.964844 212.976562 276.964844 212.976562 276.964844 212.976562 C 276.96875 212.980469 276.972656 212.980469 276.976562 212.984375 C 276.980469 212.984375 276.980469 212.988281 276.980469 212.988281 C 276.984375 212.988281 276.988281 212.992188 276.988281 212.996094 C 276.992188 212.996094 276.992188 212.996094 276.992188 213 C 276.996094 213 277 213.003906 277 213.003906 C 277.003906 213.007812 277.003906 213.007812 277.003906 213.007812 C 277.007812 213.011719 277.011719 213.011719 277.011719 213.011719 C 277.015625 213.015625 277.015625 213.015625 277.015625 213.015625 C 277.019531 213.019531 277.023438 213.019531 277.023438 213.023438 C 277.023438 213.023438 277.027344 213.027344 277.027344 213.027344 C 277.03125 213.027344 277.03125 213.03125 277.035156 213.03125 C 277.035156 213.035156 277.039062 213.035156 277.039062 213.035156 C 277.042969 213.039062 277.046875 213.042969 277.046875 213.042969 C 277.050781 213.042969 277.050781 213.046875 277.050781 213.046875 C 277.054688 213.050781 277.058594 213.050781 277.0625 213.054688 C 277.0625 213.054688 277.066406 213.058594 277.066406 213.058594 C 277.070312 213.0625 277.070312 213.0625 277.074219 213.066406 C 277.078125 213.066406 277.078125 213.066406 277.078125 213.070312 C 277.082031 213.070312 277.085938 213.074219 277.085938 213.074219 C 277.089844 213.078125 277.089844 213.078125 277.089844 213.078125 C 277.09375 213.082031 277.097656 213.082031 277.097656 213.085938 C 277.101562 213.085938 277.101562 213.085938 277.105469 213.089844 C 277.105469 213.089844 277.109375 213.09375 277.113281 213.09375 C 277.113281 213.09375 277.117188 213.097656 277.117188 213.097656 C 277.117188 213.101562 277.121094 213.101562 277.125 213.105469 C 277.125 213.105469 277.125 213.109375 277.128906 213.109375 C 277.132812 213.109375 277.132812 213.113281 277.136719 213.113281 C 277.136719 213.117188 277.140625 213.117188 277.140625 213.117188 C 277.144531 213.121094 277.148438 213.125 277.152344 213.128906 C 277.15625 213.132812 277.160156 213.132812 277.164062 213.136719 C 277.164062 213.136719 277.167969 213.140625 277.167969 213.140625 C 277.171875 213.140625 277.171875 213.144531 277.175781 213.144531 C 277.175781 213.148438 277.179688 213.148438 277.179688 213.148438 C 277.183594 213.152344 277.1875 213.15625 277.1875 213.15625 C 277.1875 213.15625 277.191406 213.160156 277.195312 213.160156 C 277.195312 213.164062 277.199219 213.164062 277.199219 213.167969 C 277.203125 213.167969 277.203125 213.167969 277.207031 213.171875 C 277.207031 213.171875 277.210938 213.175781 277.210938 213.175781 C 277.214844 213.179688 277.214844 213.179688 277.21875 213.179688 C 277.21875 213.183594 277.222656 213.183594 277.222656 213.1875 C 277.226562 213.1875 277.226562 213.1875 277.226562 213.191406 C 277.230469 213.195312 277.234375 213.195312 277.238281 213.199219 C 277.238281 213.199219 277.238281 213.199219 277.238281 213.203125 C 277.242188 213.203125 277.246094 213.207031 277.25 213.210938 C 277.25 213.210938 277.253906 213.210938 277.253906 213.214844 C 277.257812 213.214844 277.261719 213.21875 277.261719 213.21875 C 277.265625 213.222656 277.265625 213.222656 277.269531 213.222656 C 277.269531 213.226562 277.273438 213.230469 277.277344 213.230469 C 277.277344 213.230469 277.28125 213.234375 277.28125 213.234375 C 277.28125 213.234375 277.285156 213.238281 277.285156 213.238281 C 277.289062 213.242188 277.289062 213.242188 277.292969 213.242188 C 277.292969 213.246094 277.296875 213.246094 277.300781 213.25 C 277.300781 213.25 277.304688 213.253906 277.304688 213.253906 C 277.304688 213.253906 277.308594 213.257812 277.3125 213.261719 C 277.3125 213.261719 277.316406 213.261719 277.316406 213.265625 C 277.316406 213.265625 277.320312 213.269531 277.324219 213.269531 C 277.324219 213.273438 277.328125 213.273438 277.328125 213.273438 C 277.332031 213.277344 277.335938 213.28125 277.339844 213.28125 C 277.339844 213.285156 277.339844 213.285156 277.34375 213.285156 C 277.34375 213.289062 277.347656 213.289062 277.351562 213.292969 C 277.351562 213.292969 277.351562 213.296875 277.355469 213.296875 C 277.355469 213.300781 277.359375 213.300781 277.363281 213.304688 C 277.363281 213.304688 277.363281 213.304688 277.367188 213.308594 C 277.367188 213.308594 277.371094 213.3125 277.375 213.3125 C 277.375 213.316406 277.378906 213.316406 277.378906 213.316406 C 277.378906 213.320312 277.382812 213.320312 277.386719 213.324219 C 277.386719 213.324219 277.390625 213.328125 277.390625 213.328125 C 277.394531 213.332031 277.394531 213.332031 277.398438 213.332031 C 277.398438 213.335938 277.402344 213.335938 277.402344 213.335938 C 277.40625 213.339844 277.40625 213.34375 277.410156 213.34375 C 277.410156 213.34375 277.414062 213.347656 277.414062 213.347656 C 277.421875 213.355469 277.429688 213.359375 277.4375 213.367188 C 277.441406 213.367188 277.441406 213.367188 277.441406 213.371094 C 277.445312 213.375 277.445312 213.375 277.449219 213.378906 C 277.453125 213.378906 277.453125 213.378906 277.453125 213.382812 C 277.457031 213.382812 277.460938 213.386719 277.460938 213.386719 C 277.464844 213.386719 277.464844 213.390625 277.46875 213.390625 C 277.46875 213.394531 277.472656 213.394531 277.472656 213.398438 C 277.476562 213.398438 277.476562 213.398438 277.476562 213.398438 C 277.480469 213.402344 277.484375 213.40625 277.484375 213.40625 C 277.488281 213.40625 277.488281 213.40625 277.492188 213.410156 C 277.492188 213.414062 277.496094 213.414062 277.5 213.417969 C 277.5 213.417969 277.5 213.417969 277.503906 213.417969 C 277.507812 213.421875 277.507812 213.425781 277.511719 213.429688 C 277.515625 213.433594 277.519531 213.4375 277.523438 213.4375 C 277.527344 213.441406 277.527344 213.441406 277.527344 213.441406 C 277.53125 213.445312 277.535156 213.445312 277.535156 213.449219 C 277.539062 213.449219 277.539062 213.453125 277.539062 213.453125 C 277.542969 213.453125 277.546875 213.457031 277.546875 213.457031 C 277.546875 213.460938 277.550781 213.460938 277.550781 213.460938 C 277.554688 213.464844 277.558594 213.464844 277.558594 213.46875 C 277.5625 213.46875 277.5625 213.46875 277.566406 213.472656 C 277.566406 213.472656 277.570312 213.476562 277.570312 213.476562 C 277.574219 213.480469 277.574219 213.480469 277.574219 213.484375 C 277.578125 213.484375 277.582031 213.488281 277.582031 213.488281 C 277.585938 213.492188 277.585938 213.492188 277.589844 213.492188 C 277.589844 213.496094 277.59375 213.496094 277.59375 213.5 C 277.597656 213.5 277.597656 213.5 277.597656 213.503906 C 277.601562 213.507812 277.605469 213.507812 277.609375 213.511719 C 277.609375 213.515625 277.613281 213.515625 277.613281 213.515625 C 277.617188 213.519531 277.621094 213.519531 277.621094 213.523438 C 277.625 213.523438 277.625 213.527344 277.628906 213.527344 C 277.628906 213.527344 277.632812 213.53125 277.632812 213.53125 C 277.636719 213.535156 277.636719 213.535156 277.636719 213.535156 C 277.640625 213.539062 277.644531 213.542969 277.644531 213.542969 C 277.648438 213.542969 277.648438 213.546875 277.648438 213.546875 C 277.652344 213.546875 277.65625 213.550781 277.65625 213.550781 C 277.65625 213.554688 277.660156 213.554688 277.660156 213.554688 C 277.664062 213.558594 277.667969 213.558594 277.667969 213.5625 C 277.667969 213.5625 277.671875 213.566406 277.671875 213.566406 C 277.675781 213.570312 277.675781 213.570312 277.679688 213.574219 C 277.683594 213.574219 277.683594 213.574219 277.6875 213.578125 C 277.691406 213.582031 277.691406 213.582031 277.695312 213.585938 C 277.699219 213.585938 277.699219 213.585938 277.699219 213.589844 C 277.703125 213.589844 277.707031 213.59375 277.707031 213.59375 C 277.710938 213.597656 277.710938 213.597656 277.710938 213.597656 C 277.714844 213.601562 277.71875 213.601562 277.71875 213.605469 C 277.722656 213.609375 277.722656 213.609375 277.726562 213.609375 C 277.726562 213.613281 277.730469 213.613281 277.730469 213.617188 C 277.734375 213.617188 277.734375 213.617188 277.734375 213.621094 C 277.738281 213.621094 277.742188 213.625 277.742188 213.625 C 277.742188 213.625 277.746094 213.628906 277.746094 213.628906 C 277.75 213.632812 277.753906 213.632812 277.753906 213.636719 C 277.757812 213.636719 277.757812 213.636719 277.761719 213.640625 C 277.761719 213.644531 277.765625 213.644531 277.765625 213.648438 C 277.769531 213.648438 277.769531 213.648438 277.773438 213.652344 C 277.773438 213.652344 277.777344 213.65625 277.78125 213.65625 C 277.78125 213.660156 277.78125 213.660156 277.785156 213.664062 C 277.789062 213.664062 277.792969 213.667969 277.792969 213.671875 C 277.796875 213.671875 277.796875 213.671875 277.796875 213.675781 C 277.800781 213.679688 277.800781 213.679688 277.804688 213.683594 C 277.808594 213.683594 277.808594 213.683594 277.808594 213.683594 C 277.8125 213.6875 277.816406 213.691406 277.816406 213.691406 C 277.816406 213.691406 277.820312 213.695312 277.820312 213.695312 C 277.824219 213.699219 277.828125 213.699219 277.828125 213.703125 C 277.828125 213.703125 277.832031 213.707031 277.832031 213.707031 C 277.835938 213.707031 277.839844 213.710938 277.839844 213.714844 C 277.84375 213.714844 277.84375 213.714844 277.84375 213.71875 C 277.847656 213.71875 277.851562 213.722656 277.851562 213.722656 C 277.855469 213.722656 277.855469 213.726562 277.855469 213.726562 C 277.859375 213.730469 277.863281 213.730469 277.863281 213.734375 C 277.867188 213.734375 277.867188 213.738281 277.867188 213.738281 C 277.871094 213.742188 277.875 213.746094 277.878906 213.75 C 277.878906 213.75 277.882812 213.75 277.882812 213.75 C 277.886719 213.753906 277.886719 213.753906 277.890625 213.757812 C 277.890625 213.757812 277.894531 213.761719 277.894531 213.761719 C 277.898438 213.761719 277.898438 213.765625 277.902344 213.769531 C 277.902344 213.769531 277.90625 213.769531 277.90625 213.773438 C 277.910156 213.773438 277.910156 213.777344 277.914062 213.777344 C 277.914062 213.78125 277.917969 213.78125 277.917969 213.78125 C 277.921875 213.785156 277.921875 213.785156 277.925781 213.789062 C 277.925781 213.789062 277.929688 213.792969 277.929688 213.792969 C 277.929688 213.796875 277.933594 213.796875 277.9375 213.800781 C 277.9375 213.800781 277.9375 213.800781 277.941406 213.804688 C 277.945312 213.804688 277.945312 213.808594 277.949219 213.808594 C 277.949219 213.8125 277.953125 213.8125 277.953125 213.8125 C 277.957031 213.816406 277.960938 213.820312 277.964844 213.824219 C 277.96875 213.828125 277.972656 213.828125 277.972656 213.832031 C 277.976562 213.832031 277.976562 213.835938 277.980469 213.835938 C 277.980469 213.839844 277.984375 213.839844 277.984375 213.84375 C 277.988281 213.84375 277.988281 213.847656 277.992188 213.847656 C 277.992188 213.847656 277.996094 213.851562 277.996094 213.851562 C 277.996094 213.855469 278 213.855469 278 213.855469 C 278.003906 213.859375 278.007812 213.863281 278.007812 213.863281 C 278.011719 213.863281 278.011719 213.867188 278.015625 213.867188 C 278.015625 213.871094 278.019531 213.871094 278.019531 213.875 C 278.023438 213.875 278.023438 213.878906 278.023438 213.878906 C 278.027344 213.882812 278.027344 213.882812 278.03125 213.886719 C 278.03125 213.886719 278.035156 213.886719 278.035156 213.890625 C 278.042969 213.898438 278.050781 213.902344 278.058594 213.910156 C 278.058594 213.910156 278.0625 213.914062 278.0625 213.914062 C 278.0625 213.914062 278.066406 213.917969 278.070312 213.921875 C 278.070312 213.921875 278.074219 213.921875 278.074219 213.925781 C 278.074219 213.925781 278.078125 213.929688 278.082031 213.929688 C 278.082031 213.933594 278.082031 213.933594 278.085938 213.933594 C 278.085938 213.9375 278.089844 213.941406 278.09375 213.941406 C 278.09375 213.941406 278.09375 213.945312 278.097656 213.945312 C 278.097656 213.945312 278.101562 213.949219 278.105469 213.953125 C 278.105469 213.953125 278.105469 213.953125 278.109375 213.957031 C 278.113281 213.957031 278.113281 213.960938 278.117188 213.960938 C 278.117188 213.964844 278.117188 213.964844 278.121094 213.964844 C 278.121094 213.96875 278.125 213.972656 278.128906 213.976562 C 278.128906 213.976562 278.128906 213.976562 278.132812 213.976562 C 278.136719 213.980469 278.140625 213.984375 278.144531 213.988281 C 278.144531 213.988281 278.144531 213.988281 278.148438 213.988281 C 278.148438 213.992188 278.152344 213.996094 278.152344 213.996094 C 278.15625 214 278.15625 214 278.160156 214 C 278.160156 214.003906 278.164062 214.007812 278.164062 214.007812 C 278.167969 214.007812 278.167969 214.011719 278.171875 214.011719 C 278.171875 214.015625 278.175781 214.015625 278.175781 214.019531 C 278.179688 214.019531 278.179688 214.023438 278.183594 214.023438 C 278.183594 214.023438 278.1875 214.027344 278.1875 214.03125 C 278.1875 214.03125 278.191406 214.03125 278.191406 214.035156 C 278.195312 214.035156 278.199219 214.039062 278.199219 214.039062 C 278.199219 214.039062 278.203125 214.042969 278.203125 214.042969 C 278.207031 214.046875 278.210938 214.046875 278.210938 214.050781 C 278.214844 214.050781 278.214844 214.054688 278.214844 214.054688 C 278.21875 214.058594 278.222656 214.0625 278.226562 214.066406 C 278.226562 214.066406 278.230469 214.066406 278.230469 214.066406 C 278.234375 214.070312 278.234375 214.070312 278.238281 214.074219 C 278.238281 214.074219 278.242188 214.078125 278.242188 214.078125 C 278.246094 214.082031 278.246094 214.082031 278.25 214.085938 C 278.25 214.085938 278.253906 214.089844 278.253906 214.089844 C 278.257812 214.089844 278.257812 214.09375 278.261719 214.097656 C 278.261719 214.097656 278.265625 214.097656 278.265625 214.101562 C 278.269531 214.101562 278.269531 214.105469 278.273438 214.105469 C 278.273438 214.105469 278.277344 214.109375 278.277344 214.109375 C 278.277344 214.113281 278.28125 214.113281 278.28125 214.117188 C 278.285156 214.117188 278.285156 214.121094 278.289062 214.121094 C 278.289062 214.125 278.292969 214.125 278.292969 214.128906 C 278.296875 214.128906 278.296875 214.128906 278.296875 214.132812 C 278.300781 214.136719 278.304688 214.136719 278.304688 214.140625 C 278.308594 214.140625 278.3125 214.144531 278.3125 214.144531 C 278.316406 214.148438 278.316406 214.148438 278.320312 214.152344 C 278.320312 214.152344 278.324219 214.15625 278.324219 214.15625 C 278.328125 214.160156 278.328125 214.160156 278.332031 214.164062 C 278.332031 214.164062 278.335938 214.164062 278.335938 214.167969 C 278.339844 214.167969 278.339844 214.171875 278.34375 214.171875 C 278.34375 214.175781 278.347656 214.175781 278.347656 214.175781 C 278.347656 214.179688 278.351562 214.179688 278.351562 214.183594 C 278.355469 214.183594 278.355469 214.1875 278.359375 214.1875 C 278.359375 214.191406 278.363281 214.191406 278.363281 214.191406 C 278.367188 214.195312 278.367188 214.195312 278.371094 214.199219 C 278.371094 214.199219 278.375 214.199219 278.378906 214.203125 C 278.378906 214.203125 278.378906 214.207031 278.382812 214.207031 C 278.382812 214.210938 278.386719 214.210938 278.390625 214.214844 C 278.390625 214.214844 278.390625 214.21875 278.394531 214.21875 C 278.398438 214.222656 278.402344 214.226562 278.402344 214.226562 C 278.40625 214.230469 278.40625 214.230469 278.410156 214.234375 C 278.410156 214.234375 278.410156 214.234375 278.414062 214.238281 C 278.414062 214.238281 278.417969 214.242188 278.417969 214.242188 C 278.421875 214.246094 278.421875 214.246094 278.425781 214.25 C 278.425781 214.25 278.429688 214.253906 278.429688 214.253906 C 278.433594 214.253906 278.433594 214.257812 278.4375 214.257812 C 278.4375 214.261719 278.441406 214.261719 278.441406 214.265625 C 278.441406 214.265625 278.445312 214.265625 278.445312 214.269531 C 278.449219 214.269531 278.449219 214.273438 278.453125 214.273438 C 278.453125 214.277344 278.457031 214.277344 278.457031 214.28125 C 278.460938 214.28125 278.460938 214.285156 278.460938 214.285156 C 278.464844 214.289062 278.464844 214.289062 278.46875 214.292969 C 278.472656 214.292969 278.472656 214.296875 278.472656 214.296875 C 278.476562 214.300781 278.480469 214.304688 278.484375 214.308594 C 278.484375 214.308594 278.488281 214.308594 278.488281 214.3125 C 278.492188 214.3125 278.492188 214.316406 278.496094 214.316406 C 278.496094 214.320312 278.496094 214.320312 278.5 214.320312 C 278.5 214.324219 278.503906 214.324219 278.507812 214.328125 C 278.507812 214.328125 278.507812 214.332031 278.507812 214.332031 C 278.511719 214.332031 278.515625 214.335938 278.515625 214.339844 C 278.519531 214.339844 278.519531 214.339844 278.519531 214.34375 C 278.523438 214.34375 278.527344 214.347656 278.527344 214.351562 C 278.527344 214.351562 278.53125 214.351562 278.53125 214.355469 C 278.535156 214.355469 278.539062 214.359375 278.539062 214.359375 C 278.539062 214.363281 278.542969 214.363281 278.542969 214.363281 C 278.546875 214.367188 278.546875 214.367188 278.550781 214.371094 C 278.550781 214.371094 278.554688 214.375 278.554688 214.375 C 278.558594 214.378906 278.5625 214.382812 278.566406 214.386719 C 278.566406 214.386719 278.566406 214.386719 278.566406 214.390625 C 278.570312 214.390625 278.574219 214.394531 278.574219 214.394531 C 278.578125 214.398438 278.578125 214.398438 278.578125 214.398438 C 278.582031 214.402344 278.585938 214.40625 278.585938 214.40625 C 278.589844 214.410156 278.589844 214.410156 278.589844 214.410156 C 278.59375 214.414062 278.59375 214.414062 278.597656 214.417969 C 278.601562 214.417969 278.601562 214.421875 278.601562 214.421875 C 278.605469 214.425781 278.605469 214.425781 278.609375 214.425781 C 278.609375 214.429688 278.613281 214.429688 278.613281 214.433594 C 278.617188 214.433594 278.617188 214.4375 278.621094 214.4375 C 278.621094 214.441406 278.625 214.441406 278.625 214.441406 C 278.628906 214.445312 278.628906 214.445312 278.632812 214.449219 C 278.632812 214.453125 278.636719 214.453125 278.636719 214.453125 C 278.644531 214.460938 278.648438 214.46875 278.660156 214.476562 C 278.660156 214.476562 278.660156 214.476562 278.664062 214.480469 C 278.664062 214.480469 278.667969 214.484375 278.667969 214.488281 C 278.671875 214.488281 278.671875 214.488281 278.671875 214.492188 C 278.675781 214.492188 278.679688 214.496094 278.679688 214.496094 C 278.683594 214.5 278.683594 214.5 278.683594 214.5 C 278.6875 214.503906 278.6875 214.503906 278.691406 214.507812 C 278.691406 214.507812 278.695312 214.511719 278.695312 214.511719 C 278.699219 214.515625 278.699219 214.515625 278.703125 214.519531 C 278.703125 214.519531 278.703125 214.519531 278.707031 214.523438 C 278.707031 214.523438 278.710938 214.527344 278.710938 214.527344 C 278.714844 214.53125 278.714844 214.53125 278.71875 214.535156 C 278.71875 214.535156 278.722656 214.539062 278.722656 214.539062 C 278.726562 214.542969 278.730469 214.546875 278.730469 214.546875 C 278.734375 214.550781 278.734375 214.550781 278.738281 214.554688 C 278.738281 214.554688 278.742188 214.558594 278.742188 214.558594 C 278.746094 214.5625 278.746094 214.5625 278.75 214.566406 C 278.75 214.566406 278.75 214.566406 278.753906 214.570312 C 278.753906 214.570312 278.757812 214.574219 278.761719 214.574219 C 278.761719 214.578125 278.761719 214.578125 278.765625 214.582031 C 278.765625 214.582031 278.769531 214.585938 278.769531 214.585938 C 278.773438 214.585938 278.773438 214.589844 278.773438 214.589844 C 278.777344 214.59375 278.777344 214.59375 278.78125 214.597656 C 278.78125 214.597656 278.785156 214.597656 278.785156 214.601562 C 278.789062 214.601562 278.789062 214.605469 278.792969 214.609375 C 278.792969 214.609375 278.796875 214.609375 278.796875 214.613281 C 278.800781 214.617188 278.800781 214.617188 278.804688 214.621094 C 278.804688 214.621094 278.804688 214.621094 278.808594 214.621094 C 278.8125 214.625 278.8125 214.628906 278.816406 214.632812 C 278.820312 214.632812 278.820312 214.636719 278.820312 214.636719 C 278.824219 214.640625 278.824219 214.640625 278.828125 214.644531 C 278.828125 214.644531 278.832031 214.644531 278.832031 214.648438 C 278.832031 214.648438 278.835938 214.652344 278.839844 214.65625 C 278.839844 214.65625 278.84375 214.65625 278.84375 214.660156 C 278.847656 214.660156 278.847656 214.664062 278.851562 214.667969 C 278.851562 214.667969 278.855469 214.667969 278.855469 214.671875 C 278.859375 214.671875 278.859375 214.675781 278.863281 214.675781 C 278.863281 214.679688 278.863281 214.679688 278.867188 214.683594 C 278.867188 214.683594 278.871094 214.6875 278.871094 214.6875 C 278.875 214.6875 278.875 214.691406 278.878906 214.691406 C 278.878906 214.695312 278.882812 214.695312 278.882812 214.699219 C 278.886719 214.703125 278.886719 214.703125 278.890625 214.703125 C 278.894531 214.707031 278.894531 214.710938 278.898438 214.714844 C 278.898438 214.714844 278.902344 214.71875 278.902344 214.71875 C 278.90625 214.71875 278.90625 214.722656 278.910156 214.726562 C 278.910156 214.726562 278.914062 214.726562 278.914062 214.730469 C 278.917969 214.730469 278.917969 214.734375 278.921875 214.734375 C 278.921875 214.738281 278.921875 214.738281 278.925781 214.742188 C 278.925781 214.742188 278.929688 214.746094 278.929688 214.746094 C 278.933594 214.75 278.933594 214.75 278.933594 214.75 C 278.9375 214.753906 278.9375 214.753906 278.941406 214.757812 C 278.941406 214.757812 278.945312 214.757812 278.945312 214.761719 C 278.949219 214.761719 278.949219 214.765625 278.953125 214.765625 C 278.953125 214.769531 278.957031 214.769531 278.957031 214.773438 C 278.957031 214.773438 278.960938 214.777344 278.960938 214.777344 C 278.960938 214.777344 278.964844 214.78125 278.964844 214.78125 C 278.96875 214.785156 278.972656 214.785156 278.972656 214.789062 C 278.976562 214.792969 278.976562 214.792969 278.980469 214.792969 C 278.980469 214.796875 278.984375 214.800781 278.988281 214.804688 C 278.988281 214.804688 278.992188 214.808594 278.992188 214.808594 C 278.992188 214.808594 278.996094 214.8125 279 214.8125 C 279 214.816406 279 214.816406 279.003906 214.820312 C 279.003906 214.820312 279.007812 214.824219 279.007812 214.824219 C 279.011719 214.824219 279.011719 214.828125 279.015625 214.828125 C 279.015625 214.832031 279.019531 214.832031 279.019531 214.835938 C 279.023438 214.835938 279.023438 214.839844 279.023438 214.839844 C 279.027344 214.84375 279.027344 214.84375 279.03125 214.84375 C 279.03125 214.847656 279.03125 214.847656 279.035156 214.851562 C 279.035156 214.851562 279.039062 214.855469 279.039062 214.855469 C 279.042969 214.859375 279.042969 214.859375 279.046875 214.863281 C 279.046875 214.863281 279.050781 214.867188 279.050781 214.867188 C 279.054688 214.871094 279.054688 214.871094 279.054688 214.871094 C 279.058594 214.875 279.0625 214.878906 279.066406 214.882812 C 279.070312 214.882812 279.070312 214.886719 279.070312 214.886719 C 279.074219 214.886719 279.078125 214.890625 279.078125 214.894531 C 279.078125 214.894531 279.082031 214.898438 279.082031 214.898438 C 279.085938 214.898438 279.085938 214.902344 279.085938 214.902344 C 279.089844 214.90625 279.089844 214.90625 279.09375 214.910156 C 279.09375 214.910156 279.097656 214.914062 279.097656 214.914062 C 279.101562 214.917969 279.101562 214.917969 279.105469 214.921875 C 279.105469 214.921875 279.109375 214.925781 279.109375 214.925781 C 279.113281 214.929688 279.113281 214.929688 279.113281 214.933594 C 279.117188 214.933594 279.117188 214.9375 279.121094 214.9375 C 279.121094 214.941406 279.121094 214.941406 279.125 214.941406 C 279.128906 214.945312 279.128906 214.945312 279.132812 214.949219 C 279.132812 214.949219 279.132812 214.953125 279.136719 214.953125 C 279.140625 214.957031 279.140625 214.960938 279.144531 214.964844 C 279.148438 214.964844 279.148438 214.964844 279.148438 214.964844 C 279.152344 214.96875 279.152344 214.972656 279.15625 214.972656 C 279.15625 214.976562 279.160156 214.976562 279.160156 214.980469 C 279.164062 214.980469 279.164062 214.984375 279.167969 214.984375 C 279.167969 214.988281 279.171875 214.988281 279.171875 214.992188 C 279.171875 214.992188 279.175781 214.996094 279.175781 214.996094 C 279.179688 215 279.179688 215 279.183594 215.003906 C 279.183594 215.003906 279.183594 215.007812 279.1875 215.007812 C 279.1875 215.011719 279.1875 215.011719 279.191406 215.015625 C 279.195312 215.015625 279.195312 215.019531 279.195312 215.019531 C 279.199219 215.023438 279.199219 215.023438 279.203125 215.027344 C 279.203125 215.027344 279.207031 215.03125 279.207031 215.03125 C 279.210938 215.035156 279.210938 215.035156 279.210938 215.035156 C 279.214844 215.039062 279.21875 215.039062 279.21875 215.042969 C 279.222656 215.046875 279.222656 215.046875 279.226562 215.050781 C 279.226562 215.054688 279.230469 215.054688 279.234375 215.058594 C 279.234375 215.058594 279.234375 215.0625 279.238281 215.0625 C 279.238281 215.066406 279.242188 215.066406 279.242188 215.070312 C 279.246094 215.070312 279.246094 215.070312 279.25 215.074219 C 279.25 215.074219 279.25 215.078125 279.253906 215.078125 C 279.253906 215.082031 279.257812 215.082031 279.257812 215.085938 C 279.261719 215.085938 279.261719 215.089844 279.265625 215.089844 C 279.265625 215.09375 279.269531 215.09375 279.269531 215.097656 C 279.273438 215.097656 279.273438 215.101562 279.273438 215.101562 C 279.277344 215.101562 279.277344 215.105469 279.28125 215.105469 C 279.28125 215.109375 279.28125 215.109375 279.285156 215.113281 C 279.285156 215.113281 279.289062 215.117188 279.289062 215.117188 C 279.292969 215.121094 279.292969 215.125 279.296875 215.125 C 279.296875 215.128906 279.300781 215.128906 279.300781 215.128906 C 279.304688 215.132812 279.308594 215.136719 279.3125 215.140625 C 279.3125 215.140625 279.3125 215.140625 279.316406 215.144531 C 279.316406 215.148438 279.316406 215.148438 279.320312 215.152344 C 279.324219 215.152344 279.324219 215.15625 279.324219 215.15625 C 279.328125 215.15625 279.328125 215.160156 279.332031 215.160156 C 279.332031 215.164062 279.335938 215.164062 279.335938 215.167969 C 279.339844 215.167969 279.339844 215.171875 279.34375 215.171875 C 279.34375 215.175781 279.34375 215.175781 279.347656 215.179688 C 279.347656 215.179688 279.351562 215.183594 279.351562 215.183594 C 279.351562 215.1875 279.355469 215.1875 279.355469 215.191406 C 279.359375 215.191406 279.359375 215.195312 279.363281 215.195312 C 279.363281 215.199219 279.367188 215.199219 279.367188 215.199219 C 279.371094 215.203125 279.371094 215.203125 279.371094 215.207031 C 279.375 215.210938 279.375 215.210938 279.375 215.210938 C 279.378906 215.214844 279.382812 215.21875 279.386719 215.222656 C 279.386719 215.222656 279.390625 215.226562 279.390625 215.226562 C 279.394531 215.230469 279.394531 215.230469 279.398438 215.234375 C 279.398438 215.234375 279.398438 215.234375 279.402344 215.238281 C 279.402344 215.238281 279.40625 215.242188 279.40625 215.246094 C 279.410156 215.246094 279.410156 215.246094 279.410156 215.25 C 279.414062 215.25 279.414062 215.253906 279.417969 215.257812 C 279.417969 215.257812 279.421875 215.261719 279.421875 215.261719 C 279.425781 215.261719 279.425781 215.265625 279.429688 215.265625 C 279.429688 215.269531 279.429688 215.269531 279.433594 215.269531 C 279.433594 215.273438 279.4375 215.273438 279.4375 215.277344 C 279.441406 215.277344 279.441406 215.28125 279.441406 215.28125 C 279.445312 215.285156 279.449219 215.289062 279.449219 215.289062 C 279.449219 215.289062 279.453125 215.292969 279.453125 215.292969 C 279.457031 215.296875 279.460938 215.300781 279.464844 215.304688 C 279.464844 215.304688 279.464844 215.304688 279.46875 215.308594 C 279.46875 215.308594 279.472656 215.3125 279.476562 215.316406 C 279.476562 215.316406 279.476562 215.320312 279.476562 215.320312 C 279.480469 215.324219 279.484375 215.324219 279.484375 215.328125 C 279.488281 215.328125 279.488281 215.328125 279.488281 215.332031 C 279.492188 215.332031 279.496094 215.335938 279.496094 215.339844 C 279.496094 215.339844 279.5 215.339844 279.5 215.34375 C 279.503906 215.34375 279.503906 215.347656 279.507812 215.351562 C 279.507812 215.351562 279.507812 215.351562 279.507812 215.355469 C 279.511719 215.355469 279.515625 215.359375 279.515625 215.359375 C 279.519531 215.363281 279.519531 215.363281 279.519531 215.367188 C 279.523438 215.367188 279.523438 215.371094 279.527344 215.375 C 279.527344 215.375 279.53125 215.375 279.53125 215.378906 C 279.535156 215.378906 279.535156 215.382812 279.539062 215.386719 C 279.539062 215.386719 279.539062 215.390625 279.542969 215.390625 C 279.546875 215.394531 279.546875 215.394531 279.550781 215.398438 C 279.550781 215.402344 279.554688 215.402344 279.554688 215.402344 C 279.558594 215.40625 279.558594 215.40625 279.5625 215.410156 C 279.5625 215.414062 279.5625 215.414062 279.566406 215.414062 C 279.566406 215.417969 279.570312 215.421875 279.570312 215.421875 C 279.570312 215.421875 279.574219 215.425781 279.574219 215.425781 C 279.578125 215.429688 279.578125 215.429688 279.582031 215.433594 C 279.582031 215.433594 279.585938 215.4375 279.585938 215.4375 C 279.589844 215.441406 279.589844 215.441406 279.59375 215.445312 C 279.59375 215.445312 279.59375 215.449219 279.597656 215.449219 C 279.597656 215.453125 279.601562 215.453125 279.601562 215.457031 C 279.601562 215.457031 279.605469 215.460938 279.605469 215.460938 C 279.609375 215.464844 279.609375 215.464844 279.613281 215.46875 C 279.613281 215.46875 279.617188 215.472656 279.617188 215.472656 C 279.621094 215.476562 279.625 215.480469 279.625 215.484375 C 279.628906 215.484375 279.628906 215.488281 279.628906 215.488281 C 279.632812 215.492188 279.632812 215.492188 279.636719 215.496094 C 279.636719 215.496094 279.640625 215.5 279.640625 215.5 C 279.644531 215.5 279.644531 215.503906 279.648438 215.507812 C 279.648438 215.507812 279.648438 215.507812 279.652344 215.511719 C 279.652344 215.515625 279.65625 215.515625 279.65625 215.519531 C 279.660156 215.519531 279.660156 215.519531 279.660156 215.523438 C 279.664062 215.523438 279.664062 215.527344 279.667969 215.527344 C 279.667969 215.53125 279.667969 215.53125 279.671875 215.535156 C 279.671875 215.535156 279.675781 215.539062 279.675781 215.539062 C 279.679688 215.542969 279.679688 215.542969 279.683594 215.546875 C 279.683594 215.546875 279.683594 215.550781 279.6875 215.550781 C 279.691406 215.554688 279.691406 215.554688 279.691406 215.554688 C 279.695312 215.558594 279.699219 215.5625 279.699219 215.5625 C 279.699219 215.566406 279.703125 215.570312 279.707031 215.570312 C 279.707031 215.574219 279.710938 215.574219 279.710938 215.578125 C 279.714844 215.578125 279.714844 215.582031 279.71875 215.582031 C 279.71875 215.585938 279.722656 215.585938 279.722656 215.589844 C 279.726562 215.589844 279.726562 215.59375 279.726562 215.59375 C 279.730469 215.597656 279.730469 215.597656 279.730469 215.601562 C 279.734375 215.601562 279.734375 215.605469 279.738281 215.605469 C 279.738281 215.609375 279.742188 215.609375 279.742188 215.613281 C 279.742188 215.613281 279.746094 215.617188 279.746094 215.617188 C 279.75 215.621094 279.75 215.621094 279.75 215.625 C 279.753906 215.625 279.753906 215.628906 279.757812 215.628906 C 279.757812 215.632812 279.757812 215.632812 279.761719 215.636719 C 279.765625 215.636719 279.765625 215.636719 279.765625 215.640625 C 279.769531 215.644531 279.769531 215.644531 279.773438 215.648438 C 279.773438 215.648438 279.777344 215.652344 279.78125 215.65625 C 279.785156 215.660156 279.785156 215.660156 279.785156 215.660156 C 279.789062 215.664062 279.789062 215.664062 279.792969 215.667969 C 279.792969 215.667969 279.796875 215.671875 279.796875 215.675781 C 279.796875 215.675781 279.800781 215.679688 279.800781 215.679688 C 279.804688 215.683594 279.804688 215.683594 279.804688 215.683594 C 279.808594 215.6875 279.808594 215.6875 279.8125 215.691406 C 279.8125 215.691406 279.816406 215.695312 279.816406 215.695312 C 279.820312 215.699219 279.820312 215.699219 279.820312 215.703125 C 279.824219 215.703125 279.824219 215.707031 279.828125 215.707031 C 279.828125 215.710938 279.828125 215.710938 279.832031 215.714844 C 279.832031 215.714844 279.835938 215.714844 279.835938 215.71875 C 279.835938 215.71875 279.839844 215.722656 279.839844 215.722656 C 279.84375 215.726562 279.84375 215.726562 279.84375 215.730469 C 279.847656 215.734375 279.851562 215.738281 279.855469 215.742188 C 279.859375 215.742188 279.859375 215.746094 279.859375 215.746094 C 279.863281 215.746094 279.863281 215.75 279.867188 215.75 C 279.867188 215.753906 279.871094 215.757812 279.871094 215.757812 C 279.871094 215.757812 279.875 215.761719 279.875 215.761719 C 279.878906 215.765625 279.878906 215.765625 279.882812 215.769531 C 279.882812 215.769531 279.882812 215.773438 279.886719 215.773438 C 279.886719 215.777344 279.890625 215.777344 279.890625 215.78125 C 279.894531 215.78125 279.894531 215.785156 279.894531 215.785156 C 279.898438 215.789062 279.898438 215.789062 279.902344 215.792969 C 279.902344 215.792969 279.902344 215.796875 279.90625 215.796875 C 279.90625 215.800781 279.910156 215.800781 279.910156 215.804688 C 279.910156 215.804688 279.914062 215.808594 279.914062 215.808594 C 279.917969 215.8125 279.917969 215.8125 279.921875 215.816406 C 279.921875 215.816406 279.921875 215.816406 279.925781 215.820312 C 279.929688 215.824219 279.929688 215.828125 279.933594 215.832031 C 279.9375 215.832031 279.9375 215.835938 279.9375 215.835938 C 279.941406 215.839844 279.941406 215.839844 279.945312 215.84375 C 279.945312 215.84375 279.945312 215.847656 279.949219 215.847656 C 279.949219 215.851562 279.953125 215.851562 279.953125 215.855469 C 279.957031 215.855469 279.957031 215.859375 279.957031 215.859375 C 279.960938 215.863281 279.960938 215.863281 279.960938 215.867188 C 279.964844 215.867188 279.964844 215.871094 279.96875 215.871094 C 279.96875 215.875 279.972656 215.875 279.972656 215.878906 C 279.972656 215.878906 279.976562 215.882812 279.976562 215.882812 C 279.980469 215.882812 279.980469 215.886719 279.984375 215.890625 C 279.984375 215.890625 279.988281 215.890625 279.988281 215.894531 C 279.992188 215.898438 279.992188 215.898438 279.992188 215.902344 C 279.996094 215.902344 279.996094 215.902344 279.996094 215.90625 C 280 215.90625 280.003906 215.910156 280.003906 215.914062 C 280.007812 215.914062 280.007812 215.917969 280.011719 215.917969 C 280.011719 215.921875 280.015625 215.925781 280.015625 215.929688 C 280.019531 215.929688 280.019531 215.929688 280.019531 215.933594 C 280.023438 215.933594 280.023438 215.9375 280.027344 215.941406 C 280.027344 215.941406 280.027344 215.941406 280.03125 215.945312 C 280.03125 215.945312 280.035156 215.949219 280.035156 215.953125 C 280.039062 215.953125 280.039062 215.953125 280.039062 215.957031 C 280.042969 215.957031 280.042969 215.960938 280.046875 215.964844 C 280.046875 215.964844 280.050781 215.964844 280.050781 215.96875 C 280.050781 215.96875 280.054688 215.972656 280.054688 215.976562 C 280.058594 215.976562 280.058594 215.976562 280.058594 215.980469 C 280.0625 215.980469 280.0625 215.984375 280.066406 215.988281 C 280.066406 215.988281 280.070312 215.988281 280.070312 215.992188 C 280.074219 215.992188 280.074219 215.996094 280.078125 216 C 280.078125 216 280.082031 216.003906 280.082031 216.003906 C 280.085938 216.007812 280.085938 216.011719 280.089844 216.015625 C 280.089844 216.015625 280.09375 216.015625 280.09375 216.019531 C 280.09375 216.019531 280.097656 216.023438 280.097656 216.027344 C 280.101562 216.027344 280.101562 216.027344 280.101562 216.03125 C 280.105469 216.03125 280.105469 216.035156 280.109375 216.035156 C 280.109375 216.039062 280.113281 216.039062 280.113281 216.042969 C 280.117188 216.042969 280.117188 216.046875 280.117188 216.046875 C 280.121094 216.050781 280.121094 216.050781 280.121094 216.054688 C 280.125 216.054688 280.125 216.058594 280.128906 216.058594 C 280.128906 216.0625 280.132812 216.0625 280.132812 216.066406 C 280.132812 216.066406 280.136719 216.070312 280.136719 216.070312 C 280.140625 216.074219 280.140625 216.074219 280.140625 216.078125 C 280.144531 216.078125 280.148438 216.082031 280.148438 216.085938 C 280.152344 216.085938 280.152344 216.085938 280.152344 216.089844 C 280.15625 216.09375 280.160156 216.097656 280.160156 216.101562 C 280.164062 216.101562 280.164062 216.101562 280.164062 216.101562 C 280.167969 216.105469 280.167969 216.109375 280.171875 216.109375 C 280.171875 216.113281 280.175781 216.113281 280.175781 216.117188 C 280.175781 216.117188 280.179688 216.121094 280.183594 216.125 C 280.183594 216.125 280.183594 216.125 280.183594 216.128906 C 280.1875 216.128906 280.191406 216.132812 280.191406 216.136719 C 280.191406 216.136719 280.191406 216.136719 280.195312 216.140625 C 280.195312 216.140625 280.199219 216.144531 280.199219 216.148438 C 280.203125 216.148438 280.203125 216.152344 280.203125 216.152344 C 280.207031 216.15625 280.210938 216.160156 280.210938 216.160156 C 280.210938 216.160156 280.214844 216.164062 280.214844 216.164062 C 280.21875 216.167969 280.21875 216.167969 280.222656 216.171875 C 280.222656 216.171875 280.222656 216.175781 280.226562 216.175781 C 280.230469 216.179688 280.230469 216.183594 280.234375 216.1875 C 280.234375 216.1875 280.234375 216.1875 280.238281 216.1875 C 280.238281 216.191406 280.242188 216.195312 280.246094 216.199219 C 280.246094 216.199219 280.246094 216.203125 280.246094 216.203125 C 280.25 216.203125 280.25 216.207031 280.253906 216.210938 C 280.253906 216.210938 280.257812 216.210938 280.257812 216.214844 C 280.257812 216.214844 280.261719 216.21875 280.261719 216.222656 C 280.265625 216.222656 280.265625 216.222656 280.265625 216.226562 C 280.269531 216.226562 280.269531 216.230469 280.273438 216.230469 C 280.273438 216.234375 280.277344 216.234375 280.277344 216.238281 C 280.277344 216.238281 280.28125 216.242188 280.28125 216.242188 C 280.28125 216.246094 280.285156 216.246094 280.285156 216.25 C 280.289062 216.25 280.289062 216.253906 280.292969 216.257812 C 280.292969 216.257812 280.292969 216.257812 280.296875 216.261719 C 280.300781 216.265625 280.300781 216.265625 280.304688 216.273438 C 280.308594 216.277344 280.3125 216.28125 280.316406 216.285156 C 280.316406 216.285156 280.316406 216.289062 280.320312 216.289062 C 280.320312 216.292969 280.324219 216.292969 280.324219 216.296875 C 280.328125 216.296875 280.328125 216.300781 280.328125 216.300781 C 280.332031 216.304688 280.332031 216.304688 280.335938 216.308594 C 280.335938 216.308594 280.335938 216.3125 280.339844 216.3125 C 280.339844 216.316406 280.34375 216.320312 280.34375 216.320312 C 280.34375 216.324219 280.347656 216.324219 280.347656 216.324219 C 280.347656 216.328125 280.351562 216.332031 280.351562 216.332031 C 280.355469 216.335938 280.355469 216.335938 280.355469 216.339844 C 280.359375 216.339844 280.359375 216.34375 280.363281 216.34375 C 280.363281 216.347656 280.367188 216.347656 280.367188 216.351562 C 280.371094 216.351562 280.371094 216.355469 280.375 216.359375 C 280.378906 216.363281 280.382812 216.367188 280.386719 216.371094 C 280.386719 216.375 280.386719 216.375 280.386719 216.375 C 280.390625 216.378906 280.390625 216.382812 280.394531 216.382812 C 280.394531 216.386719 280.398438 216.386719 280.398438 216.390625 C 280.402344 216.390625 280.402344 216.394531 280.40625 216.394531 C 280.40625 216.398438 280.40625 216.398438 280.40625 216.398438 C 280.410156 216.402344 280.410156 216.40625 280.414062 216.40625 C 280.414062 216.410156 280.417969 216.410156 280.417969 216.414062 C 280.417969 216.414062 280.421875 216.417969 280.421875 216.417969 C 280.425781 216.421875 280.425781 216.421875 280.429688 216.425781 C 280.429688 216.425781 280.433594 216.429688 280.433594 216.429688 C 280.4375 216.433594 280.4375 216.433594 280.4375 216.4375 C 280.441406 216.441406 280.441406 216.441406 280.445312 216.445312 C 280.445312 216.445312 280.445312 216.449219 280.449219 216.449219 C 280.453125 216.453125 280.453125 216.457031 280.457031 216.460938 C 280.460938 216.460938 280.460938 216.464844 280.460938 216.464844 C 280.464844 216.46875 280.464844 216.46875 280.46875 216.472656 C 280.46875 216.472656 280.46875 216.476562 280.472656 216.476562 C 280.472656 216.480469 280.476562 216.480469 280.476562 216.484375 C 280.480469 216.484375 280.480469 216.484375 280.480469 216.488281 C 280.484375 216.488281 280.484375 216.492188 280.488281 216.496094 C 280.488281 216.496094 280.488281 216.5 280.492188 216.5 C 280.492188 216.503906 280.496094 216.503906 280.496094 216.507812 C 280.496094 216.507812 280.5 216.511719 280.5 216.511719 C 280.5 216.515625 280.503906 216.515625 280.503906 216.519531 C 280.507812 216.519531 280.507812 216.523438 280.507812 216.523438 C 280.511719 216.527344 280.511719 216.527344 280.515625 216.53125 C 280.515625 216.535156 280.519531 216.535156 280.519531 216.535156 C 280.523438 216.539062 280.523438 216.542969 280.527344 216.546875 C 280.527344 216.546875 280.53125 216.550781 280.53125 216.550781 C 280.535156 216.554688 280.535156 216.554688 280.539062 216.558594 C 280.539062 216.5625 280.539062 216.5625 280.542969 216.566406 C 280.542969 216.566406 280.546875 216.570312 280.546875 216.574219 C 280.550781 216.574219 280.550781 216.574219 280.550781 216.578125 C 280.554688 216.578125 280.554688 216.582031 280.558594 216.585938 C 280.558594 216.585938 280.558594 216.585938 280.5625 216.589844 C 280.5625 216.589844 280.566406 216.59375 280.566406 216.597656 C 280.566406 216.597656 280.570312 216.601562 280.570312 216.601562 C 280.570312 216.605469 280.574219 216.605469 280.574219 216.609375 C 280.578125 216.613281 280.578125 216.613281 280.578125 216.613281 C 280.582031 216.617188 280.582031 216.617188 280.585938 216.621094 C 280.585938 216.621094 280.589844 216.625 280.589844 216.625 C 280.59375 216.628906 280.59375 216.632812 280.597656 216.636719 C 280.601562 216.640625 280.605469 216.644531 280.609375 216.648438 C 280.609375 216.648438 280.609375 216.652344 280.609375 216.652344 C 280.613281 216.65625 280.613281 216.65625 280.617188 216.660156 C 280.617188 216.664062 280.621094 216.664062 280.621094 216.664062 C 280.621094 216.667969 280.625 216.671875 280.628906 216.675781 C 280.628906 216.675781 280.628906 216.675781 280.628906 216.679688 C 280.632812 216.679688 280.636719 216.683594 280.636719 216.6875 C 280.636719 216.6875 280.640625 216.6875 280.640625 216.691406 C 280.644531 216.691406 280.644531 216.695312 280.648438 216.699219 C 280.648438 216.699219 280.648438 216.703125 280.652344 216.703125 C 280.652344 216.707031 280.65625 216.710938 280.65625 216.710938 C 280.660156 216.710938 280.660156 216.714844 280.660156 216.714844 C 280.664062 216.71875 280.664062 216.722656 280.667969 216.722656 C 280.667969 216.726562 280.667969 216.726562 280.667969 216.726562 C 280.671875 216.730469 280.675781 216.734375 280.679688 216.738281 C 280.679688 216.742188 280.679688 216.742188 280.683594 216.742188 C 280.683594 216.746094 280.6875 216.746094 280.6875 216.75 C 280.691406 216.75 280.691406 216.753906 280.691406 216.753906 C 280.695312 216.757812 280.695312 216.761719 280.699219 216.761719 C 280.699219 216.765625 280.699219 216.765625 280.703125 216.769531 C 280.703125 216.769531 280.707031 216.773438 280.707031 216.773438 C 280.710938 216.777344 280.710938 216.777344 280.710938 216.78125 C 280.714844 216.78125 280.714844 216.785156 280.71875 216.789062 C 280.71875 216.789062 280.71875 216.789062 280.722656 216.792969 C 280.722656 216.792969 280.726562 216.796875 280.726562 216.800781 C 280.726562 216.800781 280.730469 216.804688 280.730469 216.804688 C 280.734375 216.808594 280.734375 216.808594 280.738281 216.8125 C 280.738281 216.8125 280.738281 216.816406 280.738281 216.816406 C 280.742188 216.820312 280.746094 216.824219 280.75 216.828125 C 280.75 216.832031 280.75 216.832031 280.75 216.832031 C 280.753906 216.835938 280.757812 216.839844 280.757812 216.839844 C 280.757812 216.839844 280.761719 216.84375 280.761719 216.84375 C 280.761719 216.847656 280.765625 216.851562 280.765625 216.851562 C 280.769531 216.855469 280.769531 216.855469 280.769531 216.855469 C 280.773438 216.859375 280.773438 216.863281 280.777344 216.863281 C 280.777344 216.867188 280.78125 216.867188 280.78125 216.867188 C 280.78125 216.871094 280.785156 216.875 280.785156 216.875 C 280.789062 216.875 280.789062 216.878906 280.789062 216.878906 C 280.792969 216.882812 280.792969 216.886719 280.796875 216.886719 C 280.796875 216.890625 280.796875 216.890625 280.800781 216.894531 C 280.800781 216.894531 280.804688 216.898438 280.804688 216.902344 C 280.808594 216.902344 280.808594 216.902344 280.808594 216.90625 C 280.816406 216.914062 280.820312 216.921875 280.828125 216.929688 C 280.828125 216.929688 280.828125 216.933594 280.828125 216.933594 C 280.832031 216.933594 280.835938 216.9375 280.835938 216.941406 C 280.835938 216.941406 280.839844 216.945312 280.839844 216.945312 C 280.839844 216.945312 280.84375 216.949219 280.84375 216.953125 C 280.847656 216.953125 280.847656 216.957031 280.847656 216.957031 C 280.851562 216.960938 280.851562 216.964844 280.855469 216.964844 C 280.855469 216.964844 280.855469 216.96875 280.859375 216.96875 C 280.859375 216.972656 280.863281 216.972656 280.863281 216.976562 C 280.867188 216.980469 280.867188 216.980469 280.867188 216.980469 C 280.871094 216.984375 280.871094 216.988281 280.875 216.992188 C 280.875 216.992188 280.875 216.992188 280.878906 216.996094 C 280.878906 216.996094 280.882812 217 280.882812 217.003906 C 280.886719 217.003906 280.886719 217.003906 280.886719 217.007812 C 280.890625 217.011719 280.890625 217.015625 280.894531 217.019531 C 280.898438 217.019531 280.898438 217.019531 280.898438 217.023438 C 280.902344 217.023438 280.902344 217.027344 280.90625 217.03125 C 280.90625 217.03125 280.90625 217.035156 280.910156 217.035156 C 280.910156 217.035156 280.914062 217.039062 280.914062 217.042969 C 280.914062 217.042969 280.917969 217.046875 280.917969 217.046875 C 280.917969 217.050781 280.921875 217.050781 280.921875 217.054688 C 280.925781 217.054688 280.925781 217.058594 280.925781 217.058594 C 280.929688 217.0625 280.929688 217.0625 280.933594 217.066406 C 280.933594 217.066406 280.933594 217.070312 280.9375 217.070312 C 280.9375 217.074219 280.941406 217.078125 280.941406 217.078125 C 280.941406 217.082031 280.945312 217.082031 280.945312 217.082031 C 280.949219 217.085938 280.949219 217.089844 280.953125 217.09375 C 280.957031 217.101562 280.960938 217.101562 280.964844 217.109375 C 280.964844 217.109375 280.964844 217.109375 280.964844 217.113281 C 280.96875 217.113281 280.96875 217.117188 280.972656 217.121094 C 280.972656 217.121094 280.976562 217.125 280.976562 217.125 C 280.976562 217.125 280.980469 217.128906 280.980469 217.132812 C 280.984375 217.132812 280.984375 217.136719 280.984375 217.136719 C 280.988281 217.136719 280.988281 217.140625 280.992188 217.144531 C 280.992188 217.144531 280.992188 217.148438 280.996094 217.148438 C 280.996094 217.152344 280.996094 217.15625 281 217.15625 C 281 217.160156 281.003906 217.160156 281.003906 217.160156 C 281.007812 217.164062 281.007812 217.167969 281.011719 217.167969 C 281.011719 217.171875 281.011719 217.171875 281.011719 217.175781 C 281.015625 217.175781 281.015625 217.179688 281.019531 217.183594 C 281.019531 217.183594 281.019531 217.1875 281.023438 217.1875 C 281.023438 217.191406 281.027344 217.195312 281.03125 217.199219 C 281.035156 217.207031 281.039062 217.207031 281.039062 217.210938 C 281.042969 217.214844 281.042969 217.214844 281.042969 217.214844 C 281.046875 217.21875 281.046875 217.222656 281.046875 217.222656 C 281.050781 217.226562 281.050781 217.226562 281.050781 217.226562 C 281.054688 217.230469 281.054688 217.234375 281.058594 217.234375 C 281.058594 217.238281 281.0625 217.238281 281.0625 217.242188 C 281.066406 217.242188 281.066406 217.246094 281.066406 217.25 C 281.070312 217.25 281.070312 217.253906 281.074219 217.253906 C 281.074219 217.253906 281.074219 217.257812 281.078125 217.257812 C 281.078125 217.261719 281.082031 217.265625 281.082031 217.265625 C 281.082031 217.265625 281.085938 217.269531 281.085938 217.273438 C 281.085938 217.273438 281.089844 217.277344 281.089844 217.277344 C 281.09375 217.28125 281.09375 217.28125 281.097656 217.285156 C 281.097656 217.289062 281.101562 217.289062 281.101562 217.292969 C 281.105469 217.296875 281.105469 217.300781 281.109375 217.304688 C 281.109375 217.304688 281.109375 217.304688 281.109375 217.308594 C 281.113281 217.308594 281.113281 217.3125 281.117188 217.316406 C 281.117188 217.316406 281.121094 217.320312 281.121094 217.320312 C 281.121094 217.320312 281.125 217.324219 281.125 217.328125 C 281.125 217.328125 281.128906 217.332031 281.128906 217.332031 C 281.132812 217.335938 281.132812 217.335938 281.132812 217.339844 C 281.136719 217.339844 281.136719 217.34375 281.136719 217.34375 C 281.140625 217.347656 281.140625 217.351562 281.140625 217.351562 C 281.144531 217.355469 281.144531 217.355469 281.144531 217.359375 C 281.148438 217.359375 281.148438 217.363281 281.152344 217.363281 C 281.152344 217.367188 281.152344 217.367188 281.15625 217.371094 C 281.15625 217.375 281.160156 217.375 281.160156 217.378906 C 281.164062 217.382812 281.164062 217.382812 281.164062 217.382812 C 281.167969 217.386719 281.171875 217.390625 281.175781 217.394531 C 281.175781 217.394531 281.175781 217.394531 281.175781 217.398438 C 281.175781 217.398438 281.179688 217.402344 281.183594 217.40625 C 281.183594 217.410156 281.183594 217.410156 281.183594 217.414062 C 281.1875 217.414062 281.1875 217.417969 281.191406 217.417969 C 281.191406 217.421875 281.195312 217.421875 281.195312 217.425781 C 281.195312 217.425781 281.199219 217.429688 281.199219 217.433594 C 281.203125 217.433594 281.203125 217.433594 281.203125 217.4375 C 281.207031 217.4375 281.207031 217.441406 281.210938 217.445312 C 281.210938 217.445312 281.210938 217.449219 281.214844 217.449219 C 281.214844 217.449219 281.21875 217.453125 281.21875 217.457031 C 281.21875 217.457031 281.222656 217.460938 281.222656 217.460938 C 281.226562 217.464844 281.226562 217.464844 281.230469 217.46875 C 281.230469 217.472656 281.230469 217.472656 281.234375 217.472656 C 281.234375 217.480469 281.238281 217.480469 281.242188 217.484375 C 281.242188 217.488281 281.242188 217.488281 281.242188 217.488281 C 281.246094 217.492188 281.246094 217.496094 281.25 217.5 C 281.25 217.5 281.253906 217.503906 281.253906 217.503906 C 281.257812 217.507812 281.257812 217.507812 281.257812 217.511719 C 281.261719 217.511719 281.261719 217.511719 281.261719 217.515625 C 281.265625 217.515625 281.265625 217.519531 281.269531 217.523438 C 281.269531 217.523438 281.269531 217.527344 281.273438 217.527344 C 281.273438 217.53125 281.277344 217.535156 281.277344 217.535156 C 281.277344 217.539062 281.28125 217.539062 281.28125 217.539062 C 281.285156 217.542969 281.285156 217.542969 281.289062 217.546875 C 281.289062 217.550781 281.289062 217.550781 281.292969 217.550781 C 281.292969 217.554688 281.296875 217.558594 281.296875 217.5625 C 281.296875 217.5625 281.300781 217.5625 281.300781 217.566406 C 281.304688 217.574219 281.3125 217.582031 281.316406 217.589844 C 281.320312 217.589844 281.320312 217.59375 281.320312 217.59375 C 281.324219 217.597656 281.324219 217.597656 281.328125 217.601562 C 281.328125 217.605469 281.328125 217.605469 281.332031 217.605469 C 281.332031 217.609375 281.332031 217.609375 281.335938 217.613281 C 281.335938 217.617188 281.335938 217.617188 281.339844 217.617188 C 281.339844 217.621094 281.34375 217.625 281.34375 217.625 C 281.34375 217.628906 281.347656 217.628906 281.347656 217.632812 C 281.351562 217.632812 281.351562 217.636719 281.351562 217.640625 C 281.355469 217.640625 281.355469 217.640625 281.355469 217.644531 C 281.359375 217.644531 281.359375 217.648438 281.363281 217.652344 C 281.363281 217.652344 281.363281 217.65625 281.367188 217.65625 C 281.367188 217.660156 281.371094 217.664062 281.371094 217.667969 C 281.371094 217.667969 281.371094 217.667969 281.375 217.671875 C 281.375 217.675781 281.378906 217.675781 281.382812 217.683594 C 281.382812 217.683594 281.382812 217.683594 281.386719 217.6875 C 281.386719 217.691406 281.390625 217.691406 281.390625 217.695312 C 281.394531 217.695312 281.394531 217.699219 281.394531 217.699219 C 281.398438 217.703125 281.398438 217.703125 281.402344 217.707031 C 281.402344 217.707031 281.402344 217.710938 281.40625 217.710938 C 281.40625 217.714844 281.410156 217.71875 281.410156 217.71875 C 281.410156 217.722656 281.414062 217.722656 281.414062 217.726562 C 281.417969 217.726562 281.417969 217.730469 281.421875 217.734375 C 281.421875 217.734375 281.421875 217.734375 281.425781 217.738281 C 281.425781 217.738281 281.429688 217.742188 281.429688 217.746094 C 281.429688 217.746094 281.429688 217.75 281.433594 217.75 C 281.433594 217.753906 281.4375 217.757812 281.441406 217.761719 C 281.445312 217.769531 281.445312 217.769531 281.449219 217.777344 C 281.453125 217.777344 281.453125 217.777344 281.453125 217.777344 C 281.453125 217.78125 281.457031 217.785156 281.460938 217.789062 C 281.460938 217.789062 281.460938 217.792969 281.460938 217.792969 C 281.464844 217.796875 281.464844 217.796875 281.46875 217.800781 C 281.46875 217.804688 281.46875 217.804688 281.472656 217.804688 C 281.472656 217.808594 281.476562 217.8125 281.476562 217.816406 C 281.476562 217.816406 281.480469 217.816406 281.480469 217.820312 C 281.484375 217.820312 281.484375 217.824219 281.488281 217.828125 C 281.488281 217.828125 281.488281 217.832031 281.488281 217.832031 C 281.492188 217.832031 281.492188 217.835938 281.496094 217.839844 C 281.496094 217.84375 281.496094 217.84375 281.496094 217.84375 C 281.5 217.847656 281.503906 217.851562 281.503906 217.855469 C 281.503906 217.855469 281.503906 217.859375 281.507812 217.859375 C 281.507812 217.863281 281.511719 217.867188 281.515625 217.871094 C 281.519531 217.875 281.523438 217.878906 281.523438 217.882812 C 281.523438 217.882812 281.527344 217.886719 281.527344 217.886719 C 281.527344 217.890625 281.53125 217.894531 281.53125 217.894531 C 281.535156 217.898438 281.535156 217.898438 281.535156 217.898438 C 281.539062 217.902344 281.539062 217.90625 281.542969 217.90625 C 281.542969 217.910156 281.546875 217.910156 281.546875 217.914062 C 281.546875 217.914062 281.550781 217.917969 281.550781 217.921875 C 281.554688 217.921875 281.554688 217.925781 281.554688 217.925781 C 281.558594 217.925781 281.558594 217.929688 281.5625 217.933594 C 281.5625 217.933594 281.5625 217.9375 281.5625 217.9375 C 281.566406 217.941406 281.566406 217.945312 281.570312 217.949219 C 281.570312 217.949219 281.574219 217.949219 281.574219 217.953125 C 281.578125 217.960938 281.582031 217.964844 281.585938 217.96875 Z M 67.765625 254.257812 C 65.382812 255.53125 63.300781 257.355469 61.5625 259.6875 L 61.460938 259.621094 C 53.027344 270.96875 54.488281 292.65625 65.011719 312.363281 C 71.304688 324.140625 79.945312 333.761719 89.339844 339.453125 C 95.078125 342.929688 100.679688 344.691406 105.777344 344.6875 C 109.0625 344.6875 112.132812 343.957031 114.894531 342.484375 C 118.238281 340.695312 120.949219 337.898438 122.945312 334.167969 L 122.84375 334.105469 C 125.941406 328.308594 127.109375 320.601562 126.222656 311.820312 C 125.3125 302.832031 122.292969 293.328125 117.488281 284.332031 C 111.203125 272.570312 102.582031 262.964844 93.203125 257.285156 C 83.804688 251.59375 74.769531 250.515625 67.765625 254.257812 Z M 93.078125 257.488281 C 102.421875 263.148438 111.015625 272.722656 117.277344 284.441406 C 122.066406 293.410156 125.078125 302.886719 125.984375 311.84375 C 126.871094 320.582031 125.707031 328.242188 122.640625 333.984375 C 120.929688 336.285156 118.867188 338.089844 116.507812 339.351562 C 109.582031 343.050781 100.632812 341.980469 91.308594 336.332031 C 81.964844 330.671875 73.371094 321.097656 67.109375 309.375 C 62.316406 300.40625 59.304688 290.933594 58.398438 281.976562 C 57.515625 273.234375 58.675781 265.574219 61.746094 259.832031 C 63.457031 257.53125 65.515625 255.726562 67.878906 254.46875 C 74.804688 250.769531 83.753906 251.839844 93.078125 257.488281 Z M 141.046875 343.21875 C 146.382812 334.066406 148.738281 323.953125 148.046875 313.160156 C 147.492188 304.523438 145 295.429688 140.628906 286.140625 C 133.191406 270.308594 122.753906 259.246094 122.648438 259.132812 C 122.601562 259.085938 122.605469 259.011719 122.652344 258.96875 C 122.699219 258.921875 122.777344 258.921875 122.820312 258.972656 C 122.925781 259.082031 133.382812 270.167969 140.839844 286.03125 C 145.222656 295.351562 147.726562 304.472656 148.28125 313.140625 C 148.976562 323.980469 146.609375 334.140625 141.25 343.335938 C 141.230469 343.371094 141.1875 343.394531 141.148438 343.394531 C 141.128906 343.394531 141.109375 343.386719 141.089844 343.378906 C 141.03125 343.347656 141.011719 343.273438 141.046875 343.21875 Z M 94.90625 222.003906 C 91.886719 214.871094 89.945312 208.761719 89.925781 208.699219 C 89.90625 208.636719 89.941406 208.570312 90.003906 208.550781 C 90.066406 208.535156 90.132812 208.566406 90.152344 208.628906 C 90.171875 208.6875 92.109375 214.789062 95.128906 221.914062 C 97.910156 228.484375 102.207031 237.289062 106.867188 241.9375 C 106.914062 241.984375 106.914062 242.058594 106.867188 242.105469 C 106.847656 242.128906 106.816406 242.140625 106.785156 242.140625 C 106.753906 242.140625 106.726562 242.128906 106.703125 242.109375 C 102.011719 237.429688 97.699219 228.59375 94.90625 222.003906 Z M 94.90625 222.003906 " fill-opacity="1" fill-rule="nonzero"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Headphones.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Headphones = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = {};
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
  }, _attrs))}><path fill="#ff8e72" d="M 224.957031 221.582031 C 387.269531 364.0625 83.691406 427.332031 153.777344 236.425781 C 83.691406 427.332031 -70.347656 158.1875 117.640625 173.277344 C -70.347656 158.1875 138.082031 -71.535156 166.550781 119.375 C 138.082031 -71.535156 420.976562 55.617188 232.867188 149.183594 C 420.851562 55.738281 387.269531 364.0625 224.957031 221.582031 Z M 224.957031 221.582031 " fill-opacity="1" fill-rule="nonzero"></path><path fill="#2f2f34" d="M 223.007812 183.375 C 223.007812 184.730469 222.941406 186.082031 222.808594 187.429688 C 222.675781 188.777344 222.480469 190.117188 222.214844 191.445312 C 221.949219 192.773438 221.621094 194.085938 221.226562 195.382812 C 220.835938 196.679688 220.378906 197.953125 219.859375 199.207031 C 219.34375 200.457031 218.761719 201.679688 218.125 202.875 C 217.484375 204.070312 216.789062 205.230469 216.039062 206.359375 C 215.285156 207.484375 214.480469 208.570312 213.621094 209.621094 C 212.757812 210.667969 211.851562 211.667969 210.894531 212.628906 C 209.933594 213.585938 208.933594 214.496094 207.882812 215.355469 C 206.835938 216.214844 205.75 217.019531 204.625 217.773438 C 203.496094 218.523438 202.335938 219.21875 201.140625 219.859375 C 199.945312 220.5 198.722656 221.078125 197.472656 221.59375 C 196.21875 222.113281 194.945312 222.570312 193.648438 222.960938 C 192.351562 223.355469 191.039062 223.683594 189.710938 223.949219 C 188.382812 224.214844 187.042969 224.414062 185.695312 224.546875 C 184.347656 224.679688 182.996094 224.746094 181.640625 224.746094 C 180.285156 224.746094 178.933594 224.679688 177.585938 224.546875 C 176.238281 224.414062 174.898438 224.214844 173.570312 223.949219 C 172.242188 223.683594 170.929688 223.355469 169.632812 222.964844 C 168.335938 222.570312 167.058594 222.113281 165.808594 221.59375 C 164.558594 221.078125 163.332031 220.5 162.140625 219.859375 C 160.945312 219.21875 159.78125 218.523438 158.65625 217.773438 C 157.53125 217.019531 156.441406 216.214844 155.394531 215.355469 C 154.347656 214.496094 153.34375 213.585938 152.386719 212.628906 C 151.429688 211.667969 150.519531 210.667969 149.660156 209.621094 C 148.800781 208.570312 147.996094 207.484375 147.242188 206.359375 C 146.488281 205.230469 145.792969 204.070312 145.15625 202.875 C 144.515625 201.679688 143.9375 200.457031 143.417969 199.207031 C 142.902344 197.953125 142.445312 196.679688 142.050781 195.382812 C 141.660156 194.085938 141.328125 192.773438 141.066406 191.445312 C 140.800781 190.117188 140.601562 188.777344 140.46875 187.429688 C 140.335938 186.082031 140.269531 184.730469 140.269531 183.375 C 140.269531 182.019531 140.335938 180.667969 140.46875 179.320312 C 140.601562 177.972656 140.800781 176.632812 141.066406 175.304688 C 141.328125 173.976562 141.660156 172.664062 142.050781 171.367188 C 142.445312 170.070312 142.902344 168.796875 143.417969 167.542969 C 143.9375 166.292969 144.515625 165.066406 145.15625 163.875 C 145.792969 162.679688 146.488281 161.519531 147.242188 160.390625 C 147.996094 159.265625 148.800781 158.175781 149.660156 157.128906 C 150.519531 156.082031 151.429688 155.082031 152.386719 154.121094 C 153.34375 153.164062 154.347656 152.253906 155.394531 151.394531 C 156.441406 150.535156 157.53125 149.730469 158.65625 148.976562 C 159.78125 148.226562 160.945312 147.527344 162.140625 146.890625 C 163.332031 146.25 164.558594 145.671875 165.808594 145.15625 C 167.058594 144.636719 168.335938 144.179688 169.632812 143.785156 C 170.929688 143.394531 172.242188 143.066406 173.570312 142.800781 C 174.898438 142.535156 176.238281 142.335938 177.585938 142.203125 C 178.933594 142.070312 180.285156 142.003906 181.640625 142.003906 C 182.996094 142.003906 184.347656 142.070312 185.695312 142.203125 C 187.042969 142.335938 188.382812 142.535156 189.710938 142.800781 C 191.039062 143.066406 192.351562 143.394531 193.648438 143.785156 C 194.945312 144.179688 196.21875 144.636719 197.472656 145.15625 C 198.722656 145.671875 199.945312 146.25 201.140625 146.890625 C 202.335938 147.527344 203.496094 148.222656 204.625 148.976562 C 205.75 149.730469 206.835938 150.535156 207.882812 151.394531 C 208.933594 152.253906 209.933594 153.164062 210.894531 154.121094 C 211.851562 155.082031 212.757812 156.082031 213.621094 157.128906 C 214.480469 158.175781 215.285156 159.265625 216.039062 160.390625 C 216.789062 161.519531 217.484375 162.679688 218.125 163.875 C 218.761719 165.066406 219.34375 166.292969 219.859375 167.542969 C 220.378906 168.796875 220.835938 170.070312 221.226562 171.367188 C 221.621094 172.664062 221.949219 173.976562 222.214844 175.304688 C 222.480469 176.632812 222.675781 177.972656 222.808594 179.320312 C 222.941406 180.667969 223.007812 182.019531 223.007812 183.375 Z M 223.007812 183.375 " fill-opacity="1" fill-rule="nonzero"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Flower5.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Flower5 = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    const { $gsap: gsap2 } = useNuxtApp();
    ref(null);
    const container = ref(null);
    ref(null);
    const loading = ref(false);
    const delay = ref("0.5s");
    const animDelay = computed(() => ({
      "--theme-main-animation-delay": delay.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: "max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto min-h-[85dvh] py-24 hero-container flex flex-col justify-center"
      }, _attrs))}><div class="hero-wrapper animate relative w-full"><div class="utilties absolute right-0 -top-15">`);
      _push(ssrRenderComponent(SecondaryNav, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "loaded": unref(store).loaded }, "headline-wrapper decor-grid group"])}"><h1 class="headline font-heading font-black text-6xl leading-none xl:pt-8 **:align-sub mt-6 uppercase placeholder-line opacity-0 max-md:min-h-110" data-splitting="words"> Building digital bridges between ideas &amp; impact </h1><div class="${ssrRenderClass([{ "-translate-x-[calc((50vw+30px)-22vw)] translate-y-[5vh] md:translate-x-0 md:-translate-y-[calc(560px-39vh)] lg:-translate-y-[40vh] lg:translate-x-5": !loading.value }, "decor-wrap preloading transition-all duration-1000 justify-center items-center flex md:order-4 lg:order-3"])}">`);
      _push(ssrRenderComponent(Mixer, {
        class: ["decor h-auto", loading.value ? "jello-horizontal" : "animate subtle-slide-in-attention scale-200"],
        width: "180",
        height: "180",
        style: animDelay.value
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "animate": loading.value }, "decor-wrap subtle-slide-in opacity-0 md:order-2"])}">`);
      _push(ssrRenderComponent(Flower4, {
        class: "decor heartbeat h-auto",
        width: "180",
        height: "180"
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "-translate-x-[calc((50vw+30px)-22vw)] translate-y-[8vh] md:translate-x-[19vw] lg:translate-x-[5vw] md:-translate-y-[calc(555px-39vh)] lg:-translate-y-[40vh]": !loading.value }, "decor-wrap preloading transition-all duration-1000 md:order-5"])}">`);
      _push(ssrRenderComponent(Flower2, {
        width: "180",
        height: "180",
        class: ["decor h-auto", loading.value ? "rotate-ccw90-forever" : "animate subtle-slide-in-attention scale-200"],
        style: !loading.value ? "--theme-main-animation-delay: 600ms" : animDelay.value
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "animate": loading.value }, "decor-wrap subtle-slide-in opacity-0 md:order-3 lg:order-4"])}">`);
      _push(ssrRenderComponent(Heart, {
        class: "decor jello-horizontal h-auto",
        width: "180",
        height: "180"
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "animate": loading.value }, "decor-wrap subtle-slide-in opacity-0"])}">`);
      _push(ssrRenderComponent(Flower5, {
        class: "decor rotate-ccw90-forever h-auto",
        width: "180",
        height: "180"
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "animate": loading.value }, "decor-wrap subtle-slide-in opacity-0 md:order-6"])}">`);
      _push(ssrRenderComponent(BMX, {
        class: "decor rotate-forever h-auto",
        width: "180",
        height: "180"
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "animate": loading.value }, "decor-wrap subtle-slide-in opacity-0 md:order-7"])}">`);
      _push(ssrRenderComponent(Headphones, {
        class: "decor shake-top h-auto",
        width: "180",
        height: "180"
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "-translate-x-[calc((50vw+20px)-22vw)] translate-y-[10vh] md:-translate-y-[calc(570px-39vh)] md:-translate-x-[0vw]  md:-translate-y-[430px] lg:-translate-y-[40vh] lg:-translate-x-[2vw]": !loading.value }, "decor-wrap preloading transition-all duration-1000 md:order-8"])}">`);
      _push(ssrRenderComponent(Code, {
        class: ["decor h-auto", loading.value ? "vibrate" : "animate subtle-slide-in-attention scale-250"],
        width: "180",
        height: "180",
        style: { "--theme-main-animation-delay:900": !loading.value }
      }, null, _parent));
      _push(`</div></div><div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Artisan",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap2 } = useNuxtApp();
    const isArtisan = ref(false);
    const artisan = ref(null);
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
      if (unref(store).loaded) {
        _push(ssrRenderComponent(MainButton, {
          href: "/about",
          class: "btn text-primary dark:text-background inverted:text-background inverted:dark:text-primary hover:text-accent subtle-slide-in",
          label: "What drives me",
          onClick: () => openAbout(),
          delay: "0.7s"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
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
      _push(`<!--[--><section class="pt-20" id="work" data-v-12679306><div class="relative group h-[70vh] min-h-[550px] md:h-[570px] lg:h-[700px] xl:h-[900px] overflow-y-visible overflow-x-clip pb-8" data-v-12679306><h2 class="mb-6 lg:mb-18 max-w-full px-8 lg:px-12 lg:max-w-[1024px] xl:max-w-[1440px] mx-auto text-2xl lg:text-5xl placeholder-line" data-splitting="words" data-v-12679306> Featured Work</h2><div class="splideSlider relative" data-v-12679306>`);
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
                    _push3(`<div class="relative rounded-xl overflow-hidden flex flex-col justify-center items-center" data-v-12679306${_scopeId2}>`);
                    if (loaded.value && unref(store).loaded) {
                      _push3(`<div class="flex flex-col md:flex-row justify-center items-start gap-8" data-v-12679306${_scopeId2}><img crossorigin="anonymous"${ssrRenderAttr("src", slide.image.replace("/q_auto,f_auto", "/q_auto,f_auto,w_1260"))} class="w-full object-cover rounded-xl group-[.is-active]:w-[90%] md:group-[.is-active]:w-[var(--width-slide)] transition-all cursor-pointer duriation-900" data-v-12679306${_scopeId2}><div class="opacity-0 rounded-xl w-0 group-[.is-active]:opacity-100 group-[.is-active]:w-[20%] transition-all duriation-900 hidden md:block overflow-clip" data-v-12679306${_scopeId2}><video crossorigin="anonymous" class="aspect-mobile"${ssrRenderAttr("data-src", slide.video.replace("q_auto", "q_auto,w_480"))} playsinline muted="" loop${ssrRenderAttr("poster", slide.video.replace(".m3u8", ".webp").replace("q_auto", "q_auto,so_0.2"))} data-v-12679306${_scopeId2}></video></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="h-0 opacity-0 flex flex-col justify-end items-start py-6 md:p-6 group-[.is-active]:opacity-100 group-[.is-active]:h-full transition-all duriation-700 w-[85%] lg:w-[65%] lg:mr-26" data-v-12679306${_scopeId2}><h3 class="${ssrRenderClass([slide.textColor, "text-2xl font-bold mb-2 subtle-slide-in"])}" data-v-12679306${_scopeId2}>${ssrInterpolate(slide.title)}</h3><div class="flex flex-col gap-6 mb-4" data-v-12679306${_scopeId2}><div class="flex flex-col justify-between pr-8 lg:pr-18" data-v-12679306${_scopeId2}><p class="${ssrRenderClass([slide.textColor, "text-base subtle-slide-in"])}" style="${ssrRenderStyle({ "--theme-main-animation-delay": "0.2s" })}" data-v-12679306${_scopeId2}>${ssrInterpolate(truncateHtmlText(slide.text, 100))}</p></div><div class="flex gap-2 group/ctas flex-wrap max-w-75 flex-col mt-6 md:mt-0" data-v-12679306${_scopeId2}>`);
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
      _push(`</div><button title="Next Slide" aria-label="Next Slide" class="${ssrRenderClass([[isHovered.value ? "md:opacity-80" : ""], "mt-8 block -right-2 md:-right-8 lg:right-65 xl:right-95 mx-auto text-white px-6 py-2 rounded-full transition duriation-900 cursor-pointer w-24 md:w-50 flex flex-col justify-center items-center group/slider h-26 md:h-50 hover:opacity-80 dark:hover:bg-primary/20 inverted:bg-background/0 absolute bottom-90 md:bottom-0 xl:bottom-25"])}" data-v-12679306><svg fill="none" stroke-width="1.5" viewBox="0 0 24 24" class="${ssrRenderClass([activeTextColor.value, "w-24 md:w-50"])}" xmlns="http://www.w3.org/2000/svg" data-v-12679306><path d="M9 6L15 12L9 18" class="stroke-current" stroke-linecap="round" stroke-linejoin="round" data-v-12679306></path></svg><svg class="${ssrRenderClass([activeTextColor.value, "absolute inset-0 rounded-[9rem] w-full h-full pointer-events-none opacity-0 group-hover/slider:opacity-100 animate-spin-slow z-0"])}" viewBox="0 0 100 100" data-v-12679306><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="6"${ssrRenderAttr("stroke-dasharray", strokeLength)}${ssrRenderAttr("stroke-dashoffset", progressOffset.value)} class="transition-all duration-100 ease-linear" data-v-12679306></circle></svg></button></div></section><div class="hidden stroke-sunburn-orange stroke-" data-v-12679306></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carousels/FeaturedWork.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FeaturedWork = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-12679306"]]);
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
        _push(ssrRenderComponent(_sfc_main$g, null, null, _parent));
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
//# sourceMappingURL=index-DoavFhC-.mjs.map
