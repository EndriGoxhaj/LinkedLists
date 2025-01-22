class Node {
  constructor(root = null, next = null) {
    this.root = root;
    this.next = next;
  }
}

class LinkedList {
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
  pop(currentNode = this.node, previousNode) {
    if (!currentNode.root) return null;
    if (!currentNode.next) {
      return (previousNode.next = null);
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
      this.pop(currentNode, previousNode);
    }
  }
  contains(value, currentNode = this.node) {
    if (!currentNode.root) return null;
    if (currentNode.root != value && !currentNode.next)
      return console.log("doesnt exist in list");
    if (currentNode.root === value) return console.log("true");
    else {
      currentNode = currentNode.next;
      this.contains(value, currentNode);
    }
  }
  find(value, currentNode = this.node) {
    if (!currentNode.root) return console.log("list empty");
    if (currentNode.root != value && !currentNode.next)
      return console.log("value doesnt exist");
    if (currentNode.root === value) return console.log(currentNode);
    else {
      currentNode = currentNode.next;
      this.find(value, currentNode);
    }
  }
  print(currentNode = this.node, string = "") {
    if (!currentNode.root) return console.log("empty");
    if (!currentNode.next) {
      string += `( ${currentNode.root} ) -> ${currentNode.next}`;
      console.log(string);
    } else {
      string += `( ${currentNode.root} ) -> `;
      currentNode = currentNode.next;
      this.print(currentNode, string);
    }
  }

  insertAt(value, index, currentNode = this.node, previousNode, i = 0) {
    if (!currentNode.root) return console.log("null");
    if (index === 0) {
      this.node = new Node(value);
      this.node.next = currentNode;
    }
    if (index === i) {
      previousNode.next = new Node(value);
      let nextNode = previousNode.next;
      nextNode.next = currentNode;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
      i++;
      this.insertAt(value, index, currentNode, previousNode, i);
    }
  }
  removeAt(index, currentNode = this.node, previousNode, i = 0) {
    if (!currentNode.root) return console.log("null");
    if (index === 0) this.node = currentNode.next;
    if (index === i) {
      previousNode.next = currentNode.next;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
      i++;
      this.removeAt(index, currentNode, previousNode, i);
    }
  }
}
let list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.print();
