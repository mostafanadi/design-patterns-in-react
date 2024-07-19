import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { renderToString } from "react-dom/server";
import { BinarySearchTree, BinaryTreeNode } from "./class";

type Props = {};

export default function BinarySearchTreeComponent({ }: Props) {
  useEffect(() => {
    const p = new BinarySearchTree(666);
    p.add(524);
    p.add(351);
    p.add(756);
    p.add(965);
    p.remove(756)
    // const w = p.find(965)
    // p.find(965)
    // p.find("call-off-dute");
    // console.log(w);
    console.log(p);
  }, []);
  return (
    <>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(BinarySearchTree.toString())}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(BinaryTreeNode.toString())}
      </SyntaxHighlighter>
    </>
  );
}
