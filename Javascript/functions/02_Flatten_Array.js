function flatten(arr, depth, currentDepth = 0, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && currentDepth < depth) {
      flatten(arr[i], depth, currentDepth + 1, result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten([1, [2, [3, [4]], 5]], 1)); // [1, 2, [3, [4]], 5]
console.log(flatten([1, [2, [3, [4]], 5]], 2)); // [1, 2, 3, [4], 5]
console.log(flatten([1, [2, [3, [4]], 5]], 3)); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, [4]], 5]], 4)); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, [4]], 5]], 0)); // [1, [2, [3, [4]], 5]]
console.log(flatten([1, 2, 3, 4, 5], 2)); // [1, 2, 3, 4, 5]
console.log(flatten([], 2));
