const Queue = require("./queue");
let Graph = require("./graph");
function breadthFirstTraversal(graph, startingVertex) {
  let queue = new Queue();
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }
  let visited = {};
  let result = [];
  visited[startingVertex] = true;
  result.push(startingVertex);
  queue.enqueue(startingVertex);
  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    graph.adjacencyList[vertex].forEach((v) => {
      if (!visited[v]) {
        console.log(">>", v);
        visited[v] = true;
        queue.enqueue(v);
        result.push(v);
      }
    });
  }
  return result;
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("C", "G");

console.log(breadthFirstTraversal(graph, "A"));
module.exports = breadthFirstTraversal;
