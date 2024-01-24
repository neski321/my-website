import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Resume from './Resume';
import Tab from './tab';
import AboutMe from './AboutMe';
import ProjectDetails from './ProjectDetails';
import ProjectsGrid from './ProjectsGrid';
import Home from './Home';

const projects = [
  {
    title: 'Online Art gallery',
  },
  {
    title: 'Ticket Manager App',
  },
  {
    title: 'Positive messaging board app',
  },
  {
    title: 'Avoiding game',
  }
];


const Portfolio = () => {
  return (
    <Router>
      <div className="portfolio">        
        <div className="tabs">
          <Link to="/">
            <Tab label="Home" to="/" />&nbsp;&nbsp;
          </Link>
          <Link to="/about">
            <Tab label="About Me" to="/about" />&nbsp;&nbsp;
          </Link>
          <Link to="/projects">
            <Tab label="Projects" to="/projects" />&nbsp;&nbsp;
          </Link>
          <Link to="/resume">
            <Tab label="Resume" to="/resume" />                
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsGrid projects={projects} />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Portfolio;