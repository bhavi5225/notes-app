
import React from 'react';
import './Group.css';

const Group = ({ groups, currentGroup, setCurrentGroup }) => {
  return (
    <div className="group-list">
      {groups.map(group => (
        <div
          key={group.name}
          className={`group-item ${currentGroup?.name === group.name ? 'active' : ''}`}
          onClick={() => setCurrentGroup(group)}
        >
          <div className="color-circle" style={{ backgroundColor: group.color }}>
            <span className="initials">{group.initials}</span>
          </div>
          <span className="group-name">{group.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Group;
