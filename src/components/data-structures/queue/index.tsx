import { renderToString } from 'react-dom/server';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { QueueArray, QueueLinkedList } from './class';
type Props = {}

export default function QueueComponent({ }: Props) {
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(QueueArray.toString())}
      </SyntaxHighlighter>
      <h2>Stack with LinkedList</h2>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {renderToString(QueueLinkedList.toString())}
      </SyntaxHighlighter>
    </div>
  )
}