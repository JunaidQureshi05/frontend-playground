function countBy(array, iteratee) {
  let result = {};
  for (let element of array) {
    let value = String(iteratee(element));
    result[value] ??= 0;
    result[value] += 1;
  }
  return result;
}

console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n));
