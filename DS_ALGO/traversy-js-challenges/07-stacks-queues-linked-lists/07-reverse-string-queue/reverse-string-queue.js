const Queue = require("./queue");

const reverseStringWithQueue = (str) => {
  let queue = new Queue();
  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str.charAt(i));
  }
  let rstr = "";
  while (!queue.isEmpty()) {
    let ch = queue.dequeue();
    rstr += ch;
  }
  return rstr;
};

module.exports = reverseStringWithQueue;
