const SEPERATOR = ", ";
const AND = " and ";
const OTHER = " other";
function listFormat(list, config = {}) {
  let str = "";
  list = list.filter((name) => Boolean(name));
  if (list.length === 0) {
    return str;
  }
  if (list.length === 1) {
    return list[0];
  }

  if (config.sorted) {
    list.sort();
  }
  if (config.unique) {
    list = Array.from(new Set(list));
  }

  if (config.length && config.length > 0 && config.length < list.length) {
    let firstPart = list.slice(0, config?.length).join(SEPERATOR);
    let count = list.length - config.length;
    let secondPart =
      list.slice(config?.length)?.length + OTHER + (count > 1 ? "s" : "");
    console.log("i am here ", firstPart, count);
    if (count > 0) {
      str = [firstPart, secondPart].join(AND);
    }
  } else {
    let firstPart = list.slice(0, list.length - 1).join(SEPERATOR);
    let secondPart = list.slice(list.length - 1);
    str = [firstPart, secondPart].join(AND);
  }
  console.log("####", str);
  return str;
}

console.log(listFormat(["Bob", "Ben", "Tim", "Jane", "John"], { length: 100 }));
