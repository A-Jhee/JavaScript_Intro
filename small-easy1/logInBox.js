/*
sentence wrapping

max width: 76
sentence length: 225

algo:
if length > width,
  first line str.substring(0, 76);
  next starting index 76
if length > width,
  second line str.substring(76, 76 + 76);
  next starting index 76 + 76
*/

function logMeatLines(str, maxWidth) {
  if (str.length >= maxWidth) {
    let ind = 0;
    while (ind < str.length) {
      let meatLine = str.substring(ind, ind + maxWidth);
      if (meatLine.length < maxWidth) {
        console.log(`| ${meatLine.padEnd(maxWidth)} |`);
      } else {
        console.log(`| ${meatLine} |`);
      }
      ind += maxWidth
    }
  } else {
    console.log(`| ${str} |`);
  }
  return;
}

function logInBox(str) {
  const MAX_WIDTH = 76;
  const BREADLINE_CHAR = '-';

  let width = (str.length > 76) ? 76 : str.length

  let breadLine = `+${BREADLINE_CHAR.repeat(width + 2)}+`;
  let sauceLine = `|${' '.repeat(width + 2)}|`;

  console.log(breadLine);
  console.log(sauceLine);

  logMeatLines(str, MAX_WIDTH);

  console.log(sauceLine);
  console.log(breadLine);
}


// logInBox('');
// logInBox('To boldly go where no one has gone before.');

// let str1 = 'To boldly go where no one has gone before.';
let str2 = "ut at this stage of your journey, it's less confusing to use the strict operators, and easier to debug."
let str3 = "That said, you need to be aware of some edge cases with the loose operators. For that reason, the style we use at Launch School insists that you always use the strict operators. Doing so won't prevent you from fixing bad code, but at this stage of your journey, it's less confusing to use the strict operators, and easier to debug."
// logMeatLines(str2, 76);
logInBox(str3);

// +--+
// |  |
// |  |
// |  |
// +--+