function containsThree(num1, num2) {
  if (num1 == 3 || num2 == 3) {
    var sum = num1 + num2;
    if (sum.toString().indexOf(3) !== -1) {
      return true;
    }
  }
  return false;
}
//function testing
console.log(containsThree(3, 2));