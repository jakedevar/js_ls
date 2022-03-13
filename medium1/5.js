/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a 
"number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.
--------------------- Problem ----------------------
write a function that takes a string as an argument and changes all the string representations of words and turns them into their digit equivalent
------------ **Explicit Requirements** -------------
-  Rules:
  - returns the string exacly as is but changes words of numbers to digits string
- Inputs: a sentence string
- Output: a sentence string
------------ **Implicit Requirements** -------------
- digits going into strings are strings too
------------- **Clarifying Questions** -------------
- 
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference: given
------------------ Data Structure ------------------
- split string up and 
- string replace 
-------------------- Algorithm ---------------------
- create array of word digits
- create variable to be saved of string
- iterate through digits array with index
  - create regex object with variables of the token and the index as replacemnt
  - set variable = variable replace regex
- return when done
              **** helper functions ****

---------------------- Notes -----------------------
i want to use an array of word digits and use the index as the replacement 
so like creating the array first and then replacing by creating a new regex object in the loop 
then saving the replaced string into a variable which is recycled in the loop and then returned
*/

// function wordToDigit(string) {
//   let digitArray = 'zero one two three four five six seven eight nine'.split(' ');
//   let replacedString = string;
//   digitArray.forEach((token, ind)=> {
//     let re = new RegExp(token, 'g')
//     replacedString = replacedString.replace(re, ind);
//   })
//   console.log(replacedString);
// }

**** not mine below ****
// function wordToDigit(sentence) {
//   const key = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
//                'eight', 'nine'];

//   let parts = sentence.split(/\b/);
//   return parts.map(part => key.includes(part) ? key.indexOf(part) : part).join('');
// }

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."