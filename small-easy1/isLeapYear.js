let isLeapYearAfter1752 = (year) => {
  let result = false;
  if (year % 4 === 0) {
    if (year % 400 === 0) {
      result = true;
    } else if (year % 100 === 0) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}

let isLeapYear = (year) => {
  let result;
  if (year < 1752) {
    result = (year % 4 === 0);
  } else {
    result = isLeapYearAfter1752(year);
  }
  console.log(result);
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true