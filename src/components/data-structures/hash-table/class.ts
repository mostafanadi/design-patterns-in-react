class HashTable<K, V> {
  private table: { [key: string]: V } = {};
  private size: number = 0;

  // Simple hash function to convert a key to a string
  private hashKey(key: K): string {
    return JSON.stringify(key);
  }

  // Add a key-value pair to the hash table
  set(key: K, value: V): void {
    const hashedKey = this.hashKey(key);
    if (!this.table.hasOwnProperty(hashedKey)) {
      this.size++;
    }
    this.table[hashedKey] = value;
  }

  // Get the value associated with a key
  get(key: K): V | undefined {
    const hashedKey = this.hashKey(key);
    return this.table[hashedKey];
  }

  // Remove a key-value pair from the hash table
  remove(key: K): boolean {
    const hashedKey = this.hashKey(key);
    if (this.table.hasOwnProperty(hashedKey)) {
      delete this.table[hashedKey];
      this.size--;
      return true;
    }
    return false;
  }

  // Check if the hash table contains a key
  has(key: K): boolean {
    const hashedKey = this.hashKey(key);
    return this.table.hasOwnProperty(hashedKey);
  }

  // Get the number of key-value pairs in the hash table
  getSize(): number {
    return this.size;
  }

  // Clear the entire hash table
  clear(): void {
    this.table = {};
    this.size = 0;
  }
}

// Usage example
const hashTable = new HashTable<string, number>();
hashTable.set("key1", 100);
hashTable.set("key2", 200);
console.log(hashTable.get("key1")); // 100
console.log(hashTable.has("key2")); // true
hashTable.remove("key2");
console.log(hashTable.getSize()); // 1
