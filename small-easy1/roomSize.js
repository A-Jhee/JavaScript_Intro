let rlSync = require('readline-sync');

function roomSize(unit) {
  const SQMETERS_TO_SQFEET = 10.7639;
  console.log(`Enter the length of the room in ${unit}:`);
  let length = rlSync.prompt();
  console.log(`Enter the width of the room in ${unit}:`);
  let width = rlSync.prompt();

  if (unit === 'm') {
    let squareMeters = Number.parseFloat(length * width).toFixed(2);
    let squareFeet = (squareMeters * SQMETERS_TO_SQFEET).toFixed(2);
    console.log(`The area of the room is ${squareMeters} square meters ` + 
             `(${squareFeet} square feet).`);
  } else if (unit === 'ft') {
    let squareFeet = Number.parseFloat(length * width).toFixed(2);
    let squareMeters = (squareFeet / SQMETERS_TO_SQFEET).toFixed(2);
    console.log(`The area of the room is ${squareFeet} square feet ` + 
             `(${squareMeters} square meters).`);
  }
}

roomSize('m');
roomSize('ft');