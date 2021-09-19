function AutoPlay() {
  AutoPlay.prototype.run = (el) => {
    el.muted();
    el.play();
  };
}

export default AutoPlay;
