let mots = [
    "crocodile",
    "sincire",
    "mammoth",
    "rainbow"
];

let solution = mots[Math.floor(Math.random() * mots.length)];
let arrayTry = [];
for (i = 0; i < solution.length; i++) {
    arrayTry[i] = "_";
};
let remainingLetters = solution.length;
let trialNumber = 0;
let triedGuess = [];

while (remainingLetters > 0) {
    alert(arrayTry.join(" ") + "   " + "You tried: " + trialNumber + " times");
    let guess = prompt("Take a guess");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter");
    } else if (guess.length !== null) {
        for (j = 0; j < solution.length; j++) {
            if (solution[j] == guess) {
                arrayTry[j] = guess;
                remainingLetters--;
            };
        }; trialNumber++;
        triedGuess.push(guess);
       /* if (guess == triedGuess) {
            alert("You already played this letter, guess again") 
        } */
    };
};
alert(arrayTry.join(""));
alert("Congratulations, the answer was " + solution + ". You won in " + trialNumber + " tries!");