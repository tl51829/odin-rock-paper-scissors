function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    
    if (randomInt === 0) {
        return 'Rock';
    } else if (randomInt === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(computerSelection, playerSelection) {
    playerSelection =  playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return `Tie! Computer also chose ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice(); 
        let playerSelection = prompt("What is your move?");
        let result = playRound(computerSelection, playerSelection);
        // Delete later
        console.log(result);

        if (result.slice(4,7) === 'Win') {
            playerScore++;
        } else if (result.slice(4,8) === 'Lose') {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        return "You are the winner!";
    } else if (playerScore < computerScore) {
        return "The computer is the winner!";
    } else {
        return "Tie!";
    }
}

// Delete later
console.log(game());