function commonCharacters(string1, string2) {
    var common = [];
    //dealing with case sensitivity by converting strings to lowercase
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    //assigning common characters to an array
    for (var i = 0; i < string1.length; i++) {
        for (var k = 0; k < string2.length; k++) {
            if (string1[i] === string2[k]) {
                common.push(string1[i]);
            }
        }
    }
    //checking for duplicates
    var temporary = [];
    for (var a = 0; a < common.length; a++) {
        if (common[a] !== common[a + 1]) {
            temporary.push(common[a]);
        }
    }

    //printing the common characters
    common = temporary;
    //converting array to a string separating elements by a comma
    common = common.join(", ");
    console.log("Inputs: " + string1 + ", " + string2);
    console.log("Common characters: " + common);
}
//function testing
commonCharacters("house", "computers");