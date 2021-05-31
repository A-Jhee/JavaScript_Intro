let conseqSumOrProd = function() {
  let rlSync = require('readline-sync');

  let int = rlSync.question('Please enter an integer greater than 0: ');
  int = parseInt(int, 10);
  
  let operation = rlSync.question('Enter "s" to compute the sum, or "p" to' + 
                                   'compute the product. ');
  operation = (operation === 's') ? 'sum' : 'product';

  let result = 0;
  for (let num = 1; num <= int; num += 1) {
    if (operation === 'sum') {
      result += num;
    } else {
      if (result === 0) result = num;
      result *= num;
    }
  }

  console.log(`The ${operation} of the integers between 1 and ${int}` +
               ` is ${result}.`);
}

conseqSumOrProd();