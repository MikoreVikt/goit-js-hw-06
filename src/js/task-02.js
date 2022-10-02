const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector(`#ingredients`);

const listElItem = ingredients.map((element) => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add(`item`);
  itemEl.textContent = element;
  return itemEl;
});

listEl.prepend(...listElItem);
console.log(listEl);
