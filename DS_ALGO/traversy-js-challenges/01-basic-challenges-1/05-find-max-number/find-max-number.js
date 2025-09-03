function findMaxNumber(numbers) {
  let maximum = -Infinity;
  for (let num of numbers) {
    if (num > maximum) {
      maximum = num;
    }
  }
  return maximum;
}

module.exports = findMaxNumber;
