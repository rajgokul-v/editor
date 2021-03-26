import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighterComponent from './SyntaxHighlighterComponent'
import './app.css'

function App() {
  const [editorInput, setEditorInput] = useState('')

  return (
    <div className="content">
      <div className="editor">
        <textarea
          autoFocus
          id="editor"
          value={editorInput}
          onChange={(e) => setEditorInput(e.target.value)}
        />
      </div>
      <div className="preview">
        <ReactMarkdown
          source={editorInput}
          renderers={{ code: SyntaxHighlighterComponent }}
        />
      </div>
    </div>
  )
}

export default App
