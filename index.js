// Import stylesheets
import "./style.css";

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

let blueBallList = [];
let redBallList = [];

let redBalls = 0;
let blueBalls = 0;

// Input & Output Fields
let redSelector = document.getElementById("redSelector");
let numRedBallsDisplay = document.getElementById("numRedBalls");
let blueSelector = document.getElementById("blueSelector");
let numBlueBallsDisplay = document.getElementById("numBlueBalls");
// SelectButtons
let moreRed = document.getElementById("moreRed");
let lessRed = document.getElementById("lessRed");
let moreBlue = document.getElementById("moreBlue");
let lessBlue = document.getElementById("lessBlue");


function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function redChange(event) {
  redBalls = redSelector.value;
  numRedBallsDisplay.innerText = "Anzahl rote Kugeln: " + redBalls;
}
function blueChange(event) {
  blueBalls = blueSelector.value;
  numBlueBallsDisplay.innerText = "Anzahl blaue Kugeln: " + blueBalls;
}

redSelector.addEventListener("change", redChange);

blueSelector.addEventListener("change", blueChange);

moreRed.addEventListener("click", function() {
  redSelector.value = +redSelector.value + 1;
  redChange();
});
lessRed.addEventListener("click", function() {
  if(redSelector.value > 0) {
    redSelector.value = +redSelector.value - 1;
    redChange();
  }
});

moreBlue.addEventListener("click", function() {
  blueSelector.value = +blueSelector.value + 1;
  blueChange();
});
lessBlue.addEventListener("click", function() {
  if(blueSelector.value > 0) {
    blueSelector.value = +blueSelector.value - 1;
    blueChange();
  }
});

// Draw Logic
let drawBallButton = document.getElementById("drawBall");
let drawnBallDisplay = document.getElementById("drawnBall");
let displayBalls = document.getElementById("displayBalls");

drawBallButton.addEventListener("click", function() {
  if (redBalls != 0 || blueBalls != 0) {
    let drawnNumber = getRandomInt(+redBalls + +blueBalls);
    drawnBallDisplay.style.backgroundColor = "white";
    // console.log(drawnNumber);

    displayBalls.classList.add("spinAnimation");
    setTimeout(function(){ 
      displayBalls.classList.remove("spinAnimation"); 
      if (drawnNumber > redBalls) {
        drawnBallDisplay.style.backgroundColor = "blue";
      } else {
        drawnBallDisplay.style.backgroundColor = "red";
      }
      }, 2000);
  }
});
