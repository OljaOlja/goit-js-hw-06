let counterValue = 0;
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');

btnDecrementRef.addEventListener("click", () => {
  const displayCounter = document.querySelector("#value");
  counterValue--;
  displayCounter.textContent = counterValue;
});
console.log(btnDecrementRef);

btnIncrementRef.addEventListener("click", () => {
  const displayCounter = document.querySelector("#value");
  counterValue++;
  displayCounter.textContent = counterValue;
});
console.log(btnIncrementRef);
