Array.prototype.myMap = function (callback) {
  let result = [];
  let array = this;
  for (let i = 0; i < array.length; i++) {
    let value = callback(array[i], i, array);
    result.push(value);
  }
  return result;
};
