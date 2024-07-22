import "./style.scss";
import { createBackground } from "./view/createBackground";
import {
  createScreenWrapper,
  createStallWrapper,
} from "./view/createStallWrapper";
import { createSprite } from "./view/createSprite";
import { spriteMovement } from "./controller/spriteMovement";
import { chooseCharacterButtons } from "./view/chooseCharacter";

/*createBackground("bg.svg");

let logoUrlList = [
  "https://assets.kfc.com.np/storage/uploads/images/Kfcheaderlogo/63e64b753ab7a.jpg",
  "https://assets-cdn.kantipurdaily.com/uploads/source/ads/fantasy-league-970x120px-1862024113234.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZJVSSjLlHf2OTmNd5pIh3ZpvemWVs9okZQ&s",
  "https://logos-world.net/wp-content/uploads/2021/10/Suzuki-Symbol.png",
];
let bannerUrlList = [
  "https://assets-cdn.kantipurdaily.com/uploads/source/ads/fantasy-league-970x120px-1862024113234.jpg",
  "https://assets-cdn.ekantipur.com/uploads/source/ads/euro-cup-ad-8col-x-5cm-13-june-2024-1-1462024093042.jpg",
  "https://assets-cdn.ekantipur.com/uploads/source/ads/ekantipur-1200x100-0872024070205.jpg",
  "https://suzuki.com.np/uploads/product/5cfab11ba7f188474a71a0f58a1e6c36.png",
];

let iframe = `https://www.youtube.com/embed/H8LrwI-I_fY`;

for (let i = 0; i < logoUrlList.length; i++) {
  createStallWrapper(logoUrlList[i], bannerUrlList[i]);
}

createScreenWrapper();

const mainWrapper = document.querySelector(".main-wrapper");
mainWrapper.appendChild(chooseCharacterButtons());

createSprite("woman");

spriteMovement();*/
const mainWrapper = document.querySelector(".main-wrapper");
mainWrapper.appendChild(chooseCharacterButtons());
