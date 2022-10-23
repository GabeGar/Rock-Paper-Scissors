const allButtons = document.querySelectorAll("#btn");
const resultsContainer = document.querySelector(".results");
const playerDiv = document.querySelector("#player");
const computerDiv = document.querySelector("#computer");
const roundStatus = document.querySelector("#round-status");

//Global Scores
let playerScore = 0;
let computerScore = 0;

// Styles
roundStatus.style.fontSize = "24px";
roundStatus.style.fontWeight = "bold";

function getComputerChoice() {
    const RPS = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * RPS.length);
    return RPS[computerChoice];
}

function clearRoundStatus() {
    roundStatus.textContent = ""; //Clears status before updating
}

function getRoundStatus(playerChoice, computerChoice) {
    clearRoundStatus();

    if (computerChoice === playerChoice) {
        roundStatus.textContent = "Draw";
    } else if (
        (computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")
    ) {
        roundStatus.textContent = "Round Won";
    } else {
        roundStatus.textContent = "Round Lost";
    }
    return roundStatus;
}

function updateScore(status) {
    if (status.textContent === "Draw") return;
    else if (status.textContent === "Round Won") {
        playerScore += 1;
    } else if (status.textContent === "Round Lost") {
        computerScore += 1;
    }
    playerDiv.textContent = `Player Score: ${playerScore}`;
    computerDiv.textContent = `Computer Score: ${computerScore}`;
}

//Main game function

function playRound(playerEvent) {
    const playerSelection = playerEvent.target.textContent.toLowerCase();
    const compSelection = getComputerChoice();

    let status = getRoundStatus(playerSelection, compSelection);
    updateScore(status);
}

for (let button of allButtons) {
    button.addEventListener("click", playRound);
}
