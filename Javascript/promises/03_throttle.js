function throttle(fn, time) {
  let throttling = false;
  return function (...args) {
    if (throttling) return;
    let context = this;
    fn.apply(context, args);
    throttling = true;
    setTimeout(() => {
      throttling = false;
    }, time);
  };
}
