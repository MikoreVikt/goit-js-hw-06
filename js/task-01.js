const itemNode = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${itemNode.length}`);

const elements = itemNode.forEach((element) => {
  const titleEl = element.querySelector(`h2`);
  const listEl = element.querySelectorAll(`li`);
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Element: ${listEl.length}`);
});
