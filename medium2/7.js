/*
'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, 
it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, 
the two values of each pair of consecutive elements are compared. If the first value is greater than the second, 
the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps 
— at which point the array is completely sorted.
--------------------- Problem ----------------------
write a function that implements a bubble sort algorithm 
------------ **Explicit Requirements** -------------
-  Rules: keep going through array unttill no switches are made
  - obvi if first number or thing is bigger then second number then switch
  - can be both strings and snums
  - must mutate original arrray 
- Inputs: an array of nums or strings 
- Output: a sorted array 
------------ **Implicit Requirements** -------------
must msutate array 
------------- **Clarifying Questions** -------------
-
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference: given 
------------------ Data Structure ------------------
using arrays only for this one
-------------------- Algorithm ---------------------
- set boolean var to false
- nest for loop inside of a while loop set to true
- set for loop with i = 1 and i < arr length
- if arr[i - 1]  > arr[i] then bool flip
  - switch elements with the sweet sugar
- if bool is false at end of iteration then break 
  - else nothing keep iterating
- return array 
              **** helper functions ****

---------------------- Notes -----------------------


*/

function bubbleSort(arr) {
  let bool;
  while (true) {
  bool = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        bool = true;
      }    
    }
    if (!bool) return arr;
  }
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
>>>>>>> 86d5df181c745d47e5a5c8708b2cef8a316a1e75
