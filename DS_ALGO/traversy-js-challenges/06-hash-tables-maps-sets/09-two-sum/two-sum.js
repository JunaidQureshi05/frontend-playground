function twoSum(numbers, target) {
  let complements = new Set();
  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    if (complements.has(complement)) {
      return [numbers.indexOf(complement), i];
    } else {
      complements.add(numbers[i]);
    }
  }
  return [];
}

module.exports = twoSum;
