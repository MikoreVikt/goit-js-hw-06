const inputLine = document.querySelector(`#name-input`);
const outputLine = document.querySelector(`#name-output`);

inputLine.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (outputLine.textContent = "Anonymous");
  }
  outputLine.textContent = event.currentTarget.value;
});
