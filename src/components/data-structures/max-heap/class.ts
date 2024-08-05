class MaxHeap {
  heapElements: number[] = [];
  insert(value: number) {
    this.heapElements.push(value);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
    while (
      this.heapElements[currentElementIndex] >
      this.heapElements[parentElementIndex]
    ) {
      const parentElement = this.heapElements[parentElementIndex];
      const currentElement = this.heapElements[currentElementIndex];
      this.heapElements[parentElementIndex] = currentElement;
      this.heapElements[currentElementIndex] = parentElement;
      currentElementIndex = parentElementIndex;
      parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
    }
  }
  process() {
    if (this.heapElements.length == 0) {
      return null;
    }
    if (this.heapElements.length == 1) {
      return this.heapElements.pop();
    }
    const topElement = this.heapElements[0];
    this.heapElements[0] = this.heapElements.pop()!;
    console.log(this.heapElements);
    let currentElementIndex = 0;
    let leftChildIndex = 2 * currentElementIndex + 1;
    let rightChildIndex = 2 * currentElementIndex + 2;
    let childElementIndex =
      this.heapElements[rightChildIndex] &&
      this.heapElements[rightChildIndex] >= this.heapElements[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex;
    console.log(childElementIndex);
    while (
      // this.heapElements[childElementIndex] &&
      this.heapElements[currentElementIndex] <
      this.heapElements[childElementIndex]
    ) {
      let currentNode = this.heapElements[currentElementIndex];
      let childNode = this.heapElements[childElementIndex];
      this.heapElements[currentElementIndex] = childNode;
      this.heapElements[childElementIndex] = currentNode;
      childElementIndex =
        this.heapElements[rightChildIndex] &&
        this.heapElements[leftChildIndex] <= this.heapElements[rightChildIndex]
          ? rightChildIndex
          : leftChildIndex;
    }

    return topElement;
  }
}

const heap = new MaxHeap();
// heap.insert(2);
heap.insert(4);
heap.insert(10);
heap.insert(16);
heap.insert(78);
heap.insert(561);
heap.insert(45);
heap.insert(250);
heap.process();
heap.process();

console.log(heap);
