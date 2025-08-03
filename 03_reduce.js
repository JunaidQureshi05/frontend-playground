Array.prototype.myReduce = function (callback, initialValue) {
  let array = this;
  let accumulator = initialValue === undefined ? array[0] : initialValue;
  let start = initialValue === undefined ? 1 : 0;
  for (let i = start; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
};

console.log([1, 2, 3, 4, 5].myReduce((acc, current) => acc + current));
