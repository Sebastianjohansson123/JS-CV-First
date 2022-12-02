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

// This function toggles the hamburger menu when looking at the page in mobile view.
function loadHamburgerMenu() {
  if (hamburger.classList.contains("hamburger-fullscreen")) {
    hamburger.classList.remove("hamburger-fullscreen")
    burgercontent.classList.add("hidden");
  }
  else {
    hamburger.classList.add("hamburger-fullscreen")
    timeoutRef = setTimeout(showBurgerContent, 500);
  }
  function showBurgerContent() {
    burgercontent.classList.remove("hidden");
  }
}





// ------------------------------------------------------------------------------------------------------



// TYPEWRITER EFFECT, This effect is loaded in the main() when page is loaded.
const messages = ["Front-End Developer.", "Future Full Stack Developer."];
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