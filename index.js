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

function playGame() {
  let result;

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    result = "Human won.";
  } else if (computerScore > humanScore) {
    result = "Computer won.";
  }

  humanScore = 0;
  computerScore = 0;
  return result;
}
