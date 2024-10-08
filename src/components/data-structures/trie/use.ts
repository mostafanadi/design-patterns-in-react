import { Trie, TrieNode } from "./class";

const trie = new Trie();

// insert all of the article titles into the trie
const articleTitles = [
  "javaScript Basics",
  "Advanced javaScript Techniques",
  "Introduction to React",
  "Getting Started with Node.js",
];
articleTitles.forEach((title) => trie.insert(title.toLowerCase()));

// search for article titles that start with the user's query
const userInput = "jav";
const suggestions = [];
let node = trie.root;

for (let i = 0; i < userInput.length; i++) {
  const char = userInput[i];
  if (!node.children[char]) {
    break;
  }
  node = node.children[char];
}

if (node.isEndOfWord) {
  suggestions.push(userInput);
}

function findSuggestions(node: TrieNode, prefix: string) {
  if (node.isEndOfWord) {
    suggestions.push(prefix);
  }
  for (const [char, child] of Object.entries(node.children)) {
    findSuggestions(child, prefix + char);
  }
}

findSuggestions(node, userInput);

console.log(suggestions); // ['javascript basics', 'advanced javascript techniques']
