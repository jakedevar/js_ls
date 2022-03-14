/*
Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. 
You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). 
You may also assume that the same calendar will remain in use for the foreseeable future.
--------------------- Problem ----------------------
write a function that returns an integer representing the amount of friday the 13ths in a year
make sure to use the gregorian calender
------------ **Explicit Requirements** -------------
-  Rules: 
  - use the gregorian calendar
  - the input is a year
- Inputs: an integer representing a year
- Output: outputs an integer representing the amount of friday the 13ths in a given year
------------ **Implicit Requirements** -------------
need to find a way to iterate through a date object and check if a day is a friday and is the 13th
------------- **Clarifying Questions** -------------
- ahhhhhhhh idk
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference:
------------------ Data Structure ------------------
using the date object obviously 
also using a while loop to go through the iteration
-------------------- Algorithm ---------------------
- set a counter to 0
- see if the day of the week is 5 
- see if getdate is 13
- if both are true then increment the counter
- return the counter after loop finishes iteration
              **** helper functions ****

---------------------- Notes -----------------------
const start = new Date("02/05/2020");
const end = new Date("02/10/2020");

let loop = new Date(start);
while (loop <= end) {
  console.log(loop);
  let newDate = loop.setDate(loop.getDate() + 1);
  loop = new Date(newDate);
}
*/

// function fridayThe13ths(year) {
//   let counter = 0;
//   start = new Date(`01/01/${year}`);
//   end = new Date(`12/31/${year}`);
//   while (start < end) {
//     let newDate = start.setDate(start.getDate() + 1);
//     start = new Date(newDate)
//   if (start.getDay() === 5 && start.getDate() === 13) counter += 1;
//   }
//   console.log(counter)
// }

// function fridayThe13ths(year) {
//   const thirteenths = [];

//   for (let i = 0; i < 12; i += 1) {
//     thirteenths.push(new Date(year, i, 13));
//   }

//   return thirteenths.reduce((count, day) => day.getDay() === 5 ? (count + 1) : count, 0);
// }

function fridayThe13ths(year) {
  const thirteenths = [];
  for (let i = 0; i < 12; i++) {
    thirteenths.push(new Date(year, i, 13))
  }
  console.log(thirteenths.reduce((count, day) => day.getDay() === 5 ? count + 1 : count, 0))
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2