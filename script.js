function getComputerChoice() {
  let choicesArr = ["rock", "paper", "scissors"];
  return choicesArr[Math.floor(Math.random() * 3)];
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    score.draw++;
    [...scoreboard][2].innerText = score.draw;
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    score.win++;
    [...scoreboard][0].innerText = score.win;
  } else {
    score.loss++;
    [...scoreboard][1].innerText = score.loss;
  }
}

function startGame(playerSelection) {
  for (i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
  }
  checkWinner();
}

function checkWinner() {
  let resultDiv = document.querySelector("#display-result");
  if (score.win == score.loss) {
    resultDiv.innerText = "You Draw!";
  } else if (score.win > score.loss) {
    resultDiv.innerText = "You Win!";
  } else {
    resultDiv.innerText = "You Lose!";
  }
}

let scoreboard = document.querySelectorAll(".display-score");
let btns = document.querySelectorAll("button");

btns.forEach((button) => {
  button.addEventListener("click", function (e) {
    let playerChoice = e.target.innerText.toLowerCase();
    startGame(playerChoice);
  });
});

let score = {
  win: 0,
  loss: 0,
  draw: 0,
};
