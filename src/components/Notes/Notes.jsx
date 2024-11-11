import React, { useState, useEffect } from "react";
import { BiSolidSend } from "react-icons/bi";
import "./Notes.css";

const Notes = ({ selectedGroup }) => {
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [groupDetails, setGroupDetails] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const groupNotes = storedNotes.filter((note) => note.group === selectedGroup);
    setNotesList(groupNotes);

    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    const groupInfo = storedGroups.find(group => group.name === selectedGroup);
    setGroupDetails(groupInfo);
  }, [selectedGroup]);

  const saveNote = () => {
    const newNote = {
      group: selectedGroup,
      content: note,
      date: formatDateTime(new Date()),
    };

    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    storedNotes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(storedNotes));

    setNotesList((prev) => [...prev, newNote]);
    setNote("");
  };

  const formatDateTime = (date) => {
    const formattedDate = date.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const [datePart, timePart] = formattedDate.split(", ");
    const formattedTimePart = timePart.toUpperCase();
    return `${datePart} • ${formattedTimePart}`;
  };

  const handleInputChange = (event) => {
    setNote(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      saveNote();
    }
  };

  return (
    <div className="notes-container">
      {groupDetails && (
        <div className="group-header">
          <span
            className="group-initials"
            style={{ backgroundColor: groupDetails.color }}
          >
            {groupDetails.initials}
          </span>
          <span className="group-name">{groupDetails.name}</span>
        </div>
      )}

      <div className="notes-list">
        {notesList.map((noteItem, index) => (
          <div key={index} className="note-item">
            <p>{noteItem.content}</p>
            <small>{noteItem.date}</small>
          </div>
        ))}
      </div>
      <div className="input-area">
        <div className="textarea-wrapper">
          <textarea
            className="text"
            value={note}
            onChange={handleInputChange}
            placeholder="Enter your text here..........."
            rows="4"
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={saveNote}
            disabled={!note.trim()}
            className="send-button"
          >
            <BiSolidSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;

