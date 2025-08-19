function findMissingLetter(arr) {
  let startCode = arr[0].charCodeAt(0);
  let missingCharacter = arr.reduce((acc, cur) => {
    if (cur.charCodeAt(0) - startCode > 1) {
      return startCode + 1;
    }
    startCode = cur.charCodeAt(0);
  }, null);
  return missingCharacter ? String.fromCharCode(missingCharacter) : null;
}

module.exports = findMissingLetter;
