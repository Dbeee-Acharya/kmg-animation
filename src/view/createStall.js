function createStallInteraction() {
  const stallInteraction = document.createElement("div");
  stallInteraction.textContent = "Discount";
  stallInteraction.classList.add("stall-interaction");

  return stallInteraction;
}

function createStallContainer(logoURL, bannerURL) {
  const stallContainer = document.createElement("div");
  stallContainer.classList.add("stall-container");

  const stallHead = document.createElement("div");
  stallHead.classList.add("stall-head");

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");
  const logoImg = document.createElement("img");
  logoImg.src = logoURL;

  logoContainer.appendChild(logoImg);
  stallHead.appendChild(logoContainer);

  const stallSupport = document.createElement("div");
  stallSupport.classList.add("stall-support");

  const stallBody = document.createElement("div");
  stallBody.classList.add("stall-body");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const bannerImg = document.createElement("img");
  bannerImg.src = bannerURL;

  imageContainer.appendChild(bannerImg);
  stallBody.appendChild(imageContainer);

  stallContainer.appendChild(stallHead);
  stallContainer.appendChild(stallSupport);
  stallContainer.appendChild(stallBody);

  return stallContainer;
}

function createScreen(iframe) {
  const stallContainer = document.createElement("div");
  stallContainer.classList.add("stall-container");

  const stallHead = document.createElement("div");
  stallHead.classList.add("stall-head");
  stallHead.style.height = "200px";

  const videoContainer = document.createElement("div");
  videoContainer.classList.add("image-container");
  videoContainer.textContent = iframe;

  stallContainer.appendChild(stallHead);
  stallContainer.appendChild(videoContainer);

  return stallContainer;
}

export { createStallInteraction, createStallContainer, createScreen };
