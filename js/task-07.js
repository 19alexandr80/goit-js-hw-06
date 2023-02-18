const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
inputEl.addEventListener(
  "input",
  (e) => (spanEl.style.fontSize = `${e.currentTarget.value}px`)
);
