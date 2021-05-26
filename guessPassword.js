function guessPassword() {
  let password = 'supersecret'
  let rlSync = require('readline-sync');
  let guessCounter = 0;
  do {
    let passwordGuess = rlSync.question('What is the password: ');
    if (passwordGuess === password) {
      console.log('You have successfully logged in.');
      return;
    }
    guessCounter += 1;
  } while (guessCounter < 3);
  console.log('You have been denied access.');
}

guessPassword();