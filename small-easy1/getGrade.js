function getGrade(num1, num2, num3) {
  let average = parseInt((num1 + num2 + num3) / 3);
  let letterGrade = 'F';

  if (average >= 90) {
    letterGrade = 'A';
  } else if (average >= 80) {
    letterGrade = 'B';
  } else if (average >= 70) {
    letterGrade = 'C';
  } else if (average >= 60) {
    letterGrade = 'D';
  }

  console.log(letterGrade);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
getGrade(50, 50, 45);    // "F"