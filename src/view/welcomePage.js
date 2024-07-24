//creates the welcome gate page
//

const createWelcomeGate = () => {
  const mainGateContainer = document.createElement("div");
  mainGateContainer.classList.add("gate-container");

  const gate = document.createElement("div");
  gate.classList.add("gate");

  const gateUpper = document.createElement("div");
  gateUpper.classList.add("upper");

  const gateUpperChild = document.createElement("div");
  gateUpperChild.classList.add("upper-child");

  const rightpillar = document.createElement("div");
  rightpillar.classList.add("pillar");

  const leftPillar = document.createElement("div");
  leftPillar.classList.add("pillar");
  leftPillar.classList.add("left");

  gate.appendChild(gateUpper);
  gate.appendChild(gateUpperChild);
  gate.appendChild(rightpillar);
  gate.appendChild(leftPillar);

  mainGateContainer.appendChild(gate);

  const mainWrapper = document.querySelector(".swiper-wrapper");
  mainWrapper.appendChild(mainGateContainer);

  const swiperContainer = document.querySelector(".swiper-container");
  swiperContainer.classList.add("visible");
};

export { createWelcomeGate };
