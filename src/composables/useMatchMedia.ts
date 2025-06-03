import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export function useMatchMedia(setupFn) {
  onMounted(async () => {
    await nextTick()
    const mm = gsap.matchMedia()
    nextTick(() => {
      mm.add({
        isDesktop: '(min-width: 1024px)',
        isTablet:  '(max-width: 1023px) and (min-width: 778px)',
        isMobile:  '(max-width: 777px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      }, context => {
        if (context.conditions.reduceMotion) return
        const cleanup = setupFn(context)
        return () => {
          cleanup?.()
          mm.revert()
          ScrollTrigger.getAll().forEach(st => st.kill())
        }
      })
    })
  })
}
