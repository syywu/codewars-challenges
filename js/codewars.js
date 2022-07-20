function digitize(n) {
  //   initialise an empty array
  let num = n.toString(10).split("").map(Number);
  let arr = [];
  //   reverse the number using for loop
  // push the index to the array
  for (let i = num.length - 1; i >= 0; i--) {
    arr.push(num[i]);
  }
  return arr;
}

/* Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

*/

function getGrade(s1, s2, s3) {
  //  add 3 paras and divide by 3
  //   switch statement
  let score = (s1 + s2 + s3) / 3;
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/* incrementer

Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2
 */

function incrementer(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let res = nums[i] + i + 1;
    if (res > 9) {
      res = res % 10;
    }
    newArr.push(res);
  }

  return newArr;
}

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

/* A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

 */

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n)) ? true : false;
};

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

/* Don't give me five!

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
 */

// initialise arr = []
// initiaite count
// for loop to return all numbers between start and end
// push all nums to arr
// convert arr to str
// if it contains 5 then dont count
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) count++;
  }
  return count;
}

// reverse the word
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  //turn str into arr
  //   split str word by word
  // use for loop to reverse str and push it to new arr
  //   converts arr back to str
  let arr = str.split("");
  let newStr = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    newStr += arr[i];
  }
  let newArr = newStr.split(" ");
  let finalStr = "";
  let whitespace = " ";
  for (let j = newArr.length - 1; j >= 0; j--) {
    newArr[j] += whitespace;
    finalStr += newArr[j];
  }

  return finalStr.trim();
}

function reverseWords(str) {
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

/* Remove every elements

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

function removeEveryOther(arr) {
  // remove every second element
  //   loop through the arr
  //   remove splice
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// Exes' and Oh's
//  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  // convert str to lower case
  //   convert str to arr
  //   for loop
  //   count
  //   if length is same then return same
  let arr = str.toLowerCase().split("");
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      oCount++;
    } else if (arr[i] === "x") {
      xCount++;
    }
  }
  if (oCount === xCount) {
    return true;
  }
  return false;
}

/* BINGO or not

For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/

function bingo(a) {
  //   iterate through arr
  // initiate count- if count > 1 return "WIN"
  let bingoArr = [2, 7, 9, 14, 15];
  let bCount = 0;
  let iCount = 0;
  let nCount = 0;
  let gCount = 0;
  let oCount = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === bingoArr[0]) {
      bCount++;
    } else if (a[i] === bingoArr[2]) {
      gCount++;
    } else if (a[i] === bingoArr[1]) {
      iCount++;
    } else if (a[i] === bingoArr[3]) {
      nCount++;
    } else if (a[i] === bingoArr[4]) {
      oCount++;
    }
  }
  if (bCount >= 1 && iCount >= 1 && nCount >= 1 && gCount >= 1 && oCount >= 1) {
    return "WIN";
  }
  return "LOSE";
}

function bingo(a) {
  let n = [2, 9, 14, 7, 15];
  for (let i = 0; i < n.length; i++) {
    if (!a.includes(n[i])) {
      return "LOSE";
    }
  }
  return "WIN";
}

/* Will there be enough space

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

 */

function enough(cap, on, wait) {
  let sum = cap - on - wait;
  if (sum < 0) {
    return (sum *= -1);
  }
  return 0;
}

var enough = (cap, on, wait) => (cap >= on + wait ? 0 : on + wait - cap);

/* square sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
 */

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}
