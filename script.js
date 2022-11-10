const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const video = document.querySelector("video");

video.addEventListener("play", () => {
  function step() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
});