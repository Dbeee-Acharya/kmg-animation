import { createMainPage } from "../view/createMainPage";
import { streetLampInteraction } from "./streetLampInteraction";

const welcomeGateInteraction = (character) => {
  const spritePosition = document
    .querySelector(".sprite")
    .getBoundingClientRect().left;

  const gatePosition = document
    .querySelector(".gate-container")
    .getBoundingClientRect().left;

  if (spritePosition == gatePosition) {
    streetLampInteraction();
  }
};

export { welcomeGateInteraction };
