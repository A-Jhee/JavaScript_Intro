function isNegZero(num) {
  return (num === 0) && (1 / num === -Infinity);
}

console.log(isNegZero(0));
console.log(isNegZero(1));
console.log(isNegZero(-0));