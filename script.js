function game() {
    function getComputerChoice() {
        const RPS = ["rock", "paper", "scissors"];
        let computerChoice = Math.floor(Math.random() * RPS.length);
        return RPS[computerChoice];
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
        } else {
            return 'Invalid input. Please choose "rock", "paper" or "scissors", ONLY.';
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
        const playerSelection = prompt(
            "rock, paper or scissors?"
        ).toLowerCase();

        let didPlayerScore = playRound(playerSelection, computerSelection);

        function checkAndUpdateScore(validate) {
            if (didPlayerScore === false) {
                alert("Round lost. Computer scored.");
                computerScore += 1;
            } else if (didPlayerScore === true) {
                alert("Round won! You scored.");
                playerScore += 1;
            } else {
                alert("Round Draw");
            }
        }

        checkAndUpdateScore(didPlayerScore);
        console.log(`Players current score: ${playerScore}`);
        console.log(`Computers current score: ${computerScore}`);
    }

    checkForWinner(playerScore, computerScore);
}

game();
