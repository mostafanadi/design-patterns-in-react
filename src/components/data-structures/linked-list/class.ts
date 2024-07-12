//in other languages its mostly used instead of arrays because of memeory managment. 
//in linked lists you are not required to set the size of the list in advance.it automatically increases its size.
export class LinkedNode {
  next: LinkedNode | null = null;
  data: any = null;
  constructor(data: any = null, next = null) {
    this.data = data;
    this.next = next
  }
}

export class LinkedList {
  head: LinkedNode | null = null;
  tail?: LinkedNode | null = null;
  prepend(value: any) {
    const node = new LinkedNode(value);
    if (!this.head) {
      this.head = node;
    }
    if (!this.tail) {
      this.tail = node;
    }
    node.next = this.head
    this.head = node

  }
  shift() {
    if (!this.head) {
      return null;
    }
    const oldHead = this.head;
    if (this.head.next) {

      this.head = this.head.next;
    }
    return oldHead


  }
  delete(value: any) {
    if (!this.head) {
      return
    }
    let currentNode = this.head;
    while (this.head && this.head.data == value) {
      this.head = this.head.next

    }
    while (currentNode) {
      if (value == currentNode.next?.data) {
        currentNode.next = currentNode.next?.next || null;
      }
      if (this.tail?.data == value) {
        this.tail = currentNode
      }
      currentNode = currentNode.next!;
    }
  }
  find(value: any) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data == value) {
        return currentNode
      }
      currentNode = currentNode.next!;

    }
  }
  append(value: any) {
    const node = new LinkedNode(value)

    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    if (!this.head) {
      this.head = node;
    }

  }
  toArray() {
    const nodes = []
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    // console.log(nodes)
    return nodes
  }


}

const list = new LinkedList()
list.prepend("0")
list.append("1")
list.append("2")
list.append("3")
list.append("4")
// list.delete("0")
list.append("5")
console.log(list.find("5"))
// list.toArray()
// console.log(JSON.stringify(list))