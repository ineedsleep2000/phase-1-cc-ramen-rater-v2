// index.js

// import { formNode } from "happy-dom/lib/PropertySymbol";

const detailImg = document.querySelector(".detail-image");
const detailName = document.querySelector(".name");
const detailRestaurant = document.querySelector(".restaurant");
const detailRating = document.querySelector("#rating-display");
const detailComment = document.querySelector("#comment-display");

// Callbacks
const handleClick = (ramen) => {
  // Add code

  detailImg.src = ramen.image;
  detailImg.alt = ramen.name;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailRating.textContent = ramen.rating;
  detailComment.textContent = ramen.comment;
  //   addEventListener("click", (selectRamen) => ramenMenu
  //   const ramenData);
};

const addSubmitListener = () => {
  // Add code
  const form = document.querySelector("#new-ramen");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted");
    const ramen = {
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: e.target["new-comment"].value,
    };
    displayRamen(ramen);
  });
};

const ramenMenu = document.querySelector("#ramen-menu");

// const ramenDetail = document.querySelector("#ramen-detail")

const displayRamen = (ramen) => {
  const img = document.createElement("img");
  // img.addEventListener()
  img.addEventListener("click", () => handleClick(ramen));
  img.src = ramen.image;
  img.alt = ramen.name;
  ramenMenu.append(img);
};

const displayRamens = async () => {
  // Add code
  const response = await fetch("http://localhost:3000/ramens");
  const ramens = await response.json();

  for (const ramen of ramens) {
    displayRamen(ramen);

    // fetch("http://localhost:3000/ramens")
    //   .then((resp) => resp.json())
    //   .then((ramenJson) => {
    //     ramenJson.forEach((arrayitem) => {
    //       const ramenMenu = document.querySelector("#ramen-menu");
    //       const ramenImg = document.createElement("img");
    //       ramenImg.src = arrayitem.image;
    //       ramenImg.alt = arrayitem.name;
    //       ramenMenu.append(ramenImg);
    //     });
    //   });
  }
};

const main = () => {
  // Invoke displayRamens here
  // document.addEventListener("DOMContentLoaded", function () {
  displayRamens();
  addSubmitListener();
  // });
  // Invoke addSubmitListener here
};

main();

// Export functions for testing
export { displayRamens, addSubmitListener, handleClick, main };
