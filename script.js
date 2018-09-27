var language1 = "es";
var language2 = "fr";
var language3 = "en";
var message1 = "Hola mundo"
var message2 = "Bonjour tout le monde"
var message3 = "Hello world"
if (language1) {
    console.log(message1);
} else if (language2) {
    console.log(message2)
} else if (language3) {
    console.log(message3)
}

var score = 87;
var rankA = "A";
var rankB = "B";
var rankC = "C";
var result = rankA || rankB || rankC;
if (score >= 90) {
    var result = rankA;
} else if (score >=50) {
    var result = rankB;
} else if (score < 50) {
    var result = rankC;
};
console.log(result);