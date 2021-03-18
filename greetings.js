function greetings(namesArr, titleOccupationObj) {
  let fullName = namesArr.join(' ');
  let fullTitle = Object.values(titleOccupationObj).join(' ');
  return `Hello, ${fullName}! Nice to have a ${fullTitle} around.`
}

let greet = greetings(['John', 'Q', 'Doe'],
                      { title: 'Master', occupation: 'Plumber' })

console.log(greet);