Array.prototype.myReduce = function (callback, initialValue) {
  let array = this;
  if (array.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  let accumulator = initialValue === undefined ? array[0] : initialValue;
  let start = initialValue === undefined ? 1 : 0;
  for (let i = start; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
};
