function highestScoringWord(str) {
  let words = str.split(" ");
  let highestScore = -Infinity;
  let winningWord;
  for (let word of words) {
    let score = word
      .split("")
      .reduce((acc, current) => acc + current.charCodeAt(0) - 96, 0);
    if (score >= highestScore) {
      highestScore = score;
      winningWord = word;
    }
  }
  return winningWord;
}

module.exports = highestScoringWord;
