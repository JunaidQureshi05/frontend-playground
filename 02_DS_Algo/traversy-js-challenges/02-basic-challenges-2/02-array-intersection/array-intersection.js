function arrayIntersection(arr1, arr2) {
  let firstArray = new Set(arr1);
  let intersection = new Set();
  for (let i = 0; i < arr2.length; i++) {
    if (firstArray.has(arr2[i])) {
      intersection.add(arr2[i]);
    }
  }
  return Array.from(intersection);
}

module.exports = arrayIntersection;
