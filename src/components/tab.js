// src/components/Tab.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Tab = ({ label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`tab ${isActive ? 'active' : ''}`}>
      {label}
    </Link>
  );
};

export default Tab;
