/*
take a string as input and then go through every character in the string
subtract the char code by 13 if its position in array is greater than 12 and add if older etc
have an array with the chars that matches the lower case of the char by ind
arr -> match index -> return char code +- 13 -> add to resulting string from char code
*/
'use strict';

function makeAlphaArray() {
  let alpha = [];
  let char;
  for (let i = 97; i < 97 + 26; i++) {
    char = String.fromCharCode(i);
    alpha.push(char);
  };
  return alpha
};

function charChange(str) {
  let chr_code;
  let res_chr; 
  let index_of_chr;
  let lower_str;
  let alpha_arr = makeAlphaArray();

  chr_code = str.charCodeAt();
  lower_str = str.toLowerCase();

  index_of_chr = alpha_arr.indexOf(lower_str);
  chr_code = index_of_chr <= 12 ? (chr_code + 13) : (chr_code - 13);
  res_chr = String.fromCharCode(chr_code);
  
  return res_chr;
};

function rot13(str) {
  let res_str = '';
  for (let i in str) {
    if (/[^a-z]/i.test(str[i])) {
      res_str += str[i];
      continue;
    };

    res_str += charChange(str[i])
  };

  return res_str;
};

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
// Grnpuref bcra gur qbbe, ohg lbh `hfg ragre ol lbhefrys.