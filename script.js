console.log("Welcome to Rock, paper, scissor!");

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
    console.log("Computer choose " + computerChoice);
    return computerChoice;
}

//Get the choice from the user
function getHumanChoice() {
    humanChoice = prompt("What do you choose? Rock, Paper or Scissors!: ")
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock"){
        console.log("You choose " + humanChoice);
        return humanChoice;
    } else if (humanChoice === "paper") {
        console.log("You choose " + humanChoice);
        return humanChoice;
    } else if (humanChoice === "scissors") {
        console.log("You choose " + humanChoice);
        return humanChoice;
    } else {
        console.log("Make a valid choice you fool!");
        return humanChoice;
    }
}

// let humanScore = 0; (moved to playGame)
// let computerScore = 0; (moved to playGame)

function playRound(humanValue, computerValue) {
    
    // TIE if human and computer got same result
    if (humanValue === computerValue) {
        return console.warn("It´s a tie, try again!");
    }

//human got rock, can meet computer paper or scissors (rock is a tie)
    if (humanValue === "rock" && computerValue === "scissors") {
        humanScore = humanScore + 1;
        return console.warn("You win! Rock beats scissors.");
    } else if (humanValue === "rock" && computerValue === "paper"){
        computerScore = computerScore + 1;
        return console.warn("You loose! Paper beats rock.");
    }

 //human got paper, can meet computer scissors or rock (paper is a tie)
    else if (humanValue === "paper" && computerValue === "rock") {
        humanScore = humanScore + 1;
        return console.warn("You win! Paper beats rock.");
    } else if (humanValue === "paper" && computerValue === "scissors"){
        computerScore = computerScore + 1;
        return console.warn("You loose! Scissors beats paper.");
    }

//human got scissors, can meet computer paper or rock (scissors is a tie)
    else if (humanValue === "scissors" && computerValue === "paper") {
        humanScore = humanScore + 1;
        return console.warn("You win! Scissors beats paper.");
    } else if (humanValue === "scissors" && computerValue === "rock") {
        computerScore = computerScore + 1;
        return console.warn("You loose! Rock beats scissors.");
    }
}

// const humanSelection = getHumanChoice(); (moved to playGame)
// const computerSelection = getComputersChoice(); (moved to playGame)

// console.log("Check humanSelection: " + humanSelection);
// console.log("Check computerSelection: " + computerSelection);

// playRound(humanSelection, computerSelection); (moved to playGame)

// console.log("humanChoice: " + humanChoice);
// console.log("computerChoice: " + computerChoice);

    let humanScore = 0;
    let computerScore = 0;
    let humanSelection = "";
    let computerSelection = "";

// get new choices from human and computer
function getChoices () {
    humanSelection = getHumanChoice();
    computerSelection = getComputersChoice();
}

// function to play the game
function playGame() {
    // round 1
    getChoices()
    playRound(humanSelection, computerSelection);
    console.log(("Finished round 1, the results are Human: " + humanScore) + (" Computer: " + computerScore));

    // round 2
    getChoices()
    playRound(humanSelection, computerSelection);
    console.log(("Finished round 2, the results are Human: " + humanScore) + (" Computer: " + computerScore));
    
    // round 3
    getChoices()
    playRound(humanSelection, computerSelection);
    console.log(("Finished round 3, the results are Human: " + humanScore) + (" Computer: " + computerScore));
    
    // round 4
    getChoices()
    playRound(humanSelection, computerSelection);
    console.log(("Finished round 4, the results are Human: " + humanScore) + (" Computer: " + computerScore));

    // round 5 (final round)
    getChoices()
    playRound(humanSelection, computerSelection);
    console.log(("Finished final round, the results are Human: " + humanScore) + (" Computer: " + computerScore));

    // Scores after the game
    if (humanScore < computerScore) {
        return console.log("You loose! The end results are: Human: " + humanScore + " Computer: " + computerScore);
    } else if (humanScore > computerScore) {
        return console.log("You win! The end results are: Human: " + humanScore + " Computer: " + computerScore);
    } else if (humanScore === computerScore) {
        return console.log("It's a tie! The end results are: Human: " + humanScore + " Computer: " + computerScore);
    }
}

playGame()

console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);