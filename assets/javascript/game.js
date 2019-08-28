
function randomLetter() {

    return String.fromCharCode(97 + Math.floor(Math.random() * 26));

}
function printScoreboard() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses").textContent = guesses;
    console.log("Computer Letter: " + computerLetter);
}

let playerWins = false;
let wins = 0;
let losses = 0;
let guesses = 9;
let computerLetter =  randomLetter();



printScoreboard();

document.onkeyup = function (event) {
    var keyPressed = event.key;
    console.log("Key pressed: " + keyPressed);

    if (guesses > 0) {
        if (keyPressed === computerLetter) {
            wins++;
            guesses = 9;
            computerLetter = randomLetter();
        } else if (keyPressed !== computerLetter) {
            guesses--;
            if (guesses === 0) {
                guesses = 9;
                losses++;
                computerLetter = randomLetter();
            }
        }
    } else {
        losses++;
        guesses = 9;
        computerLetter = randomLetter();
    }
    
    printScoreboard();
}