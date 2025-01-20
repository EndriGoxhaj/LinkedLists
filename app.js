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
    if (!currentNode.root) {
      currentNode.root = value;
      return;
    }
    if (!currentNode.next) {
      currentNode.next = new Node(value);
    } else this.append(value, (currentNode = currentNode.next));
  }
  prepend(value) {
    if (!this.node.root) this.node.root = value;
    else {
      let currentRoot = this.node;
      this.node = new Node(value);
      this.node.next = currentRoot;
    }
  }
  print(currentNode = this.node) {
    if (!currentNode.root) return console.log("empty");
    if (!currentNode.next) {
      console.log(currentNode.root);
    } else {
      console.log(currentNode.root);
      currentNode = currentNode.next;
      this.print(currentNode);
    }
  }
}
let list = new linkedList();
list.print();
list.append("hello");
list.append("hi");
list.append("ckemi");
list.print();
list.prepend("opa");
list.print();
