export class TreeNode {
  parent: TreeNode | null = null;
  children: TreeNode[] = [];
  data = null;
  constructor(data: any, parent: TreeNode | null) {
    this.data = data;
    this.parent = parent;
  }
  addNode(path: string) {
    const segments = path.split("/");
    if (segments.length == 0) {
      return;
    }
    if (segments.length == 1) {
      const node = new TreeNode(segments[0], this);
      this.children.push(node);
      return node;
    }

    const existingChildNode = this.children.find(
      (child) => child.data == segments[0]
    );
    if (existingChildNode) {
      existingChildNode.addNode(segments.slice(1).join("/"));
    } else {
      const node = new TreeNode(segments[0], this);
      node.addNode(segments.slice(1).join("/"));
      this.children.push(node);
      return node;
    }
    // console.log(segments.slice(1).join('/'))
  }

  findNodeDepth(path: string): TreeNode | null {

    if (this.data == path) {
      return this!
    }
    for (let child of this.children) {
      if (child.data == path) {
        return child!
      } else {
        return child!.findNodeDepth(path) || null;
      }
    }
    return null
  }
  findNodeBreadth(path: string): TreeNode | null {

    if (this.data == path) {
      return this
    }
    for (let child of this.children) {
      if (child.data == path) {
        return child
      }
    }
    for (let child of this.children) {

      return child.findNodeBreadth(path)
    }
    return null
  }
  removeNode(path: string) {
    const segments = path.split("/");
    if (segments.length == 0) {
      return;
    }
    if (segments.length == 1) {
      const data = segments[0];
      const existingNode = this.children.find((child) => child.data == data);
      if (existingNode) {
      }

      if (this.data == data) {
        const filteredChildren = this.parent!.children.filter(
          (item) => item.data != data
        );
        return (this.parent!.children = filteredChildren);
      }
      throw new Error("PATH NOT FOUND!");
    }

    const existingNode = this.data == segments[0];
    if (existingNode) {
      this.removeNode(segments.slice(1).join("/"));
    } else {
      throw new Error("PATH NOT FOUND!");
    }
  }
}
export class Tree {
  root?: TreeNode;
  constructor(rootPath: string) {
    const root = new TreeNode(rootPath, null);
    this.root = root;
  }
  add(path: string) {
    this.root?.addNode(path);
  }
  remove(path: string) {
    this.root?.removeNode(path);
  }
  findDepth(path: string) {
    return this.root?.findNodeDepth(path)
  }
  findBreadth(path: string) {
    return this.root?.findNodeBreadth(path)
  }
}
const p = new Tree("/");
p.add("/games/call-off-dute/bin.exe");
console.log(p);
