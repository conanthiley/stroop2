const startBtn = document.getElementById("start-btn");
const words = ["green", "blue", "red", "yellow"];
const colors = ["green", "blue", "red", "yellow"];
const blueBtn = document.getElementById("btn-blue");
const redBtn = document.getElementById("btn-red");
const greenBtn = document.getElementById("btn-green");
const yellobBtn = document.getElementById("btn-yello");

let btnColor;

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

let trialData = [
  {
    trialDataColor: [],
    trialDataWord: [],
    trialDataButton: [],
    trialDataTimeButtonClick: [],
    trialDataTimeWordShown: [],
    finalTrialTime: [],
  },
];

const btn = document.getElementsByClassName("btn");

redBtn.onclick = btnClicked;
blueBtn.onclick = btnClicked;
greenBtn.onclick = btnClicked;
greenBtn.onclick = btnClicked;
yellobBtn.onclick = btnClicked;

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

function timeHelper(clickTime, timeStore) {
  trialDataTime.push(showTime);
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

  //   console.log("button " + this.id);
  console.log(trialDataTimeButtonClick);
  timeHelper();
}
function timeHelper() {
  for (let i = 0; i <= trials; i++) {
    const trialTime =
      trialDataTimeWordShown[i] - trialDataTimeButtonClick[i] / 1000;
    finalTrialTime.push(trialTime);
    // console.log(trialDataTimeButtonClick[i]);
  }
}
function displayTrialCongruent() {
  trialNum = trialNum + 1;
  if (trialNum >= trials) {
    displayTrialInCongruent();
  } else {
    clearCanvas();
    wordColor = getRandom(words);
    writeText(wordColor, wordColor);
    msSinceChange = Date.now() / 1000;

    // console.log("word is shown " + Date.now() / 1000);
  }
  function displayTrialInCongruent() {
    trialNum = trialNum + 1;
    if (trialNum >= trials) {
      endTrial();
    } else {
      clearCanvas();
      word = getRandom(words);
      color = getRandom(colors);
      if (word === color) {
        displayTrialInCongruent();
      } else {
        writeText(word, color);
      }
    }
  }
}

function start() {
  setup();
  btnClicked();
}

console.log(finalTrialTime);
