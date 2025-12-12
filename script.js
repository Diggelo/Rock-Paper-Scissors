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
        return console.warn("It´s a tie, try again!")
    }

//human got rock, can meet computer paper or scissors (rock is a tie)
    if (humanValue === "rock" && computerValue === "scissors") {
        humanScore = humanScore + 1
        return console.warn("You win! Rock beats scissors.")
    } else if (humanValue === "rock" && computerValue === "paper"){
        computerScore = computerScore + 1
        return console.warn("You loose! Paper beats rock.")
    }

 //human got paper, can meet computer scissors or rock (paper is a tie)
    else if (humanValue === "paper" && computerValue === "rock") {
        humanScore = humanScore + 1
        return console.warn("You win! Paper beats rock.")
    } else if (humanValue === "paper" && computerValue === "scissors"){
        computerScore = computerScore + 1
        return console.warn("You loose! Scissors beats paper.")
    }

//human got scissors, can meet computer paper or rock (scissors is a tie)
    else if (humanValue === "scissors" && computerValue === "paper") {
        humanScore = humanScore + 1
        return console.warn("You win! Scissors beats paper.")
    } else if (humanValue === "scissors" && computerValue === "rock") {
        computerScore = computerScore + 1
        return console.warn("You loose! Rock beats scissors.")
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputersChoice();

// console.log("Check humanSelection: " + humanSelection);
// console.log("Check computerSelection: " + computerSelection);

playRound(humanSelection, computerSelection);

// console.log("humanChoice: " + humanChoice);
// console.log("computerChoice: " + computerChoice);

console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);