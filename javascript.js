let cCounter = 0;
let pCounter = 0;
let tCounter = 0;




//-------------------------------------------------------------------------------


function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
     }
     console.log("Ties: " + tCounter);
     console.log("Player Score: " + pCounter);
     console.log("Computer Score: " + cCounter);

     if (pCounter > cCounter) {
         console.log("Congratulations! You have won!")

     } else if (cCounter > pCounter) {
         console.log("Computer has bested you... this time.")

     } else {
         console.log("It's a Tie! You tied with a computer...")
     }
}


//-------------------------------------------------------------------------------


function playRound() {
   let playerSelection = playerChoice();
   let computerSelection = computerChoice();
   let selectionComparison = whoWon(playerSelection, computerSelection);
   console.log(selectionComparison)
   console.log("------------------------------------------------------------------");
   let winLog = saveWinLog(selectionComparison);
  
   
}

//-------------------------------------------------------------------------------


function playerChoice() {
    playerInput = prompt("Rock, paper or scissors?");
    while (playerInput === null) {
        playerInput = prompt("I swear to God, if you click Cancel one more time...");
    }
    playerInput = playerInput.toLowerCase();
    let checkIfTrue = checkInput(playerInput);
    while (checkIfTrue === false) {
        playerInput = prompt("Just type \"rock\", \"paper\" or \"scissors\". One of them!")
        while (playerInput === null) {
        playerInput = prompt("I swear to God, if you click Cancel one more time...");
        }
        playerInput = playerInput.toLowerCase();
        checkIfTrue = checkInput(playerInput);
    }

    return playerInput;
}


//-------------------------------------------------------------------------------


function checkInput(playerInput) {
    //console.log(playerInput)
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        return true
    }   
        else {
            return false
        }
    
}


//-------------------------------------------------------------------------------


function computerChoice() {
    let computerNumber = Math.floor(Math.random()*3);
    if (computerNumber === 0) {
        return "rock";
    }
        else if (computerNumber === 1) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }
// let computerTest = computerChoice()
// console.log(computerTest)


//-------------------------------------------------------------------------------


function whoWon(stringPlayer, stringComputer) {
    console.log(stringPlayer, stringComputer);
    if (stringPlayer === stringComputer) {
        return "It's a Tie!"
    } else if ((stringPlayer === "rock" && stringComputer === "scissors") ||
    (stringPlayer === "paper" && stringComputer === "rock") ||
    (stringPlayer === "scissors" && stringComputer === "paper")) {
        return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
}


//-------------------------------------------------------------------------------


function saveWinLog(choice) {

    if (choice === "It's a Tie!") {
        ++tCounter;
        

    } else if (choice === "Player Wins!") {
        ++pCounter;
        

    } else if (choice === "Computer Wins!") {
        ++cCounter;
        

    }


    
}


//-------------------------------------------------------------------------------

game();