function shortLongShort(str1, str2) {
  let shortStr = '';
  let longStr = '';

  if (str1.length > str2.length) {
    [longStr, shortStr] = [str1, str2];
  } else {
    [longStr, shortStr] = [str2, str1];
  }

  return `${shortStr}${longStr}${shortStr}`;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"