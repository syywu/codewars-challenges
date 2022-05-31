// String ends with?

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
  */

/*
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
 */

function solution(str, ending) {
  if (str.endsWith(ending)) {
    return true;
  }
  return false;
}

function solution(str, ending) {
  let newstr = "";
  let count = str.length - ending.length;
  for (let i = count; i < str.length; i++) {
    newstr += str[i];
  }
  if (newstr === ending) {
    return true;
  }
  return false;
}
