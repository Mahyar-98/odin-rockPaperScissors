
choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    let computerChoice = '';
    let num = Math.random()*3;
    if (num < 1) {computerChoice = choices[0];}       
    else if (1 <= num & num < 2) {computerChoice = choices[1];}
    else {computerChoice = choices[2];}

    console.log(computerChoice)
}

getComputerChoice()