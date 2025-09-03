function validatePassword(password) {
  let hasLength = password.length >= 8;
  let hasUpperCase = password
    .split("")
    .some((ch) => ch.toUpperCase() === ch && ch.toLowerCase() !== ch);
  let hasLowercase = password
    .split("")
    .some((ch) => ch.toLowerCase() === ch && ch.toUpperCase() !== ch);
  let hasDigit = password.split("").some((ch) => !isNaN(parseInt(ch, 10)));
  return hasLength && hasUpperCase && hasLowercase && hasDigit;
}

module.exports = validatePassword;
