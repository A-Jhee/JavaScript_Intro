let 냉면 = 470;
let 소불고기 = 500 / 300;
let icecream = 207 / 100;
let banana = 90 / 100;
let milk = 55;
let 치킨텐더 = 185 / 100;
let egg = 90;
let bacon2Slice = 80;

let total = 냉면 + (소불고기 * 250) + (banana * 140) +
             (icecream * 60) + milk + (치킨텐더 * 115) +
             (egg * 2) + bacon2Slice;

let left = 2000 - total;

console.log(`Total kCal:     ${parseInt(total)}.`);
console.log(`Remaining kCal: ${parseInt(left)}.`);