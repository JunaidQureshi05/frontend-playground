Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  let key = Symbol();
  context[key] = this;
  let result = context[key](...args);
  delete context[key];
  return result;
};
