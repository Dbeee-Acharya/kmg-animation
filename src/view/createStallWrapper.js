import {
  createStallInteraction,
  createStallContainer,
  createScreen,
} from "./createStall";

function createStallWrapper(logoUrl = "logo", BannerUrl = "banner") {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");

  const stallInteraction = createStallInteraction();
  const stallContainer = createStallContainer(logoUrl, BannerUrl);

  swiperSlide.appendChild(stallInteraction);
  swiperSlide.appendChild(stallContainer);

  const swiperContainer = document.querySelector(".swiper-wrapper");
  swiperContainer.appendChild(swiperSlide);
}

function createScreenWrapper(iframe = "<iframe></iframe>") {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");

  const stallInteraction = createStallInteraction();
  const screen = createScreen(iframe);

  swiperSlide.appendChild(stallInteraction);
  swiperSlide.appendChild(screen);

  const swiperContainer = document.querySelector(".swiper-wrapper");
  swiperContainer.appendChild(swiperSlide);
}

export { createStallWrapper, createScreenWrapper };
