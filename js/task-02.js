const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elemIngredients = document.querySelector("#ingredients");

// const ingredientsBlok = ingredients.map((el) => {
//   const ingredientList = document.createElement("li");
//   ingredientList.innerText = el;
//   ingredientList.classList = "item";
//   return ingredientList;
// });
// elemIngredients.append(...ingredientsBlok);

elemIngredients.append(
  ...ingredients.map((el) => {
    const ingredientList = document.createElement("li");
    ingredientList.innerText = el;
    ingredientList.classList = "item";
    return ingredientList;
  })
);
