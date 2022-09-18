// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorRandomValue = document.querySelector(".color");

changeColor.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorRandomValue.textContent = color;
});
