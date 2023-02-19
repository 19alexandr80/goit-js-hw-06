const counterButtonGrupe = document.querySelector("#counter");
const counterValue = counterButtonGrupe.querySelector("#value");
counterValue.textContent = 0;
counterButtonGrupe.addEventListener("click", (e) => {
  // if (e.target.dataset.action === "decrement") {
  //   counterValue.textContent = +counterValue.textContent - 1;
  // }
  // if (e.target.dataset.action === "increment") {
  //   counterValue.textContent = +counterValue.textContent + 1;
  // }
  switch (e.target.dataset.action) {
    case "decrement":
      counterValue.textContent = Number(counterValue.textContent) - 1;
      break;

    case "increment":
      counterValue.textContent = Number(counterValue.textContent) + 1;
      break;
  }
});
