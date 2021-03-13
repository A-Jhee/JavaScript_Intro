let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you?\n"));
let decades = [10, 20, 30, 40]
console.log(`You are ${age} years old.`);
for (let i = 0; i < decades.length; i += 1) {
  let years = decades[i];
  console.log(`In ${years} years, you will be ${age + years} years old.`);
}