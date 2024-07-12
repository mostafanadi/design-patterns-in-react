import { renderToString } from 'react-dom/server';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { StackArray, StackLinkedList } from './class';
type Props = {}

export default function StackComponent({ }: Props) {
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(StackArray.toString())}
      </SyntaxHighlighter>
      <h2>Stack with LinkedList</h2>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(StackLinkedList.toString())}
      </SyntaxHighlighter>
    </div>
  )
}