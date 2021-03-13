function factorial(num) {
  // let result = 1;
  // for (let n = num; n > 0; n -= 1) {
  //   result *= n;
  // }
  // return result;
  if (num < 3) return num;
  return num * factorial(num-1);
}

console.log(factorial(1) === 1);     // => 1
console.log(factorial(2) === 2);     // => 2
console.log(factorial(3) === 6);     // => 6
console.log(factorial(4) === 24);     // => 24
console.log(factorial(5) === 120);     // => 120
console.log(factorial(6) === 720);     // => 720
console.log(factorial(7) === 5040);     // => 5040
console.log(factorial(8) === 40320);     // => 40320