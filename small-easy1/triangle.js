function triangle(n) {
  const TRIANGLE_CHAR = '*';

  let result = '';
  let logLine;
  for (let lineNum = 1; lineNum <= n; lineNum += 1) {
    logLine = TRIANGLE_CHAR.repeat(lineNum).padStart(n);
    result += logLine + '\n';
  }
  return result;
}

console.log(triangle(5));

answer1 = `    *
   **
  ***
 ****
*****`

console.log(answer1);

// triangle(9);

answer2 = `        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********`;

// console.log(answer2);