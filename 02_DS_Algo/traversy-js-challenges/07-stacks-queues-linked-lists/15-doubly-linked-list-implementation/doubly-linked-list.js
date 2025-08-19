function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.append = function (data) {
  let newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
};

DoublyLinkedList.prototype.printAll = function () {
  let current = this.head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

DoublyLinkedList.prototype.prepend = function (data) {
  let newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  this.length++;
};

DoublyLinkedList.prototype.insertAt = function (idx, data) {
  if (idx < 0 || idx > this.length) {
    return null;
  }
  if (idx === 0) {
    return this.prepend(data);
  }
  if (idx === this.length) {
    return this.append(data);
  }
  let currentNode = this.head;
  let i = 0;
  while (i < idx - 1) {
    currentNode = currentNode.next;
    i++;
  }
  let newNode = new Node(data);
  currentNode.next.prev = newNode;
  newNode.next = currentNode.next;
  currentNode.next = newNode;
  newNode.prev = currentNode;
  this.length++;
};

DoublyLinkedList.prototype.remove = function (idx) {
  if (!this.head) return false;
  if (idx < 0 || idx >= this.length) {
    return false;
  }
  let i = 0;
  let currentNode = this.head;
  while (i < idx - 1) {
    currentNode = currentNode.next;
    i++;
  }
  currentNode.next = currentNode.next.next;
  currentNode.next.prev = currentNode;
  this.length--;
  return true;
};

DoublyLinkedList.prototype.get = function (idx) {
  if (idx < 0 || idx >= this.length) {
    return null;
  }
  let i = 0;
  let currentNode = this.head;
  while (i < idx) {
    currentNode = currentNode.next;
    i++;
  }
  return currentNode;
};

DoublyLinkedList.prototype.contains = function (data) {
  if (!this.head) {
    return false;
  }
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.data === data) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

const list = new DoublyLinkedList();

list.append(100);
list.append(200);
list.append(300);
list.append(400);
list.remove(2);

list.printAll();

module.exports = DoublyLinkedList;
