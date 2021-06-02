function slice(array, begin, end) {
  if (begin > array.length) begin = array.length;
  if (end > array.length) end = array.length;

  console.log(begin);
  console.log(end);

  // if (begin - end >= 0) {
  //   console.log([]);
  //   return;
  // }

  let result = [];

  for (let i = begin; i < end; i += 1) {
    result.push(array[i]);
  }

  console.log(result);
  return;
}

// slice([1, 2, 3], 1, 2);               // [2]
// slice([1, 2, 3], 2, 0);               // []
// slice([1, 2, 3], 2, 3);               // []
// slice([1, 2, 3], 0, 5);               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// slice(arr1, 1, 3);                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...element) {
  start = (start > array.length) ? array.length : start;
  deleteCount = (deleteCount > array.length - start) ? array.length - start : deleteCount;
  
  copyArray = array.slice();

  for (let elementInd = 0; elementInd < element.length; elementInd += 1) {
    array[elementInd + start] = element[elementInd];
    // console.log(element[elementInd]);
  }

  array.length = copyArray.length + element.length - deleteCount;
  
  for (let arrayInd = start + element.length; arrayInd < array.length; arrayInd += 1) {
    array[arrayInd] = copyArray[arrayInd - deleteCount];
  }

  console.log(copyArray.slice(start, start + deleteCount));
}

            // 0  1  2  3  4
// let test = [1, 2, 3, 4, 5];
// (2, 3)
// splice(test, 2, 3);                      // [3, 4, 5]
// console.log(test);                       // [1, 2]

splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

// const arr2 = [1, 2, 3];
// splice(arr2, 1, 1, 'two');             // [2]
// console.log(arr2);                     // [1, "two", 3]

// const arr3 = [1, 2, 3, 4, 5];
// splice(arr3, 1, 1, 'two', 'three');                       // [2]
// splice(arr3, 1, 2, 'two', 'three', 'four', 'five');    // [2, 3]
// console.log(arr3);                                        // [ 1, 'two', 'three', 3, 4, 5 ]

// const arr4 = [1, 2, 3];
// splice(arr4, 1, 0);                    // []
// splice(arr4, 1, 0, 'a');               // []
// arr4;                                  // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// splice(arr5, 0, 0, 'a');               // []
// arr5;                                  // ["a", 1, 2, 3]