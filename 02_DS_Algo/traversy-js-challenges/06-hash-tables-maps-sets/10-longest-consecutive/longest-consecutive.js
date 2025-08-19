function longestConsecutiveSequence(numbers) {
  let numberSet = new Set(numbers);
  let longestSeq = 0;
  for (let number of numberSet) {
    if (!numberSet.has(number - 1)) {
      let currentNumber = number;
      let currentSequence = 1;
      while (numberSet.has(currentNumber + 1)) {
        currentNumber++;
        currentSequence++;
      }
      longestSeq = Math.max(longestSeq, currentSequence);
    }
  }
  return longestSeq;
}

module.exports = longestConsecutiveSequence;
