/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, 
and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing 
the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
--------------------- Problem ----------------------
create functionthat takes in three integers as arguments and decides what kind of triangle it is
------------ **Explicit Requirements** -------------
-  Rules: 
  - a valid triangle is the sum of the lengths of the two shortest sides must be greater than the length of the longest side
  - every side must be greater than 0
- Inputs:
- Output:
------------ **Implicit Requirements** -------------
- must have three arguments or is invalide
------------- **Clarifying Questions** -------------
- 
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference: given
------------------ Data Structure ------------------
seperate integers
move to array 
work with if else logic to return answer
-------------------- Algorithm ---------------------
- place three args in array and sort by integer
- check for validity that arr[0] and arr[1] summed are larger than the last element in array if false return invalid
- check that some of the arguments are not zero for validity if true return invalid with includes
above are guard clauses
- for equaliteral if every element is the same return e
- for isosceles shift and if some == shifted num return i
- else scalene
              **** helper functions ****

---------------------- Notes -----------------------

*/

function triangle(one, two, three) {
  let tri = [one, two, three].sort((a, b) => a - b);
  if (tri[0] + tri[1] < tri[2]) return 'invalid';
  if (tri.includes(0)) return 'invalid';
  if (tri.every(x => x === tri[0])) return 'equilateral';
  if (tri[2] === tri[1]) return 'isosceles'
  return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"