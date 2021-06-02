function firstElementOf(arr) {
  console.log(arr[0]);
}

// firstElementOf(['U', 'S', 'A']);  // returns "U"

function firstNOf(arr, count) {
  console.log(arr.slice(0, 3));
}

function lastNOf(arr, count) {
  let startIndex = arr.length - count;
  if (startIndex < 0) {
    startIndex = 0;
  }
  console.log(arr.slice(startIndex));
}

function endsOf(beginningArr, endingArr) {
  let result = [beginningArr[0], endingArr[endingArr.length - 1]];
  console.log(result);
}

function oddElementsOf(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 1) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}

function frontToBack(arr) {
  let result = arr.slice().reverse();

  return arr.concat(result);
}

function sortDescending(arr) {
  return arr.slice().sort((a, b) => Number(b) - Number(a));
}

function matrixSums(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i].reduce((acc, curr) => acc + curr));
  }
  console.log(result);
}

function uniqueElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}

function missing(arr) {
  let result = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i += 1) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }
  console.log(result);
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []