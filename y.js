/*
Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.

 arr,  x,  y

    arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).
    x will hold the row coordinate, while y will hold the column coordinate.

You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.
Examples

lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) ➞ 1


[
  [1, 2, 3]
  [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
  [7, 8, 9]
]

lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0) ➞ -1


[
  [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
  [0, -1, -3]
  [-5, -9, 54]
]
*/
/*
--------------------- Problem ----------------------
write a function that takes three argument an arr, an x or row cordinate
and y or column cordinate. with those coordinates find the lowest number arround those cooridnates and return
that number. Else if you cant find one lower then return the coordinates
------------ **Explicit Requirements** -------------
-  Rules:
  - if can't find any lower numbers return the number @ coordinates given
    - else return the lower number
  - a neighbor is any element that is around that cordinate
  - the 2D matrix which is the array being passed in will be symmetrical
- Inputs: an array and two cordinates
- Output: a number || the number at the given coordinate (still a number)
------------ **Implicit Requirements** -------------
if there is a corner coordinate given 
0, 0 -> - 0, 1
1, 0 1, 1
------------- **Clarifying Questions** -------------
-Bad Inputs:
-Edge Cases: uniqueness of numbers, length of the array, possible NaN, Infinity

------------ Examples/Test Cases/Edge's ------------
lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0) ➞ -1
lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) ➞ 1
lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54],
]0, 0)--> -1

lowestElement([
[9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 2, 2) --> -9

lowestElement([
[9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 1, 2) --> -3

lowestElement([
[1, -1],
[2, -2]
]) --> -2
------------------ Data Structure ------------------
arrays here, 
-------------------- Algorithm ---------------------
- save current number at cordinantes to a variable
- set lower number to current number
- set starting number for cordinates if cordinate is 0 then keep 0 else set to cordinate -1
  - do for both 
- set a stopping point using ternary logic x + 2 || x + 1 if 0
  - do for both cordinates
- create a nested for loop 
  - one for x cordinate and the other for y 
  - and use logic to determine the lowest number
              **** helper functions ****

---------------------- Notes -----------------------
i am being passed some cordinates
save current number at the cordinates to current number variable
 - then take cordinates and subtract by 1 unless 0 then keep zero
 - then set a stopping point if zero then stopping is one greater and if not then stop at 2 greater
- if number at the coordinate is less than current then set lower number to current iterated number
  - default lowerst number to coordinate number
*/

function lowestElement(arr, x, y) {
  let lowestNumber = arr[x][y];
  let startX = x === 0 ? 0 : x - 1;
  let startY = y === 0 ? 0 : y - 1;
  let stopX = x === 0 ? 1 : x
  let stopY = y === 0 ? 1 : y
  for (let i = startX; i <= stopX; i++) {
    for (let j = startY; j <= stopY; j++) {
      if (i > arr.length || j > arr.length) {
        continue;
      }
      if (lowestNumber > arr[i][j]) {
        lowestNumber = arr[i][j];
      }
    }
  }
  console.log(lowestNumber)
}

lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0) //➞ -1
lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) //➞ 1
lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54],
], 0, 0) //--> -1

