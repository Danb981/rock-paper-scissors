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

function playRound(event){
    let playerSelection = event.target.id.toUpperCase();
    let computerSelection = getComputerChoice().toUpperCase();
    let playerWin = false; 
    let isDraw = false;
    let roundResultText;

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
        roundResultText=`Draw this round! ${playerSelection} negates ${computerSelection}`;
    }
    else if(playerWin){
        roundResultText=`You win this round! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }
    else{
        roundResultText=`You lose this round! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    updateUI(roundResultText);
}

function updateUI(roundResultText){
    roundResult.textContent = roundResultText;
    scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    if(playerScore === 5 || computerScore === 5){
        winner.textContent = `${playerScore === 5 ? 'You win' : 'Computer wins'}!`;
        reset.style.visibility = 'visible';
        buttons.forEach(button => button.style.visibility="hidden");
    }
}

function resetGame(event){
    playerScore = 0;
    computerScore = 0;
    roundResult.textContent = "";
    scores.textContent = "";
    winner.textContent = "";
    reset.style.visibility = 'hidden';
    buttons.forEach(button => button.style.visibility="visible");
}

/* code playing 5 rounds
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
*/

let playerScore=0;
let computerScore=0;

const resultsContainer = document.querySelector(".resultsContainer");
const roundResult = resultsContainer.querySelector("#roundResult");
const scores = resultsContainer.querySelector("#scores");
const winner = resultsContainer.querySelector("#winner");
const reset = resultsContainer.querySelector("#reset");
reset.style.visibility = 'hidden';
reset.addEventListener('click', resetGame);

const buttonContainer = document.querySelector(".buttonContainer");
const buttons = buttonContainer.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', playRound)
});

//game();


