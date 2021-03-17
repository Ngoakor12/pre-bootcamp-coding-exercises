function printVowels(str) {
	var result = 0;
	console.log("Vowels in " + str + ":");
	if (str.toLowerCase().match("a") !== null) {
		result = "a";
		console.log(result);
	}
	if (str.toLowerCase().match("e") !== null) {
		result = "e";
		console.log(result);
	}
	if (str.toLowerCase().match("i") !== null) {
		result = "i";
		console.log(result);
	}
	if (str.toLowerCase().match("o") !== null) {
		result = "o";
		console.log(result);
	}
	if (str.toLowerCase().match("u") !== null) {
		result = "u";
		console.log(result);
	}
}
//function testing
printVowels("NgOakORamOkgOpa");
