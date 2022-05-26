/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/
function arrayDiff(a, b) {
  // Temporary array, containing all values from a, which are not contained in b
  let diffArray = [];
  // Looping over a
  for (let i = 0; i < a.length; i++) {
    // Per default we say that b does not contain a
    let bContainsAValue = false;
    // Loop over b
    for (let y = 0; y < b.length; y++) {
      // If any value in b is the same as the current value from a, we set bContainsAValue to true
      if (a[i] === b[y]) bContainsAValue = true;
    }
    // Now only if bContainsAValue is still false, meaning it does not contain the a value, we push this value into our temporary array
    if (!bContainsAValue) diffArray.push(a[i]);
  }
  // In the end we return the temporary array
  return diffArray;
}

function arrayDiff(a, b) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    let bValInA = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) bValInA = true;
    }
    if (!bValInA) newArr.push(a[i]);
  }
  return newArr;
}

/* 
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
*/

// Sum Numbers
function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Find the smallest integer in the array

/* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for (let i = 1; i < args.length; i++) {
      if (smallest > args[i]) {
        smallest = args[i];
      }
    }
    return smallest;
  }
}

//  Opposite number

/* 
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(num) {
  // any numbers * -1 will return the opposite
  return num * -1;
}

// Basic Mathematical Operations

/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    default:
      return value1 / value2;
  }
}

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "*":
      return value1 * value2;
    case "-":
      return value1 - value2;
    case "/":
      return value1 / value2;
  }
}

// Invert values

/*  
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

*/

function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= -1;
  }
  return array;
}

// Counting sheep...

/* 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  return count;
}

// Convert a Boolean to a String

/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

function booleanToString(b) {
  if (b) {
    return "true";
  }
  return "false";
}

function booleanToString(b) {
  return b ? "true" : "false";
}

// Abbreviate a Two Word Name

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name) {
  let str = name.toUpperCase().split(" ");
  return str[0][0] + "." + str[1][0];
}

// Keep Hydrated!

/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

function litres(time) {
  let res = time * 0.5;
  //  round down the litres
  return Math.floor(res);
}

// Odd or Even

/* 
  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
  */

function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  }
  return "Odd";
}

// Sum of positive

/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

  */

function positiveSum(arr) {
  let addSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      addSum += arr[i];
    }
  }
  return addSum;
}

/*
Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

/* If you can't sleep, just count sheep!!

Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

/* num to str

We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:

123 --> "123"
999 --> "999"

*/

function numberToString(num) {
  return num.toString();
}

/* Lost without map

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

function maps(x) {
  let newArr = [];
  for (let i = 0; i < x.length; i++) {
    newArr.push(x[i] * 2);
  }
  return newArr;
}

/* Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

function smash(words) {
  let str = "";
  for (let i = 0; i < words.length; i++) {
    if (words.length <= 1) {
      return words[i];
    }
    str += " " + words[i];
  }
  return str.trim();
}

/* Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.


*/

function areYouPlayingBanjo(name) {
  let arr = name.toLowerCase().split("");
  if (arr[0] !== "r") {
    return name + " does not play banjo";
  }
  return name + " plays banjo";
}

/* How good are you really?

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
  let average = yourPoints;
  for (let i = 0; i < classPoints.length; i++) {
    average += classPoints[i];
  }
  let res = average / classPoints.length + 1;
  if (yourPoints < res) {
    return false;
  }
  return true;
}

/* Count by X

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

*/

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

/* School Paperwork

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0

*/

function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m;
  }
  return 0;
}

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

/* Transportation on vacation

After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

*/

function rentalCarCost(d) {
  let total = 40 * d;
  if (d >= 10) {
    total -= 50;
  } else if (d >= 3) {
    total -= 20;
  }
  return total;
}

// Make Upper Case

function makeUpperCase(str) {
  return str.toUpperCase();
}

/*  Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x) {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
}

/* yes or no

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

function boolToWord(bool) {
  if (bool == true) {
    return "Yes";
  } else {
    return "No";
  }
}

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

/*
  Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
  */

