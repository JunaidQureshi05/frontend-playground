function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr.length - 1;
  let left = [];
  let right = [];
  quickHelper(arr, left, right, pivot);
  return [...quickSort(left), arr[pivot], ...quickSort(right)];
}

function quickHelper(arr, left, right, pivot) {
  for (let i = 0; i < arr.length; i++) {
    if (i === pivot) continue;
    let element = arr[i];
    if (element > arr[pivot]) {
      right.push(element);
    } else {
      left.push(element);
    }
  }
}

console.log(quickSort([1, 1]));
