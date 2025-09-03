const Graph = require("./graph");
const Stack = require("./stack");

function depthFirstTraversal(graph, startingVertex) {
  let stack = new Stack();
  stack.push(startingVertex);
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }
  let visited = {};
  let result = [];
  visited[startingVertex] = true;
  result.push(startingVertex);
  while (!stack.isEmpty()) {
    let vertex = stack.pop();
    graph.adjacencyList[vertex].forEach((v) => {
      if (!visited[v]) {
        visited[v] = true;
        stack.push(v);
        result.push(v);
      }
    });
  }
  return result;
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "G");
g.addEdge("F", "G");

const result = depthFirstTraversal(g, "A").sort();
console.log(result);

module.exports = depthFirstTraversal;
