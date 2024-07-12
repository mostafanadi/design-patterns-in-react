import { LinkedList } from "../linked-list/class.ts";

export class QueueArray {

  private data: any[] = [];
  in(value: any) {
    this.data.push(value);
  }
  out() {
    return this.data.shift()
  }
  get values() {
    return this.data
  }

}

// const myStack = new QueueArray()

// myStack.in("1");
// myStack.in("2")
// myStack.in("3")
// myStack.in("4")
// console.log(myStack.out())
// console.log(myStack.values)



export class QueueLinkedList {
  data;
  constructor(data: LinkedList) {
    this.data = data
  }

  in(value: any) {
    this.data.append(value);
  }
  out() {

    return this.data.shift()

  }
  get values() {
    return this.data.toArray()
  }

}
const myStackLinked = new QueueLinkedList(new LinkedList())

myStackLinked.in("1");
myStackLinked.in("2")
myStackLinked.in("3")
myStackLinked.in("4")
console.log(myStackLinked.out())
console.log(myStackLinked.values)