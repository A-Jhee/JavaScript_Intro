function twice(num) {
  if (String(num).length % 2 === 1) {
    return num * 2;
  } else if (isDouble(num)) {
    return num;
  } else {
    return num * 2;
  }
}

function isDouble(num) {
  let strNum = String(num);
  let length = strNum.length;
  // console.log(strNum.slice(0, length/2));
  // console.log(strNum.slice(length/2, length));
  return strNum.slice(0, length/2) === strNum.slice(length/2, length);
}

console.log(twice(37) == 74);
console.log(twice(44) == 44);
console.log(twice(334433) == 668866);
console.log(twice(444) == 888);
console.log(twice(107) == 214);
console.log(twice(103103) == 103103);
console.log(twice(3333) == 3333);
console.log(twice(7676) == 7676);
console.log(twice(1234567812345678) == 1234567812345678);
console.log(twice(5) == 10);

// console.log(isDouble(123456789123456789));
