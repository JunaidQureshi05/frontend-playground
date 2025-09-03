function validateEmail(email) {
  if (email.indexOf("@") === -1) return false;
  const [localPart, domain] = email.split("@");
  if (!localPart || !domain || domain.length < 3) return false;
  const domainExtenstion = domain.split(".");
  if (
    domainExtenstion.length < 2 ||
    domainExtenstion[domainExtenstion.length - 1].length < 2
  ) {
    return false;
  }
  return true;
}

module.exports = validateEmail;
