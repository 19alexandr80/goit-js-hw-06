const categor = document.querySelector("#categories");
console.log("Number of categories: " + categor.children.length);
const mass = categor.children;
for (const iterator of mass) {
  console.log("Category: " + iterator.querySelector("h2").outerText);
  console.log("Elements: " + iterator.querySelectorAll("li").length);
}
