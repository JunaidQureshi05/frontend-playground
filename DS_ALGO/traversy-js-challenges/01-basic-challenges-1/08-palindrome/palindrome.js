function isAlphanumeric(ch) {
  let code = ch.charCodeAt(0);
  if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
    return true; // Lowercase letters or digits
  }
  return false;
}
function formatString(str) {
  let formatted = "";
  for (let i = 0; i < str.length; i++) {
    if (isAlphanumeric(str[i].toLowerCase())) {
      formatted += str[i].toLowerCase();
    }
  }
  return formatted;
}
function isPalindrome(str) {
  let formattedString = formatString(str);
  return formattedString === formattedString.split("").reverse().join("");
}

module.exports = isPalindrome;
