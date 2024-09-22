class HashTableChaining<K, V> {
  private table: Array<Array<{ key: K; value: V }> | null>;
  private size: number;
  private capacity: number;
  private loadFactor: number;

  constructor(initialCapacity: number = 8, loadFactor: number = 0.7) {
    this.table = new Array(initialCapacity).fill(null);
    this.size = 0;
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
  }

  // Simple hash function to convert key to index
  private hashKey(key: K): number {
    const hash = JSON.stringify(key)
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return hash % this.capacity;
  }

  // Resize the table when the load factor is exceeded
  private resize(): void {
    const newCapacity = this.capacity * 2;
    const newTable = new Array<Array<{ key: K; value: V }> | null>(
      newCapacity
    ).fill(null);
    const oldTable = this.table;

    this.table = newTable;
    this.capacity = newCapacity;
    this.size = 0;

    for (const chain of oldTable) {
      if (chain !== null) {
        for (const entry of chain) {
          this.set(entry.key, entry.value);
        }
      }
    }
  }

  // Add or update a key-value pair
  set(key: K, value: V): void {
    if (this.size / this.capacity >= this.loadFactor) {
      this.resize();
    }

    const index = this.hashKey(key);
    if (this.table[index] === null) {
      this.table[index] = [];
    }

    // Check if the key already exists and update its value
    for (let entry of this.table[index]!) {
      if (entry.key === key) {
        entry.value = value; // Update the value
        return;
      }
    }

    // If key doesn't exist, add it
    this.table[index]!.push({ key, value });
    this.size++;
  }

  // Retrieve the value for a given key
  get(key: K): V | undefined {
    const index = this.hashKey(key);
    const chain = this.table[index];

    if (chain === null) return undefined;

    for (let entry of chain) {
      if (entry.key === key) {
        return entry.value;
      }
    }

    return undefined;
  }

  // Remove a key-value pair
  remove(key: K): boolean {
    const index = this.hashKey(key);
    const chain = this.table[index];

    if (chain === null) return false;

    for (let i = 0; i < chain.length; i++) {
      if (chain[i].key === key) {
        chain.splice(i, 1); // Remove the entry
        this.size--;
        return true;
      }
    }

    return false;
  }

  // Check if the key exists
  has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  // Get the current size of the hash table
  getSize(): number {
    return this.size;
  }

  // Clear the hash table
  clear(): void {
    this.table = new Array(this.capacity).fill(null);
    this.size = 0;
  }
}

// Usage example:
const hashTableC = new HashTableChaining<string, number>();
hashTableC.set("key1", 100);
hashTableC.set("key2", 200);
hashTableC.set("key3", 300);

console.log(hashTableC.get("key1")); // 100
console.log(hashTableC.get("key2")); // 200
console.log(hashTableC.get("key3")); // 300

hashTableC.remove("key2");
console.log(hashTableC.has("key2")); // false
console.log(hashTableC.getSize()); // 2
