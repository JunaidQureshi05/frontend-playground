function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  console.log(arr.slice(0, mid), arr.slice(mid + 1));
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log("left", left, "right", right);
  return merge(left, right);
}

function merge(left, right) {
  let merged = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }

  if (leftIdx < left.length) {
    return merged.concat(left.slice(leftIdx));
  } else if (rightIdx < right.length) {
    return merged.concat(right.slice(rightIdx));
  } else return merged;
}

console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
module.exports = mergeSort;
