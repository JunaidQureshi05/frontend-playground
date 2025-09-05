function flattenObj(obj, parentKey = "", res = {}) {
  for (let key in obj) {
    let propName = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}
console.log(flattenObj({ a: 1, b: { c: 2, d: { e: 3 } } }));
console.log(flattenObj({ a: { b: { c: { d: 1 } } }, e: 2 }));
