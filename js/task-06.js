const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", (e) =>
  e.currentTarget.value.length < inputEl.dataset.length
    ? (inputEl.className = "invalid")
    : (inputEl.className = "valid")
);
