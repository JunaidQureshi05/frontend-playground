const Stack = require("./stack");

function reverseStringStack(str) {
  let stack = new Stack();
  for (let ch of str) {
    stack.push(ch);
  }
  let rstr = "";
  while (!stack.isEmpty()) {
    rstr += stack.pop();
  }
  return rstr;
}

module.exports = reverseStringStack;
