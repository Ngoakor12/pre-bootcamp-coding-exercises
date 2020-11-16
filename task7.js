function fareignheitToCelsius(temperature) {
    temperature = (temperature - 32) * 5 / 9;
    return Math.round(temperature);
}

function celsiusToFareignheit(temperature) {
    temperature = temperature * 9 / 5 + 32;
    return Math.round(temperature);
}
//function testing
console.log(fareignheitToCelsius(75));
console.log(celsiusToFareignheit(27));