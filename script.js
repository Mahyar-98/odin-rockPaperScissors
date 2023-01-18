
choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    let computerChoice = '';
    let num = Math.random()*3;
    if (num < 1) {computerChoice = choices[0];}       
    else if (1 <= num & num < 2) {computerChoice = choices[1];}
    else {computerChoice = choices[2];}
    return computerChoice;
}


function declareWinner() {
    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = prompt("Please enter your choice of either rock, paper, or scissors!").toLowerCase();
    switch (computerSelection) {
        case "rock":
            if (playerSelection === computerSelection) {
                return "It's a tie!";
            } else if (playerSelection === "paper") {
                return "You win! Paper beats rock!";
            } else {
                return "You lose! Rock beats scissors";
            }
            break;
        case "paper":
            if (playerSelection === computerSelection) {
                return "It's a tie!";
            } else if (playerSelection === "rock") {
                return "You lose! Paper beats rock!";
            } else {
                return "You win! Scissors beat paper";
            }
            break;
        case "scissors":
            if (playerSelection === computerSelection) {
                return "It's a tie!";
            } else if (playerSelection === "rock") {
                return "You win! Rock beats scissors!";
            } else {
                return "You lose! Scissors beat paper!";
            }
            break;
    }

}





x = getComputerChoice()
console.log(declareWinner())