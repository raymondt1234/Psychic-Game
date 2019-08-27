
function randomLetter() {

    return String.fromCharCode(97 + Math.floor(Math.random() * 26));

}
function printScoreboard(){
    document.write("<h1>The Psychic Game</h1>");
    document.write("<h2>Guess what letter I'm thinking of</h2>");
    document.write("<h2>Wins: " + wins + "</h2>");
    document.write("<h2>Losses: " + losses + "</h2>");
    document.write("<h2>Guesses: " + guesses + "</h2>");
}

let playerWins = false;
let wins = 0;
let losses = 0;
let guesses = 9;
let computerLetter = "z" // randomLetter();

printScoreboard();

document.onkeyup = function (event) {
    let keyPressed = event.key;
    console.log("Key " + keyPressed);
    
    printScoreboard();

    if (keyPressed === computerLetter) {
        wins++;
        guesses = 9;
        console.log("player wins"); //
    } else if (keyPressed !== computerLetter) {
        losses++;
        guesses--;
        console.log("computer wins"); //
    } else {
        guesses--;
    }
}

