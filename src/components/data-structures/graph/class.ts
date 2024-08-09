export class Graph {
  constructor(public edges: { [key: string]: Set<number> | undefined } = {}, public nodes: { [key: string]: string | undefined } = {}) { }
  addNode(identifier: number, value: any) {
    if (!this.nodes[identifier]) {

      this.nodes[identifier] = value;
    } else {
      throw new Error("Node already exists!")
    }

  }
  hasEdge(startIdentifier: number, endIdentfier: number) {
    if (this.nodes?.[startIdentifier] && this.nodes?.[endIdentfier]) {
      if (this.edges?.[startIdentifier]?.has(endIdentfier)) {
        return true
      } else {
        return false
      }
    }
    throw new Error("Nodes not found!")

  }
  nodeExist(nodeIdentifier: number) {
    return !!this.nodes?.[nodeIdentifier]

  }
  removeEdge(startIdentifier: number, endIdentfier: number) {
    if (this.nodeExist(startIdentifier) && this.nodeExist(endIdentfier) && this.hasEdge(startIdentifier, endIdentfier)) {
      this.edges[startIdentifier]?.delete(endIdentfier)
      // this.edges[startIdentifier] = this.edges[startIdentifier]?.filter(edge => edge != endIdentfier)

    } else {
      throw new Error("Node or Edge does not exist!")
    }
  }
  removeNode(nodeIdentifier: number) {
    if (this.nodeExist(nodeIdentifier)) {
      delete this.nodes[nodeIdentifier];
      delete this.edges[nodeIdentifier];
      for (let identifier in this.edges) {
        console.log(nodeIdentifier)
        this.edges[identifier]?.delete(+nodeIdentifier)
        // this.edges[identifier] = this.edges[identifier]?.filter(edge => edge != +nodeIdentifier)
      }
    } else {
      throw new Error("Node not found!")
    }
  }
  getAllEdges(nodeIdentifier: number) {
    if (!this.nodes[nodeIdentifier]) {
      throw new Error("Node not found")
    }
    return this.edges[nodeIdentifier]
  }
  addEdge(startIdentifier: number, endIdentfier: number) {
    if (startIdentifier == endIdentfier) {
      throw new Error("Nodes cant  be connected to themeselves!")
    }
    if (!this.nodes[startIdentifier] || !this.nodes[endIdentfier]) {
      throw new Error("Nodes not found")

    }
    if (!this.edges[startIdentifier]) {
      return this.edges[startIdentifier] = new Set([endIdentfier])
    }
    if (!this.edges[startIdentifier]?.has(endIdentfier)) {
      return this.edges[startIdentifier]?.add(endIdentfier)

    }

  }
}

const graph = new Graph()
graph.addNode(1, "mosi")
graph.addNode(2, "ali")
graph.addNode(3, "javad")
graph.addEdge(1, 3)
graph.addEdge(3, 1)
graph.addEdge(2, 3)
graph.addEdge(1, 2)
graph.removeNode(3)
console.log(graph)