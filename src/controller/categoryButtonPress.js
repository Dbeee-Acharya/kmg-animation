//behaviour for when category button is clicked
import { createMainPage } from "../view/createMainPage";

const categoryButtonEvent = () => {
  const buttons = document.querySelectorAll(".categories");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => categoryButtonClicked(e));
  });
};

const categoryButtonClicked = (e) => {
  const manCharacter = document.querySelector(".man");
  const womanCharacter = document.querySelector(".woman");

  if (manCharacter != null) {
    const buttonId = e.srcElement.id;
    console.log(buttonId.slice(-1));

    const mainWrapper = document.querySelector(".main-wrapper");
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    const sprite = document.querySelector(".sprite");
    sprite.remove();

    mainWrapper.classList.add("hide");
    setTimeout(() => {
      swiperWrapper.textContent = "";
      createMainPage("man");

      setTimeout(() => {
        mainWrapper.classList.remove("hide");
      }, 200);
    }, 1500);
  } else if (womanCharacter != null) {
    const buttonId = e.srcElement.id;
    console.log(buttonId.slice(-1));

    const mainWrapper = document.querySelector(".main-wrapper");
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    const sprite = document.querySelector(".sprite");
    sprite.remove();

    mainWrapper.classList.add("hide");
    setTimeout(() => {
      swiperWrapper.textContent = "";
      createMainPage("woman");

      setTimeout(() => {
        mainWrapper.classList.remove("hide");
      }, 200);
    }, 1500);
  }
};

export { categoryButtonEvent };
