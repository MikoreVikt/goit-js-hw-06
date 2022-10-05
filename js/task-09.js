function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorName = document.querySelector(`.color`);
const colorBtn = document.querySelector(`.change-color`);

colorBtn.addEventListener(`click`, onClickChangeColor);

function onClickChangeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = document.body.style.backgroundColor;
}
