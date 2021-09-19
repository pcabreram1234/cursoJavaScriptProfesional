import MediaPlayer from "./classes/MediaPlayer";
import AutoPlay from "./classes/plugins/AutoPlay";
const video = document.querySelector("video");
const button = document.querySelector("#playButton");
const mutedButton = document.querySelector("#muteButton");
const player = new MediaPlayer({ el: video, plugins: [/* new AutoPlay(video) */] });

button.onclick = () => player.toggle();
mutedButton.onclick = () => player.setMuted();
