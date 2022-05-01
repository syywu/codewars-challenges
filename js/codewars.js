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
for(let i = 0; i < a.length; i++) {
    // Per default we say that b does not contain a
    let bContainsAValue = false;
    // Loop over b
    for(let y = 0; y < b.length; y++) {
        // If any value in b is the same as the current value from a, we set bContainsAValue to true
        if(a[i] === b[y]) bContainsAValue = true;
    }
    // Now only if bContainsAValue is still false, meaning it does not contain the a value, we push this value into our temporary array
    if(!bContainsAValue) diffArray.push(a[i]);
}
// In the end we return the temporary array
return diffArray;
}

function arrayDiff(a, b) {
    let newArr = [];
    for(let i = 0; i < a.length; i++){
      let bValInA = false;
      for(let j =0; j < b.length; j++){
        if (a[i] === b[j]) bValInA = true;
      }
     if(!bValInA) newArr.push(a[i]);
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
function sum (numbers) {
  let sum = 0; 
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
    
    
};

// Find the smallest integer in the array

/* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

class SmallestIntegerFinder {
  findSmallestInt(args) {
     let smallest = args[0]; 
     for(let i = 1; i < args.length; i++){
       if(smallest > args[i]){
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

function opposite(num){
  return num * -1;
}