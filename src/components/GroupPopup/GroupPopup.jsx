import React, { useState } from 'react';
import './GroupPopup.css';

const GroupPopup = ({ onClose, addGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#B38BFA");
  const COLORS = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

  const getInitials = (name) => {
    const words = name.trim().split(" ");
    if (words.length >= 2) {
      return words[0][0].toUpperCase() + words[1][0].toUpperCase();
    }
    return name.charAt(0).toUpperCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const words = groupName.trim().split(" ");
    if (words.length < 2) return; 

    const formattedGroupName = groupName
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    const initials = getInitials(formattedGroupName);

    const newGroup = {
      name: formattedGroupName,
      initials,
      color: selectedColor,
    };

    addGroup(newGroup);
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <h2>Create New Group</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="groupName">Group Name</label>
            <input 
              type="text"
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name"
              required
            />
          </div>
          <div className="color-picker">
            <label>Choose Colour</label>
            <div className="color-options">
              {COLORS.map(color => (
                <span
                  key={color}
                  className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
          <button type="submit" className="create-group-btn">Create</button>
        </form>
      </div>
    </div>
  );
};

export default GroupPopup;


