import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";

const burger = document.querySelector(".burger");

burger.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("burger_active");
  document.body.classList.toggle("_lock");

  const main = document.querySelector(".header__main");
  if (main) {
    main.classList.toggle("_active");
  }
});

const playVideo = document.querySelector(".customer__video .video-play");
const video = document.querySelector(".customer__video video");

playVideo.addEventListener("click", () => {
  video.play();
  video.setAttribute("controls", "controls");
  document.querySelector(".customer__video").classList.add("overlay-hidden");
  playVideo.classList.add("video-play_hidden");
});
