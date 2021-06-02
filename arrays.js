function lastInArray(arr) {
  console.log(arr[arr.length - 1]);
}

function rollCall(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result.push(arr[i]);
  }
  return result;
}

function stringify(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    result += String(arr[i]);
  }
  console.log(result);
}

function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function pop(arr) {
  if (arr.length === 0) return undefined;

  let result = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return result;
}

function unshift(arr, value) {
  let prev = value;
  let curr;
  let maxIndex = arr.length;

  for (let i = 0; i <= maxIndex; i += 1) {
    curr = arr[i];
    arr[i] = prev;
    prev = curr;
  }

  return arr.length;
}

function shift(arr) {
  let result = arr[0];

  if (arr.length === 0) return undefined;

  for (let i = 0; i < arr.length - 1; i += 1) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return result;
}

function indexOf(arr, value) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function lastIndexOf(arr, value) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function slice(arr, startInd, endInd) {
  let result = [];
  for (let i = startInd; i < endInd; i += 1) {
    result.push(arr[i]);
  }
  console.log(result);
}

// function splice(arr, startInd, elementCount) {
//   let result = [];
//   let index = startInd;

//   for (let i = 0; i < elementCount; i += 1) {
//     result.push(arr[index]);
//     index += 1;
//   }

//   let tempArr = [];
//   index = 0;

//   while (elementCount > 0) {
//     if (index < startInd) {
//       tempArr.push(arr.shift());
//     } else if (index >= startInd) {
//       arr.shift();
//       elementCount -= 1;
//     }
//     index += 1;
//   }

//   for (let i = tempArr.length - 1; i >= 0; i -= 1) {
//     arr.unshift(tempArr[i]);
//   }

//   console.log(result);
// }

function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + number];
  }

  // array.length = array.length - removedValues.length;
  return removedValues;
}

function join(arr, str) {
  let result = String(arr[0]);
  for (let i = 1; i < arr.length; i += 1) {
    result += str + String(arr[i]);
  }
  console.log(result);
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(false);
    return;
  }
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      console.log(false);
      return;
    }
  }
  console.log(true);
  return;
}

function concat(arr, ...value) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i]);
  }

  for (let i = 0; i < value.length; i += 1) {
    if (Array.isArray(value[i])) {
      for (let j = 0; j < value[i].length; j += 1) {
        result.push(value[i][j]);
      }
    } else {
      result.push(value[i]);
    }
  }
  
  console.log(result);
}

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]