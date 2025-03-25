// Code used for the burger menu

const burgerButton = document.querySelector(".classButton");

burgerButton.addEventListener("click", () => {
  const newImage = document.querySelector(".imagebutton");
  listBurger.classList.toggle("open");
  newImage.src = newImage.src.includes("assets/icons/icons8-menu-64.png")
    ? "assets/icons/icons8-croix-50.png"
    : "assets/icons/icons8-menu-64.png";
});