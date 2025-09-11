function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr, arr2) {
  let result = [];
  let pt1 = 0;
  let pt2 = 0;
  while (pt1 < arr.length && pt2 < arr2.length) {
    if (arr[pt1] < arr2[pt2]) {
      result.push(arr[pt1]);
      pt1++;
    } else {
      result.push(arr2[pt2]);
      pt2++;
    }
  }
  while (pt1 < arr.length) {
    result.push(arr[pt1]);
    pt1++;
  }
  while (pt2 < arr2.length) {
    result.push(arr2[pt2]);
    pt2++;
  }
  return result;
}

console.log(mergeSort([1, 3, 2, 4, 5, 6, 33, 4]));
