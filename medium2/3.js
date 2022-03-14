/*
A triangle is classified as follows:

    Right: One angle is a right angle (exactly 90 degrees).
    Acute: All three angles are less than 90 degrees.
    Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. 
If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings 
representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.
--------------------- Problem ----------------------
make a function that takes three integers as arguments and returns one of four strings from the last problem
assum that all integers are whole integers so no floating point errors and arguemnts are in degrees
------------ **Explicit Requirements** -------------
-  Rules:
  - to be a valid triangle the sum of the angles must be exactly 180 degrees and every angle must be greater than 0
  - every argument is a degree an is a whole degree no floating points
  - right angle is exaclty one angle is 90
  - acute is all three angles less than 90
  - obtuse is one angle is greater than 90 
- Inputs: three integers
- Output: a string one of four
------------ **Implicit Requirements** -------------

------------- **Clarifying Questions** -------------
-
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference:
------------------ Data Structure ------------------
going to be working with arrays for this one is it is easier to reduce, and to iterate over with methods
-------------------- Algorithm ---------------------
- put the angles in an array and sort
- guard clause that all are 180 && arr.every(x !== 0)
- see that last element is 90
- every function all under 90
- last element is over 90
              **** helper functions ****

---------------------- Notes -----------------------

*/

function triangle(one, two, three) {
  let angles = [one, two, three].sort((a, b) => a - b);
  if (angles.reduce((sum, x) => sum + x) !== 180) return 'invalid';
  if (angles[0] === 0) return 'invalid';
  if (angles[2] === 90) return 'right';
  if (angles[2] > 90) return 'obtuse';
  if (angles.every(x => x < 90)) return 'acute'
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"