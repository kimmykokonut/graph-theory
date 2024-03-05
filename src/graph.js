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
}