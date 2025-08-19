class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root) {
  function helper(node, min, max) {
    if (!node) return true;
    if (
      (min !== null && node.value <= min) ||
      (max !== null && node.value >= max)
    ) {
      return false;
    }

    return (
      helper(node.left, min, node.value) && helper(node.right, node.value, max)
    );
  }
  return helper(root, null, null);
}

module.exports = { Node, isValidBST };
