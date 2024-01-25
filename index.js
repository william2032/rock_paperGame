//get choice from computer
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const choices = ["rock","paper","scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
};

function playRound( playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        
        return "It's a tie!" ;
    
      } else if (
    
        (playerSelection === "rock" && computerSelection === "scissors") ||
    
        (playerSelection === "paper" && computerSelection === "rock") ||
    
        (playerSelection=== "scissors" && computerSelection === "paper")
    
      ) {
       playerScore++;
        return (`You win! ,${playerSelection} beats ${computerSelection}`);
    
      } else {
      computerScore++;
        return (`Computer wins! , ${computerSelection} beats ${playerSelection}`);
    
      }
};

function selection() {
  // Use while loop to keep prompting until a valid choice is made
  while (true) {
    playerSelection = prompt("Rock, Paper or Scissors?");
    
    // Check if playerSelection is null (user pressed Cancel)
    if (playerSelection === null) {
      alert("You canceled the game.");
      return false;
    }

    let input = playerSelection.toLowerCase();
    
    // Check if the input is a valid choice
    if (input === "rock" || input === "paper" || input === "scissors") {
      return input;
    } else {
      alert("Please enter a valid choice between Rock, Paper, and Scissors.");
      // Continue the loop to prompt again
    }
  }
}


function game() {
    selection();
    let i = 0;
    while (  i < 5 ) {
      let playerChoice = playerSelection;
      let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice ,computerChoice));
       i++;
    }; 

const totalWins = `Total Wins: Player ${playerScore} - ${computerScore } Computer`;

// Determine the overall winner
const overallWinner =
playerScore > computerScore 
    ? "You are the overall winner!"
    : playerScore < computerScore 
    ? "Computer is the overall winner!"
    : "The game is a tie!";

// Output total wins and overall winner
console.log(totalWins);
console.log(overallWinner);
}

game()