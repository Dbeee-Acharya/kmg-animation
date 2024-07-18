// this module creates buttons for the characters

const chooseCharacterButtons = () => {
  const cButtonsWrapper = document.createElement("div");
  cButtonsWrapper.classList.add("character-buttons-wrapper");

  const womanButton = document.createElement("button");
  womanButton.setAttribute("id", "woman-button");
  womanButton.textContent = "Woman";

  const manButton = document.createElement("button");
  manButton.setAttribute("id", "man-button");
  manButton.textContent = "Man";

  cButtonsWrapper.appendChild(womanButton);
  cButtonsWrapper.appendChild(manButton);

  return cButtonsWrapper;
};

export { chooseCharacterButtons };
