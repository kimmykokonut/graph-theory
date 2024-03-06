class Stack { //LIFO
  constructor() {
    this.elements = [];
  }
  push(element) {
    return this.elements.push(element);
  }
  pop(element) {
    return this.elements.pop();
  }
}

class Queue { //FIFO
  constructor() {
    this.elements = [];
  }
  enqueue(element) {
    return this.elements.push(element);
  }
  dequeue(element) {
    return this.elements.shift();
  }
  // spliceFirst(element) {
  //   return this.elements.toSpliced(0, 1);
  // }
}