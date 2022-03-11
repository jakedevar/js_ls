/*
Implement encoding and decoding for the rail fence cipher.

The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:
--------------------- Problem ----------------------
taking a string that can be decoded with the rail fence cipher. create a function that can decode somthing written in rail fence
------------ **Explicit Requirements** -------------
-  Rules:
  - if we take a string and then read up and down it we can get a message that reads out in plain english
  - by going up and down on the line starting from top and moving diagonally we can get the correct sentence read out
- Inputs: a string 
- Output: a string
------------ **Implicit Requirements** -------------
- all letters are capital
------------- **Clarifying Questions** -------------
- are there new line characters and can i split them up?
- lol i think i can solve this easy 
------------ Examples/Test Cases/Edge's ------------
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
------------------ Data Structure ------------------
strings into arrays working with arrays.
split up string by regex match char count of 49
then map and match chars with regex resulting in an array of single char strings
then add to a result string from top down or bottom up with a bool flip

-------------------- Algorithm ---------------------

              **** helper functions ****

---------------------- Notes -----------------------
*/

let words = 'W . . . E . . . C . . . R . . . L . . . T . . . E . E . R . D . S . O . E . E . F . E . A . O . C . . . A . . . I . . . V . . . D . . . E . . . N . .'

function ciper(str) {
  let words = str.match(/\w/g)
  let res = ''; 
  let bool = false;
  for (let i = 0; i < 12; i++) {
    if (i === 0) {
      res += words[i];
      res += words[i + 7];
      res += words[i + 19];
    } else if (bool) {
      res += words[i + 7];
      res += words[i];
    } else {
      res += words[i + 7];
      res += words[i + 19];
    }
    bool = !bool
  }
  return res;
}

console.log(ciper(words))