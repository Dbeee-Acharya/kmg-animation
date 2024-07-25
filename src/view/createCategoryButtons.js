//creates streetlamp

import { createElementWithClass } from "../controller/createElementsWithClass";

const createStreetLamp = (productCategory = "Test Product") => {
  const streetLamp = createElementWithClass("div", "streetlamp");
  const baseTop = createElementWithClass("div", "basetop");
  const pole = createElementWithClass("div", "pole");
  const poleTop = createElementWithClass("div", "poletop");
  const head = createElementWithClass("div", "head");
  const category = createElementWithClass("div", "category");
  const top = createElementWithClass("div", "top");
  const glass = createElementWithClass("div", "glass");
  const bot = createElementWithClass("div", "bot");
  const light = createElementWithClass("div", "light");

  category.innerText = productCategory;

  head.appendChild(category);
  head.appendChild(top);
  head.appendChild(glass);
  head.appendChild(bot);

  streetLamp.appendChild(baseTop);
  streetLamp.appendChild(pole);
  streetLamp.appendChild(poleTop);
  streetLamp.appendChild(head);
  streetLamp.appendChild(light);

  return streetLamp;
};

export { createStreetLamp };
