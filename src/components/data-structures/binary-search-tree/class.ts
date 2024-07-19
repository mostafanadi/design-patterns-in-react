export class BinaryTreeNode {
  parent: BinaryTreeNode | null = null;
  left: BinaryTreeNode | null = null;
  right: BinaryTreeNode | null = null
  value: number | null = null;
  constructor(value: any, parent: BinaryTreeNode | null = null) {
    this.value = value;
    this.parent = parent;
  }
  addNode(value: number) {
    if (value > this.value!) {
      if (!this.right) {
        this.right = new BinaryTreeNode(value);
        this.right.parent = this

      } else {
        this.right.addNode(value)
      }

    } else {
      if (!this.left) {

        this.left = new BinaryTreeNode(value)
        this.left.parent = this
      } else {
        this.left!.addNode(value)
      }
    }
  }


  findNode(value: number): BinaryTreeNode | undefined {
    if (value == this.value && !!this) {
      // console.log(this)
      return this
    }
    if (this.value! < value! && this.right) {
      return this.right?.findNode(value)

    }
    if (this.value! > value! && this.left) {
      return this.left?.findNode(value)

    }



  }
  removeChild(node: BinaryTreeNode) {
    if (this?.right?.value == node.value) {
      this.right = null
      return;
    }
    if (this?.left?.value == node.value) {
      this.left = null
      return;
    }
    else {
      throw new Error("Something went wrong")
    }
  }
  removeNode(value: number) {
    const foundedNode = this.findNode(value);
    // console.log("FOUNDED NODE", this.parent!.value)
    if (!foundedNode) {
      throw new Error("NODE NOT FOUND")
    }
    if (!foundedNode.right && !foundedNode.left) {
      foundedNode.parent?.removeChild(foundedNode);
      return;
    }
    if (foundedNode.right && foundedNode.left) {

    } else {
      const childNode = foundedNode.right || foundedNode.left;
      foundedNode.right = childNode!.right;
      foundedNode.left = childNode!.left;
      foundedNode.value = childNode!.value;
    }

  }
}
export class BinarySearchTree {
  root?: BinaryTreeNode;
  constructor(value: number) {
    const root = new BinaryTreeNode(value, null);
    this.root = root;
  }
  add(value: number) {
    this.root?.addNode(value);
  }
  remove(value: number) {
    this.root?.removeNode(value);
  }
  find(value: number) {
    return this.root?.findNode(value)
  }

}

