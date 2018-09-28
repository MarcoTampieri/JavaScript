let language = "es";
if (language == "es") {
    console.log("Hola mundo");
} 
else if (language == "fr") {
    console.log("Bonjour tout le monde");
} 
else if (language == "en") {
    console.log("Hello world");
}
else {
    console.log("Wrong input");
}

var score = 87;
var result;
if (score >= 90) {
    result = "A";
} else if (score >=50) {
    result = "B";
} else {
    result = "C";
}
console.log(result);

var word = "pomme";
var wordNumber = 3;
if (wordNumber > 1) {
    word += "s";
}
 console.log("I have " + wordNumber + " " + word);
