function AutoPlay() {
  AutoPlay.prototype.run = (el) => {
    if (!el.muted) {
      el.muted=true;
    }
    el.play();
  };
}

export default AutoPlay;
