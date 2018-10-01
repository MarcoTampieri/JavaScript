//ESERCIZIO 1
let arrOne = [7, 5, -12, 6, 32, 14, 18, -2];
let minOne = Math.min(7, 5, -12, 6, 32, 14, 18, -2);
console.log("The lowest number is " + minOne);

let arrTwo = [-3, 9, 21, 36, 27, 54, 17, 35];
let maxTwo = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log("The highest number is " + maxTwo);

let result = minOne + maxTwo;
console.log("The sum is " + result);

//ESERCIZIO 2-1

let floatBateau = 10.4;

let couleBateau = Math.floor(floatBateau);
console.log("10.4 rounded down is " + couleBateau);

let voleBateau = Math.ceil(floatBateau);
console.log("10.4 rounded up is " + voleBateau);

//ESERCIZIO 2-2

//ALEATOIRE 50-100
function randomOne(min, max) {
    return Math.random() * (max - min) + min;
  }
console.log(randomOne(50, 100));

//ALEATOIRE 0 ou 1
function randomTwo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomTwo(0, 1));

let randomTwoTwo = Math.random() >= 0.5 ? 1 : 0;
console.log(randomTwoTwo);

//ALEATOIRE 0 - 10
function randomThree(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomThree(0, 10));

let randomThreeTwo =Math.random() * (10 - 0 + 1);
console.log(randomThreeTwo);

//ESERCIZIO 2-3

let arrCharacters = ["Goro", "Johnny Cage", "Kano", "Liu Kang", "Raiden", "Reptile", "Scorpion", "Shang Tsung", "Sonya", "Sub-Zero"]
let randomCharacter = arrCharacters[Math.floor(Math.random() * arrCharacters.length)];
console.log(randomCharacter);