function commonCharacters(string1, string2) {
	let result = [];
	string1 = string1.toLowerCase().split("");
	string2 = string2.toLowerCase().split("");
	for (let i = 0; i < string1.length; i++) {
		if (string2.includes(string1[i])) {
			result.push(string1[i]);
		}
	}
	result = result.join(", ");
	console.log("Inputs: " + string1.join("") + ", " + string2.join(""));
	console.log("Common characters: " + result);
}
