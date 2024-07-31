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

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function round(val, digits) {
  let place = 10 ** digits;
  return Math.round(val * place) / place;
}

const storeScroll = () => {
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  let scroll = window.scrollY / totalHeight;

  scroll = clamp(scroll, 0, 1);

  scroll = round(scroll, 2);

  document.documentElement.dataset.scroll = scroll;
};

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

document.addEventListener("scroll", debounce(storeScroll), { passive: true });

progressiveLoad();

storeScroll();
