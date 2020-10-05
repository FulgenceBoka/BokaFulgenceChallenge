let promotion = document.querySelector("span#promo");
setInterval(Promo, 500);

function Promo() {
  promotion.classList.toggle("active");
}

/* ------ SLIDER ------- */

let totalImage = 4;
let compteurImage = 1;
let slide = document.querySelector(".slider img");
let imgSlider = document.getElementById("img-slider");
let linkImage = imgSlider.parentElement;
linkImage.href = `detail-produit.html`;
function slider(x) {
  compteurImage = compteurImage + x;
  if (compteurImage > totalImage) {
    compteurImage = 1;
  }

  if (compteurImage <= 0) {
    compteurImage = totalImage;
  }

  imgSlider.src = `images/product-${compteurImage}.jpg`;
  imgSlider.alt = `product-${compteurImage}`;
}

function sliderAutomaic() {
  compteurImage += 1;
  if (compteurImage > totalImage) {
    compteurImage = 1;
  }

  if (compteurImage < 0) {
    compteurImage = totalImage;
  }

  imgSlider.src = `images/product-${compteurImage}.jpg`;
}

setInterval(sliderAutomaic, 5000);

const body = document.querySelector("body");

let rowColor = document.querySelectorAll(".row-color .col-3");
rowColor.forEach((element) => {
  element.addEventListener("click", () => {
    body.style.setProperty("--text-color", `${element.style.backgroundColor}`);
    body.style.setProperty("color", `${element.style.backgroundColor}`);
  });
});
