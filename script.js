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