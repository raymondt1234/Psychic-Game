
function randomLetter() {

    return String.fromCharCode(97 + Math.floor(Math.random() * 26));

}
function printScoreboard() {

    console.log("The Psychic Game");
    console.log("Guess what letter I'm thinking of");
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses: " + guesses);
}

let playerWins = false;
let wins = 0;
let losses = 0;
let guesses = 9;
let computerLetter =  randomLetter();
console.log("Computer Letter: " + computerLetter);

printScoreboard();

document.onkeyup = function (event) {
    var keyPressed = event.key;
    console.log("Key pressed: " + keyPressed);
    if (guesses > 0) {
        if (keyPressed === computerLetter) {
            wins++;
            guesses = 9;
            computerLetter =  randomLetter();
            console.log("Computer Letter: " + computerLetter);
        } else if (keyPressed !== computerLetter) {
            guesses--;
            if (guesses === 0) {
                guesses = 9;
                losses++;
                computerLetter =  randomLetter();
                console.log("Computer Letter: " + computerLetter);
            }
        }
    } else {
        losses++;
        guesses = 9;
        computerLetter =  randomLetter();
        console.log("Computer Letter: " + computerLetter);
    }
    printScoreboard();
}

// document.write("<h1>The Psychic Game</h1>");
    // document.write("<h2>Guess what letter I'm thinking of</h2>");
    // document.write("<h2>Wins: " + wins + "</h2>");
    // document.write("<h2>Losses: " + losses + "</h2>");
    // document.write("<h2>Guesses: " + guesses + "</h2>");