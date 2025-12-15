
let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    let computerChoice = "";

    if (randomChoice === 0) {
        computerChoice = "rock";
    }

    if (randomChoice === 1) {
        computerChoice = "paper";
    }

    if (randomChoice === 2) {
        computerChoice = "scissors";
    }

    return computerChoice;

}

function getHumanChoice() {
    let humanChoice = prompt("Paper, Scissors or Rock?").toLowerCase();
    return humanChoice;
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
        humanScore += 1;
    }else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
        humanScore += 1;
    }else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
        humanScore += 1;
    }else if (humanSelection === computerSelection) {
        console.log("Its a draw!");
    } else {
        console.log("You Loose! " + computerSelection + " beats " + humanSelection);
        computerScore += 1;
    }
    
}

//playRound(getHumanChoice(), getComputerChoice());

function playGame() {
    let round = 1;

    while (round <= 5) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Round " + (round) + ": Human Score: " + humanScore + " | Computer Score: " + computerScore);
        round += 1;
    }
    
    console.log("End of Game")
}

playGame();