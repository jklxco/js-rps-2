function getComputerChoice() {
  let choicesArr = ["rock", "paper", "scissors"];
  return choicesArr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
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
  score.round++;
  if (score.round == 5) { checkWinner() }
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
    playRound(playerChoice);
  });
});

let score = {
  win: 0,
  loss: 0,
  draw: 0,
  round: 0,
};
