/*
You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written 
because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). 
Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). 
Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

--------------------- Problem ----------------------
given a list of "short hand" ranges with different sybols representing the ranges 
return a list of complete numbers seperated by commas which are representative of the ranges present
------------ **Explicit Requirements** -------------
-  Rules:
  - inputs are representative of ranges
  - different symbols are used to represent a range and must work will all examples
  - the first range or set of two whole numbers represent the first range in which the smallest number is used or the ones place
  - the second number or second set of range numbers represent the next time we see that number in the ones place
    - ie 5-2 is 5-12

- Inputs: a string representing ranges
- Output: a list of numbers which are joined by commas
------------ **Implicit Requirements** -------------
- whole numbers are used only no decimals
- no negative numbers are used 
- ,'s represent jumps in numbers not ranges
- :'s and -'s represent normal ranges 
- : may include more than one number
------------- **Clarifying Questions** -------------
- do you want me to output all the numbers or just use a short hand like below?
- negatives?
------------ Examples/Test Cases/Edge's ------------
    "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
    "1-3, 1-2" --> 1, 2, 3, 11, 12
    "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
    "104-2" --> 104, 105, ... 112
    "104-02" --> 104, 105, ... 202
    "545, 64:11" --> 545, 564, 565, .. 611
------------------ Data Structure ------------------
it is best to split up the input string using match regex
then create sets of twos as arrays using map? 
-------------------- Algorithm ---------------------
- split up string with regex of commas and maybe spaces
- map the array by matching digits inside of split string
- if there is a loose number meaning arr size of 1 and push to res and continue 
- use a double loop to iterate through array untill reaches finish starting at one and setting starting array number so no null is found  (convert string)
  - use first loop to iterate through array 
  - use second loop to act as a brute force counter with first converted num being first element in the array and the ending num being the next element
    - this resets in the parent loop on each iteration
- take the first number in a sub-array and set it to start of an iteration
  - untill it reaches > second number push all numbers to result array
  - then use that number as a starting point or next number as starting point and repeat 
- add every number between ranges to resulting list array
- map array to numbers and then print

              **** helper functions ****
double loop function 
  - create a for loop doubler which returns an array 
  - takes an array 
  - iterate through array and then iterate through nums with second loop 
  - set start to first element of array and leave while as number * 100 to avoid infinite loop
    - convert iterated number to string and if the second last string in array is included in number string stop iteration and push 
  - also pass in the result list and either set beggening to last num of result list or start
---------------------- Notes -----------------------
need a way to recognize two numbers at a time?
or just go from one number to another using brute force?
now that i have a list of numbers i need to append to an array using a brute force approach? 
the thing is that not all go in sets of two some are contigous
but that might be able to be accounted for by even odd?
or i can split by character
: means from one to anther, all else are just a regular range

i could first split by commas then split by special characters during a map
that would ensure i still get an intact string if there are no commas with spaces

because it will be an array made up of strings and sub arrays maybe i should just push things that are not arrays to the resulting array

now to figure out how to stop when nums are short hand
maybe using last number in result array as context for next iteration
maybe converting number to string to then see if the string is there is included

so now i have a problem when i use includes, oh wait, maybe i should use a slice and substring to do the includes

how do i deal with the problem of the ones place, ill have to splice by str length
*/

function rangeList(ranges) {
  let list = [];
  let looseNumbers = ranges.split(/, ?/g).map(x => x.match(/\d+/g));
  looseNumbers.forEach(arr => {
    if (arr.length === 1) {
      list.push(arr[0])
    } else {
      list.push(listMaker(arr, list))
    }
  });
  console.log(list)
}

function listMaker(numArr, currentList) {
  let result = [];
  let start = currentList.length === 0 ? Number(numArr[0]) : Number(currentList[currentList.length - 1]);
  console.log(start)
  for (let i = start; i < start * 100; i++) {
    let str = String(i)
    let end = numArr[numArr.length - 1]
    if (str.includes(end) && !currentList.includes(i)) {
      result.push(i);
      return result;
    } else if (!currentList.includes(i)){
      result.push(i)
    }
  }
  return result;
}

// console.log(rangeList("1, 3, 7, 2, 4, 1")); //--> 1, 3, 7, 12, 14, 21
// console.log(rangeList("1-3, 1-2")); //--> 1, 2, 3, 11, 12
// console.log(rangeList("1:5:2")); //--> 1, 2, 3, 4, 5, 6, ... 12
// console.log(rangeList("104-2")); //--> 104, 105, ... 112
// console.log(rangeList("104-02")); //--> 104, 105, ... 202
console.log(rangeList("545, 64:11")); //--> 545, 564, 565, .. 611