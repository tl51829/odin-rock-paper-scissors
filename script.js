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
    
const buttons = document.querySelectorAll('button');
const div = document.createElement('div');
const div2 = document.createElement('div');
const body = document.querySelector('body');

body.appendChild(div);
body.insertBefore(div2, div);

let playerScore = 0;
let computerScore = 0;
let counter = 0;

div2.innerHTML = "Game Number: " + counter + "<br>" + "Player Score: " + playerScore + "<br>" + "Computer Score: " + computerScore + "<br>";

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerSelection = e.target.textContent;
        let computerSelection = getComputerChoice();
        let result = playRound(computerSelection , playerSelection);

        div.innerHTML = result + "<br>";

        if (result.slice(4,7) === 'Win') { 
            playerScore++;
        } else if (result.slice(4,8) === 'Lose') {
            computerScore++;
        }

        counter++;
        div2.innerHTML = "Game Number: " + counter + "<br>" +  "Player Score: " + playerScore + "<br>" + "Computer Score: " + computerScore + "<br>";

        if (playerScore === 5 || computerScore === 5) {
            if (playerScore === 5) {
                div.innerHTML += "You are the winner!";
            } else {
                div.innerHTML += "The computer is the winner!";
            }
            
            div.innerHTML += "<br>" + "Choose another move to restart the game!"
            
            playerScore = 0;
            computerScore = 0;
            counter = 0;
        }
    });
});
