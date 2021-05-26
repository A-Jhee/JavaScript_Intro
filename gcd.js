/*
input:
- two positive integers
output:
- greatest common divisor of two input integers

requirement:

1. set gcd to 1 by default
2. use Elucidean algorithm
  - find the larger number of the two inputs
  - if larger num is A, and smaller is B: gcd(A, B)
  - calculate modAB = A % B
  - repeat process with (B, modAB)
  - when modAB === 0, return the other int as GCD.

*/

function gcd(int1, int2) {
  if (int2 === 0 || int1 === int2) return console.log(int1);

  let largerInt;
  let smallerInt;
  if (int1 > int2) {
    largerInt = int1;
    smallerInt = int2;
  } else {
    largerInt = int2;
    smallerInt = int1;
  }
  // console.log(largerInt);
  // console.log(smallerInt);
  gcd(smallerInt, largerInt % smallerInt)
}

gcd(12, 4);   // 4
gcd(10, 15);  // 5
gcd(2, 9);    // 1
gcd(13, 13);