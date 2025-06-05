import { nextTick } from 'vue'

export async function useSmoothScroll(duration = 500, buffer = 100) {
    console.log('fired')
  await nextTick()

  const el = await new Promise<HTMLElement|null>(resolve => {
    const start = Date.now()
    const id    = setInterval(() => {
      const found = document.getElementById('nav')
      if (found || Date.now() - start > 500) {
        clearInterval(id)
        resolve(found)
      }
    }, 50)
  })
  console.log(el)
  if (!el) return

  const startY   = window.scrollY
  const targetY  = el.getBoundingClientRect().top + startY - buffer
  const distance = targetY - startY
  let startTime: number | null = null

  const ease = (t: number) =>
    t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2

  function step(ts: number) {
    if (!startTime) startTime = ts
    const elapsed = ts - startTime
    const pct     = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * ease(pct))
    if (elapsed < duration) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
