function iterativeLog(array) {
  array.forEach(array => {
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback) {
  var x = [`pup`, `play`, `fun`];
  x.forEach(callback);
}

function doToArray(array, callback) {
  array.forEach(callback);
}
