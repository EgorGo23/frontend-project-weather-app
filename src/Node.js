// Node
class Node {
  constructor(elm, next = null, prev = null) {
    this.element = elm;
    this.next = next;
    this.prev = prev;
  }
}

export default Node;
