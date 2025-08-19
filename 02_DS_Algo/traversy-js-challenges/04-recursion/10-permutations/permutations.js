function permutations(str) {
  if (str.length === 0) {
    return [""];
  }
  let p = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    let remainingStr = str.slice(0, i) + str.slice(i + 1);
    let subPerms = permutations(remainingStr);
    for (let j = 0; j < subPerms.length; j++) {
      p.push(ch + subPerms[j]);
    }
  }
  return p;
}

module.exports = permutations;
