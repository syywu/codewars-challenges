/* Sort the odd

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
  //   loop through aray
  // see if numbers are odd? %
  //   push odd numbers to a new arr
  //   sort odd numbers
  //   find out where the odd numbers positions are
  //   store index of odd numbers
  //   push them back to that index
  let arr = [];
  let index = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1 || array[i] % 2 === -1) {
      arr.push(array[i]);
      index.push(i);
    }
  }
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let j = 0; j < arr.length; j++) {
    array[index[j]] = arr[j];
  }
  return array;
}