const rps = (p1, p2) => {
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else if (
    (p2 === "rock" && p1 === "scissors") ||
    (p2 === "scissors" && p1 === "paper") ||
    (p2 === "paper" && p1 === "rock")
  ) {
    return "Player 2 won!";
  }
  return "Draw!";
};

/* Set Alarm

Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/

function setAlarm(employed, vacation) {
  //   return true when employed only
  if (
    (employed === false && vacation === true) ||
    (employed === true && vacation === true) ||
    (employed === false && vacation === false)
  ) {
    return false;
  }
  return true;
}

const setAlarm = (employed, vacation) => employed && !vacation;

/*
  Double Char

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

function doubleChar(str) {
  var word = "";
  for (var i = 0; i < str.length; i++) {
    word += str[i] + str[i];
  }
  return word;
}

/* DNA to RNA Conversion

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


*/

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  //   iterate through- pushing non 'T' to an array
  let arr = dna.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "T") {
      arr.splice(i, 1, "U");
    }
  }
  return arr.join("");
}

function DNAtoRNA(dna) {
  var newStr = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] == "T") {
      newStr += "U";
    } else {
      newStr += dna[i];
    }
  }
  return newStr;
}

// Make negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  }
  return num;
}
function makeNegative(num) {
  return num <= 0 ? num : num * -1;
}

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
  var input_str = str;
  var output_str = "";

  for (var i = 1; i < input_str.length - 1; i++) {
    output_str += input_str[i];
  }

  return output_str;
}

/** jenny
    Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
    */

function greet(name) {
  if (name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}

// repeat str
// repeat s by n times

function repeatStr(n, s) {
  return s.repeat(n);
}

function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

/* Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

function countPositivesSumNegatives(input) {
  let arr = [];
  let count = 0;
  let sum = 0;
  if (input == null || input.length === 0) {
    return arr;
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    } else if (input[i] < 0) {
      sum += input[i];
    }
  }
  arr.push(count, sum);
  return arr;
}

/* Reversed sequence

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
 */

const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

/* Area or Perimeter
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
 */

let areaOrPerimeter = function (l, w) {
  if (l == w) {
    return l * w;
  }
  return l + l + w + w;
};

const areaPerimeter = function (l, w) {
  return l == w ? l * w : 2 * (l + w);
};

/* The highest profit wins

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/

function minMax(arr) {
  arr.sort((a, b) => a - b);
  let arr1 = [];
  arr1.push(arr[0], arr[arr.length - 1]);
  return arr1;
}

/* vowel count 

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


*/

function getCount(str) {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

/* volume of cuboid

Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

 */

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a, b) {
  // add numbers
  // var c
  let c = a + b;
  // remainder when divide by 2
  if (c % 2 === 0) {
    return "1";
  }
  return "0";
}
/* highest and lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 
*/

function highAndLow(numbers) {
  // convert str to arr
  //   arr.sort the arr
  //   select [o] and [arr.length-1]
  //   converts back to str
  let newArr = [];
  let arr = numbers.split(" ");
  let sortArr = arr.sort((a, b) => a - b);
  newArr.push(arr[0], arr[arr.length - 1]);

  return newArr.reverse().join(" ");
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

/* Compound interest

Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.

Given a principal p, interest rate r, and a number of periods n, return an array [ total owed under simple interest, total owed under compound interest ]

Notes:

Round all answers to the nearest integer
Principal will always be an integer between 0 and 9999
interest rate will be a decimal between 0 and 1
number of time periods will be an integer between 0 and 50
Examples
interest(100, 0.1,  1)  =  [110, 110]
interest(100, 0.1,  2)  =  [120, 121]
interest(100, 0.1, 10)  =  [200, 259]
*/

function interest(P, r, n) {
  //   p * r * n = inital
  let initial = P * r * n + P;
  //  interest = p * r
  //   p p*r *1 = interest     interst * r
  for (let i = 0; i < n; i++) {
    P = P * r + P;
  }
  return [Math.round(initial), Math.round(P)];

  // return 2 numbers in an arr
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
