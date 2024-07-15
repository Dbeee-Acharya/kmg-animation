function createSprite(character = "woman") {
  const sprite = document.createElement("div");
  sprite.classList.add("sprite");

  const walkingPerson = document.createElement("div");
  walkingPerson.classList.add("walking-man");
  walkingPerson.classList.add(character.toLowerCase());

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image-wrapper");

  walkingPerson.appendChild(imageWrapper);
  sprite.appendChild(walkingPerson);

  const swiperContainer = document.querySelector(".main-wrapper");
  swiperContainer.appendChild(sprite);
}

export { createSprite };
