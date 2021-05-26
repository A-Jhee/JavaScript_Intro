const VALUES_TO_REMOVE = ['N/A', '-', ''];

let data = {
  name: { first: 'Robert', middle: '', last: 'Smith' },
  age: 25,
  DOB: '-',
  hobbies: [ 'running', 'coding', ['N/A', 'Woodbridge'] ],
  education: { highschool: ['N/A', 'Woodbridge'], college: 'Yale' }
};

function cleanJson(json_data) {
  // json_data = [ 'running', 'coding', '-' ]
  for (let key in json_data) {
    // key = '2'
    let value = json_data[key];
    // value = '-'
    if (typeof(value) === 'object') {
      cleanJson(value);
    } else {
      if (Array.isArray(json_data) && VALUES_TO_REMOVE.includes(value)) { 
        json_data.splice(key, 1);
      } else if (VALUES_TO_REMOVE.includes(value)) {
        delete json_data[key];
      }
    }
  }
}

console.log(data);
cleanJson(data);
console.log(data);