'use strict';

function makeAlphaArray() {
  let alpha = [];
  let char;
  for (let index = 97; index < 97 + 26; index++) {
    char = String.fromCharCode(index);
    alpha.push(char);
  }
  return alpha;
}

function charChange(str) {
  const THIRTEEN = 13;
  let chrCode;
  let resChr;
  let indexOfChr;
  let lowerStr;
  let alphaArr = makeAlphaArray();

  chrCode = str.charCodeAt();
  lowerStr = str.toLowerCase();

  indexOfChr = alphaArr.indexOf(lowerStr);
  chrCode = indexOfChr <= 12 ? (chrCode + THIRTEEN) : (chrCode - THIRTEEN);
  resChr = String.fromCharCode(chrCode);

  return resChr;
}

function rot13(str) {
  let resStr = '';
  for (let index in str) {
    if (/[^a-z]/i.test(str[index])) {
      resStr += str[index];
      continue;
    }

    resStr += charChange(str[index]);
  }

  return resStr;
}

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
// Grnpuref bcra gur qbbe, ohg lbh `hfg ragre ol lbhefrys.