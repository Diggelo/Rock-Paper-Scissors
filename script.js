console.log("Welcome to Rock, paper, scissor!")

// let computerChoice = ""

//Use the math.random to get three options for rock, paper, scissor for computer
function getComputersChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computerChoice = "rock";
    } else if (randomNum === 1) {
        computerChoice = "paper";
    } else if (randomNum === 2) {
        computerChoice = "scissors";
    }
    console.log("Computer choose " + computerChoice)
    return computerChoice
}

// let humanChoice = "";

//Get the choice from the user
function getHumanChoice() {
    humanChoice = prompt("What do you choose? Rock, Paper or Scissors!: ")
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock"){
        console.log("You choose " + humanChoice);
        return humanChoice
    } else if (humanChoice === "paper") {
        console.log("You choose " + humanChoice);
        return humanChoice
    } else if (humanChoice === "scissors") {
        console.log("You choose " + humanChoice);
        return humanChoice
    } else {
        console.log("Make a valid choice you fool!")
        return humanChoice
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanValue, computerValue) {
    
    // TIE if human and computer got same result
    if (humanValue === computerValue) {
        return console.log("It´s a tie, try again!")
    }

//human got rock, can meet computer paper or scissors (rock is a tie)
    if (humanValue === "rock" && computerValue === "scissors") {
        return console.log("You win! Rock beats scissors.")
    } else {
        return console.log("You loose! Paper beats rock.")
    }

 //human got paper, can meet computer scissors or rock (paper is a tie)
    if (humanValue === "paper" && computerValue === "rock") {
        return console.log("You win! Paper beats rock.")
    } else {
        return console.log("You loose! Scissors beats paper.")
    }

//human got scissors, can meet computer paper or rock (scissors is a tie)
    if (humanValue === "scissors" && computerValue === "paper") {
        return console.log("You win! Scissors beats paper.")
    } else {
        return console.log("You loose! Rock beats scissors.")
    }
}


let humanSelection = getHumanChoice();
let computerSelection = getComputersChoice();

console.log(humanSelection)
console.log(computerSelection)

playRound(humanSelection, computerSelection);

console.log("HUMAN: " + humanChoice)
console.log("COMPUTER: " + computerChoice)