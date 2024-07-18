console.log("JavaScript loaded successfully!");

function getStartedButton() {
  window.location.href = "pages/form";
}

document.addEventListener("DOMContentLoaded", () => {
  const progressiveImages = document.querySelectorAll(".progressive");
  progressiveImages.forEach((progressiveDev) => {
    const progressiveImage = progressiveDev.querySelector("img");
    if (progressiveImage.complete) {
      progressiveDev.classList.add("loaded");
      progressiveDev.style.filter = "blur(0)";
    } else
      progressiveImage.addEventListener("load", () => {
        progressiveDev.classList.add("loaded");
        progressiveDev.style.filter = "blur(0)";
      });
  });

  let playButton = document.getElementById("play-btn");
  let video = document.getElementById("video");
  playButton.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      video.controls = true;
      playButton.style.display = "none";
    } else {
      video.pause();
    }
  });
  video.addEventListener("ended", () => {
    playButton.style.display = "flex";
    video.controls = false;
    document.exitFullscreen();
  });
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
