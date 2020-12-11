let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(number) {
     return Math.floor(Math.random() * 10); 
};

function compareGuesses (currentHumanGuess, computerGuess, target) {
    if(Math.abs(currentHumanGuess - target) < Math.abs(computerGuess - target)) {
        return true;
    }

    else if(Math.abs(computerGuess - target) < Math.abs(currentHumanGuess - target)) {
        return false;
    }

    else {
        return false;
    }
};

function updateScore (winner) {
    if(winner === "human") {
        humanScore ++;
    }

    else {
        computerScore ++ ;
    }
};

function advanceRound() {
    currentRoundNumber ++;
}