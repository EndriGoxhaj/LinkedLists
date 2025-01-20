class Node {
  constructor(root = null, next = null) {
    this.root = root;
    this.next = next;
  }
}

class linkedList {
  constructor(node = new Node()) {
    this.node = node;
  }
  append(value, currentNode = this.node) {
    if (currentNode.root == null) {
      currentNode.root = value;
      return;
    }
    if (currentNode.next == null) {
      currentNode.next = value;
      currentNode.next.next = null;
    } else this.append(value, (currentNode = currentNode.next));
  }
  print() {
    console.log(this.node.root);
  }
}
let list = new linkedList();
list.append("hello");
list.print();
