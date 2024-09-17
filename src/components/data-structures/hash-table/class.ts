export class ChainedHashTable {
  size = 1000;
  data: [any?, any?][] = new Array(this.size).fill(null).map(() => []);
  private hash(value: string) {
    let h = 0;
    for (let char of value) {
      h += char.charCodeAt(0);
    }
    return h % this.size;
  }
  set(key: string, value: any) {
    const hash = this.hash(key);
    this.data[hash].push([key, value]);
  }
  get(key: string) {
    const hash = this.hash(key);
    const item = this?.data?.[hash]?.find((tuple) => tuple?.[0] == key);
    return item?.[1] || null;
  }
}

// const hashtable = new ChainedHashTable()

// hashtable.set("name", "MOSTAFA")
// console.log(hashtable.get('name'))

export class OpenAddressingHashTable {
  size = 1000;
  data: [any?, any?][] = new Array(this.size).fill(null);
  private hash(value: string) {
    let h = 0;
    for (let char of value) {
      h += char.charCodeAt(0);
    }
    return h % this.size;
  }
  set(key: string, value: any) {
    let hash = this.hash(key);
    if (!this.data[hash] || this.data[hash][0] == key) {
      this.data[hash] = [key, value];
      return;
    } else {
      while (this.data[hash] != null) {
        hash++;
      }
      this.data[hash] = [key, value];
      return;
    }
  }
  get(key: string) {
    const hash = this.hash(key);
    for (let i = hash; i < this.data.length; i++) {
      if (this.data[i][0] == key) {
        return this.data[i][1];
      } else {
        return undefined;
      }
    }
  }
}

const hashtable = new OpenAddressingHashTable();

hashtable.set("name", "MOSTAFA");
console.log(hashtable.get("name"));
