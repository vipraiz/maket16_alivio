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
