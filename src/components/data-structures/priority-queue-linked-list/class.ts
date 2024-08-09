
//Creating a Priority Queue with based on linked list

class PriorityNode {
  value?: string = undefined;
  next?: PriorityNode = undefined;
  priority?: number = undefined;
  constructor(value: string, priority: number) {
    this.value = value;
    this.priority = priority

  }
}
export class priorityQueueLinkedList {
  first?: PriorityNode = undefined;
  insert(value: string, priority: number) {
    const newNode = new PriorityNode(value, priority)
    if (!this.first || this.first.priority! < priority) {
      newNode.next = this.first;
      this.first = newNode;
      return

    }
    let currentNode = this.first;
    while (currentNode.next && priority < currentNode.next.priority!) {

      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  process() {
    const first = this.first;
    this.first = this.first?.next;
    return first
  }

}