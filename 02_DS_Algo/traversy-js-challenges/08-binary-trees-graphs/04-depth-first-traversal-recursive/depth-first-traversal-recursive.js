class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function recDepthFirstTraversal(root) {
  let elements = [];
  function traverse(node) {
    if (node) {
      elements.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
  }
  traverse(root);
  return elements;
}

module.exports = {
  Node,
  recDepthFirstTraversal,
};
