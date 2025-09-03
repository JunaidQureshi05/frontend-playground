const DoublyLinkedList = require("./DoublyLinkedList");

function findPairSum(nums, targetSum) {
  let dll = new DoublyLinkedList();
  for (let num of nums) {
    let difference = targetSum - num;
    if (dll.contains(difference)) {
      return [difference, num];
    }
    dll.append(num);
  }
  return null;
}

module.exports = findPairSum;
