Function.prototype.myApply = function (context, argsArray = []) {
  context = context || globalThis;
  context[key] = this;
  let result = context[key](...argsArray);
  delete context[key];
  return result;
};
