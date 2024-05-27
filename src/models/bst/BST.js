import Node from "./node.js";
class BST {
  #root;
  constructor() {
    this.#root = null;
  }

  add(value) {
    if (this.#root == null) {
      this.#root = new Node(value);
      return true;
    } else return this.insertNode(this.#root, value);
  }

  insertNode(node, value){
    if (value.NombreProducto < node.value.NombreProducto){
        if (node.left == null){
            node.left = new Node(value)
            if (node.left != null) return true
        }
        else
            return this.insertNode(node.left, value)
    } else {
        if (node.right == null) {
            node.right = new Node(value)
            if (node.right != null) return true
        }
        else
            return this.insertNode(node.right, value)
    }
}
  search(nombreProducto) {
    return this.searchNode(this.#root, nombreProducto);
  }

  searchNode(node, nombreProducto) {
    if (node === null) {
      return null;
    }

    if (nombreProducto === node.value.NombreProducto) {
      return node.value;
    } else if (nombreProducto < node.value.NombreProducto) {
      return this.searchNode(node.left, nombreProducto);
    } else {
      return this.searchNode(node.right, nombreProducto);
    }
  }
  findMax() {
    return this.findMaxNode(this.root);
  }
  findMax() {
    return this.findMaxNode(this.#root);
}

findMin() {
    return this.findMinNode(this.#root);
}

findMaxNode(node) {
    if (node === null) {
        return null;
    }
    let current = node;
    while (current.right !== null) {
        current = current.right;
    }
    return current.value;
}

findMinNode(node) {
    if (node === null) {
        return null;
    }
    let current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current.value;
}

inOrderTraversal(callback) {
  this.inOrderTraversalNode(this.#root, callback);
}

inOrderTraversalNode(node, callback) {
  if (node !== null) {
    this.inOrderTraversalNode(node.left, callback);
    callback(node.value);
    this.inOrderTraversalNode(node.right, callback);
  }
}
  
}
export default BST;
