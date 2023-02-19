const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", (e) =>
  e.currentTarget.value.length === Number(inputEl.dataset.length)
    ? (inputEl.className = "valid")
    : (inputEl.className = "invalid")
);
