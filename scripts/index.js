console.log("JavaScript loaded successfully!");

function progressiveLoad() {
  const progressiveImages = document.querySelectorAll(".progressive");

  progressiveImages.forEach((progressiveBlock) => {
    function load() {
      progressiveBlock.classList.add("progressive--loaded");
    }

    const progressiveImage = progressiveBlock.querySelector("img");

    if (!progressiveImage) return;

    if (progressiveImage.complete) load();
    else progressiveImage.addEventListener("load", load);
  });
}

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

document.addEventListener("DOMContentLoaded", () => {
  progressiveLoad();

  prepareDemoVideo();
});

const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener("scroll", debounce(storeScroll), { passive: true });

storeScroll();
