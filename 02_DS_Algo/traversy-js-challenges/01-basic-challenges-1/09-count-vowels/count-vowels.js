function countVowels(str) {
  str = str.toLowerCase();
  let count = 0;
  for (let ch of str) {
    if (["a", "e", "i", "o", "u"].includes(ch)) count++;
  }
  return count;
}

module.exports = countVowels;
