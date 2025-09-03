function sumOfEvenSquares(numbers) {
  return numbers.reduce(
    (acc, current) => (current % 2 === 0 ? acc + current * current : acc),
    0
  );
}

module.exports = sumOfEvenSquares;
