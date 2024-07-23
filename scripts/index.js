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

document.addEventListener("DOMContentLoaded", () => {
  progressiveLoad();
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
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  document.documentElement.dataset.scroll = window.scrollY / totalHeight;
};

document.addEventListener("scroll", debounce(storeScroll), { passive: true });

storeScroll();
