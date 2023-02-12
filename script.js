/* let options = "123"
let computerChoice = getComputerChoice(options);
function getComputerChoice(option) {
    let result = ""
    const optionsLenght = options.length
    for (let i = 0; i < 1; i++) {
        result += options.charAt(Math.floor(Math.random() * optionsLenght))
       
    }
    result = parseInt(result)
    if(result === 1){
        return "rock"
    }else if(result === 2) {
        return "paper"
    }else{
        return "scissors"
    }

    
}
console.log(computerChoice)
 */




/* 
function getCompChoice(comp){
    let choiceNum = Math.floor(Math.random() * 3)
    if (choiceNum == 0) {
        comp = "rock";
    }else if(choiceNum == 1){
        comp = "paper";
    }else if(choiceNum == 2){
        comp = "scissors";
    }
    console.log(choiceNum)
    return choiceNum;
}


function getPlayerChoice(){
let player
let playerInt
for (let i = 0; i < 5; i++){
    player = prompt("rock, paper, scissors?").toLowerCase()
    if (player == "rock") {
        playerInt = 0;
    }else if(player == "paper"){
        playerInt = 1;
    }else if(player == "scissors"){
        playerInt = 2;
    }

    compInt = getCompChoice(comp)
    playRound(playerInt, compInt, comp, player)
}
}

function playRound(playerInt, compInt, comp, player) {
    // 0-rock 1-paper 2- scissor
    let win_array= [[0, 2, 1],
                    [1, 0, 2],
                    [2, 1, 0]];
    let result = win_array[playerInt][compInt]
    if (result == 0){
        console.log(`Its a tie! You chose ${player} and the computer chose ${comp.value}`)
    }else if (result == 1){
        console.log(`You won! You chose ${player} and the computer chose ${comp.value}`)
    }else if (result == 2){
        console.log(`You lost! You chose ${player} and the computer chose ${comp.value}`)
    }
}
getPlayerChoice() */


/* 
//--------------------------------------------------------------------------------------------------------

// 0 - rock 1 - paper 2 - scissors
const win_array = {
    'rock': {
        'rock': 0,
        'paper': 2,
        'scissors': 1
    },
    'paper': {
        'rock': 1,
        'paper': 0,
        'scissors': 2
    },
    'scissors': {
        'rock': 2,
        'paper': 1,
        'scissors': 0
    },
}


function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    switch(number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

function getUserInput() {
    let input = prompt("rock, paper, scissor?").toLowerCase
    return input
}

function playRound(userInput, computerInput){
    let a = win_array.userInput
    console.log(a)
    return a[computerInput]
}

function startGame() {
    let userScore = 0
    let computerScore = 0
    for(let i = 0; i < 5; i++){
        let userInput = getUserInput();
        let computerInput = getComputerChoice();
        let result = playRound(userInput, computerInput);
        console.log(userInput, computerInput)
        console.log(result)
    }
} */




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
