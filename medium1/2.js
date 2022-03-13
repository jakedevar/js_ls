/*
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.
--------------------- Problem ----------------------
write a function that rotates a part of an number represented by the n digits of the nymber. meaning it will encompass the last digits of a number reped by n
------------ **Explicit Requirements** -------------
-  Rules: 
  - rotate by one digit in the front moving it to the back
- Inputs: the input is a whole number
- Output: a whole number
------------ **Implicit Requirements** -------------
- cannot iterate digits so need to convert to another
------------- **Clarifying Questions** -------------
- can i use methods from the last question?
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference: below
------------------ Data Structure ------------------
- turning digits into a string String()
- turning string to array [...num]
- turning array to string .join()
- turning string to num Number()
-------------------- Algorithm ---------------------
- turn the input into a string then array and assign to variable
- then splice array by n
- pass this into the rotateArray function
- capture rotateArray function return
- concat stored splice with rotate array
- join array into string and convert to number and return 
              **** helper functions ****

---------------------- Notes -----------------------

*/

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

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917