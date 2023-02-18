const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
buttonEl.addEventListener("click", getRandomHexColor);
function getRandomHexColor() {
  const collor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  spanEl.textContent = collor;
  bodyEl.style.backgroundColor = collor;
  // return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
