var subtraction = function (a, b) {
    return a - b;
};
var resultSubtraction = subtraction(5, 3);
console.log("result of 5-3 = " + resultSubtraction);

var division = function (a, b) {
    return a / b;
};
var resultDivision = division(10, 2)
console.log("result of 10/2 = " + resultDivision);


var multiplication = function (a, b) {
    return a * b;
};
var resultMultiplication = multiplication(4, 6);
console.log("result of 4*6 = " + resultMultiplication);

var percentage = function (num, per) {
    return (num/100)*per;
};
var resultPercentage = percentage(87, 38);
console.log("result of 38% of 87 = " + resultPercentage);

var distanceHour = function (_km, _h) {
    return _km / _h;
};
var resultDistandeHour = distanceHour(150, 2);
console.log("average speed of 150km over 2 hours = " + resultDistandeHour + "km/h");