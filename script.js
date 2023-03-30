let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 9);
}

function compareGuesses(humanGuess, computerGuess, target) {
  let humanDifference;
  let computerDifference;

  if (humanGuess > target)
    humanDifference = humanGuess - target;
  else
    humanDifference = target - humanGuess;

  if (computerGuess > target)
    computerDifference = computerGuess - target;
  else
    computerDifference = target - computerGuess;

  if (computerDifference < humanDifference)
    return false;
  else
    return true;
}

function updateScore(winner) {
  if(winner === 'human')
    humanScore++;
  else
    computerScore++;
}

function advanceRound() {
  currentRoundNumber++;
}