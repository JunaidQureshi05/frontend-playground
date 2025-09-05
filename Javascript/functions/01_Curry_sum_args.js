function curry(fn) {
  let totalArgs = [];
  return function curriedFn(...args) {
    if (args.length === 0) {
      return fn(...totalArgs);
    } else {
      totalArgs = [...totalArgs, ...args];
      return curriedFn;
    }
  };
}
