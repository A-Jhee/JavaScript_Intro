function madlibs() {
  let rlSync = require('readline-sync');

  let noun = rlSync.question('Enter a noun: ');
  let verb = rlSync.question('Enter a verb: ');
  let adj = rlSync.question('Enter an adjective: ');
  let adverb = rlSync.question('Enter an adverb: ');

  console.log(`I woke up to the smell of ${noun} ` + 
               `${verb} in the ${adj} house ${adverb}`);
}

madlibs();

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!