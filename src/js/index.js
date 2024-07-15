console.log("JavaScript loaded successfully!");

function getStartedButton() {
  console.log("Getting started button clicked!");
}

document.addEventListener("DOMContentLoaded", function (e) {
  const progressiveImages =
    document.getElementsByClassName("progressive-after");

  for (const progressiveImage of progressiveImages) {
    progressiveImage.addEventListener("load", () => {
      progressiveImage.get
      progressiveImage.classList.add("progressive-reveal");
    });
  }
});
