import { nextTick } from 'vue'
import gsap from 'gsap'
import PlaceholderJS from './placeholder.js'

type TextAnimOptions = {
  toggleActions?: string
  manual?: boolean
  linkedTL?: Timeline | null
}

export default class textAnim {
  private el: HTMLElement | null
  private manual: boolean
  private toggleActions: string
  private timeline: Timeline | null = null
  private linkedTL: Timeline | null

  constructor(el: HTMLElement | { $el?: HTMLElement } | { value?: HTMLElement }, opts: TextAnimOptions = {}) {
    this.el = (el as any)?.$el || (el as any)?.value || el || null
    this.manual = opts.manual ?? false
    this.toggleActions = opts.toggleActions ?? 'play none none none'
    this.linkedTL = opts.linkedTL ?? '';
  }

  init(): Timeline | null {
    const el = this.el
    if (!el || typeof el.querySelector !== 'function') return null
    const h = el.querySelector('h4.placeholder-line')
    const h5 = el.querySelector('h5.placeholder-line')
    const p = el.querySelector('p.placeholder-line')
    const btn = el.querySelector('.btn')
    const items = el.querySelectorAll('.list-disc li')
    const tagEls = el.querySelectorAll('.tags')

    const tl = this.linkedTL 
    ?
    this.linkedTL : 
    gsap.timeline(
      this.manual
        ? { paused: true }
        : {
            scrollTrigger: {
              trigger: el,
              id: 'sectionST',
              start: 'top 40%',
              end: 'bottom 90%',
              toggleActions: this.toggleActions,
            },
          }
    )
    if(tl.reversed()){ tl.timeScale(5)} else {tl.timeScale(1);}
    tl.addLabel('header')
    if (h) {
      tl.add(() => this._playPH(h), 'header')
      tl.fromTo(h, { y: 40 }, { y: 0, ease: 'power3.out', duration: 0.3 }, 'header+=0.05')
    }

    tl.addLabel('ph', 'header+=0.2')
    if (p) {
      tl.add(() => this._playPH(p), 'ph')
      tl.fromTo(p, { y: 40 }, { opacity: 1, y: 0, ease: 'power3.out', duration: 0.3 }, 'ph+=0.05')
    }


    let toll = ''
    tl.addLabel('items', 'h5+=0.2')
    items.forEach((item, i) => {
      tl.add(() => this._playPH(item), `items+=${i * 0.15}`)
      tl.fromTo(item, { y: 20 }, { y: 0, ease: 'power3.out', duration: 0.2 }, `items+=${i * 0.15 + 0.4}`)
      toll = `items+=${i * 0.15}`
    })

    tl.addLabel('h5buffer', toll)
    tl.addLabel('h5', 'h5buffer+=0.65')
    if (h5) {
      tl.add(() => this._playPH(h5), 'h5')
      tl.fromTo(h5, { y: 40 }, { y: 0, ease: 'power3.out', duration: 0.3 }, 'h5+=0.05')
    }
    tl.addLabel('tags', 'h5+=0.15')
    tagEls.forEach((tag, i) => {
      tl.fromTo(tag, { y: 20, autoAlpha:0 }, { y: 0, autoAlpha:1, duration: 0.25, ease: 'power2.out' }, `tags+=${i * 0.15}`)
      toll = `tags+=${i * 0.15 + 0.6}`
    })

    if (btn) {
      tl.addLabel('precta', toll)
      tl.addLabel('cta', 'precta+=1')
      tl.fromTo(
        btn,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.3 },
        'cta+=0.5'
      )
    }

    this.timeline = tl
    return tl
  }
  private _playPH(el: Element) {
    const anim = new PlaceholderJS(el, { manual: true, speed: 0.6 }).getTimeline()
    if (anim && !this.timeline?.reversed()) anim.play(0)
  }

  play(position?: number | string): void {
    if (typeof position !== 'undefined') {
        this.timeline?.play(position)
      } else {
        this.timeline?.play()
      }
  }

  pause(): void {
    this.timeline?.pause()
  }

  reverse(position?: number | string): void {
    if (typeof position !== 'undefined') {
      this.timeline?.reverse(position)
    } else {
      this.timeline?.reverse()
    }
  }

  seek(position: number | string): void {
    this.timeline?.seek(position)
  }

  getTimeline(): Timeline | null {
    return this.timeline
  }
}
