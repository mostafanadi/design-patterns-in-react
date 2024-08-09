export class AVLTreeNode {
  parent: AVLTreeNode | null = null;
  left: AVLTreeNode | null = null;
  right: AVLTreeNode | null = null;
  value: number | null = null;
  constructor(value: any, parent: AVLTreeNode | null = null) {
    this.value = value;
    this.parent = parent;
  }
  get leftDepth(): number {
    if (!this.left) {
      return 0;
    }
    return this.left.depth + 1;
  }
  get rightDepth(): number {
    if (!this.right) {
      return 0;
    }
    return this.right.depth + 1;
  }
  get depth() {
    return Math.max(this.leftDepth, this.rightDepth);
  }
  get balanceFactor() {
    return this.leftDepth - this.rightDepth
  }

  addNode(value: number) { 
    if (value > this.value!) {
      if (!this.right) {
        this.right = new AVLTreeNode(value);
        this.right.parent = this;
      } else {
        this.right.addNode(value);
      }
    } else {
      if (!this.left) {
        this.left = new AVLTreeNode(value);
        this.left.parent = this;
      } else {
        this.left!.addNode(value);
      }
    }
  }

  findNode(value: number): AVLTreeNode | undefined {
    if (value == this.value && !!this) {
      // console.log(this)
      return this;
    }
    if (this.value! < value! && this.right) {
      return this.right?.findNode(value);
    }
    if (this.value! > value! && this.left) {
      return this.left?.findNode(value);
    }
  }
  removeChild(node: AVLTreeNode) {
    if (this?.right?.value == node.value) {
      this.right = null;
      return;
    }
    if (this?.left?.value == node.value) {
      this.left = null;
      return;
    } else {
      throw new Error("Something went wrong");
    }
  }
  findNext() {
    if (!this.left) {
      return this;
    }
    this.left.findNext();
  }
  removeNode(value: number) {
    const foundedNode = this.findNode(value);
    // console.log("FOUNDED NODE", this.parent!.value)
    if (!foundedNode) {
      throw new Error("NODE NOT FOUND");
    }
    if (!foundedNode.right && !foundedNode.left) {
      foundedNode.parent?.removeChild(foundedNode);
      return;
    }
    if (foundedNode.right && foundedNode.left) {
      const nextBiggerNode = foundedNode.findNext();
      if (nextBiggerNode?.value != foundedNode.value) {
        this.removeNode(nextBiggerNode!.value!);
        foundedNode.value = nextBiggerNode!.value;
        if (foundedNode.left) {
          foundedNode.left.parent = foundedNode;
        }
        if (foundedNode.right) {
          foundedNode.right.parent = foundedNode;
        }
      } else {
        foundedNode.value = foundedNode.right.value;
        foundedNode.right = foundedNode.right.right;
        if (foundedNode.right) {
          foundedNode.right!.parent = foundedNode;
        }
        if (foundedNode.left) {
          foundedNode.left!.parent = foundedNode;
        }
      }
    } else {
      const childNode = foundedNode.right || foundedNode.left;
      foundedNode.right = childNode!.right;
      foundedNode.left = childNode!.left;
      foundedNode.value = childNode!.value;
    }
  }
}
export class AVLTree {
  root?: AVLTreeNode;
  constructor(value: number) {
    const root = new AVLTreeNode(value, null);
    this.root = root;
  }
  balance(node: AVLTreeNode) {
    if (node.balanceFactor < -1) {
      if (node.right?.balanceFactor! < 0) {
        this.rotateLeft(node)
      } else {
        this.rotateRightLeft(node)
      }
    } else if (node.balanceFactor > 1) {
      if (node.left?.balanceFactor! > 0) {
        this.rotateRight(node)
      } else {
        this.rotateLeftRight(node)
      }
    }
  }
  rotateLeft(node: AVLTreeNode) {
    const rightNode = node.right!
    node.right = null;
    if (node.parent) {
      node.parent.right = rightNode;
      node.parent.right.parent = node.parent
    }
    if (node == this.root) {
      this.root = rightNode;
      this.root.parent = null;
    }
    if (rightNode.left) {
      node.right = rightNode.left;
      node.right.parent = node;
    }
    rightNode.left = node;
    rightNode.left.parent = rightNode;

  }
  rotateRightLeft(node: AVLTreeNode) {
    const rightNode = node.right!;
    node.right = null;
    const rightLeftNode = rightNode.left!
    rightLeftNode.left = null;
    if (rightLeftNode.right) {
      rightNode!.left = rightLeftNode.right;
      rightNode!.left!.parent = rightNode;
      rightLeftNode.right = null;
    }
    node.right = rightLeftNode;
    node.right!.parent = node;
    rightLeftNode!.right = rightNode;
    rightLeftNode!.right!.parent! = rightLeftNode as AVLTreeNode;
  }
  rotateRight(node: AVLTreeNode) {
    const leftNode = node.left!;
    node.left = null;
    if (node.parent) {
      node.parent.left = leftNode;
      node.parent.left.parent = node.parent;
    }
    if (node == this.root) {
      this.root = leftNode;
      this.root.parent = null;
    }
    if (leftNode.right) {
      node.left = leftNode.right;
      node.left.parent = node;

    }
    leftNode.right = node;
    leftNode.right.parent = leftNode;
  }
  rotateLeftRight(node: AVLTreeNode) {
    const leftNode = node.left;
    node.left = null;
    const leftRightNode = leftNode!.right;
    leftNode!.right = null;
    if (leftRightNode?.left) {
      leftNode!.right = leftRightNode.left;
      leftNode!.right.parent = leftNode;
      leftRightNode.left = null;
    }
    node.left = leftRightNode;
    node.left!.parent = node;
    leftRightNode!.left = leftNode;
    leftRightNode!.left!.parent! = leftRightNode as AVLTreeNode;
  }
  add(value: number) {
    this.root?.addNode(value);
    let currentNode = this.root?.findNode(value);
    while (currentNode) {
      this.balance(currentNode!);
      currentNode = currentNode.parent!;
    }
  }
  remove(value: number) {
    this.root?.removeNode(value);
    this.balance(this.root!)
  }
  find(value: number) {
    return this.root?.findNode(value);
  }
}
