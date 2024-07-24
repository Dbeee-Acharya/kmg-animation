// logic for when character is choosen
import { createMainPage } from "../view/createMainPage";
import { createWelcomeGate } from "../view/welcomePage";
import { createSprite } from "../view/createSprite";

function chooseCharacter(character) {
  const mainWrapper = document.querySelector(".main-wrapper");
  const buttonWrapper = document.querySelector(".character-buttons-wrapper");

  mainWrapper.classList.add("hide");
  buttonWrapper.remove();
  setTimeout(() => {
    //createMainPage(character);
    createWelcomeGate();
    createSprite("woman");
    setTimeout(() => {
      mainWrapper.classList.remove("hide");
    }, 200);
  }, 1500);
}

export { chooseCharacter };
