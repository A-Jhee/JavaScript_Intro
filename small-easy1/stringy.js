function stringy(num) {
  let result = '';
  for (let i = 1; i <= num; i += 1) {
    result += (i % 2 === 1) ? '1' : '0';
  }
  console.log(result);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"