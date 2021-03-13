function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}


console.log(fibonacci(0) === 0) // by definition
console.log(fibonacci(1) === 1) // by definition
console.log(fibonacci(20) === 6765) // by definition
// fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2) // for all n >= 2