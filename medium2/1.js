/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

You may assume that the string will always contain at least one character.
--------------------- Problem ----------------------
create a function that takes a string and returns an object containing the precentage of the string 
that is lower case, uppcase or neither
------------ **Explicit Requirements** -------------
-  Rules:
  - return an object containing precentages of the string
  - includes: uppercase, lowercase, neither
  - spaces count as neither
  - property names are lowercase, uppcase, neither
  - property values are string digits with fixed two decimal places
- Inputs: a string
- Output: an object with percentages
------------ **Implicit Requirements** -------------
- spaces count as neither characters
------------- **Clarifying Questions** -------------
- is mayonaise an instrument
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference: given
------------------ Data Structure ------------------
- a string so string methods to decide and split via regex match?
- so string match
- for each?
-------------------- Algorithm ---------------------
- create object 
  - put regex in values and then reasign with an object.keys for each loop
- save length of string in len argument
- iterate through object keys and use to both provide regex and then simultainously reasign the property value
- take length of matched strings and divide by len
  - take value and tofixed 2
  - pass into string fucntion to reasign
- place in appropriate property name
- return object
              **** helper functions ****

---------------------- Notes -----------------------

*/

function letterPercentages(string) {
  let precentages = {
    lowercase: /[a-z]/g,
    uppcase: /[A-Z]/g,
    neither: /[^a-z]/gi,
  }
  let len = string.length;
  Object.keys(precentages).forEach(key => {
    let matched = string.match(precentages[key]) || [];
    let precent = (100 * (matched.length / len)).toFixed(2);
    precentages[key] = precent;
  })
  console.log(precentages);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }