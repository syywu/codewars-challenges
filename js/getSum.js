/* sum of numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum(a, b) {
  // if a == b return a
  //   initialise sum = 0
  //  find all numbers between a and b
  //   for i = a i <=b
  //   sum += i
  if (a == b) return a;
  let sum = 0;
  //   find which is smaller= strt with smallest
  let big = b;
  let small = a;
  if (b < a) {
    small = b;
    big = a;
  }
  for (let i = small; i <= big; i++) {
    sum += i;
  }
  return sum;
}
