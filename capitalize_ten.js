function capitalize_ten(words) {
  if (words.length > 10) {
    return words.toUpperCase();
  } else {
    return words;
  }
}

console.log(capitalize_ten("Sue Smith"));     // => Sue Smith
console.log(capitalize_ten("Sue Robertson")); // => SUE ROBERTSON
console.log(capitalize_ten("Joe Thomas"));    // => Joe Thomas
console.log(capitalize_ten("Joe Stevens"));   // => JOE STEVENS