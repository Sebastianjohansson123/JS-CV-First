window.addEventListener("DOMContentLoaded", main);

function main() {
  setAllConstants();
  addEventListeners();
  typeEffect();
}

let hamburger;
let timeoutRef;
let burgercontent;

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




// ------------------------------------------------------------------------------------------------------



// TYPEWRITER EFFECT
const messages = ['Front-End Developer.', 'Daddy of all Daddys.'];
const typeSpeed = 100;
const nextMessageTimer = 2000;
let charIndex = 0;
let messageIndex = 0;
function typeEffect() {
  const text = document.getElementById("typewriter");
  const message = messages[messageIndex];
  if(charIndex < message.length) {
      text.innerHTML += message.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, typeSpeed);
  }

  else {
      charIndex = 0;
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(function() {
          text.innerHTML = "";
          typeEffect();
      }, nextMessageTimer);
  }
}
// END OF TYPEWRITER EFFECT