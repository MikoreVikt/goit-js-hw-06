const decrBtn = document.querySelector(`button[data-action="decrement"]`);
const valueEl = document.querySelector(`#value`);
const incrBtn = document.querySelector(`button[data-action="increment"]`);

let counterValue = 0;

decrBtn.addEventListener("click", (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrBtn.addEventListener("click", (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
