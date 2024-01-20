import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Project from './Project';
import Resume from './Resume';
import Tab from './tab';
import AboutMe from './AboutMe';

const projects = [
  {
    title: 'Online Art gallery',
    description: 'A web-based online art gallery database using ReactJS and mongoDB for user authentication and data management.',
    link: 'https://assign6-pvmw.vercel.app/',
  },
  {
    title: 'Ticket Manager App',
    description: 'A ticket management app that uses python and django databse for user authentication and data management.',
    link: 'https://example.com/project2',
  },
  {
    title: 'Positive messaging board app',
    description: 'a simple web page that utilizes python and flask to give users an opportunity to post inspirational messages and share them with their friends.',
    link: 'https://example.com/project3',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <Router>
      <div className="portfolio">
        <div className="tabs">
          <Link to="/about">
            <Tab label="About Me" />&nbsp;&nbsp;
          </Link>
          <Link to="/projects">
            <Tab label="Projects" />&nbsp;&nbsp;
          </Link>
          <Link to="/resume">
            <Tab label="Resume" />                
          </Link>
        </div>
        <Routes>
          <Route path="/projects" element={<ProjectsGrid projects={projects} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
};

const ProjectsGrid = ({ projects }) => (
  <div className="projects-grid">
    {projects.map((project, index) => (
      <React.Fragment key={index}>
        <Project {...project} />
      </React.Fragment>
    ))}
  </div>
);

export default Portfolio;