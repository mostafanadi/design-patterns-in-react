import { useEffect } from "react";
import { Tree, TreeNode } from "./class";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { renderToString } from "react-dom/server";

type Props = {};

export default function TreeComponent({ }: Props) {
  useEffect(() => {
    const p = new Tree("/");
    p.add("games/call-off-dute/bin.exe");
    // p.find("call-off-dute");
    console.log(p.findBreadth("call-off-dute"));
  }, []);
  return (
    <>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(Tree.toString())}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(TreeNode.toString())}
      </SyntaxHighlighter>
    </>
  );
}
