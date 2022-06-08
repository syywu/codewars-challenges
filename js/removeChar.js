/* Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str) {
  let arr = str.split("");
  arr.shift(arr[0]);
  arr.pop();
  return arr.join("");
}

function removeChar(str) {
  var output_str = "";

  for (var i = 1; i < str.length - 1; i++) {
    output_str += str[i];
  }

  return output_str;
}
