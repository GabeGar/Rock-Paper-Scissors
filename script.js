const allButtons = document.querySelectorAll("#btn");
const resultsContainer = document.querySelector(".results");
const playerDiv = document.querySelector("#player");
const computerDiv = document.querySelector("#computer");
const roundStatus = document.querySelector("#round-status");

let playerScore = 0;
let computerScore = 0;

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
    roundStatus.style.fontSize = "24px";
    roundStatus.style.fontWeight = "bold";

    if (computerChoice === playerChoice) {
        roundStatus.textContent = "Draw";
    } else if (
        (computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")
    ) {
        roundStatus.textContent = "Player Won The Round";
    } else {
        roundStatus.textContent = "Computer Won The Round";
    }
}

function playRound(playerEvent) {
    const playerSelection = playerEvent.target.textContent.toLowerCase();
    const compSelection = getComputerChoice();

    getRoundStatus(playerSelection, compSelection);
}

for (let button of allButtons) {
    button.addEventListener("click", playRound);
}
