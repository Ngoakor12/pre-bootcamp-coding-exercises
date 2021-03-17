function sumOfMultiples(x) {
	var sum = 0;
	for (var k = 0; k < x; k++) {
		if (k % 3 === 0 || k % 5 === 0) {
			sum += k;
		}
	}
	return sum;
}
//function testing
console.log(sumOfMultiples(1000));
