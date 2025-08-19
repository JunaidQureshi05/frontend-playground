const Queue = require("./queue");
const Stack = require("./stack");

function isPalindromeQueueStack(str) {
  let queue = new Queue();
  let stack = new Stack();
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0; i < formattedStr.length; i++) {
    queue.enqueue(formattedStr.charAt(i));
    stack.push(formattedStr.charAt(i));
  }
  while (!queue.isEmpty()) {
    if (queue.dequeue() !== stack.pop()) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindromeQueueStack;
