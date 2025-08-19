function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

module.exports = countOccurrences;
