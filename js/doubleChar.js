/* Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
  
*/

function doubleChar(str) {
  //   split str into individual letters
  //   new str
  //   iterate usinf for loop
  //   push i twice to str
  let arr = str.split("");
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i].repeat(2).toString();
  }
  return newStr;
}
