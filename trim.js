/*
algo:
0. set an startIndex = 0
1. iterate from start of str (0 and up)
2. verify whether it's an empty space or not
  2a. if empty space, indexMarker++
  2b. if not, break
3. set an endIndex = str.lenght - 1
4. iterate from the end of str (str.length - 1 and down)
  4a. if empty space, endIndex -= 1;
  4b. if not, break
5. str.substring(startIndex, endIndex)
*/


// function trim(str) {
//   let startIndex = 0;
//   let endIndex = str.length - 1;

//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === ' ') {
//       startIndex += 1;
//     } else {
//       break;
//     }
//   }

//   if (startIndex === str.length) {
//     console.log('""');
//     return;
//   }

//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     if (str[i] === ' ') {
//       endIndex -= 1;
//     } else {
//       break;
//     }
//   }
//   // console.log(`start: ${startIndex}`);
//   // console.log(`end: ${endIndex}`);
//   console.log(`"${str.substring(startIndex, endIndex + 1)}"`);
// }

function leftTrim(str) {
  let result = '';
  let copyMode = false;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ') {
      copyMode = true;
    }
    if (copyMode) {
      result += str[i];
    }
  }
  return result;
}

function rightTrim(str) {
  let result = '';
  let copyMode = false;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] !== ' ') {
      copyMode = true;
    }
    if (copyMode) {
      result = str[i] + result;
    }
  }
  return result;
}

function trim(str) {
  let result = leftTrim(str);
  return rightTrim(result);
}

console.log(`"${trim('  abc  ')}"`);  // "abc"
console.log(`"${trim('abc   ')}"`);   // "abc"
console.log(`"${trim(' ab c ')}"`);    // "ab c"
console.log(`"${trim(' a b  c')}"`);  // "a b  c"
console.log(`"${trim('      ')}"`);   // ""
console.log(`"${trim('')}"`);         // ""

// console.log(`"${rightTrim('  abc  ')}"`);  // "abc"
// console.log(`"${rightTrim('abc   ')}"`);   // "abc"
// console.log(`"${rightTrim(' ab c ')}"`);    // "ab c"
// console.log(`"${rightTrim(' a b  c')}"`);  // "a b  c"
// console.log(`"${rightTrim('      ')}"`);   // ""
// console.log(`"${rightTrim('')}"`);         // ""