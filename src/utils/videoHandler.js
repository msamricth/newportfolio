export default class videoHandler {
  constructor(video) {
    this.video = video;
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.loop = true;
    this.loaded = false;
    this.init()
  }
  async init() {
    if (!window.Hls) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = '/js/hls.js';
        s.onload = () => {
          if (window.Hls) resolve();
          else reject(new Error('Hls failed to load'));
        };
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
  
    if (window.Hls && window.Hls.isSupported()) {
      this.hls = new window.Hls();
    } else {
      this.hls = null;
    }
    this.load();
  }
  
  load() {
    const src = this.video.dataset.src;
    if (!src || this.video.src) return;

    if (typeof Hls !== 'undefined' && Hls.isSupported()) {
      this.hls.loadSource(src);
      this.hls.attachMedia(this.video);
    } else if (this.video.canPlayType('application/vnd.apple.mpegurl')) {
      this.video.src = src;
    }

    this.video.dataset.loaded = 'true';
    this.loaded = true;
  }

  async play() {
    if (!this.video) return;
    if (!this.loaded) this.load();

    const tryPlay = () => {
      this.video.play().catch(() => {
        setTimeout(tryPlay, 100);
      });
    };

    if (this.video.readyState >= 2) {
      tryPlay();
    } else {
      this.video.addEventListener('loadeddata', tryPlay, { once: true });
    }
  }

  pause() {
    if (this.video.readyState >= 2) {
      this.video.pause();
    } else {
      this.video.addEventListener('loadeddata', () => {
        this.video.pause();
      }, { once: true });
    }
  }
}
