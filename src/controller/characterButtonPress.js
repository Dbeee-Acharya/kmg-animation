// logic for when character is choosen
import { createWelcomeGate } from "../view/welcomePage";
import { createStreetLamp } from "../view/createCategoryButtons";

function chooseCharacter(character) {
  const mainWrapper = document.querySelector(".main-wrapper");
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const buttonWrapper = document.querySelector(".character-buttons-wrapper");

  mainWrapper.classList.add("hide");
  buttonWrapper.remove();
  setTimeout(() => {
    //createMainPage(character);
    createWelcomeGate(character);

    swiperWrapper.appendChild(createStreetLamp());

    setTimeout(() => {
      mainWrapper.classList.remove("hide");
    }, 200);
  }, 1500);
}

export { chooseCharacter };
