function fizzBuzz(first,last){
  var result = [];
  var difference = last - first;
  var j = first;
  for (i = 0; i <= difference; i++) {
    if (j > 0 && j % 3 == 0 && j % 5 == 0) {
      result[i] = "FizzBuzz";
    } else if (j > 0 && j % 3 == 0) {
      result[i] = "Fizz";
    } else if (j > 0 && j % 5 == 0) {
      result[i] = "Buzz";
    } else {
      result[i]=j;
    }
    j++;
  }

  return result;
};
module.exports = fizzBuzz;
