function stallInteraction() {
  const swiperSlides = document.querySelectorAll(".swiper-slide");
  const windowWidth = window.innerWidth;

  swiperSlides.forEach((slide) => {
    const slideInteraction = slide.querySelector(".stall-interaction");
    const position = slide.getBoundingClientRect();

    const xPosition = position.left;

    const windowWidthMiddle = windowWidth / 2;

    if (
      (xPosition < windowWidthMiddle + 150) &
      (xPosition > windowWidthMiddle - 200)
    ) {
      //slideInteraction.style.display = "flex";
      if (slideInteraction) {
        slideInteraction.classList.add("visible");
        slideInteraction.parentElement.classList.add("active");
      }
    } else {
      if (slideInteraction) {
        //slideInteraction.style.display = "none";
        slideInteraction.classList.remove("visible");
        slideInteraction.parentElement.classList.remove("active");
      }
    }
  });
}

export { stallInteraction };