lowestElement([
[9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 2, 2) //--> -9

lowestElement([
[9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 1, 2) //--> -3

lowestElement([
[1, -1],
[2, -2]
], 1, 1) //--> -2

lowestElement([
[9, 8, 7, -100, 23],
  [0, -1, -3, 44, 34],
  [-5, -9, 54, 22, 44],
  [-5, -9, 54, 22, 44],
  [-5, -9, 54, 22, 44]
], 4, 0) 

/*
Given an integer array, you need to find the shortest continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

Create a function that returns the length of that subarray.

findUnsortedSubarray([1, 3, 2, 34, 5, 8, 7, 13]) ➞ 5

[3 , 2, 5, 8, 7] => 5

1=> already in order: after 1, there is no smaller number
indexOf
13=> before 13, there is no bigger number
lastIndexOf
arr.slice(firstIdx, secondIdx);

// You need to sort [3, 2, 5, 8, 7] in ascending order to make
// the whole array sorted in ascending order.

findUnsortedSubarray([10, 7, 5, 3]) ➞ 4

findUnsortedSubarray([2, 4, 4, 4, 4, 3]) ➞ 5
*/

/*
--------------------- Problem ----------------------
write a function that finds the shortest confinous subarray, and if i were to only sort this subarray in ascending order, then the whole array will be sorted.
in other words. find the shortest part of the array posible that is continous and if i sort that then the whole array will be sorted
------------ **Explicit Requirements** -------------
- Inputs: is an array
- Output: an whole number

-  Rules:
  - sub array must be contiuous
  - shortest sub array possible so that the entire array is sorted 
  - return length of the shortest array possible to sort the array/string
------------ **Implicit Requirements** -------------
- should work with strings as well
------------- **Clarifying Questions** -------------
-Bad Inputs:
-Edge Cases: uniqueness of numbers, length of the array, possible NaN, Infinity
- should work for string as well
------------ Examples/Test Cases/Edge's ------------
findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]) ➞ 5
// You need to sort [3, 2, 5, 8, 7] in ascending order to make
// the whole array sorted in ascending order.

findUnsortedSubarray([10, 7, 5, 3]) ➞ 4

findUnsortedSubarray([2, 4, 4, 4, 4, 3]) ➞ 5
findUnsortedSubarray("abedc") ➞ 3

------------------ Data Structure ------------------
working with strings and arrays making sure that both can be worked with the same way
-------------------- Algorithm ---------------------
- sorts the argument array as a copy 
- sets cordinates to return of coordinate function
- then iterates through coordinates and builds concat arrays and passes them into the check function using filter on coordinate array
- then maps by shortest possible length the first index - second index then finds the minimum length 
- then returns minimum number
              **** helper functions ****
**sorted comparison**
- takes passed in sorted arugment array
  - also takes in "concatinated array"
- and compares element by element that they are the same values
- return true or false
** gets coordinates **
- pass argument array
- initialize coordinates array to empty
- loop with for with i 
  - loop with for with j which is i + 1
  - takes every single pair of indexes and placeds them in coordinates array
---------------------- Notes -----------------------
so first off i need comparison function that compares a finsished sorted array with the array 1 + slice(5,) + last
get every single continuous sub array with slice, using a nested for loop i can loop through and grab all the indexes of every possible combination then maybe storing them in to an array of sub arrays?
in concatination i need to take slice 0, arr[0] + arr.slice(arr[0], arr[1]) , slice(end, arr[1])
then 

- sorts the argument array as a copy 
- sets cordinates to return of coordinate function
- then iterates through coordinates and builds concat arrays and passes them into the check function using filter on coordinate array
- then maps by shortest possible length the first index - second index then finds the minimum length 
- then returns minimum number

*/

function findUnsortedSubarray(arr) {
  let sorted = arr.slice().sort();
  let cordinates = getCoordinates(arr);
  let res = cordinates.filter(pair => {
    let conCat = arr.slice(0, arr[0]).concat(arr.slice(pair[0], pair[1]), arr.slice(pair[1], arr.length))
    return sortedCheck(sorted, conCat);
  })
  let result = res.map(pair => pair[1] - pair[0]);
  console.log(res)
}


function sortedCheck(arr, concatArr) {
  arr.forEach((ele, i) => {
    if (ele !== concatArr[i]) {
      return false;
    }
  })
  return true;
}

function getCoordinates(arr) {
  let coordinates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.lengthj; j++) {
      coordinates.push([i, j]);
    }
  }
  return coordinates;
}

findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]) //➞ 5
// You need to sort [3, 2, 5, 8, 7] in ascending order to make
// the whole array sorted in ascending order.

// findUnsortedSubarray([10, 7, 5, 3]) ➞ 4

// findUnsortedSubarray([2, 4, 4, 4, 4, 3]) ➞ 5
// findUnsortedSubarray("abedc") ➞ 3

// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

/*
--------------------- Problem ----------------------
write a function that takes a string and a number which is the key in which we shift how many n places untill
we get to the appropriate letter in the alphabet in which we append to a new string and return 
all other characters are left alone
------------ **Explicit Requirements** -------------
- Inputs: a string and a key 
  - the string is a mix of both alphabet chars and special chars
  - the key (n) is how many spaces inthe alphabet we need to shift in order to properly encrypt
- Output:
  - an encrypted string
  - all special chars left alone

-  Rules:
  - alpha chars can be either upper or lowercase
  - need to keep case preserved
  - skip special chars
  - if the number goes beyond 25 (26) places of the index alphabet then wrap around again to the front
------------ **Implicit Requirements** -------------

------------- **Clarifying Questions** -------------
-Bad Inputs:
-Edge Cases: uniqueness of numbers, length of the array, possible NaN, Infinity
do i have to verify the input in any way?
- will ihave to deal with any primitve or compound objects beingt passed in?
------------ Examples/Test Cases/Edge's ------------
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"
so if the key is greater than 26 than maybe subtract untill i get below 26
47 -26 -> 21
this gets v at one at b
// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
ok so this one gets all the leters from behind it how does z work? ok so Z is 90 so if code goes beyond 90
then subtract 25

caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
------------------ Data Structure ------------------
ok so i am going to have early exits or continues at times,
i can stick with using a string for every thing but using a for loop is essential
-------------------- Algorithm ---------------------
- set resuting string
- set new key with helper
- use for loop to go through passed in string
  - if char is not a letter than append to string and continue
  - initialize a counter varialbe to 0 witin that is always reset to 0 ever iteration
  - set char code number to var
  - use another nested for loop to increment a counter
  - if the letter is capital and goes over 90  with counter sub char code by 26
  - again for 122 and lowercase
              **** helper functions ****
- take in the key
- use while loop to keep subing untill key is below 25
- return new number
---------------------- Notes -----------------------
so off the top of my head i am needing to count one by one up starting from whatever char code i am at
i also need to pay attention to weather the char is upper or lower case because that makes a difference
in char code as A is 65 and a is 97
so maybe making a resulting string and also making sure that the key is sanitized so that if its above 26 sub by 26 untill it gets under 26 that is a helper function
then starting a counter for
  -which must be a nested for loop because we have a counter for each char in the string and then just a normal counter for the actual number to add/subtract from the char code to get the correct char code.

  - set resuting string
- set new key with helper
- use for loop to go through passed in string
  - if char is not a letter than append to string and continue
  - initialize a counter varialbe to 0 witin that is always reset to 0 ever iteration
  - set char code number to var
  - use another nested for loop to increment a counter
  - if the letter is capital and goes over 90  with counter sub char code by 26
  - again for 122 and lowercase
              **** helper functions ****
- take in the key
- use while loop to keep subing untill key is below 25
- return new number
*/
function getKey(key) {
  while (key > 25) {
    key = key - 26;
  }
  return key;
}

function caesarEncrypt(str, key) {
  key = getKey(key);
  let resultingStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!/[a-z]/i.test(str[i])) {
      resultingStr += str[i];
      continue;
    }
    let counter = 0;
    let code = str[i].charCodeAt();
    for (let j = 0; j < key; j++) {
      counter += 1
      if (/[a-z]/.test(str[i]) && code + counter > 122) {
        code -= 26;
      } else if (/[A-Z]/.test(str[i]) && code + counter > 90)  {
        code -= 26;
      }
    }
    resultingStr += String.fromCharCode(counter + code);
  }
  console.log(resultingStr)
}

// simple shift
// caesarEncrypt('A', 0);       // "A"
// caesarEncrypt('A', 3);       // "D"

// // // wrap around
// caesarEncrypt('y', 5);       // "d"
// caesarEncrypt('a', 47);      // "v"

// // all letters
// caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// // // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
// caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 26);
// // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'