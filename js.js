const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".dropdown");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});