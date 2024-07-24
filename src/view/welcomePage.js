//creates the welcome gate page
//

const createWelcomeGate = () => {
  const mainGateContainer = document.createElement("div");
  mainGateContainer.classList.add("gate-container");

  const welcomeMessage = document.createElement("div");
  welcomeMessage.classList.add("welcome-message");
  welcomeMessage.textContent = "Welcome to KMG";

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

  mainGateContainer.appendChild(welcomeMessage);
  mainGateContainer.appendChild(gate);

  const swiperContainer = document.querySelector(".swiper-container");
  swiperContainer.appendChild(mainGateContainer);
  swiperContainer.classList.add("visible");
};

export { createWelcomeGate };
