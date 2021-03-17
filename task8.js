function convertToTime(x) {
	var hours = 0,
		minutes = 0;
	if (x > 0) {
		//to filter negative numbers
		while (x >= 60) {
			hours += 1;
			x -= 60;
		}
		minutes = x;
		if (hours == 1 && minutes == 1) {
			return hours + " hour, " + minutes + " minute";
		} else if (hours == 1 && minutes != 1) {
			return hours + " hour, " + minutes + " minutes";
		} else if (hours != 1 && minutes == 1) {
			return hours + " hours, " + minutes + " minute";
		} else {
			return hours + " hours, " + minutes + " minutes";
		}
	} else {
		return "Error: No negative numbers allowed.";
	}
}
//function testing
console.log(convertToTime(121));
