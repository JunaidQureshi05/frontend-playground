function symmetricDifference(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let result = [];
  for (let value of arr1) {
    if (!set2.has(value)) {
      result.push(value);
    }
  }
  for (let value of arr2) {
    if (!set1.has(value)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = symmetricDifference;
