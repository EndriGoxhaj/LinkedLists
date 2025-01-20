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
  size(currentNode = this.node, size = 0) {
    if (!currentNode.root) return console.log(size);
    if (!currentNode.next) return console.log(++size);
    else {
      size++;
      currentNode = currentNode.next;
      this.size(currentNode, size);
    }
  }
  head() {
    console.log(this.node);
  }
  tail(currentNode = this.node) {
    if (!currentNode.root) return null;
    if (!currentNode.next) return console.log(currentNode);
    else {
      currentNode = currentNode.next;
      this.tail(currentNode);
    }
  }
  at(index, currentNode = this.node, i = 0) {
    if (!currentNode.root) return null;
    if (i == index) return console.log(currentNode);
    else {
      currentNode = currentNode.next;
      i++;
      this.at(index, currentNode, i);
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
list.size();
list.print();
list.append("hello");
list.append("hi");
list.append("ckemi");
list.print();
list.prepend("opa");
list.print();
list.size();
list.head();
list.tail();
list.at(2);
