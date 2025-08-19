function anagramGrouping(words) {
  let anagrams = new Map();
  for (let word of words) {
    let anagram = word.split("").sort().join("");
    anagrams.set(anagram, anagrams.get(anagram)?.concat([word]) || [word]);
  }
  return Array.from(anagrams.values());
}

module.exports = anagramGrouping;
