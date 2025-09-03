function findMissingLetter(stringArr) {
  for (let i = 0; i < stringArr.length - 1; i++) {
    let charCodeFirst = stringArr[i].charCodeAt(0);
    let charCodeSecond = stringArr[i + 1].charCodeAt(0);
    if (charCodeSecond - charCodeFirst > 1) {
      return String.fromCharCode(charCodeSecond - 1);
    }
  }
  return "";
}

module.exports = findMissingLetter;
