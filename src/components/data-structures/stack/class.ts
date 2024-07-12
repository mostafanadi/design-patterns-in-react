import { LinkedList } from "../linked-list/class";

export class StackArray {

  private data: any[] = [];
  in(value: any) {
    this.data.push(value);
  }
  out() {
    return this.data.pop()
  }
  get values() {
    return this.data
  }

}

const myStack = new StackArray()

myStack.in("1");
myStack.in("2")
myStack.in("3")
myStack.in("4")
console.log(myStack.out())
console.log(myStack.values)



export class StackLinkedList {
  data;
  constructor(data: LinkedList) {
    this.data = data
  }

  in(value: any) {
    this.data.prepend(value);
  }
  out() {

    return this.data.shift()

  }
  get values() {
    return this.data
  }

}