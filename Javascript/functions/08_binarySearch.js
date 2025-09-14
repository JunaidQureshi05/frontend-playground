function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(low, high, mid);
    let element = arr[mid];
    if (target < element) {
      high = mid - 1;
    } else if (target > element) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3, 6, 9, 11], 6)); // 3
// console.log("finished");
console.log(binarySearch([1, 2, 3, 10, 11, 20], 2)); // -1
console.log("finished 2");
