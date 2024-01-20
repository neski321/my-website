import React from 'react';

const Tab = ({ label, onClick, isActive }) => (
  <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    {label}
  </button>
);

export default Tab;