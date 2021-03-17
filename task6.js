//function taking 3 numbers and returning the biggest
function biggestOfThreeNumbers(x, y, z) {
	var biggest;
	if (x > y && x > z) {
		biggest = x;
	} else if (y > x && y > z) {
		biggest = y;
	} else {
		biggest = z;
	}
	return biggest;
}
//function testing
console.log(biggestOfThreeNumbers(70, 30, 47));

// BONUS: function taking many numbers and returning the biggest
function biggestOfManyNumbers(arr = []) {
	var i = 0;
	var biggest = 0;
	for (i = 0; i < arr.length; i++) {
		if (biggest <= arr[i]) {
			biggest = arr[i];
		}
	}
	return biggest;
}
//function testing
console.log(biggestOfManyNumbers([100, , 1000, 5, 0, 9800, 560]));
