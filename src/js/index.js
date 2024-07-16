console.log("JavaScript loaded successfully!");

function getStartedButton() {
  console.log("Getting started button clicked!");
}

document.addEventListener("DOMContentLoaded", function (e) {
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
