/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

    If the input is not an array, return undefined.
    If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.
--------------------- Problem ----------------------
write a function that rotates an array by taking the first element and moving it to the end of the array
do not mutate the original array by doing this
------------ **Explicit Requirements** -------------
-  Rules: 
    - take first element and put it in back of a new array 
    - do not mutate the array
    - if input is not an array return undefined
    - if the input is an empty array return the empty array 
- Inputs: an array, empty array, or bad input
- Output: a new array 
------------ **Implicit Requirements** -------------
- 
------------- **Clarifying Questions** -------------
- can i use array methods?
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference:
------------------ Data Structure ------------------
going to be working with arrays the whole time
slice the array and push the first element of the old array
-------------------- Algorithm ---------------------
- return undefined if input is not array with method
- return empty array if input is empty
- initialize a new variable to the slice of the old array from the 1 index
- push the first element of the old array to the new array
              **** helper functions ****

- return undefined if input is not array with method
- return empty array if input is empty
- set a resulting array var to empty array
- create a for loop with the start being one
- add all elements from old array to new from iterater
- add first element of old array to end of new array with the length property
---------------------- Notes -----------------------

*/

// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   if (array.length === 0) return [];
//   let newArray = array.slice(1);
//   newArray.push(array[0])
//   return console.log(newArray);
// }

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  let res = [];
  NO_ELEMENT_LEFT_BEHIND = 1
  for (let i = 1; i < array.length; i++) {
    res[i - NO_ELEMENT_LEFT_BEHIND] = array[i]
  }
  res[res.length] = array[0]
  return console.log(res);
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
// const array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]