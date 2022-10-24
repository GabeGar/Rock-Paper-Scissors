function game() {
    // Query Selectors
    const allButtons = document.querySelectorAll("#btn");
    const resultsContainer = document.querySelector(".results-container");
    const playerScoreDiv = document.querySelector("#player");
    const computerScoreDiv = document.querySelector("#computer");
    const roundStatus = document.querySelector("#round-status");
    const playerChose = document.querySelector("#player-choice");
    const computerChose = document.querySelector("#computer-choice");

    //New element(s)
    const announceWinner = document.createElement("div");

    // Images
    const playerRockImage = document.createElement("img");
    const playerPaperImage = document.createElement("img");
    const playerScissorsImage = document.createElement("img");
    const computerRockImage = document.createElement("img");
    const computerPaperImage = document.createElement("img");
    const computerScissorsImage = document.createElement("img");

    // Player image attributes
    playerRockImage.src = "images/rock.png";
    playerRockImage.setAttribute("style", "width: 200px; height: 200px;");
    playerPaperImage.src = "images/paper.png";
    playerPaperImage.setAttribute("style", "width: 200px; height: 200px;");
    playerScissorsImage.src = "images/scissors.png";
    playerScissorsImage.setAttribute("style", "width: 200px; height: 200px;");

    // Computer image attributes
    computerRockImage.src = "images/rock.png";
    computerRockImage.setAttribute("style", "width: 200px; height: 200px;");
    computerPaperImage.src = "images/paper.png";
    computerPaperImage.setAttribute("style", "width: 200px; height: 200px;");
    computerScissorsImage.src = "images/scissors.png";
    computerScissorsImage.setAttribute("style", "width: 200px; height: 200px;");

    // Styles & Attributes
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

    function getRoundStatus(playerChoice, computerChoice) {
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
        playerScoreDiv.textContent = `Player Score: ${playerScore}`;
        computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    }

    function playerWon() {
        resultsContainer.removeChild(roundStatus);
        announceWinner.textContent = "Player has won the game! Congrats!";
        resultsContainer.appendChild(announceWinner);
    }

    function computerWon() {
        resultsContainer.removeChild(roundStatus);
        announceWinner.textContent =
            "Computer has won the game. Better luck next time!";
        resultsContainer.appendChild(announceWinner);
    }

    function checkWinner(playerScore, computerScore) {
        if (playerScore === 5 && computerScore < 5) {
            playerWon();
            return true;
        } else if (computerScore === 5 && playerScore < 5) {
            computerWon();
            return true;
        }
        return;
    }

    function displayChosenChoices(playerChoice, computerChoice) {
        // Player
        playerChose.appendChild(playerRockImage);
        playerChose.appendChild(playerPaperImage);
        playerChose.appendChild(playerScissorsImage);

        if (playerChoice === "rock") {
            playerChose.removeChild(playerPaperImage);
            playerChose.removeChild(playerScissorsImage);
        } else if (playerChoice === "paper") {
            playerChose.removeChild(playerRockImage);
            playerChose.removeChild(playerScissorsImage);
        } else if (playerChoice === "scissors") {
            playerChose.removeChild(playerRockImage);
            playerChose.removeChild(playerPaperImage);
        }

        // Computer
        computerChose.appendChild(computerRockImage);
        computerChose.appendChild(computerPaperImage);
        computerChose.appendChild(computerScissorsImage);

        if (computerChoice === "rock") {
            computerChose.removeChild(computerPaperImage);
            computerChose.removeChild(computerScissorsImage);
        } else if (computerChoice === "paper") {
            computerChose.removeChild(computerRockImage);
            computerChose.removeChild(computerScissorsImage);
        } else if (computerChoice === "scissors") {
            computerChose.removeChild(computerRockImage);
            computerChose.removeChild(computerPaperImage);
        }
    }

    //Main game function
    function playRound(playerEvent) {
        const compSelection = getComputerChoice();
        const playerSelection = playerEvent.target.textContent.toLowerCase();

        displayChosenChoices(playerSelection, compSelection);

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
