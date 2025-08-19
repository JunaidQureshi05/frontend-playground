Function.prototype.myBind = function (context, ...args) {
  let originalFunction = this;
  return function (...args2) {
    // Because this will be window object here;
    context = context || globalThis;
    let key = Symbol();
    context[key] = originalFunction;
    let result = context[key](...args, ...args2);
    delete context[key];
    return result;
  };
};
