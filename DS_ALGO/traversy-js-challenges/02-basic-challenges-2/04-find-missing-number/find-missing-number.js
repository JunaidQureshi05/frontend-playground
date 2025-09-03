function findMissingNumber(numbers) {
  let n = numbers.length + 1;
  let sum = (n * (n + 1)) / 2;
  let currentSum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum - currentSum;
}

module.exports = findMissingNumber;
