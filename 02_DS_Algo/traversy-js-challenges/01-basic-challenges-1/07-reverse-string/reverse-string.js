function reverseString(string) {
  let rstr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    rstr += string[i];
  }
  return rstr;
}

module.exports = reverseString;
