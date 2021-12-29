
// Function for computers choice.
// Math Round was used rather than Floor to increase chance of scissors.
function computerPlay() {
    let compOptions = ["rock","paper","scissors"];
    let compSelection = compOptions[Math.round(Math.random() * compOptions.length)];
    return compSelection;
};

// Funtion to play  single game of Rock Paper Scissors.
// If is my most practiced method so I used that.
// Last else if checks if player even selected from the three options.
/*
function RockPaperScissors(computerSelection,playerSelection) {
    if (computerSelection === playerSelection) {
            return alert("You have tied!");
        } else if (computerSelection === "rock" && playerSelection === "paper") {
            return alert("You beat Rock with Paper, you win!");
        } else if (computerSelection === "rock" && playerSelection === "scissors") {
            return alert("Rock beats Scissors, you lose!");
        } else if (computerSelection === "paper" && playerSelection === "rock") {
            return alert("Paper beats Rock, you lose!");
        } else if (computerSelection === "paper" && playerSelection === "scissors") {
            return alert("You beat Paper with Scissors, you win!");
        } else if (computerSelection === "scissors" && playerSelection === "rock") {
            return alert("You beat Scissors with Rock, you win!");
        } else if (computerSelection === "scissors" && playerSelection === "paper") {
            return alert("Scissors beats paper, you lose!");
        } else if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors") {
            return alert("Please use a valid input.");
        };

};
*/


// Function to play five rounds of Rock Paper and Scissors.
function game() {

    let rounds = 5
    let compScore = 0;
    let playScore = 0;

    // Loop for each rock paper scissor round.
    for (let i = 1; i <= rounds; i++) {

        let compSelection = computerPlay();
        let playSelection = "";
    
        playSelection = (prompt("Input Rock, Paper, or Scissors: ")).toLowerCase();
    
        RockPaperScissors(compSelection,playSelection);

        // Same round function as RockPaperScissors function above with
        // additional win and loss tally for score.
        // Two Boolean functions were used cause of bad planning on my part :( I was going to add a tie counter but decided not to
        // In the case of an invalid input the round number doesn't go up.
        function RockPaperScissors(computerSelection,playerSelection) {
            if (computerSelection === playerSelection) {
                return (
                    alert("You have tied!"),
                    Win = false,
                    Lose = false
                );
            } else if (computerSelection === "rock" && playerSelection === "paper") {
                return (
                    alert("You beat Rock with Paper, you win!"),
                    Win = true,
                    Lose = false
                );
            } else if (computerSelection === "rock" && playerSelection === "scissors") {
                return (
                    alert("Rock beats Scissors, you lose!"),
                    Win = false,
                    Lose = true
                );
            } else if (computerSelection === "paper" && playerSelection === "rock") {
                return (
                    alert("Paper beats Rock, you lose!"),
                    Win = false,
                    Lose = true
                );
            } else if (computerSelection === "paper" && playerSelection === "scissors") {
                return (
                    alert("You beat Paper with Scissors, you win!"),
                    Win = true,
                    Lose = false
                );
            } else if (computerSelection === "scissors" && playerSelection === "rock") {
                return (
                    alert("You beat Scissors with Rock, you win!"),
                    Win = true,
                    Lose = false
                );
            } else if (computerSelection === "scissors" && playerSelection === "paper") {
                return (
                    alert("Scissors beats paper, you lose!"),
                    Win = false,
                    Lose = true
                );
            } else if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors") {
                return (
                    alert("Please use a valid input."),
                    Win = false,
                    Lose = false,
                    --i
                );
            };
        };
        
        //Score counter
        if (Win === true) {
            ++playScore;
        } else if (Lose === true) {
            ++compScore;
        };

        //Score Printer
        alert(`Score:\n Computer: ${compScore}\n You: ${playScore}`)
        };
};

game();