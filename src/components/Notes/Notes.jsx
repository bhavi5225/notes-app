import React, { useState, useEffect } from 'react';
import './Notes.css';
import { BsFillSendFill } from 'react-icons/bs';

const Notes = ({ currentGroup }) => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem(currentGroup.name)) || [];
    setNotes(savedNotes);
  }, [currentGroup]);

  const handleAddNote = () => {
    if (!noteInput.trim()) return;

    const newNote = {
      text: noteInput,
      date: new Date().toLocaleString(),
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setNoteInput('');

    localStorage.setItem(currentGroup.name, JSON.stringify(updatedNotes));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddNote();
    }
  };

  return (
    <div className="notes-section">
      <h2>{currentGroup.name}</h2>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note-item">
            <p>{note.text}</p>
            <span>{note.date}</span>
          </div>
        ))}
      </div>
      <div className="note-input">
        <textarea
          placeholder="Type your note..."
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleAddNote}
          disabled={!noteInput.trim()}
          className={`send-icon ${!noteInput.trim() ? 'disabled' : ''}`}
        >
          <BsFillSendFill />
        </button>
      </div>
    </div>
  );
};

export default Notes;
