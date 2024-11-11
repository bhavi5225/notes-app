import React, { useState, useEffect } from 'react';
import { BiSolidLock } from "react-icons/bi";
import PlusImage from '../../assets/plus.png';
import MainImage from '../../assets/main screen image.png';
import './MainScreen.css';
import GroupPopup from '../GroupPopup/GroupPopup';
import Notes from "../Notes/Notes";
import { FiArrowLeft } from "react-icons/fi";

const MainScreen = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [groups, setGroups] = useState(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    return storedGroups;
  });
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the mobile breakpoint here
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, [groups]);

  const togglePopup = () => {
    setIsPopupOpen(prevState => !prevState);
  };

  const addGroup = (newGroup) => {
    if (!groups.some(group => group.name === newGroup.name)) {
      setGroups([...groups, newGroup]);
    }
  };

  const handleGroupSelection = (group) => {
    setSelectedGroup(group);
  };

  const handleBackClick = () => {
    setSelectedGroup(null); 
  };

  return (
    <div className="main-screen">
      <div className={`sidebar ${isMobile && selectedGroup ? 'mobile-sidebar' : ''}`}>
        <h2>Pocket Notes</h2>
        <div className="groups-list">
          {groups.map((group, index) => (
            <div
              key={index}
              className={`group-item ${selectedGroup === group.name ? 'active' : ''}`}
              onClick={() => handleGroupSelection(group.name)}
            >
              <span className="group-initials" style={{ backgroundColor: group.color }}>{group.initials}</span>
              <span className="group-name">{group.name}</span>
            </div>
          ))}
        </div>
        <img 
          src={PlusImage} 
          className="add-icon" 
          onClick={togglePopup} 
        />
      </div>

      <div className={`content ${isMobile && selectedGroup ? 'mobile-content' : ''}`}>
        {!selectedGroup ? (
          <>
            <img src={MainImage} alt="main" className="main-image" />
            <div className="main-text">
              <h1>Pocket Notes</h1>
              <p>Send and receive messages without keeping your phone online.</p>
              <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
            </div>
            <div className="encryption">
              <BiSolidLock className="lock-icon" />
              <span>end-to-end encrypted</span>
            </div>
          </>
        ) : (
          <>
            {isMobile && (
              <div className="back-arrow-container">
                <FiArrowLeft className="back-arrow" onClick={handleBackClick} />
              </div>
            )}
            <Notes selectedGroup={selectedGroup} />
          </>
        )}
      </div>

      {isPopupOpen && <GroupPopup onClose={togglePopup} addGroup={addGroup} />}
    </div>
  );
};

export default MainScreen;
