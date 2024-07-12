import { renderToString } from 'react-dom/server';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { LinkedList } from '../linked-list/class';
type Props = {}

export default function LinkedListComponent({ }: Props) {
  return (
    <SyntaxHighlighter language="javascript" style={a11yDark}>
      {renderToString(LinkedList.toString())}
    </SyntaxHighlighter>
  )
}