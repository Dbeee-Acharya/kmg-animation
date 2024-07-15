var element = document.querySelector(".swiper-container");
const windowWidth = window.innerWidth;
function scroll(e) {
  console.log("called");
  e.preventDefault();
  const keyScrollMapping = {
    37: -100,
    39: 100,
  };

  if (keyScrollMapping.hasOwnProperty(e.keyCode)) {
    element.scrollBy({
      top: 0,
      left: keyScrollMapping[e.keyCode] / 10,
      behavior: "smooth",
    });
  }
}

export { scroll };
