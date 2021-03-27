import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighterComponent from './SyntaxHighlighterComponent'
import './app.css'
import gfm from 'remark-gfm'

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
          plugins={[gfm]}
          renderers={{ code: SyntaxHighlighterComponent }}
        />
      </div>
    </div>
  )
}

export default App
