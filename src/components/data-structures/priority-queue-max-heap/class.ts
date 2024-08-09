export class PriorityQueueMaxHeap {
    constructor(public heap: { value: any; priority: number }[] = []) { }

    // Helper Methods
    getLeftChildIndex(parentIndex: number) { return 2 * parentIndex + 1; }
    getRightChildIndex(parentIndex: number) { return 2 * parentIndex + 2; }

    getParentIndex(childIndex: number) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(index: number) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index: number) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index: number) {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index: number) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index: number) {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index: number) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(indexOne: number, indexTwo: number) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    // Removing an element will remove the
    // top element with highest priority then
    // heapifyDown will be called 
    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item: { value: any; priority: number }) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index).priority < this.heap[index].priority) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index).priority > this.leftChild(index).priority) {
                largerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] > this.heap[largerChildIndex]) {
                break;
            } else {
                this.swap(index, largerChildIndex);
            }
            index = largerChildIndex;
        }
    }

    printHeap() {
        var heap = ` ${this.heap[0].value} `
        for (var i = 1; i < this.heap.length; i++) {
            heap += ` ${this.heap[i].value} `;
        }
        console.log((heap));
    }
}

// Creating the Heap
const myHeap = new PriorityQueueMaxHeap();
myHeap.add({ value: 4, priority: 100 });
myHeap.add({ value: 10, priority: 2 });
myHeap.add({ value: 16, priority: 21 });
myHeap.add({ value: 78, priority: 40 });
myHeap.add({ value: 561, priority: 0 });
myHeap.add({ value: 45, priority: 35 });
myHeap.add({ value: 250, priority: 1 });
myHeap.remove()
myHeap.remove()


myHeap.printHeap();


