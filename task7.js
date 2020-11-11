//function for converting fareignheit to celsius
function toCelsius(temp) {
    temp = (temp - 32) * 5 / 9;
    return Math.round(temp);
}
//function for converting celsius to fareignheit
function toFareignheit(temp) {
    temp = temp * 9 / 5 + 32;
    return Math.round(temp);
}
//function testing
console.log(toCelsius(75));
console.log(toFareignheit(27));