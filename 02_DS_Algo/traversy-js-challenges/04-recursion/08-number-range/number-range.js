function numberRange(num1, num2, range = []) {
  if (num1 > num2) {
    return range;
  }
  return [num1].concat(numberRange(num1 + 1, num2, range));
}

module.exports = numberRange;
