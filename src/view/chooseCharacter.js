// this module creates buttons for the characters
import walkingManHeadSrc from "../assets/walking-man-head.png";
import walkingWomanHeadSrc from "../assets/walking-woman-head.png";

const chooseCharacterButtons = () => {
  const cButtonsWrapper = document.createElement("div");
  cButtonsWrapper.classList.add("character-buttons-wrapper");

  const womanButton = document.createElement("button");
  womanButton.setAttribute("id", "woman-button");
  womanButton.classList.add("character-button");

  const manButton = document.createElement("button");
  manButton.setAttribute("id", "man-button");
  manButton.classList.add("character-button");

  const womanImage = new Image();
  womanImage.src = walkingWomanHeadSrc;

  const manImage = new Image();
  manImage.src = walkingManHeadSrc;

  womanButton.appendChild(womanImage);
  manButton.appendChild(manImage);

  cButtonsWrapper.appendChild(womanButton);
  cButtonsWrapper.appendChild(manButton);

  return cButtonsWrapper;
};

export { chooseCharacterButtons };
