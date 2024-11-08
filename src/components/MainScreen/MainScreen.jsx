
// import React, { useState } from 'react';
// import { BiSolidLock } from "react-icons/bi";
// import PlusImage from '../../assets/plus.png'; // Import your custom plus image
// import MainImage from '../../assets/main screen image.png'; // Import the main center image
// import './MainScreen.css';
// import GroupPopup from '../GroupPopup/GroupPopup'; // Import the popup component

// const MainScreen = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [groups, setGroups] = useState([]); // State to manage created groups

//   // Toggle popup visibility
//   const togglePopup = () => {
//     setIsPopupOpen((prevState) => !prevState);
//   };

//   // Function to add a new group
//   const addGroup = (newGroup) => {
//     if (!groups.some(group => group.name === newGroup.name)) {
//       setGroups([...groups, newGroup]);
//     } else {
//       alert("Group with this name already exists.");
//     }
//   };

//   return (
//     <div className="main-screen">
//       <div className="sidebar">
//         <h2>Pocket Notes</h2>
//         <div className="groups-list">
//           {groups.map((group, index) => (
//             <div key={index} className="group-item">
//               <span className="group-initials">{group.initials}</span>
//               <span className="group-name">{group.name}</span>
//             </div>
//           ))}
//         </div>
//         {/* Custom "+" icon to trigger the popup */}
//         <img 
//           src={PlusImage} 
//           alt="add group" 
//           className="add-icon" 
//           onClick={togglePopup} 
//         />
//       </div>

//       <div className="content">
//         <img src={MainImage} alt="main image" className="main-image" />
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
import React, { useState, useEffect } from 'react';
import { BiSolidLock } from "react-icons/bi";
import PlusImage from '../../assets/plus.png'; // Import your custom plus image
import MainImage from '../../assets/main screen image.png'; // Import the main center image
import './MainScreen.css';
import GroupPopup from '../GroupPopup/GroupPopup'; // Import the popup component

const MainScreen = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [groups, setGroups] = useState(() => {
    // Load groups from localStorage on component mount
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    return storedGroups;
  });

  // Save groups to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  // Toggle popup visibility
  const togglePopup = () => {
    setIsPopupOpen((prevState) => !prevState);
  };

  // Function to add a new group
  const addGroup = (newGroup) => {
    if (!groups.some(group => group.name === newGroup.name)) {
      setGroups([...groups, newGroup]);
    }
  };

  return (
    <div className="main-screen">
      <div className="sidebar">
        <h2>Pocket Notes</h2>
        <div className="groups-list">
          {groups.map((group, index) => (
            <div key={index} className="group-item">
              <span className="group-initials" style={{ backgroundColor: group.color }}>{group.initials}</span>
              <span className="group-name">{group.name}</span>
            </div>
          ))}
        </div>
        <img 
          src={PlusImage} 
          // alt="add group" 
          className="add-icon" 
          onClick={togglePopup} 
        />
      </div>

      <div className="content">
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
      </div>

      {/* Conditionally render the popup */}
      {isPopupOpen && <GroupPopup onClose={togglePopup} addGroup={addGroup} />}
    </div>
  );
};

export default MainScreen;


// import React, { useState } from 'react';
// import { BiSolidLock } from "react-icons/bi";
// import PlusImage from '../../assets/plus.png'; // Import your custom plus image
// import MainImage from '../../assets/main screen image.png'; // Import the main center image
// import './MainScreen.css';
// import GroupPopup from '../GroupPopup/GroupPopup'; // Import the popup component

// const MainScreen = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [groups, setGroups] = useState([]); // State to manage created groups

//   // Toggle popup visibility
//   const togglePopup = () => {
//     setIsPopupOpen((prevState) => !prevState);
//   };

//   // Function to add a new group
//   const addGroup = (newGroup) => {
//     if (!groups.some(group => group.name === newGroup.name)) {
//       setGroups([...groups, newGroup]);
//     } else {
//       alert("Group with this name already exists.");
//     }
//   };

//   return (
//     <div className="main-screen">
//       <div className="sidebar">
//         <h2>Pocket Notes</h2>
//         <div className="groups-list">
//           {groups.map((group, index) => (
//             <div key={index} className="group-item">
//               <span className="group-initials">{group.initials}</span>
//               <span className="group-name">{group.name}</span>
//             </div>
//           ))}
//         </div>
//         {/* Custom "+" icon to trigger the popup */}
//         <img 
//           src={PlusImage} 
//           alt="add group" 
//           className="add-icon" 
//           onClick={togglePopup} 
//         />
//       </div>

//       <div className="content">
//         <img src={MainImage} alt="main image" className="main-image" />
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