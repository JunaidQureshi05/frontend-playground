Array.prototype.myFilter = function (callback) {
  let result = [];
  const array = this;
  for (let i = 0; i < array.length; i++) {
    let val = callback(array[i], i, array);
    if (val) {
      result.push(array[i]);
    }
  }
};
