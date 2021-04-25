function Arvaus() {
    guess = document.getElementById("guess").value;
    guesses = document.getElementById("tulos");

    if (guess == sattunainenLuku) {
        guesses.value = guesses.value + "\r" + "sinä arvasit oikein! ("+guess+")";
    } else if (guess > sattunainenLuku) {
        guesses.value = guesses.value + "\r" + "arvasit liian korkean!("+guess+")";
    } else {
        guesses.value = guesses.value + "\r" + "arvasit liian matalan!("+guess+")";
    }
}

function eraseText() {
    document.getElementById("tulos").value = "";
    sattunainenLuku = Math.floor(Math.random()*100);
}


var sattunainenLuku = Math.floor(Math.random()*100);
