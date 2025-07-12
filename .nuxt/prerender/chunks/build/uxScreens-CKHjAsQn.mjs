import { gsap } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/gsap/dist/gsap.js';
import { D as DrawSVGPlugin } from '../_/DrawSVGPlugin.mjs';

function buildUXTL(container) {
  const scope = container;
  if (!container) return;
  gsap.registerPlugin(DrawSVGPlugin);
  const tl = gsap.timeline();
  const secondarytl = gsap.timeline({ paused: true });
  (void 0).querySelector(".hero-wrapper");
  const uxScreens = scope.querySelector(".ux-screens");
  const allLines = scope.querySelectorAll(".line");
  const allShapes = scope.querySelectorAll(".shape");
  const allShapesPaths = scope.querySelectorAll("path.shape");
  const allShapesG = scope.querySelectorAll("g.shape path");
  const bgScreens = scope.querySelectorAll(".background-screens");
  scope.querySelectorAll("#phone-lineart");
  scope.querySelectorAll("#phone-menu-bg");
  const phoneScreen = scope.querySelectorAll("#phone");
  const logo = scope.querySelectorAll("#phone-logo");
  const phoneGear = scope.querySelectorAll("#phone-gear");
  const phoneGearPaths = scope.querySelectorAll("#phone-gear path");
  const phoneMenuBtn = scope.querySelectorAll("#phone-menu-btn");
  const phoneOutline = scope.querySelectorAll("#phone-outline");
  const phoneMenuPaths = scope.querySelectorAll("#phone-menu path");
  const phoneContentPaths = scope.querySelectorAll("#phone-content path");
  const phoneMenuOutline = scope.querySelectorAll("#phone-menu-outline");
  const phoneMenuItems = scope.querySelectorAll("#phone-menu-items");
  const phoneSeperator = scope.querySelectorAll("#phone-seperator");
  const phoneSquare = scope.querySelectorAll("#phone-square");
  const phoneCircle = scope.querySelectorAll("#phone-circle");
  const phoneSqiggles = scope.querySelectorAll("#phone-sqiggles");
  tl.timeScale(1.3);
  if (bgScreens.length) {
    bgScreens.forEach((icon, i) => {
      const lines = icon.querySelectorAll(".line");
      const shapes = icon.querySelectorAll(".shape");
      if (shapes.length) {
        secondarytl.fromTo(
          Array.from(shapes),
          { y: -10, filter: "blur(40px)", autoAlpha: 0 },
          {
            y: 0,
            filter: "none",
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.25,
            ease: "elastic.out(0.9)"
          },
          i * 0.4
        );
      }
      if (lines.length) {
        secondarytl.fromTo(
          Array.from(lines),
          { drawSVG: "0%", autoAlpha: 0 },
          {
            drawSVG: "100%",
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.1
          },
          i * 0.4
        );
      }
    });
  }
  tl.set(allLines, {
    drawSVG: "0%",
    autoAlpha: 0,
    stagger: 0,
    duration: 0
  });
  tl.set(allShapes, {
    y: -10,
    filter: "blur(40px)",
    autoAlpha: 0,
    stagger: 0,
    duration: 0
  });
  tl.set(phoneScreen, {
    clearProps: "width"
  });
  tl.set(bgScreens, {
    autoAlpha: 0.4
  });
  tl.set(phoneSquare, { drawSVG: "0%", duration: 0 });
  tl.set(phoneGear, {
    autoAlpha: 1,
    x: "-220px",
    rotation: 0,
    transformOrigin: "center center"
  });
  gsap.set(
    [
      logo,
      phoneGear,
      phoneMenuBtn,
      phoneOutline,
      phoneMenuPaths,
      phoneContentPaths
    ],
    { autoAlpha: 0 }
  );
  gsap.set(
    [
      phoneGearPaths,
      phoneMenuBtn,
      phoneOutline,
      phoneMenuPaths,
      phoneContentPaths
    ],
    { drawSVG: "0%" }
  );
  tl.addLabel("PhoneStart", "introFinishing+=1.2");
  tl.to(uxScreens, {
    autoAlpha: 1,
    duration: 0.3,
    ease: "power3.out"
  }, "PhoneStart");
  tl.addLabel("phoneLogo", "PhoneStart");
  tl.to(logo, {
    autoAlpha: 1,
    scale: 3,
    transformOrigin: "50% 50%",
    ease: "bounce.out",
    duration: 1.2
  }, "phoneLogo").to(logo, { scale: 1, duration: 0.6 }, "phoneLogo+=0.6");
  tl.addLabel("gearIn").set(phoneGear, { x: -150, y: 0, autoAlpha: 1 }).to(phoneGearPaths, { drawSVG: "100%", duration: 0.8 }, "gearIn").to(
    phoneGear,
    {
      x: 0,
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 1
    },
    "gearIn+=0.2"
  ).to(phoneOutline, { autoAlpha: 1 }, "gearIn+=0.4").to(phoneOutline, { drawSVG: "100%", duration: 1 }, "gearIn+=0.4").to(phoneMenuBtn, { autoAlpha: 1 }, "gearIn+=0.6").to(phoneMenuBtn, { drawSVG: "100%", duration: 0.6 }, "gearIn+=0.6");
  tl.addLabel("content").to(phoneContentPaths, {
    autoAlpha: 1,
    drawSVG: "100%",
    stagger: 0.2,
    duration: 0.5
  }, "content");
  tl.addLabel("press").to(phoneMenuBtn, {
    y: 4,
    scaleY: 0.9,
    transformOrigin: "50% 50%",
    attr: { fill: "#A66EFF" },
    duration: 0.1,
    yoyo: true,
    repeat: 1
  }, "press").to(
    phoneContentPaths,
    { y: 100, autoAlpha: 0, duration: 0.4, ease: "back.inOut(0.7)" },
    "press+=0.2"
  ).fromTo(
    phoneMenuOutline,
    { autoAlpha: 0, drawSVG: "0%" },
    { autoAlpha: 1, drawSVG: "100%", duration: 1 },
    "press+=0.6"
  ).call(
    () => {
      secondarytl.play(0);
    },
    null,
    "press+=0.6"
  ).to(
    phoneMenuItems,
    { autoAlpha: 1, drawSVG: "100%", duration: 0.6, stagger: 0.1 },
    "press+=0.8"
  ).to(phoneSeperator, { autoAlpha: 1, drawSVG: "100%", duration: 0.3 }, "press+=1").to(
    bgScreens,
    {
      autoAlpha: 1,
      duration: 0.4,
      ease: "power1.out"
    },
    "press+=1.2"
  ).to(phoneSquare, { autoAlpha: 1, drawSVG: "100%", duration: 0.3 }, "press+=1.4").to(
    phoneSquare,
    { rotation: 45, transformOrigin: "50% 50%", duration: 0.4 },
    "press+=1.8"
  ).to(phoneCircle, { autoAlpha: 1, drawSVG: "100%", duration: 0.3 }, "press+=1.8").to(
    phoneCircle,
    { rotation: 360, transformOrigin: "50% 50%", duration: 0.4 },
    "press+=2.2"
  ).to(
    phoneSqiggles,
    { autoAlpha: 1, drawSVG: "100%", duration: 0.3 },
    "press+=2.2"
  ).to(
    phoneSqiggles,
    { drawSVG: "50%", yoyo: true, repeat: 1, duration: 0.3 },
    "press+=2.5"
  );
  tl.addLabel("lineartStart", "press+=0.6").to(
    phoneScreen,
    { y: 40, repeat: 2, yoyo: true, duration: 0.8 },
    "lineartStart+=2.25"
  ).to(
    phoneScreen,
    { y: 1e3, x: -100, duration: 1.5, ease: "back.inOut(0.7)" },
    "lineartStart+=2.6"
  ).to(
    phoneScreen,
    { width: 0, duration: 0.5, ease: "power1.out" },
    "lineartStart+=3"
  ).to(
    allLines,
    {
      attr: { stroke: "#33D6BB" },
      duration: 0.3,
      stagger: 0.05,
      ease: "power1.out"
    },
    "lineartStart+=3.4"
  ).to(
    allLines,
    {
      attr: { stroke: "#E2556C" },
      duration: 0.3,
      stagger: 0.05,
      ease: "power1.out"
    },
    "lineartStart+=3.8"
  ).to(
    allShapesG,
    {
      attr: { fill: "#E2556C" },
      duration: 0.3,
      stagger: 0.05,
      ease: "power1.out"
    },
    "lineartStart+=3.8"
  ).to(
    allShapesPaths,
    {
      attr: { fill: "#E2556C", stroke: "#E2556C" },
      rotate: 360,
      duration: 0.5,
      stagger: 0.05,
      transformOrigin: "center",
      ease: "power1.out"
    },
    "lineartStart+=4"
  );
  tl.to(
    [bgScreens[0], bgScreens[2]],
    { y: 1e3, duration: 1, stagger: 0.05 },
    `lineartStart+=4.5`
  );
  tl.to(
    [bgScreens[1], bgScreens[3]],
    { y: -1e3, duration: 1, stagger: 0.05 },
    `lineartStart+=4.5`
  );
  return tl;
}

export { buildUXTL };
//# sourceMappingURL=uxScreens-CKHjAsQn.mjs.map
