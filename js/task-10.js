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
  let widthEl = 20;
  for (let index = 0; index < amount; index++) {
    widthEl += 10;
    createBoxesContent += `<div style="width: ${widthEl}px;
     height: ${widthEl}px; background-color: ${getRandomHexColor()}" ></div>`;
  }
  boxesEl.innerHTML = "";
  boxesEl.insertAdjacentHTML("beforeEnd", createBoxesContent);
}
buttonDestroyEl.addEventListener("click", () => (boxesEl.innerHTML = ""));
