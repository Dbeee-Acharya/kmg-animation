function createBackground(imageSource) {
  import(`../assets/${imageSource}`)
    .then((module) => {
      const imgSrc = module.default;

      const backgroundImage = new Image();
      backgroundImage.src = imgSrc;

      const swiperContainer = document.querySelector(".swiper-container");

      const swiperWrapper = document.createElement("div");
      swiperWrapper.style.backgroundImage = backgroundImage;
      swiperWrapper.style.backgroundRepeat = "no-repeat";
      swiperWrapper.style.backgroundSize = "cover";
      swiperWrapper.style.backgroundPosition = "center bottom";

      swiperWrapper.classList.add("swiper-wrapper");
      swiperContainer.appendChild(swiperWrapper);
    })
    .catch((error) => {
      console.error("error loosing image:", error);
    });
}

export { createBackground };
