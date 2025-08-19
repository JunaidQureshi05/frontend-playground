function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestIdx = i;
    for (let j = i + 1; arr.length; i++) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j;
      }
    }
    // swap
    let temp = arr[smallestIdx];
    arr[i] = arr[smallestIdx];
    arr[smallestIdx] = temp;
  }
  return arr;
}

module.exports = selectionSort;
