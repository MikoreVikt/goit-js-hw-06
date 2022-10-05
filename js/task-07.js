const inputSizeControlEl = document.querySelector(`#font-size-control`);
const textSizeContentEl = document.querySelector(`#text`);

inputSizeControlEl.addEventListener(`input`, sizeControlFn);

function sizeControlFn(event) {
  textSizeContentEl.style.fontSize = `${inputSizeControlEl.value}px`;
  textSizeContentEl.style.color = `hsl(${inputSizeControlEl.value}deg 100% 30%)`;
}
