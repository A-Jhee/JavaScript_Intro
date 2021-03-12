function evenOrOdd(num) {
  if ( !(num === parseInt(num)) ) {
    console.log('Error: argument must be an integer.');
    return;
  }

  if ( num % 2 === 0 ) {
    console.log('even');  
  } else {
    console.log('odd');  
  }
}

evenOrOdd(14.3);
evenOrOdd(12);
evenOrOdd(17);