// this module creates buttons for the characters
import walkingManHeadSrc from "../assets/walking-man-head.png";
import walkingWomanHeadSrc from "../assets/walking-woman-head.png";

const chooseCharacterButtons = () => {
  const cButtonsWrapper = document.createElement("div");
  cButtonsWrapper.classList.add("character-buttons-wrapper");

  const womanButton = document.createElement("button");
  womanButton.setAttribute("id", "woman-button");

  const manButton = document.createElement("button");
  manButton.setAttribute("id", "man-button");

  const womanImage = new Image(100, 100);
  womanImage.src = walkingWomanHeadSrc;

  const manImage = new Image(100, 100);
  manImage.src = walkingManHeadSrc;

  womanButton.appendChild(womanImage);
  manButton.appendChild(manImage);

  cButtonsWrapper.appendChild(womanButton);
  cButtonsWrapper.appendChild(manButton);

  return cButtonsWrapper;
};

export { chooseCharacterButtons };
