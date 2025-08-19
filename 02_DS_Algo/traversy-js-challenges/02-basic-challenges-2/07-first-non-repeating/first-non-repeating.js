function findFirstNonRepeatingCharacter(str) {
  let map = {};
  for (let ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }
  for (let ch of str) {
    if (map[ch] == 1) return ch;
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
