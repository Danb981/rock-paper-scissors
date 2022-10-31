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

function playRound(playerSelection, getComputerChoice){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
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
        return `Draw! ${playerSelection} negates ${computerSelection}`;
    }
    else if(playerWin){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

