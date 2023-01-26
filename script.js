
choices = ['Rock', 'Paper', 'Scissors']

const buttons = document.querySelectorAll("div button");
const resultDiv = document.querySelector(".result");
const playerScore = document.querySelector("div.player-score p");
const computerScore = document.querySelector("div.computer-score p");
const finalResult = document.querySelector(".final-result");


function getComputerChoice() {
    let computerChoice = '';
    let num = Math.random()*3;
    if (num < 1) {computerChoice = choices[0];}       
    else if (1 <= num & num < 2) {computerChoice = choices[1];}
    else {computerChoice = choices[2];}
    return computerChoice;
}

function playerSelect() {
    buttons.forEach(button => {
    button.addEventListener("click", e => playRound(e.target.textContent.toLowerCase()))
    });
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice().toLowerCase();
    let resultText = "";
    if (+playerScore.textContent !== 5 && +computerScore.textContent !== 5) {
        switch (computerSelection) {
            case "rock":
                if (playerSelection === computerSelection) {
                    resultText = "It's a tie!";
                } else if (playerSelection === "paper") {
                    resultText = "You win! Paper beats rock!";
                } else {
                    resultText = "You lose! Rock beats scissors";
                }
                break;
            case "paper":
                if (playerSelection === computerSelection) {
                    resultText = "It's a tie!";
                } else if (playerSelection === "rock") {
                    resultText = "You lose! Paper beats rock!";
                } else {
                    resultText = "You win! Scissors beat paper";
                }
                break;
            case "scissors":
                if (playerSelection === computerSelection) {
                    resultText = "It's a tie!";
                } else if (playerSelection === "rock") {
                    resultText = "You win! Rock beats scissors!";
                } else {
                    resultText = "You lose! Scissors beat paper!";
                }
                break;
        }
        resultDiv.textContent += resultText + "\n";

        if (resultText.includes("tie")) {
            computerScore.textContent++;
            playerScore.textContent++;
        } else if (resultText.includes("win")) {
            playerScore.textContent++;
        } else {
            computerScore.textContent++;
        }
    }
    
    if (+computerScore.textContent === 5) {
        finalResult.textContent = "Computer is the winner!";
    } else if (+playerScore.textContent === 5) {
        finalResult.textContent = "Player is the winner";
    } else if (+playerScore.textContent === 5 && +computerScore.textContent === 5){
        finalResult.textContent = "It's a tie!";
    }

}


/*function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playerSelect();
        console.log(result);
        if (result.includes("tie")) {
            computerScore++;
            playerScore++;
        } else if (result.includes("win")) {
            playerScore++;
        } else {
            computerScore++;
        }
    }
    return `Player score is ${playerScore} and computer score is ${computerScore}.`
}*/


    playerSelect()