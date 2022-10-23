function game() {
    const allButtons = document.querySelectorAll("#btn");
    const resultsContainer = document.querySelector(".results");
    const playerDiv = document.querySelector("#player");
    const computerDiv = document.querySelector("#computer");
    const roundStatus = document.querySelector("#round-status");
    const announceWinner = document.createElement("div");

    // Styles
    roundStatus.setAttribute("style", "font-size: 24px; font-weight: bold");
    announceWinner.setAttribute("style", "font-size: 24px; font-weight: bold");

    //Global Scores
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
        return [playerScore, computerScore]; // returns both scores as an array
    }

    function playerWon() {
        resultsContainer.removeChild(roundStatus);
        announceWinner.textContent = "Player has Won the Game! Congrats!";
        resultsContainer.appendChild(announceWinner);
    }

    function computerWon() {
        resultsContainer.removeChild(roundStatus);
        announceWinner.textContent = "Computer has Won the Game. Oof!";
        resultsContainer.appendChild(announceWinner);
    }

    function checkWinner(playerScore, computerScore) {
        if (playerScore === 5 && computerScore < 5) {
            playerWon();
            return true;
        } else if (computerScore === 5 && playerScore < 5) {
            computerWon();
            return true;
        } else return false;
    }

    //Main game function
    function playRound(playerEvent) {
        const playerSelection = playerEvent.target.textContent.toLowerCase();
        const compSelection = getComputerChoice();

        let status = getRoundStatus(playerSelection, compSelection);
        updateScore(status);
        let isGameOver = checkWinner(playerScore, computerScore);

        if (isGameOver) {
            allButtons.forEach((button) =>
                button.removeEventListener("click", playRound)
            );
        }
    }

    for (let button of allButtons) {
        button.addEventListener("click", playRound);
    }
}

game();
