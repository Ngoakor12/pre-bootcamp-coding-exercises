function printVowels(str) {
	console.log("Vowels in " + str + ":");
	str = str.toLowerCase();
	let vowels = ["a", "e", "i", "o", "u"];
	let vowelsInString = [];
	for (let i = 0; i < vowels.length; i++) {
		if (str.includes(vowels[i])) {
			vowelsInString.push(vowels[i]);
		}
	}
	return vowelsInString.join(", ");
}
