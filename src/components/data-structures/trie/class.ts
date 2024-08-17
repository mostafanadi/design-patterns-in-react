export class TrieNode {
  constructor(
    public children: { [key: string]: TrieNode } = {},
    public isEndOfWord: boolean = false
  ) {}
}

export class Trie {
  constructor(public root: TrieNode = new TrieNode()) {}

  insert(word: string) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word: string) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix: string) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}

const trie = new Trie();
trie.insert("Mostafa");
console.log(trie.search("mostafa"));
// Optional export
