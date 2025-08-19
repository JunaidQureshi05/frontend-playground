function wordFrequencyCounter(str) {
  let words = str.split(/\W+/);
  let freq = new Map();
  for (let word of words) {
    if (word === "") continue;
    word = word.toLowerCase();
    freq.set(word, freq.has(word) ? freq.get(word) + 1 : 1);
  }
  return freq;
}

module.exports = wordFrequencyCounter;
