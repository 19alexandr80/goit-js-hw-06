const counterButtonGrupe = document.querySelector("#counter");
const counterValue = counterButtonGrupe.querySelector("#value");
counterValue.textContent = 0;
counterButtonGrupe.addEventListener("click", (e) => {
  if (e.target.dataset.action === "decrement") {
    counterValue.textContent = +counterValue.textContent - 1;
  }
  if (e.target.dataset.action === "increment") {
    counterValue.textContent = +counterValue.textContent + 1;
  }
});
