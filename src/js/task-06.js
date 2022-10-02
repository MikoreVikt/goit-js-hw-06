const inputLine = document.querySelector(`#validation-input`);

inputLine.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputLine.dataset.length)) {
    inputLine.classList.remove(`invalid`);
    inputLine.classList.add(`valid`);
    return;
  } else {
    inputLine.classList.remove(`valid`);
    inputLine.classList.add(`invalid`);
    return;
  }
}
