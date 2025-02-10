function getComputerChoice() {
    const choices = ['s', 'w', 'g'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        getComputerChoice(userChoice === 's' && computerChoice === 'w') || // Snake drinks water
        (userChoice === 'w' && computerChoice === 'g') || // Water drowns gun
        (userChoice === 'g' && computerChoice === 's') // Gun kills snake
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Game function
function playGame() {
    // Get user input
    let userChoice = prompt("Enter your choice: 's' for Snake, 'w' for Water, 'g' for Gun").toLowerCase();

    // Validate user input
    if (['s', 'w', 'g'].includes(userChoice)) {
        let computerChoice = getComputerChoice();
        console.log("You chose: " + userChoice);
        console.log("Computer chose: " + computerChoice);

        // Determine and display the winner
        let result = determineWinner(userChoice, computerChoice);
        console.log(result);
    } else {
        console.log("Invalid input! Please enter 's', 'w', or 'g'.");
    }
}

// Start the game
playGame();