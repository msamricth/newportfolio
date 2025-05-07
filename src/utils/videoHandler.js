export default class videoHandler {
    constructor(video) {
        this.video = video;
        this.video.muted = true;
        this.video.playsInline = true;
        this.video.loop = true;

        if (Hls.isSupported()) {
            this.hls = new Hls();
            this.hls.loadSource(video.dataset.src);
            this.hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = video.dataset.src;
        }
    }

  load() {
    const src = this.video.dataset.src;
    if (!src || this.video.src) return;
    this.loaded = true;

    if (Hls.isSupported()) {
      this.hls = new Hls();
      this.hls.loadSource(src);
      this.hls.attachMedia(this.video);
    } else {
      this.video.src = src;
    }

    this.video.muted = true;
    this.loaded = true;
  }

  async play() {
    if (!this.video) return;

    this.video.muted = true;
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
      this.video.addEventListener(
        'loadeddata',
        () => {
          this.video.pause();
        },
        { once: true }
      );
    }
  }
}
