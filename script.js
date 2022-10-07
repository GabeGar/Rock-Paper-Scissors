function getComputerChoice() {
    const RPS = ['Rock', 'Paper', 'Scissors']
    let computerChoice = Math.floor(Math.random() * RPS.length)
    return RPS[computerChoice]
}

const computerDecision = getComputerChoice()