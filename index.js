//get choice from computer

function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

function playRound( playerSelection, computerSelection) {
    let score = 0;
    if (playerSelection === computerSelection) {
        score += 0.5;
        return "It's a tie!" ;
    
      } else if (
    
        (playerSelection === "rock" && computerSelection === "scissors") ||
    
        (playerSelection === "paper" && computerSelection === "rock") ||
    
        (playerSelection=== "scissors" && computerSelection === "paper")
    
      ) {
        score += 1;
        return (`You win! ,${playerSelection} beats ${computerSelection}`);
    
      } else {
    
        return (`Computer wins! , ${computerSelection} beats ${playerSelection}`);
    
      }
    alert("Score is " + score);
};


function game() {
    let i = 0;
    const playerSelection = prompt("choose:rock , paper or scissors").toLowerCase();

    while (  i < 5 ) {
        let computerCount = getComputerChoice();
        console.log(playRound(playerSelection, computerCount));
        
       i++;
    };
     
}
game();