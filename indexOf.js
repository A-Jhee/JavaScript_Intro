/*
input:
two strings
output:
integer, indicating index where match happens OR -1 if no match

requirements:
must match exactly to secondString (case sensitive)
if no match is found, return -1

algo:
1. have index tracker starting at 0 for firstStr
2. take substring of firstStr from var index to var index + secondString.length-1
   2. if var index + secondString.length-1 is greater than firstStr.length
      terminate, return -1
3. compare substring to secondStr
   3a. if match, return var index
   3b. if not, increment var index by 1 and repeat from 2

ind = 0
substr = firstString.substring(ind, ind + secondString.length)

if (substr === secondString)
  return ind
else
  ind += 1


*/

// function indexOf(firstString, secondString) {
//   let result = 0;
//   while (secondString.length + result <= firstString.length) {
//     let firstSubstr = firstString.substring(result, secondString.length + result);
//     // console.log(`first substr: ${firstSubstr}`);
//     // console.log(`secondString: ${secondString}`);
//     if (firstSubstr === secondString) {
//       console.log(result);
//       return;
//     }
//     result += 1;
//   }
//   console.log(-1);
//   return;
// }

function indexOf(firstString, secondString) {
  for (let i = 0; i <= firstString.length; i += 1) {
    let matchCounter = 0;
    for (let j = 0; j < secondString.length; j += 1) {
      if (firstString[i + j] === secondString[j]) {
        matchCounter += 1;
      } else {
        break;
      }
    }
    if (matchCounter === secondString.length) {
      // console.log(i);
      return i;
    }
  }
  // console.log(-1);
  return -1;
}

// function lastIndexOf(firstString, secondString) {
//   let result = firstString.length;
//   while (result - secondString.length >= 0) {
//     let firstSubstr = firstString.substring(result - secondString.length, result);
//     // console.log(firstSubstr);
//     if (firstSubstr === secondString) {
//       console.log(result - secondString.length);
//       return;
//     }
//     result -= 1;
//   }
//   console.log(-1);
//   return;
// }

function lastIndexOf(firstString, secondString) {
  // for (let i = firstString.length - secondString.length; i >= 0; i -= 1) {
  //   let matchCounter = 0;
  //   for (let j = 0; j < secondString.length; j += 1) {
  //     if (firstString[i + j] === secondString[j]) {
  //       matchCounter += 1;
  //     } else {
  //       break;
  //     }
  //   }
  //   if (matchCounter === secondString.length) {
  //     console.log(i);
  //     return;
  //   }
  // }
  // console.log(-1);
  // return;

  let result = 0;

  while (true) {
    let matchIndex = indexOf(firstString, secondString);
    if (matchIndex !== -1) {
      result += (matchIndex + secondString.length);
      firstString = firstString.substring(matchIndex + secondString.length);
      // console.log(`matchIndex: ${matchIndex}`);
      // console.log(`firstString: ${firstString}`);
      // console.log(`result: ${result}`);
    } else {
      if (result - secondString.length < 0) {
        console.log(-1);
      } else {
        console.log(result - secondString.length);
      }
      return;
    }
  }
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1
console.log('');
lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1