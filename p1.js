/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, 
the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

    If the phone number is less than 10 digits, assume that it is a bad number.
    If the phone number is 10 digits, assume that it is good.
    If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
    If the phone number is 11 digits and the first number is not 1, then it is a bad number.
    If the phone number is more than 11 digits, assume that it is a bad number.

For bad numbers, just a return a string of 10 0s.
=begin
========================================================================================================
                                                Problem                                            
--------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------
                                       **Explicit Requirements**                                        
--------------------------------------------------------------------------------------------------------
- Inputs: a string representing a phone number along with maybe special characters
- Output: a cleaned up string with nothing but the raw phone number
-  Rules: 
  - special characters such as ' ', '.', '-', '(', ')' should be ignored
  - if phone numbers return a a string of ten 0's
  - if a phone number has 10 digits assume its ok
  - if phone number has 11 digits and the first digit is a 1 then trim the 1 else its a bad number
  - anything above or below 10 other than first number === 1 then its a bad number

--------------------------------------------------------------------------------------------------------
                                       **Clarifying Questions:**                                        
                                                        or                                              
                                       ** Verbs and Nouns OOP **                                        
--------------------------------------------------------------------------------------------------------
- will there be input where there may be two special characters next to each other?
- will there be any text based characters such as 'a', 'b'?
- if there is 10 numbers and a 1 is in front is it still valid?

--------------------------------------------------------------------------------------------------------
                                       **Implicit Requirements:**                                       
--------------------------------------------------------------------------------------------------------
- input will be a string 
- there will be extra special characters next to each other
--------------------------------------------------------------------------------------------------------
                                       Examples/Test Cases/Edge's                                       
--------------------------------------------------------------------------------------------------------
console.log(cleanPhoneNumber(5555555555)); // true
console.log(cleanPhoneNumber(15555555555)); // true
console.log(cleanPhoneNumber(--5555555555)); // true
console.log(cleanPhoneNumber(1(555)-555-5555)); // true
console.log(cleanPhoneNumber(25555555555)); // false
console.log(cleanPhoneNumber(555--()--5555555)); // true
console.log(cleanPhoneNumber(23));  // false


--------------------------------------------------------------------------------------------------------
                                            Data Structure                                           
--------------------------------------------------------------------------------------------------------
- using a string the entire time to use regex to sainitize from extra special characters
- see if there is 10 numbers and an optional 1 in front
--------------------------------------------------------------------------------------------------------
                                              Algorithm                                            
--------------------------------------------------------------------------------------------------------
- take input and replace all specials with nothing
- use regex expression to check digit count 
- make sure to include optional 1 in digit count
- return ten 0's if digit count is off
- else return sanitized phone number

--------------------------------------------------------------------------------------------------------
                                                Notes                                             
--------------------------------------------------------------------------------------------------------


========================================================================================================
=end
*/

function cleanPhoneNumber(str) {
  if (typeof str !== 'string') return '0000000000'
  let sanitizedString = str.replace(/[^\d]/g, '');
  // console.log(trimOne(sanitizedString))
  return /^[1]?\d{10}$/.test(sanitizedString) ? trimOne(sanitizedString) : '0000000000';
};

function trimOne(str) {
  let yes = str.length > 10 ? str.substring(1, 11) : str;
  return yes;
};

console.log(cleanPhoneNumber('5555555555')); // true
console.log(cleanPhoneNumber('15555555555')); // true
console.log(cleanPhoneNumber('--5555555555')); // true
console.log(cleanPhoneNumber('1(555)-555-5555')); // true
console.log(cleanPhoneNumber('25555555555)')); // false
console.log(cleanPhoneNumber('555--()--5555555)')); // true
console.log(cleanPhoneNumber('23'));  // false
console.log(cleanPhoneNumber('243121342342134123'));  // false
console.log(cleanPhoneNumber(2345543))
