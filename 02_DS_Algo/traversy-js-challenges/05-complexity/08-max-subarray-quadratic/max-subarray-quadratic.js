// function maxSubarraySum(arr, k) {
//   let maxSum = -Infinity;
//   for (let i = 0; i < k; i++) {
//     let currentSum = 0;
//     for (j = i; j < i + k; i++) {
//       currentSum += arr[j];
//       maxSum = Math.max(arr[i], maxSum);
//     }
//   }
//   return maxSum;
// }

function maxSubarraySum(arr, k) {
  let windowSum = 0;
  let maxSum;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(windowSum, maxSum);
  }
  return maxSum;
}

module.exports = maxSubarraySum;
