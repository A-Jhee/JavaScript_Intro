/*
input:
- no input
output:
- a string statement giving average letter grade

requirements:
- prompt user to enter 3 scores
  - positive integers 0~100
- get the average of all 3 scores to determine letter grade
- grade >= 90 is 'A'
- grade >= 70 is 'B'
- grade >= 50 is 'C'
- grade < 50 is 'F'

1. prompt user for scores 3 times
2. calculate average of 3 scores
3. find out which letter grade the average is
4. print statement
5. end function

*/

function getGrade(numOfGrades) {
  let rlSync = require('readline-sync');
  let scores = {};
  let counter = 0;

  while (counter < numOfGrades) {
    let score = parseInt(rlSync.question(`Enter score ${counter + 1}: `), 10);
    scores[`score${counter + 1}`] = score;
    counter += 1
  }

  let scoreTotal = Object.values(scores).reduce( (acc, curr) => acc + curr );
  let scoreAverage = Math.floor(scoreTotal / numOfGrades);
  console.log(scoreAverage);

  let scoreLetter = 'F';
  if (scoreAverage >= 90) {
    scoreLetter = 'A';
  } else if (scoreAverage >= 70) {
    scoreLetter = 'B';
  } else if (scoreAverage >= 50) {
    scoreLetter = 'C';
  }

  console.log(`Based on the average of your ${numOfGrades} scores your ` +
              `letter grade is "${scoreLetter}".`);
}

getGrade(5);