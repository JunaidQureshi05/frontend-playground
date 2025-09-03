function flattenArray(arr) {
  let flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    flattenedArr[i] = Array.isArray(arr[i]) ? flattenArray(arr[i]) : arr[i];
  }
  return flattenedArr;
}

module.exports = flattenArray;
