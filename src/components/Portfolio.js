import React, { useState } from 'react';
import Project from './Project';
import Resume from './Resume';
import Tab from './tab';

const projects = [
  {
    title: 'Online Art gallery',
    description: 'A web-based online art gallery database using ReactJS and mongoDB for user authentication and data management.',
    link: 'https://assign6-pvmw.vercel.app/',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    link: 'https://example.com/project2',
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3',
    link: 'https://example.com/project3',
  }
  // Add more projects as needed
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <div className="portfolio">
      <div className="tabs">
        <Tab label="Projects" onClick={() => handleTabClick('Projects')} />&nbsp;&nbsp;
        <Tab label="Resume" onClick={() => handleTabClick('Resume')} />
      </div>
      {activeTab === 'Projects' && (
        <div className="projects-grid">
          
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      )}
      {activeTab === 'Resume' && <Resume />}
    </div>
  );
};

export default Portfolio;