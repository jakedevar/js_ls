/*
You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written 
because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). 
Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]).

Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]
--------------------- Problem ----------------------
given a list of numbers in a short notated form of a rang. Where only the SIGNIFICANT  part of the next number
is written. Because the numbers are always increasing we know that 1-3 2-3 i s 1-2 and then 12 13. 
return a list of complete numbers from a function
------------ **Explicit Requirements** -------------
-  Rules: 
  - numbers are always increasing
  - numbers seperated by , are single numbers not ranges
  - numbers seperated by - or : or .. are ranges 
- Inputs: a string with three possible seperators that make up a short notation range
- Output: a list of numbers strings or not? go with either
------------ **Implicit Requirements** -------------
- have to deal with three seperate seperators
------------- **Clarifying Questions** -------------
- need to return strings or nubmers or dosent matter? 
- deal with negative numbers and bad inputs?
- empty inputs?
------------ Examples/Test Cases/Edge's ------------

    "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
    "1-3, 1-2" --> 1, 2, 3, 11, 12
    "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
    "104-2" --> 104, 105, ... 112
    "104-02" --> 104, 105, ... 202
    "545, 64:11" --> 545, 564, 565, .. 611

------------------ Data Structure ------------------
working with arrays for both inputs and result as the list format is the best
regex string to get to array string.match
-------------------- Algorithm ---------------------
- split string up by string match with regex commas and spaces
- loop through array with for loop and set start number to lastElem index and set iterator to second index
- if start number includes range send to lastElem method in if conditional
- else send to second passing in start number which is either last number in result or 0


- if the coming number is smaller than the number that just came then take the prev number and then copy pasta
  - and if index does not == 0 must be larger as to check that it is not a range
    - thats assuming problem from yesterday 
- 
              **** helper functions ****
** if conditional **
- if string includes - return true
- includes :
- includes ..
else false

- passing in a start number which is either last element in result array or 0
- use a for loop to create a counter which will be pushed to the resulting array
  - if a number in the for loop converted to a string includes the next number then push to result array
  - return result array 
- if last element of list is array then set it to blah blah 
- if not then 0


- if string includes a range marker then split it up and set start to lastElem number
  - use a for loop to start at the start position and push all numbers untill second number is included
    - let the second number be a number that is returned by a for each loop that takes the 1 index splice of the range array
  - iterate to next number and save current number + 1 as new start


---------------------- Notes -----------------------
maybe i can just paste on the second number to the lastElem number to get what i want
of course thats assuming it knows if there are two sperate ranges which isnt hard

if the number coming up is less than the number that just came before then copy pasta

wait i dont need to split the second string up exactly, i could use a string that includes a range marker to denote a range
so i can create a starting number with the previous number and then if the string includes a range marker i can push all numbers to it

ok so, i am gettting a print out of the numbers up to and including the largest from the starting index, i need to keep that behavior 
maybe a determine start? where i do the same thing in a method and return the start value?

ok what do i need. i need the starting number to be the beggening of the actual high number before iteration
i can use the single number method to get that but what is the ending number and how do i pass it in

slice number == match.length - end.length

so now litteraly my only problem besides the overwhelming complexity of my solution is that the start number is starting at wehre the last number is
*/

function ranges(stringNums) {
  let convertArray = stringNums.split(', ');
  let result = [];
  for (let i = 0; i < convertArray.length; i++) {
    let start = Number(result[result.length - 1]) || 0;
    let elem = convertArray[i];
    if (ifRange(elem)) {
      result.push(rangeNumbers(elem, result));
    } else {
      result.push(singleNumbers(elem, start));
    }
    // console.log(result)
  }
  return result.flat();
}

function ifRange(str) {
  if (str.includes('-')) {
    return true;
  } else if (str.includes(':')) {
    return true;
  } else if (str.includes('..')) {
    return true;
  } else {
    return false;
  }
}

function singleNumbers(num, start) {
  let whilst = (start + 1) * 1000;
  
  for (let i = start; i <= whilst; i++) {
    let match = String(i);
    if (match.slice(match.length - num.length).includes(num) && i > start) {
      return i;
    }
  }
  return null;
}



function rangeNumbers(str, list) {
  // gets the numbers in an array
  let rangeArr = str.match(/\d+/g);
  // gets the second or > numbers in the passed in list
  let chopped = rangeArr.slice(1);
  // gets the array started
  let res = [];
  // gets starting number?
  let lastElem = list[list.length - 1]; // bad variable name
  // gets the starting number, if the lastElem thing exists and is an array do lastElem else start with lastElem range number
  let start = Array.isArray(lastElem) ? (Number(lastElem[lastElem.length - 1]) + 1) : Number(rangeArr[0]);
  // if lastElem element exists and is an array then start is the lastElem element of the range array, passing in start from previous line as 
  if (Array.isArray(lastElem)) { 
    // bassically in this case the logic takes the last number in the result if it was an array and uses it as a start
    // this is so short hand ranges can exist and it wont short circut when the counter gets to 1 or 2 or 3 and instead starts at 4 or somthing
    // used if the last elemennt is an array
    start = singleNumbers(rangeArr[0], start);
  } else if (Number(lastElem) > Number(rangeArr[0])) {
    // if the last number is not an array and its bigger than the starting range number than set start to 
    // the single numbers function lastElem element of the range array is the finish and the starting number is last list number
    // used for ranges with preceding loose numbers
    start = singleNumbers(rangeArr[0], list[list.length - 1]);
  } else {
    // if neither is array or is bigger than the starting range number then just set start to the lastElem number of the range array 
    // used if there is no numbers preceding
    start = Number(rangeArr[0]);
  }
  
  // console.log(start)
  // used to make sure no infinite loop and there are nubmers big enough because ranges often dont represent wholly good numbers to start at
  let whilst = (start + 1) * 10;
  // iterates over chopped range array with each number being an end number
  chopped.forEach(end => {
    // sets a for loop to iterate a counter
    for (let i = start; i <= whilst; i++) {
      // creates a possible match of iteration
      let match = String(i)
      // makes a comprehensive slice number by taking the end length and subtracting the match length so it will always match end number
      // also the i number must be bigger than the start number which might be silly and it was i deleted and words prefect
      if (match.slice(match.length - end.length).includes(end)) {
        // once a match is found it pushes the matched item to array to satisy inclusive ranges
        res.push(i);
        // it then resets start to the last element in the result array plus 1
        start = res[res.length - 1] + 1;
        // console.log('firs')
        // obvi it returns res to calling function
        return res;
      }
      // else the thing returns just the number
      res.push(i);
    }
  })
  return res;
}

console.log(ranges("1, 3, 7, 2, 4, 1")); //--> 1, 3, 7, 12, 14, 21
console.log(ranges("1-3, 1-2")); //--> 1, 2, 3, 11, 12
console.log(ranges("1:5:2")); //--> 1, 2, 3, 4, 5, 6, ... 12
console.log(ranges("104-2")); //--> 104, 105, ... 112
console.log(ranges("104-02")); //--> 104, 105, ... 202
console.log(ranges("545, 64:11")); //--> 545, 564, 565, .. 61
console.log(ranges("1, 2, 3, 4, 104..02")); //--> 104, 105, ... 202