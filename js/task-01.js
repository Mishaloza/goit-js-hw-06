const categoriesListEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesListEl.childElementCount}`);

const categoriesListElchildrenArr = Array.from(categoriesListEl.children);

categoriesListElchildrenArr.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});
