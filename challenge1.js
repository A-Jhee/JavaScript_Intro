function isNotANumber(test_value) {
  return test_value !== test_value;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(32));
console.log(isNotANumber('string'));