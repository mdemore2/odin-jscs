function createNode(value, leftChild = null, rightChild = null) {
  return { value, leftChild, rightChild };
}

function createTree(root = null) {
  return {
    root,
    insert(value) {
      let newNode = createNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(node, newNode);
      }
    },
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.leftChild === null) {
          node.leftChild = newNode;
        } else {
          this.insertNode(node.leftChild, newNode);
        }
      } else {
        if (node.rightChild === null) {
          node.rightChild = newNode;
        } else {
          this.insertNode(node.rightChild, newNode);
        }
      }
    },
    delete(value) {
      this.root = this.deleteNode(this.root, value);
    },
    deleteNode(node, value) {
      if (node === null) {
        return null;
      } else if (value < node.value) {
        node.leftChild = this.deleteNode(node.leftChild, value);
        return node;
      } else if (value > node.value) {
        node.rightChild = this.deleteNode(node.rightChild, value);
        return node;
      } else {
        if (node.leftChild === null && node.rightChild === null) {
          node = null;
          return node;
        } else if (node.leftChild === null) {
          node = node.rightChild;
          return node;
        } else if (node.rightChild === null) {
          node = node.leftChild;
          return node;
        }
      }
    },
  };
}

function buildTree(list) {
  let sortedAndDeduped = Set(list.sort());

  let rootIndx = Math.floor(sortedAndDeduped.length / 2);
  let root = createNode(sortedAndDeduped[rootIndx]);
  let tree = createTree(root);
  sortedAndDeduped.forEach((value) => tree.insert(value));
  return tree;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
