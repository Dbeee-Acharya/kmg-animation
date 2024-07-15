import { playAudio, pauseAudio } from "./audioPlayer";
import { stallInteraction } from "./stallInteraction";
import { scroll } from "./windowHorizontalScroll";

export default function () {
  $(".swiper-container").focus();
  var sprite = document.querySelector(".sprite"),
    key = { left: false, right: false },
    trans = 0,
    property = getTransformProperty(sprite);

  function getTransformProperty(element) {
    var properties = [
      "transform",
      "WebkitTransform",
      "msTransform",
      "MozTransform",
      "OTransform",
    ];
    var p;
    while ((p = properties.shift())) {
      if (typeof element.style[p] != "undefined") {
        return p;
      }
    }
    return false;
  }

  function translate() {
    sprite.style[property] = "translateX(" + trans + "px)";
  }

  function walk(e) {
    var keyCode = e.keyCode;
    if (keyCode === 39) {
      //e.preventDefault()
      scroll(e);
      key.right = true;
      playAudio();
      stallInteraction();
    } else if (keyCode === 37) {
      //e.preventDefault()
      scroll(e);
      key.left = true;
      playAudio();
      stallInteraction();
    }
    if (key.right === true) {
      //trans += 10;
      translate();
      sprite.classList.remove("left");
      sprite.classList.add("right");
      sprite.classList.add("walk-right");
      sprite
        .getElementsByClassName("image-wrapper")[0]
        .classList.add("walking");
      sprite
        .getElementsByClassName("image-wrapper")[0]
        .classList.remove("walking-reverse");
    } else if (key.left === true) {
      //trans -= 10;
      translate();
      sprite.classList.remove("right");
      sprite.classList.add("left");
      sprite.classList.add("walk-left");
      sprite
        .getElementsByClassName("image-wrapper")[0]
        .classList.remove("walking");
      sprite
        .getElementsByClassName("image-wrapper")[0]
        .classList.add("walking-reverse");
    }
  }

  function stop(e) {
    pauseAudio();

    var keyCode = e.keyCode;
    if (keyCode === 39) {
      key.right = false;
      sprite
        .getElementsByClassName("image-wrapper")[0]
        .classList.remove("walking");
    } else if (keyCode === 37) {
      key.left = false;
      sprite
        .getElementsByClassName("image-wrapper")[0]
        .classList.remove("walking-reverse");
    }
    if (key.right === false) {
      sprite.classList.remove("walk-right");
    }
    if (key.left === false) {
      sprite.classList.remove("walk-left");
    }
  }

  document.addEventListener("keydown", walk, false);
  document.addEventListener("keyup", stop, false);
}
