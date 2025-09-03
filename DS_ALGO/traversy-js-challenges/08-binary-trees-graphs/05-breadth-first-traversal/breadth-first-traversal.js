const Queue = require("./queue");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstTraversal(root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let elements = [];
  while (queue.length > 0) {
    let currentNode = queue.shift();
    elements.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return elements;
}

module.exports = {
  Node,
  breadthFirstTraversal,
};
