function toLowerCase(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    let asciiNumeric = string.charCodeAt(i);
    if (asciiNumeric > 64 && asciiNumeric < 91) {
      asciiNumeric += 32;
    }
    result += String.fromCharCode(asciiNumeric);
  }
  console.log(result);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"

// let string = '1';
// let asciiNumeric = string.charCodeAt(0);         // 49
// asciiNumeric += 32;
// console.log(typeof asciiNumeric);
// string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase
// console.log(string);