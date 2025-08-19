function removeDuplicates(array) {
  let unique = new Set(array);
  return Array.from(unique);
}

module.exports = removeDuplicates;
