// ASCII codes for letters 'A', 'M', and 'Z' respectively.
const UPPER_A_CODE = 65;
const UPPER_M_CODE = 77;
const UPPER_Z_CODE = 90;

// ASCII codes for letters 'a', 'm', and 'z' respectively.
const LOWER_A_CODE = 97;
const LOWER_M_CODE = 109;
const LOWER_Z_CODE = 122;

// input value: integer (ASCII code)
// return value: boolean
// purpose: checks if given ASCII code corresponds to an alphabet
//          character
function isAsciiCodeAlphabet(charCode) {
  let isUpper = (charCode >= UPPER_A_CODE &&
                  charCode <= UPPER_Z_CODE);

  let isLower = (charCode >= LOWER_A_CODE &&
                  charCode <= LOWER_Z_CODE);

  return (isUpper || isLower);
}

// input value: string (text to rotate)
// return value: a new string that is a rotated version of input string.
// purpose: rotate each alphabet char by 13 position to encrypt or decrypt
//          message.
function rot13(str) {
  let result = '';

  for (let ind = 0; ind < str.length; ind += 1) {
    let asciiCode = str.charCodeAt(ind);

    if (isAsciiCodeAlphabet(asciiCode)) {
      // the if statement below checks to see if the ASCII code is for
      // letters between A~M or a~m. M is the 13th letter and the midway
      // point of the alphabet sequence. This function steps forward if
      // the letter belongs in the first half of the alphabet, and steps
      // backwards otherwise.
      if ((asciiCode >= UPPER_A_CODE && asciiCode <= UPPER_M_CODE) ||
            (asciiCode >= LOWER_A_CODE && asciiCode <= LOWER_M_CODE)) {
        result += String.fromCharCode(asciiCode + 13);
      } else {
        result += String.fromCharCode(asciiCode - 13);
      }
    } else {
      result += str[ind];
    }
  }
  return result;
}

let originalString = 'ZZzzTeachers open the door, but you must enter by yourself.'

let encrypted = rot13(originalString);

let answer = 'MMmmGrnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.'

console.log(encrypted);
console.log(encrypted === answer);

console.log(rot13(encrypted));
console.log(rot13(encrypted) == originalString)

let testSentence1 = 'Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.';
let solution1 = 'Ergheaf gur punenpgre (rknpgyl bar HGS-16 pbqr havg) ng gur fcrpvsvrq vaqrk. Npprcgf artngvir vagrtref, juvpu pbhag onpx sebz gur ynfg fgevat punenpgre.'
console.log(rot13(testSentence1) === solution1);
console.log(rot13(rot13(testSentence1)) === testSentence1);
