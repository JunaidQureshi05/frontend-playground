const tree = {
  tag: "body",
  children: [
    { tag: "div", children: [{ tag: "span", children: ["foo", "bar"] }] },
    { tag: "div", children: ["baz"] },
  ],
};

function createIndentation(no) {
  return "\t".repeat(no);
}
function createTags(tagName) {
  let openingTag = `<${tagName}>`;
  let closingTag = `</${tagName}>`;
  return [openingTag, closingTag];
}

function parseHtml(tree, depth = 0) {
  let currentTag = tree.tag;
  let parsedStr = "";

  const [openingTag, closingTag] = createTags(currentTag);
  parsedStr += createIndentation(depth) + openingTag;
  for (let i = 0; i < tree?.children?.length; i++) {
    if (typeof tree.children[i] === "string") {
      parsedStr += "\n" + createIndentation(depth + 1) + tree.children[i];
    } else {
      parsedStr += "\n" + parseHtml(tree.children[i], depth + 1);
    }
  }
  parsedStr += "\n" + createIndentation(depth) + closingTag;
  return parsedStr;
}

console.log(parseHtml(tree));
