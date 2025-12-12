console.log("Hello, Diggelo!")

//Use the math.random to get three options for rock, paper, scissor
function getComputersChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice = ""
    if (randomNum === 0) {
        choice = "rock";
    } else if (randomNum === 1) {
        choice = "paper";
    } else if (randomNum === 2) {
        choice = "scissors";
    }
    return choice
}

console.log(getComputersChoice())


//Get the choice from the user
function getHumanChoice() {
    let humanChoice = prompt("What do you choose? Rock, Paper or Scissors!: ")
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock"){
        return console.log("You choose " + humanChoice);
    } else if (humanChoice === "paper") {
        return console.log("You choose " + humanChoice);
    } else if (humanChoice === "scissors") {
        return console.log("You choose " + humanChoice);
    } else {
        return console.log("Make a valid choice you fool!")
    }
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
// TIE if human and computer got same result
    if (humanSelection === computerSelection) {
        return console.log("It´s a tie, try again!")
    }

//human got rock, can meet computer paper or scissors (rock is a tie)
 if (humanSelection === "rock" && computerSelection === "scissors") {
    return console.log("You win! Rock beats scissors.")
 } else {
    return console.log("You loose! Paper beats rock.")
 }

 //human got paper, can meet computer scissors or rock (paper is a tie)
 if (humanSelection === "paper" && computerSelection === "rock") {
    return console.log("You win! Paper beats rock.")
 } else {
    return console.log("You loose! Scissors beats paper.")
 }

//human got scissors, can meet computer paper or rock (scissors is a tie)
 if (humanSelection === "scissors" && computerSelection === "paper") {
    return console.log("You win! Scissors beats paper.")
 } else {
    return console.log("You loose! Rock beats scissors.")
 }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputersChoice();

playRound(humanSelection, computerSelection);