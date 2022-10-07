function getComputerChoice() {
    const RPS = ['rock', 'paper', 'scissors']
    let computerChoice = Math.floor(Math.random() * RPS.length)
    return RPS[computerChoice]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw."
    } else if (
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' || 
        playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose. Computer chose: ${computerSelection} which beats player choice: ${playerSelection}`
    } else if (
        computerSelection === 'rock' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection === 'scissors' || 
        computerSelection === 'scissors' && playerSelection === 'rock') {
        return `You Win! You chose: ${playerSelection}, which beats computer choice: ${computerSelection}`
    } else {
        return 'Invalid input. Please choose "rock", "paper" or "scissors", ONLY.'
    }
}

function game() {

const computerSelection = getComputerChoice()
const playerSelection = playerChoice = prompt("rock, paper or scissors?").toLowerCase()
console.log(playRound(playerSelection, computerSelection)) // Output
}

game()