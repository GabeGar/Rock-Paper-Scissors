function getComputerChoice() {
    const RPS = ['rock', 'paper', 'scissors']
    let computerChoice = Math.floor(Math.random() * RPS.length)
    return RPS[computerChoice]
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player chose: ${playerSelection}\nComputer chose: ${computerSelection}`)

    if (playerSelection === computerSelection) {
        return "It's a draw."
    } else if (
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' || 
        playerSelection === 'scissors' && computerSelection === 'rock') {
        alert("You lost the round.")
        return false
    } else if (
        computerSelection === 'rock' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection === 'scissors' || 
        computerSelection === 'scissors' && playerSelection === 'rock') {
        alert("You Won the round!")
        return true
    } else {
        return 'Invalid input. Please choose "rock", "paper" or "scissors", ONLY.'
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    const computerSelection = getComputerChoice()
    const playerSelection = prompt("rock, paper or scissors?").toLowerCase()

    let didPlayerScore = playRound(playerSelection, computerSelection) // Output

    if (didPlayerScore === false) {
        computerScore += 1
    } else {
        playerScore += 1
    }
    console.log(playerScore)
    console.log(computerScore)
}
game()