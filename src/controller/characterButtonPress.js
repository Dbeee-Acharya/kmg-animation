// logic for when character is choosen
import { createMainPage } from "../view/createMainPage";

function chooseCharacter(character) {
  const mainWrapper = document.querySelector(".main-wrapper");
  const buttonWrapper = document.querySelector(".character-buttons-wrapper");

  mainWrapper.classList.add("hide");
  buttonWrapper.remove();

  setTimeout(() => {
    createMainPage(character);
    mainWrapper.classList.remove("hide");
  }, 3000);
}

export { chooseCharacter };
