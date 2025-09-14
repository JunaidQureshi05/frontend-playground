class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function createlist(arr) {
  let head = null;
  let current = null;
  for (let element of arr) {
    if (!head) {
      head = new Node(element);
      current = head;
    } else {
      current.next = new Node(element);
      current = current.next;
    }
  }
  return head;
}

function linkedListCombineTwoSorted(listA, listB) {
  if (listA === null) {
    return listB;
  }
  if (listB === null) {
    return listA;
  }
  let dummy = new Node(0);
  let current = dummy;
  while (listA !== null && listB !== null) {
    if (listA.val < listB.val) {
      current.next = new Node(listA.val);
      listA = listA.next;
    } else {
      current.next = new Node(listB.val);
      listB = listB.next;
    }
    current = current.next;
  }
  while (listA !== null) {
    current.next = new Node(listA.val);
    listA = listA.next;
    current = current.next;
  }
  while (listB !== null) {
    current.next = new Node(listB.val);
    current = current.next;
    listB = listB.next;
  }
  return dummy.next;
}

let listA = createlist([]);
let listB = createlist([0]);

let combinedList = linkedListCombineTwoSorted(listA, listB);
console.log(JSON.stringify(combinedList));
