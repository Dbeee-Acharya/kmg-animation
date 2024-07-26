//creates streetlamp

import { createElementWithClass } from "../controller/createElementsWithClass";

const categories = [
  "food",
  "electronics",
  "automobile",
  "education",
  "tech",
  "fashion",
  "test",
  "newcategory",
  "anothercategory",
];

const createStreetLamp = (productCategory = "Test Product") => {
  const streetLamp = createElementWithClass("div", "streetlamp");
  const baseTop = createElementWithClass("div", "basetop");
  const pole = createElementWithClass("div", "pole");
  const poleTop = createElementWithClass("div", "poletop");
  const head = createElementWithClass("div", "head");
  const top = createElementWithClass("div", "top");
  const glass = createElementWithClass("div", "glass");
  const bot = createElementWithClass("div", "bot");
  const light = createElementWithClass("div", "light");

  let id = 0;
  categories.forEach((category) => {
    streetLamp.appendChild(createCategoryButton(category, ++id));
  });

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

function createCategoryButton(category, id) {
  const categoryElement = createElementWithClass("button", "categories");
  categoryElement.setAttribute("id", `button${id}`);
  categoryElement.innerText = category;

  return categoryElement;
}

export { createStreetLamp };
