
// import React, { useState, useEffect } from 'react';
// import { BiSolidLock } from "react-icons/bi";
// import PlusImage from '../../assets/plus.png'; // Import your custom plus image
// import MainImage from '../../assets/main screen image.png'; // Import the main center image
// import './MainScreen.css';
// import GroupPopup from '../GroupPopup/GroupPopup'; // Import the popup component

// const MainScreen = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [groups, setGroups] = useState(() => {
//     // Load groups from localStorage on component mount
//     const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
//     return storedGroups;
//   });

//   // Save groups to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('groups', JSON.stringify(groups));
//   }, [groups]);

//   // Toggle popup visibility
//   const togglePopup = () => {
//     setIsPopupOpen((prevState) => !prevState);
//   };

//   // Function to add a new group
//   const addGroup = (newGroup) => {
//     if (!groups.some(group => group.name === newGroup.name)) {
//       setGroups([...groups, newGroup]);
//     }
//   };

//   return (
//     <div className="main-screen">
//       <div className="sidebar">
//         <h2>Pocket Notes</h2>
//         <div className="groups-list">
//           {groups.map((group, index) => (
//             <div key={index} className="group-item">
//               <span className="group-initials" style={{ backgroundColor: group.color }}>{group.initials}</span>
//               <span className="group-name">{group.name}</span>
//             </div>
//           ))}
//         </div>
//         <img 
//           src={PlusImage} 
//           // alt="add group" 
//           className="add-icon" 
//           onClick={togglePopup} 
//         />
//       </div>

//       <div className="content">
//         <img src={MainImage} alt="main" className="main-image" />
//         <div className="main-text">
//           <h1>Pocket Notes</h1>
//           <p>Send and receive messages without keeping your phone online.</p>
//           <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
//         </div>
//         <div className="encryption">
//           <BiSolidLock className="lock-icon" />
//           <span>end-to-end encrypted</span>
//         </div>
//       </div>

//       {/* Conditionally render the popup */}
//       {isPopupOpen && <GroupPopup onClose={togglePopup} addGroup={addGroup} />}
//     </div>
//   );
// };

// export default MainScreen;


// import React, { useState, useEffect } from 'react';
// import { BiSolidLock } from "react-icons/bi";
// import PlusImage from '../../assets/plus.png'; // Import your custom plus image
// import MainImage from '../../assets/main screen image.png'; // Import the main center image
// import './MainScreen.css';
// import GroupPopup from '../GroupPopup/GroupPopup'; // Import the popup component
// import Notes from "../Notes/Notes"; // Import Notes component

// const MainScreen = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [groups, setGroups] = useState(() => {
//     // Load groups from localStorage on component mount
//     const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
//     return storedGroups;
//   });
//   const [selectedGroup, setSelectedGroup] = useState(groups.length > 0 ? groups[0].name : ""); // Set initial selected group

//   // Save groups to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('groups', JSON.stringify(groups));
//   }, [groups]);

//   // Toggle popup visibility
//   const togglePopup = () => {
//     setIsPopupOpen((prevState) => !prevState);
//   };

//   // Function to add a new group
//   const addGroup = (newGroup) => {
//     if (!groups.some(group => group.name === newGroup.name)) {
//       setGroups([...groups, newGroup]);
//     }
//   };

//   // Function to handle group selection
//   const handleGroupSelection = (group) => {
//     setSelectedGroup(group);
//   };

//   return (
//     <div className="main-screen">
//       <div className="sidebar">
//         <h2>Pocket Notes</h2>
//         <div className="groups-list">
//           {groups.map((group, index) => (
//             <div
//               key={index}
//               className="group-item"
//               onClick={() => handleGroupSelection(group.name)} // Set selected group on click
//             >
//               <span className="group-initials" style={{ backgroundColor: group.color }}>{group.initials}</span>
//               <span className="group-name">{group.name}</span>
//             </div>
//           ))}
//         </div>
//         <img 
//           src={PlusImage} 
//           className="add-icon" 
//           onClick={togglePopup} 
//         />
//       </div>

//       <div className="content">
//         <img src={MainImage} alt="main" className="main-image" />
//         <div className="main-text">
//           <h1>Pocket Notes</h1>
//           <p>Send and receive messages without keeping your phone online.</p>
//           <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
//         </div>
//         <div className="encryption">
//           <BiSolidLock className="lock-icon" />
//           <span>end-to-end encrypted</span>
//         </div>
//       </div>

//       {/* Conditionally render the popup */}
//       {isPopupOpen && <GroupPopup onClose={togglePopup} addGroup={addGroup} />}

//       {/* Render the Notes component for the selected group */}
//       <Notes selectedGroup={selectedGroup} />
      
//     </div>
//   );
// };

// export default MainScreen;




import React, { useState, useEffect } from 'react';
import { BiSolidLock } from "react-icons/bi";
import PlusImage from '../../assets/plus.png';
import MainImage from '../../assets/main screen image.png';
import './MainScreen.css';
import GroupPopup from '../GroupPopup/GroupPopup';
import Notes from "../Notes/Notes";

const MainScreen = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [groups, setGroups] = useState(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    return storedGroups;
  });
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
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

  return (
    <div className="main-screen">
      <div className="sidebar">
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

      <div className="content">
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
          <Notes selectedGroup={selectedGroup} />
        )}
      </div>

      {isPopupOpen && <GroupPopup onClose={togglePopup} addGroup={addGroup} />}
    </div>
  );
};

export default MainScreen;
