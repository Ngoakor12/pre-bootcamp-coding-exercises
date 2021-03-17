function commonCharacters(string1, string2) {
	var result = []; //array to store common characters
	//dealing with case sensetivity by converting strings to lowercase
	string1 = string1.toLowerCase();
	string2 = string2.toLowerCase();
	//assigning common characters to an array
	for (var i = 0; i < string1.length; i++) {
		for (var k = 0; k < string2.length; k++) {
			if (string1[i] === string2[k]) {
				result.push(string1[i]);
			}
		}
	}
	//checking for duplicates
	var temp = []; //temporary array to store the checked array
	for (var a = 0; a < result.length; a++) {
		if (result[a] !== result[a + 1]) {
			temp.push(result[a]);
		}
	}
	//printing the common characters
	//overwriting the duplicate array with the unduplicated one
	result = temp;
	//converting array to a string separating elements by a comma
	result = result.join(", ");
	console.log("Inputs: " + string1 + ", " + string2);
	console.log("Common characters: " + result);
}
//function testing
commonCharacters("house", "computers");
