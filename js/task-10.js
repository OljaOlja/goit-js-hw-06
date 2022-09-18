// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector("#controls>input");
const btnDataCreate = document.querySelector("button[data-create]");
const btnDataDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

btnDataCreate.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputValue.value);
  boxes.append(...boxesToAdd);
});

console.log(inputValue.value);

btnDataDestroy.addEventListener("click", () => {
  destroyBoxes.call();
});
