//function taking 3 numbers and returning the biggest
function biggestNumber(x, y, z) {
    var biggest;
    if (x > y && x > z) {
        biggest = x;
    }
    else if (y > x && y > z) {
        biggest = y;
    }
    else {
        biggest = z;
    }
    return biggest;
}
//function testing
console.log(biggestNumber(70, 30, 47));

// BONUS: function taking many numbers and returning the biggest