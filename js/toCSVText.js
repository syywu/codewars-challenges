/*
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values
*/

function toCsvText(array) {
  // turn arr into str
  //   loop through?
  let str = "";
  for (let i = 0; i < array.length; i++) {
    str += array[i].join(",") + "\n";
  }
  str = str.slice(0, -1);
  return str;
}

function toCsvText(array) {
  return array.join("\n");
}
