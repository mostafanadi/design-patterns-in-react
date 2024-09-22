class HashTableOpenAddressing<K, V> {
  private table: Array<{ key: K; value: V } | null>;
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
  private hashKey(key: K, attempt: number = 0): number {
    const hash = JSON.stringify(key)
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (hash + attempt) % this.capacity; // Linear probing
  }

  // Resize the table when the load factor is exceeded
  private resize(): void {
    const newCapacity = this.capacity * 2;
    const newTable = new Array(newCapacity).fill(null);
    const oldTable = this.table;

    this.table = newTable;
    this.capacity = newCapacity;
    this.size = 0;

    for (const entry of oldTable) {
      if (entry !== null) {
        this.set(entry.key, entry.value);
      }
    }
  }

  // Add or update a key-value pair
  set(key: K, value: V): void {
    if (this.size / this.capacity >= this.loadFactor) {
      this.resize();
    }

    let attempt = 0;
    let index = this.hashKey(key, attempt);
    while (this.table[index] !== null && this.table[index]?.key !== key) {
      attempt++;
      index = this.hashKey(key, attempt);
    }

    if (this.table[index] === null) {
      this.size++;
    }

    this.table[index] = { key, value };
  }

  // Retrieve the value for a given key
  get(key: K): V | undefined {
    let attempt = 0;
    let index = this.hashKey(key, attempt);

    while (this.table[index] !== null) {
      if (this.table[index]?.key === key) {
        return this.table[index]?.value;
      }
      attempt++;
      index = this.hashKey(key, attempt);
    }

    return undefined;
  }

  // Remove a key-value pair
  remove(key: K): boolean {
    let attempt = 0;
    let index = this.hashKey(key, attempt);

    while (this.table[index] !== null) {
      if (this.table[index]?.key === key) {
        this.table[index] = null;
        this.size--;
        return true;
      }
      attempt++;
      index = this.hashKey(key, attempt);
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
const _hashTable = new HashTableOpenAddressing<string, number>();
_hashTable.set("key1", 100);
_hashTable.set("key2", 200);
_hashTable.set("key3", 300);

console.log(_hashTable.get("key1")); // 100
console.log(_hashTable.get("key2")); // 200
console.log(_hashTable.get("key3")); // 300

_hashTable.remove("key2");
console.log(_hashTable.has("key2")); // false
console.log(_hashTable.getSize()); // 2
