import "./style.scss";
import spriteWalk from "./controller/spriteWalk";
import { createBackground } from "./view/createBackground";
import { createStallWrapper } from "./view/createStallWrapper";

createBackground("bg.svg");
console.log(20);

for (let i = 0; i < 8; i++) {
  createStallWrapper();
}

//spriteWalk();
