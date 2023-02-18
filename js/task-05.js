const inputElem = document.querySelector("#name-input");
const spanElemText = document.querySelector("#name-output");
inputElem.addEventListener("input", (e) => {
  spanElemText.textContent = e.currentTarget.value;
  if (!spanElemText.textContent) {
    spanElemText.textContent = "Anonymous";
  }
});
