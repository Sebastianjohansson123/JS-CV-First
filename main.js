window.addEventListener("DOMContentLoaded", main);

function main() {
  setAllConstants();
  addEventListeners();
}

let hamburger;
let timeoutRef;
let burgercontent;
setInterval(addChar, 100);

function setAllConstants() {
  hamburger = document.getElementById("hamburger-div")
  burgercontent = document.querySelector(".hamburger-div ul");
}

function addEventListeners() {
  hamburger.addEventListener("click", loadHamburgerMenu);

}

function loadHamburgerMenu() {
  if (hamburger.classList.contains("hamburger-fullscreen")) {
    hamburger.classList.remove("hamburger-fullscreen")
    burgercontent.classList.add("hidden");
  }
  else {
    hamburger.classList.add("hamburger-fullscreen")
    timeoutRef = setTimeout(showBurgerContent, 500);
  }
}
function showBurgerContent() {
  burgercontent.classList.remove("hidden");
}

a 