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
  add(value: number) {
    this.root?.addNode(value);
  }
  remove(value: number) {
    this.root?.removeNode(value);
  }
  find(value: number) {
    return this.root?.findNode(value);
  }
}
