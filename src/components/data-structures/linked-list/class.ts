// LinkedNode class for the linked list
class LinkedNode<T> {
  value: T;
  next: LinkedNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class
export class LinkedList<T> {
  head: LinkedNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a node to the end of the list
  append(value: T): void {
    const newNode = new LinkedNode<T>(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  // Add a node at the beginning of the list
  prepend(value: T): void {
    const newNode = new LinkedNode<T>(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  // Remove a node by value
  remove(value: T): void | null {
    if (this.head === null) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current: LinkedNode<T> | null = this.head;
    let previous: LinkedNode<T> | null = null;

    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current === null) {
      return null; // Value not found
    }

    if (previous) {
      previous.next = current.next;
    }
    this.size--;
  }

  // Find a node by value
  find(value: T): LinkedNode<T> | null {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  // Get the size of the list
  getSize(): number {
    return this.size;
  }

  // Print the list
  print(): void {
    let current = this.head;
    const result: T[] = [];

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }
}

// Example usage
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.prepend(5);
list.print(); // Output: 5 -> 10 -> 20

list.remove(10);
list.print(); // Output: 5 -> 20

console.log(list.find(20)); // Output: LinkedNode { value: 20, next: null }

console.log(list.getSize()); // Output: 2
