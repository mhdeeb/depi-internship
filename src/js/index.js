console.log("JavaScript loaded successfully!");

function getStartedButton() {
  console.log("Getting started button clicked!");
}

document.addEventListener("DOMContentLoaded", function (e) {
  const progressiveImages = document.getElementsByClassName(
    "progressive-replace"
  );

  for (const progressiveImage of progressiveImages) {
    progressiveImage.addEventListener("load", () => {
      const target = progressiveImage.nextElementSibling;
      target.src = progressiveImage.src;
      target.classList.add("progressive-reveal");
    });
  }
});
