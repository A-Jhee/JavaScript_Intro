let words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
              'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
              'flow', 'neon'];

function getAnagrams(words) {
  let result = {};
  words.forEach((word) => {
    key = getSortedWord(word);
    if (result[key]) {
      result[key].push(word);
    } else {
      result[key] = [word];
    }
  });
  return result;
}

function getSortedWord(word) {
  return word.split('').sort().join('');
}

console.log(getAnagrams(words));