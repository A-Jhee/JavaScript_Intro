let fizzbuzz = () => {
  for (let num = 1; num <= 100; num += 1) {
    let phrase = '';

    if (num % 3 === 0) {
      phrase += 'Fizz';
    }

    if (num % 5 === 0) {
      phrase += 'Buzz';
    }

    console.log(phrase || num);
  }
}

fizzbuzz();