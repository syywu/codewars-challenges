/*
This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######

*/

function staircase(n) {
  // for loop to end at n
  // first line = 1# and n -1
  // initialise a str to return str
  let str = "";
  for (let i = 0; i < n; i++) {
    let hash = i + 1;
    let spaces = n - i - 1;

    for (let j = 0; j < spaces; j++) {
      str += " ";
    }
    for (let j = 0; j < hash; j++) {
      str += "#";
    }
    str += "\n";
  }
  process.stdout.write(str);
}
