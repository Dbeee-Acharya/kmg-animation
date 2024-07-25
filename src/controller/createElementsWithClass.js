const createElementWithClass = (elementType, className) => {
  const element = document.createElement(elementType);
  element.classList.add(className);

  return element;
};

export { createElementWithClass };
