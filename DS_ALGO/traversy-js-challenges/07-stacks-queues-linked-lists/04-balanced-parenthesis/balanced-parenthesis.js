const Stack = require("./stack");

function balancedParenthesis(str) {
  let stack = new Stack();
  for (let ch of str) {
    if (ch === "(") {
      stack.push("(");
    } else {
      if (ch === ")" && stack.peek() === "(") {
        stack.pop();
      } else {
        stack.push(ch);
      }
    }
  }
  return stack.isEmpty();
}
balancedParenthesis("))");

module.exports = balancedParenthesis;
