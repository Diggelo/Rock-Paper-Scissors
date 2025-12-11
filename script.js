console.log("Hello, Diggelo!")

//Use the math.random to get three options for roc, paper, scissor
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