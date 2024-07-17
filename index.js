let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Select rock, paper or scissors.").toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore += 1;
    } else if (computerChoice === "scissor") {
      humanScore += 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore += 1;
    } else if (computerChoice === "rock") {
      humanScore += 1;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore += 1;
    } else if (computerChoice === "paper") {
      humanScore += 1;
    }
  }
}
