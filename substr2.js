function substring(string, start, end) {
  if (start === end) {
    console.log('""');
    return;
  }

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || Number.isNaN(Number(start))) {
    start = 0;
  }

  if (end < 0 || Number.isNaN(Number(end))) {
    end = 0;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  let result = '';
  for (let ind = start; ind < end; ind += 1) {
    result += string[ind];
  }

  console.log(`"${result}"`);
  return;
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"