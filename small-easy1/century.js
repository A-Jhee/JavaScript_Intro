function century(year) {
  let centNum = Math.floor(year / 100);
  if (year <= 100) {
    console.log('1st');
  } else if (year % 100 === 0) {
    console.log(`${String(centNum)}${getSuffix(centNum)}`);
  } else {
    console.log(`${String(centNum + 1)}${getSuffix(centNum + 1)}`);
  }
}
// -----------------------------------------------------------------------------
function getSuffix(centNum) {
  if ((centNum % 100) >= 11 && (centNum % 100) <= 13) {
    return 'th';
  } else if (centNum % 10 === 1) {
    return 'st'; 
  } else if (centNum % 10 === 2) {
    return 'nd';
  } else if (centNum % 10 === 3) {
    return 'rd';
  } else {
    return 'th';
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"