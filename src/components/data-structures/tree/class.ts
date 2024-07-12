
class TreeNode {
  parent: TreeNode | null = null;
  children: TreeNode[] = [];
  data = null;
  constructor(data: any, parent: TreeNode | null) {
    this.data = data;
    this.parent = parent
  }
  addNode(path: string) {
    const segments = path.split("/");
    console.log(segments)
    const node = new TreeNode(segments[0], this);
    if (segments.length == 0) {
      return
    }
    if (segments.length == 1) {
      // console.log(node)
      this.children.push(node);
      console.log(this.children)
      return node;
    }
    // console.log(segments.slice(1).join('/'))
    node.addNode(segments.slice(1).join('/'))

  }

}
export class Tree {
  root?: TreeNode;
  constructor(rootPath: string) {
    const root = new TreeNode(rootPath, null)
    this.root = root;
  }
  add(path: string) {
    this.root?.addNode(path)
  }

}
const p = new Tree('/');
p.add('/games/call-off-dute/bin.exe')
console.log(p)