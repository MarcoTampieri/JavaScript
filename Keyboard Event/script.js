//ESERCIZIO 1

let character = document.getElementById("character");

window.addEventListener("keypress", changeColour);

function changeColour(event) {
    key = event.key;

    if (key == "0") {
        character.style.backgroundColor = "darkblue"
    } else if (key == "1") {
        character.style.backgroundColor = "green"
    } else if (key == "2") {
        character.style.backgroundColor = "yellow"
    } else if (key == "3") {
        character.style.backgroundColor = "pink"
    } else if (key == "4") {
        character.style.backgroundColor = "red"
    } else if (key == "5") {
        character.style.backgroundColor = "purple"
    } else if (key == "6") {
        character.style.backgroundColor = "orange"
    } else if (key == "7") {
        character.style.backgroundColor = "black"
    } else if (key == "8") {
        character.style.backgroundColor = "gray"
    } else if (key == "9") {
        character.style.backgroundColor = "aqua"
    };
};

let character2 = document.getElementById("character2");

window.addEventListener("keypress", colourChange);

function colourChange(event) {
    switch (event.key) {
        case "0":
            character2.style.backgroundColor = "aqua";
            break;
        case "1":
            character2.style.backgroundColor = "gray";
            break;
        case "2":
            character2.style.backgroundColor = "black";
            break;
        case "3":
            character2.style.backgroundColor = "orange";
            break;
        case "4":
            character2.style.backgroundColor = "purple";
            break;
        case "5":
            character2.style.backgroundColor = "red";
            break;
        case "6":
            character2.style.backgroundColor = "pink";
            break;
        case "7":
            character2.style.backgroundColor = "yellow";
            break;
        case "8":
            character2.style.backgroundColor = "green";
            break;
        case "9":
            character2.style.backgroundColor = "darkblue";
            break;
    };
};

//ESERCIZIO 2

let up = document.getElementById("up");
let down = document.getElementById("down");
let left = document.getElementById("left");
let right = document.getElementById("right");

window.addEventListener("keydown", changeOpacity);


function changeOpacity(event) {
    switch (event.key) {
        case "ArrowUp":
            up.classList.add("highlight");
            break;
        case "ArrowDown":
            down.classList.add("highlight");
            break;
        case "ArrowLeft":
            left.classList.add("highlight");
            break;
        case "ArrowRight":
            right.classList.add("highlight");
            break;
    };
};

window.addEventListener("keyup", restoreOpacity);

function restoreOpacity(event) {
    switch (event.key) {
        case "ArrowUp":
            up.classList.remove("highlight");
            break;
        case "ArrowDown":
            down.classList.remove("highlight");
            break;
        case "ArrowLeft":
            left.classList.remove("highlight");
            break;
        case "ArrowRight":
            right.classList.remove("highlight");
            break;
    };
};