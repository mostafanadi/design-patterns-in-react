import React, { useState } from 'react';
import { Editor, EditorMemento } from './originator';

// Define Editor and Memento classes here...

const Memento: React.FC = () => {
  const [editor,] = useState(new Editor());
  const [history, setHistory] = useState<EditorMemento[]>([]);
  const [, setDate] = useState(Date.now())

  const handleType = (text: string) => {
    editor.type(text);
    setDate(Date.now())
  };

  const handleSave = () => {
    const currentState = editor.save();
    setHistory([...history, currentState]);
  };

  const handleUndo = () => {
    setDate(Date.now())
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      editor.restore(previousState);
      setHistory(history.slice(0, history.length - 1));
    }
  };

  return (
    <div>
      <textarea
        value={editor.getContent()}
        onChange={(e) => handleType(e.target.value)}
        style={{ width: '300px', height: '200px' }}
      />
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
};

export default Memento;
