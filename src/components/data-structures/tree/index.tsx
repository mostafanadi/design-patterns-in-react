import { useEffect, useState } from "react";
import { Tree, TreeNode } from "./class";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { renderToString } from "react-dom/server";
import Child from "./child";

type Props = {};

export default function TreeComponent({}: Props) {
  const [myState, setMyState] = useState(0);
  // useEffect(() => {
  //   const p = new Tree("/");
  //   p.add("games/call-off-dute/bin.exe");
  //   // p.find("call-off-dute");
  //   console.log(p.findBreadth("call-off-dute"));
  // }, []);

  return (
    <>
      <Child />
      <button onClick={() => setMyState(Math.random())}>{myState}</button>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(Tree.toString())}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(TreeNode.toString())}
      </SyntaxHighlighter>
    </>
  );
}
