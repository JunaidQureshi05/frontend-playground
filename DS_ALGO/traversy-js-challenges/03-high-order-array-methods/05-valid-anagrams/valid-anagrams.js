function validAnagrams(str1, str2) {
  let freq1 = str1.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  let freq2 = str2.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(freq1).every((key) => freq1[key] === freq2[key]);
}

module.exports = validAnagrams;
