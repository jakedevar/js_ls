/*
<!-- The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, 
such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. 
This number must pass the following test:

    Counting from the rightmost digit and moving left, double the value of every second digit
    For any digit that thus become 10 or more, subtract 9 from the result
        1111 becomes 2121
        8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
    Add all these digits together
        1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
        8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), 
then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, 
  it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. 
This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string. -->


--------------------- Problem ----------------------
use the Luhn formula to extract a number given in string format to check if it is valid via the Luhn Formula
a valid number is one that ends in sum modulo 10 == 0
Ignoring all of the non-numeric characters in the input string
------------ **Explicit Requirements** -------------
-  Rules: 
  - count from right most digit and move left
  - every second digit from right is doubled && if result > 10 subract 9
  - sum together all of the resulting operations to produce Luhn number checksum
- Inputs: a string which may contain special characters
- Output: a boolean representing a valid checkusum 
------------ **Implicit Requirements** -------------
- number can be any length 
------------- **Clarifying Questions** -------------
- Ouput a boolean?
- do i need to account for a wrong type input?
- do i need to account for empty string etc.?
- is right most digit the checknumber?
- need to return null for invalid input?
------------ Examples/Test Cases/Edge's ------------

Counting from the rightmost digit and moving left, double the value of every second digit
    For any digit that thus become 10 or more, subtract 9 from the result
        1111 becomes 2121
        8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
    Add all these digits together
        1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
        8763 becomes 7733, and 7 + 7 + 3 + 3 is 20


------------------ Data Structure ------------------
using an array for iterative power as well as mutative abilitys and reducing prowess as well.
-------------------- Algorithm ---------------------
- check if input is valid
- rest argument to array
- reverse array to satisty rightmost iteration
- map over array to number conversion using index
- if result is over 10 then minus by 9
- reduce array
- modulo/remainder array and use logic to determine valid
---------------------- Notes -----------------------


write a number that can make a passed in digit valid via the luhn system
*/

function luhnValid(number) {
  if (typeof number !== 'string') return null;
  sanitizedNumber = number.replace(/\D/g, '');
  if (sanitizedNumber.length === 0) return null;

  MULTIPLY_SECOND_NUM = 2;

  
  formatedNumber = [...sanitizedNumber].map(Number).reverse();
  multiplyedArr = formatedNumber.map((ele, i) => i % 2 == 1 ? ele * MULTIPLY_SECOND_NUM : ele);
  subtractedNumbers = multiplyedArr.map(x => x > 10 ? x - 9 : x);
  checksum = subtractedNumbers.reduce((sum, ele) => sum + ele);

  return checksum % 10 === 0 ? checksum % 10 : (checksum + 3) % 10;
}; 

// console.log(luhnValid('1111')); // false
// console.log(luhnValid('8763')); // true
// console.log(luhnValid('109326')); // false
// console.log(luhnValid('')); // null
// console.log(luhnValid('adsf')); // null
// console.log(luhnValid(123)); // null
// console.log(luhnValid([2,3])); // null
console.log(luhnValid('2323 2005 7766 355')); // 2323 2005 7766 3554

