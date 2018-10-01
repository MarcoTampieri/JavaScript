//ESERCIZIO 1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = 0;
for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
    console.log(result);
}

//ESERCIZIO 2

let actors = ["Keanu", "Tilda Swinton", "Terry Crews"];
for (let i = 0; i < actors.length; i++) {
    var index = i + 1;
    var indexString = "";
    if (index == 1) {
        indexString = "Le 1er";
    } else if (index == 2) {
        indexString = "Le 2eme"
    } else if (index == 3) {
        indexString = "Le 3eme"
    }
    console.log(indexString + " est " + actors[i]);
}

//ESERCIZIO 3

let jeux = ["Mario", "Luigi", "Peach"];
let nouveauJeux = jeux.slice(0);
nouveauJeux.push("Bowser");
console.log(jeux);
console.log(nouveauJeux);
//
console.log("stop");
//
let gioco = ["Mario", "Luigi", "Peach"];
let nuovoGioco = gioco;
nuovoGioco.push("Bowser");
console.log(gioco);
console.log(nuovoGioco);
//
console.log("stop");
//
let arr = ["Mario", "Luigi", "Peach"]
let arrUpdate = [];
for (let i = 0; i < arr.length; i++) {
    arrUpdate[i] = arr[i];   
}
arrUpdate.push("Bowser");
console.log(arr);
console.log(arrUpdate);