let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let result = document.getElementById("result");
let player = document.getElementById("player");
let computer = document.getElementById("computer");

function computerPlay() {
  const num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    return "Rock";
  } else if (num === 2) {
    return "Paper";
  } else if (num === 3) {
    return "Scissors";
  }
}

function playRound(selection) {
  let computerSelection = computerPlay();
  let playerSelection = selection.originalTarget.innerHTML; //.attributes[1];

  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    playerScore++;
    result.innerHTML = `${playerSelection} beats ${computerSelection}! You win!`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    computerScore++;
    result.innerHTML = `${computerSelection} beats ${playerSelection}! You lose!`;
  } else {
    result.innerHTML = `Both players picked ${computerSelection}. It's a draw.`;
  }
  player.innerHTML = `Player Score: ${playerScore}`;
  computer.innerHTML = `Computer Score: ${computerScore}`;

  if (playerScore === 5) {
    result.innerHTML = "You have 5 points! Well done, you won!";
    player.innerHTML = "";
    computer.innerHTML = "";
  } else if (computerScore === 5) {
    result.innerHTML = "The computer has 5 points. Sorry you lost.";
    player.innerHTML = "";
    computer.innerHTML = "";
  }
}

document.getElementById("Rock").addEventListener("click", playRound);
document.getElementById("Paper").addEventListener("click", playRound);
document.getElementById("Scissors").addEventListener("click", playRound);
