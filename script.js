const options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(`computer: ${choice}`)
    return choice;
}



function winConditions(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if (
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")
            ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = winConditions(playerSelection, computerSelection);
    if(result == "Tie"){
        return "Its a Tie!";
    }
    else if(result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper or Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        if(winConditions(playerSelection, computerSelection) == "Player"){
            playerScore++;
        }
        else if(winConditions(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    if(playerScore > computerScore){
        console.log("Player won!")
    }
    else {
        console.log("Computer won!")
    }
}
