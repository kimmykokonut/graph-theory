export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addNode(name) {
    this.adjacencyList.set(name, new Set());
  }
  hasNode(name) {
    if (this.adjacencyList.get(name)) {
      return true;
    }
    return false;
  }
  createEdge(node1, node2) {
    let set1 = this.adjacencyList.get(node1);
    let set2 = this.adjacencyList.get(node2);
    set1.add(node2);
    set2.add(node1);
    //same as this.adjacencyList.get(node1).add(node2);  
  }
  hasEdge(node1, node2) {
    if (this.adjacencyList.get(node1).has(node2)) {
      return true;
    }
    return false;
  }
  removeEdge(node1, node2) {
    this.adjacencyList.get(node1).delete(node2);
    this.adjacencyList.get(node2).delete(node1);
  }
  removeNode(name) {
    if (this.adjacencyList.has(name)) {
      this.adjacencyList.get(name).forEach((edge) => {
        this.adjacencyList.get(edge).delete(name);
      });
      this.adjacencyList.delete(name);
    }
  }
  depthFirstReachable(startingNode, targetNode) {
    if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {
      return false;
    }
    let stack = [startingNode]; //create stack w/el sNode
    let traversedNodes = new Set(); //for flagging nodes. set b/c fast, no dupes, set uses hash table under hood
    while (stack.length) {
      const currentNode = stack.shift();
      if (currentNode === targetNode) {
        return true;
      } else {
        traversedNodes.add(currentNode); //flag node
        const adjList = this.adjacencyList.get(currentNode);
        adjList.forEach(function(node) {
          if (!traversedNodes.has(node)) {
            stack.unshift(node);
          }
        });
      }

    }
  }


}