/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. 
Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 
Keep the first two digits fixed in place and rotate again to get 321759. 
Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 
The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. 
You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

--------------------- Problem ----------------------
write a function that takes a number and returns its maximum rotation
by that we mean rotating the numbers at the ends, then working inwards by index so the 1st position, 2nd and so on rotating as we go and always 
rotating the returned result in other words saving and rotating saving and rotating
------------ **Explicit Requirements** -------------
-  Rules: 
  - maximumly rotate a number
- Inputs: a whole number
- Output: a whole number
------------ **Implicit Requirements** -------------
- use the functions from previous questions
------------- **Clarifying Questions** -------------
- can i use said functions?
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference:
------------------ Data Structure ------------------
getting number to string and then string to array 
-------------------- Algorithm ---------------------
- let length = num to string .length
- within a for loop loop while i < length

- slice the array by the index within function name
- reasign variable holding array to return value of func name and pass it into function with index
- repeat untill loop finishes 
              **** helper functions ****

---------------------- Notes -----------------------

*/

function maxRotation(num) {
  let len = String(num).length;
  let maxRotate = num;
  for (let i = 0; i < len; i++) {
    maxRotate = rotateRightmostDigits(maxRotate, i)
  } 
  console.log(maxRotate)
}

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  let newArray = array.slice(1);
  newArray.push(array[0]);
  return newArray;
}

function rotateRightmostDigits(num, n) {
  let numArray = [...String(num)];
  let secondPart = numArray.splice(numArray.length - n);
  secondPart = rotateArray(secondPart); 
  let final = Number(numArray.concat(secondPart).join(''));
  return final;
};

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845