//EXERCICE 1

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + " est pair");
    }
    /* else {
            console.log(i + " est impair");
        } */
}

/*
for (let i =0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i + "even");
    } else {
        console.log(i + "not even");
    }
} 
*/



//EXERCICE 2

let nine = 9;
for (let i = 0; i <= 10; i++) {
    let result = nine * i;
    console.log(i + " * " + nine + " = " + result);
}

// EXERCICE 3

function grade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "F"
    }
}
for (i = 0;i <= 100; i++) {
    console.log("Pour " + i + " points vous avez le grade " + grade(i))
}


// EXERCICE 4

  function halfPiramid (height) {
    for (let i = 1; i <= height; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
halfPiramid(5);

function pyramid(height){
    for (let i = 0; i < height; i++){
        let carac = "* ";
        for (let j = 0; j < i; j++){
            carac += "* ";
        }
        console.log(carac);
    }
}

pyramid(8);