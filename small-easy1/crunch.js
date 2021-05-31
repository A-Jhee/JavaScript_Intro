/*
algo:
1. iterate by ind
2. compare str[ind] to str[ind+1]
  - check if ind+1 === str.length
    append str[ind], and break
  2a. if true, continue
  2b. if false, append str[ind] to result
3. return result
*/

// function crunch(str) {
//   let result = '';
//   for (let ind = 0; ind < str.length; ind += 1) {
//     if (str[ind] !== str[ind+1]) {
//       result += str[ind];
//     }
//   }
//   console.log(result);
// }

function crunch(str) {
  console.log(str.replace(/(.)\1+/g, '$1'));
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""