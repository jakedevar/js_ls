/*
A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. 
For example, the 3x3 matrix shown below:

Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. 
You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

traposition of a matrix is the exchange of the columns and rows of a matrix
--------------------- Problem ----------------------
take a 3X3 matrix represented by an array of arrays, which is an outer array with three nested sub arrays within it
and write a function that takes an array of arrays that represents a 3X3 matrix and returns the transpose of a matrix
which is the exchanging of columns with rows so column 1 becoms row 1 2 becomes 2 and so on
your function must not mutate the original array
also you may not use anyother librarys other than functions that already exist past ES6?
------------ **Explicit Requirements** -------------
-  Rules:
  - working with 3X3 matrix which is an array of 3 arrays with three items in each array
  - do not mutate the array being passed into the function
  - do not use external librarys
  - transpose the array which is switching columns with rows
  - 
- Inputs: an array of arrays or rather a 2D matrix
- Output: another array of arrays 2D matrix tranposed
------------ **Implicit Requirements** -------------
- all elements are digits
- each element represents a columns
- each sub array represents a row
------------- **Clarifying Questions** -------------
- no external librarys though i can use regualar array method correct?
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference: given below
------------------ Data Structure ------------------
using an array for each to iterate through
maybe mapping the array and returning to a variable to be returned instead of for each save some steps
using index while mapping and using a nested map to switch elements with respective parts
-------------------- Algorithm ---------------------
- initialize a variable "traponsposed" to matrix.map and set paramters to row and eleInd
- call map on row and set paramters to ele and rowInd
- set each element in nested map to matrix[rowInd][eleInd]
- return transposed variable
              **** helper functions ****

---------------------- Notes -----------------------
matrix.map ele ind
ele = array
ind = row
  ele.map element j
  element = column
  j = element/column

  const matrix = [
  i 0  1  2 j
  0[1, 5, 8], 000
  1[4, 7, 2], 111
  2[3, 9, 6]  222
];
when going through map we need to access every element in every array below 
so when we are iterating with the first map we get a different index after each iteration but the correct index for each element in a row so i = element ind
and while we are doing the second map iteration we are gettting the correct index for each row but not the correct element for each for  j = row index
*/


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  let tranposed = matrix.map((row, eleInd) => {
    return row.map((ele, rowInd) => {
      return matrix[rowInd][eleInd];
    })
  });
  return tranposed;
}

// function transpose(matrix) {
//   let res = [];
//   matrix.forEach((_, ind) => {
//     res[ind] = [matrix[0][ind], matrix[1][ind], matrix[2][ind]]
//   });
//   return res;
// }

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]