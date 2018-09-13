module.exports = function solveEquation(equation) {
    var arrayOfStrings = equation.split(' ');
    var numberArray = [];
    var a = arrayOfStrings[0];
    var b = arrayOfStrings[3] + arrayOfStrings[4];
    var c = arrayOfStrings[7] + arrayOfStrings[8];
    numberArray.push(a, b, c);
    var d = numberArray[1] * numberArray[1] - 4 * numberArray[0] * numberArray[2];
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    var ordArray = [];
    ordArray.push(Math.round(x1), Math.round(x2));
    function sortNumber(a,b) {
        return a - b;
    }
    return ordArray.sort(sortNumber);
}




