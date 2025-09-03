function generateHashtag(str) {
  if (!str) return false;
  let generatedHashTag = str
    .split(" ")
    .filter((word) => word.trim())
    .map((word) => word[0]?.toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  generatedHashTag = "#" + generatedHashTag;

  if (generatedHashTag.length > 140) return false;
  return generatedHashTag;
}

module.exports = generateHashtag;
