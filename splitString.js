/*
input:
string and one delimiter character
output:
no return value (undefined)
function logs to console

requirement:
- split string by given delimiter, and then log each token(s) line by line
- log error when delimiter is not given
- delimiter: '', splits character by character
- if delimiter is not present in string, return string
- if delimiter appears at the start or end of string, '' becomes the token
- if delimiter is back to back, '' becomes the token

algo:
0. create an empty string var: result
1. check if delimiter is given, if not log error msg
2. check if delimiter is '', log character by character
  - create an empty string var: token
3. iterate over string char by char
4. for each char, check if equal to delimiter
  4a. if not equal, append to token
  4b. if equal and -token length > 0-, then log token
      and reset token to empty ''
      -if equal and token length === 0, then log ''-
*/

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let token = '';
  for (let i = 0; i < string.length; i += 1) {
    if (delimiter === '') {
      console.log(string[i]);
    } else if (string[i] === delimiter) {
      console.log(token);
      token = '';
    } else if (i === string.length - 1) {
      token += string[i]
      console.log(token);
    } else {
      token += string[i];
    }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello