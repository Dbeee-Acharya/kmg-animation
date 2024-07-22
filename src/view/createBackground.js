function createBackground(imageSource) {
  console.log("background-func");
  import(`../assets/${imageSource}`)
    .then((module) => {
      const imgSrc = module.default;

      const backgroundImage = new Image();
      backgroundImage.src = imgSrc;

      const swiperWrapper = document.querySelector(".swiper-wrapper");
      swiperWrapper.style.backgroundImage = backgroundImage;
      swiperWrapper.style.backgroundRepeat = "repeat-x";
      swiperWrapper.style.backgroundSize = "cover";
      swiperWrapper.style.backgroundPosition = "center bottom";
    })
    .catch((error) => {
      console.error("error loosing image:", error);
    });
}

export { createBackground };
