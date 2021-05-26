function substr(string, start, length) {
  let result = '';
  if (start < 0) {
    start = string.length + start;
  } 
  // else if (start === 0 && length <= 0) {
    // console.log('""');
    // return;
  // }
  for (let i = 0; i < length; i += 1) {
    if (string[start + i] === undefined) break;
    result += string[start + i]
  }
  console.log(`"${result}"`);
  return;
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""