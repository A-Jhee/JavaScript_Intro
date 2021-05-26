/*
input:
two strings. one string to search in, one string to search for
output:
true or false (boolean)

requirements:
check if string begins with searchString

algo:
1. if searchString.length > string.length, then false
2. look at chars from 0 index to searchString.length - 1 index of string
3. if no match is found, break and return false
4. if i iterated upto searchString.length without breaking out,
    then return true
*/

function startsWith(string, searchString) {
  // if (searchString.length > string.lenght) {
  //   console.log('false');
  //   return;
  // }

  // let searchLength = searchString.length;
  // let currIndex = 0;
  // for (; currIndex < searchLength; currIndex += 1) {
  //   if (string[currIndex] !== searchString[currIndex]) {
  //     console.log('false');
  //     return;
  //   } else {
  //     continue;
  //   }
  // }
  // if (searchLength === currIndex) {
  //   console.log('true');
  //   return;
  // }
  for (let i = 0; i < searchString.length; i += 1) {
    if (string[i] !== searchString[i]) {
      console.log('false');
      return;
    }
  }
  console.log('true');
  return;
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false