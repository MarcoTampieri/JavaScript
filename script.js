for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + " est pair");
    }
    /* else {
            console.log(i + " est impair");
        } */
}


let nine = 9;
for (let i = 0; i <= 10; i++) {
    let result = nine * i;
    console.log(i + " * " + nine + " = " + result);
}


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