const primeCheck = require("./isPrime");

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let result = new Object();
  let otherNum;
  for (let num = 2; num < expectedSum; num += 1) {
    otherNum = expectedSum - num;
    if (result[String(otherNum)]) break;
    if (primeCheck.isPrime(num) && primeCheck.isPrime(otherNum)) {
      result[num] = otherNum;
    }
  }

  for (let prime1 in result) {
    console.log(`${prime1} ${result[prime1]}`);
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53