function getComputerChoice(){
    let oneToThree = Math.floor(Math.random() * 3) + 1; //+1 raises the floor and ceiling by 1
    if(oneToThree == 1){
        return "Rock";
    }
    else if(oneToThree == 2){
        return "Paper";
    }
    else if(oneToThree == 3){
        return "Scissors";
    }
}

function playRound(){
    let playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
    let computerSelection = getComputerChoice().toUpperCase();
    let playerWin = false; 
    let isDraw = false;

    if(playerSelection == computerSelection){ //draw condition
        isDraw = true;
    }
    else if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){ //else ifs represent player win conditions, if none are met the computer must have won
        playerWin = true;
    }
    else if(playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        playerWin = true;
    }
    else if(playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        playerWin = true;
    }

    if(isDraw){
        console.log(`Draw this round! ${playerSelection} negates ${computerSelection}`);
        return 0;
    }
    else if(playerWin){
        console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }
    else{
        console.log(`You lose this round! ${computerSelection} beats ${playerSelection}`);
        return 2;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let x = 0; x < 5; x++){
        let result = playRound();
        if(result == 1){
            playerScore++;
        }
        else if(result == 2){
            computerScore++;
        }
    }
    
    if(playerScore == computerScore){
        console.log(`Game draw! ${playerScore} rounds to ${computerScore} rounds`);
    }
    else if(playerScore > computerScore){
        console.log(`You win the game! ${playerScore} rounds to ${computerScore} rounds`);
    }
    else{
        console.log(`You lose the game! ${computerScore} rounds to ${playerScore} rounds`);
    }
}

game();

