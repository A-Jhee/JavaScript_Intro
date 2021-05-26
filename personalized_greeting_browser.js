var readlineSync = require("readline-sync");

// let firstNum = parseInt(prompt("Enter the first number:"), 10);
// let secondNum = parseInt(prompt("Enter the second number:"), 10);



console.log("Enter the first number:");
let firstNum = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNum = Number(readlineSync.prompt());

console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
console.log(`${firstNum} / ${secondNum} = ${Math.floor(firstNum / secondNum)}`);
console.log(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
console.log(`${firstNum} ** ${secondNum} = ${Math.pow(firstNum, secondNum)}`);
// 23 17