function twoNumberSum(array, targetSum) {
  let targetNumbers = {};
  for (i = 0; i < array.length; i += 1) {
    let currentInt = array[i];
    let targetInt = targetSum - currentInt;
    if (targetNumbers[targetInt] === currentInt) return [currentInt, targetInt];
    targetNumbers[currentInt] = targetInt;
  }
  return [];
}

// function twoNumberSum(array, targetSum) {
//   for (let index = 0; index < array.length; index += 1) {
//     let currentInt = array[index];
//     let targetInt = targetSum - currentInt;
//     let remaining_ints = array.filter(int => int !== currentInt);
//     if (remaining_ints.includes(targetInt)) {
//       return [currentInt, targetInt];
//     }
//   }
//   return [];
// }

let input = {
  "array": [3, 5, -4, 8, 11, 1, -1, 6],
  "targetSum": 10
};

console.log(twoNumberSum(input['array'], input['targetSum']));