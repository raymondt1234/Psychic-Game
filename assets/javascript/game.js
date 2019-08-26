
function randomLetter() {

    return String.fromCharCode(97 + Math.floor(Math.random() * 26));

}

let playerWins = false;
let wins = 0;
let losses = 0;
let guesses = 9;

While(guesses > 0 || playerWins) {

    let guessedLetter = [];
    let computerLetter = randomLetter();

    document.onkeyup = function (event) {
        let keyPressed = event.key;
        guessedLetter.push(keyPressed);
        for (let i = 0; i < guessedLetter.length; i++) {
            document.write(guessedLetter);
            guesses--;
            if (keyPressed === computerLetter) {
                wins++;
                playerWins = true;
            } else {
                losses++;
            }
            document.write("Wins: " + wins);
            document.write("Losses: " + losses);
            document.write("Guesses Left: " + guesses);
        }
    }
}
