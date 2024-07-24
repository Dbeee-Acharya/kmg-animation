import { createMainPage } from "../view/createMainPage";

const welcomeGateInteraction = (character) => {
  const spritePosition = document
    .querySelector(".sprite")
    .getBoundingClientRect().left;

  const gatePosition = document
    .querySelector(".gate-container")
    .getBoundingClientRect().left;

  if (spritePosition == gatePosition) {
    console.log("create");
  }
};

export { welcomeGateInteraction };
