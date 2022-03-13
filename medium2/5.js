/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, 
with all of its digits occurring exactly once each.

For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. 
Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.
--------------------- Problem ----------------------
write a function that takes an integer and returns the next featured umber that is greater than the integer
dont forget to raise an error message if there is no next featured number
------------ **Explicit Requirements** -------------
-  Rules: 
    - a featured number is an odd number
    - also must be a multiple of 7
    - the digits all must apear only once 
- Inputs: a whoel number
- Output: a whole number
------------ **Implicit Requirements** -------------
- because of the larger later numbers this solution has to be realativley speedy?
------------- **Clarifying Questions** -------------
- 
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference: given
------------------ Data Structure ------------------
- numbers and possible strings or arrrays
-------------------- Algorithm ---------------------
- take the number and set coutner to the starting number of a while loop which is set to true
- make a guard clause that break if all precendent functions are true
	- else break if number reaches blah blah blah
              **** helper functions ****
check if all numbers are different
	- make number a string
	- use a for loop and set it to 0 and to < str length
	- make another nested for loop with the same stuff
		- inside if the two numbers i and j are the same then continue
	- return false if two numbers are equal 
	- return true
check if number divis by 7

check if number is odd
---------------------- Notes -----------------------
checking it all are unique maybe i can make it a string and splice the string and check if some return true else false and then put it back?
or just making a counter and use the for each function to check if all are the same or not. 
this would require a double loop and maybe a for loop so that when the index is the same i can continue
ya that works best actually 
*/
function featured(n) {
	let counter = n + 1
	const MAGIC_STOP_NUMBER = 9876543202
	while (true) {
		if (allUnique(counter) && isOdd(counter) && multOfSeven(counter)) return counter;
		if (counter === MAGIC_STOP_NUMBER) throw 'there is no possible number that could work here';
		counter += 1;
	}
}

function allUnique(n) {
	let str = String(n);
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < str.length; j++) {
			if (i === j) continue;
			if (str[i] === str[j]) return false;
		}
	}
	return true;
}

function isOdd(n) {
  if (n % 2 === 1) return true;
  return false;
}

function multOfSeven(n) {
  if (n % 7 === 0) return true;
	return false;
}

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."