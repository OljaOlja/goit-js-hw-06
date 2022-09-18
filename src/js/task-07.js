const inputSizeControl = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");
inputText.style.fontSize = `${inputSizeControl.value}px`;
inputSizeControl.addEventListener("input", (event) => {
  inputText.style.fontSize = `${event.currentTarget.value}px`;
});
