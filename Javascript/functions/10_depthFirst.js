let graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "E"],
  D: ["B", "E", "F"],
  E: ["B", "C", "D", "F"],
  F: ["D", "E"],
};

function depthFirstSearch(graph, source) {
  let visited = new Set();
  let stack = [source]; // use stack for DFS

  while (stack.length > 0) {
    let currentElement = stack.shift(); // pop from end (LIFO)

    if (!visited.has(currentElement)) {
      visited.add(currentElement);
      console.log(currentElement); // log the node
      stack.push(...graph[currentElement].reverse());
    }
  }

  return Array.from(visited);
}

console.log(depthFirstSearch(graph, "F"));
//toEqual(["B", "A", "C", "E", "D", "F"]);
