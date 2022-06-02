/* Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
  // using a for loop to iterate
  //   start at 1 and ends on nFloors
  //   star + 2
  let arr = [];
  for (let i = 1; i <= nFloors; i++) {
    let stars = i * 2 - 1;
    let spaces = nFloors - i;
    let str = "";
    for (let j = 0; j < spaces; j++) {
      str += " ";
    }
    for (let k = 0; k < stars; k++) {
      str += "*";
    }
    for (let j = 0; j < spaces; j++) {
      str += " ";
    }

    arr.push(str);
  }
  return arr;
}
