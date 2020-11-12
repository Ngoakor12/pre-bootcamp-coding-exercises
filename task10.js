function printVowels(str) {
    var result = [];
        if (str.toLowerCase().match("a")!==null) {
            result.push("a");
        }
        if (str.toLowerCase().match("e")!==null) {
            result.push("e");
        }
        if (str.toLowerCase().match("i")!==null) {
            result.push("i");
        }
        if (str.toLowerCase().match("o")!==null) {
            result.push("o");
        }
        if (str.toLowerCase().match("u")!==null) {
            result.push("u");
        }
        //print found vowels
        for (var i = 0; i < result.length; i++) {
            if (result.indexOf() !== result.length-1) {
                console.log(result[i] + ", ");
            }
            else {
                console.log(result[i]);
            }
        }
    
}
//function testing
console.log(printVowels("Ngoako"));