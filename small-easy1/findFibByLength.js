function findFibonacciIndexByLength(numOfDigits) {
  let digitDivisor = (10n ** (numOfDigits - 1n));
  let prevFib = 5n;
  let currFib = 8n;
  let tempFib;
  let fibIndex = 6n;
  while (currFib / digitDivisor <= 0n) {
    tempFib = prevFib;
    prevFib = currFib;
    currFib = tempFib + prevFib;
    fibIndex += 1n;
  }
  return fibIndex;
}

console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));

// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.