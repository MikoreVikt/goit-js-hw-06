const refs = {
  input: document.querySelector(`input`),
  createBox: document.querySelector(`[data-create]`),
  destroyBox: document.querySelector(`[data-destroy]`),
  boxes: document.querySelector(`#boxes`),
};

refs.createBox.addEventListener("click", createBoxes);
refs.destroyBox.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  const boxArr = [];
  let boxSize = 30;

  for (let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement(`div`);
    boxEl.style.width = `${boxSize}` + "px";
    boxEl.style.height = `${boxSize}` + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
    boxSize += 10;

    boxArr.push(boxEl);
  }

  refs.boxes.append(...boxArr);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
