window.addEventListener("DOMContentLoaded", main);

function main() {
  setAllConstants();
  addEventListeners();
  setTypeEffect();
}

let hamburger;
let timeoutRef;
let burgercontent;
let aboutmebutton;
function setAllConstants() {
  hamburger = document.getElementById("hamburger-div")
  burgercontent = document.querySelector(".hamburger-div ul");
  aboutmebutton = document.getElementById("aboutme")
}

function addEventListeners() {
  hamburger.addEventListener("click", loadHamburgerMenu);
  aboutmebutton.addEventListener("click", removeShit);
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
const nextMessageDelay = 2000;
let charIndex = 0;
let messageIndex = 0;
function setTypeEffect() {
  const text = document.getElementById("typewriter"); //get element and save in variable text
  const message = messages[messageIndex]; //get messages variable and its index which by default is set to 0
  if(charIndex < message.length) { // checks if charIdex is smaller than message.lenght which by default is total lenght of index item 0 which in turn has a lenght of 20 characters.
      text.innerHTML += message.charAt(charIndex); //get the first character of index 0 which is the letter F and gives it to text.innerHTML.
      charIndex++; //adds 1 to current value of charIndex
      setTimeout(setTypeEffect, typeSpeed); //calls the function again after 150ms.
  }

  else {
      charIndex = 0; //sets charIndex to 0 which by now is about 20
      messageIndex = (messageIndex + 1) % messages.length; //messageIndex is increased by 1 modulus the messages lenght 2 which returns a restvalue of 1. If messageIndex is 2 the modulus of 2 will set messageIndex to 0.
      setTimeout(function() { //setTimeout function calls an anonymous function which in turn sets text.innerHTML to empty string and calls setTypeEffect function after nextMessageDelay which is 2000ms.
          text.innerHTML = "";
          setTypeEffect();
      }, nextMessageDelay);
  }
}
// END OF TYPEWRITER EFFECT