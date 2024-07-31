function prepareDemoVideo() {
  let playButton = document.getElementById("play-button");
  let video = document.getElementById("demo_video");

  if (!(playButton && video)) return;

  playButton.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      video.controls = true;
      playButton.style.visibility = "hidden";
    } else {
      video.pause();
    }
  });

  video.addEventListener("ended", () => {
    playButton.style.visibility = "visible";
    video.controls = false;
    document.exitFullscreen();
  });
}

prepareDemoVideo();
