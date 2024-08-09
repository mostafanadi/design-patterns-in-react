class TrieNode {
  value: string | null = null;
  children: TrieNode[] | null = null;
  constructor(value: string | null) {
    this.value = value;
    this.children = Array(26)
  }

}
class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode(null);
  }
  insert(key: string, value: string) {
    let node = this.root
    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97
      if (!node.children![alphabetIndex]) {
        const newNode = new TrieNode(null);
        node.children![alphabetIndex] = newNode;
      }
      node = node.children![alphabetIndex];
      node.value = value;
    }
  }


}