function isXor(condition1, condition2) {
  if (condition1 && !condition2) return true;
  if (!condition1 && condition2) return true;
  return false;
}

console.log(isXor(false, true));
console.log(isXor(true, false));
console.log(isXor(false, false));
console.log(isXor(true, true));
// isXor(false, true);     // true
// isXor(true, false);     // true
// isXor(false, false);    // false
// isXor(true, true);      // false

console.log(isXor(false, 3));
console.log(isXor('a', undefined));
console.log(isXor(null, ''));
console.log(isXor('2', 23));
// isXor(false, 3);        // true
// isXor('a', undefined);  // true
// isXor(null, '');        // false
// isXor('2', 23);         // false