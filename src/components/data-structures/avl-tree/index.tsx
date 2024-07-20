import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { renderToString } from "react-dom/server";
import { AVLTree, AVLTreeNode } from "./class";

type Props = {};

export default function AVLTreeComponent({}: Props) {
  useEffect(() => {
    const p = new AVLTree(10);
    p.add(5);
    p.add(2);
    p.add(6);
    p.add(20);
    p.add(25);
    p.add(23);
    p.add(28);
    p.add(26);
    p.add(39);

    // const w = p.find(965)
    // p.find(965)
    // p.find("call-off-dute");
    // console.log(w);
    console.log(p);
  }, []);
  return (
    <>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(AVLTree.toString())}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(AVLTreeNode.toString())}
      </SyntaxHighlighter>
    </>
  );
}
