export default class videoHandler {
  constructor(video) {
    this.video = video;
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.loop = true;
    this.loaded = false;
    if (typeof Hls === 'undefined') {
      setTimeout(() => this.load(), 100);
      return;
    }
    this.load(); 
  }

  load() {
    const src = this.video.dataset.src;
    if (!src || this.video.src) return;

    if (typeof Hls !== 'undefined' && Hls.isSupported()) {
      this.hls = new Hls();
      this.hls.loadSource(src);
      this.hls.attachMedia(this.video);
    } else if (this.video.canPlayType('application/vnd.apple.mpegurl')) {
      this.video.src = src;
    }

    this.video.muted = true;
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
