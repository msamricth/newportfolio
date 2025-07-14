import { ref, watch, nextTick, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { d as useNuxtApp, a as useMainStore, P as PlaceholderJS, S as ScrollTrigger } from './server.mjs';
import { u as useWindowSize, _ as _sfc_main$5 } from './index-B6mjYcVR.mjs';

const _sfc_main$4 = {
  __name: "UX",
  __ssrInlineRender: true,
  setup(__props) {
    const paths = [
      // Path split manually to preserve layering and DRY logic
      "M6.917,26.041h26.667c2.11,3.536,5.964,5.917,10.372,5.917c4.409,0,8.263-2.381,10.373-5.917h2.754  c3.4,0,6.167-2.767,6.167-6.167s-2.767-6.167-6.167-6.167h-2.754c-2.11-3.536-5.964-5.917-10.373-5.917  c-4.408,0-8.262,2.381-10.372,5.917H6.917c-3.4,0-6.167,2.766-6.167,6.167S3.517,26.041,6.917,26.041z",
      "M57.083,16.708  c1.746,0,3.167,1.42,3.167,3.167s-1.421,3.167-3.167,3.167h-1.479c0.275-1.011,0.436-2.07,0.436-3.167s-0.16-2.155-0.436-3.167  H57.083z",
      "M43.956,10.791c5.009,0,9.084,4.075,9.084,9.083c0,5.009-4.075,9.084-9.084,9.084s-9.083-4.075-9.083-9.084  C34.873,14.866,38.947,10.791,43.956,10.791z",
      "M6.917,16.708h25.391c-0.275,1.011-0.435,2.069-0.435,3.167s0.16,2.156,0.436,3.167  H6.917c-1.746,0-3.167-1.421-3.167-3.167S5.171,16.708,6.917,16.708z",
      "M57.082,37.959H30.417c-2.11-3.537-5.964-5.918-10.373-5.918c-4.409,0-8.263,2.381-10.374,5.918H6.917  c-3.4,0-6.167,2.766-6.167,6.166s2.767,6.167,6.167,6.167h2.754c2.111,3.536,5.964,5.917,10.373,5.917  c4.408,0,8.262-2.381,10.372-5.917h26.666c3.401,0,6.168-2.767,6.168-6.167S60.483,37.959,57.082,37.959z",
      "M6.917,47.292  c-1.746,0-3.167-1.421-3.167-3.167s1.421-3.166,3.167-3.166h1.478C8.12,41.97,7.96,43.028,7.96,44.125  c0,1.098,0.16,2.155,0.436,3.167H6.917z",
      "M20.044,53.209c-5.009,0-9.084-4.075-9.084-9.084s4.075-9.084,9.084-9.084  c5.008,0,9.083,4.075,9.083,9.084S25.052,53.209,20.044,53.209z",
      "M57.082,47.292h-25.39c0.275-1.012,0.435-2.069,0.435-3.167  c0-1.097-0.16-2.155-0.435-3.166h25.39c1.747,0,3.168,1.42,3.168,3.166S58.829,47.292,57.082,47.292z"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        ref: "mainIcon",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><!--[-->`);
      ssrRenderList(paths, (d, i) => {
        _push(`<path${ssrRenderAttr("d", d)} stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>`);
      });
      _push(`<!--]--></svg>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/UX.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Frontend",
  __ssrInlineRender: true,
  setup(__props) {
    const paths = [
      "M490.39,399.89H21.61C10.24,399.89,1,390.64,1,379.28V56.91C1,45.55,10.24,36.3,21.61,36.3h468.78c11.36,0,20.61,9.24,20.61,20.61v322.36C511,390.64,501.76,399.89,490.39,399.89z M21.61,51.76c-2.84,0-5.15,2.31-5.15,5.15v322.36c0,2.84,2.31,5.16,5.15,5.16h468.78c2.84,0,5.15-2.32,5.15-5.16V56.91c0-2.84-2.31-5.15-5.15-5.15H21.61z",
      "M468.63,475.7H43.36C20,475.7,1,451.39,1,421.51c0-4.27,3.46-7.73,7.73-7.73h164.85c1.64,0,3.22,0.52,4.55,1.48l21.82,15.88h94.19l29.7-16.4c1.15-0.63,2.43-0.97,3.74-0.97h175.7c4.27,0,7.73,3.46,7.73,7.73C511,451.39,491.99,475.7,468.63,475.7z M17.02,429.24c2.57,17.44,13.59,31,26.34,31h425.26c12.76,0,23.79-13.56,26.35-31H329.57l-29.7,16.4c-1.15,0.63-2.43,0.97-3.74,0.97h-98.7c-1.64,0-3.22-0.52-4.55-1.48l-21.82-15.88H17.02z",
      "M161.64,98.39H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h87.84c4.27,0,7.73,3.46,7.73,7.73C169.37,94.94,165.91,98.39,161.64,98.39z",
      "M117.72,141.77H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.93c4.27,0,7.73,3.46,7.73,7.73C125.45,138.31,122,141.77,117.72,141.77z",
      "M366.62,141.77H322.7c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.92c4.27,0,7.73,3.46,7.73,7.73C374.35,138.31,370.89,141.77,366.62,141.77z",
      "M271.18,141.77H169.23c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73C278.91,138.31,275.45,141.77,271.18,141.77z",
      "M117.72,242.63H73.8c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h43.93c4.27,0,7.73,3.46,7.73,7.73S122,242.63,117.72,242.63z",
      "M366.62,242.63H322.7c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h43.92c4.27,0,7.73,3.46,7.73,7.73S370.89,242.63,366.62,242.63z",
      "M271.18,242.63H169.23c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73S275.45,242.63,271.18,242.63z",
      "M117.72,343.49H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.93c4.27,0,7.73,3.46,7.73,7.73C125.45,340.04,122,343.49,117.72,343.49z",
      "M366.62,343.49H322.7c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h43.92c4.27,0,7.73,3.46,7.73,7.73C374.35,340.04,370.89,343.49,366.62,343.49z",
      "M271.18,343.49H169.23c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73C278.91,340.04,275.45,343.49,271.18,343.49z",
      "M175.75,293.06H73.8c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73C183.47,289.61,180.02,293.06,175.75,293.06z",
      "M323.27,293.06H221.33c-4.27,0-7.73-3.46-7.73-7.73c0-4.27,3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73C331,289.61,327.55,293.06,323.27,293.06z",
      "M175.75,192.2H73.8c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73S180.02,192.2,175.75,192.2z",
      "M323.27,192.2H221.33c-4.27,0-7.73-3.46-7.73-7.73s3.46-7.73,7.73-7.73h101.95c4.27,0,7.73,3.46,7.73,7.73S327.55,192.2,323.27,192.2z"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        ref: "mainIcon",
        viewBox: "0 0 512 512",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><!--[-->`);
      ssrRenderList(paths, (d, i) => {
        _push(`<path${ssrRenderAttr("d", d)} stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>`);
      });
      _push(`<!--]--></svg>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Frontend.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "API",
  __ssrInlineRender: true,
  setup(__props) {
    const paths = [
      "M18,9.7a.51.51,0,0,1-.1.7h0a3.55,3.55,0,0,0,3,1.67A3.7,3.7,0,0,0,24.5,8.29,3.7,3.7,0,0,0,20.91,4.5a3.7,3.7,0,0,0-3.59,3.79,3.76,3.76,0,0,0,.21,1.22A.52.52,0,0,1,18,9.7Z",
      "M20.91,3.5a4.7,4.7,0,0,0-4.59,4.79,4.74,4.74,0,0,0,.35,1.81l-5.06,3.79a.5.5,0,0,0,.3.9.57.57,0,0,0,.3-.1L17.14,11a4.52,4.52,0,0,0,3.77,2.07A4.7,4.7,0,0,0,25.5,8.29,4.7,4.7,0,0,0,20.91,3.5Zm0,8.57a3.55,3.55,0,0,1-3-1.67,3.78,3.78,0,0,1-.4-.89,3.76,3.76,0,0,1-.21-1.22A3.7,3.7,0,0,1,20.91,4.5,3.7,3.7,0,0,1,24.5,8.29,3.7,3.7,0,0,1,20.91,12.07Z",
      "M16.82,20.64a3.62,3.62,0,0,0-1.81.51.31.31,0,0,0-.1-.15l-2.36-2.48a3.6,3.6,0,0,0,.68-2.09,3.44,3.44,0,0,0-3.37-3.5,3.5,3.5,0,0,0,0,7,3.24,3.24,0,0,0,2-.69l2.34,2.45.05,0a4,4,0,0,0-1.19,2.85,3.77,3.77,0,1,0,7.54,0A3.86,3.86,0,0,0,16.82,20.64ZM7.5,16.43a2.44,2.44,0,0,1,2.36-2.5,2.5,2.5,0,0,1,0,5A2.44,2.44,0,0,1,7.5,16.43ZM16.82,27.5a2.93,2.93,0,0,1,0-5.86,2.93,2.93,0,0,1,0,5.86Z"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        ref: "mainIcon",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      }, _attrs))}><!--[-->`);
      ssrRenderList(paths, (d, i) => {
        _push(`<path${ssrRenderAttr("d", d)} stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>`);
      });
      _push(`<!--]--></svg>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/API.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ProblemSolving",
  __ssrInlineRender: true,
  setup(__props) {
    const paths = [
      "M3.10897 11.1774C4.28484 10.7331 12.7574 10.6043 19.7112 10.3991C19.7112 10.3991 20.1081 9.35233 19.7112 9.23759C16.3323 8.26088 17.2562 3.48293 20.6879 3.16616C24.1196 2.84939 25.677 7.20498 22.7997 9.23759C22.2956 9.59368 22.7997 10.3991 22.7997 10.3991C22.7997 10.3991 37.3873 10.3505 38.0724 11.1774C38.8801 12.1523 37.9502 19.3645 38.0724 26.9901C38.0724 26.9901 38.845 26.9596 39.477 26.9901C41.8806 23.8028 45.8517 25.7883 45.7472 28.9757C45.6427 32.163 40.94 32.6856 39.477 30.3865C38.8559 30.4254 38.0724 30.3865 38.0724 30.3865C38.0525 38.0457 39.0834 45.6352 38.0724 46.1407C37.01 46.6719 29.6559 46.9243 22.0031 46.8074C22.0031 46.8074 22.0573 45.36 22.0031 44.4352C24.8986 43.277 25.304 37.3701 20.1499 37.0805C14.9959 36.791 14.8221 42.7558 18.1205 44.4352C18.0656 45.3242 18.1205 46.7159 18.1205 46.7159C11.3896 46.4989 5.22256 45.9788 3.81184 45.0923C0.542975 43.0382 1.81419 29.7099 1.81419 29.7099C1.81419 29.7099 2.86584 29.7249 3.36813 29.7099C7.27281 33.9695 11 31.1741 11 28.0681C11 24.9621 8.33772 22.0336 3.81184 25.8052C2.99737 25.7516 1.72173 25.8052 1.72173 25.8052C1.60988 18.3659 1.90664 11.6316 3.10897 11.1774Z"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><!--[-->`);
      ssrRenderList(paths, (d, i) => {
        _push(`<path${ssrRenderAttr("d", d)} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>`);
      });
      _push(`<!--]--></svg>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ProblemSolving.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const offerings = [
  {
    title: "Front-End Development",
    description: "I build performant, responsive, and accessible interfaces using modern frameworks and workflows.",
    points: ["Vue.js & Nuxt.js", "Tailwind & Bootstrap", "GSAP & Motion Design"],
    icon: _sfc_main$3,
    textColor: "text-toxic-mint"
  },
  {
    title: "Custom WordPress Builds",
    description: "Modular and maintainable WordPress sites using ACF, Sage, and custom blocks.",
    points: ["ACF + Block Development", "Theme Optimization", "Bedrock/Trellis Stack"],
    icon: _sfc_main$5,
    textColor: "text-lime-glow"
  },
  {
    title: "UI/UX Strategy",
    description: "Collaborative design/dev feedback loops to ensure UI systems support real-world use cases.",
    points: ["Design-Dev Bridge", "Reusable Components", "Accessibility First"],
    icon: _sfc_main$4,
    textColor: "text-hot-coral"
  },
  {
    title: "API Integrations",
    description: "I wire up third-party data in ways that are efficient, flexible, and reliable.",
    points: ["Airtable & Headless CMS", "REST/GraphQL Consumption", "Dynamic Filtering & Pagination"],
    icon: _sfc_main$2,
    textColor: "text-electric-purple"
  },
  {
    title: "Creative Tech Problem Solving",
    description: "Whether the brief is loose, messy, or deeply complex\u2014I break it down and get it working. From branding launches to press strategies, I bring a cross-disciplinary mindset shaped by years of managing communications, PR, and digital systems across mission-driven orgs and creative teams.",
    points: ["Systems Thinking", "Cross-Channel Coordination", "Project Management", "Rapid Prototyping", "Technical & Strategic Advising"],
    textColor: "text-lime-glow",
    icon: _sfc_main$1
  }
];
const _sfc_main = {
  __name: "Offerings",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap: gsap } = useNuxtApp();
    const { width } = useWindowSize();
    width.value > 778;
    const heading = ref(null);
    const section = ref(null);
    const offeringRefs = ref([]);
    const store = useMainStore();
    const isDesktop = ref(false);
    const triggers = [];
    const timelines = [];
    function clearAllAnimations() {
      triggers.forEach((t) => t == null ? void 0 : t.kill());
      timelines.forEach((tl) => tl == null ? void 0 : tl.kill());
      triggers.length = 0;
      timelines.length = 0;
      nextTick(() => {
        offeringRefs.value.forEach((card) => {
          gsap.set(card, { clearProps: "all" });
          const listContent = card.querySelector(".list-content");
          gsap.set(listContent, { clearProps: "all" });
          const overlayPaths = card.querySelectorAll(".icon-wipe-overlay path");
          overlayPaths.forEach((path) => {
            path.style.strokeDashoffset = path.style.strokeDasharray = 0;
          });
        });
      });
    }
    async function offeringsDesktop() {
      if (!store.ready || store.reduceMotion) return;
      offeringRefs.value.forEach(async (card, index) => {
        await nextTick();
        const { textColor } = offerings[index];
        const baseIcon = card.querySelector(".text-current");
        const listContent = card.querySelector(".list-content");
        const cardBorder = card.querySelector(".card-border");
        const overlayIcon = card.querySelector(".icon-wipe-overlay");
        const iconBTN = card.querySelector(".icon-btn");
        const cardHeader = card.querySelector("h3");
        const cardP = card.querySelector("p");
        const cardListings = card.querySelectorAll(".listings li");
        const cardHeaderAnim = new PlaceholderJS(cardHeader, { manual: true, speed: 2 });
        const cardPAnim = new PlaceholderJS(cardP, { manual: true, speed: 0.5 });
        if (!baseIcon || !overlayIcon) return;
        const overlayPaths = overlayIcon.querySelectorAll("path");
        overlayPaths.forEach((path) => {
          const len = path.getTotalLength();
          path.style.strokeDasharray = len;
          path.style.strokeDashoffset = len;
        });
        const entryTL = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }).timeScale(1.5);
        entryTL.fromTo(card, { autoAlpha: 0 }, {
          autoAlpha: 1,
          ease: "power1.out",
          duration: 0.3,
          onComplete: () => cardBorder.classList.add("animate")
        }, "+=0.5");
        entryTL.fromTo(iconBTN, {
          scale: 1,
          autoAlpha: 0
        }, {
          scale: 1.15,
          autoAlpha: 0.8,
          duration: 0.3
        }, "-=0.5").fromTo(overlayIcon, {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          duration: 0.3
        }, "-=0.5").to(overlayPaths, {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.05
        }, "+=0.3");
        if (isDesktop.value) {
          entryTL.fromTo(listContent, { x: 0 }, {
            x: 145,
            duration: 0.5,
            ease: "back.out(0.9)"
          }, "-=0.3");
        }
        entryTL.call(() => {
          cardHeaderAnim.play();
          cardPAnim.play();
        }, null, 0);
        entryTL.fromTo(cardP, { autoAlpha: 1 }, {
          autoAlpha: 0.8,
          ease: "power1.out",
          duration: 0.3
        }, "-=0.2");
        entryTL.fromTo(cardListings, {
          autoAlpha: 0,
          y: -40
        }, {
          autoAlpha: 1,
          ease: "back.out(0.9)",
          y: 0,
          duration: 0.3,
          stagger: 0.15
        }, "+=0.2");
        timelines.push(entryTL);
        const trigger = ScrollTrigger.create({
          trigger: card.querySelector(".sentry"),
          start: "top 65%",
          end: "bottom 24%",
          onEnter: () => {
            iconBTN.classList.add("wobble-ver-right-scale");
            card.classList.add(textColor);
          },
          onEnterBack: () => {
            iconBTN.classList.add("wobble-ver-right-scale");
            card.classList.add(textColor);
          },
          onLeaveBack: () => {
            iconBTN.classList.remove("wobble-ver-right-scale");
            card.classList.remove(textColor);
          },
          onLeave: () => {
            iconBTN.classList.remove("wobble-ver-right-scale");
            card.classList.remove(textColor);
          }
        });
        triggers.push(trigger);
      });
      ScrollTrigger.refresh();
    }
    function headingTrigger() {
      const headingEl = heading.value;
      const offeringsEl = section.value;
      const headingAnim = new PlaceholderJS(headingEl, { manual: true, speed: 2 });
      const trigger = ScrollTrigger.create({
        trigger: offeringsEl,
        start: "top 85%",
        end: "bottom 44%",
        onEnter: () => headingAnim.play(),
        onLeaveBack: () => {
          var _a;
          return (_a = headingAnim.getTimeline()) == null ? void 0 : _a.progress(1).reverse();
        }
      });
      triggers.push(trigger);
    }
    watch(
      () => store.ready,
      async (ready) => {
        if (!ready || store.reduceMotion) return;
        await nextTick();
        headingTrigger();
        await offeringsDesktop();
      },
      { immediate: true }
    );
    watch(
      () => store.reduceMotion,
      async (rm) => {
        clearAllAnimations();
        if (!rm && store.ready) {
          await nextTick();
          headingTrigger();
          await offeringsDesktop();
        }
      },
      { immediate: true }
    );
    watch(width, async (newWidth) => {
      const desktopNow = newWidth > 772;
      if (desktopNow !== isDesktop.value) {
        isDesktop.value = desktopNow;
        if (!store.reduceMotion && store.ready) {
          clearAllAnimations();
          await nextTick();
          headingTrigger();
          await offeringsDesktop();
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "offerings",
        ref_key: "section",
        ref: section,
        class: "transition duration-700 py-25 bg-primary/5 dark:bg-background/5 motionless:bg-primary/95 overflow-x-clip motionless:text-background"
      }, _attrs))}><div class="max-w-[1440px] mx-auto px-8 lg:px-12"><h2 class="mb-12 text-3xl font-bold text-center md:text-4xl font-heading placeholder-line md:text-left" data-splitting="words">I want to help</h2><div class="flex flex-col gap-10"><!--[-->`);
      ssrRenderList(unref(offerings), (item, index) => {
        _push(`<div class="offering-card"><div class="sentry"></div><div class="relative flex flex-col items-center gap-6 pb-4 transition-all duration-700 lg:gap-12 md:flex-row">`);
        if (item.icon) {
          _push(`<div class="icon-btn relative w-24 h-24 group min-w-[120px] opacity-0 md:absolute md:top-2 delay-200 motionless:md:relative motionless:opacity-100">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "absolute inset-0 z-0 w-full h-full text-current opacity-0" }, null), _parent);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
            class: ["absolute inset-0 z-10 w-full h-full transition-all duration-700 opacity-0 icon-wipe-overlay motionless:opacity-100", item.textColor]
          }, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-center list-content md:text-left md:max-w-4/5"><h3 class="font-semibold opacity-0 text-1xl md:text-2xl md:mb-2 placeholder-line" data-splitting="words">${ssrInterpolate(item.title)}</h3><p class="leading-relaxed opacity-0 text-md md:text-base placeholder-line" data-splitting="words">${ssrInterpolate(item.description)}</p><ul class="flex flex-wrap justify-center mt-4 text-sm list-disc list-inside opacity-70 md:flex-col listings"><!--[-->`);
        ssrRenderList(item.points, (point, i) => {
          _push(`<li class="mr-2 opacity-0 motionless:opacity-100"><span class="-ml-2">${ssrInterpolate(point)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div><div class="${ssrRenderClass([{ "hidden": index === unref(offerings).length - 1 }, "card-border swing-in-left-fwd-slow h-[2px] bg-current/20 transition duriation-900 mt-4 opacity-0 motionless:opacity-100"])}"></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contexts/Offerings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Offerings-bdGp7NUC.mjs.map
