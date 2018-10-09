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
    } else {
        alert("You lose");
    }
};

while(trialLeft != 0){
    check();    
}


