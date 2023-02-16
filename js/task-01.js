const categor = document.querySelector("#categories");
console.log("Number of categories: " + categor.children.length);
const mass = categor.children;
for (const iterator of mass) {
  console.log("Category: " + iterator.children[0].outerText);
  console.log("Elements:" + iterator.children[1].children.length);
}
