function areAllCharactersUnique(string) {
  let unique = new Set(string);
  return unique.size === string.length;
}

module.exports = areAllCharactersUnique;
