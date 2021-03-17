function biggestNumber(...numbers) {
	let biggestNum = numbers[0];
	for (let i = 0; i < numbers.length; i++) {
		if (biggestNum < numbers[i]) {
			biggestNum = numbers[i];
		}
	}
	console.log(biggestNum);
	return biggestNum;
}

biggestNumber(10000, 56, 4, 787, 322);
