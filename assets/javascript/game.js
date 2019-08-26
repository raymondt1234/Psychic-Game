function randomLetter() {

    return String.fromCharCode(97 + Math.floor(Math.random() * 26))

}
for (let i = 0; i < 50; i++) {
    console.log(randomLetter());
}