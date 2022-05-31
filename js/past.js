/* Clock

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
 */

function past(h, m, s) {
  let hour = 3600000;
  let minute = 60000;
  let second = 1000;
  return h * hour + m * minute + s * second;
}
