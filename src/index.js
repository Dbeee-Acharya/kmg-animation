import "./style.scss";
import { createBackground } from "./view/createBackground";
import {
  createScreenWrapper,
  createStallWrapper,
} from "./view/createStallWrapper";
import { createSprite } from "./view/createSprite";
import { spriteMovement } from "./controller/spriteMovement";

createBackground("bg.svg");

for (let i = 0; i < 8; i++) {
  createStallWrapper();
}

createScreenWrapper();

createSprite("man");

spriteMovement();
