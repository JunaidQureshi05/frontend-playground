function findMiddle(ll) {
  let slow = ll.head;
  let fast = ll.head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (slow === null) {
    return null;
  } else {
    return slow;
  }
}

module.exports = findMiddle;
