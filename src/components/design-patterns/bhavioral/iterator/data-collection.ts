export interface _Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

export interface IterableCollection<T> {
  createIterator(): _Iterator<T>;
}

// Example data structure (Array) implementing IterableCollection
export class DataCollection<T> implements IterableCollection<T> {
  private items: T[];

  constructor(data: T[]) {
    this.items = data;
  }

  createIterator(): _Iterator<T> {
    return new ArrayIterator<T>(this);
  }

  getItems(): T[] {
    return this.items;
  }
}

// Iterator implementation for arrays
export class ArrayIterator<T> implements _Iterator<T> {
  private collection: DataCollection<T>;
  private index: number;

  constructor(collection: DataCollection<T>) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.collection.getItems().length;
  }

  next(): T {
    return this.collection.getItems()[this.index++];
  }
}
