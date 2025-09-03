function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str.charAt(0);
}

module.exports = reverseString;
