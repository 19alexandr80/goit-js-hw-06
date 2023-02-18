const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", formLoginCorekt);

function formLoginCorekt(e) {
  e.preventDefault();
  const password = e.currentTarget.elements.password.value;
  const email = e.currentTarget.elements.email.value;
  const formSet = {
    email,
    password,
  };
  !password || !email ? alert("Заповніть усі поля") : onSet(formSet);
}
function onSet(formSet) {
  // const formData = new FormData(e.currentTarget);
  // console.log(formData);
  console.log(formSet);
  formEl.reset();
}
