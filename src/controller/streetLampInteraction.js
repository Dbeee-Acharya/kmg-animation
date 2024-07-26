//
//

const streetLampInteraction = () => {
  const streetLamp = document.querySelectorAll(".light");

  streetLamp.forEach((lamp) => {
    lamp.classList.add("visible");
  });
};

const revealCategoryButtons = () => {
  const spritePosition = document
    .querySelector(".sprite")
    .getBoundingClientRect().left;

  const lampPosition = document
    .querySelector(".streetlamp")
    .getBoundingClientRect().left;

  const categoryButtons = document.querySelectorAll(".categories");

  if (spritePosition > lampPosition - 120 && spritePosition < lampPosition) {
    categoryButtons.forEach((category) => {
      category.classList.add("visible");
    });
  } else {
    categoryButtons.forEach((category) => {
      category.classList.remove("visible");
    });
  }
};

export { streetLampInteraction, revealCategoryButtons };
