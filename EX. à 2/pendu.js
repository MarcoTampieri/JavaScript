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

while (remainingLetters > 0) {
    alert(arrayTry.join(" ") + "   " + "You tried: " + trialNumber + " times");
    let guess = prompt("Take a guess");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter");
    } else {
        for (j = 0; j < solution.length; j++) {
            if (solution[j] == guess) {
                arrayTry[j] = guess;
                remainingLetters--;
            };
        }; trialNumber++;
    };
};
alert(arrayTry.join(""));
alert("congrats, solution was " + solution);