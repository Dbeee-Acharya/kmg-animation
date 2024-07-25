//
//

const streetLampInteraction = () => {
  const streetLamp = document.querySelectorAll(".light");
  console.log(streetLamp);

  streetLamp.forEach((lamp) => {
    lamp.classList.add("visible");
  });
};

export { streetLampInteraction };
