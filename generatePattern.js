function generatePattern(nStars) {
  let finalLine = '';
  for (let lineNum = 1; lineNum <= nStars; lineNum += 1) {
    finalLine += String(lineNum);
  }

  let lineLength = finalLine.length;
  let line;
  for (let lineNum = 1; lineNum <= nStars; lineNum += 1) {
    line = '';
    for (let i = 0; i < lineNum; i += 1) {
      line += String(i + 1);
    }
    line += `${'*'.repeat(lineLength - line.length)}`;
    console.log(line);
  }

  // console.log(finalLine.length);
}

generatePattern(20);