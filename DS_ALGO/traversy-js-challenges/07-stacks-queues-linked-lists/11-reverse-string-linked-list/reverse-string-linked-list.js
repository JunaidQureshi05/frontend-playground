const { LinkedList } = require("./linked-list");

function reverseStringLinkedList(str) {
  let list = new LinkedList();
  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str.charAt(i));
  }
  let rstr = "";
  let current = list.head;
  while (current) {
    rstr += current.data;
    current = current.next;
  }
  return rstr;
}

module.exports = reverseStringLinkedList;
