const Stack = require("./stack");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function depthFirstTraversal(root) {
  if (!root) return [];
  let stack = new Stack();
  stack.push(root);
  let elements = [];
  while (!stack.isEmpty()) {
    let currentNode = stack.pop();
    elements.push(currentNode.value);
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
  }
  console.log(elements);
  return elements;
}

module.exports = {
  Node,
  depthFirstTraversal,
};
