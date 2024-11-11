
import React, { useState } from 'react';
import Notes from './components/Notes/Notes';
import MainScreen from './components/MainScreen/MainScreen';
import GroupPopup from './components/GroupPopup/GroupPopup';
import Group from './components/Group/Group';
import './App.css';
import './index.css';

function App() {
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const createGroup = (newGroup) => {
    setGroups([...groups,newGroup]);
    setCurrentGroup(newGroup);
  };

  return (
    <div className="app-container">
      <MainScreen />    
      <Group
        groups={groups}
        currentGroup={currentGroup}
        setCurrentGroup={setCurrentGroup}
      />
      {currentGroup && <Notes currentGroup={currentGroup} />}
      {isPopupOpen && (
        <GroupPopup
          onClose={() => setIsPopupOpen(false)}
          createGroup={createGroup}
          existingGroups={groups}
        />
      )}
    </div>
  );
}
export default App;

