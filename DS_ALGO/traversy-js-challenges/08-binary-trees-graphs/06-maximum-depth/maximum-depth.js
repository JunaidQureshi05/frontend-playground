class Node {}

function maxDepth(root) {
  if (!root) {
    return 0;
  }
  let leftHeight = maxDepth(root.left);
  let rightHeight = maxDepth(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

module.exports = {
  maxDepth,
  Node,
};
