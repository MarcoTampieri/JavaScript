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

function isInArray(arr, char){
    for (let i = 0; i < arr.lenth; i++){
        if (arr[i] == char)
            return true;
    }
    return false;
}

while (remainingLetters > 0) {
    alert(arrayTry.join(" ") + "   " + "You tried: " + trialNumber + " times");
    let guess = prompt("Take a guess");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Enter a single letter");
    } else {
        for (j = 0; j < solution.length; j++) {
            if (solution[j] === guess && !isInArray(arrayTry, guess)) {
                console.log(arrayTry);
                arrayTry[j] = guess;
                remainingLetters--;
                console.log(remainingLetters);
            };

        };
        trialNumber++;
    };
};
alert(arrayTry.join(""));
alert("Congratulations, the answer was " + solution + ". You won in " + trialNumber + " tries!");
