let humanScore = 0;
let computerScore = 0;
let result;

let humanScoreTracker = document.querySelector("#human-score");
let computerScoreTracker = document.querySelector("#computer-score");
let resultsDiv = document.querySelector("#results");

let userSelection = document.querySelector("#user-selection");

userSelection.addEventListener("click", function (event) {
  let target = event.target;

  switch (target.id) {
    case "rock-button":
      playRound("rock", getComputerChoice());
      scoreTracker();
      break;
    case "paper-button":
      playRound("paper", getComputerChoice());
      scoreTracker();
      break;
    case "scissors-button":
      playRound("scissors", getComputerChoice());
      scoreTracker();
      break;
  }
});

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

function scoreTracker() {
  humanScoreTracker.textContent = `Human Score: ${humanScore}`;
  computerScoreTracker.textContent = `Computer Score: ${computerScore}`;

  if (humanScore === 5) {
    result = "Human won.";
    const humanWonDeclaration = document.createElement("p");
    humanWonDeclaration.textContent = "Human won by getting to 5 pts first";
    resultsDiv.appendChild(humanWonDeclaration);
  } else if (computerScore === 5) {
    result = "Computer won.";
    const computerWonDeclaration = document.createElement("p");
    computerWonDeclaration.textContent =
      "Computer won by getting to 5 pts first";
    resultsDiv.appendChild(computerWonDeclaration);
  }
}
