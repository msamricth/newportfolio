import { createApp } from 'vue'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import './style.css'
import App from './App.vue'


import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

createApp(App).mount('#app')

gsap.registerPlugin(ScrollTrigger);
class PlaceholderAnimator {
    constructor(el, {
      start     = 'top 90%',
      end       = 'top top',
      stagger   = 0.05,
      fadeDur   = 0.3,
      textDur   = 0.4,
      placeholderClass = 'placeholder'
    } = {}) {
      this.el     = el;
      this.opts   = { start, end, stagger, fadeDur, textDur };
      this.phClass = placeholderClass;
      this._split();
      this._injectPlaceholders();
      this._buildTimeline();
    }
  
    _split() {
      // Splitting returns an array of { el, words, chars, lines } for each target
      const results = Splitting({ target: this.el, by: 'words' });
      // find the one matching our element
      const res = results.find(r => r.el === this.el);
      this.words = res.words;  // array of <span class="word">…
    }
  
    _injectPlaceholders() {
      this.placeholders = this.words.map(word => {
        const ph = document.createElement('span');
        ph.classList.add(this.phClass);
        word.appendChild(ph);
        return ph;
      });
    }
  
    _buildTimeline() {
      const { start, end, stagger, fadeDur, textDur } = this.opts;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.el,
          start,
          end,
          toggleActions: 'play reverse play reverse',
          onUpdate: self => {
            // Speed up reverse direction
            tl.timeScale(self.direction === -1 ? 2.5 : 1); // 2.5x faster when scrolling up
          }
        }
      })
      // 1) fade them all in
      .fromTo(this.placeholders,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: fadeDur, stagger }
      )
      // mark the swap point
      .addLabel('swap')
      // 2a) fade placeholder out OR 2b) fade word in, in lock‑step
      .to(this.placeholders,
        { autoAlpha: 0, duration: fadeDur, stagger },
        'swap'
      )
      .fromTo(this.words,
        { color: 'transparent' },
        { color: 'currentColor', duration: textDur, stagger },
        'swap'
      );
    }
  }
  
  // on DOM ready, instantiate for each line:
  document.querySelectorAll('.placeholder-line').forEach(el => {
    new PlaceholderAnimator(el);
  });