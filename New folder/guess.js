let randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = prompt("Guess a number betn 1 to 100: ");
userGuess = Number(userGuess);
if (userGuess === randomNumber) {
    alert("congrats you guess the right");
} else if (userGuess > randomNumber) {
    alert("To High! The  correct number " + randomNumber);
} else {
    alert("To Low! The Correct number " + randomNumber);
}