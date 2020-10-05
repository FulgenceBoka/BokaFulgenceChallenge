let produitsInteressant = document.querySelectorAll(
  ".produits-interessant .card"
);
let productName = document.getElementById("productName");
let img = document.getElementById("detail-img");
let unitprice = document.getElementById("unitPrice");
let reductionPrice = document.getElementById("reductionPrice");
produitsInteressant.forEach((data) => {
  data.addEventListener("click", function () {
    productName.textContent = data.children[1].children[0].textContent;
    img.src = data.children[0].children[0].src;
    unitprice.textContent =
      data.children[1].children[1].children[0].textContent;
    reductionPrice.textContent =
      eval(data.children[1].children[1].children[0].textContent) * 0.75;
  });
});

const body = document.querySelector("body");

let rowColor = document.querySelectorAll(".row-color .col-3");
rowColor.forEach((element) => {
  element.addEventListener("click", () => {
    body.style.setProperty("--text-color", `${element.style.backgroundColor}`);
    body.style.setProperty("color", `${element.style.backgroundColor}`);
  });
});
