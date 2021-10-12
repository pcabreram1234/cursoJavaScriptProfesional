export default class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  initPlugins() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        if (value === true) {
          this.media.muted = true;
        } else {
          this.media.muted = false;
        }
      },
    };

    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  toggle() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  muted() {
    this.media.muted === true;
  }

  setMuted() {
    if (this.media.muted === false) {
      this.media.muted = true;
    } else {
      this.media.muted = false;
    }
  }
}
