let message = "";
let trialNumber = 0;
let trialLeft = 6;
let minValue = 20;
let maxValue = 80;

let random = () => {
    return Math.floor(Math.random() * (maxValue - minValue) + minValue)
}
let winValue = random();

let check = () => {
    message = prompt("Take a guess! You tried " + trialNumber + " times. " + trialLeft + " trials left.");
    trialNumber++
    trialLeft--
    if (message < winValue) {
        alert("It's more than " + message + ". Try again!");
    } else if (message > winValue) {
        alert("It's less than " + message + ". Try again!");
    } else if (message == winValue) {
        alert("Congratulations, you won! The price was " + message);
        let goodEnd = confirm("You won, play again?");
        if (goodEnd === true) {
            location.reload();
        } else {
            alert("Thanks for playing");
        };
    } else if (trialLeft == 0) {
        
    }
};

while (trialLeft != -1) {
    check();
}
let badEnd = confirm("You lose. Try again?");
if (badEnd === true) {
    location.reload();
} else {
    alert("Thanks for playing");
};

