//
//

const streetLampInteraction = () => {
  const streetLamp = document.querySelectorAll(".light");

  streetLamp.forEach((lamp) => {
    lamp.classList.add("visible");
  });
};

const revealCategoryButtons = () => {
  //code to reveal category buttons
};

export { streetLampInteraction };
