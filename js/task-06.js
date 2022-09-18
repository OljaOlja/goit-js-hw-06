const inputRef = document.querySelector("#validation-input");
const inputGetRefLength = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", (event) => {
  const validEvent =
    event.currentTarget.value.length === Number(inputGetRefLength);
  if (validEvent) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
});
