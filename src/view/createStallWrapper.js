import {
  createStallInteraction,
  createStallContainer,
  createScreen,
} from "./createStall";

function createStallWrapper() {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");

  const stallInteraction = createStallInteraction();
  const stallContainer = createStallContainer(
    "https://assets.kfc.com.np/storage/uploads/images/Kfcheaderlogo/63e64b753ab7a.jpg",
    "https://assets-cdn.kantipurdaily.com/uploads/source/ads/fantasy-league-970x120px-1862024113234.jpg",
  );

  swiperSlide.appendChild(stallInteraction);
  swiperSlide.appendChild(stallContainer);

  const swiperContainer = document.querySelector(".swiper-wrapper");
  swiperContainer.appendChild(swiperSlide);
}

export { createStallWrapper };
