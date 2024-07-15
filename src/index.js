import "./style.scss";
import spriteWalk from "./controller/spriteWalk";
import { createBackground } from "./view/createBackground";
import {
  createScreenWrapper,
  createStallWrapper,
} from "./view/createStallWrapper";
import { createSprite } from "./view/createSprite";

createBackground("bg.svg");

for (let i = 0; i < 8; i++) {
  createStallWrapper();
}

createScreenWrapper();

createSprite("man");

spriteWalk();
