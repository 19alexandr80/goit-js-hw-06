function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");

buttonCreateEl.addEventListener("click", () => createBoxes(inputEl.value));
function createBoxes(amount) {
  let createBoxesContent = "";
  let wh = 20;
  for (let index = 0; index < amount; index++) {
    wh += 10;
    createBoxesContent += `<div style="width: ${wh}px; height: ${wh}px; background-color: ${getRandomHexColor()}" ></div>`;
  }
  boxesEl.innerHTML = "";
  boxesEl.insertAdjacentHTML("beforeEnd", createBoxesContent);
}
buttonDestroyEl.addEventListener("click", () => (boxesEl.innerHTML = ""));
