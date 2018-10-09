var word;
var allowedGuesses;
var correctGuesses;
var wrongGuesses;

var wordElement = document.getElementById('word');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');

let mots = [
    "crocodile",
    "sincire",
    "mammoth",
    "rainbow",
    "quisquilie",
    "precipitevolissimevolmente",
    "aiuole"
];


function initializeGame() {
    word = mots[Math.floor(Math.random() * mots.length)];
    allowedGuesses = word.length + 5;
    /* for (i = 0; i < word.length; i++) {
         allowedGuesses = word.length + 5;
     };*/
    wrongGuesses = [];
    correctGuesses = [];

    // initialize correctGuesses array with underscores
    for (var i = 0; i < word.length; i++) {
        correctGuesses.push('_');
    }

    wordElement.innerHTML = correctGuesses.join(' ');
    letterCountElement.innerHTML = allowedGuesses;
}

function updateGuesses(letter) {
    allowedGuesses--; // decrement guesses left
    letterCountElement.innerHTML = allowedGuesses;

    if (word.indexOf(letter) === -1) { // letter is NOT in the word
        wrongGuesses.push(letter); // update letters guessed
        lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
    } else { // letter IS in the word
        // replace underscore with the letter
        for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                correctGuesses[i] = letter;
            }
        }

        wordElement.innerHTML = correctGuesses.join(' ');
    }
}

function checkWin() {
    if (correctGuesses.indexOf('_') === -1) {
        alert('You Won! The answer was: ' + word);
        initializeGame()
    } else if (allowedGuesses === 0) {
        alert('You Lost!');
        initializeGame()
    }
}

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    if (correctGuesses.indexOf(letterGuessed) != -1 || wrongGuesses.indexOf(letterGuessed) != -1) {
        alert("Guess again, you already tried this letter!");
    } else {
        updateGuesses(letterGuessed);
    }
    checkWin();
};

initializeGame();