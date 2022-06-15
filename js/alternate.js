/*
Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

for input:                5, true, false
expected result would be: [true, false, true, false, true]
*/

function alternate(n, firstValue, secondValue) {
  // your code
  //   for loop
  //   return an arr
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arr.push(firstValue);
    } else {
      arr.push(secondValue);
    }
  }
  return arr;
}
