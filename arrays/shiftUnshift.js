function unshift(arr, ...values) {
  let lastIndex = arr.length + values.length - 1;
  for (let i = lastIndex; i >= values.length; i -= 1) {
    arr[i] = arr[i - values.length];
  }
  
  for (let j = 0; j < values.length; j += 1) {
    arr[j] = values[j];
  }

  console.log(arr.length);
  return;
}

function shift(arr) {
  let result = arr[0];

  if (arr.length === 0) {
    console.log(undefined);
    return;
  }

  for (let i = 0; i < arr.length - 1; i += 1) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  
  console.log(result);
  return;
}

// shift([1, 2, 3]);                // 1
// shift([]);                       // undefined
// shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
console.log(testArray);                       // [2, 3]
unshift(testArray, 5);           // 3
console.log(testArray);                       // [5, 2, 3]