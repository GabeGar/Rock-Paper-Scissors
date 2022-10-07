function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw."
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' || 
    playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose. ${computerSelection} beats ${playerSelection}`
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
}

function getComputerChoice() {
    const RPS = ['Rock', 'Paper', 'Scissors']
    let computerChoice = Math.floor(Math.random() * RPS.length)
    return RPS[computerChoice].toLowerCase()
}

const computerSelection = getComputerChoice()
console.log(`Computer chose: ${computerSelection}`) // Debugging -- shows comp choice
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase()
console.log(`Player chose: ${playerSelection}`) // Debugging -- show player choice

console.log(playRound(playerSelection, computerSelection)) // Debugging -- output