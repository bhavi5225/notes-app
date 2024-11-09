


// import React, { useState, useEffect } from "react";
// import { FaPaperPlane } from "react-icons/fa"; // WhatsApp-like send icon
// import "./Notes.css";

// const Notes = ({ selectedGroup }) => {
//   const [note, setNote] = useState("");
//   const [notesList, setNotesList] = useState([]);

//   // Get group details from localStorage or props
//   const [groupDetails, setGroupDetails] = useState(null);

//   useEffect(() => {
//     // Fetch notes from localStorage when the component is mounted or the selected group changes
//     const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     const groupNotes = storedNotes.filter((note) => note.group === selectedGroup);
//     setNotesList(groupNotes);

//     // Fetch group details for displaying the colored circle and initials
//     const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
//     const groupInfo = storedGroups.find(group => group.name === selectedGroup);
//     setGroupDetails(groupInfo);
//   }, [selectedGroup]);

//   // Save note to localStorage with formatted date
//   const saveNote = () => {
//     const newNote = {
//       group: selectedGroup,
//       content: note,
//       // Format the date and time here
//       date: formatDateTime(new Date()),
//     };

//     const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     storedNotes.push(newNote);
//     localStorage.setItem("notes", JSON.stringify(storedNotes));

//     // Update the state and clear the input
//     setNotesList((prev) => [...prev, newNote]);
//     setNote("");
//   };

//   // Function to format date and time in the desired format
//   const formatDateTime = (date) => {
//     // Format the date and time as "9 Mar 2023 • 10:10 AM"
//     const formattedDate = date.toLocaleString("en-GB", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });

//     // Insert the round thick dot between date and time, and make AM/PM uppercase
//     const [datePart, timePart] = formattedDate.split(", ");
//     const formattedTimePart = timePart.toUpperCase(); // Ensure AM/PM is in uppercase
//     return `${datePart} • ${formattedTimePart}`;
//   };

//   // Handle input change
//   const handleInputChange = (event) => {
//     setNote(event.target.value);
//   };

//   return (
//     <div className="notes-container">
//       {/* Group name with colored circle and initials */}
//       {groupDetails && (
//         <div className="group-header">
//           <span
//             className="group-initials"
//             style={{ backgroundColor: groupDetails.color }}
//           >
//             {groupDetails.initials}
//           </span>
//           <span className="group-name">{groupDetails.name}</span>
//         </div>
//       )}

//       {/* Display saved notes below the group name */}
//       <div className="notes-list">
//         {notesList.length > 0 ? (
//           notesList.map((noteItem, index) => (
//             <div key={index} className="note-item">
//               <p>{noteItem.content}</p>
//               <small>{noteItem.date}</small> {/* Displays the formatted date */}
//             </div>
//           ))
//         ) : (
//           <p>No notes yet for this group.</p>
//         )}
//       </div>

//       {/* Input area for the note */}
//       <div className="input-area">
//         <div className="textarea-wrapper">
//           <textarea
//             className="text"
//             value={note}
//             onChange={handleInputChange}
//             placeholder="Enter your text here..........."
//             rows="4"
//           />
//           <button
//             onClick={saveNote}
//             disabled={!note.trim()}
//             className="send-button"
//           >
//             <FaPaperPlane />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notes;


import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa"; // WhatsApp-like send icon
import "./Notes.css";

const Notes = ({ selectedGroup }) => {
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);

  // Get group details from localStorage or props
  const [groupDetails, setGroupDetails] = useState(null);

  useEffect(() => {
    // Fetch notes from localStorage when the component is mounted or the selected group changes
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const groupNotes = storedNotes.filter((note) => note.group === selectedGroup);
    setNotesList(groupNotes);

    // Fetch group details for displaying the colored circle and initials
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    const groupInfo = storedGroups.find(group => group.name === selectedGroup);
    setGroupDetails(groupInfo);
  }, [selectedGroup]);

  // Save note to localStorage with formatted date
  const saveNote = () => {
    const newNote = {
      group: selectedGroup,
      content: note,
      // Format the date and time here
      date: formatDateTime(new Date()),
    };

    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    storedNotes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(storedNotes));

    // Update the state and clear the input
    setNotesList((prev) => [...prev, newNote]);
    setNote("");
  };

  // Function to format date and time in the desired format
  const formatDateTime = (date) => {
    // Format the date and time as "9 Mar 2023 • 10:10 AM"
    const formattedDate = date.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Insert the round thick dot between date and time, and make AM/PM uppercase
    const [datePart, timePart] = formattedDate.split(", ");
    const formattedTimePart = timePart.toUpperCase(); // Ensure AM/PM is in uppercase
    return `${datePart} • ${formattedTimePart}`;
  };

  // Handle input change
  const handleInputChange = (event) => {
    setNote(event.target.value);
  };

  // Handle "Enter" key press to save the note
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      // Prevent the default action to avoid creating a new line
      event.preventDefault();
      saveNote();
    }
  };

  return (
    <div className="notes-container">
      {/* Group name with colored circle and initials */}
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

      {/* Display saved notes below the group name */}
      <div className="notes-list">
        {notesList.map((noteItem, index) => (
          <div key={index} className="note-item">
            <p>{noteItem.content}</p>
            <small>{noteItem.date}</small> {/* Displays the formatted date */}
          </div>
        ))}
      </div>

      {/* Input area for the note */}
      <div className="input-area">
        <div className="textarea-wrapper">
          <textarea
            className="text"
            value={note}
            onChange={handleInputChange}
            placeholder="Enter your text here..........."
            rows="4"
            onKeyDown={handleKeyDown} // Attach keydown event
          />
          <button
            onClick={saveNote}
            disabled={!note.trim()}
            className="send-button"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
