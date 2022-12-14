const startBtn = document.getElementById("start-btn");
const words = ["green", "blue", "red", "yellow"];
const colors = ["green", "blue", "red", "yellow"];
const btns = document.querySelectorAll(".btn");

let msSinceChange = 0;
let count = 0;
let trials = 5;
let trialNum = 0;
let trialNum2 = 0;

let trialDataColor = [];
let trialDataWord = [];
let trialDataButton = [];
let trialDataTimeButtonClick = [];
let trialDataTimeWordShown = [];
let finalTrialTime = [];

function getRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomPlus(items) {
  return items[Math.floor(Math.random() * items.length - 1) + 1];
}

function clearCanvas() {
  window.ctx.fillStyle = "black";
  window.ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function writeText(text, color = "#000000") {
  //   clearCanvas();
  window.ctx.fillStyle = color;
  window.ctx.fillText(text, window.canvas.width / 2, window.canvas.height / 2);
  const wordTime = Date.now();
  console.log(wordTime);
  trialDataTimeWordShown.push(wordTime);
}

function setup() {
  window.canvas = document.getElementById("canvas");
  window.ctx = window.canvas.getContext("2d");
  window.ctx.fillStyle = "green";
  window.ctx.fillRect(0, 0, canvas.width, canvas.height);
  window.ctx.font = "16px Arial";
  window.ctx.textAlign = "center";
}

function endTrial() {
  clearCanvas();
  writeText("Fin");
}

function btnClicked() {
  displayTrialCongruent();

  const time = Date.now();
  trialDataTimeButtonClick.push(time);

  // Calculate and store the time between the word being shown and the button being clicked
  const wordTime = trialDataTimeWordShown[trialDataTimeWordShown.length - 1];
  const timeElapsed = time - wordTime;
  finalTrialTime.push(timeElapsed);

  console.log(finalTrialTime);
}

function displayTrialCongruent() {
  trialNum = trialNum + 1;
  if (trialNum >= trials) {
    displayTrialInCongruent();
  } else {
    clearCanvas();
    wordColor = getRandom(words);
    writeText(wordColor, wordColor);
    msSinceChange = Date.now();
  }
}
