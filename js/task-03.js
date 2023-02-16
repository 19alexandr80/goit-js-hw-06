const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");

// const dsw = document.createElement("ewq");
// images.forEach(({ url, alt }) => {
//   const creatList = document.createElement("li");
//   const crietImg = document.createElement("img");
//   crietImg.src = url;
//   crietImg.alt = alt;
//   crietImg.style.width = "100%";
//   creatList.classList.add("class-list");
//   creatList.appendChild(crietImg);
//   dsw.appendChild(creatList);
// });
// galleryEl.insertAdjacentHTML("beforeEnd", dsw.innerHTML);

// const blokList = images
//   .map(({ url, alt }) => {
//     return `<li class = 'class-list'>
//   <img src = '${url}' alt = '${alt}' width = 100%></img>
// </li>`;
//   })
//   .join("");
// galleryEl.insertAdjacentHTML("beforeEnd", blokList);

galleryEl.insertAdjacentHTML(
  "beforeEnd",
  images
    .map(
      ({ url, alt }) => `<li class = 'class-list'>
        <img src = '${url}' alt = '${alt}' width = 100%></img>
        </li>`
    )
    .join("")
);
