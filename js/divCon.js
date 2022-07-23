/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

function divCon(x) {
  //   add strings int
  //   sub int
  //   filter array into arrays
  let int = x.filter((i) => typeof i === "number");
  console.log(int);
  let str = x.filter((i) => typeof i === "string");
  console.log(str);
  let sum = 0;
  let sub = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  for (let i = 0; i < int.length; i++) {
    sub += int[i];
  }
  return sub - sum;
}
