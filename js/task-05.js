const inputRef = document.querySelector("#name-input");
const labelRef = document.querySelector("#name-output");
inputRef.addEventListener("input", (event) => {
  labelRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    return (labelRef.textContent = "Anonymous");
  }
});
