const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsElem = document.querySelector("#ingredients");
const elem = [];
ingredients.forEach((ingredients) => {
  const liElem = document.createElement("li");
  liElem.textContent = ingredients;
  liElem.classList.add("item");
  elem.push(liElem);
});

ingredientsElem.append(...elem);
console.log(ingredientsElem);
