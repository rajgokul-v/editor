import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const SyntaxHighlighterComponent = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={atomOneDark}>
      {value ?? ''}
    </SyntaxHighlighter>
  )
}

export default SyntaxHighlighterComponent
