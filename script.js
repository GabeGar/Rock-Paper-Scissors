function game() {
    function getComputerChoice() {
        const RPS = ["rock", "paper", "scissors"];
        let computerChoice = Math.floor(Math.random() * RPS.length);
        return RPS[computerChoice];
    }

    function getPlayerChoice() {
        let playerChoice = prompt("rock, paper or scissors?").toLowerCase();

        if (
            playerChoice === "rock" ||
            playerChoice === "paper" ||
            playerChoice === "scissors"
        ) {
            return playerChoice;
        } else {
            alert(
                "Invalid entry detected. Please enter only from the available choices."
            );
            return getPlayerChoice();
        }
    }

    function playRound(playerSelection, computerSelection) {
        console.log(
            `Player chose: ${playerSelection}\nComputer chose: ${computerSelection}`
        );

        if (playerSelection === computerSelection) {
            return;
        } else if (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
        ) {
            return false;
        } else if (
            (computerSelection === "rock" && playerSelection === "paper") ||
            (computerSelection === "paper" && playerSelection === "scissors") ||
            (computerSelection === "scissors" && playerSelection === "rock")
        ) {
            return true;
        }
    }

    function checkForWinner(playerScore, computerScore) {
        console.clear();
        console.log(`Player final score: ${playerScore}`);
        console.log(`Computer final score: ${computerScore}`);

        if (playerScore === computerScore) {
            console.log("Well would you look at that? It's a complete draw.");
        } else if (playerScore < computerScore) {
            console.log("Sorry player. Computer has won the game.");
        } else {
            console.log("Player has won the game! Congratulations!");
        }
    }

    let computerScore = 0;
    let playerScore = 0;

    console.log(`Players current score: ${playerScore}`);
    console.log(`Computers current score: ${computerScore}`);

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();

        let playerScored = playRound(playerSelection, computerSelection);

        function updateScore(validate) {
            if (playerScored) {
                alert("Round won! You scored.");
                playerScore += 1;
            } else if (!playerScored) {
                alert("Round lost. Computer scored.");
                computerScore += 1;
            } else {
                alert("Round Draw");
            }
        }

        updateScore(playerScored);
        console.log(`Players current score: ${playerScore}`);
        console.log(`Computers current score: ${computerScore}`);
    }

    checkForWinner(playerScore, computerScore);
}

game();
