import React, { useState } from 'react';
import './Toggle.css';

const Toggle = ({ label = 'Toggle', onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) {
      onToggle(newState); // Notify parent
    }
  };

  return (
    <div className="toggle-wrapper">
      <label className="toggle-label">{label}</label>
      <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
        <div className="toggle-circle" />
      </div>
    </div>
  );
};

export default Toggle;