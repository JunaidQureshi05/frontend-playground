const HashTable = require("./HashTable");

function anagramGrouping(words) {
  let anagrams = new HashTable(10);
  for (let word of words) {
    let anagram = word.split("").sort().join("");
    if (anagrams.has(anagram)) {
      anagrams.set(anagram, anagrams.get(anagram).concat([word]));
    } else {
      anagrams.set(anagram, [word]);
    }
  }
  return anagramGroups.getValues();
}

module.exports = anagramGrouping;
