class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let root = this.root;
      while (true) {
        if (value < root.value) {
          if (!root.left) {
            root.left = node;
            break;
          } else {
            root = root.left;
          }
        } else {
          if (!root.right) {
            root.right = node;
            break;
          } else {
            root = root.right;
          }
        }
      }
    }
    return node;
  }
  lookup(value) {
    if (!this.root) return null;
    let root = this.root;
    while (root) {
      if (value < root.value) {
        root = root.left;
      } else if (value > root.value) {
        root = root.right;
      } else {
        return root;
      }
    }
    return null;
  }
  remove(value) {
    const removeNode = (node, value) => {
      if (!node) {
        return null;
      } else {
        if (value < node.value) {
          node.left = removeNode(node.left, value);
          return node;
        } else if (value > node.value) {
          node.right = removeNode(node.right, value);
          return node;
        } else {
          if (node.left === null) {
            return node.right;
          } else if (node.right === null) {
            return node.left;
          } else {
            let tempNode = node.right;
            while (tempNode.left !== null) {
              tempNode = tempNode.left;
            }
            node.value = tempNode.value;
            node.right = removeNode(node.right, tempNode.value);
            return node;
          }
        }
      }
    };
    this.root = removeNode(this.root, value);
    return this.root;
  }
  printTree(node = this.root) {
    if (!node) return;
    this.printTree(node.left);
    console.log(node.value);
    this.printTree(node.right);
  }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.lookup(2));
console.log(bst.lookup(8));
console.log(bst.lookup(20));
module.exports = { Node, BinarySearchTree };
