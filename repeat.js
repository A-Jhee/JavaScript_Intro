function repeat(string, times) {
  if (typeof times !== 'number' || times < 0 || Number.isNaN(times)) {
    console.log(undefined);
    return;
  } else if (times === 0) {
    console.log(`""`);
    return;
  } else {
    let result = '';
    for (let i = 0; i < times; i += 1) {
      result += string
    }
    console.log(result);
    return;
  }
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined