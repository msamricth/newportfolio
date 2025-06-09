// useMatchMedia.ts
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useMatchMedia(setupFn) {
  let mm: gsap.core.MatchMedia | null = null

  onMounted(async () => {
    await nextTick()
    mm = gsap.matchMedia()

    await nextTick()

    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
        isTablet: '(max-width: 1023px) and (min-width: 778px)',
        isMobile: '(max-width: 777px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isDesktop, isTablet, isMobile, reduceMotion } = context.conditions

        if (reduceMotion) {
          return () => {
          }
        }

        const cleanup = setupFn({ isDesktop, isTablet, isMobile })
        return () => {
          if (typeof cleanup === 'function') {
            cleanup()
          }
        }
      }
    )
  })

  onBeforeUnmount(() => {
    if (mm) {
      mm.revert()
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  })
}
