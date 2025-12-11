console.log("Hello, Diggelo!")

//Use the math.random to get three options for rock, paper, scissor
function getComputersChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice = ""
    if (randomNum === 0) {
        choice = "Rock";
    } else if (randomNum === 1) {
        choice = "Paper";
    } else if (randomNum === 2) {
        choice = "Scissors";
    }
    return choice
}

console.log(getComputersChoice())


//Get the choice from the user
function getHumanChoice() {
    let humanChoice = prompt("What do you choose? Rock, Paper or Scissors!: ")
    if (humanChoice === "Rock"){
        return console.log("You choose " + humanChoice);
    } else if (humanChoice === "Paper") {
        return console.log("You choose " + humanChoice);
    } else if (humanChoice === "Scissors") {
        return console.log("You choose " + humanChoice);
    } else {
        return console.log("Make a valid choice you fool!")
    }
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //Code here
}

const humanSelection = getHumanChoice();
const computerSelection = getComputersChoice();

playRound(humanSelection, computerSelection);