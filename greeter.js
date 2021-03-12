let rlSync = require('readline-sync');
function askName() {
  let firstName = rlSync.question("What is your first name?\n");
  let lastName = rlSync.question("What is your last name?\n");
  return firstName + ' ' + lastName
}

console.log(`Welcome to the net. The game as begun, ${askName()}.`)