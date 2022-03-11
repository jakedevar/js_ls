/*
A collection of spelling blocks has two letters per block, as shown in this list:
This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. 
You can consider the letters to be case-insensitive when you apply the rules.
--------------------- Problem ----------------------
given a set of spelling blocks, see if the given word can be spelled by only using one letter on a block at a time
and only using one block per letter and only once. So once a block has been used it is thrown away
write a function that returns a boolean if the word can be spelled using this method or not
------------ **Explicit Requirements** -------------
-  Rules: 
  - each block can only be used once per word
  - each letter on a block can only be used once per word
  - case insensitive
- Inputs: input is a string that represents a word to be spelled using blocks
- Output: a boolean if it can or can't be spelled
------------ **Implicit Requirements** -------------
- need to make sure word is caplitalized
- block is tossed after match
------------- **Clarifying Questions** -------------
- do i need to account for bad inputs?
- 
------------ Examples/Test Cases/Edge's ------------

------------------ Data Structure ------------------
Workin with both strings and arrays during this attempt would be wise
strings for the abilty to use regex to turn the string into an array
and arrays for iterative propertys
-------------------- Algorithm ---------------------
- create array of blocks using regex match
- map array of blocks using split
- make sure inputs is capitalized
- split input up
- loop over input
  - loop over input using forEach
    - maps the array to [] when something is found
  - create a found counter
     - if character is found then up the counter
  - if char is included in block throw block away
    - map over blocks and if it is included turn into empty arr
  - if char is not included on anything then continue iteration
- if count == str length return true else false
---------------------- Notes -----------------------
looking at this it looks like i might need to move the block createion to found
so that i can mutate without passing in 

create blocks -> loop through input -> when one is found throw away -> up a counter outside? -> if counter == str length then return true else false
*/

function isBlockWord(str) {
  let found = 0;
  upperStr = str.toUpperCase().split('');
  let blocks = 'B:O   X:K   D:Q   C:P   N:A G:T   R:E   F:S   J:W   H:U   V:I   L:Y   Z:M';
  blocks = blocks.match(/\w:\w/g).map(x => x.split(':'));
  upperStr.forEach(char => {  
    blocks.forEach((block, ind) => {
    if (block.includes(char)) {
      found += 1;
      blocks[ind] = [];
    }
    })
  });
  return console.log(found === upperStr.length ? true : false);
}


isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true