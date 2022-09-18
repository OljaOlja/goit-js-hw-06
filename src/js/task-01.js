const categoriesElem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesElem.length}`);

categoriesElem.forEach((item) => {
  const titleCategory = item.querySelector("h2");
  const elementsCount = item.querySelectorAll("li");
  console.log(`Category: ${titleCategory.textContent}`);
  console.log(`Elements: ${elementsCount.length}`);
});
