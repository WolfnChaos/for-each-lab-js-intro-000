function iterativeLog(array) {
  array.forEach((index, element) => {
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback) {
  var x = [`pup`, `play`, `fun`];
  x.forEach(callback);
  return x
}

function doToArray(array, callback) {
  array.forEach(callback);
}
