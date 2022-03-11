/*
Write a program that determines the sentence with the most words in some text. Sentences may end with periods (.), exclamation points (!), or question marks (?). 
Sentences always begin with a word character. 
You should treat any sequence of characters that are not spaces or sentence-ending characters, as a word. 
Log the longest sentence and its word count to the console. 
Pay attention to the expected output. Note that this problem is about manipulating and processing strings. 
As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

--------------------- Problem ----------------------
Create a program that will determine the sentence with the most amoutn of words in the sentence
log the longest sentence to the console and display the word count.
------------ **Explicit Requirements** -------------
-  Rules: 
  - sentences may end with . ! ? 
  - sentences always begin with a word character
  - treat any sequence of chars that are not spaces or sentence ending charcters as a word
  - maintain the integrity of the sentence during the whole process (ie dont change the original string/paragraph)
- Inputs: a long string representing a page/paragraph
- Output: an interpolated number in a sentance and the entire sentence in question
------------ **Implicit Requirements** -------------
will not be working with bad inputs
will not be working with any other strings 
------------- **Clarifying Questions** -------------
- double -- are words too
- assuming \n characters are not words either
------------ Examples/Test Cases/Edge's ------------
present is the entire paragraph and examples
------------------ Data Structure ------------------
Working with a string and an array is the most efficient way to do this
the string for the regex properties and the array for its iterative and transformative properties
in addition working with the split method to get the correct words in/ maybe the match method
-------------------- Algorithm ---------------------
- split up the paragraph by end characters with regex
- split up the sentences by spaces/regex
- count how many words in sentence and map the amount to array 
- save index of the sentence with the largest amount using max
- save max word amount
- return sentence and word count
---------------------- Notes -----------------------

*/

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';
  // let sentences = text.split(/(\?|\.|!)/);
function longestSentence(text) {
  let splitPara = text.split(/(\?|\.|!)/);
  splitSentences = splitPara.map(x => x.split(' ').length)
  console.log(splitSentences)
  // The longest sentence has 86 words.
}

longestSentence(longText);
// - split up the paragraph by end characters with regex
// - split up the sentences by spaces/regex
// - count how many words in sentence and map the amount to array 
// - save index of the sentence with the largest amount using max
// - save max word amount
// - return sentence and word count


// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

// longestSentence(longText);

// // console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.