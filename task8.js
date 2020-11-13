function convertToTime(x) {
    var hours = 0, minutes = 0;
    if (x >= 0) {        //to filter negative numbers
        while (x >= 60) {
            hours += 1;
            x -= 60;
        }
        minutes = x;
        return hours + " hours, " + minutes + " minutes";
    }
    else {
        return "Error: No negative numbers allowed."
    }
}
//function testing
console.log(convertToTime(72));