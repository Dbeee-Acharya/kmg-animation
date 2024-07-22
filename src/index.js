import "./style.scss";
import { chooseCharacterButtons } from "./view/chooseCharacter";
import { chooseCharacter } from "./controller/characterButtonPress";

const mainWrapper = document.querySelector(".main-wrapper");
mainWrapper.appendChild(chooseCharacterButtons());

const manButton = document.getElementById("man-button");
const womanButton = document.getElementById("woman-button");

manButton.addEventListener("click", () => {
  chooseCharacter("man");
});

womanButton.addEventListener("click", () => {
  chooseCharacter("woman");
});
