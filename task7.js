//function for converting fareignheit to celsius
function fareignheitToCelsius(temp) {
    temp = (temp - 32) * 5 / 9;
    return Math.round(temp);
}
//function for converting celsius to fareignheit
function celsiusToFareignheit(temp) {
    temp = temp * 9 / 5 + 32;
    return Math.round(temp);
}
//function testing
console.log(fareignheitToCelsius(75));
console.log(celsiusToFareignheit(27));