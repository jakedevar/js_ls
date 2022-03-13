/*
Write a function that computes the difference between the square of the sum of the first n positive integers 
and the sum of the squares of the first n positive integers.
--------------------- Problem ----------------------
write a function that take the difference between the square of the sum of the first n positive integers
and the sum of the sqares o fthe first n positive integers
------------ **Explicit Requirements** -------------
-  Rules:
    - only positive numbers exist
    - 
- Inputs: a whole number
- Output: a whole number
------------ **Implicit Requirements** -------------

------------- **Clarifying Questions** -------------
-
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference: given
------------------ Data Structure ------------------
working with arrays because of the iterative ability as well as the reduce method
-------------------- Algorithm ---------------------
- take the first function pass in n and subtract the second helper fucntion passing in n
- obvi return everything
              **** helper functions ****
sum exponent
  - create a res array empty
  - create a for loop set start to one up to and including n
  - then return the result of reducing array by addition and then exponenting by two 

exponent sum
  - same thing as last helper function
  - except reduce by exponent two and sum
---------------------- Notes -----------------------

*/
function sumSquareDifference(n) {
  return sumExponent(n) - exponentSum(n);
}

function exponentSum(n) {
  let res = [];
  for (let i = 1; i <= n ; i++) {
    res.push(i);
  }
  return res.reduce((sum, x) => sum + x**2)
}

function sumExponent(n) {
  let res = [];
  for (let i = 1; i <= n ; i++) {
    res.push(i);
  }
  return res.reduce((sum, x) => sum + x)**2;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150