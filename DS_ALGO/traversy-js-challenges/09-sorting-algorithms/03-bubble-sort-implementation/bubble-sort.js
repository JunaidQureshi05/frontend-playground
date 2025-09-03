function bubbleSort(arr) {
  let sorted = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (sorted) return;
    for (let j = 0; i < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        sorted = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
