function isDoubleNum(num) {
  let numStr = String(num);
  if (numStr.length % 2 === 0) {
    return numStr.substring(0, numStr.length / 2) ===
            numStr.substring(numStr.length / 2);
  }
  return false;
}

function twice(num) {
  if (isDoubleNum(num)) return num;
  return num * 2;
}

console.log(isDoubleNum(37));
console.log(isDoubleNum(44));
console.log(isDoubleNum(334433));
console.log(isDoubleNum(444));
console.log(isDoubleNum(107));
console.log(isDoubleNum(103103));
console.log(isDoubleNum(3333));
console.log(isDoubleNum(7676));

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));

// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676