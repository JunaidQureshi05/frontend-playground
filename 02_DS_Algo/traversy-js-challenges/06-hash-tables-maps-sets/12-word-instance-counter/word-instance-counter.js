const HashTable = require("./HashTable");

function wordInstanceCounter(str, word) {
  let words = str.toLowerCase().split(/\W+/);
  let freq = new HashTable();
  for (let currentWord of words) {
    if (freq.has(currentWord)) {
      freq.set(currentWord, freq.get(currentWord) + 1);
    } else {
      freq.set(currentWord, 1);
    }
  }
  return freq.get(word.toLowerCase()) || 0;
}

module.exports = wordInstanceCounter;
