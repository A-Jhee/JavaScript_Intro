function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(false);
    return;
  }
  let copyArray2 = array2.slice();
  for (let i = 0; i < array1.length; i += 1) {
    let matchInd = copyArray2.indexOf(array1[i]);
    if (matchInd >= 0) {
      copyArray2.splice(matchInd, 1);
    } else {
      console.log(false);
      return;
    }
  }
  console.log(true);
  return;
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true