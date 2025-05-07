import Splitting from 'splitting';
import gsap from 'gsap';

export function effectTimeline(target) {
    const split = Splitting({ target, by: 'chars' })[0];
    const chars = split.chars;
  
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      chars,
      {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-40, 0),
        autoAlpha: 0,
      },
      {
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'power3.out',
        duration: 0.5,
        stagger: {
          amount: 0.2,
          from: 'random',
        },
      }
    );
    return tl;
  }