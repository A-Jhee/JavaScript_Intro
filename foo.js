let num = 4936;

let ones = num % 10;
let tens = (num - ones) % 100 / 10;
let hundreds = (num - (tens*10) - ones ) % 1000 / 100;
let thousands = Math.trunc(num / 1000)

console.log(thousands);
console.log(hundreds);
console.log(tens);
console.log(ones);   // 6