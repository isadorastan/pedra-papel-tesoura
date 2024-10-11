// elementos clicáveis
const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorEl = document.getElementById("scissor");
const playButton = document.getElementById("play");

// telas
const choiceScreen = document.getElementById("choice");
const resultScreen = document.getElementById("result");
const containerEL = document.getElementById("container");

// elementos da tela de resultado
const robotChoiceEl = document.getElementById("robot-choice");
const userChoiceEl = document.getElementById("user-choice");
const resultLabel = document.getElementById("result-label");

const scoreLabel = document.getElementById("score");

// event listeners
rockEl.addEventListener("click", startGame);
paperEl.addEventListener("click", startGame);
scissorEl.addEventListener("click", startGame);
play.addEventListener("click", resetGame);

// Variaveis de Estado
let userChoice = "";
let robotChoice = "";
let result = "";
let score = 0;

const GAME_OPTIONS = ["rock", "paper", "scissor"];
const WINNER_STATE = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper",
};
const ICONS = {
  rock: "👊🏼",
  paper: "✋🏼",
  scissor: "✌🏼",
};
const TRANSLATE_RESULT = {
  draw: "Empate",
  winner: "Você ganhou!",
  loser: "Você perdeu",
};

function resetGame() {
  containerEL.classList = "";
  resultScreen.style.display = "none";
  choiceScreen.style.display = "flex";

  userChoice = "";
  robotChoice = "";
  result = "";
}

function startGame(e) {
  userChoice = e.target.id;
  robotChoice = handleRobotChoice();
  result = handleResult();
  handleScreenChange();
  handleScore();
}

function handleScore() {
  if (result === "winner") score++;
  if (result === "loser") score--;
  scoreLabel.innerHTML = `Score: ${score}`;
}

function handleScreenChange() {
  userChoiceEl.innerHTML = ICONS[userChoice];
  robotChoiceEl.innerHTML = ICONS[robotChoice];
  resultLabel.innerHTML = TRANSLATE_RESULT[result];

  containerEL.classList.add(result);
  resultScreen.style.display = "flex";
  choiceScreen.style.display = "none";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleRobotChoice() {
  const index = getRandomInt(0, 2);
  return GAME_OPTIONS[index];
}

function handleResult() {
  if (userChoice === robotChoice) return "draw";
  const userWinsFrom = WINNER_STATE[userChoice];
  if (userWinsFrom === robotChoice) return "winner";
  else return "loser";
}
