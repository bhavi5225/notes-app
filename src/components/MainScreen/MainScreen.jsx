import React from 'react';
import { BiLockAlt } from 'react-icons/bi';
import './MainScreen.css';
import Plus from '../../assets/plus.png'; // Path to the blue "+" icon
import MainImage from '../../assets/main screen image.png'; // Path to the main center image

const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="sidebar">
        <h2>Pocket Notes</h2>
        <img src={Plus} alt="add image" className="add-icon" />
      </div>
      <div className="content">
        <img src={MainImage} alt="main image" className="main-image" />
        <div className="main-text">
          <h1>Pocket Notes</h1>
          <p>Send and receive messages without keeping your phone online.</p>
          <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
          </p>
        </div>
        <div className="encryption">
          <BiLockAlt className="lock-icon" />
          <span>end-to-end encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
