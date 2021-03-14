let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

// function copyObj(original_obj, copy_keys = 'all') {
//   let result = {};
//   let original_keys = Object.keys(original_obj);
//   if (Array.isArray(copy_keys) && copy_keys.length > 0) {
//     copy_keys.forEach(key => result[key] = original_obj[key]);
//   } else {
//     original_keys.forEach(key => result[key] = original_obj[key]);
//   }
//   return result;
// }

function copyObj(sourceObject, keys) {
  let destinationObject = {};
  console.log(keys);
  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }