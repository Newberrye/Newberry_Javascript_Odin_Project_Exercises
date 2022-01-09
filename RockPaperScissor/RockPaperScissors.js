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
// First iteration with // inside that simply alerted players
// Functionality added for checking Score and Incrementing Score
function RockPaperScissors(computerSelection,playerSelection) {
    scoreCheck();
    if (computerSelection === playerSelection) {
           // return alert("You have tied!");
        return (
            playWin = 2,
            play = false,
            console.log(play),
            console.log(playWin)
        );
        } else if (computerSelection === "rock" && playerSelection === "paper") {
           // return alert("You beat Rock with Paper, you win!");
           return (
               playWin = true,
               play = true,
               console.log(play),
               console.log(playWin),
               scoreIncrement()
           );

        } else if (computerSelection === "rock" && playerSelection === "scissors") {
           // return alert("Rock beats Scissors, you lose!");
           return (
            playWin = false,
            play = true,
            console.log(play),
            console.log(playWin),
            scoreIncrement()
        );

        } else if (computerSelection === "paper" && playerSelection === "rock") {
           // return alert("Paper beats Rock, you lose!");
           return (
            playWin = false,
            play = true,
            console.log(play),
            console.log(playWin),
            scoreIncrement()
        );

        } else if (computerSelection === "paper" && playerSelection === "scissors") {
           // return alert("You beat Paper with Scissors, you win!");
           return (
            playWin = true,
            play = true,
            console.log(play),
            console.log(playWin),
            scoreIncrement()
        );

        } else if (computerSelection === "scissors" && playerSelection === "rock") {
           // return alert("You beat Scissors with Rock, you win!");
           return (
            playWin = true,
            play = true,
            console.log(play),
            console.log(playWin),
            scoreIncrement()
        );

        } else if (computerSelection === "scissors" && playerSelection === "paper") {
           // return alert("Scissors beats paper, you lose!");
           return (
            playWin = false,
            play = true,
            console.log(play),
            console.log(playWin),
            scoreIncrement()
        );

        } else if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors") {
           // return alert("Please use a valid input.");
           return (
            playWin = 2,
            play = false,
            console.log(play),
            console.log(playWin)
        );

        };

};


// Increments Score based on RockPaperScissors function outcome
function scoreIncrement() {
    if (playWin === true && play === true){
        return (
            playScore += 1,
            document.getElementById("playScore").innerText = `${playScore}`,
            play = false
        );
    } else if (playWin === false && play === true) {
        return (
            compScore += 1,
            document.getElementById("compScore").innerText = `${compScore}`,
            play = false
        );
    };
}

// Checks total scorecount
function scoreCheck() {
    if (compScore === 5) {
        alert("Computer is first to five points, Computer Wins!");
    } else if (playScore === 5) {
        alert("Player is the first to five points, You Win!");
    };
};


// Function to play five rounds of Rock Paper and Scissors.
/*
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

        //Score printer
        alert(`Score:\n Computer: ${compScore}\n You: ${playScore}`)
        };
};

game();
*/

// playWin records who wins and play is false as default, for ties, and invalid
  // input
let compSelection = computerPlay();
let playSelection = "";
let compScore = 0;
let playScore = 0;
let playWin = ""
let play = false;

// Event listeners for buttons
document.getElementById("Rock").addEventListener("click", function () {
    return (
        playSelection = "rock",
        RockPaperScissors(compSelection,playSelection),
        compSelection = computerPlay()
        );
});
document.getElementById("Paper").addEventListener("click", function () {
    return (
        playSelection = "paper",
        RockPaperScissors(compSelection,playSelection),
        compSelection = computerPlay()
        );
});
document.getElementById("Scissors").addEventListener("click", function () {
    return (
        playSelection = "scissors",
        RockPaperScissors(compSelection,playSelection),
        compSelection = computerPlay()
        );
});